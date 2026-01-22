"use client"

import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Plus, RefreshCw, Search, Pencil, Trash2 } from "lucide-react"

type PostRow = {
  id: string
  title: string
  slug: string
  published: boolean
  createdAt: string
  updatedAt: string
}

export default function AdminPostsPage() {
  const [items, setItems] = useState<PostRow[]>([])
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState<string | null>(null)
  const [q, setQ] = useState("")

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase()
    if (!s) return items
    return items.filter((p) => p.title.toLowerCase().includes(s) || p.slug.toLowerCase().includes(s))
  }, [items, q])

  async function load() {
    setErr(null)
    setLoading(true)
    const res = await fetch("/api/admin/posts", { cache: "no-store" })
    setLoading(false)

    if (!res.ok) {
      const j = await res.json().catch(() => null)
      setErr(j?.error ?? "Грешка при зареждане на постовете")
      return
    }

    setItems(await res.json())
  }

  useEffect(() => {
    load()
  }, [])

  async function del(id: string) {
    if (!confirm("Сигурни ли сте, че искате да изтриете тази публикация?")) return

    const res = await fetch(`/api/admin/posts/${id}`, { method: "DELETE" })
    if (!res.ok) {
      alert("Грешка при изтриване")
      return
    }

    setItems((x) => x.filter((p) => p.id !== id))
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="mx-auto max-w-7xl p-6 lg:p-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-15">
          <div className="space-y-1">
            <h1 className="text-3xl font-serif font-bold text-foreground flex items-center gap-3">
              <FileText className="w-8 h-8 text-primary" />
              Управление на публикации
            </h1>
            <p className="text-muted-foreground">Създавайте и редактирайте публикации</p>
          </div>

          <Button asChild>
            <Link href="/admin/posts/new">
              <Plus className="w-4 h-4" />
              Нова публикаця
            </Link>
          </Button>
        </div>

        {/* Search and Actions */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  className="pl-10"
                  placeholder="Търсене по заглавие или slug..."
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                />
              </div>
              <Button variant="outline" onClick={load}>
                <RefreshCw className="w-4 h-4" />
                Обнови
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Loading and Error States */}
        {loading && (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground">Зареждане...</p>
            </CardContent>
          </Card>
        )}

        {err && (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-destructive">{err}</p>
            </CardContent>
          </Card>
        )}

        {/* Posts Table */}
        {!loading && !err && (
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50 border-b">
                    <tr>
                      <th className="text-left p-4 font-semibold text-sm text-foreground">Заглавие</th>
                      <th className="text-left p-4 font-semibold text-sm text-foreground">Slug</th>
                      <th className="text-left p-4 font-semibold text-sm text-foreground">Статус</th>
                      <th className="text-left p-4 font-semibold text-sm text-foreground">Обновено</th>
                      <th className="text-right p-4 font-semibold text-sm text-foreground">Действия</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((p) => (
                      <tr key={p.id} className="border-b last:border-0 hover:bg-muted/30 transition-colors">
                        <td className="p-4 font-medium text-foreground">{p.title}</td>
                        <td className="p-4 text-muted-foreground font-mono text-sm">{p.slug}</td>
                        <td className="p-4">
                          {p.published ? (
                            <Badge variant="default">Публикувано</Badge>
                          ) : (
                            <Badge variant="outline">Чернова</Badge>
                          )}
                        </td>
                        <td className="p-4 text-muted-foreground text-sm">
                          {new Date(p.updatedAt).toLocaleDateString("bg-BG", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </td>
                        <td className="p-4">
                          <div className="flex items-center justify-end gap-2">
                            <Button variant="outline" size="sm" asChild>
                              <Link href={`/admin/posts/${p.id}`}>
                                <Pencil className="w-4 h-4" />
                                Редактирай
                              </Link>
                            </Button>
                            <Button variant="outline" size="sm" onClick={() => del(p.id)}>
                              <Trash2 className="w-4 h-4" />
                              Изтрий
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}

                    {filtered.length === 0 && (
                      <tr>
                        <td className="p-12 text-center text-muted-foreground" colSpan={5}>
                          <FileText className="w-12 h-12 mx-auto mb-3 opacity-50" />
                          <p className="font-medium">Няма намерени публикации</p>
                          <p className="text-sm mt-1">Създайте нова публикаця, за да започнете</p>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
