"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="w-10 h-10 bg-[#FDE047] rounded-lg flex items-center justify-center shadow-sm"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 text-black"
              fill="currentColor"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </Link>

          <div className="leading-tight">
            <Link
              href="/"
              className="text-lg font-black tracking-tight text-[#0F172A]"
            >
              ROPACA
            </Link>
            <p className="text-[9px] font-bold tracking-widest uppercase text-slate-400">
              Work for Accuracy
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/events">Events</NavLink>
          <NavLink href="/membership">Membership</NavLink>
          <NavLink href="/news">News</NavLink>
          <NavLink href="/executive-council">Executive Council</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/contact">Contact</NavLink>

          <Link
            href="/join"
            className="ml-4 bg-[#1E293B] text-white px-6 py-2.5 rounded-xl text-xs font-black tracking-widest uppercase hover:bg-[#334155] transition"
          >
            Join ROPACA
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative w-10 h-10 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <span
            className={`absolute h-0.5 w-6 bg-slate-900 transition-all ${
              open ? "rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 bg-slate-900 transition-all ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 bg-slate-900 transition-all ${
              open ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      <aside
        className={`md:hidden fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 flex flex-col gap-6">
          <NavLink mobile href="/">Home</NavLink>
          <NavLink mobile href="/about">About</NavLink>
          <NavLink mobile href="/projects">Projects</NavLink>
          <NavLink mobile href="/membership">Membership</NavLink>
          <NavLink mobile href="/contact">Contact</NavLink>

          <Link
            href="/join"
            className="mt-6 bg-[#1E293B] text-white py-3 rounded-xl text-center text-xs font-black tracking-widest uppercase"
          >
            Join ROPACA
          </Link>
        </div>
      </aside>
    </header>
  );
};

export default Navbar;

/* -------------------- */
/* Reusable Nav Link (dynamic active state) */
/* -------------------- */
import { usePathname } from 'next/navigation';

const NavLink = ({ href, children, mobile }) => {
  const pathname = usePathname() || '/';
  const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);

  const baseClass = mobile
    ? 'text-sm font-black uppercase tracking-widest text-[#0F172A]'
    : 'text-sm font-semibold text-slate-600 hover:text-[#0F172A]';

  return (
    <Link href={href} className={`transition ${baseClass} ${!mobile && isActive ? 'text-[#0F172A] font-black relative inline-block' : ''}`}>
      {children}
      {!mobile && isActive && (
        <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-[#FDE047] rounded-full" />
      )}
    </Link>
  );
};
