"use client";

import React, { useState } from 'react';
import { 
  Play, 
  Grid, 
  HardHat, 
  Hammer, 
  Calendar, 
  ArrowRight, 
  Maximize2,
  Phone,
  Mail,
  MapPin,
  Twitter,
  Instagram,
  Construction
} from 'lucide-react';

const ProjectGalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('All Projects');

  const categories = [
    { name: 'All Projects', icon: <Grid size={14} /> },
    { name: 'Piling', icon: <Construction size={14} /> },
    { name: 'Casting', icon: <HardHat size={14} /> },
    { name: 'Fabrication', icon: <Hammer size={14} /> },
    { name: 'Events', icon: <Calendar size={14} /> }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800",
    "https://images.unsplash.com/photo-1516937622548-a5c136e95af2?q=80&w=800",
    "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?q=80&w=800",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800",
    "https://images.unsplash.com/photo-1503387762-592dec5832f2?q=80&w=800",
    "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=800",
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800",
    "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800"
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-100 py-4 px-6 md:px-20 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="bg-[#FFD700] p-1.5 rounded shadow-sm">
            <Construction size={20} className="text-[#001F3F]" />
          </div>
          <span className="font-black tracking-tighter text-xl text-[#001F3F]">ROPACA</span>
        </div>
        <div className="hidden md:flex gap-8 text-[11px] font-bold uppercase tracking-widest text-slate-400">
          <a href="#" className="hover:text-[#001F3F]">Home</a>
          <a href="#" className="hover:text-[#001F3F]">About</a>
          <a href="#" className="text-[#001F3F] border-b-2 border-[#FFD700] pb-1">Projects</a>
          <a href="#" className="hover:text-[#001F3F]">Membership</a>
          <a href="#" className="hover:text-[#001F3F]">Contact</a>
        </div>
        <button className="bg-[#001F3F] text-white px-5 py-2.5 rounded text-[11px] font-bold uppercase tracking-widest hover:bg-slate-800 transition-all">
          Join ROPACA
        </button>
      </nav>

      {/* Hero Header */}
      <section className="relative h-[60vh] flex items-center justify-center text-center px-6 overflow-hidden bg-[#001F3F]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover opacity-30 grayscale"
            alt="Engineering background"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001F3F] via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#FFD700] animate-pulse"></span>
            <span className="text-white text-[10px] font-black uppercase tracking-widest">Visual Archive • 2024</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter leading-none">
            Engineering <span className="text-[#FFD700]">Lagos</span>
          </h1>
          <p className="text-white/60 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            A comprehensive documentary of piling, casting, and fabrication defining the skyline of Lagos State.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#FFD700] text-[#001F3F] px-8 py-4 rounded-full font-black text-xs uppercase flex items-center gap-3 hover:scale-105 transition-transform shadow-xl shadow-yellow-500/20">
              <div className="bg-[#001F3F] rounded-full p-1"><Play size={12} className="text-white" fill="currentColor"/></div>
              Watch Showreel
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-black text-xs uppercase hover:bg-white/20 transition-all">
              View Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Filter Bar & Grid */}
      <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16 border-b border-slate-100 pb-10">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-black text-[#001F3F] uppercase tracking-tight">Project Gallery</h2>
            <p className="text-slate-400 text-xs mt-1 uppercase tracking-widest font-bold">Documenting 124 projects across 4 categories</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button 
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-wider transition-all border ${
                  activeCategory === cat.name 
                  ? 'bg-[#FFD700] border-[#FFD700] text-[#001F3F] shadow-lg shadow-yellow-200' 
                  : 'bg-slate-50 border-slate-100 text-slate-400 hover:border-slate-300'
                }`}
              >
                {cat.icon}
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryImages.map((src, i) => (
            <div key={i} className="group relative aspect-square overflow-hidden rounded-2xl bg-slate-100 cursor-pointer">
              <img 
                src={src} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" 
                alt="Project"
              />
              <div className="absolute inset-0 bg-[#001F3F]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <div className="bg-[#FFD700] w-fit p-2 rounded-lg mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <Maximize2 size={18} className="text-[#001F3F]" />
                </div>
                <h4 className="text-white font-black text-xl leading-none">Lekki Viaduct Phase II</h4>
                <p className="text-[#FFD700] text-[10px] font-bold uppercase mt-2 tracking-widest">Piling • Jan 2024</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-3 px-8 py-4 border-2 border-slate-100 rounded-full text-xs font-black uppercase tracking-[0.2em] text-[#001F3F] hover:bg-slate-50 transition-all">
            Load More Projects <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* Video Archive Section */}
      <section className="bg-slate-50 py-24 px-6 md:px-20">
        <div className="max-w-7xl mx-auto bg-[#001F3F] rounded-[40px] p-10 md:p-20 relative overflow-hidden shadow-2xl">
          {/* Decorative Mesh */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white opacity-[0.02] -skew-x-12 translate-x-20"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 relative z-10">
            <div>
              <span className="text-[#FFD700] text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">Video Archive</span>
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight uppercase tracking-tight">On Site & <br /> In Action</h2>
              <p className="text-white/40 text-xs mt-4 max-w-md uppercase leading-relaxed font-bold tracking-widest">Documenting the process from foundation to finish. Explore our site videos, fabrication processes, and highlights.</p>
            </div>
            <button className="mt-8 md:mt-0 px-8 py-3 bg-white/5 border border-white/10 rounded-full text-white text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-2">
              View All Videos <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {[
              { title: "Annual Summit: 2023 Highlights", time: "04:20", label: "Official Recap" },
              { title: "The Fabrication Process", time: "12:45", label: "Educational Series" },
              { title: "Chairman's Address", time: "01:15", label: "Quarterly Update" }
            ].map((video, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 border border-white/10">
                  <img src={galleryImages[idx + 2]} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Video Thumbnail" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-[#FFD700] group-hover:scale-110 transition-all">
                      <Play size={20} className="text-white group-hover:text-[#001F3F]" fill="currentColor" />
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-[9px] font-black px-2 py-1 rounded">
                    {video.time}
                  </div>
                </div>
                <h5 className="text-white font-black text-sm mb-1">{video.title}</h5>
                <p className="text-[#FFD700] text-[9px] font-bold uppercase tracking-widest">{video.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111] text-white pt-24 pb-12 px-6 md:px-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="bg-[#FFD700] p-1.5 rounded">
                <Construction size={18} className="text-[#001F3F]" />
              </div>
              <span className="font-black tracking-tighter text-xl">ROPACA</span>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed">
              The Rotary Piles & Caster's Association of Lagos State. Dedicated to setting standards and advancing the engineering infrastructure of Nigeria.
            </p>
            <div className="flex gap-4 mt-8">
              <div className="p-2 bg-white/5 rounded-full hover:bg-[#FFD700]/20 cursor-pointer transition-colors"><Twitter size={16}/></div>
              <div className="p-2 bg-white/5 rounded-full hover:bg-[#FFD700]/20 cursor-pointer transition-colors"><Instagram size={16}/></div>
            </div>
          </div>

          <div>
            <h4 className="text-[#FFD700] text-[10px] font-black uppercase tracking-[0.4em] mb-10">Quick Links</h4>
            <ul className="space-y-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
              <li className="hover:text-white cursor-pointer transition-colors">Our Projects</li>
              <li className="hover:text-white cursor-pointer transition-colors">Member Directory</li>
              <li className="hover:text-white cursor-pointer transition-colors">Safety Guidelines</li>
              <li className="hover:text-white cursor-pointer transition-colors">Events Calendar</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#FFD700] text-[10px] font-black uppercase tracking-[0.4em] mb-10">Contact Secretariat</h4>
            <ul className="space-y-6 text-xs text-slate-500 font-medium">
              <li className="flex gap-4"><Mail size={16} className="text-[#FFD700] shrink-0" /> secretariat@ropaca.ng</li>
              <li className="flex gap-4"><Phone size={16} className="text-[#FFD700] shrink-0" /> +234 800 ROPACA</li>
              <li className="flex gap-4"><MapPin size={16} className="text-[#FFD700] shrink-0" /> Engineering Close, Ikeja, Lagos State</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#FFD700] text-[10px] font-black uppercase tracking-[0.4em] mb-10">Newsletter</h4>
            <div className="flex bg-white/5 border border-white/10 rounded-lg overflow-hidden focus-within:border-[#FFD700] transition-colors">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent px-4 py-3 text-xs w-full outline-none text-white" 
              />
              <button className="bg-[#FFD700] text-[#001F3F] p-3 hover:bg-yellow-400 transition-all">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between text-[9px] font-black text-slate-600 uppercase tracking-[0.3em]">
          <p>© 2024 ROPACA. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Use</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProjectGalleryPage;