"use client";

import React from 'react';
import Button from "../components/Button";
import { 
  History, Target, Shield, HardHat, 
  Gem, Users, Mail, Phone, MapPin, 
  Facebook, Twitter, ChevronRight, ArrowRight 
} from 'lucide-react';

const RopacaAboutPage = () => {
  return (
    <div className="bg-white font-sans text-slate-900">
      

      {/* Header Section */}
      <header className="py-20 px-6 text-center max-w-4xl mx-auto">
        <div className="inline-block bg-slate-100 px-3 py-1 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-6">
          • THE ORIGIN STORY
        </div>
        <h1 className="text-5xl md:text-6xl font-black text-[#001F3F] mb-6 tracking-tight">
          FORGED IN LAG<span className="text-[#FFD700]">OS</span>
        </h1>
        <p className="text-slate-500 leading-relaxed text-sm md:text-base">
          Documenting the evolution of West Africa's premier piling and casting association. 
          From a small gathering of engineers to a standard-bearing institution.
        </p>
      </header>

      {/* Featured Historical Image */}
      <section className="px-6 md:px-20 mb-24">
        <div className="relative group overflow-hidden rounded-xl shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80" 
            alt="Historical Construction" 
            className="w-full h-[400px] object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute bottom-6 left-6 text-white text-[10px] font-medium bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            • ARCHIVE PHOTO: EARLY SITE INSPECTION - CIRCA 1994
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="px-6 md:px-20 max-w-5xl mx-auto mb-32">
        <div className="relative border-l-2 border-slate-100 ml-4 md:ml-0 md:left-4 space-y-20 pb-10">
          
          {/* Milestone 1 */}
          <div className="relative pl-12">
            <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-[#FFD700] border-4 border-white shadow-sm"></div>
            <div className="grid md:grid-cols-3 gap-8 items-center bg-slate-50/50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-shadow">
              <div className="md:col-span-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">The Beginning</span>
                <h3 className="text-xl font-black text-[#001F3F] mb-4">The Foundation</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  A group of 12 piling specialists gathered in a small office in Lagos Island to discuss safety standards and a construction boom. What started as a safety meeting became a movement.
                </p>
                <Button href="/about#minutes" className="text-[11px] font-bold flex items-center gap-2 group" variant="secondary">Read Minutes <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" /></Button>
              </div>
              <div className="h-40 bg-slate-200 rounded-lg overflow-hidden grayscale">
                <img src="https://images.unsplash.com/photo-1503387762-592dec5832f2?auto=format&fit=crop&q=60" className="w-full h-full object-cover" alt="Foundation" />
              </div>
            </div>
          </div>

          {/* Milestone 2 */}
          <div className="relative pl-12">
            <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-slate-200 border-4 border-white"></div>
            <div className="grid md:grid-cols-3 gap-8 items-center bg-slate-50/50 p-8 rounded-2xl border border-slate-100">
              <div className="md:col-span-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">Expansion</span>
                <h3 className="text-xl font-black text-[#001F3F] mb-4">State Recognition</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Official charter granted by the Lagos State Government. The Ikoyi Secretariat opens its doors to members, establishing a central hub for training and licensing verification.
                </p>
              </div>
              <div className="h-40 bg-slate-200 rounded-lg overflow-hidden grayscale">
                <img src="https://images.unsplash.com/photo-1517089535819-3d85693291ce?auto=format&fit=crop&q=60" className="w-full h-full object-cover" alt="Hardhat" />
              </div>
            </div>
          </div>

          {/* Milestone 3 (Current) */}
          <div className="relative pl-12">
            <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-[#001F3F] border-4 border-white"></div>
            <div className="grid md:grid-cols-3 gap-8 items-center bg-white p-8 rounded-2xl border-2 border-[#FFD700] shadow-2xl">
              <div className="md:col-span-2">
                <span className="text-[10px] font-bold text-[#FFD700] uppercase tracking-widest block mb-2">Today</span>
                <h3 className="text-xl font-black text-[#001F3F] mb-4">Modernization Era</h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Integrating digital blueprints and automated casting checks into the standard curriculum for all licensed members. We are building the future of Lagos, smartly.
                </p>
              </div>
              <div className="h-40 bg-slate-200 rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=60" className="w-full h-full object-cover" alt="Tech" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="grid md:grid-cols-2">
        <div className="h-[500px] overflow-hidden relative">
          <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Engineer" />
          <div className="absolute bottom-8 left-8 border-l-2 border-[#FFD700] pl-4 text-white">
            <p className="text-xs font-bold uppercase">Site Inspection, Lekki Phase 1</p>
            <p className="text-[10px] opacity-60">Photographed by T. Adebayo</p>
          </div>
        </div>
        <div className="bg-slate-50 flex flex-col justify-center p-12 md:p-24 space-y-12">
          <div className="flex gap-6">
            <div className="bg-white p-3 h-fit rounded shadow-sm text-[#001F3F]"><Target size={24} /></div>
            <div>
              <h4 className="font-black text-sm uppercase tracking-widest mb-2">Our Vision</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                To be the premier regulatory and support body for all rotary piling and casting professionals in West Africa, driving the standard for industrial safety and engineering excellence.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="bg-white p-3 h-fit rounded shadow-sm text-[#001F3F]"><History size={24} /></div>
            <div>
              <h4 className="font-black text-sm uppercase tracking-widest mb-2">Our Mission</h4>
              <p className="text-sm text-slate-500 leading-relaxed">
                To ensure every project adheres to the highest standards of safety, accuracy, and structural integrity through education, regulation, and strict community oversight.
              </p>
            </div>
          </div>
          <Button href="/about#constitution" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest group" variant="secondary">Read Our Full Constitution <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" /></Button>
        </div>
      </section>

      {/* Core Philosophy Section */}
      <section className="bg-[#001F3F] py-24 px-6 md:px-20 text-white relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute right-0 bottom-0 opacity-5 scale-150"><HardHat size={400} /></div>
        
        <div className="grid md:grid-cols-2 gap-12 relative z-10">
          <div>
            <span className="text-[10px] font-bold text-[#FFD700] uppercase tracking-widest mb-4 block">OUR CORE PHILOSOPHY</span>
            <h2 className="text-6xl font-black mb-6">WORK FOR <br /><span className="text-[#FFD700]">ACCURACY</span></h2>
          </div>
          <div className="flex items-end">
            <p className="text-slate-400 text-sm leading-relaxed border-l border-white/10 pl-8">
              Precision isn't just a metric; it's our pledge. Every pile driven, every cast set, defines the safety of our skyline.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 relative z-10">
          {[
            { icon: <Target size={20} />, label: "Precision", desc: "Zero tolerance for error in foundation measurement." },
            { icon: <Shield size={20} />, label: "Safety", desc: "Protecting our workforce is protecting our future." },
            { icon: <Gem size={20} />, label: "Integrity", desc: "Honest dealings in every contract and inspection." },
            { icon: <Users size={20} />, label: "Community", desc: "Building a brotherhood of skilled professionals." },
          ].map((item, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-sm p-8 border border-white/10 hover:bg-white/10 transition-colors group">
              <div className="text-[#FFD700] mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
              <h5 className="font-bold text-sm mb-2">{item.label}</h5>
              <p className="text-[10px] text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      
    </div>
  );
};

export default RopacaAboutPage;