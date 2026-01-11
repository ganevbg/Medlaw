import bcrypt from "bcryptjs";
import { setAdminSession } from "@/src/lib/auth";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  const u = String(username ?? "");
  const p = String(password ?? "");
  if (u !== process.env.ADMIN_USERNAME) {
    return Response.json({ error: "Невалидни данни за вход" }, { status: 401 });
  }

  const hash = process.env.ADMIN_PASSWORD_HASH!;
  const ok = await bcrypt.compare(p, hash);

  console.log("u:", username);
console.log("env user:", process.env.ADMIN_USERNAME);
console.log("hash len:", process.env.ADMIN_PASSWORD_HASH?.length);
console.log("hash starts:", process.env.ADMIN_PASSWORD_HASH?.slice(0, 4));

  if (!ok) return Response.json({ error: "Невалидни данни за вход" }, { status: 401 });

  await setAdminSession();
  return Response.json({ ok: true });
}
