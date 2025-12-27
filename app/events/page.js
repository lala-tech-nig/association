"use client";

import React from 'react';
import Button from "../components/Button";
import { 
  Play, 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  Clock, 
  MapPin, 
  ArrowRight,
  HardHat,
  Quote
} from 'lucide-react';

const AnniversaryEventsPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center px-6 md:px-20 overflow-hidden bg-[#001F3F]">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover opacity-30 grayscale"
            alt="Anniversary background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001F3F] to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-3xl">
          <div className="flex gap-2 mb-6">
            <span className="bg-[#FFD700] text-[#001F3F] px-3 py-1 text-[10px] font-black uppercase tracking-widest">Since 2014</span>
            <span className="bg-white/10 backdrop-blur-md text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest border border-white/20">10th Anniversary</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight leading-none">
            A DECADE OF <br /> <span className="text-[#FFD700]">FOUNDATION</span>
          </h1>
          <p className="text-white/70 text-sm md:text-lg mb-10 leading-relaxed max-w-xl">
            Honoring the past, building the future. Join us in celebrating 10 years of ROPACA's excellence in piling and casting across Lagos State.
          </p>
          <div className="flex gap-4">
            <Button onClick={() => alert('Playing documentary...')} variant="primary" className="flex items-center gap-2"><Play size={14} /> Watch Documentary</Button>
            <Button href="/projects" variant="secondary">View Gallery</Button>
          </div>
        </div>
      </section>

      {/* Gala Night Pictures */}
      <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-2">The Celebration</p>
            <h2 className="text-3xl font-black text-[#001F3F] uppercase tracking-tight">The Gala Night in Pictures</h2>
          </div>
            <div className="flex gap-3">
            <Button onClick={() => alert('Prev')} variant="secondary" className="p-3 rounded-full border"> <ChevronLeft size={20}/> </Button>
            <Button onClick={() => alert('Next')} variant="primary" className="p-3 rounded-full"> <ChevronRight size={20}/> </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "The Grand Opening", desc: "Honoring our founding members with a toast.", img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80" },
            { title: "Award Ceremony", desc: "Recognizing excellence in piling and casting.", img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80" },
            { title: "Gala Dinner", desc: "A night of networking, music and celebration.", img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80" }
          ].map((item, i) => (
            <div key={i} className="group">
              <div className="h-64 rounded-2xl overflow-hidden mb-6">
                <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={item.title} />
              </div>
              <h4 className="font-black text-[#001F3F] text-lg mb-2 uppercase tracking-tight">{item.title}</h4>
              <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Guest Highlights (Quotes) */}
      <section className="bg-slate-50 py-24 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-slate-400 text-[10px] font-bold uppercase tracking-[0.4em] mb-4">Voices of ROPACA</p>
          <h2 className="text-center text-3xl font-black text-[#001F3F] uppercase mb-16 tracking-tight">Guest Highlights & Speeches</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "Engr. Tunde Adeyemi", role: "President, ROPACA", text: "The resilience of our members over the last ten years has been the bedrock of Lagos State's infrastructure development. We are not just builders; we are the foundation." },
              { name: "Hon. Sarah Olatipo", role: "Commissioner for Housing", text: "ROPACA has set a standard for industrial safety and quality that is unmatched. This anniversary marks a turning point towards even greater technological adoption." }
            ].map((quote, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 relative">
                <Quote className="absolute top-6 right-8 text-slate-100" size={48} />
                <p className="text-slate-500 italic text-sm leading-relaxed mb-8 relative z-10">"{quote.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt={quote.name} />
                  </div>
                  <div>
                    <h5 className="font-black text-[#001F3F] text-xs uppercase">{quote.name}</h5>
                    <p className="text-[10px] font-bold text-[#FFD700] uppercase tracking-widest">{quote.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestone Timeline */}
      <section className="py-24 px-6 md:px-20 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl font-black text-[#001F3F] uppercase leading-tight mb-8">A Decade of <br /> Milestones</h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">From our humble beginnings to becoming the leading association for Piling & Casters in Lagos.</p>
            <button className="flex items-center gap-2 text-[11px] font-black uppercase text-blue-600 hover:gap-4 transition-all">
              View Full History <ArrowRight size={14} />
            </button>
          </div>
          <div className="space-y-12 relative border-l-2 border-slate-100 pl-8 ml-4">
            {[
              { year: "2014", title: "Association Founded", desc: "ROPACA was officially registered with 15 founding member companies aimed at regulating piling standards." },
              { year: "2018", title: "First Technical Workshop", desc: "Held the inaugural safety and technical workshop attended by over 200 industry engineers." },
              { year: "2020", title: "COVID-19 Relief Fund", desc: "Distributed support packages to 500+ workers affected by the pandemic construction halt." },
              { year: "2024", title: "10th Anniversary Gala", desc: "Celebrating a decade of excellence and launching the new ROPACA digital database." }
            ].map((milestone, i) => (
              <div key={i} className="relative">
                <div className={`absolute -left-[41px] top-0 w-5 h-5 rounded-full border-4 border-white shadow-sm ${milestone.year === '2014' ? 'bg-[#FFD700]' : 'bg-slate-300'}`}></div>
                <span className="text-[10px] font-black text-slate-300 mb-2 block">{milestone.year}</span>
                <h4 className="font-black text-[#001F3F] text-sm mb-2 uppercase">{milestone.title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{milestone.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-slate-50 py-24 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-16">
            <div>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em] mb-2">Stay Connected</p>
              <h2 className="text-3xl font-black text-[#001F3F] uppercase tracking-tight">Upcoming Events</h2>
            </div>
            <Button href="/events/calendar" variant="secondary" className="px-6 py-2 border border-slate-200 rounded-lg text-[10px] font-black uppercase text-slate-400">View Calendar</Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                date: { month: "OCT", day: "24" }, 
                title: "Advanced Piling Techniques 2024", 
                type: "Technical Workshop",
                time: "10:00 AM",
                loc: "Gaston & Color, VI",
                img: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80"
              },
              { 
                date: { month: "NOV", day: "15" }, 
                title: "Q4 General Assembly", 
                type: "General Meeting",
                time: "02:00 PM",
                loc: "ROPACA HQ, Ikeja",
                img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80"
              },
              { 
                date: { month: "DEC", day: "10" }, 
                title: "End of Year Party", 
                type: "Social",
                time: "06:00 PM",
                loc: "Eko Hotel, VI",
                img: "https://images.unsplash.com/photo-1516937622548-a5c136e95af2?auto=format&fit=crop&q=80"
              }
            ].map((event, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-500">
                <div className="h-48 relative overflow-hidden">
                  <img src={event.img} className="w-full h-full object-cover" alt={event.title} />
                  <div className="absolute top-4 left-4 bg-white rounded-xl p-2 text-center shadow-lg w-12">
                    <p className="text-[8px] font-black text-slate-400 uppercase leading-none">{event.date.month}</p>
                    <p className="text-lg font-black text-[#001F3F] leading-none">{event.date.day}</p>
                  </div>
                </div>
                <div className="p-8">
                  <span className="flex items-center gap-2 text-[9px] font-black text-blue-600 uppercase tracking-widest mb-4">
                    <div className="w-1 h-1 rounded-full bg-blue-600"></div> {event.type}
                  </span>
                  <h4 className="font-black text-[#001F3F] text-sm mb-6 h-10 leading-snug uppercase tracking-tight">{event.title}</h4>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-slate-400">
                      <Clock size={14} className="text-[#FFD700]" /> <span className="text-[10px] font-bold uppercase">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-400">
                      <MapPin size={14} className="text-[#FFD700]" /> <span className="text-[10px] font-bold uppercase">{event.loc}</span>
                    </div>
                  </div>
                  <Button onClick={() => alert('Thanks — we registered your interest!')} className={`w-full py-3 rounded-xl font-black text-[10px] uppercase tracking-widest ${i === 0 ? 'bg-[#FFD700] text-[#001F3F]' : 'border border-slate-100 text-slate-400'}`}>
                    {i === 0 ? 'RSVP Now' : i === 2 ? 'Get Tickets' : 'Register Interest'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default AnniversaryEventsPage;