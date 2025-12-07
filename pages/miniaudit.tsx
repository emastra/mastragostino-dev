'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Meta from '~/components/Meta';
import LayoutContainer from '~/components/LayoutContainer';
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Mail,
  User,
  Linkedin,
  Github,
  Zap,
  Clock,
  Shield,
} from 'lucide-react';

const MiniAuditPage: React.FC & { hideLayout?: boolean } = () => {
  return (
    <>
      <Meta
        title="Mini-Audit Gratuito | Automazione Processi"
        description="Analisi gratuita dei tuoi processi per identificare opportunità di automazione. Scopri dove puoi risparmiare tempo e ridurre errori."
      />
      <HeroSection />
      <LayoutContainer>
        <FormSection />
        <TrustSection />
      </LayoutContainer>
    </>
  );
};

MiniAuditPage.hideLayout = true;

export default MiniAuditPage;

/* ============================================================================
   HERO SECTION
   ============================================================================ */
function HeroSection() {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:py-20 md:py-24">
      {/* Grid Background - matching HeroSection style */}
      {/* <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(to right, #4f4f4f22 1px, transparent 1px), linear-gradient(to bottom, #4f4f4f22 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage:
            'radial-gradient(ellipse 90% 90% at 50% 50%, #000 0%, transparent 80%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 90% 90% at 50% 50%, #000 0%, transparent 80%)',
        }}
      /> */}

      {/* Glow Effect */}
      {/* <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-primary-500/20 blur-[120px]" /> */}

      <div className="container relative z-10 mx-auto max-w-4xl text-center">
        {/* Top Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-500/20 bg-primary-500/10 px-4 py-2 text-sm font-semibold text-primary-600 backdrop-blur-sm dark:text-primary-100">
          <Sparkles className="h-4 w-4" />
          <span className="hidden sm:inline">
            Offerta Speciale per PMI e Professionisti
          </span>
          <span className="inline sm:hidden">Offerta Speciale</span>
        </div>

        {/* Main Headline */}
        {/* <h1 className="mb-6 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
          Mini-Audit{' '}
          <span className="bg-gradient-to-r from-primary-500 via-violet-500 to-amber-500 bg-clip-text text-transparent">
            Gratuito
          </span>
        </h1> */}
        <h1 className="mb-6 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
          Mini-Audit Gratuito per{' '}
          <span className="bg-gradient-to-r from-primary-500 via-violet-500 to-amber-500 bg-clip-text text-transparent">
            Agenzie Immobiliari
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mb-8 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400 sm:text-xl">
          Una breve analisi dei tuoi processi per capire dove migliorare
          l'efficienza operativa. Scopri le opportunità di automazione
          personalizzate per te.
        </p>

        {/* Value Props */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <ValuePill icon={Clock} text="15-20 minuti" />
          <ValuePill icon={Zap} text="Analisi personalizzata" />
          <ValuePill icon={CheckCircle2} text="100% gratuito" />
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
   FORM SECTION
   ============================================================================ */
function FormSection() {
  const [formState, setFormState] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    task: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('sending');

    // Simulate submission
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (formState === 'success') {
    return <SuccessMessage />;
  }

  return (
    <section className="relative px-4 py-16">
      {/* Subtle background decoration */}
      {/* <div className="absolute left-1/4 top-20 h-96 w-96 rounded-full bg-primary-500/5 blur-[120px]" />
      <div className="absolute bottom-20 right-1/4 h-96 w-96 rounded-full bg-violet-500/5 blur-[120px]" /> */}

      <div className="container relative z-10 mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-neutral-900 dark:text-neutral-50 sm:text-4xl">
            Richiedi il tuo Mini-Audit
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
            Compila il form e riceverai un'analisi personalizzata dei tuoi
            processi con suggerimenti concreti su come automatizzare.
          </p>
        </div>

        {/* Form Card */}
        <div className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-violet-50 dark:from-neutral-900 dark:via-primary-950/10 dark:to-violet-950/10" />

          {/* Top accent bar */}
          <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-primary-500 via-violet-500 to-amber-500" />

          <div className="relative z-10 p-6 sm:p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Two-column layout on larger screens */}
              <div className="grid gap-6 md:grid-cols-2">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-neutral-700 dark:text-neutral-300"
                  >
                    Nome Completo *
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <User className="h-5 w-5 text-neutral-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Mario Rossi"
                      className="w-full rounded-lg border border-neutral-300 bg-white py-3 pl-10 pr-4 text-neutral-900 placeholder-neutral-400 transition-all focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:placeholder-neutral-500"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-neutral-700 dark:text-neutral-300"
                  >
                    Email *
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <Mail className="h-5 w-5 text-neutral-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="mario@esempio.com"
                      className="w-full rounded-lg border border-neutral-300 bg-white py-3 pl-10 pr-4 text-neutral-900 placeholder-neutral-400 transition-all focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:placeholder-neutral-500"
                    />
                  </div>
                </div>
              </div>

              {/* Task Field - Full width */}
              <div>
                <label
                  htmlFor="task"
                  className="mb-2 block text-sm font-semibold text-neutral-700 dark:text-neutral-300"
                >
                  Qual è l'attività più ripetitiva del tuo lavoro?{' '}
                  <span className="font-normal text-neutral-500">
                    (Opzionale)
                  </span>
                </label>
                <textarea
                  id="task"
                  name="task"
                  rows={3}
                  value={formData.task}
                  onChange={handleChange}
                  placeholder="Es: Inserimento manuale dati nei fogli Excel, invio email di follow-up, aggiornamento CRM..."
                  className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 placeholder-neutral-400 transition-all focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:placeholder-neutral-500"
                />
                <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
                  Aiutami a capire meglio le tue esigenze per darti suggerimenti
                  più mirati
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={formState === 'sending'}
                className="group/btn flex w-full items-center justify-center gap-2 rounded-lg bg-primary-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-100 hover:bg-primary-700 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50 dark:bg-primary-500 dark:hover:bg-primary-600"
              >
                {formState === 'sending' ? (
                  <>
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Invio in corso...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-5 w-5" />
                    Richiedi Mini-Audit Gratuito
                    <ArrowRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                  </>
                )}
              </button>

              {/* Trust indicators below button */}
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-2 text-xs text-neutral-500 dark:text-neutral-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success-500" />
                  <span>Nessuna carta richiesta</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success-500" />
                  <span>Risposta in 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success-500" />
                  <span>Zero impegno</span>
                </div>
              </div>
            </form>
          </div>

          {/* Hover overlay */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-neutral-900/0 transition-colors duration-300 group-hover:bg-neutral-900/[0.01] dark:group-hover:bg-white/[0.01]" />
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
    <section className="relative overflow-hidden px-4 py-16 sm:py-20">
      {/* Subtle glow */}
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/5 blur-[120px]" />

      <div className="container relative z-10 mx-auto max-w-3xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-neutral-900 dark:text-neutral-50 sm:text-4xl">
            Chi ti segue
          </h2>
        </div>

        {/* Main Card */}
        <div className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-violet-50 dark:from-neutral-900 dark:via-primary-950/10 dark:to-violet-950/10" />

          <div className="relative z-10 p-8 text-center sm:p-10">
            {/* Avatar */}
            <div className="relative mx-auto mb-6 inline-block">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 to-violet-500 opacity-40 blur-xl" />
              <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-lg dark:border-neutral-800 sm:h-40 sm:w-40">
                <img
                  src="/images/avatar.jpg"
                  alt="Emiliano Mastragostino"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              {/* Waving hand emoji */}
              <div className="absolute -right-2 bottom-2 text-3xl sm:text-4xl">
                👋
              </div>
            </div>

            {/* Name & Title */}
            <h3 className="mb-2 text-2xl font-bold text-neutral-900 dark:text-neutral-50">
              Emiliano Mastragostino
            </h3>
            <p className="mb-6 text-base font-medium text-primary-600 dark:text-primary-400">
              Automation Consultant & n8n Expert
            </p>

            {/* Bio */}
            <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg">
              Esperto in automazioni operative per PMI e professionisti. Aiuto
              il tuo team a lavorare con più ordine, meno frizioni e processi
              più chiari.
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-3">
              <SocialButton
                href="https://www.linkedin.com/in/emiliano-mastragostino/"
                icon={Linkedin}
                label="LinkedIn"
              />
              <SocialButton
                href="https://github.com/emastra"
                icon={Github}
                label="GitHub"
              />
            </div>
          </div>

          {/* Hover overlay */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-neutral-900/0 transition-colors duration-300 group-hover:bg-neutral-900/[0.01] dark:group-hover:bg-white/[0.01]" />
        </div>

        {/* Why Trust Section */}
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <TrustCard
            icon={Zap}
            title="Esperienza Pratica"
            description="Automazioni reali per aziende reali"
          />
          <TrustCard
            icon={Shield}
            title="Riservatezza"
            description="I tuoi dati sono sempre protetti"
          />
          <TrustCard
            icon={Clock}
            title="Risposta Rapida"
            description="Feedback entro 24 ore"
          />
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
   HELPER COMPONENTS
   ============================================================================ */

interface ValuePillProps {
  icon: React.ElementType;
  text: string;
}

function ValuePill({ icon: Icon, text }: ValuePillProps) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:border-primary-300 hover:bg-primary-50/80 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-800/80 dark:hover:border-primary-600 dark:hover:bg-primary-950/30">
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-950/50 dark:text-primary-400">
        <Icon className="h-3.5 w-3.5" />
      </div>
      <span className="text-sm font-medium text-neutral-700 dark:text-neutral-200">
        {text}
      </span>
    </div>
  );
}

interface SocialButtonProps {
  href: string;
  icon: React.ElementType;
  label: string;
}

function SocialButton({ href, icon: Icon, label }: SocialButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-12 w-12 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-600 shadow-sm transition-all duration-100 hover:border-primary-500 hover:bg-primary-50 hover:text-primary-600 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:border-primary-500 dark:hover:bg-primary-950/30 dark:hover:text-primary-400"
    >
      <Icon className="h-5 w-5" />
    </a>
  );
}

interface TrustCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

function TrustCard({ icon: Icon, title, description }: TrustCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-primary-50/30 dark:from-neutral-900 dark:to-primary-950/10" />

      <div className="relative z-10 text-center">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 transition-transform duration-300 group-hover:scale-105 dark:bg-primary-950/30">
          <Icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
        </div>
        <h4 className="mb-2 font-bold text-neutral-900 dark:text-neutral-50">
          {title}
        </h4>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
      </div>

      {/* Hover overlay */}
      <div className="pointer-events-none absolute inset-0 rounded-xl bg-neutral-900/0 transition-colors duration-300 group-hover:bg-neutral-900/[0.01] dark:group-hover:bg-white/[0.01]" />
    </div>
  );
}

/* ============================================================================
   SUCCESS MESSAGE
   ============================================================================ */
function SuccessMessage() {
  return (
    <section className="px-4 py-16">
      <div className="container mx-auto max-w-2xl">
        <div className="rounded-2xl border border-neutral-200 bg-white p-8 text-center shadow-lg dark:border-neutral-800 dark:bg-neutral-900 sm:p-12">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-success-100 dark:bg-success-950/30">
            <CheckCircle2 className="h-10 w-10 text-success-600 dark:text-success-400" />
          </div>
          <h2 className="mb-4 text-3xl font-bold text-neutral-900 dark:text-neutral-50">
            Richiesta Inviata con Successo!
          </h2>
          <p className="mb-2 text-lg text-neutral-600 dark:text-neutral-400">
            Grazie per la tua richiesta. Riceverai il tuo Mini-Audit
            personalizzato entro 24 ore.
          </p>
          <p className="mb-8 text-sm text-neutral-500 dark:text-neutral-500">
            Controlla la tua email (anche la cartella spam) per il mio messaggio
            📬
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
          >
            ← Torna alla home
          </a>
        </div>
      </div>
    </section>
  );
}
