"use client";

import { useRouter } from "next/navigation";
import PostForm, { PostDraft } from "@/components/admin/PostForm";

export default function NewPostPage() {
  const router = useRouter();

  async function onSave(draft: PostDraft) {
    const res = await fetch("/api/admin/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(draft),
    });

    if (!res.ok) {
      const j = await res.json().catch(() => null);
      alert(j?.error ?? "Create failed");
      return;
    }

    router.replace("/admin/posts");
  }

  return (
    <div className="mx-auto max-w-5xl p-6">
      <div className="flex items-center justify-between">
        <div>
                  <h1 className="text-2xl font-semibold">Създаване новa публикация</h1>
        </div>
      </div>

      <div className="mt-6">
        <PostForm
          initial={{
            title: "",
            slug: "",
            excerpt: "",
            contentMd: "",
            published: false,
          }}
          onSave={onSave}
        />
      </div>
    </div>
  );
}
