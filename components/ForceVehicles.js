'use client';

import { motion } from 'framer-motion';
import { forceVehicles } from '@/lib/data';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

function VehicleCard({ v, i }) {
  return (
    <Reveal delay={(i % 3) * 0.08}>
      <motion.div
        whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
        transition={{ type: 'spring', stiffness: 250, damping: 18 }}
        className="group relative h-full bg-panel border border-chrome/15 rounded-md p-6 overflow-hidden hover:border-hazard/60 transition-colors"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-hazard/10 blur-2xl group-hover:bg-hazard/20 transition-colors" />
        <span className="font-mono text-[11px] text-hazard/80">{v.code}</span>
        <h3 className="font-display font-semibold text-xl text-paper mt-1">{v.name}</h3>
        <p className="font-mono text-[11px] text-chrome/60 mt-1">{v.variant}</p>
        <p className="text-sm text-chrome/80 mt-3 leading-relaxed">{v.desc}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {v.tags.map((t) => (
            <span
              key={t}
              className="text-[11px] font-mono uppercase tracking-wide px-2 py-1 rounded-sm bg-steel text-chrome/80 border border-chrome/10"
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </Reveal>
  );
}

export default function ForceVehicles() {
  return (
    <section id="vehicles" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          num="01"
          title="Force Motors"
          accent="Vehicle Coverage"
          blurb="Spare parts stocked and fitted for the full current Force Motors range — from the Gurkha to the e-Traveller."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {forceVehicles.map((v, i) => (
            <VehicleCard key={v.name} v={v} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
