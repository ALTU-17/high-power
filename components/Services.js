'use client';

import { Droplets, Cog, Gauge, Square, DoorOpen, Tag, Disc, Zap } from 'lucide-react';
import { services } from '@/lib/data';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

const ICONS = {
  droplets: Droplets,
  cog: Cog,
  gauge: Gauge,
  square: Square,
  'door-open': DoorOpen,
  tag: Tag,
  disc: Disc,
  zap: Zap
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          num="03"
          title="Full Workshop"
          accent="Services"
          blurb="Complete jobs — not just parts over the counter — carried out by our ex-Force Motors trained mechanics."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => {
            const Icon = ICONS[s.icon] || Cog;
            return (
              <Reveal key={s.name} delay={(i % 4) * 0.06}>
                <div className="h-full bg-panel border border-chrome/15 rounded-md p-6 hover:border-hazard/50 hover:-translate-y-1 transition-all duration-300">
                  <div className="w-11 h-11 rounded-sm bg-hazard/15 flex items-center justify-center mb-4">
                    <Icon className="text-hazard" size={22} strokeWidth={2} />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-paper">{s.name}</h3>
                  <p className="text-sm text-chrome/75 mt-2 leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1} className="mt-8">
          <p className="text-sm text-chrome/60 font-body">
            + everything else related to Force Motors vehicles — ask us if you don&rsquo;t see it listed.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
