"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import LogoutButton from "./LogoutButton";

export default function MobileMenu({ isAdmin }: { isAdmin: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button className="p-2" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {open && (
        <div className="py-4 space-y-4">
          <Link href="/#" onClick={() => setOpen(false)} className="block text-sm font-medium hover:text-primary">Начало</Link>
          <Link href="/#services" onClick={() => setOpen(false)} className="block text-sm font-medium hover:text-primary">Услуги</Link>
          <Link href="/#expertise" onClick={() => setOpen(false)} className="block text-sm font-medium hover:text-primary">Експертиза</Link>
          <Link href="/#blog" onClick={() => setOpen(false)} className="block text-sm font-medium hover:text-primary">Блог</Link>
          <Link href="/#contact" onClick={() => setOpen(false)} className="block text-sm font-medium hover:text-primary">Контакти</Link>

          <div className="pt-2 border-t border-border">
            {isAdmin ? (
              <div className="flex flex-col gap-3">
                <Link href="/admin/posts" onClick={() => setOpen(false)} className="block text-sm font-medium hover:text-primary">
                  Статии
                </Link>
                <LogoutButton />
              </div>
            ) : (
              <Link href="/admin/login" onClick={() => setOpen(false)} className="block text-sm font-medium hover:text-primary">
                Вход
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
