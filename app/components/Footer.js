"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#071A3B] text-slate-200 py-16 px-6 md:px-20 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className=" rounded-md p-2 shadow-sm">
              <Image src="/logo1.png" alt="ROPACA" width={150} height={150} className="object-contain" />
            </div>
            <div>
              <h3 className="text-white text-lg font-bold">ROPACA</h3>
              <p className="text-xs text-slate-300 uppercase tracking-widest">Rotary Pilers And Casters Association of Lagos state</p>
            </div>
          </div>

          <p className="text-sm text-slate-300 max-w-md leading-relaxed">
            Setting standards and advancing engineering infrastructure in Lagos and Ogun states.
          </p>

          <div className="flex items-center gap-3">
            <a href="#" aria-label="Twitter" className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition">
              <Twitter size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="p-2 rounded-md bg-white/5 hover:bg-white/10 transition">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links (match navbar routes) */}
        <div className="flex flex-col">
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-slate-300 hover:text-white transition">Home</Link>
            </li>
            <li>
              <Link href="/about" className="text-slate-300 hover:text-white transition">About</Link>
            </li>
            <li>
              <Link href="/projects" className="text-slate-300 hover:text-white transition">Projects</Link>
            </li>
            <li>
              <Link href="/membership" className="text-slate-300 hover:text-white transition">Membership</Link>
            </li>
            <li>
              <Link href="/contact" className="text-slate-300 hover:text-white transition">Contact</Link>
            </li>
            <li>
              <Link href="/join" className="text-slate-300 hover:text-white transition">Join</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col">
          <h4 className="text-white font-semibold mb-4">Contact Secretariat</h4>

          <div className="flex items-start gap-3 mb-3">
            <div className="text-[#FDE047] mt-1"><Mail size={18} /></div>
            <div>
              <a href="mailto:ropaca788@yahoomail.com" className="text-slate-300 hover:text-white transition">ropaca788@yahoomail.com</a>
              <div className="text-xs text-slate-400">Primary contact</div>
            </div>
          </div>

          <div className="flex items-start gap-3 mb-3">
            <div className="text-[#FDE047] mt-1"><Phone size={18} /></div>
            <div>
              <a href="tel:+2348032390450" className="text-slate-300 hover:text-white transition">+234 8032390450</a>
              <div className="text-xs text-slate-400">Support line</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="text-[#FDE047] mt-1"><MapPin size={18} /></div>
            <div className="text-slate-300 leading-tight">
              5, Idi-oro Avenue, Addo Langbasa<br />Addo, Ajah, Lagos State
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div className="text-slate-400">© {year} ROPACA. All rights reserved.</div>

        <div className="flex items-center gap-6">
          <Link href="/privacy" className="text-slate-300 hover:text-white transition">Privacy Policy</Link>
          <Link href="/terms" className="text-slate-300 hover:text-white transition">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;