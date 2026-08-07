'use client';

import { ShieldCheck, Wrench, Users } from 'lucide-react';
import { shop } from '@/lib/data';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';

const POINTS = [
  {
    icon: Wrench,
    title: 'Ex-Force Motors Mechanics (Nadeem Ahmad)',
    desc: 'Our workshop team trained directly on Force Motors vehicles, so every repair is fitment-correct the first time.'
  },
  {
    icon: ShieldCheck,
    title: 'Genuine & Compatible Parts',
    desc: 'From Force Motors originals to trusted TVS, Lumax, Menda, Castrol, Veedol and Shell stock — nothing spurious.'
  },
  {
    icon: Users,
    title: 'Owner-Run, Personally Trusted',
    desc: `Run directly by ${shop.owner} — known locally for straight answers and fair pricing.`
  }
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-steel/20">
      <div className="container-x grid lg:grid-cols-[1fr,1.1fr] gap-14 items-start">
        <div>
          <SectionHeading
            num="04"
            title="Who's Under"
            accent="the Bonnet"
            blurb="A known, experienced counter for Force Motors owners across Chhatrapati Sambhajinagar."
          />
          <Reveal>
            <div className="stat-plate rounded-md p-6">
              <p className="eyebrow mb-2">Proprietor</p>
              <p className="font-display font-bold text-2xl text-paper">{shop.owner}</p>
              <p className="text-sm text-chrome/75 mt-3 leading-relaxed">
                High Power : Automobile is built around deep, hands-on Force Motors experience —
                the team includes mechanics who worked directly with Force Motors vehicles before
                bringing that expertise to this counter and workshop.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-5">
          {POINTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className="flex gap-4 bg-panel border border-chrome/15 rounded-md p-6 hover:border-hazard/40 transition-colors">
                <div className="shrink-0 w-11 h-11 rounded-sm bg-hazard/15 flex items-center justify-center">
                  <p.icon className="text-hazard" size={22} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-paper">{p.title}</h3>
                  <p className="text-sm text-chrome/75 mt-1 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
