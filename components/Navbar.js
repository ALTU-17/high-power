'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';
import { shop } from '@/lib/data';

const LINKS = [
  { num: '01', label: 'Vehicles', href: '#vehicles' },
  { num: '02', label: 'Brands', href: '#brands' },
  { num: '03', label: 'Services', href: '#services' },
  { num: '04', label: 'About', href: '#about' },
  { num: '05', label: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div
        className={`transition-all duration-300 ${
          scrolled ? 'bg-asphalt/95 backdrop-blur-sm shadow-lg shadow-black/30' : 'bg-transparent'
        }`}
      >
        <div className="container-x flex items-center justify-between" style={{ height: scrolled ? 64 : 84 }}>
          <a href="#top" className="flex flex-col leading-none group">
            <span className="font-display font-bold tracking-wide text-xl md:text-2xl text-paper">
              HIGH <span className="text-hazard">POWER</span>
            </span>
            <span className="font-mono text-[10px] tracking-[0.3em] text-chrome/70 uppercase">
              : Automobile
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-7">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group flex items-center gap-2 font-body text-sm text-chrome/85 hover:text-paper transition-colors"
              >
                <span className="font-mono text-[10px] text-hazard">{l.num}</span>
                {l.label}
                <span className="block h-[1px] w-0 group-hover:w-full bg-hazard transition-all duration-300" />
              </a>
            ))}
            <a
              href={`https://wa.me/${shop.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-hazard text-asphalt font-display font-semibold text-sm px-4 py-2 rounded-sm hover:brightness-110 transition"
            >
              <MessageCircle size={16} strokeWidth={2.5} />
              WhatsApp
            </a>
          </nav>

          <button
            className="lg:hidden text-paper"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={26} />
          </button>
        </div>
      </div>
      <div className="h-[3px] bg-hazard-stripes" />

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] bg-asphalt/80 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="absolute top-0 right-0 h-full w-[78%] max-w-xs bg-panel border-l border-chrome/15 p-6 flex flex-col gap-6"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end">
                <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-paper">
                  <X size={24} />
                </button>
              </div>
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 font-display text-lg text-paper"
                >
                  <span className="font-mono text-xs text-hazard">{l.num}</span>
                  {l.label}
                </a>
              ))}
              <a
                href={`https://wa.me/${shop.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 bg-hazard text-asphalt font-display font-semibold py-3 rounded-sm"
              >
                <MessageCircle size={18} strokeWidth={2.5} />
                Chat on WhatsApp
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
