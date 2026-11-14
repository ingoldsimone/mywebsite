"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div className="relative md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Toggle navigation menu"
        className="rounded-lg border border-[var(--border)] px-3 py-2 text-sm"
      >
        {isOpen ? "Close" : "Menu"}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-2 flex w-48 flex-col gap-4 rounded-lg border border-[var(--border)] bg-[var(--background)] p-4 shadow-lg">
          <Link href="/about" onClick={closeMenu}>
            About
          </Link>

          <Link href="/#projects" onClick={closeMenu}>
            Projects
          </Link>

          <Link href="/#contact" onClick={closeMenu}>
            Contact
          </Link>

          <ThemeToggle />
        </div>
      )}
    </div>
  );
}