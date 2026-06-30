"use client";

import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { AnimatedButton } from "./AnimatedButton";

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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <motion.div
      className="fixed inset-x-0 z-50 flex justify-center px-4"
      style={{ top: 20 }}
    >
      <motion.nav
        animate={{
          width: scrolled ? "fit-content" : "100%",
          maxWidth: scrolled ? "640px" : "1024px",
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex items-center justify-between gap-6 rounded-full border border-white/20 bg-zinc-900/80 px-6 py-3 shadow-[0_8px_32px_rgb(0,0,0,0.4)] backdrop-blur-xl"
      >
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2 outline-none">
          <img
            src="/logo.png"
            alt="Logo"
            width={160}
            height={48}
            className="h-12 sm:h-14 w-auto object-contain drop-shadow-sm transition-transform hover:scale-105 brightness-0 invert opacity-90"
          />
        </Link>

        {/* Nav links */}
        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item, index) => (
            <li
              key={item.href}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Link
                href={item.href}
                className={`relative z-10 block px-4 py-2 text-sm font-medium transition-colors ${
                  hoveredIndex === index
                    ? "text-white"
                    : "text-zinc-400"
                }`}
              >
                {item.label}
              </Link>
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    layoutId="nav-hover"
                    className="absolute inset-0 z-0 rounded-full bg-white/10 shadow-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        {/* Spacer for mobile or when links are hidden, though justify-between handles most of it */}
        <div className="flex md:hidden flex-1" />

        {/* CTA Buttons */}
        <div className="flex shrink-0 items-center gap-4">
          <Link
            href="/login"
            className="hidden sm:block text-sm font-medium text-zinc-400 transition-colors hover:text-white"
          >
            Log in
          </Link>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          {/* CTA Button */}
          <div className="hidden sm:block">
            <AnimatedButton variant="primary">
              Book a call
            </AnimatedButton>
          </div>
        </motion.div>
        </div>
      </motion.nav>
    </motion.div>
  );
}
