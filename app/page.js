"use client";

import React, { useState } from 'react';
import {
  Menu, X, HardHat, ShieldCheck, Users,
  Construction, Settings, Factory, GraduationCap,
  ArrowRight, Phone, Mail, MapPin, Facebook, Twitter, Linkedin
} from 'lucide-react';

const ROPACALandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-sans text-gray-900 bg-white">

      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80"
            className="w-full h-full object-cover brightness-50"
            alt="Construction rig"
          />
        </div>

        <div className="relative z-10 px-6 md:px-24 w-full grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#FFD700] font-bold tracking-[0.2em] mb-4 text-sm">DRILLING / PILING / SAFETY</p>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
              PRECISION IN <br /> <span className="text-[#FFD700]">EVERY PILE</span>
            </h1>
            <p className="text-gray-200 max-w-md mb-8 leading-relaxed">
              The Rotary Pilers And Casters Association of Lagos state (ROPACA) sets the standards for heavy construction, safety, and professional integrity.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/membership" variant="primary" className="px-8 py-4 font-bold flex items-center gap-2 hover:bg-yellow-500 transition">
                MEMBERSHIP <ArrowRight size={18} />
              </Button>
              <Button href="/BYE-LAW FOR ROPACA_Phoenix.pdf" download variant="secondary" className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 font-bold hover:bg-white/20 transition flex items-center gap-2">
                Download Our Guide <ArrowRight size={18} />
              </Button>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-lg max-w-xs ml-auto">
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="text-[#FFD700]" />
                <span className="text-white text-xs font-bold uppercase tracking-widest">Certified Excellence</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-white text-3xl font-black">500+</span>
                <span className="text-white text-3xl font-black">100%</span>
              </div>
              <div className="flex justify-between text-[10px] text-gray-300 uppercase tracking-tighter">
                <span>MEMBERS</span>
                <span>COMPLIANCE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-[#FFD700] py-8 px-6 md:px-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: <ShieldCheck />, title: "BE CERTIFIED", desc: "MAKE YOUR BUSINESS ELITE" },
          { icon: <HardHat />, title: "EXPERT PILING", desc: "MODERN SENSORS" },
          { icon: <MapPin />, title: "LAGOS & BEYOND", desc: "OPERATIONAL RANGE" }
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-4 border-r border-[#001F3F]/10 last:border-0">
            <div className="text-[#001F3F]">{item.icon}</div>
            <div>
              <h4 className="font-black text-[#001F3F] text-sm">{item.title}</h4>
              <p className="text-[#001F3F]/70 text-[10px] font-bold uppercase">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* About Section */}
      <section className="py-24 px-6 md:px-24 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-[#001F3F]/40 font-bold text-xs tracking-widest mb-4">OUR MISSION</p>
          <h2 className="text-4xl font-black text-[#001F3F] leading-tight mb-6">
            THE BACKBONE <br /> OF CONSTRUCTION
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            We are a collective of professionals dedicated to precision, piling, and casting. For over two decades, ROPACA has been instrumental in shaping the skyline of Lagos through foundational integrity.
          </p>
          <a href="#" className="text-[#001F3F] font-bold flex items-center gap-2 group">
            READ FULL STORY <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="relative h-48 overflow-hidden rounded shadow-xl">
              <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-end p-4 text-white text-[10px] font-black uppercase tracking-widest">Fabrication Yards</div>
            </div>
            <div className="relative h-64 overflow-hidden rounded shadow-xl">
              <img src="https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-end p-4 text-white text-[10px] font-black uppercase tracking-widest">Unity in Labor</div>
            </div>
          </div>
          <div className="space-y-4 pt-8">
            <div className="relative h-64 overflow-hidden rounded shadow-xl">
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-end p-4 text-white text-[10px] font-black uppercase tracking-widest">On-Site Mastery</div>
            </div>
            <div className="relative h-48 overflow-hidden rounded shadow-xl">
              <img src="https://images.unsplash.com/photo-1516937622548-a5c136e95af2?auto=format&fit=crop&q=80" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-end p-4 text-white text-[10px] font-black uppercase tracking-widest">Heavy Machinery</div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="bg-gray-50 py-24 px-6 md:px-24">
        <div className="text-center mb-16">
          <p className="text-[#001F3F]/40 font-bold text-xs tracking-widest mb-2 uppercase">What we offer</p>
          <h2 className="text-4xl font-black text-[#001F3F]">INDUSTRIAL <span className="text-[#FFD700]">SOLUTIONS</span></h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: <Construction />, title: "PILING OPERATIONS", desc: "Expert foundation piling using modern rigs for stability in challenging terrains." },
            { icon: <Settings />, title: "CASTING SERVICES", desc: "Precision concrete casting for beams, columns, and custom structural elements." },
            { icon: <Factory />, title: "RIG FABRICATION", desc: "Local fabrication, repair, and maintenance of heavy-duty piling equipment." },
            { icon: <GraduationCap />, title: "CONSULTANCY", desc: "Professional advice on soil testing, structural integrity, and project planning." }
          ].map((card, i) => (
            <div key={i} className="bg-white p-8 border-b-4 border-transparent hover:border-[#FFD700] transition-all shadow-sm group">
              <div className="bg-gray-100 p-3 w-fit mb-6 text-[#001F3F] group-hover:bg-[#FFD700] transition-colors">{card.icon}</div>
              <h4 className="font-black text-sm mb-4 tracking-tighter text-[#001F3F]">{card.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed mb-6">{card.desc}</p>
              <button className="text-[10px] font-bold text-[#001F3F] uppercase border-b border-[#001F3F]/20 hover:border-[#FFD700] pb-1 transition-all">Explore</button>
            </div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-[#001F3F] py-24 px-6 md:px-24 text-white">
        <div className="mb-16">
          <p className="text-[#FFD700] font-bold text-xs tracking-widest mb-2">OUR CORE VALUES</p>
          <h2 className="text-4xl font-black">WHAT <span className="text-[#FFD700]">ROPACA</span> STANDS FOR</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: "01", title: "SAFETY FIRST", desc: "Zero-hazard environments are our priority. We implement rigorous safety protocols for every piling operation." },
            { icon: "02", title: "VERIFIED PROS", desc: "A centralized database ensuring every member is vetted, skilled, and certified for heavy-duty tasks." },
            { icon: "03", title: "SKILL TRAINING", desc: "Continuous technical workshops and certificate programs to upgrade the proficiency of our workforce." }
          ].map((value, i) => (
            <div key={i} className="relative group overflow-hidden border border-white/10 p-10 bg-white/5 hover:bg-[#FFD700]/10 transition-all">
              <span className="absolute -top-4 -right-4 text-8xl font-black text-white/5 group-hover:text-[#FFD700]/10 transition-all">{value.icon}</span>
              <div className="w-10 h-1 bg-[#FFD700] mb-6"></div>
              <h4 className="text-xl font-black mb-4">{value.title}</h4>
              <p className="text-sm text-gray-400 leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-white px-6 md:px-24">
        <div className="grid md:grid-cols-2 items-center gap-12">
          <div>
            <p className="text-gray-400 font-bold text-xs uppercase mb-2">OUR IMPACT</p>
            <h2 className="text-4xl font-black text-[#001F3F]">BUILDING THE FUTURE OF NIGERIA</h2>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center border-r border-gray-100">
              <span className="block text-3xl font-black text-[#001F3F]">500+</span>
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Members</span>
            </div>
            <div className="text-center border-r border-gray-100">
              <span className="block text-3xl font-black text-[#001F3F]">1k+</span>
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Projects</span>
            </div>
            <div className="text-center">
              <span className="block text-3xl font-black text-[#001F3F]">02</span>
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Decades</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#1a1a1a] py-24 px-6 md:px-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-white uppercase tracking-tighter">Voices from the <span className="text-[#FFD700]">Industry</span></h2>
          <p className="text-gray-500 text-xs mt-2 uppercase tracking-widest">Trusted by leading construction firms and engineers</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="bg-[#222] p-10 border-t-2 border-[#FFD700]">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, star) => <div key={star} className="w-2 h-2 bg-[#FFD700] rounded-full"></div>)}
              </div>
              <p className="text-gray-400 italic text-sm leading-loose mb-8">
                "ROPACA has transformed how we handle soil foundations. Their certified members bring a level of precision that is unmatched in Lagos."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gray-700 rounded-full overflow-hidden">
                  <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                </div>
                <div>
                  <h5 className="text-white font-bold text-xs uppercase">John Doe</h5>
                  <p className="text-[#FFD700] text-[10px] font-bold">Project Manager, BuildIt</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ROPACALandingPage;