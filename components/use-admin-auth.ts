"use client";

import { useCallback, useEffect, useState } from "react";

export function useAdminAuth() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const refresh = useCallback(async () => {
    try {
      const res = await fetch("/api/auth/me", { cache: "no-store" });
      const data = await res.json();
      setIsAdmin(!!data.isAdmin);
    } catch {
      setIsAdmin(false);
    } finally {
      setLoaded(true);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return { isAdmin, loaded, refresh };
}
