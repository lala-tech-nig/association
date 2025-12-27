"use client";

import React from 'react';
import Button from "../components/Button";
import { 
  Mail, 
  PhoneCall, 
  MessageSquare, 
  MapPin, 
  Clock, 
  Navigation, 
  ArrowRight,
  HardHat,
  Facebook,
  Twitter,
  Instagram,
  Globe
} from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      

      {/* Hero Header */}
      <section className="relative pt-24 pb-32 bg-[#001F3F] text-center px-6 overflow-hidden">
        {/* Subtle Background Texture */}
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover"
            alt="Background"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#FFD700]"></span>
            <span className="text-white text-[10px] font-black uppercase tracking-widest">Contact Us</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight uppercase leading-none">
            Get In <span className="text-[#FFD700]">Touch</span>
          </h1>
          <p className="text-white/50 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed uppercase font-bold tracking-widest">
            Reach out to our teams in Lagos and Ogun states for inquiries, support, and membership.
          </p>
        </div>
      </section>

      {/* Contact Channels Cards */}
      <section className="px-6 md:px-20 -mt-16 relative z-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <Mail className="text-blue-600" size={24} />,
              title: "General Inquiries",
              desc: "For general questions about ROPACA, our mission, or upcoming events.",
              action: "info@ropaca.ng",
              link: "mailto:info@ropaca.ng"
            },
            {
              icon: <PhoneCall className="text-blue-600" size={24} />,
              title: "Support & Dispatch",
              desc: "Direct line for member support, dispatch services, and operational help.",
              action: "+234 800 123 4567",
              link: "tel:+2348001234567"
            },
            {
              icon: <MessageSquare className="text-blue-600" size={24} />,
              title: "Membership",
              desc: "Interested in joining? Connect directly with our membership team on WhatsApp.",
              action: "Chat on WhatsApp",
              link: "#"
            }
          ].map((card, i) => (
            <div key={i} className="bg-white rounded-[32px] p-10 shadow-xl shadow-slate-200/50 border border-slate-50 flex flex-col items-start group hover:-translate-y-2 transition-all duration-300">
              <div className="bg-slate-50 p-4 rounded-2xl mb-8 group-hover:bg-blue-50 transition-colors">
                {card.icon}
              </div>
              <h3 className="text-xl font-black text-[#001F3F] mb-4 uppercase tracking-tight">{card.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">{card.desc}</p>
              <a href={card.link} className="mt-auto flex items-center gap-2 text-xs font-black text-[#001F3F] uppercase tracking-widest border-b-2 border-[#FFD700] pb-1 hover:gap-4 transition-all">
                {card.action} <ArrowRight size={14} />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Lagos Headquarters Section */}
      <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-3">Administrative Center</p>
            <h2 className="text-4xl font-black text-[#001F3F] uppercase tracking-tighter">Lagos Headquarters</h2>
          </div>
          <Button onClick={() => alert('Opening map...')} className="flex items-center gap-2 bg-white border border-slate-200 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-500"> <Navigation size={14} /> Get Directions</Button>
        </div>

        <div className="grid md:grid-cols-2 rounded-[40px] overflow-hidden shadow-2xl border border-slate-100 h-[500px]">
          {/* Image & Address Overlay */}
          <div className="relative group">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" 
              className="w-full h-full object-cover"
              alt="Lagos HQ"
            />
            <div className="absolute inset-0 bg-[#001F3F]/40 group-hover:bg-[#001F3F]/20 transition-all duration-500"></div>
            <div className="absolute bottom-10 left-10 right-10">
              <span className="bg-[#FFD700] text-[#001F3F] text-[9px] font-black uppercase px-3 py-1 rounded-full mb-4 inline-block tracking-widest">Head Office</span>
              <h4 className="text-white text-3xl font-black leading-tight mb-6">123 Construction Ave, Victoria Island, Lagos State.</h4>
              <div className="flex items-center gap-2 text-white/80 text-[10px] font-bold uppercase tracking-widest">
                <Clock size={14} className="text-[#FFD700]" /> 8:00 AM - 5:00 PM
              </div>
            </div>
          </div>
          {/* Mock Map View */}
          <div className="bg-slate-50 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-50"></div>
            <div className="relative text-center">
              <div className="bg-white p-4 rounded-full shadow-2xl mb-4 inline-block border-4 border-white">
                <MapPin size={32} className="text-[#001F3F]" fill="#FFD700" />
              </div>
              <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.5em]">Map View Loading...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ogun Operational Hub Section */}
      <section className="pb-32 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <p className="text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-3">Technical Yard</p>
            <h2 className="text-4xl font-black text-[#001F3F] uppercase tracking-tighter">Ogun Operational Hub</h2>
          </div>
          <Button onClick={() => alert('Opening map...')} className="flex items-center gap-2 bg-white border border-slate-200 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-500"> <Navigation size={14} /> Get Directions</Button>
        </div>

        <div className="grid md:grid-cols-2 rounded-[40px] overflow-hidden shadow-2xl border border-slate-100 h-[500px]">
          {/* Mock Map View Left */}
          <div className="bg-slate-100 flex items-center justify-center relative border-r border-slate-200">
             <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80" 
              className="w-full h-full object-cover opacity-50"
              alt="Map Background"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
               <div className="bg-[#FFD700] p-4 rounded-full shadow-2xl animate-bounce">
                <MapPin size={24} className="text-[#001F3F]" />
              </div>
            </div>
          </div>
          {/* Operational Hub Right */}
          <div className="relative group">
            <img 
              src="https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80" 
              className="w-full h-full object-cover"
              alt="Ogun Yard"
            />
            <div className="absolute inset-0 bg-[#001F3F]/40 group-hover:bg-[#001F3F]/20 transition-all duration-500"></div>
            <div className="absolute bottom-10 left-10 right-10">
              <span className="bg-[#FFD700] text-[#001F3F] text-[9px] font-black uppercase px-3 py-1 rounded-full mb-4 inline-block tracking-widest">Operational Hub</span>
              <h4 className="text-white text-3xl font-black leading-tight mb-6">45 Industrial Layout, Ota, Ogun State.</h4>
              <div className="flex items-center gap-2 text-white/80 text-[10px] font-bold uppercase tracking-widest">
                <Clock size={14} className="text-[#FFD700]" /> 7:00 AM - 6:00 PM
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default ContactPage;