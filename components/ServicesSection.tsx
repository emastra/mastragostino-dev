import React from 'react';
import {
  Rocket,
  Sparkles,
  CheckCircle2,
  Zap,
  TrendingUp,
  Wrench,
  HelpCircle,
  Search,
  ArrowRight,
  Clock,
  Shield,
  Crown,
  Settings,
  Calendar,
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
            Come iniziamo
          </span>
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
            Dalla chiarezza all'automazione
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-neutral-600 dark:text-neutral-400">
            Nessun percorso complicato, nessuna spinta alla vendita. Tutto parte
            da una breve call gratuita per capire le tue esigenze e, solo se ha
            senso, passiamo alla realizzazione dell’automazione su misura.
          </p>
        </div>

        <div className="mb-8 grid gap-6 md:grid-cols-2">
          <StarterCard />
          <GrowthCard />
        </div>

        {/* AI Add-on Banner */}
        {/* <AIEnhancementBanner /> */}

        <div className="mt-16 text-center">
          <h3 className="mb-4 text-lg font-bold sm:text-3xl">
            Inizia senza impegno
          </h3>
          <p className="text-md text-neutral-500 dark:text-neutral-400">
            {/* Unisciti a oltre{' '}
            <strong className="font-semibold text-neutral-700 dark:text-neutral-300">
              30+ professionisti e PMI
            </strong>{' '}
            che hanno automatizzato i loro processi */}
            Il modo migliore per iniziare è parlarne: ti mostro{' '}
            <strong className="font-semibold text-neutral-700 dark:text-neutral-300">
              il potenziale dell'automazione
            </strong>{' '}
            nel tuo caso specifico.
          </p>
          {/* <button className="mt-8 inline-flex items-center justify-center rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-100 hover:bg-primary-700">
            Prenota la tua call gratuita
          </button> */}
          <button className="group mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-primary-600 px-8 py-3 font-medium text-white shadow-lg transition-all duration-100 hover:bg-primary-700 hover:shadow-xl dark:bg-primary-500 dark:hover:bg-primary-600">
            <Calendar className="h-6 w-6" />
            Prenota la tua call gratuita
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
          {/* <div className="mt-8 flex justify-center">
            <button className="group/btn relative overflow-hidden rounded-xl bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 px-10 py-5 text-lg font-bold text-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.4)] dark:shadow-primary-500/30 dark:hover:shadow-primary-500/50 sm:px-12 sm:py-6 sm:text-xl">
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />

              <span className="relative flex items-center gap-3">
                <Calendar className="h-6 w-6" />
                Inizia prenotando la tua call gratuita
                <ArrowRight className="h-6 w-6 transition-transform group-hover/btn:translate-x-2" />
              </span>
            </button>
          </div> */}
        </div>
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
    'Analisi gratuita di 20-30 minuti',
    'Identificazione dei punti critici e ripetitivi',
    'Prime idee di automazione personalizzate',
    'Nessun impegno, solo valore',
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
          Step 1
        </div>

        {/* Icon */}
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg transition-transform duration-300 group-hover:scale-105">
          <Zap className="h-8 w-8 text-white" />
        </div>

        {/* Title & Price */}
        <h3 className="mb-2 text-2xl font-bold text-neutral-900 dark:text-neutral-50">
          Call di Analisi
        </h3>
        <div className="mb-4">
          <span className="text-4xl font-bold text-primary-600 dark:text-primary-400">
            Gratis
          </span>
          {/* <span className="ml-2 text-sm text-neutral-500 dark:text-neutral-500">
            una tantum
          </span> */}
        </div>

        {/* Description */}
        <p className="mb-8 text-neutral-600 dark:text-neutral-400">
          Una breve conversazione per capire il tuo modo di lavorare e
          individuare dove l'automazione può portare il maggior valore ai tuoi
          processi.
        </p>

        {/* Features */}
        <ul className="mb-6 space-y-3">
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
        {/* <div className="flex-1" /> */}

        {/* CTA */}
        {/* <button className="group/btn flex w-full items-center justify-center gap-2 rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-100 hover:bg-primary-700 hover:shadow-xl dark:bg-primary-500 dark:hover:bg-primary-600">
          Prenota Consulenza
        </button> */}
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
    'Preventivo fisso, zero sorprese',
    "Sviluppo e implementazione dell'automazione",
    'Integrazione dei tuoi strumenti (Email, Fogli, CRM, Fatturazione, ecc.)',
    'AI opzionale',
    "Formazione rapida sull'uso & Supporto post-lancio",
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
          Step 2
        </div>

        {/* Icon */}
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 shadow-lg transition-transform duration-300 group-hover:scale-105">
          <Wrench className="h-8 w-8 text-white" />
        </div>

        {/* Title & Price */}
        <h3 className="mb-2 text-2xl font-bold text-neutral-900 dark:text-neutral-50">
          Sviluppo su misura
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
        <p className="mb-8 text-neutral-600 dark:text-neutral-400">
          Se decidi di procedere, creo e implemento l'automazione definita
          insieme, testata e pronta all'uso nel tuo ambiente di lavoro.
        </p>

        {/* Features */}
        <ul className="mb-6 space-y-3">
          {features.map((feature) => (
            <li key={feature} className="group flex items-start gap-2">
              {feature.includes('AI') ? (
                <Sparkles className="mt-0.5 h-5 w-5 flex-shrink-0 text-violet-600 transition-transform duration-300 hover:rotate-12 group-hover:scale-110 dark:text-violet-400" />
              ) : (
                <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-violet-600 dark:text-violet-400" />
              )}

              <span
                className={`mt-0.5 text-sm ${
                  feature.includes('AI')
                    ? 'bg-gradient-to-r from-violet-600 via-fuchsia-600 to-accent-600 bg-clip-text font-semibold text-transparent dark:from-violet-400 dark:via-fuchsia-400 dark:to-accent-400'
                    : 'text-neutral-700 dark:text-neutral-300'
                }`}
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* Spacer */}
        {/* <div className="flex-1" /> */}

        {/* CTA */}
        {/* <button className="w-full rounded-lg border-2 border-violet-600 bg-white px-6 py-3 font-semibold text-violet-700 shadow-lg transition-all duration-100 hover:bg-violet-50 hover:shadow-xl dark:border-violet-500 dark:bg-neutral-800 dark:text-violet-300 dark:hover:bg-neutral-700">
          Richiedi Preventivo
        </button> */}
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

//

/* ============================================================================
   AUDIT CARD (Step 1 - Lead Generation)
   ============================================================================ */
function AuditCard() {
  return (
    <div className="group relative overflow-hidden rounded-2xl border-2 border-accent-200 bg-gradient-to-br from-accent-50 to-amber-50 p-8 transition-all duration-300 hover:border-accent-300 hover:shadow-xl dark:border-accent-900/50 dark:from-neutral-900 dark:to-accent-950/20">
      {/* Decorative glow */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent-500/20 blur-3xl" />

      <div className="relative z-10 flex flex-col items-center text-center md:flex-row md:text-left">
        {/* Icon */}
        <div className="mb-6 flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 shadow-lg md:mb-0 md:mr-8">
          <Search className="h-10 w-10 text-white" />
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-accent-600/20 bg-accent-600/10 px-3 py-1 text-xs font-semibold text-accent-700 dark:border-accent-400/20 dark:bg-accent-400/10 dark:text-accent-300">
            <Sparkles className="h-3 w-3" />
            FASE 1 · GRATUITO
          </div>
          <h3 className="mb-3 text-3xl font-bold text-neutral-900 dark:text-neutral-50">
            Audit Gratuito
          </h3>
          <p className="mb-4 text-neutral-600 dark:text-neutral-400">
            Analizziamo insieme i tuoi processi e identifichiamo 2-3 aree ad
            alto impatto dove l'automazione può generare risultati immediati.
            Nessun impegno richiesto.
          </p>
          <button className="group/btn inline-flex items-center gap-2 rounded-lg bg-accent-600 px-6 py-3 font-semibold text-white transition-all hover:bg-accent-700 hover:shadow-lg dark:bg-accent-500 dark:hover:bg-accent-600">
            Prenota il Tuo Audit
            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   MAINTENANCE SECTION (Step 4 - Recurring Revenue)
   ============================================================================ */
function MaintenanceSection() {
  const basePlan = {
    name: 'Piano Base',
    price: '€79',
    period: '/mese',
    icon: Settings,
    features: [
      'Server condiviso ottimizzato',
      'Monitoraggio automazioni 24/7',
      'Supporto via email (48h)',
      'Backup settimanali',
      'Aggiornamenti di sicurezza',
    ],
  };

  const premiumPlan = {
    name: 'Piano Premium',
    price: '€149',
    period: '/mese',
    icon: Crown,
    features: [
      'VPS dedicato con risorse garantite',
      'Monitoraggio avanzato + alert real-time',
      'Supporto prioritario (12h)',
      'Backup giornalieri',
      'Ottimizzazioni performance mensili',
    ],
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-gradient-to-br from-neutral-50 to-neutral-100 p-8 dark:border-neutral-800 dark:from-neutral-900 dark:to-neutral-800">
      {/* Header */}
      <div className="mb-8 text-center">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-success-600/20 bg-success-600/10 px-3 py-1 text-xs font-semibold text-success-700 dark:border-success-400/20 dark:bg-success-400/10 dark:text-success-300">
          <Shield className="h-3 w-3" />
          FASE 4 · GESTIONE CONTINUA
        </div>
        <h3 className="mb-3 text-3xl font-bold text-neutral-900 dark:text-neutral-50">
          Hosting & Manutenzione
        </h3>
        <p className="mx-auto max-w-2xl text-neutral-600 dark:text-neutral-400">
          Dopo i primi 3 mesi inclusi nello Starter, scegli il piano di gestione
          per garantire stabilità e prestazioni ottimali.
        </p>
      </div>

      {/* Plans Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Base Plan */}
        <MaintenancePlanCard {...basePlan} />

        {/* Premium Plan */}
        <MaintenancePlanCard {...premiumPlan} featured />
      </div>

      {/* Note */}
      <div className="mt-6 rounded-lg border border-neutral-300 bg-white p-4 text-center dark:border-neutral-700 dark:bg-neutral-900">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          <Clock className="mb-1 inline h-4 w-4" /> <strong>Nota:</strong> Il
          piano di gestione diventa obbligatorio dopo i 3 mesi di hosting
          inclusi nel Pacchetto Starter.
        </p>
      </div>
    </div>
  );
}

/* ============================================================================
   MAINTENANCE PLAN CARD (Reusable)
   ============================================================================ */
interface MaintenancePlanProps {
  name: string;
  price: string;
  period: string;
  icon: React.ElementType;
  features: string[];
  featured?: boolean;
}

function MaintenancePlanCard({
  name,
  price,
  period,
  icon: Icon,
  features,
  featured = false,
}: MaintenancePlanProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border bg-white p-6 transition-all duration-300 hover:shadow-lg dark:bg-neutral-900 ${
        featured
          ? 'border-2 border-success-400 shadow-md dark:border-success-600/50'
          : 'border-neutral-200 dark:border-neutral-800'
      }`}
    >
      {featured && (
        <div className="absolute -right-10 top-4 rotate-45 bg-success-500 px-10 py-1 text-xs font-bold text-white">
          CONSIGLIATO
        </div>
      )}

      {/* Icon */}
      <div
        className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${
          featured
            ? 'bg-gradient-to-br from-success-500 to-success-600'
            : 'bg-gradient-to-br from-neutral-400 to-neutral-500'
        }`}
      >
        <Icon className="h-6 w-6 text-white" />
      </div>

      {/* Title & Price */}
      <h4 className="mb-1 text-xl font-bold text-neutral-900 dark:text-neutral-50">
        {name}
      </h4>
      <div className="mb-4 flex items-baseline">
        <span
          className={`text-3xl font-bold ${
            featured
              ? 'text-success-600 dark:text-success-400'
              : 'text-neutral-900 dark:text-neutral-50'
          }`}
        >
          {price}
        </span>
        <span className="ml-1 text-sm text-neutral-500">{period}</span>
      </div>

      {/* Features */}
      <ul className="space-y-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <CheckCircle2
              className={`mt-0.5 h-4 w-4 flex-shrink-0 ${
                featured
                  ? 'text-success-600 dark:text-success-400'
                  : 'text-neutral-500'
              }`}
            />
            <span className="text-sm text-neutral-600 dark:text-neutral-400">
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
