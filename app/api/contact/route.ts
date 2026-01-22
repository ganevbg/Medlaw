import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactBody = {
    name: string;
    email: string;
    phone?: string;
    message: string;
    turnstileToken: string;

    // honeypot
    website?: string;
};

function env(name: string) {
    const v = process.env[name];
    if (!v) throw new Error(`Missing env: ${name}`);
    return v;
}

// ---- Simple in-memory rate limit (per IP) ----
const RATE_WINDOW_MS = 60_000; // 1 min
const RATE_MAX = 5; // 5 req / min
const rateMap = new Map<string, { count: number; resetAt: number }>();

function rateLimit(ip: string) {
    const now = Date.now();
    const entry = rateMap.get(ip);

    if (!entry || now > entry.resetAt) {
        rateMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
        return { ok: true };
    }

    if (entry.count >= RATE_MAX) {
        return { ok: false, retryAfterSec: Math.ceil((entry.resetAt - now) / 1000) };
    }

    entry.count += 1;
    return { ok: true };
}

async function verifyTurnstile(token: string, remoteip?: string) {
    const secret = env("TURNSTILE_SECRET_KEY");
    const fd = new FormData();
    fd.append("secret", secret);
    fd.append("response", token);
    if (remoteip) fd.append("remoteip", remoteip);

    const resp = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        body: fd,
    });

    return (await resp.json()) as { success: boolean; "error-codes"?: string[] };
}

export async function POST(req: Request) {
    try {
        const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

        // rate limit (skip if unknown)
        if (ip !== "unknown") {
            const rl = rateLimit(ip);
            if (!rl.ok) {
                return NextResponse.json(
                    { error: "Too many requests", retryAfterSec: rl.retryAfterSec },
                    { status: 429 }
                );
            }
        }

        const body = (await req.json()) as Partial<ContactBody>;

        // honeypot: ако бот го попълни -> "тихо" приемаме
        if (body.website && body.website.trim().length > 0) {
            return NextResponse.json({ ok: true });
        }

        const name = (body.name ?? "").trim();
        const email = (body.email ?? "").trim();
        const phone = (body.phone ?? "").trim();
        const message = (body.message ?? "").trim();
        const token = (body.turnstileToken ?? "").trim();

        if (!name || !email || !message || !token) {
            return NextResponse.json({ error: "Missing fields" }, { status: 400 });
        }

        // sanity limits
        if (name.length > 120 || email.length > 200 || phone.length > 50 || message.length > 5000) {
            return NextResponse.json({ error: "Input too long" }, { status: 400 });
        }

        // Turnstile verify
        const ts = await verifyTurnstile(token, ip !== "unknown" ? ip : undefined);
        if (!ts.success) {
            return NextResponse.json({ error: "Captcha failed" }, { status: 403 });
        }

        // SMTP (Gmail)
        const transporter = nodemailer.createTransport({
            host: env("SMTP_HOST"),
            port: Number(env("SMTP_PORT")),
            secure: (process.env.SMTP_SECURE ?? "true").toLowerCase() === "true",
            auth: {
                user: env("SMTP_USER"),
                pass: env("SMTP_PASS"),
            },
            connectionTimeout: 10_000,
            greetingTimeout: 10_000,
            socketTimeout: 10_000,
        });

        const mailFrom = env("MAIL_FROM"); // must be your gmail
        const mailTo = env("MAIL_TO");

        await transporter.sendMail({
            from: mailFrom,
            to: mailTo,
            replyTo: email, // отговорът да отиде към човека
            subject: `New contact form: ${name}`,
            text: [
                `Name: ${name}`,
                `Email: ${email}`,
                phone ? `Phone: ${phone}` : `Phone: (none)`,
                "",
                "Message:",
                message,
            ].join("\n"),
        });

        return NextResponse.json({ ok: true });
    } catch (e) {
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}
