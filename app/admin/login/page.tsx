"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Scale } from "lucide-react"

export default function AdminLoginPage() {
  const router = useRouter()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setErr(null)
    setLoading(true)

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })

    setLoading(false)

    if (!res.ok) {
      const j = await res.json().catch(() => null)
      setErr(j?.error ?? "Неуспешен вход")
      return
    }

    router.replace("/")
    router.refresh()
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6">
      <div className="w-full max-w-md space-y-8">
        {/* Logo/Brand */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary text-primary-foreground">
            <Scale className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-3xl font-serif font-bold text-foreground">Административен вход</h1>
            <p className="text-muted-foreground mt-2">Влезте в административния панел</p>
          </div>
        </div>

        {/* Login Form Card */}
        <Card>
          <CardHeader>
            <CardTitle>Вход в системата</CardTitle>
            <CardDescription>Моля, въведете вашите данни за достъп</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="username">Потребителско име</Label>
                <Input
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoComplete="username"
                  placeholder="Въведете потребителско име"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Парола</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  placeholder="Въведете парола"
                  required
                />
              </div>

              {err && (
                <div className="rounded-lg bg-destructive/10 border border-destructive/20 p-3 text-sm text-destructive">
                  {err}
                </div>
              )}

              <Button type="submit" disabled={loading} className="w-full">
                {loading ? "Влизане..." : "Вход"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <p className="text-center text-sm text-muted-foreground">Защитен достъп само за администратори</p>
      </div>
    </div>
  )
}
