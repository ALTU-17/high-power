import Reveal from '@/components/Reveal';

export default function SectionHeading({ num, title, accent, blurb }) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <div className="flex items-start gap-4">
        <span className="font-display font-bold text-hazard text-2xl md:text-3xl leading-none pt-1">
          {num}
        </span>
        <div>
          <h2 className="font-display font-bold uppercase text-3xl md:text-5xl leading-tight">
            {title} {accent && <span className="text-hazard">{accent}</span>}
          </h2>
          {blurb && <p className="mt-3 max-w-xl text-chrome/75 font-body">{blurb}</p>}
        </div>
      </div>
      <div className="mt-6 h-px w-full bg-gradient-to-r from-chrome/30 via-chrome/10 to-transparent" />
    </Reveal>
  );
}
