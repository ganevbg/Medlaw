import { requireAdmin } from "@/src/lib/auth";

export async function GET() {
  const isAdmin = await requireAdmin();
  return Response.json({ isAdmin }, { headers: { "Cache-Control": "no-store" } });
}
