import { prisma } from "@/src/lib/prisma";
import { requireAdmin } from "@/src/lib/auth";

function slugify(s: string) {
  return s
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/(^-|-$)/g, "");
}

export async function POST(req: Request) {
  if (!(await requireAdmin())) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const title = String(body.title ?? "").trim();
  const contentMd = String(body.contentMd ?? "").trim();
  const excerpt = body.excerpt ? String(body.excerpt).trim() : null;
  const published = Boolean(body.published);

  if (!title || !contentMd) {
    return Response.json({ error: "Title and content are required" }, { status: 400 });
  }

  const slug = body.slug ? String(body.slug) : slugify(title);

  const post = await prisma.post.create({
    data: {
      title,
      slug,
      excerpt,
      contentMd,
      published,
      publishedAt: published ? new Date() : null,
    },
  });

  return Response.json(post);
}

export async function GET() {
  if (!(await requireAdmin())) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const posts = await prisma.post.findMany({
    orderBy: [{ createdAt: "desc" }],
    select: { id: true, title: true, slug: true, published: true, createdAt: true, updatedAt: true },
  });

  return Response.json(posts);
}
