import React from 'react';
import { Twitter, Instagram, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1a2332] text-gray-400 py-16 px-6 md:px-20 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Column 1: Brand & Description */}
        <div className="flex flex-col space-y-6">
          <div className="flex items-center space-x-3">
            <div className="bg-[#facc15] p-2 rounded-md">
              {/* Simplified representation of the logo icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z" />
              </svg>
            </div>
            <h2 className="text-white text-2xl font-bold tracking-tight">ROPACA</h2>
          </div>
          <p className="text-sm leading-relaxed max-w-xs">
            The Rotary Pilers & Caster's Association of Lagos State. 
            Dedicated to setting standards and advancing the engineering 
            infrastructure of Nigeria.
          </p>
          <div className="flex space-x-6 pt-4">
            <a href="#" className="hover:text-white transition-colors">
              <Twitter size={24} fill="currentColor" />
            </a>
            <a href="#" className="hover:text-white transition-colors">
              <Instagram size={24} />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col space-y-6">
          <h3 className="text-white text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-4">
            {['Our Projects', 'Member Directory', 'Safety Guidelines', 'Events Calendar'].map((link) => (
              <li key={link} className="flex items-center group cursor-pointer hover:text-white transition-colors">
                <ChevronRight size={14} className="mr-2 group-hover:translate-x-1 transition-transform" />
                <span className="text-sm">{link}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Secretariat */}
        <div className="flex flex-col space-y-6">
          <h3 className="text-white text-lg font-semibold">Contact Secretariat</h3>
          <ul className="space-y-5">
            <li className="flex items-start space-x-3">
              <Mail size={18} className="text-[#facc15] mt-0.5" />
              <span className="text-sm hover:text-white cursor-pointer transition-colors">
                secretariat@ropaca.ng
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <Phone size={18} className="text-[#facc15] mt-0.5" />
              <span className="text-sm hover:text-white cursor-pointer transition-colors">
                +234 800 ROPACA
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <MapPin size={18} className="text-[#facc15] mt-0.5" />
              <span className="text-sm leading-tight">
                Engineering Close,<br />
                Ikeja, Lagos State
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-gray-700 flex flex-col md:row items-center justify-between text-xs space-y-4 md:space-y-0">
        <p>© 2024 ROPACA. All rights reserved.</p>
        <div className="flex space-x-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;