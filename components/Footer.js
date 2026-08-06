'use client';

import { motion } from 'framer-motion';
import { Code2, Phone, Mail, ArrowUp } from 'lucide-react';
import { shop } from '@/lib/data';

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-chrome/10 bg-panel">
      <div className="container-x py-10 flex flex-col gap-6">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="font-display font-bold text-paper">
              HIGH <span className="text-hazard">POWER</span>{' '}
              <span className="font-mono text-xs text-chrome/60 tracking-widest">: AUTOMOBILE</span>
            </p>
            <p className="text-xs text-chrome/50 mt-1">{shop.address}</p>
          </div>
          <p className="text-xs text-chrome/40 font-mono text-center md:text-right">
            &copy; {new Date().getFullYear()} High Power : Automobile — Force Motors Spare Parts Specialist
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5" />

        {/* Developer Credit + Scroll Top */}
        <div className="flex flex-wrap items-center justify-center text-[13px] md:text-[14px] text-gray-500">
          {/* Left: Developer Info */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => window.open('https://altamash-shaikh-portfolio.vercel.app', '_blank')}
              className="flex items-center gap-1.5 hover:text-[#C89B3C] transition-colors duration-300 cursor-pointer"
              aria-label="Visit developer portfolio"
            >
              <Code2 className="w-4 h-4 text-[#C89B3C]" />
              <span>Developed by: <span className="font-medium text-gray-300 hover:text-[#C89B3C] transition-colors">ALTAMASH SHAIKH</span></span>
            </button>
            
            <span className="hidden sm:block w-px h-4 bg-white/10" />
            
            <a
              href="tel:+919766220055"
              className="flex items-center gap-1.5 hover:text-[#C89B3C] transition-colors duration-300 no-underline"
              aria-label="Call developer"
            >
              <Phone className="w-3.5 h-3.5 text-[#C89B3C]" />
              <span>+91 9766220055</span>
            </a>
            
            <span className="hidden sm:block w-px h-4 bg-white/10" />
            
            <a
              href="mailto:skaltamsh789@gmail.com"
              className="flex items-center gap-1.5 hover:text-[#C89B3C] transition-colors duration-300 no-underline"
              aria-label="Email developer"
            >
              <Mail className="w-3.5 h-3.5 text-[#C89B3C]" />
              <span>skaltamsh789@gmail.com</span>
            </a>
          </div>

          {/* Right: Scroll to Top */}
          <motion.button
            onClick={scrollTop}
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(200,155,60,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="h-9 w-9 rounded-full border border-[#C89B3C]/25 hover:bg-[#C89B3C] 
            hover:border-[#C89B3C] hover:text-black text-gray-500 transition-all duration-300 
            flex items-center justify-center"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}