'use client';

import Link from 'next/link';
import { useState } from 'react';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#team', label: 'Team' },
  { href: '#values', label: 'Values' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-[#1A1A2E]">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#FF6B35] to-[#2EC4B6] text-sm font-semibold text-white shadow-sm">
            VL
          </span>
          <span className="text-lg font-semibold tracking-[-0.02em]">VibeLabs</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#4A4A68] transition hover:text-[#1A1A2E]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-[#FF6B35] to-[#2EC4B6] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#FF6B35]/20 transition hover:opacity-90"
          >
            Get in Touch
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-full border border-[#E8E8EC] p-2 text-[#1A1A2E] md:hidden"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-[#E8E8EC] bg-white px-4 py-5 shadow-xl md:hidden">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-[#1A1A2E]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex w-fit items-center rounded-full bg-gradient-to-r from-[#FF6B35] to-[#2EC4B6] px-5 py-3 text-sm font-semibold text-white"
            >
              Get in Touch
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
