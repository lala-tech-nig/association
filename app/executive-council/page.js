import React from 'react';
import Button from "../components/Button";
import { 
  Users, ShieldCheck, Scale, Megaphone, 
  Search, HardHat, Mail, MapPin, 
  Phone, Facebook, Twitter, Linkedin,
  ArrowRight, Grid, List, ChevronRight
} from 'lucide-react';

const RopacaExecutivePage = () => {
  const executives = [
    {
      role: "CHAIRMAN",
      name: "Engr. Adebayo",
      quote: "Building on solid foundations requires not just concrete, but character.",
      id: "ID: ROP-001",
      bgColor: "bg-[#D2C7A5]",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
    },
    {
      role: "SECRETARY",
      name: "Mrs. Okeke",
      quote: "Efficiency in motion is the hallmark of a progressive association.",
      id: "ID: ROP-002",
      bgColor: "bg-[#3D5A80]",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
    },
    {
      role: "FIN. SECRETARY",
      name: "Mr. Lawal",
      quote: "Transparency is the core of our financial integrity.",
      id: "ID: ROP-003",
      bgColor: "bg-[#98C1D9]",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
    },
    {
      role: "TREASURER",
      name: "Chief Balogun",
      quote: "Stewarding our future resources for generations to come.",
      id: "ID: ROP-004",
      bgColor: "bg-[#7B2D26]",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center px-6 overflow-hidden bg-[#001F3F]">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover"
            alt="Construction background"
          />
        </div>
        <div className="relative z-10 max-w-3xl">
          <span className="bg-[#FFD700] text-[#001F3F] px-3 py-1 text-[10px] font-black uppercase tracking-[0.3em] mb-4 inline-block">
            Our Stewardship
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tight">
            The Leadership
          </h1>
          <p className="text-white/70 text-sm md:text-lg leading-relaxed">
            Driving innovation, integrity, and sustainable growth in Lagos State's piling and casting industry through visionary governance.
          </p>
        </div>
      </section>

      {/* Executive Gallery */}
      <section className="py-24 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12 border-b pb-6">
          <div>
            <h2 className="text-2xl font-black text-[#001F3F] uppercase">Executive Gallery</h2>
            <p className="text-slate-400 text-xs mt-1">Meet the council members steering our vision.</p>
          </div>
          <div className="flex gap-2">
            <Button onClick={() => alert('Grid view')} variant="secondary" className="p-2 rounded"><Grid size={18}/></Button>
            <Button onClick={() => alert('List view')} variant="secondary" className="p-2 rounded"><List size={18}/></Button>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {executives.map((exec, i) => (
            <div key={i} className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className={`${exec.bgColor} h-[320px] relative overflow-hidden`}>
                <img 
                  src={exec.img} 
                  className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500"
                  alt={exec.name}
                />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-[#FFD700] text-[#001F3F] text-[8px] font-black px-2 py-0.5 rounded-sm">
                    {exec.role}
                  </span>
                  <h3 className="text-white font-black text-lg mt-1">{exec.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-slate-500 text-xs italic leading-relaxed mb-6 h-12">
                  "{exec.quote}"
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-slate-50">
                  <span className="text-[10px] font-bold text-slate-300 uppercase">{exec.id}</span>
                  <Button onClick={() => alert(`Open profile ${exec.name}`)} variant="secondary" className="p-0"><ArrowRight size={14} className="text-slate-300 group-hover:text-[#FFD700]" /></Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Committees Section */}
      <section className="bg-slate-50 py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-1 h-8 bg-[#FFD700]"></div>
            <h2 className="text-2xl font-black text-[#001F3F] uppercase">Committees & Units</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80" 
                  className="w-full h-[350px] object-cover"
                  alt="Committee meeting"
                />
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Our specialized committees ensure the smooth operation of every facet of the association, from technical standards to member welfare.
              </p>
            </div>
            
            <div className="space-y-4">
              {[
                { icon: <ShieldCheck size={18}/>, name: "Technical Committee", sub: "Standardization & Safety Compliance" },
                { icon: <Users size={18}/>, name: "Welfare Committee", sub: "Member Benefits & Socials" },
                { icon: <Scale size={18}/>, name: "Disciplinary Committee", sub: "Ethics & Conflict Resolution" },
                { icon: <Megaphone size={18}/>, name: "Publicity Committee", sub: "Media Relations & Events" }
              ].map((item, i) => (
                <div key={i} className="bg-white p-5 rounded-lg flex items-center justify-between border border-slate-100 hover:border-[#FFD700] hover:translate-x-2 transition-all cursor-pointer group shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="text-[#001F3F] bg-slate-50 p-3 rounded group-hover:bg-[#FFD700]/20 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-[#001F3F]">{item.name}</h4>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight">{item.sub}</p>
                    </div>
                  </div>
                  <ChevronRight size={16} className="text-slate-300 group-hover:text-[#FFD700]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Patron Section */}
      <section className="py-24 px-6 text-center">
        <span className="bg-orange-50 text-orange-600 px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest mb-4 inline-block border border-orange-100">
          ✦ Honorary Leadership
        </span>
        <h2 className="text-3xl font-black text-[#001F3F] uppercase mb-16 tracking-tight">Patron & Royal Council</h2>
        
        <div className="flex flex-wrap justify-center gap-12">
          {[
            { 
              label: "GRAND PATRON", 
              name: "HRH Oba Alabi", 
              desc: "The Olofa of Offa. A pillar of tradition and progress supporting the association.",
              img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300",
              color: "bg-[#FFD700]"
            },
            { 
              label: "ROYAL PATRON", 
              name: "Chief Dr. E.O. Okonkwo", 
              desc: "Custodian of culture and advisor to the executive council on community matters.",
              img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300",
              color: "bg-blue-700"
            }
          ].map((patron, i) => (
            <div key={i} className="max-w-xs group">
              <div className="relative mb-6 mx-auto w-64 h-80">
                <div className="absolute inset-0 rounded-t-full border-2 border-slate-100 translate-y-2"></div>
                <img 
                  src={patron.img} 
                  className="w-full h-full object-cover rounded-t-full relative z-10 grayscale group-hover:grayscale-0 transition-all duration-500"
                  alt={patron.name}
                />
                <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap px-4 py-1 ${patron.color} text-white text-[9px] font-black tracking-widest`}>
                  {patron.label}
                </div>
              </div>
              <h4 className="text-lg font-black text-[#001F3F] mb-2">{patron.name}</h4>
              <p className="text-xs text-slate-400 leading-relaxed px-4">{patron.desc}</p>
            </div>
          ))}
        </div>
      </section>

      
    </div>
  );
};

export default RopacaExecutivePage;