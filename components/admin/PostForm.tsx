"use client"

import { useMemo, useState } from "react"
import RichTextEditor from "./rich-text-editor"
import { slugify } from "@/lib/slugify"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export type PostDraft = {
  title: string
  slug?: string
  excerpt?: string | null
  contentMd: string
  published: boolean
}

export default function PostForm({
  initial,
  onSave,
}: {
  initial: PostDraft
  onSave: (draft: PostDraft) => Promise<void>
}) {
  const [title, setTitle] = useState(initial.title)
  const [slug, setSlug] = useState(initial.slug ?? "")
  const [excerpt, setExcerpt] = useState(initial.excerpt ?? "")
  const [contentMd, setContentMd] = useState(initial.contentMd)
  const [published, setPublished] = useState(initial.published)
  const [saving, setSaving] = useState(false)

  const effectiveSlug = useMemo(() => (slug.trim() ? slug.trim() : slugify(title)), [slug, title])

  async function submit() {
    if (!title.trim()) return alert("Заглавието е задължително")
    if (!contentMd.trim()) return alert("Съдържанието е задължително")

    setSaving(true)
    try {
      await onSave({
        title: title.trim(),
        slug: effectiveSlug,
        excerpt: excerpt?.trim() ? excerpt.trim() : null,
        contentMd,
        published,
      })
    } finally {
      setSaving(false)
    }
  }

  return (
    <Card className="border-none shadow-none">
      <CardContent className="space-y-8 p-0">
        <div className="flex items-center gap-4 pb-4 border-b">
          <Link href="/admin/posts">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Назад към списъка
            </Button>
          </Link>
        </div>

        <div className="space-y-6">
          <div>
            <Label htmlFor="title" className="mb-2 block font-semibold text-foreground">
              Заглавие
            </Label>
            <Input
              id="title"
              className="text-base"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Въведете заглавие на публикацята..."
            />
          </div>

          <div>
            <Label htmlFor="slug" className="mb-2 block font-semibold text-foreground">
              URL адрес (Slug)
            </Label>
            <Input
              id="slug"
              className="text-base font-mono text-sm"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder={effectiveSlug}
            />
            <p className="mt-1.5 text-xs text-muted-foreground">
              Ефективен адрес: <span className="font-mono">{effectiveSlug}</span>
            </p>
          </div>

          <div>
            <Label htmlFor="excerpt" className="mb-2 block font-semibold text-foreground">
              Кратко описание (по избор)
            </Label>
            <Textarea
              id="excerpt"
              className="min-h-20 resize-none"
              value={excerpt ?? ""}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="Кратко резюме на публикацята за визуализация в списъка..."
            />
          </div>

          <div className="flex items-center gap-3">
            <input
              id="published"
              type="checkbox"
              checked={published}
              onChange={(e) => setPublished(e.target.checked)}
              className="size-4 cursor-pointer rounded border-input accent-primary"
            />
            <Label htmlFor="published" className="cursor-pointer font-medium text-foreground">
              Публикувана публикаця
            </Label>
          </div>
        </div>

        <div className="space-y-2">
          <Label className="mb-2 block font-semibold text-foreground">Съдържание</Label>
          <RichTextEditor value={contentMd} onChange={setContentMd} />
        </div>

        <div className="flex items-center justify-end gap-3 pt-2">
          <Button onClick={submit} disabled={saving} size="lg" className="min-w-32">
            {saving ? "Записване..." : "Запази публикацята"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
