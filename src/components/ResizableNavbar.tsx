"use client";

import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { useState } from "react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export function ResizableNavbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.div
      className="fixed inset-x-0 z-50 flex justify-center px-4"
      style={{ top: 10 }}
    >
      <motion.nav
        animate={{
          width: scrolled ? "fit-content" : "100%",
          maxWidth: scrolled ? "560px" : "1024px",
        }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="relative flex items-center gap-4 rounded-full border border-black/10 bg-zinc-100/90 px-5 py-2.5 shadow-md backdrop-blur-md dark:border-white/10 dark:bg-zinc-800/90"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2"
        >
          <img
            src="/logo.png"
            alt="Logo"
            width={130}
            height={40}
            className="h-14 w-auto object-contain"
          />
          <AnimatePresence>
            {!scrolled && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "auto" }}
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden whitespace-nowrap text-sm font-bold text-zinc-900 dark:text-white"
              >
              </motion.span>
            )}
          </AnimatePresence>
        </Link>

        {/* Nav links — always visible */}
        <ul className="flex items-center gap-5">
          {navItems.map((item) => (
            <li key={item.href} className="whitespace-nowrap">
              <Link
                href={item.href}
                className="text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Spacer — only when not scrolled */}
        {!scrolled && <div className="flex-1" />}

        {/* CTA Buttons */}
        <div className="flex shrink-0 items-center gap-2">
          <motion.div
            className="relative overflow-hidden rounded-full"
            whileHover="hovered"
          >
            <Link
              href="/signup"
              className="relative z-10 block border border-black/10 bg-white px-3 py-1 text-xs font-semibold text-zinc-900 dark:border-white/10 dark:bg-zinc-700 dark:text-white"
            >
              Book a call
            </Link>
            <motion.span
              variants={{ hovered: { opacity: 1 }, default: { opacity: 0 } }}
              initial="default"
              className="pointer-events-none absolute inset-0 bg-white/40 dark:bg-white/10"
            />
          </motion.div>
          <Link
            href="/login"
            className="text-sm font-semibold text-zinc-900 transition-colors hover:text-zinc-600 dark:text-white dark:hover:text-zinc-300"
          >
            Login
          </Link>
        </div>
      </motion.nav>
    </motion.div>
  );
}
