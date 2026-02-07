"use client";

import React, { useState } from 'react';
import Button from "../components/Button";
import {
  HardHat,
  Search,
  ArrowRight,
  Clock,
  Calendar,
  ShieldCheck,
  Users,
  Download,
  ExternalLink,
  Lock,
  ChevronRight,
  ChevronLeft,
  Mail,
  MapPin,
  Phone
} from 'lucide-react';

// --- Navigation Component ---
// --- Navigation Component Removed (Using Global Nav) ---

// --- Featured News Header (image_55ac47.jpg) ---
const FeaturedHeader = () => (
  <header className="relative h-[60vh] flex items-center px-6 md:px-20 overflow-hidden bg-[#001F3F]">
    <div className="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000"
        className="w-full h-full object-cover opacity-30 grayscale"
        alt="Featured News"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#001F3F] to-transparent"></div>
    </div>
    <div className="relative z-10 max-w-4xl">
      <span className="bg-[#FFD700] text-[#001F3F] px-3 py-1 text-[10px] font-black uppercase tracking-widest mb-6 inline-block">Featured Story</span>
      <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight uppercase tracking-tighter">
        Lagos Wetlands: New 2024 Safety Regulations for Deep Piling Operations
      </h1>
      <p className="text-white/60 text-lg mb-8 max-w-2xl font-medium">
        A comprehensive breakdown of the new government directives affecting all wetland construction sites, including mandatory soil testing and rig stability certifications.
      </p>
      <div className="flex items-center gap-6 text-white/40 text-[10px] font-bold uppercase tracking-widest">
        <span className="flex items-center gap-2"><Calendar size={14} className="text-[#FFD700]" /> Oct 24, 2023</span>
        <span className="flex items-center gap-2"><Clock size={14} className="text-[#FFD700]" /> 8 min read</span>
      </div>
    </div>
  </header>
);

// --- Membership Tiers (image_553461.jpg) ---
const MembershipSection = () => (
  <section className="py-24 px-6 md:px-20 bg-slate-50">
    <div className="text-center mb-16">
      <p className="text-[#FFD700] text-[10px] font-black uppercase tracking-[0.4em] mb-4">Membership Tiers</p>
      <h2 className="text-4xl font-black text-[#001F3F] uppercase tracking-tighter">Select Your Plan</h2>
      <p className="text-slate-400 text-sm mt-4">Whether you are an established firm or a student just starting out, we have a place for you.</p>
    </div>
    <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {/* Associate Tier */}
      <div className="bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-sm flex flex-col">
        <div className="h-48 bg-slate-200 relative">
          <img src="https://images.unsplash.com/photo-1503387762-592dec5832f2?q=80" className="w-full h-full object-cover grayscale" />
          <div className="absolute top-6 left-6 bg-[#001F3F] text-white text-[9px] font-black px-3 py-1 rounded">ENTRY LEVEL</div>
        </div>
        <div className="p-10 flex-grow">
          <h4 className="text-2xl font-black text-[#001F3F] mb-4 uppercase">Associate</h4>
          <p className="text-slate-400 text-xs mb-8">For students and apprentices building their career foundation.</p>
          <ul className="space-y-4 mb-10">
            {['Access to training webinars', 'Mentorship opportunities', 'Digital ID Card'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-xs font-bold text-slate-600">
                <ShieldCheck size={16} className="text-green-500" /> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-10 pt-0">
          <button className="w-full py-4 border-2 border-slate-100 rounded-xl font-black text-[10px] uppercase tracking-widest text-[#001F3F] hover:bg-slate-50 transition-all">Apply Now</button>
        </div>
      </div>

      {/* Individual Tier (Featured) */}
      <div className="bg-[#001F3F] rounded-[32px] overflow-hidden shadow-2xl shadow-blue-900/20 transform scale-105 relative z-10 flex flex-col">
        <div className="absolute top-4 right-4 bg-[#FFD700] text-[#001F3F] text-[9px] font-black px-3 py-1 rounded">MOST POPULAR</div>
        <div className="h-48 bg-slate-800 relative">
          <img src="https://images.unsplash.com/photo-1590644365607-1c5a519a7a37?q=80" className="w-full h-full object-cover" />
          <div className="absolute top-6 left-6 bg-[#FFD700] text-[#001F3F] text-[9px] font-black px-3 py-1 rounded">PROFESSIONAL</div>
        </div>
        <div className="p-10 flex-grow">
          <h4 className="text-2xl font-black text-white mb-4 uppercase">Individual</h4>
          <p className="text-white/40 text-xs mb-8">For certified engineers, pilers, and casters actively working.</p>
          <ul className="space-y-4 mb-10">
            {['Full voting rights', 'Professional indemnity advice', 'Exclusive job board access', 'Quarterly networking events'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-xs font-bold text-white/70">
                <ShieldCheck size={16} className="text-[#FFD700]" /> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-10 pt-0">
          <button className="w-full py-4 bg-[#FFD700] rounded-xl font-black text-[10px] uppercase tracking-widest text-[#001F3F] hover:bg-white transition-all">Apply Now</button>
        </div>
      </div>

      {/* Corporate Tier */}
      <div className="bg-white rounded-[32px] overflow-hidden border border-slate-100 shadow-sm flex flex-col">
        <div className="h-48 bg-slate-200 relative">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80" className="w-full h-full object-cover grayscale" />
          <div className="absolute top-6 left-6 bg-[#001F3F] text-white text-[9px] font-black px-3 py-1 rounded">ENTERPRISE</div>
        </div>
        <div className="p-10 flex-grow">
          <h4 className="text-2xl font-black text-[#001F3F] mb-4 uppercase">Corporate</h4>
          <p className="text-slate-400 text-xs mb-8">For construction firms and suppliers seeking industry authority.</p>
          <ul className="space-y-4 mb-10">
            {['Brand placement at events', 'Policy advocacy representation', 'Up to 5 individual memberships'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-xs font-bold text-slate-600">
                <ShieldCheck size={16} className="text-green-500" /> {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-10 pt-0">
          <button className="w-full py-4 border-2 border-slate-100 rounded-xl font-black text-[10px] uppercase tracking-widest text-[#001F3F] hover:bg-slate-50 transition-all">Apply Now</button>
        </div>
      </div>
    </div>
  </section>
);

// --- Main Page Component ---
export default function RopacaWebsite() {
  const [activeTab, setActiveTab] = useState('All Updates');

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#FFD700] selection:text-[#001F3F]">

      {/* Navbar replaced by global Nav component in layout */}
      <FeaturedHeader />

      {/* News Grid Section (image_55ac47.jpg) */}
      <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
        <div className="lg:w-2/3">
          {/* Tabs */}
          <div className="flex flex-wrap gap-4 mb-12 border-b border-slate-100 pb-8">
            {['All Updates', 'Safety', 'Association News', 'Industry Updates', 'Events'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === tab ? 'bg-[#001F3F] text-white' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Article List */}
          <div className="space-y-16">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="group cursor-pointer">
                <div className="aspect-video rounded-2xl overflow-hidden mb-6 relative">
                  <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-4 left-4 bg-red-600 text-white text-[9px] font-black px-2 py-1 rounded">SAFETY ALERT</span>
                </div>
                <p className="text-slate-400 text-[10px] font-bold uppercase mb-2">Maintenance • 2 Days Ago</p>
                <h3 className="text-xl font-black text-[#001F3F] mb-4 uppercase leading-tight group-hover:text-blue-600 transition-colors">Rig Maintenance in Rainy Season: Preventing Rust & Failure</h3>
                <p className="text-slate-500 text-xs leading-relaxed">With the rainy season approaching, our technical committee has released updated guidelines for...</p>
              </div>
              <div className="group cursor-pointer">
                <div className="aspect-video rounded-2xl overflow-hidden mb-6 relative">
                  <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-4 left-4 bg-[#001F3F] text-white text-[9px] font-black px-2 py-1 rounded">ASSOCIATION NEWS</span>
                </div>
                <p className="text-slate-400 text-[10px] font-bold uppercase mb-2">Events • 5 Days Ago</p>
                <h3 className="text-xl font-black text-[#001F3F] mb-4 uppercase leading-tight group-hover:text-blue-600 transition-colors">ROPACA Annual General Meeting 2024</h3>
                <p className="text-slate-500 text-xs leading-relaxed">Join us this December for the election of new officers and a review of the association's fiscal...</p>
              </div>
            </div>

            <h2 className="text-2xl font-black text-[#001F3F] uppercase border-l-4 border-[#FFD700] pl-6 mb-12">Industry Updates</h2>

            {[
              { title: "Global Steel Prices: Impact on Local Construction", tag: "INDUSTRY UPDATES", img: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80" },
              { title: "Updated Certification Standards for 2024", tag: "REGULATION", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80" },
              { title: "Review: Best Protective Equipment for Site Workers", tag: "SAFETY", img: "https://images.unsplash.com/photo-1503387762-592dec5832f2?q=80" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-8 group cursor-pointer pb-12 border-b border-slate-50">
                <div className="md:w-1/3 aspect-video md:aspect-square rounded-2xl overflow-hidden shrink-0">
                  <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-blue-600 text-[9px] font-black uppercase tracking-widest mb-3">{item.tag} • Nov 01, 2023</span>
                  <h4 className="text-2xl font-black text-[#001F3F] uppercase leading-tight mb-4 group-hover:text-blue-600 transition-colors">{item.title}</h4>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6 max-w-lg">Analysis of how fluctuating import costs are affecting piling contracts across Lagos State. Our experts weigh in...</p>
                  <span className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#001F3F]">Read Analysis <ArrowRight size={14} className="text-[#FFD700]" /></span>
                </div>
              </div>
            ))}
          </div>

          <Button onClick={() => alert('Loading more articles...')} className="w-full mt-20 py-4 bg-[#001F3F] text-white font-black text-[10px] uppercase tracking-widest rounded-xl">Load More Articles</Button>
        </div>

        {/* Sidebar */}
        <aside className="lg:w-1/3 space-y-12">
          {/* Trending Now */}
          <div className="bg-slate-50 p-10 rounded-[32px]">
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8 flex items-center justify-between">Trending Now <ArrowRight size={14} /></h4>
            <div className="space-y-8">
              {[
                { n: "01", t: "New Tax Levies on Heavy Machinery Imports", c: "INDUSTRY UPDATES" },
                { n: "02", t: "ROPACA Scholarship Fund Applications Open", c: "ASSOCIATION NEWS" },
                { n: "03", t: "Interview: The Future of Casting in Nigeria", c: "OPINION" }
              ].map(item => (
                <div key={item.n} className="flex gap-6 group cursor-pointer">
                  <span className="text-4xl font-black text-slate-200 group-hover:text-[#FFD700] transition-colors">{item.n}</span>
                  <div>
                    <h5 className="text-sm font-black text-[#001F3F] uppercase leading-snug mb-2">{item.t}</h5>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{item.c}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Event Widget */}
          <div className="bg-[#001F3F] p-10 rounded-[32px] text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <span className="bg-[#FFD700] text-[#001F3F] text-[9px] font-black px-3 py-1 rounded mb-6 inline-block">UPCOMING EVENT</span>
            <h4 className="text-2xl font-black uppercase mb-4 leading-tight">Technical Workshop: Soil Mechanics</h4>
            <div className="space-y-3 mb-8 text-white/60 text-[10px] font-bold uppercase tracking-widest">
              <div className="flex items-center gap-3"><Calendar size={14} className="text-[#FFD700]" /> Nov 15, 2024</div>
              <div className="flex items-center gap-3"><MapPin size={14} className="text-[#FFD700]" /> Eko Hotel & Suites</div>
            </div>
            <button className="w-full py-3 bg-white text-[#001F3F] font-black text-[10px] uppercase tracking-widest rounded-lg hover:bg-[#FFD700] transition-all">Register Now</button>
          </div>

          {/* Resources */}
          <div className="bg-white border border-slate-100 p-10 rounded-[32px]">
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8">Resources</h4>
            <div className="space-y-4">
              {[
                { t: "Safety Manual PDF", i: <Download />, s: "Updated Oct 2023" },
                { t: "Member Directory", i: <ExternalLink />, s: "Access Restricted", lock: true },
                { t: "2024 Price Guide", i: <Lock />, s: "Members Only", lock: true }
              ].map((res, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-slate-50 hover:border-[#FFD700] transition-all cursor-pointer group">
                  <div>
                    <h5 className="text-xs font-black text-[#001F3F] uppercase">{res.t}</h5>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">{res.s}</p>
                  </div>
                  <div className="text-slate-300 group-hover:text-[#001F3F]">{res.i}</div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <MembershipSection />

      {/* Stay Ahead Section (Bottom) */}
      <section className="bg-[#111] py-24 px-6 md:px-20 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-[#FFD700] to-transparent"></div>
        <div className="bg-[#FFD700]/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-10 rotate-12">
          <Mail className="text-[#FFD700]" size={32} />
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6">Stay Ahead of the Curve</h2>
        <p className="text-white/40 text-sm max-w-xl mx-auto mb-12">Get critical safety alerts, market analysis, and association updates delivered directly to your inbox weekly.</p>
        <div className="max-w-md mx-auto flex flex-col md:flex-row gap-4">
          <input
            type="email"
            placeholder="Enter your email address"
            className="bg-white/5 border border-white/10 px-6 py-4 rounded-xl text-white outline-none focus:border-[#FFD700] transition-all flex-grow text-sm"
          />
          <button className="bg-[#FFD700] text-[#001F3F] px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white transition-all">Subscribe</button>
        </div>
        <p className="text-white/20 text-[9px] font-bold uppercase tracking-widest mt-8">No spam. Unsubscribe at any time.</p>
      </section>


    </div>
  );
}