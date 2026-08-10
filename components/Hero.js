'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { MessageCircle, Phone, ChevronDown } from 'lucide-react';
import { shop } from '@/lib/data';

const WORD_0 = 'New';
const WORD_1 = 'HIGH';
const WORD_2 = 'POWER';

const letterVariants = {
  hidden: { y: '110%', opacity: 0 },
  show: (i) => ({
    y: 0,
    opacity: 1,
    transition: { delay: 1 + i * 0.045, duration: 0.65, ease: [0.22, 1, 0.36, 1] }
  })
};

function AnimatedWord({ word, startIndex, colorClass, isVisible }) {
  return (
    <span className="inline-flex overflow-hidden">
      {word.split('').map((ch, i) => (
        <motion.span
          key={i}
          custom={startIndex + i}
          variants={letterVariants}
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          className={`inline-block ${colorClass}`}
        >
          {ch}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const gridY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const fade = useTransform(scrollYProgress, [0, 1], [1, 0]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Cinematic delay - show content after 3 seconds
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2000);

    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section id="top" ref={ref} className="relative min-h-[100svh] flex items-center overflow-hidden pt-20">
      {/* Background Video - Mobile Only - Shows immediately */}
      {isMobile && !videoError && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onError={() => setVideoError(true)}
        >
          <source src="/videos/mobintro.mp4" type="video/mp4" />
        </video>
      )}

      {/* Background Video - Desktop - Shows immediately */}
      {(!isMobile || videoError) && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onError={() => setVideoError(true)}
        >
          <source src="/videos/pcintro.mp4" type="video/mp4" />
        </video>
      )}

      {/* Gradient Overlay - Always visible */}
      <div className="absolute inset-0 bg-gradient-to-b from-asphalt/20 via-asphalt/60 to-asphalt" />

      {/* Video Overlay - Darkens video for better text readability */}
      {isMobile && !videoError && (
        <div className="absolute inset-0 bg-black/50" />
      )}

      {/* Content - Appears after 3 seconds */}
      <motion.div 
        className="relative container-x py-16 z-10 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
          transition={{ delay: 3.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 stat-plate rounded-sm px-3 py-1.5 mb-6"
        >
          <motion.span 
            initial={{ scale: 0 }}
            animate={showContent ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 3.2, duration: 0.5 }}
            className="w-1.5 h-1.5 rounded-full bg-hazard animate-pulse" 
          />
          <span className="font-mono text-[11px] tracking-[0.15em] text-chrome uppercase">
            Force Motors Genuine &amp; Compatible Spares
          </span>
        </motion.div>

        <h1 className="font-display font-bold uppercase leading-[0.92] text-[6vw] sm:text-[9vw] 
        lg:text-[2.4vw]">
         <AnimatedWord word={WORD_0} startIndex={0} colorClass="text-blue" isVisible={showContent} />
          <br />
        </h1>

        <h1 className="font-display font-bold uppercase leading-[0.92] text-[15vw] sm:text-[9vw] lg:text-[6.4vw]">
          <AnimatedWord word={WORD_1} startIndex={0} colorClass="text-paper" isVisible={showContent} />
          <br />
          <AnimatedWord word={WORD_2} startIndex={WORD_1.length} colorClass="text-hazard" 
          isVisible={showContent} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
          transition={{ delay: 3.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-xl font-body text-chrome/85 text-base sm:text-lg"
        >
          <span className="text-paper font-semibold">: Automobile</span> — Spare-parts counter built around Force Motors vehicles, backed by ex-Force Motors
          trained mechanics for every job from an oil change to a full gearbox rebuild.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showContent ? 1 : 0, y: showContent ? 0 : 20 }}
          transition={{ delay: 3.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`https://wa.me/${shop.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-hazard text-asphalt font-display font-semibold px-6 py-3
             rounded-sm hover:brightness-110 transition"
          >
            <MessageCircle size={18} strokeWidth={2.5} />
            WhatsApp Us
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`tel:+${shop.mobile}`}
            className="flex items-center gap-2 border border-chrome/40 text-paper font-display font-semibold px-6 py-3 rounded-sm hover:border-hazard hover:text-hazard transition"
          >
            <Phone size={18} strokeWidth={2.5} />
            Call {shop.phoneDisplay1}
          </motion.a>

          {/* <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={`tel:+${shop.phone}`}
            className="flex items-center gap-2 border border-chrome/40 text-paper font-display font-semibold px-6 py-3 rounded-sm 
            hover:border-hazard hover:text-hazard transition"
          >
            <Phone size={18} strokeWidth={2.5} />
            Call {shop.phoneDisplay}
          </motion.a> */}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator - Appears after content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={showContent ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 4.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-chrome/60 z-10"
      >
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
          <ChevronDown size={16} />
        </motion.span>
      </motion.div>
    </section>
  );
}