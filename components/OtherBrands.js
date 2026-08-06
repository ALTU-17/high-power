'use client';

import { motion } from 'framer-motion';
import { brandGroups } from '@/lib/data';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import HazardMarquee from '@/components/HazardMarquee';

function BrandTag({ b, i }) {
  return (
    <Reveal delay={i * 0.05} y={16}>
      <motion.div
        whileHover={{ rotate: [0, -2, 2, -1, 0], y: -3 }}
        transition={{ duration: 0.5 }}
        className="relative pt-6"
      >
        <span className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-chrome/40 bg-asphalt" />
        <div className="bg-panel border border-chrome/15 rounded-sm px-5 py-6 text-center hover:border-hazard/50 transition-colors">
          <p className="font-display font-bold text-lg text-paper tracking-wide">{b.name}</p>
          <p className="text-xs text-chrome/70 mt-2 leading-relaxed">{b.desc}</p>
        </div>
      </motion.div>
    </Reveal>
  );
}

export default function OtherBrands() {
  return (
    <section id="brands" className="relative py-24 md:py-32 bg-steel/20">
      <div className="container-x">
        <SectionHeading
          num="02"
          title="Trusted"
          accent="Brands on the Wall"
          blurb="Beyond Force Motors, the counter also stocks these trusted names."
        />

        <div className="space-y-14">
          {brandGroups.map((group) => (
            <div key={group.heading}>
              <Reveal className="flex items-baseline justify-between flex-wrap gap-2 mb-6">
                <h3 className="eyebrow">{group.heading}</h3>
                <span className="text-xs text-chrome/50 font-body">{group.note}</span>
              </Reveal>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-5 gap-y-8">
                {group.brands.map((b, i) => (
                  <BrandTag key={b.name} b={b} i={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <HazardMarquee text="TVS \u2022 LUMAX \u2022 MENDA \u2022 CASTROL \u2022 VEEDOL \u2022 SHELL" />
      </div>
    </section>
  );
}
