import Link from "next/link"
import { requireAdmin } from "@/src/lib/auth"
import MobileMenu from "./MobileMenu"
import LogoutButton from "./LogoutButton"

export const dynamic = "force-dynamic" // avoid caching auth state

export default async function Header() {
    const isAdmin = await requireAdmin()

    return (
        <nav className="sticky top-0 z-50 w-full bg-background shadow-sm">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-xl font-serif font-bold text-primary">
                            <img src="/logo.svg" className="h-12 w-auto" alt="Medlaw" />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
                            Начало
                        </Link>
                        <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                            За нас
                        </Link>
                        <Link href="/board" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                            Управителен съвет
                        </Link>
                        <Link href="/membership" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                            Членство
                        </Link>
                        <Link href="/#blog" className="text-sm font-medium hover:text-primary transition-colors">
                            Позиции и публикации
                        </Link>
                        <Link href="/#contact" className="text-sm font-medium hover:text-primary transition-colors">
                            Контакти
                        </Link>

                        {/* Admin */}
                        {isAdmin ? (
                            <div className="flex items-center gap-4">
                                <Link href="/admin/posts" className="text-sm font-medium hover:text-primary transition-colors">
                                    Публикации
                                </Link>
                                <LogoutButton />
                            </div>
                        ) : (
                            <Link href="/admin/login" className="text-sm font-medium hover:text-primary transition-colors">
                                Вход
                            </Link>
                        )}
                    </div>

                    {/* Mobile menu (client component) */}
                    <MobileMenu isAdmin={isAdmin} />
                </div>
            </div>
        </nav>
    )
}
