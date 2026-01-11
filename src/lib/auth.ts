import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const COOKIE_NAME = "medlaw_admin";
const secret = new TextEncoder().encode(process.env.AUTH_JWT_SECRET!);

export async function setAdminSession() {
  const token = await new SignJWT({ sub: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secret);

  (await cookies()).set(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
  });
}

export async function clearAdminSession() {
  (await
    cookies()).delete(COOKIE_NAME);
  (await cookies()).set(COOKIE_NAME, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });
}

export async function requireAdmin() {
  const token = (await cookies()).get(COOKIE_NAME)?.value;
  if (!token) return false;

  try {
    const { payload } = await jwtVerify(token, secret);
    return payload.sub === "admin";
  } catch {
    return false;
  }
}
