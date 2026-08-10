'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const TICKS = Array.from({ length: 11 });

export default function ScrollGauge() {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 22, mass: 0.4 });
  const rotate = useTransform(smooth, [0, 1], [-120, 120]);
  const [percent, setPercent] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const unsub = smooth.on('change', (v) => setPercent(Math.round(v * 100)));
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      unsub();
      window.removeEventListener('scroll', onScroll);
    };
  }, [smooth]);

  return (
    <div
      className={`fixed bottom-5 left-5 z-40 flex flex-col items-center transition-opacity duration-300 ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-hidden="true"
    >
      {/* Mobile: Chhota gauge | Desktop: Bada gauge */}
      <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-panel border border-chrome/25 shadow-lg shadow-black/40 flex items-center justify-center">
        {TICKS.map((_, i) => {
          const a = -120 + (i * 240) / (TICKS.length - 1);
          return (
            <span
              key={i}
              className="absolute w-[2px] h-2 bg-chrome/40 top-1 left-1/2 -ml-px"
              style={{ 
                transform: `rotate(${a}deg)`, 
                transformOrigin: window.innerWidth < 768 ? '1px 28px' : '1px 36px'
              }}
            />
          );
        })}
        <motion.div
          className="absolute w-[2px] md:w-[3px] h-6 md:h-7 bg-hazard rounded-full top-2"
          style={{ 
            rotate, 
            left: '50%', 
            marginLeft: '-1px', 
            transformOrigin: window.innerWidth < 768 ? '50% 25px' : '50% 32px'
          }}
        />
        <div className="absolute w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-hazard" />
        <span className="absolute bottom-1.5 font-mono text-[8px] md:text-[9px] text-chrome/70">
          {percent}%
        </span>
      </div>
    </div>
  );
}