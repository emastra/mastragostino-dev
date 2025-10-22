import { ArrowRight, Sparkles } from 'lucide-react';

// Configuration
const GRID_CONFIG = {
  cellSize: '32px',
  lineColor: '#4f4f4f22',
  fadeRadius: '90%',
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
    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-500/20 bg-primary-500/10 px-4 py-2 text-sm text-primary-500 backdrop-blur-sm dark:text-primary-200">
      <Sparkles className="h-4 w-4" />
      <span>Consulente di automazione per PMI e Professionisti</span>
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
      <button className="group flex items-center justify-center gap-2 rounded-lg bg-primary-600 px-8 py-3 font-medium text-white shadow-lg transition-all duration-100 hover:bg-primary-700 hover:shadow-xl dark:bg-primary-500 dark:hover:bg-primary-600">
        Prenota una consulenza gratuita
        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
      </button>
      <button className="rounded-lg border border-neutral-200 bg-neutral-50 px-8 py-3 font-medium text-neutral-900 shadow-lg backdrop-blur-sm transition-all duration-100 hover:bg-neutral-100 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-50 dark:hover:bg-neutral-800">
        Scopri di più
      </button>
    </div>
  );
}

// Main component
export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden px-4 py-16 sm:py-20 md:py-24">
      {/* Grid Background */}
      <div className="absolute inset-0" style={getGridStyle()}></div>

      {/* Glow Effect */}
      <div className="absolute top-1/3 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-primary-500/20 blur-[120px]"></div>

      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
        <TopBadge />

        <h1 className="mb-6 max-w-4xl text-5xl font-bold md:text-7xl">
          Libera il tuo tempo e
          <span className="bg-gradient-to-r from-primary-500 via-violet-500 to-amber-500 bg-clip-text text-transparent">
            {' '}
            fai crescere il tuo business
          </span>
        </h1>

        <p className="mb-8 max-w-2xl text-lg text-neutral-500 dark:text-neutral-400 md:text-xl">
          Trasformo i tuoi processi aziendali in flussi di lavoro rapidi e senza
          errori. Tu ti focalizzi sul fatturato, io penso all'efficienza.
        </p>

        <CTAButtons />

        {/* <div className="mt-16 flex flex-wrap gap-8 text-center">
          {STATS_DATA.map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div> */}
      </div>

      {/* Bottom Fade */}
      {/* <div className="from-slate-950 absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t to-transparent"></div> */}
    </section>
  );
}
