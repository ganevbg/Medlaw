import { NextResponse } from "next/server";

const NAME = "medlaw_admin";

// helper: generate an expiry cookie string
function expireCookie(name: string, path: string, domain?: string) {
  // Max-Age=0 + Expires in the past => delete
  // SameSite=Lax to match common set; Secure only in prod
  const parts = [
    `${name}=`,
    `Path=${path}`,
    "HttpOnly",
    "SameSite=Lax",
    "Max-Age=0",
    "Expires=Thu, 01 Jan 1970 00:00:00 GMT",
  ];

  if (domain) parts.push(`Domain=${domain}`);
  if (process.env.NODE_ENV === "production") parts.push("Secure");

  return parts.join("; ");
}

export async function POST() {
  const res = NextResponse.json({ ok: true }, { status: 200 });

  // 1) default path
  res.headers.append("Set-Cookie", expireCookie(NAME, "/"));

  // 2) just in case it was set on /admin or /api (happens often)
  res.headers.append("Set-Cookie", expireCookie(NAME, "/admin"));
  res.headers.append("Set-Cookie", expireCookie(NAME, "/api"));

  // 3) domain variants (some tools set Domain=localhost)
  res.headers.append("Set-Cookie", expireCookie(NAME, "/", "localhost"));

  // prevent caching
  res.headers.set("Cache-Control", "no-store");

  return res;
}
