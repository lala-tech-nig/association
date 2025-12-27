"use client";

import React, { useState } from 'react';
import Button from "../components/Button";
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
            <Button onClick={() => alert('Playing showreel...')} variant="primary" className="flex items-center gap-3"><div className="bg-[#001F3F] rounded-full p-1"><Play size={12} className="text-white"/></div>Watch Showreel</Button>
            <Button href="/projects#gallery" variant="secondary">View Gallery</Button>
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
          <Button onClick={() => alert('Loading more projects...')} className="inline-flex items-center gap-3 px-8 py-4 border-2 border-slate-100 rounded-full text-xs font-black uppercase tracking-[0.2em] text-[#001F3F]">Load More Projects <ArrowRight size={16} /></Button>
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

      
    </div>
  );
};

export default ProjectGalleryPage;