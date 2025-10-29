import React from 'react';
import {
  Search,
  Rocket,
  Sparkles,
  Settings,
  CheckCircle2,
  ArrowRight,
  Zap,
  Shield,
  TrendingUp,
  Clock,
  Server,
  Crown,
} from 'lucide-react';

const ServicesSection: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          {/* <span
            className="mb-4 inline-block rounded-full px-3 py-1 text-sm font-semibold uppercase tracking-wider text-foreground"
            aria-hidden="false"
            role="status"
          >
            Il metodo
          </span> */}
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
            Un metodo semplice
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-neutral-600 dark:text-neutral-400">
            Niente pacchetti standard o tecnicismi inutili: ogni progetto nasce
            da un’analisi chiara e da un’implementazione su misura, con costi
            trasparenti e risultati misurabili.
          </p>
        </div>

        {/* Step 1: Free Audit */}
        {/* <div className="mb-8">
          <AuditCard />
        </div> */}

        {/* Step 2 & 3: Starter + Growth Packages */}
        <div className="mb-8 grid gap-6 md:grid-cols-2">
          <StarterCard />
          <GrowthCard />
        </div>

        {/* Step 4: Maintenance Plans */}
        {/* <div className="mb-8">
          <MaintenanceSection />
        </div> */}

        {/* Optional: AI Add-on Banner */}
        <AIEnhancementBanner />
      </div>
    </section>
  );
};

export default ServicesSection;

/* ============================================================================
   AUDIT CARD (Step 1 - Lead Generation)
   ============================================================================ */
function AuditCard() {
  return (
    <div className="dark:to-accent-950/20 group relative overflow-hidden rounded-2xl border-2 border-accent-200 bg-gradient-to-br from-accent-50 to-amber-50 p-8 transition-all duration-300 hover:border-accent-300 hover:shadow-xl dark:border-accent-900/50 dark:from-neutral-900">
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
            <ArrowRight className="group-hover/btn:translate-x-1 h-4 w-4 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   STARTER PACKAGE CARD (Step 2 - Entry Product)
   ============================================================================ */
function StarterCard() {
  const features = [
    'Una automazione semplice end-to-end',
    'Setup completo e deployment',
    '3 mesi di hosting gestito inclusi',
    'Supporto durante il lancio',
  ];

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900">
      {/* Background gradient */}
      <div className="dark:to-primary-950/20 absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-neutral-900" />

      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col p-8">
        {/* Badge */}
        <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-primary-600/20 bg-primary-600/10 px-3 py-1 text-xs font-semibold text-primary-700 dark:border-primary-400/20 dark:bg-primary-400/10 dark:text-primary-300">
          <Rocket className="h-3 w-3" />
          FASE 2 · INGRESSO
        </div>

        {/* Icon */}
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 shadow-md">
          <Zap className="h-8 w-8 text-white" />
        </div>

        {/* Title & Price */}
        <h3 className="mb-2 text-2xl font-bold text-neutral-900 dark:text-neutral-50">
          Pacchetto Starter
        </h3>
        <div className="mb-4">
          <span className="text-4xl font-bold text-primary-600 dark:text-primary-400">
            €499
          </span>
          <span className="ml-2 text-sm text-neutral-500 dark:text-neutral-500">
            una tantum
          </span>
        </div>

        {/* Description */}
        <p className="mb-6 text-neutral-600 dark:text-neutral-400">
          Implementazione rapida di una singola automazione per dimostrare
          valore immediato. Perfetto per iniziare.
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
        <button className="w-full rounded-lg border-2 border-primary-600 bg-primary-600 px-6 py-3 font-semibold text-white transition-all hover:border-primary-700 hover:bg-primary-700 dark:border-primary-500 dark:bg-primary-500 dark:hover:border-primary-600 dark:hover:bg-primary-600">
          Inizia Ora
        </button>
      </div>
    </div>
  );
}

/* ============================================================================
   GROWTH PACKAGE CARD (Step 3 - Custom Projects)
   ============================================================================ */
function GrowthCard() {
  const features = [
    'Automazioni complesse multi-step',
    'Integrazioni multiple e sincronizzate',
    'Logiche condizionali avanzate',
    'Integrazione IA opzionale',
  ];

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border-2 border-accent-300 bg-white shadow-md transition-all duration-300 hover:shadow-xl dark:border-accent-900/50 dark:bg-neutral-900">
      {/* Popular badge */}
      <div className="absolute -right-12 top-6 rotate-45 bg-accent-500 px-12 py-1 text-xs font-bold text-white shadow-lg">
        POPOLARE
      </div>

      {/* Background gradient */}
      <div className="dark:to-violet-950/20 absolute inset-0 bg-gradient-to-br from-violet-50 to-accent-100 dark:from-neutral-900" />

      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col p-8">
        {/* Badge */}
        <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-accent-600/20 bg-accent-600/10 px-3 py-1 text-xs font-semibold text-accent-700 dark:border-accent-400/20 dark:bg-accent-400/10 dark:text-accent-300">
          <TrendingUp className="h-3 w-3" />
          FASE 3 · CRESCITA
        </div>

        {/* Icon */}
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 shadow-md">
          <Sparkles className="h-8 w-8 text-white" />
        </div>

        {/* Title & Price */}
        <h3 className="mb-2 text-2xl font-bold text-neutral-900 dark:text-neutral-50">
          Piani Growth
        </h3>
        <div className="mb-4">
          <span className="text-4xl font-bold text-accent-600 dark:text-accent-400">
            Custom
          </span>
          <span className="ml-2 text-sm text-neutral-500 dark:text-neutral-500">
            su preventivo
          </span>
        </div>

        {/* Description */}
        <p className="mb-6 text-neutral-600 dark:text-neutral-400">
          Progetti su misura per automazioni complesse, integrazioni strategiche
          e implementazioni con intelligenza artificiale.
        </p>

        {/* Features */}
        <ul className="mb-8 space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-600 dark:text-accent-400" />
              <span className="text-sm text-neutral-700 dark:text-neutral-300">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* Spacer */}
        <div className="flex-1" />

        {/* CTA */}
        <button className="w-full rounded-lg border-2 border-accent-600 bg-white px-6 py-3 font-semibold text-accent-700 transition-all hover:bg-accent-50 dark:border-accent-500 dark:bg-neutral-800 dark:text-accent-300 dark:hover:bg-neutral-700">
          Richiedi Preventivo
        </button>
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

/* ============================================================================
   AI ENHANCEMENT BANNER (Optional Add-on)
   ============================================================================ */
function AIEnhancementBanner() {
  return (
    <div className="dark:to-violet-950/20 relative overflow-hidden rounded-2xl border-2 border-violet-200 bg-gradient-to-br from-violet-50 via-purple-50 to-primary-50 p-8 dark:border-violet-900/50 dark:from-neutral-900">
      {/* Decorative elements */}
      <div className="absolute -left-20 top-0 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-40 w-40 rounded-full bg-primary-500/20 blur-3xl" />

      <div className="relative z-10 flex flex-col items-center gap-6 md:flex-row">
        {/* Icon */}
        <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-primary-600 shadow-lg">
          <Sparkles className="h-8 w-8 text-white" />
        </div>

        {/* Content */}
        <div className="flex-1 text-center md:text-left">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-violet-600/20 bg-violet-600/10 px-3 py-1 text-xs font-semibold text-violet-700 dark:border-violet-400/20 dark:bg-violet-400/10 dark:text-violet-300">
            POTENZIAMENTO AI
          </div>
          <h3 className="mb-2 text-2xl font-bold text-neutral-900 dark:text-neutral-50">
            Aggiungi Intelligenza Artificiale
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400">
            Integra ChatGPT, Claude o Gemini in qualsiasi automazione per
            analisi intelligenti, decisioni automatiche e risposte naturali.
          </p>
        </div>

        {/* CTA */}
        <button className="flex-shrink-0 rounded-lg border-2 border-violet-600 bg-violet-600 px-6 py-3 font-semibold text-white transition-all hover:border-violet-700 hover:bg-violet-700 dark:border-violet-500 dark:bg-violet-500 dark:hover:bg-violet-600">
          Scopri di Più
        </button>
      </div>
    </div>
  );
}
