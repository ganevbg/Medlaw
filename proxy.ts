import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const isAdminArea =
    pathname.startsWith("/admin") || pathname.startsWith("/api/admin");

  if (!isAdminArea) return NextResponse.next();

  // allow login page and login API
  if (pathname === "/admin/login" || pathname === "/api/auth/login") {
    return NextResponse.next();
  }

  const token = req.cookies.get("medlaw_admin")?.value;
  if (!token) {
    const url = req.nextUrl.clone();
    url.pathname = "/admin/login";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
