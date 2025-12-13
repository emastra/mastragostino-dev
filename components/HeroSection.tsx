import { ArrowRight, Sparkles } from 'lucide-react';
import Button from './Button';
import Link from 'next/link';

// Configuration
const GRID_CONFIG = {
  cellSize: '56px',
  lineColor: '#4f4f4f22', // 'hsl(var(--grid-bg-line))',
  fadeRadius: '65%',
};

// const STATS_DATA = [
//   { value: '10K+', label: 'Active Users' },
//   { value: '99.9%', label: 'Uptime' },
//   { value: '4.9/5', label: 'User Rating' },
// ];

// Helper function for mask gradient
const createRadialMask = (radius: string) =>
  `radial-gradient(ellipse ${radius} ${radius} at 50% 50%, #000 0%, transparent 80%)`;

// Computed styles
const getGridStyle = () => {
  const maskGradient = createRadialMask(GRID_CONFIG.fadeRadius);

  return {
    backgroundImage: `linear-gradient(to right, ${GRID_CONFIG.lineColor} 1px, transparent 1px), linear-gradient(to bottom, ${GRID_CONFIG.lineColor} 1px, transparent 1px)`,
    backgroundSize: `${GRID_CONFIG.cellSize} ${GRID_CONFIG.cellSize}`,
    maskImage: maskGradient,
    WebkitMaskImage: maskGradient,
  };
};

// Sub-components

function TopBadge() {
  return (
    <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary-500/20 bg-primary-500/10 px-4 py-1 text-[13px] font-medium text-primary-600 backdrop-blur-sm dark:text-primary-100 md:py-2 md:text-sm">
      <Sparkles className="h-4 w-4" />
      <span>Automazioni per PMI e Professionisti</span>
    </div>
  );
}

// function StatCard({ value, label }: { value: string; label: string }) {
//   return (
//     <div>
//       <div className="text-3xl font-bold">{value}</div>
//       <div className="text-sm text-slate-400">{label}</div>
//     </div>
//   );
// }

function CTAButtons() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <Link href="/booking" passHref>
        <a className="group flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary-600 px-8 py-3 font-medium text-white shadow-xl transition-all duration-100 hover:bg-primary-700 hover:shadow-xl dark:bg-primary-500 dark:hover:bg-primary-600">
          Prenota un incontro gratuito
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </a>
      </Link>

      <Link href="#benefits" passHref>
        <a className="rounded-lg border border-neutral-200 bg-neutral-50 px-8 py-3 font-medium text-neutral-900 shadow-lg backdrop-blur-sm transition-all duration-100 hover:bg-neutral-100 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-50 dark:hover:bg-neutral-800">
          Scopri di più
        </a>
      </Link>
    </div>
  );
}

// Main component
export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden px-6 py-12 md:py-24">
      {/* Grid Background */}
      <div className="absolute inset-0" style={getGridStyle()}></div>

      {/* Glow Effect */}
      <div className="absolute left-1/2 top-1/3  h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-primary-500/20 blur-[120px] md:h-[500px] md:w-[500px]"></div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <TopBadge />

        <h1 className="mb-8 max-w-3xl text-5xl font-bold md:text-7xl">
          <div className="mb-2 md:mb-0">Libera tempo.</div>
          <span className="bg-gradient-to-r from-amber-500 via-violet-500 to-primary-500 bg-clip-text text-transparent">
            Accellera la crescita.
          </span>
        </h1>

        <p className="mb-12 max-w-2xl text-lg text-neutral-500 dark:text-neutral-400 md:text-xl">
          Trasformo i tuoi processi manuali in flussi di lavoro automatici. Un
          sistema che lavora per te, lasciandoti la libertà di curare la
          strategia e far crescere il business.
        </p>

        <CTAButtons />

        {/* <div className="mt-16 flex flex-wrap gap-8 text-center">
          {STATS_DATA.map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div> */}
      </div>

      {/* Bottom Fade */}
      {/* <div className="from-background absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t to-transparent"></div> */}
    </section>
  );
}
