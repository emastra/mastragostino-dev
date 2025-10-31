import React from 'react';
import {
  ArrowRight,
  Sparkles,
  Clock,
  CheckCircle2,
  Zap,
  Calendar,
} from 'lucide-react';

const FinalCTASection: React.FC = () => {
  return (
    // TODO: check section y padding consistency across the site
    <section className="relative overflow-hidden px-4 py-12 sm:py-16 md:py-24">
      {/* Animated Grid Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, #4f4f4f22 1px, transparent 1px), linear-gradient(to bottom, #4f4f4f22 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage:
            'radial-gradient(ellipse 100% 100% at 50% 50%, #000 0%, transparent 70%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 100% 100% at 50% 50%, #000 0%, transparent 70%)',
        }}
      />

      {/* Multiple Glow Effects */}
      <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] animate-pulse rounded-full bg-primary-500/20 blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] animate-pulse rounded-full bg-violet-500/20 blur-[150px] [animation-delay:1s]" />
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-amber-500/15 blur-[120px] [animation-delay:2s]" />

      <div className="container relative z-10 mx-auto max-w-5xl">
        {/* Main CTA Card */}
        <div className="group relative overflow-hidden rounded-3xl border-2 border-primary-200 bg-white shadow-2xl transition-all duration-500 hover:shadow-[0_20px_80px_-15px_rgba(0,0,0,0.3)] dark:border-primary-900/50 dark:bg-neutral-900 dark:shadow-primary-500/10 dark:hover:shadow-primary-500/20">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-violet-50 to-amber-50 opacity-60 dark:from-primary-950/30 dark:via-violet-950/30 dark:to-amber-950/30" />

          {/* Animated radial gradient overlay */}
          <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="absolute inset-0 bg-gradient-radial from-primary-500/5 via-transparent to-transparent" />
          </div>

          {/* Decorative corner elements */}
          <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary-500/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />

          <div className="relative z-10 px-6 py-12 sm:px-12 sm:py-16 md:px-16 md:py-20">
            {/* Badge */}
            <div className="mb-6 flex justify-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary-500/20 bg-primary-500/10 px-4 py-2 text-sm font-semibold text-primary-600 backdrop-blur-sm dark:text-primary-100">
                <Sparkles className="h-4 w-4" />
                <span>Inizia Oggi</span>
              </div>
            </div>

            {/* Main Headline */}
            <h2 className="mb-6 text-center text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
              Pronto a{' '}
              <span className="bg-gradient-to-r from-primary-500 via-violet-500 to-amber-500 bg-clip-text text-transparent">
                liberare il tuo tempo
              </span>
              ?
            </h2>

            {/* Subheadline */}
            <p className="mb-10 text-center text-lg text-neutral-600 dark:text-neutral-400 sm:text-xl md:text-2xl">
              Scopri come l'automazione può trasformare il tuo business in una
              consulenza gratuita di 60 minuti.
            </p>

            {/* Key Benefits - Quick Highlights */}
            <div className="mb-10 flex flex-wrap justify-center gap-4 md:gap-6">
              <BenefitPill icon={Clock} text="60 minuti gratuiti" />
              <BenefitPill icon={Zap} text="Analisi personalizzata" />
              <BenefitPill icon={CheckCircle2} text="Zero impegno" />
            </div>

            {/* Primary CTA Button */}
            <div className="mb-8 flex justify-center">
              <button className="group/btn relative overflow-hidden rounded-xl bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 px-10 py-5 text-lg font-bold text-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.4)] dark:shadow-primary-500/30 dark:hover:shadow-primary-500/50 sm:px-12 sm:py-6 sm:text-xl">
                {/* Animated shine effect */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />

                <span className="relative flex items-center gap-3">
                  <Calendar className="h-6 w-6" />
                  Prenota la Consulenza Gratuita
                  <ArrowRight className="h-6 w-6 transition-transform group-hover/btn:translate-x-2" />
                </span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-600 dark:text-neutral-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-success-500" />
                <span>Nessuna carta richiesta</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-success-500" />
                <span>Risposta in 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-success-500" />
                <span>100% gratuito</span>
              </div>
            </div>

            {/* Divider */}
            <div className="my-10 flex items-center gap-4">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
              <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                oppure
              </span>
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
            </div>

            {/* Secondary Actions */}
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <button className="w-full rounded-lg border-2 border-neutral-200 bg-white px-6 py-3 font-semibold text-neutral-700 shadow-sm transition-all duration-100 hover:border-neutral-300 hover:bg-neutral-50 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:border-neutral-600 dark:hover:bg-neutral-700 sm:w-auto">
                Scopri come funziona
              </button>
              <button className="w-full rounded-lg border-2 border-neutral-200 bg-white px-6 py-3 font-semibold text-neutral-700 shadow-sm transition-all duration-100 hover:border-neutral-300 hover:bg-neutral-50 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:border-neutral-600 dark:hover:bg-neutral-700 sm:w-auto">
                Guarda i casi studio
              </button>
            </div>
          </div>

          {/* Bottom highlight bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-violet-500 to-amber-500" />
        </div>

        {/* Social Proof Footer */}
        <div className="mt-12 text-center">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Unisciti a oltre{' '}
            <strong className="font-semibold text-neutral-700 dark:text-neutral-300">
              30+ professionisti e PMI
            </strong>{' '}
            che hanno automatizzato i loro processi
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;

/* ============================================================================
   HELPER COMPONENTS
   ============================================================================ */

interface BenefitPillProps {
  icon: React.ElementType;
  text: string;
}

function BenefitPill({ icon: Icon, text }: BenefitPillProps) {
  return (
    <div className="group flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:border-primary-300 hover:bg-primary-50/80 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-800/80 dark:hover:border-primary-600 dark:hover:bg-primary-950/30">
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-primary-600 transition-colors group-hover:bg-primary-500 group-hover:text-white dark:bg-primary-950/50 dark:text-primary-400">
        <Icon className="h-3.5 w-3.5" />
      </div>
      <span className="text-sm font-medium text-neutral-700 dark:text-neutral-200">
        {text}
      </span>
    </div>
  );
}
