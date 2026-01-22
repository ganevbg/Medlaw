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


  if (!ok) return Response.json({ error: "Невалидни данни за вход" }, { status: 401 });

  await setAdminSession();
  return Response.json({ ok: true });
}
