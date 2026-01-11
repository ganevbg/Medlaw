import Link from "next/link";
import { requireAdmin } from "@/src/lib/auth";
import MobileMenu from "./MobileMenu";
import LogoutButton from "./LogoutButton";

export const dynamic = "force-dynamic"; // avoid caching auth state

export default async function Header() {
  const isAdmin = await requireAdmin();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-serif font-bold text-primary">
              Медикъллоул-Консулт
            </Link>
            <p className="text-xs text-muted-foreground">Медицинско & Академично Право</p>
          </div>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#" className="text-sm font-medium hover:text-primary transition-colors">Начало</Link>
            <Link href="/#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</Link>
            <Link href="/#expertise" className="text-sm font-medium hover:text-primary transition-colors">Експертиза</Link>
            <Link href="/#blog" className="text-sm font-medium hover:text-primary transition-colors">Блог</Link>
            <Link href="/#contact" className="text-sm font-medium hover:text-primary transition-colors">Контакти</Link>

            {/* Admin */}
            {isAdmin ? (
              <div className="flex items-center gap-4">
                <Link href="/admin/posts" className="text-sm font-medium hover:text-primary transition-colors">
                  Статии
                </Link>
                <LogoutButton />
              </div>
            ) : (
              <Link href="/admin/login" className="text-sm font-medium hover:text-primary transition-colors">
                Вход
              </Link>
            )}
          </div>

          {/* Mobile menu (client) */}
          <MobileMenu isAdmin={isAdmin} />
        </div>
      </nav>
    </header>
  );
}
