import React from 'react';
import {
  Rocket,
  Sparkles,
  CheckCircle2,
  Zap,
  TrendingUp,
  Wrench,
  HelpCircle,
} from 'lucide-react';

const ServicesSection: React.FC = () => {
  return (
    <section className="px-4 py-16">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span
            className="bg-accent/10 text-accent-foreground mb-4 inline-block rounded-full px-3 py-1 text-sm font-semibold uppercase tracking-wider"
            aria-hidden="false"
            role="status"
          >
            Come funziona
          </span>
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
            Un metodo semplice
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-neutral-600 dark:text-neutral-400">
            Il percorso è pensato per essere lineare e trasparente: prima
            analizziamo il tuo processo e definiamo la soluzione, poi passo
            all'implementazione reale. Due fasi, un unico obiettivo — renderti
            operativo e libero dal lavoro manuale.
          </p>
        </div>

        <div className="mb-8 grid gap-6 md:grid-cols-2">
          <StarterCard />
          <GrowthCard />
        </div>

        {/* AI Add-on Banner */}
        <AIEnhancementBanner />
      </div>
    </section>
  );
};

export default ServicesSection;

/* ============================================================================
   PHASE 1 CARD - Analysis Phase
   ============================================================================ */
function StarterCard() {
  const features = [
    'Sessione di analisi (60-90 min)',
    'Identificazione dei punti critici e ripetitivi',
    'Definizione del flusso automatico ideale',
    'Preventivo chiaro e senza impegno per la fase successiva',
  ];

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100/70 dark:from-neutral-900 dark:to-primary-950/30" />

      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col p-8">
        {/* Badge */}
        <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-primary-500/20 bg-primary-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-700 dark:border-primary-400/20 dark:bg-primary-400/10 dark:text-primary-300">
          <Rocket className="h-3 w-3" />
          Fase 1
        </div>

        {/* Icon */}
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg transition-transform duration-300 group-hover:scale-105">
          <Zap className="h-8 w-8 text-white" />
        </div>

        {/* Title & Price */}
        <h3 className="mb-2 text-2xl font-bold text-neutral-900 dark:text-neutral-50">
          Analisi Strategica
        </h3>
        <div className="mb-4">
          <span className="text-4xl font-bold text-primary-600 dark:text-primary-400">
            €190
          </span>
          <span className="ml-2 text-sm text-neutral-500 dark:text-neutral-500">
            una tantum
          </span>
        </div>

        {/* Description */}
        <p className="mb-6 text-neutral-600 dark:text-neutral-400">
          Analizziamo insieme i tuoi flussi di lavoro per capire dove
          l'automazione può darti il massimo valore.
        </p>

        {/* Features */}
        <ul className="mb-8 space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary-600 dark:text-primary-400" />
              <span className="text-sm text-neutral-700 dark:text-neutral-300">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* Spacer */}
        <div className="flex-1" />

        {/* CTA */}
        <button className="group/btn flex w-full items-center justify-center gap-2 rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-100 hover:bg-primary-700 hover:shadow-xl dark:bg-primary-500 dark:hover:bg-primary-600">
          Prenota Consulenza
        </button>
      </div>

      {/* Hover overlay */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-neutral-900/0 transition-colors duration-300 group-hover:bg-neutral-900/[0.02] dark:group-hover:bg-white/[0.02]" />
    </div>
  );
}

/* ============================================================================
   PHASE 2 CARD - Development Phase (Using Violet/Purple theme)
   ============================================================================ */
function GrowthCard() {
  const features = [
    "Sviluppo, test e validazione dell'automazione",
    'Implementazione nel tuo ambiente di lavoro',
    'Sessione di formazione operativa',
    'Ottimizzazione finale su feedback reali',
    'Supporto post-avvio per i primi giorni di utilizzo',
  ];

  const [showTooltip, setShowTooltip] = React.useState(false);

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900">
      {/* Background gradient - Using violet/purple colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-purple-100/70 dark:from-neutral-900 dark:to-violet-950/30" />

      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col p-8">
        {/* Badge */}
        <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-violet-700 dark:border-violet-400/20 dark:bg-violet-400/10 dark:text-violet-300">
          <TrendingUp className="h-3 w-3" />
          Fase 2
        </div>

        {/* Icon */}
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 shadow-lg transition-transform duration-300 group-hover:scale-105">
          <Wrench className="h-8 w-8 text-white" />
        </div>

        {/* Title & Price */}
        <h3 className="mb-2 text-2xl font-bold text-neutral-900 dark:text-neutral-50">
          Sviluppo dell'Automazione
        </h3>
        <div className="mb-4 flex items-baseline gap-2">
          <span className="text-4xl font-bold text-violet-600 dark:text-violet-400">
            Custom
          </span>
          <div className="relative inline-block">
            <HelpCircle
              className="h-4 w-4 cursor-help text-neutral-400 transition-colors hover:text-neutral-600 dark:hover:text-neutral-300"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            />
            {showTooltip && (
              <div className="absolute bottom-full left-1/2 z-20 mb-2 w-64 -translate-x-1/2 rounded-lg border border-neutral-200 bg-white p-3 text-xs text-neutral-700 shadow-lg dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
                <div className="mb-1 font-semibold">Prezzo personalizzato</div>
                <div>Il prezzo varia in base alla complessità.</div>
                <div className="mt-1 text-violet-600 dark:text-violet-400">
                  Automazioni semplici partono da €300.
                </div>
                {/* Arrow */}
                <div className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 border-x-8 border-t-8 border-x-transparent border-t-white dark:border-t-neutral-800" />
              </div>
            )}
          </div>
          <span className="text-sm text-neutral-500 dark:text-neutral-500">
            su preventivo
          </span>
        </div>

        {/* Description */}
        <p className="mb-6 text-neutral-600 dark:text-neutral-400">
          Realizzo, collaudo e integro la soluzione definita nella prima fase.
        </p>

        {/* Features */}
        <ul className="mb-8 space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-violet-600 dark:text-violet-400" />
              <span className="text-sm text-neutral-700 dark:text-neutral-300">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* Spacer */}
        <div className="flex-1" />

        {/* CTA */}
        <button className="w-full rounded-lg border-2 border-violet-600 bg-white px-6 py-3 font-semibold text-violet-700 shadow-lg transition-all duration-100 hover:bg-violet-50 hover:shadow-xl dark:border-violet-500 dark:bg-neutral-800 dark:text-violet-300 dark:hover:bg-neutral-700">
          Richiedi Preventivo
        </button>
      </div>

      {/* Hover overlay */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-neutral-900/0 transition-colors duration-300 group-hover:bg-neutral-900/[0.02] dark:group-hover:bg-white/[0.02]" />
    </div>
  );
}

/* ============================================================================
   AI ENHANCEMENT BANNER - Redesigned as a proper banner with accent colors
   ============================================================================ */
function AIEnhancementBanner() {
  return (
    <div className="relative mt-12 overflow-hidden rounded-xl border border-accent-200 bg-gradient-to-r from-accent-50 via-accent-100/50 to-accent-50 dark:border-accent-900/50 dark:from-accent-950/20 dark:via-accent-900/30 dark:to-accent-950/20">
      {/* Decorative glow effects */}
      <div className="absolute -left-24 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-accent-400/30 blur-3xl dark:bg-accent-500/20" />
      <div className="absolute -right-24 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-primary-400/30 blur-3xl dark:bg-primary-500/20" />

      <div className="relative z-10 flex flex-col items-center gap-6 px-6 py-8 md:flex-row md:px-8">
        {/* Icon */}
        <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 shadow-md">
          <Sparkles className="h-7 w-7 text-white" />
        </div>

        {/* Content */}
        <div className="flex-1 text-center md:text-left">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-accent-500/20 bg-accent-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-700 backdrop-blur-sm dark:border-accent-400/20 dark:bg-accent-400/10 dark:text-accent-300">
            <Sparkles className="h-3 w-3" />
            AI Opzionale
          </div>
          <h3 className="mb-2 text-xl font-bold text-neutral-900 dark:text-neutral-50 md:text-2xl">
            L'AI come acceleratore, non come sostituto
          </h3>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 md:text-base">
            L'intelligenza artificiale entra in gioco solo dove porta reale
            valore: analisi di testo, estrazione di dati o assistenza
            decisionale. È un'estensione naturale dell'automazione, mai una
            complicazione.
          </p>
        </div>

        {/* CTA */}
        <button className="flex-shrink-0 rounded-lg border border-accent-600 bg-accent-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-100 hover:border-accent-700 hover:bg-accent-700 hover:shadow-xl dark:border-accent-500 dark:bg-accent-500 dark:hover:bg-accent-600">
          Scopri di Più
        </button>
      </div>

      {/* Subtle pattern overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-30 dark:opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.05) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>
    </div>
  );
}
