export default function HazardMarquee({ text = 'GENUINE PARTS \u2022 EXPERT FITMENT \u2022 FORCE MOTORS SPECIALIST' }) {
  const repeated = `${text} \u2022 ${text} \u2022 `;
  return (
    <div className="relative overflow-hidden bg-hazard-stripes py-2 border-y border-black/40">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        <span className="font-display font-semibold tracking-wider text-asphalt text-sm px-4">
          {repeated}
        </span>
        <span className="font-display font-semibold tracking-wider text-asphalt text-sm px-4" aria-hidden="true">
          {repeated}
        </span>
      </div>
    </div>
  );
}
