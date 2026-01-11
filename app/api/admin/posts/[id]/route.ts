import { prisma } from "@/src/lib/prisma";
import { requireAdmin } from "@/src/lib/auth";

type Ctx = { params: Promise<{ id: string }> };

export async function GET(_: Request, ctx: Ctx) {
  if (!(await requireAdmin())) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await ctx.params;

  const post = await prisma.post.findUnique({ where: { id } });
  if (!post) return Response.json({ error: "Not found" }, { status: 404 });

  return Response.json(post);
}

export async function PUT(req: Request, ctx: Ctx) {
  if (!(await requireAdmin())) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await ctx.params;
  const body = await req.json();

  const post = await prisma.post.update({
    where: { id },
    data: {
      title: String(body.title ?? "").trim(),
      slug: String(body.slug ?? "").trim(),
      excerpt: body.excerpt ? String(body.excerpt).trim() : null,
      contentMd: String(body.contentMd ?? ""),
      published: Boolean(body.published),
      publishedAt: body.published ? new Date() : null,
    },
  });

  return Response.json(post);
}

export async function DELETE(_: Request, ctx: Ctx) {
  if (!(await requireAdmin())) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await ctx.params;

  await prisma.post.delete({ where: { id } });
  return Response.json({ ok: true });
}
