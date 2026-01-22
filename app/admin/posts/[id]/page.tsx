"use client"
import { use } from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PostForm, { PostDraft } from "@/components/admin/PostForm";

type Post = PostDraft & { id: string; publishedAt?: string | null };

export default function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const res = await fetch(`/api/admin/posts/${id}`, { cache: "no-store" });
      setLoading(false);
      if (!res.ok) {
        alert("Failed to load post");
        router.replace("/admin/posts");
        return;
      }
      setPost(await res.json());
    })();
  }, [id, router]);

  async function onSave(draft: PostDraft) {
    const res = await fetch(`/api/admin/posts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(draft),
    });

    if (!res.ok) {
      const j = await res.json().catch(() => null);
      alert(j?.error ?? "Update failed");
      return;
    }

    router.replace("/admin/posts");
  }

  async function onDelete() {
    if (!confirm("Сигурен ли си, че искаш да изтриеш този пост?")) return;

    const res = await fetch(`/api/admin/posts/${id}`, { method: "DELETE" });
    if (!res.ok) {
      alert("Delete failed");
      return;
    }
    router.replace("/admin/posts");
  }

  if (loading) return <div className="p-6">Зареждане...</div>;
  if (!post) return <div className="p-6">Няма данни</div>;

  return (
    <div className="mx-auto max-w-5xl p-6">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold">Редактиране на публикация</h1>
          <p className="text-sm text-gray-600">{post.title}</p>
        </div>

        <button onClick={onDelete} className="rounded-lg border px-3 py-2 hover:bg-gray-50">
          Изтриване
        </button>
      </div>

      <div className="mt-6">
        <PostForm
          initial={{
            title: post.title ?? "",
            slug: post.slug ?? "",
            excerpt: post.excerpt ?? "",
            contentMd: post.contentMd ?? "",
            published: !!post.published,
          }}
          onSave={onSave}
        />
      </div>
    </div>
  );
}
