'use client';
import React from 'react';
import {
  Calendar,
  CheckCircle2,
  Clock,
  Video,
  Sparkles,
  User,
  MessageSquare,
  Shield,
  Zap,
  Target,
  TrendingUp,
} from 'lucide-react';

const BookConsultationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
      {/* Hero Section */}
      {/* <HeroSection /> */}

      {/* Calendar Booking Section */}
      <CalendarSection />

      {/* What's Included Section */}
      <WhatsIncludedSection />

      {/* Trust Section */}
      {/* <TrustSection /> */}

      {/* FAQ / Reassurance */}
      <ReassuranceSection />
    </div>
  );
};

export default BookConsultationPage;

/* ============================================================================
   HERO SECTION
   ============================================================================ */
function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 py-20 md:py-28">
      {/* Decorative background elements */}
      <div className="absolute right-1/4 top-20 h-96 w-96 rounded-full bg-primary-500/10 blur-3xl" />
      <div className="absolute bottom-20 left-1/4 h-96 w-96 rounded-full bg-accent-500/10 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-200 bg-accent-50 px-4 py-2 text-sm font-semibold text-accent-700 dark:border-accent-900/50 dark:bg-accent-950/30 dark:text-accent-300">
          <Sparkles className="h-4 w-4" />
          Consulenza Gratuita · 30 Minuti · Nessun Impegno
        </div>

        {/* Main Headline */}
        <h1 className="mb-6 text-4xl font-bold leading-tight text-neutral-900 dark:text-neutral-50 sm:text-5xl md:text-6xl">
          Risparmia Ore Ogni Settimana con{' '}
          <span className="bg-gradient-to-r from-primary-600 via-accent-500 to-primary-500 bg-clip-text text-transparent">
            Automazione Intelligente
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mb-8 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400 md:text-xl">
          In questa chiamata di 30 minuti, analizzeremo insieme i tuoi processi
          e identificheremo 2-3 automazioni ad alto impatto che puoi
          implementare subito.
        </p>

        {/* Quick Stats */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-600 dark:text-neutral-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-success-600 dark:text-success-400" />
            <span>100% Gratuito</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-success-600 dark:text-success-400" />
            <span>Zero Impegno</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-success-600 dark:text-success-400" />
            <span>Risultati Concreti</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
   WHAT'S INCLUDED SECTION
   ============================================================================ */
function WhatsIncludedSection() {
  const includes = [
    {
      icon: Target,
      title: 'Analisi dei Processi',
      description:
        'Identifico dove stai perdendo più tempo in attività ripetitive.',
    },
    {
      icon: Zap,
      title: 'Opportunità di Automazione',
      description:
        'Ti mostro 2-3 automazioni ad alto ROI che puoi implementare subito.',
    },
    {
      icon: TrendingUp,
      title: "Piano d'Azione",
      description:
        'Ricevi una roadmap chiara dei prossimi step per automatizzare il tuo business.',
    },
  ];

  return (
    <section className="px-4 py-16">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-neutral-900 dark:text-neutral-50">
            Cosa Include la Chiamata
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            30 minuti focalizzati sul tuo business e sui risultati concreti
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {includes.map((item, index) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:border-primary-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-primary-700"
            >
              {/* Number badge */}
              <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-sm font-bold text-neutral-400 dark:bg-neutral-800 dark:text-neutral-600">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 shadow-md transition-transform duration-300 group-hover:scale-110">
                <item.icon className="h-7 w-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="mb-2 text-lg font-bold text-neutral-900 dark:text-neutral-50">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
   TRUST SECTION
   ============================================================================ */
function TrustSection() {
  return (
    <section className="px-4 py-16">
      <div className="container mx-auto max-w-5xl">
        <div className="grid gap-8 md:grid-cols-[1fr_1.5fr]">
          {/* Consultant Bio */}
          <ConsultantBio />

          {/* Testimonial */}
          <Testimonial />
        </div>
      </div>
    </section>
  );
}

function ConsultantBio() {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-neutral-900">
      <div className="mb-6 flex items-center gap-4">
        {/* Avatar */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 opacity-50 blur-md" />
          <div className="relative h-20 w-20 overflow-hidden rounded-full border-4 border-white shadow-lg dark:border-neutral-800">
            <img
              src="/images/avatar.jpg"
              alt="Emiliano Mastragostino"
              className="h-full w-full object-cover"
            />
          </div>
          {/* Verified badge */}
          <div className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-primary-600 dark:border-neutral-900">
            <CheckCircle2 className="h-4 w-4 text-white" />
          </div>
        </div>

        {/* Name & Title */}
        <div>
          <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-50">
            Emiliano Mastragostino
          </h3>
          <p className="text-sm text-primary-600 dark:text-primary-400">
            Automation Consultant
          </p>
        </div>
      </div>

      <p className="mb-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
        Aiuto PMI e professionisti a recuperare tempo prezioso automatizzando
        processi con n8n e intelligenza artificiale.
      </p>

      <div className="flex flex-wrap gap-2">
        <Badge>n8n Expert</Badge>
        <Badge>50+ Progetti</Badge>
        <Badge>AI Integration</Badge>
      </div>
    </div>
  );
}

function Testimonial() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-accent-200 bg-gradient-to-br from-accent-50 to-amber-50 p-8 dark:border-accent-900/50 dark:from-neutral-900 dark:to-accent-950/20">
      {/* Quote icon */}
      <div className="absolute right-6 top-6 text-6xl text-accent-200 dark:text-accent-900/50">
        "
      </div>

      <div className="relative z-10">
        <div className="mb-6 flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="h-5 w-5 fill-accent-500"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        <p className="mb-6 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
          "In 30 minuti Emiliano ha identificato 3 automazioni che mi hanno
          fatto risparmiare 15 ore a settimana. Il ROI è stato immediato.
          Consigliato al 100%!"
        </p>

        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-neutral-300 to-neutral-400 dark:from-neutral-700 dark:to-neutral-600" />
          <div>
            <div className="font-semibold text-neutral-900 dark:text-neutral-50">
              Marco B.
            </div>
            <div className="text-sm text-neutral-600 dark:text-neutral-400">
              CEO, Tech Startup
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700 dark:border-primary-900/50 dark:bg-primary-950/30 dark:text-primary-300">
      {children}
    </span>
  );
}

/* ============================================================================
   CALENDAR SECTION (Main CTA)
   ============================================================================ */
function CalendarSection() {
  return (
    <section className="px-4 py-16">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-700 dark:border-primary-900/50 dark:bg-primary-950/30 dark:text-primary-300">
            <Calendar className="h-4 w-4" />
            Prenota il Tuo Slot
          </div>
          <h2 className="mb-4 text-3xl font-bold text-neutral-900 dark:text-neutral-50 md:text-4xl">
            Scegli l'Orario che Preferisci
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
            Seleziona data e ora direttamente dal calendario. Riceverai subito
            una conferma via email con il link per la videocall.
          </p>
        </div>

        {/* Calendar Container */}
        <div className="overflow-hidden rounded-3xl border-2 border-primary-200 bg-white shadow-xl dark:border-primary-800 dark:bg-neutral-900">
          {/* Calendar Header */}
          <div className="border-b border-neutral-200 bg-gradient-to-r from-primary-50 to-accent-50 px-6 py-4 dark:border-neutral-800 dark:from-primary-950/20 dark:to-accent-950/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600 dark:bg-primary-500">
                  <Video className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-neutral-900 dark:text-neutral-50">
                    Consulenza Gratuita
                  </div>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400">
                    30 minuti · Google Meet
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <Clock className="h-4 w-4" />
                <span>30 min</span>
              </div>
            </div>
          </div>

          {/* Calendar Placeholder */}
          <CalendarPlaceholder />

          {/* Calendar Footer */}
          <div className="border-t border-neutral-200 bg-neutral-50 px-6 py-4 dark:border-neutral-800 dark:bg-neutral-800/50">
            <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-success-600 dark:text-success-400" />
                <span>Nessun pagamento richiesto</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-primary-600 dark:text-primary-400" />
                <span>Conferma immediata via email</span>
              </div>
            </div>
          </div>
        </div>

        {/* Below Calendar Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-neutral-500 dark:text-neutral-500">
            Tutti gli orari sono in{' '}
            <strong>fuso orario italiano (CET/CEST)</strong>. Puoi cancellare o
            riprogrammare in qualsiasi momento.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
   CALENDAR PLACEHOLDER (Replace with Cal.com embed)
   ============================================================================ */
function CalendarPlaceholder() {
  return (
    <div className="flex min-h-[500px] items-center justify-center bg-gradient-to-br from-neutral-50 to-neutral-100 p-12 dark:from-neutral-900 dark:to-neutral-800">
      <div className="text-center">
        <div className="mb-6 flex justify-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-950/30">
            <Calendar className="h-12 w-12 text-primary-600 dark:text-primary-400" />
          </div>
        </div>
        <h3 className="mb-3 text-xl font-bold text-neutral-900 dark:text-neutral-50">
          Calendario di Prenotazione
        </h3>
        <p className="mb-6 max-w-md text-sm text-neutral-600 dark:text-neutral-400">
          Qui verrà integrato il widget di Cal.com per la selezione di data e
          ora.
        </p>
        <div className="inline-flex items-center gap-2 rounded-lg border-2 border-dashed border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400">
          <code className="font-mono">Cal.com Embed Placeholder</code>
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   REASSURANCE SECTION
   ============================================================================ */
function ReassuranceSection() {
  const faqs = [
    {
      q: 'È davvero gratuito?',
      a: 'Sì, al 100%. Nessun costo nascosto, nessun pagamento richiesto.',
    },
    {
      q: 'Cosa devo preparare?',
      a: "Niente di specifico. Basta avere un'idea generale dei processi che vorresti automatizzare.",
    },
    {
      q: 'Posso riprogrammare?',
      a: "Certo! Puoi cancellare o spostare l'appuntamento in qualsiasi momento dal link nella conferma.",
    },
    {
      q: 'Come si svolge la chiamata?',
      a: 'Ci incontriamo su Google Meet. Riceverai il link nella conferma email subito dopo la prenotazione.',
    },
  ];

  return (
    <section className="bg-neutral-50 px-4 py-16 dark:bg-neutral-900">
      <div className="container mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-2xl font-bold text-neutral-900 dark:text-neutral-50">
            Domande Frequenti
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            Tutto quello che devi sapere prima di prenotare
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900"
            >
              <h3 className="mb-2 font-bold text-neutral-900 dark:text-neutral-50">
                {faq.q}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-12 text-center">
          <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
            Hai altre domande? Scrivimi direttamente
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
          >
            {/* <Mail className="h-4 w-4" /> */}
            <span className="font-semibold">Vai alla pagina contatti</span>
          </a>
        </div>
      </div>
    </section>
  );
}
