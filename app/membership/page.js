import React from 'react';
import { 
  HardHat, CheckCircle2, ChevronLeft, ChevronRight, 
  ArrowRight, Mail, Phone, MapPin, Globe, 
  Facebook, Twitter, Instagram, Shield 
} from 'lucide-react';

const MembershipPage = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900">
      {/* Navigation */}
      <nav className="bg-white border-b border-slate-100 py-4 px-6 md:px-20 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="bg-[#FFD700] p-1.5 rounded-lg shadow-sm">
            <HardHat size={22} className="text-[#001F3F]" />
          </div>
          <span className="font-black tracking-tighter text-2xl text-[#001F3F]">ROPACA</span>
        </div>
        <div className="hidden md:flex gap-10 text-[12px] font-bold uppercase tracking-widest text-slate-500">
          <a href="#" className="hover:text-[#001F3F] transition-colors">Home</a>
          <a href="#" className="hover:text-[#001F3F] transition-colors">About</a>
          <a href="#" className="hover:text-[#001F3F] transition-colors">Events</a>
          <a href="#" className="text-[#001F3F] border-b-2 border-[#FFD700] pb-1">Membership</a>
          <a href="#" className="hover:text-[#001F3F] transition-colors">Contact</a>
        </div>
        <button className="bg-[#001F3F] text-white px-6 py-2.5 rounded-full text-[12px] font-bold uppercase tracking-wider hover:bg-slate-800 transition-all shadow-md">
          Join Now
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-6 md:px-20 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-black uppercase tracking-widest mb-6 border border-slate-200">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              Accepting New Applications
            </span>
            <h1 className="text-6xl md:text-7xl font-black text-[#001F3F] leading-[0.95] mb-8">
              Build Your <br />
              <span className="text-[#001F3F]">Legacy with</span> <br />
              <span className="text-blue-600 italic">ROPACA</span><span className="text-[#001F3F]">.</span>
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-lg">
              The premier association for pilers and casters in Lagos State. Elevate your craft, expand your network, and shape the infrastructure of tomorrow.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#FFD700] text-[#001F3F] px-8 py-4 font-black text-sm uppercase rounded-xl hover:bg-yellow-400 transition-all shadow-lg shadow-yellow-200">
                Apply for Membership
              </button>
              <button className="bg-white border-2 border-slate-100 text-slate-600 px-8 py-4 font-bold text-sm uppercase rounded-xl hover:bg-slate-50 transition-all">
                View Benefits
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#FFD700]/20 rounded-full blur-3xl"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-[12px] border-white transform md:rotate-2">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80" 
                alt="Construction Rig" 
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Decorative yellow floating element */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#FFD700] rounded-2xl -z-10 shadow-xl"></div>
          </div>
        </div>
      </section>

      {/* Stories of Progress Slider */}
      <section className="py-24 px-6 md:px-20 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-[#001F3F]/40 font-bold text-[10px] uppercase tracking-[0.3em] mb-3">Why Join ROPACA</p>
              <h2 className="text-4xl font-black text-[#001F3F]">Stories of Progress</h2>
            </div>
            <div className="flex gap-3">
              <button className="p-3 rounded-full bg-white border border-slate-200 text-slate-400 hover:text-[#001F3F] transition-all"><ChevronLeft size={20}/></button>
              <button className="p-3 rounded-full bg-white border border-slate-200 text-slate-400 hover:text-[#001F3F] transition-all"><ChevronRight size={20}/></button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100">
              <div className="relative h-64 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Training" />
                <div className="absolute top-4 right-4 bg-[#FFD700] p-2 rounded-xl shadow-lg">
                  <Shield size={20} className="text-[#001F3F]" />
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-xl font-black text-[#001F3F] mb-4">Safety & Training</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  Access world-class safety protocols and continuous professional development workshops tailored for Lagos' unique terrain. Stay ahead of compliance.
                </p>
                <button className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-[#001F3F] border-b-2 border-[#FFD700] pb-1 hover:gap-4 transition-all">
                  Learn More <ArrowRight size={14} />
                </button>
              </div>
            </div>
            {/* Card 2 (Partial view imitation) */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 opacity-60">
               <div className="relative h-64 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Site Inspection" />
              </div>
              <div className="p-10">
                <h3 className="text-xl font-black text-[#001F3F] mb-4">Site Inspection</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  Regular standard checks and certifications that boost your firm's credibility in the eyes of major developers and state regulators.
                </p>
                <button className="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-[#001F3F] border-b-2 border-[#FFD700] pb-1">
                  Learn More <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-32 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <p className="text-blue-600 font-bold text-[10px] uppercase tracking-[0.4em] mb-4">Membership Tiers</p>
          <h2 className="text-5xl font-black text-[#001F3F] mb-6 tracking-tight">Select Your Plan</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Whether you are an established firm or a student just starting out, we have a place for you in our professional community.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {/* Associate Tier */}
          <div className="bg-white border border-slate-100 rounded-[40px] p-2 flex flex-col shadow-sm">
            <div className="h-48 rounded-[32px] overflow-hidden relative mb-8">
              <img src="https://images.unsplash.com/photo-1503387762-592dec5832f2?auto=format&fit=crop&q=60" className="w-full h-full object-cover" alt="Associate" />
              <div className="absolute inset-0 bg-[#001F3F]/40 backdrop-blur-[2px]"></div>
              <div className="absolute top-6 left-6">
                <span className="bg-white/20 backdrop-blur-md text-white text-[9px] font-black uppercase px-3 py-1 rounded-full border border-white/20">Entry Level</span>
                <h3 className="text-3xl font-black text-white mt-2">Associate</h3>
              </div>
            </div>
            <div className="px-8 pb-10 flex-grow">
              <p className="text-slate-500 text-sm mb-8">For students and apprentices building their career foundation.</p>
              <ul className="space-y-4 mb-10">
                {[ 'Access to training webinars', 'Mentorship opportunities', 'Digital ID Card' ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-xs font-bold text-slate-600">
                    <CheckCircle2 size={16} className="text-green-500 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-2xl border-2 border-slate-100 font-black text-[12px] uppercase tracking-widest text-[#001F3F] hover:bg-slate-50 transition-all">Apply Now</button>
            </div>
          </div>

          {/* Individual Tier (Most Popular) */}
          <div className="bg-[#001F3F] rounded-[40px] p-2 flex flex-col shadow-2xl transform md:-translate-y-4 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FFD700] text-[#001F3F] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest z-10 shadow-lg">Most Popular</div>
            <div className="h-48 rounded-[32px] overflow-hidden relative mb-8">
              <img src="https://images.unsplash.com/photo-1590650046871-92c887180603?auto=format&fit=crop&q=60" className="w-full h-full object-cover" alt="Individual" />
              <div className="absolute inset-0 bg-blue-600/20"></div>
              <div className="absolute top-6 left-6">
                <span className="bg-[#FFD700] text-[#001F3F] text-[9px] font-black uppercase px-3 py-1 rounded-full">Professional</span>
                <h3 className="text-3xl font-black text-white mt-2">Individual</h3>
              </div>
            </div>
            <div className="px-8 pb-10 flex-grow">
              <p className="text-slate-400 text-sm mb-8">For certified engineers, pilers, and casters actively working.</p>
              <ul className="space-y-4 mb-10">
                {[ 'Full voting rights', 'Professional indemnity advice', 'Exclusive job board access', 'Quarterly networking events' ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-xs font-bold text-white">
                    <CheckCircle2 size={16} className="text-[#FFD700] shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-2xl bg-[#FFD700] font-black text-[12px] uppercase tracking-widest text-[#001F3F] hover:bg-yellow-400 transition-all">Apply Now</button>
            </div>
          </div>

          {/* Corporate Tier */}
          <div className="bg-white border border-slate-100 rounded-[40px] p-2 flex flex-col shadow-sm">
            <div className="h-48 rounded-[32px] overflow-hidden relative mb-8">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=60" className="w-full h-full object-cover" alt="Corporate" />
              <div className="absolute inset-0 bg-[#001F3F]/40 backdrop-blur-[2px]"></div>
              <div className="absolute top-6 left-6">
                <span className="bg-white/20 backdrop-blur-md text-white text-[9px] font-black uppercase px-3 py-1 rounded-full border border-white/20">Enterprise</span>
                <h3 className="text-3xl font-black text-white mt-2">Corporate</h3>
              </div>
            </div>
            <div className="px-8 pb-10 flex-grow">
              <p className="text-slate-500 text-sm mb-8">For construction firms and suppliers seeking industry authority.</p>
              <ul className="space-y-4 mb-10">
                {[ 'Brand placement at events', 'Policy advocacy representation', 'Up to 5 individual memberships' ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-xs font-bold text-slate-600">
                    <CheckCircle2 size={16} className="text-green-500 shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-2xl border-2 border-slate-100 font-black text-[12px] uppercase tracking-widest text-[#001F3F] hover:bg-slate-50 transition-all">Apply Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Logos */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.5em] mb-10">Trusted by Industry Leaders in Lagos</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale">
            <span className="text-2xl font-black tracking-tighter">BUILDCORP</span>
            <span className="text-2xl font-black tracking-tighter flex items-center gap-1"><span className="w-4 h-4 bg-slate-900 rotate-45"></span> APEX ENG.</span>
            <span className="text-2xl italic font-serif">LagosWorks</span>
            <span className="text-2xl font-bold border-2 border-slate-900 px-2">STRUCTURA</span>
            <span className="text-2xl font-black tracking-tighter">PILEMASTER</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#001F3F] text-white pt-24 pb-12 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
             <div className="flex items-center gap-2 mb-8">
              <div className="bg-[#FFD700] p-1.5 rounded-lg">
                <HardHat size={20} className="text-[#001F3F]" />
              </div>
              <span className="font-black tracking-tighter text-2xl">ROPACA</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              The Rotary Piles & Caster's Association of Lagos State. Committed to raising the standards of foundation engineering and construction safety across Nigeria.
            </p>
            <div className="flex gap-4">
              <div className="p-2 bg-white/5 rounded-full hover:bg-[#FFD700]/20 cursor-pointer transition-colors"><Globe size={18}/></div>
              <div className="p-2 bg-white/5 rounded-full hover:bg-[#FFD700]/20 cursor-pointer transition-colors"><Twitter size={18}/></div>
              <div className="p-2 bg-white/5 rounded-full hover:bg-[#FFD700]/20 cursor-pointer transition-colors"><Instagram size={18}/></div>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] mb-8 text-[#FFD700]">Quick Links</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-400 uppercase tracking-widest text-[10px]">
              <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-white cursor-pointer transition-colors">Membership Types</li>
              <li className="hover:text-white cursor-pointer transition-colors">Events Calendar</li>
              <li className="hover:text-white cursor-pointer transition-colors">News & Updates</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] mb-8 text-[#FFD700]">Contact</h4>
            <ul className="space-y-6 text-sm text-slate-400">
              <li className="flex gap-4"><MapPin size={18} className="text-[#FFD700] shrink-0" /> 123 Construction Avenue, Ikeja, Lagos State, Nigeria</li>
              <li className="flex gap-4"><Phone size={18} className="text-[#FFD700] shrink-0" /> +234 800 ROPACA</li>
              <li className="flex gap-4"><Mail size={18} className="text-[#FFD700] shrink-0" /> info@ropaca.org</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] mb-8 text-[#FFD700]">Newsletter</h4>
            <p className="text-sm text-slate-400 mb-6">Stay updated with industry news.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email Address" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm w-full focus:outline-none focus:border-[#FFD700] transition-all" />
              <button className="bg-[#FFD700] text-[#001F3F] p-3 rounded-xl hover:bg-yellow-400 transition-all"><ArrowRight size={20}/></button>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between text-[10px] font-bold text-slate-500 uppercase tracking-widest">
          <p>© 2024 ROPACA. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MembershipPage;