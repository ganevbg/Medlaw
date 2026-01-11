"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  async function logout() {
    await fetch("/api/auth/logout", { method: "POST", cache: "no-store" });
    router.replace("/");
    router.refresh(); // header re-renders on server without cookie
  }

  return (
    <button
      onClick={logout}
      className="text-sm font-medium text-foreground hover:text-primary transition-colors"
    >
      Изход
    </button>
  );
}
