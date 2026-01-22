"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import { toast } from "sonner";
import Turnstile from "react-turnstile";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    })
    const [turnstileToken, setTurnstileToken] = useState("")
    const [isSending, setIsSending] = useState(false)
    const [turnstileKey, setTurnstileKey] = useState(0)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (isSending) return; // 🔒 prevent double submit

        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            toast.error("Моля попълни име, имейл и съобщение.");
            return;
        }

        if (!turnstileToken) {
            toast.error("Моля потвърди, че не си робот (captcha).");
            return;
        }

        setIsSending(true);

        try {
            const resp = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: formData.name.trim(),
                    email: formData.email.trim(),
                    phone: formData.phone.trim(),
                    message: formData.message.trim(),
                    turnstileToken,
                    website: (formData as any).website ?? "",
                }),
            });

            if (!resp.ok) {
                let msg = "Грешка при изпращане. Опитай пак.";
                try {
                    const data = await resp.json();
                    if (data?.error) msg = data.error;
                } catch { }

                setTurnstileToken("");
                setTurnstileKey((k) => k + 1)
                toast.error(msg);
                return;
            }

            toast.success("Изпратено успешно!");

            setFormData({
                name: "",
                email: "",
                phone: "",
                message: "",
                ...(Object.prototype.hasOwnProperty.call(formData as any, "website") ? { website: "" } : {}),
            } as any);

            setTurnstileToken("");
            setTurnstileKey((k) => k + 1)
        } catch {
            setTurnstileToken("");
            setTurnstileKey((k) => k + 1)
            toast.error("Мрежова грешка. Опитай пак.");
        } finally {
            setIsSending(false);
        }
    };


    return (
        <section id="contact" className="py-24 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-lg text-muted-foreground">
                            Изпратете кратко описание на Вашия случай или запазете час за онлайн консултация.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <Card>
                            <CardContent className="p-8">
                                <form onSubmit={handleSubmit} className="space-y-6">

                                    <input
                                        type="text"
                                        name="website"
                                        value={(formData as any).website ?? ""}
                                        onChange={(e) => setFormData((p: any) => ({ ...p, website: e.target.value }))}
                                        className="hidden"
                                        tabIndex={-1}
                                        autoComplete="off"
                                    />

                                    <div className="space-y-2">
                                        <Label htmlFor="name">Име</Label>
                                        <Input
                                            id="name"
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="Вашето име"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Имейл</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="email@example.com"
                                            required
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Телефон</Label>
                                        <Input
                                            id="phone"
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            placeholder="+359 ..."
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="message">Описание на казуса</Label>
                                        <Textarea
                                            id="message"
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            placeholder="Кратко опишете Вашия случай..."
                                            rows={5}
                                            required
                                        />
                                    </div>

                                    <Turnstile
                                        userRef={turnstileKey}
                                        sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                                        onVerify={setTurnstileToken}
                                        onExpire={() => setTurnstileToken("")}
                                        onError={() => setTurnstileToken("")}
                                        theme="auto"
                                    />

                                    <Button type="submit" disabled={isSending || !turnstileToken} className="w-full bg-secondary hover:bg-secondary/90" size="lg">
                                        {isSending ? "Изпращане..." : "Изпратете запитване"}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>

                        {/* Contact Info & Calendar */}
                        <div className="space-y-8">
                            <Card>
                                <CardContent className="p-8 space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <Phone className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-foreground">Телефон</p>
                                            <p className="text-muted-foreground"><a href="tel:088 877 4401">088 877 4401</a></p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <Mail className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-foreground">Имейл</p>
                                            <p className="text-muted-foreground"><a href="mailto:adv.proychev@gmail.com">adv.proychev@gmail.com</a></p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <MapPin className="h-5 w-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-foreground">Адрес</p>
                                            <p className="text-muted-foreground"><a href="https://share.google/XPSjgwTnS1cDYe2ON" target="_blank">гр. София, бул. „Никола Петков“ 52, ет. 1, офис 1-03</a></p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
