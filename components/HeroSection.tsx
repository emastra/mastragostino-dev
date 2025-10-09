import { ArrowRight, Sparkles } from 'lucide-react';

// Configuration
const GRID_CONFIG = {
  cellSize: '32px',
  lineColor: '#4f4f4f22',
  fadeRadius: '80%',
};

const STATS_DATA = [
  { value: '10K+', label: 'Active Users' },
  { value: '99.9%', label: 'Uptime' },
  { value: '4.9/5', label: 'User Rating' },
];

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
    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400 backdrop-blur-sm">
      <Sparkles className="h-4 w-4" />
      <span>Introducing the future of design</span>
    </div>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-3xl font-bold">{value}</div>
      <div className="text-sm text-slate-400">{label}</div>
    </div>
  );
}

function CTAButtons() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <button className="group flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-4 font-medium text-white transition-all hover:bg-blue-700">
        Get Started Free
        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
      </button>
      <button className="rounded-lg border border-white/10 bg-white/5 px-8 py-4 font-medium backdrop-blur-sm transition-all hover:bg-white/10">
        Watch Demo
      </button>
    </div>
  );
}

// Main component
export default function HeroSection() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0" style={getGridStyle()}></div>

      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-blue-500/20 blur-[120px]"></div>

      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
        <TopBadge />

        <h1 className="mb-6 max-w-4xl text-5xl font-bold md:text-7xl">
          Build Amazing
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {' '}
            Digital Experiences
          </span>
        </h1>

        <p className="mb-8 max-w-2xl text-lg text-slate-400 md:text-xl">
          Transform your ideas into stunning reality with our cutting-edge
          platform. Fast, intuitive, and designed for creators.
        </p>

        <CTAButtons />

        <div className="mt-16 flex flex-wrap gap-8 text-center">
          {STATS_DATA.map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>

      {/* Bottom Fade */}
      {/* <div className="from-slate-950 absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t to-transparent"></div> */}
    </div>
  );
}
