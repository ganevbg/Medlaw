"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import LogoutButton from "./LogoutButton"

export default function MobileMenu({ isAdmin }: { isAdmin: boolean }) {
    const [open, setOpen] = useState(false)

    return (
        <div>
            <button className="md:hidden p-2" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
                {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {open && (
                <div className="md:hidden fixed top-20 left-0 right-0 bg-background border-b border-border shadow-lg z-50">
                    <div className="container mx-auto px-4 py-6">
                        <nav className="flex flex-col gap-1">
                            <Link
                                href="/"
                                onClick={() => setOpen(false)}
                                className="flex items-center px-4 py-3 text-base font-medium text-foreground hover:bg-muted hover:text-primary rounded-lg transition-colors"
                            >
                                Начало
                            </Link>
                            <Link
                                href="/about"
                                onClick={() => setOpen(false)}
                                className="flex items-center px-4 py-3 text-base font-medium text-foreground hover:bg-muted hover:text-primary rounded-lg transition-colors"
                            >
                                За нас
                            </Link>
                            <Link
                                href="/board"
                                onClick={() => setOpen(false)}
                                className="flex items-center px-4 py-3 text-base font-medium text-foreground hover:bg-muted hover:text-primary rounded-lg transition-colors"
                            >
                                Управителен съвет
                            </Link>
                            <Link
                                href="/membership"
                                onClick={() => setOpen(false)}
                                className="flex items-center px-4 py-3 text-base font-medium text-foreground hover:bg-muted hover:text-primary rounded-lg transition-colors"
                            >
                                Членство
                            </Link>
                            <Link
                                href="/#blog"
                                onClick={() => setOpen(false)}
                                className="flex items-center px-4 py-3 text-base font-medium text-foreground hover:bg-muted hover:text-primary rounded-lg transition-colors"
                            >
                                Позиции и публикации
                            </Link>
                            <Link
                                href="/#contact"
                                onClick={() => setOpen(false)}
                                className="flex items-center px-4 py-3 text-base font-medium text-foreground hover:bg-muted hover:text-primary rounded-lg transition-colors"
                            >
                                Контакти
                            </Link>
                        </nav>

                        <div className="mt-4 pt-4 border-t border-border">
                            {isAdmin ? (
                                <div className="flex flex-col gap-3">
                                    <Link
                                        href="/admin/posts"
                                        onClick={() => setOpen(false)}
                                        className="flex items-center px-4 py-3 text-base font-medium text-foreground hover:bg-muted hover:text-primary rounded-lg transition-colors"
                                    >
                                        Статии
                                    </Link>
                                    <div className="px-4">
                                        <LogoutButton />
                                    </div>
                                </div>
                            ) : (
                                <Link
                                    href="/admin/login"
                                    onClick={() => setOpen(false)}
                                    className="flex items-center px-4 py-3 text-base font-medium text-foreground hover:bg-muted hover:text-primary rounded-lg transition-colors"
                                >
                                    Вход
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
