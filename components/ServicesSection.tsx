import React from 'react';
import {
  Rocket,
  Sparkles,
  CheckCircle2,
  Zap,
  TrendingUp,
  Wrench,
  HelpCircle,
  ArrowRight,
  Calendar,
  MessageCircle,
  Lightbulb,
  Search,
  Crown,
  Settings,
  Shield,
  Clock,
} from 'lucide-react';
import Link from 'next/link';

const ServicesSection: React.FC = () => {
  return (
    <section
      id="how-we-start"
      className="relative overflow-hidden py-12 md:py-24"
    >
      {/* Subtle background decoration */}
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-500/5 blur-[100px]" />

      <div className="container relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span
            className="bg-accent/10 text-accent-foreground mb-4 inline-block rounded-full px-3 py-1 text-sm font-semibold uppercase tracking-wider"
            aria-hidden="false"
            role="status"
          >
            Come iniziamo
          </span>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Dalla chiarezza all'automazione
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-neutral-600 dark:text-neutral-400 md:text-xl">
            Nessun percorso complicato, nessuna spinta alla vendita. Tutto parte
            da una breve call gratuita per capire le tue esigenze e, solo se ha
            senso, passiamo alla realizzazione dell'automazione su misura.
          </p>
        </div>

        {/* Process Steps - Connected Design */}
        <div className="relative mb-12 grid gap-8 md:grid-cols-2">
          {/* Connection Line (desktop only) */}
          <div className="absolute left-1/2 top-1/2 hidden h-0.5 w-20 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary-400 to-violet-400 md:block" />
          <div className="absolute left-1/2 top-1/2 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-primary-500 md:block" />

          <StarterCard />
          <GrowthCard />
        </div>

        {/* Closing CTA Section */}
        <div className="mx-auto mt-20 max-w-3xl">
          {/* Decorative top border */}
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
            <Lightbulb className="h-6 w-6 text-primary-500" />
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
          </div>

          <div className="text-center">
            <h3 className="mb-4 text-2xl font-bold text-neutral-900 dark:text-neutral-50 sm:text-3xl">
              Inizia senza impegno
            </h3>
            <p className="mb-8 text-lg text-neutral-600 dark:text-neutral-400">
              Il modo migliore per iniziare è parlarne: ti mostro{' '}
              <strong className="font-semibold text-neutral-900 dark:text-neutral-50">
                il potenziale dell'automazione
              </strong>{' '}
              nel tuo caso specifico.
            </p>

            {/* Primary CTA */}
            <Link href="/booking" passHref>
              <a className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-100 hover:bg-primary-700 hover:shadow-xl dark:bg-primary-500 dark:hover:bg-primary-600">
                <Calendar className="h-5 w-5" />
                Prenota la tua call gratuita
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Link>

            {/* Trust indicators */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-neutral-500 dark:text-neutral-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-success-500" />
                <span>solo 20 minuti</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-success-500" />
                <span>Zero impegno</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-success-500" />
                <span>100% gratuito</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

/* ============================================================================
   STEP 1 CARD - Free Analysis Call
   ============================================================================ */
function StarterCard() {
  const features = [
    'Analisi gratuita dei tuoi flussi attuali (20-30 minuti)',
    'Identificazione dei punti critici e ripetitivi',
    'Prime idee di automazione personalizzate',
    'Nessun impegno, solo chiarezza',
  ];

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900 dark:hover:shadow-primary-500/10">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-50/50 dark:from-neutral-900 dark:via-primary-950/10 dark:to-neutral-900" />

      {/* Top accent bar */}
      <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-primary-500 to-primary-600" />

      <div className="relative z-10 flex flex-1 flex-col p-8">
        {/* Step Badge */}
        <div className="mb-6 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-500/20 bg-primary-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-700 dark:border-primary-400/20 dark:bg-primary-400/10 dark:text-primary-300">
            <Rocket className="h-3.5 w-3.5" />
            Step 1
          </div>
          {/* Free Badge */}
          {/* <div className="rounded-full bg-success-500 px-3 py-1.5 text-xs font-bold text-white shadow-sm">
            GRATUITA
          </div> */}
        </div>

        {/* Icon */}
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 shadow-md transition-transform duration-300 group-hover:scale-105">
          <MessageCircle className="h-8 w-8 text-white" />
        </div>

        {/* Title */}
        {/* <h3 className="mb-3 text-2xl font-bold text-neutral-900 dark:text-neutral-50">
          Call di Analisi
        </h3> */}
        {/* Title & Price */}
        <div className="mb-3">
          <h3 className="mb-2 text-2xl font-bold text-neutral-900 dark:text-neutral-50">
            Call di Analisi
          </h3>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-success-600 dark:text-success-400">
              Gratuita
            </span>
            {/* <span className="text-sm text-neutral-500 dark:text-neutral-500">
              una tantum
            </span> */}
          </div>
        </div>

        {/* Description */}
        <p className="mb-6 text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
          Una breve conversazione per capire il tuo modo di lavorare e
          individuare dove l'automazione può portare il maggior valore ai tuoi
          processi.
        </p>

        {/* Features List */}
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-3 rounded-lg bg-white/50 p-3 transition-colors hover:bg-primary-50/50 dark:bg-neutral-800/30 dark:hover:bg-primary-950/20"
            >
              <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-primary-600 dark:text-primary-400" />
              <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Bottom info */}
        <div className="mt-4 rounded-lg border border-primary-200 bg-primary-50/50 p-3.5 dark:border-primary-900/30 dark:bg-primary-950/20">
          <p className="text-xs font-medium text-primary-700 dark:text-primary-300">
            💡 Alla fine della call, saprai{' '}
            <span className="font-semibold text-neutral-700 dark:text-neutral-200">
              se
            </span>{' '}
            e{' '}
            <span className="font-semibold text-neutral-700 dark:text-neutral-200">
              cosa
            </span>{' '}
            automatizzare.
          </p>
        </div>
      </div>

      {/* Hover overlay */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-neutral-900/0 transition-colors duration-300 group-hover:bg-neutral-900/[0.01] dark:group-hover:bg-white/[0.01]" />
    </div>
  );
}

/* ============================================================================
   STEP 2 CARD - Custom Development
   ============================================================================ */
function GrowthCard() {
  const features = [
    'Preventivo fisso, zero sorprese',
    "Sviluppo e implementazione dell'automazione",
    'Integrazione dei tuoi strumenti di lavoro esistenti',
    "Supporto post-lancio e alle prime settimane d'uso",
    'Lorem ipsum test test test',
  ];

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900 dark:hover:shadow-violet-500/10">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-purple-50/50 dark:from-neutral-900 dark:via-violet-950/10 dark:to-neutral-900" />

      {/* Top accent bar */}
      <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-violet-500 to-purple-600" />

      <div className="relative z-10 flex flex-1 flex-col p-8">
        {/* Step Badge */}
        <div className="mb-6 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-violet-700 dark:border-violet-400/20 dark:bg-violet-400/10 dark:text-violet-300">
            <TrendingUp className="h-3.5 w-3.5" />
            Step 2
          </div>
          {/* Optional Badge */}
          <div className="rounded-full border border-violet-300 bg-violet-50 px-3 py-1.5 text-xs font-semibold text-violet-700 dark:border-violet-800 dark:bg-violet-950/50 dark:text-violet-300">
            Solo se ha senso
          </div>
        </div>

        {/* Icon */}
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 shadow-md transition-transform duration-300 group-hover:scale-105">
          <Wrench className="h-8 w-8 text-white" />
        </div>

        {/* Title & Price */}
        <div className="mb-3">
          <h3 className="mb-2 text-2xl font-bold text-neutral-900 dark:text-neutral-50">
            Sviluppo su misura
          </h3>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-violet-600 dark:text-violet-400">
              Custom
            </span>
            <QMarkTooltip>
              <div className="mb-1 font-semibold">Prezzo personalizzato</div>
              <div>Il prezzo varia in base alla complessità del progetto.</div>
              <div className="mt-1 text-violet-600 dark:text-violet-400">
                Le automazioni semplici partono da €300.
              </div>
            </QMarkTooltip>
            <span className="text-sm text-neutral-500 dark:text-neutral-500">
              su preventivo
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="mb-6 text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
          Se decidi di procedere, creo e implemento l'automazione definita
          insieme. Mi occupo dei test e dell'integrazione, per renderla subito
          pronta all'uso nel tuo ambiente di lavoro.
        </p>

        {/* Features List */}
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-3 rounded-lg bg-white/50 p-3 transition-colors hover:bg-violet-50/50 dark:bg-neutral-800/30 dark:hover:bg-violet-950/20"
            >
              <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-violet-600 dark:text-violet-400" />
              <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                {feature}
              </span>
            </div>
          ))}

          {/* AI Feature - Special styling */}
          <div className="flex items-start gap-3 rounded-lg bg-white/50 p-3 transition-colors hover:bg-violet-50/50 dark:bg-neutral-800/30 dark:hover:bg-violet-950/20">
            <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-violet-600 dark:text-violet-400" />
            <div className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              <span className="bg-gradient-to-r from-accent-600 via-fuchsia-600 to-violet-600 bg-clip-text font-bold text-transparent dark:from-accent-400 dark:via-fuchsia-400 dark:to-violet-400">
                AI Opzionale
              </span>
              <Sparkles className="relative -top-1 inline h-4 w-4 flex-shrink-0 text-violet-600 dark:text-violet-400" />{' '}
              <span>per ottimizzare o potenziare le automazioni</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hover overlay */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-neutral-900/0 transition-colors duration-300 group-hover:bg-neutral-900/[0.01] dark:group-hover:bg-white/[0.01]" />
    </div>
  );
}

/* ============================================================================
   TOOLTIP COMPONENT
   ============================================================================ */

interface QMarkTooltipProps {
  children: React.ReactNode;
}

function QMarkTooltip({ children }: QMarkTooltipProps) {
  const [showTooltip, setShowTooltip] = React.useState(false);

  return (
    <div className="relative inline-block">
      <HelpCircle
        className="h-4 w-4 cursor-help text-neutral-400 transition-colors hover:text-neutral-600 dark:hover:text-neutral-300"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      />
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 z-20 mb-2 w-64 -translate-x-1/2 rounded-lg border border-neutral-200 bg-white p-3 text-xs text-neutral-700 shadow-xl dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
          {children}
          {/* Tooltip arrow */}
          <div className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 border-x-8 border-t-8 border-x-transparent border-t-white dark:border-t-neutral-800" />
        </div>
      )}
    </div>
  );
}

// NOT USED

/* ============================================================================
   AUDIT CARD
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
   MAINTENANCE SECTION
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
   MAINTENANCE PLAN CARD
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
