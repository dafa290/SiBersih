"use client";

import { useState, useEffect } from "react";

/**
 * Hook: deteksi apakah halaman sudah di-scroll melebihi threshold
 * @param threshold - jumlah pixel scroll sebelum trigger (default: 50)
 */
export function useScrolled(threshold = 50): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}
