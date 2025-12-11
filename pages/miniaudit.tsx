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
  Target,
  Phone,
  FileText,
  MessageSquare,
  Lightbulb,
  MessageCircleMore,
} from 'lucide-react';

const MiniAuditPage: React.FC & { hideLayout?: boolean } = () => {
  return (
    <>
      <Meta
        title="Mini-Audit Gratuito | Automazione Processi"
        description="Analisi gratuita dei tuoi processi per identificare opportunità di automazione. Scopri dove puoi risparmiare tempo e ridurre errori."
      />
      <SimpleHeader />
      <HeroSection />
      <LayoutContainer>
        <FormSection />
        <TrustSection />
        {/* <BenefitsSection /> */}
      </LayoutContainer>
      <ProcessSection />
      <FinalCTASection />
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
    <section
      id="hero-section"
      className="relative overflow-hidden px-4 py-8 sm:py-20 md:py-12"
    >
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
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-500/20 bg-primary-500/10 px-4 py-1 text-xs font-semibold text-primary-600 backdrop-blur-sm dark:text-primary-100 md:py-2 md:text-sm">
          <Sparkles className="h-4 w-4" />
          <span className="hidden sm:inline">
            Offerta Speciale per Agenzie Immobiliari
          </span>
          <span className="inline sm:hidden">
            Speciale per Agenzie Immobiliari
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="mb-6 text-4xl font-bold text-primary-700 sm:text-5xl md:text-6xl">
          Richiedi il Mini-Audit Gratuito
          {/* <span className="bg-gradient-to-r from-primary-700 via-violet-500 to-amber-500 bg-clip-text text-transparent">
            Gratuito
          </span> */}
        </h1>
        {/* <h1 className="mb-6 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
          Mini-Audit Gratuito per{' '}
          <span className="bg-gradient-to-r from-primary-500 via-violet-500 to-amber-500 bg-clip-text text-transparent">
            Agenzie Immobiliari
          </span>
        </h1> */}

        {/* Subheadline */}
        <p
          id="scroll-back-point"
          className="mx-auto max-w-2xl text-lg text-neutral-600 dark:text-neutral-400 sm:text-xl"
        >
          Una breve analisi per capire dove migliorare l'efficienza operativa
          della tua agenzia.
        </p>

        {/* Value Props */}
        {/* <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <ValuePill icon={Clock} text="15-20 minuti" />
          <ValuePill icon={Zap} text="Analisi personalizzata" />
          <ValuePill icon={CheckCircle2} text="100% gratuito" />
        </div> */}
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
    agency: '',
    contactType: '',
    whatsapp: '',
    phone: '',
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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Get the appropriate input field based on contactType
  const getContactInputField = () => {
    const commonProps = {
      required: true,
      value: formData[formData.contactType as keyof typeof formData] || '',
      onChange: handleChange,
      className:
        'w-full rounded-lg border border-neutral-300 bg-white py-3 pl-10 pr-4 text-neutral-900 placeholder-neutral-400 transition-all focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:placeholder-neutral-500',
    };

    switch (formData.contactType) {
      case 'whatsapp':
        return (
          <input
            {...commonProps}
            type="tel"
            id="whatsapp"
            name="whatsapp"
            placeholder="3381234567"
          />
        );
      case 'phone':
        return (
          <input
            {...commonProps}
            type="tel"
            id="phone"
            name="phone"
            placeholder="3381234567"
          />
        );
      case 'email':
        return (
          <input
            {...commonProps}
            type="email"
            id="email"
            name="email"
            placeholder="mario@esempio.com"
          />
        );
      default:
        return null;
    }
  };

  const getContactIcon = () => {
    switch (formData.contactType) {
      case 'whatsapp':
        return (
          <svg
            className="h-5 w-5 text-neutral-400"
            viewBox="0 0 32 32"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z"></path>
          </svg>
        );
      case 'phone':
        return <Phone className="h-5 w-5 text-neutral-400" />;
      case 'email':
        return <Mail className="h-5 w-5 text-neutral-400" />;
      default:
        return <MessageCircleMore className="h-5 w-5 text-neutral-400" />;
    }
  };

  if (formState === 'success') {
    return <SuccessMessage />;
  }

  return (
    <section id="form-section" className="relative px-2 pb-8">
      <div className="container relative z-10 mx-auto max-w-4xl">
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
                    className="mb-2 ml-1 block text-sm font-semibold text-neutral-700 dark:text-neutral-300"
                  >
                    Nome *
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
                      placeholder="Mario"
                      className="w-full rounded-lg border border-neutral-300 bg-white py-3 pl-10 pr-4 text-neutral-900 placeholder-neutral-400 transition-all focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:placeholder-neutral-500"
                    />
                  </div>
                </div>

                {/* Agency Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 ml-1 block text-sm font-semibold text-neutral-700 dark:text-neutral-300"
                  >
                    Agenzia{' '}
                    <span className="font-normal text-neutral-500">
                      (Opzionale)
                    </span>
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <User className="h-5 w-5 text-neutral-400" />
                    </div>
                    <input
                      type="text"
                      id="agency"
                      name="agency"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Il nome della tua agenzia..."
                      className="w-full rounded-lg border border-neutral-300 bg-white py-3 pl-10 pr-4 text-neutral-900 placeholder-neutral-400 transition-all focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:placeholder-neutral-500"
                    />
                  </div>
                </div>

                {/* Contact Type Select */}
                <div>
                  <label
                    htmlFor="contactType"
                    className="mb-2 ml-1 block text-sm font-semibold text-neutral-700 dark:text-neutral-300"
                  >
                    Preferisci essere contattato via *
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <MessageCircleMore className="h-5 w-5 text-neutral-400" />
                    </div>
                    <select
                      id="contactType"
                      name="contactType"
                      value={formData.contactType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          contactType: e.target.value,
                        })
                      }
                      className="w-full appearance-none rounded-lg border border-neutral-300 bg-white py-3 pl-10 pr-4 text-neutral-900 placeholder-neutral-400 transition-all focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:placeholder-neutral-500"
                    >
                      <option value="">Seleziona...</option>
                      <option value="whatsapp">WhatsApp</option>
                      <option value="phone">Telefono</option>
                      <option value="email">Email</option>
                    </select>

                    {/* chevron indicator */}
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                      <svg
                        className="h-4 w-4 text-neutral-400"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 7l4 4 4-4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Dynamic Contact Field - Appears after contactType selection */}
                {formData.contactType && (
                  <div
                    className="duration-150 animate-in fade-in slide-in-from-top-2"
                    style={{
                      animationFillMode: 'both',
                    }}
                  >
                    <label
                      htmlFor={formData.contactType}
                      className="mb-2 ml-1 block text-sm font-semibold text-neutral-700 dark:text-neutral-300"
                    >
                      {formData.contactType === 'whatsapp' && 'WhatsApp *'}
                      {formData.contactType === 'phone' && 'Telefono *'}
                      {formData.contactType === 'email' && 'Email *'}
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        {getContactIcon()}
                      </div>
                      {getContactInputField()}
                    </div>
                  </div>
                )}
              </div>

              {/* Task Field - Full width */}
              <div>
                <label
                  htmlFor="task"
                  className="mb-2 ml-1 block text-sm font-semibold text-neutral-700 dark:text-neutral-300"
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
                  placeholder="Es.: Inserimento dati nei fogli Excel, invio messaggi di follow-up, aggiornamento CRM..."
                  className="min-h-32 w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 placeholder-neutral-400 transition-all focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:placeholder-neutral-500"
                />
                {/* <p className="ml-1 mt-2 text-xs text-neutral-500 dark:text-neutral-400">
                  Aiutami a capire meglio le tue esigenze per darti suggerimenti
                  più mirati
                </p> */}
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
                    {/* <Sparkles className="h-5 w-5" /> */}
                    Invia Richiesta
                    <ArrowRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                  </>
                )}
              </button>

              {/* Trust indicators below button */}
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-2 text-xs text-neutral-500 dark:text-neutral-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success-500" />
                  <span>100% gratuito</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success-500" />
                  <span>15 minuti</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-success-500" />
                  <span>Analisi personalizzata</span>
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
    <section className="relative overflow-hidden px-2 py-8 md:py-12">
      {/* Subtle glow */}
      {/* <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/5 blur-[120px]" /> */}

      <div className="container relative z-10 mx-auto max-w-3xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="bg-accent/10 text-accent-foreground mb-4 inline-block rounded-full px-3 py-1 text-sm font-semibold uppercase tracking-wider">
            Profilo
          </span>
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
                  className="h-full w-full object-cover transition-transform duration-500"
                />
              </div>
              {/* Waving hand emoji */}
              {/* <div className="absolute -right-2 bottom-2 text-3xl sm:text-4xl">
                👋
              </div> */}
            </div>

            {/* Name & Title */}
            <h3 className="mb-2 text-2xl font-bold text-neutral-900 dark:text-neutral-50">
              Emiliano Mastragostino
            </h3>
            <p className="mb-6 text-base font-medium text-primary-600 dark:text-primary-400">
              Sviluppatore Software & Esperto Automazioni
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
        {/* <div className="mt-12 grid gap-6 sm:grid-cols-3">
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
        </div> */}
      </div>
    </section>
  );
}

/* ============================================================================
   PROCESS SECTION
   ============================================================================ */
function ProcessSection() {
  const steps = [
    {
      number: '1',
      title: 'Conferma via email',
      description: 'Ricevi immediatamente una conferma della tua richiesta',
      icon: Mail,
    },
    {
      number: '2',
      title: 'Ti ricontatto entro 24h',
      description: 'Fissiamo insieme il momento migliore per il Mini-Audit',
      icon: Clock,
    },
    {
      number: '3',
      title: '15 minuti di analisi',
      description:
        'Una breve chiamata per capire i tuoi processi e identificare opportunità',
      icon: MessageSquare,
    },
    {
      number: '4',
      title: 'Riepilogo personalizzato',
      description:
        'Ricevi un documento con i punti chiave e i suggerimenti pratici',
      icon: FileText,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-neutral-50 px-4 py-8 dark:bg-neutral-900/50 md:py-12">
      <div className="container relative z-10 mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="bg-accent/10 text-accent-foreground mb-4 inline-block rounded-full px-3 py-1 text-sm font-semibold uppercase tracking-wider">
            COSA ASPETTARSI
          </span>
          <h2 className="mb-4 text-3xl font-bold text-neutral-900 dark:text-neutral-50 sm:text-4xl">
            Dopo aver inviato la richiesta
          </h2>
          {/* <p className="mx-auto max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
            Un processo semplice e veloce per ottenere il massimo valore
          </p> */}
        </div>

        {/* Steps Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900"
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-violet-50/30 dark:from-neutral-900 dark:to-violet-950/10" />

              <div className="relative z-10">
                {/* Number Badge */}
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-purple-600 text-lg font-bold text-white shadow-md">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-violet-100 transition-transform duration-300 group-hover:scale-105 dark:bg-violet-950/30">
                  <step.icon className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                </div>

                {/* Content */}
                <h3 className="mb-2 font-bold text-neutral-900 dark:text-neutral-50">
                  {step.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {step.description}
                </p>
              </div>

              {/* Hover overlay */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-neutral-900/0 transition-colors duration-300 group-hover:bg-neutral-900/[0.01] dark:group-hover:bg-white/[0.01]" />
            </div>
          ))}
        </div>

        {/* Connection arrows for desktop */}
        {/* <div className="mt-8 hidden lg:block">
          <div className="relative">
            <div className="absolute left-[12.5%] top-0 flex w-[75%] items-center justify-between">
              {[0, 1, 2].map((i) => (
                <ArrowRight
                  key={i}
                  className="h-6 w-6 text-violet-300 dark:text-violet-700"
                />
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

/* ============================================================================
   FINAL CTA SECTION
   ============================================================================ */
function FinalCTASection() {
  const scrollToForm = () => {
    const formSection = document.getElementById('scroll-back-point');
    if (formSection) {
      formSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section className="relative overflow-hidden px-6 py-16 sm:py-20">
      {/* Subtle glow */}
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-500/5 blur-[120px]" />

      <div className="container relative z-10 mx-auto max-w-3xl">
        {/* Main CTA Card */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-neutral-900 dark:text-neutral-50 sm:text-4xl">
            Vuoi richiedere il Mini-Audit?
          </h2>
          <p className="mb-8 text-lg text-neutral-600 dark:text-neutral-400">
            Compila la form in alto: è questione di un minuto.
          </p>

          {/* CTA Button */}
          <button
            onClick={scrollToForm}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-neutral-300 bg-white px-8 py-4 font-semibold text-neutral-900 shadow-sm transition-all duration-200 hover:border-neutral-400 hover:bg-neutral-50 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-50 dark:hover:border-neutral-600 dark:hover:bg-neutral-800 sm:w-auto"
          >
            Torna alla form
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Divider */}
        <div className="mb-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
          <span className="text-sm text-neutral-400 dark:text-neutral-600">
            oppure
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
        </div>

        {/* Direct Contacts - Discrete */}
        <div className="text-center">
          <p className="mb-4 text-sm font-medium text-neutral-500 dark:text-neutral-400">
            Preferisci parlarmi direttamente?
          </p>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            {/* Phone */}
            <a
              href="tel:+39XXXXXXXXX"
              className="group inline-flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400"
            >
              <Phone className="h-4 w-4" />
              <span>+39 XXX XXX XXXX</span>
            </a>

            <span className="hidden text-neutral-300 dark:text-neutral-700 sm:inline">
              •
            </span>

            {/* Email */}
            <a
              href="mailto:info@mastragostino.dev"
              className="group inline-flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400"
            >
              <Mail className="h-4 w-4" />
              <span>info@mastragostino.dev</span>
            </a>
          </div>

          <p className="mt-4 text-xs text-neutral-400 dark:text-neutral-600">
            Rispondo personalmente a tutti i messaggi entro 24 ore
          </p>
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
    <div className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-4 py-1 shadow-sm backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:border-primary-300 hover:bg-primary-50/80 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-800/80 dark:hover:border-primary-600 dark:hover:bg-primary-950/30 md:py-2">
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-950/50 dark:text-primary-400">
        <Icon className="h-3.5 w-3.5" />
      </div>
      <span className="text-xs font-medium text-neutral-700 dark:text-neutral-200 md:text-sm">
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

/* ============================================================================
   SIMPLE HEADER
   ============================================================================ */

function SimpleHeader() {
  return (
    <header className="sticky top-0 z-[9998] w-full border-b border-neutral-200 bg-transparent backdrop-blur-lg dark:border-neutral-800">
      <div className="mx-auto flex h-12 max-w-[1536px] items-center justify-between px-4 md:px-6">
        <Link href={'/'} passHref>
          <a className="text-foreground">
            <svg
              viewBox="0 0 337 64"
              fill="none"
              className="h-8 w-auto md:h-[34px]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M68.4483 44V28.7273H71.302V31.2131H71.4909C71.8091 30.3712 72.3294 29.715 73.052 29.2443C73.7745 28.767 74.6396 28.5284 75.6471 28.5284C76.668 28.5284 77.5231 28.767 78.2125 29.2443C78.9085 29.7216 79.4222 30.3778 79.7537 31.2131H79.9128C80.2773 30.3977 80.8574 29.7481 81.6528 29.2642C82.4483 28.7737 83.3962 28.5284 84.4966 28.5284C85.882 28.5284 87.0122 28.9626 87.8872 29.831C88.7688 30.6993 89.2096 32.0085 89.2096 33.7585V44H86.2366V34.0369C86.2366 33.0028 85.9549 32.2538 85.3915 31.7898C84.828 31.3258 84.1552 31.0938 83.373 31.0938C82.4052 31.0938 81.6528 31.392 81.1159 31.9886C80.579 32.5786 80.3105 33.3376 80.3105 34.2656V44H77.3474V33.848C77.3474 33.0194 77.0889 32.3532 76.5719 31.8494C76.0548 31.3456 75.382 31.0938 74.5534 31.0938C73.9899 31.0938 73.4696 31.2429 72.9923 31.5412C72.5217 31.8329 72.1405 32.2405 71.8488 32.7642C71.5638 33.2879 71.4213 33.8944 71.4213 34.5838V44H68.4483ZM98.199 44.3381C97.2312 44.3381 96.3562 44.1591 95.574 43.8011C94.7918 43.4366 94.172 42.9096 93.7146 42.2202C93.2638 41.5308 93.0385 40.6856 93.0385 39.6847C93.0385 38.8229 93.2042 38.1136 93.5356 37.5568C93.8671 37 94.3145 36.5592 94.8779 36.2344C95.4414 35.9096 96.0711 35.6643 96.7671 35.4986C97.4632 35.3329 98.1725 35.2069 98.895 35.1207C99.8098 35.0147 100.552 34.9285 101.122 34.8622C101.692 34.7893 102.107 34.6733 102.365 34.5142C102.624 34.3551 102.753 34.0966 102.753 33.7386V33.669C102.753 32.8007 102.508 32.1278 102.017 31.6506C101.533 31.1733 100.811 30.9347 99.8495 30.9347C98.8486 30.9347 98.0598 31.1567 97.4831 31.6009C96.913 32.0384 96.5186 32.5256 96.2998 33.0625L93.5058 32.4261C93.8372 31.4981 94.3211 30.7491 94.9575 30.179C95.6005 29.6023 96.3396 29.1847 97.1748 28.9261C98.01 28.661 98.8884 28.5284 99.8098 28.5284C100.42 28.5284 101.066 28.6013 101.749 28.7472C102.438 28.8864 103.081 29.1449 103.678 29.5227C104.281 29.9006 104.775 30.4408 105.159 31.1435C105.544 31.8395 105.736 32.7443 105.736 33.858V44H102.832V41.9119H102.713C102.521 42.2964 102.233 42.6742 101.848 43.0455C101.464 43.4167 100.97 43.7249 100.367 43.9702C99.7634 44.2154 99.0408 44.3381 98.199 44.3381ZM98.8453 41.9517C99.6672 41.9517 100.37 41.7893 100.953 41.4645C101.543 41.1397 101.991 40.7154 102.296 40.1918C102.607 39.6615 102.763 39.0947 102.763 38.4915V36.5227C102.657 36.6288 102.451 36.7282 102.146 36.821C101.848 36.9072 101.507 36.9834 101.122 37.0497C100.738 37.1094 100.363 37.1657 99.9987 37.2188C99.6341 37.2652 99.3292 37.3049 99.0839 37.3381C98.5072 37.411 97.9802 37.5336 97.5029 37.706C97.0323 37.8783 96.6545 38.1269 96.3694 38.4517C96.091 38.7699 95.9518 39.1941 95.9518 39.7244C95.9518 40.4602 96.2236 41.017 96.7671 41.3949C97.3107 41.7661 98.0034 41.9517 98.8453 41.9517ZM121.7 32.456L119.006 32.9332C118.893 32.5885 118.714 32.2604 118.469 31.9489C118.23 31.6373 117.905 31.3821 117.494 31.1832C117.083 30.9844 116.57 30.8849 115.953 30.8849C115.111 30.8849 114.409 31.0739 113.845 31.4517C113.282 31.8229 113 32.3035 113 32.8935C113 33.4039 113.189 33.8149 113.567 34.1264C113.945 34.438 114.555 34.6932 115.396 34.892L117.823 35.4489C119.228 35.7737 120.275 36.2741 120.965 36.9503C121.654 37.6264 121.999 38.5047 121.999 39.5852C121.999 40.5 121.734 41.3153 121.203 42.0312C120.68 42.7405 119.947 43.2973 119.006 43.7017C118.071 44.1061 116.987 44.3082 115.754 44.3082C114.044 44.3082 112.649 43.9437 111.568 43.2145C110.488 42.4787 109.825 41.4347 109.58 40.0824L112.453 39.6449C112.632 40.3939 113 40.9607 113.557 41.3452C114.114 41.723 114.84 41.9119 115.734 41.9119C116.709 41.9119 117.488 41.7098 118.071 41.3054C118.654 40.8944 118.946 40.3939 118.946 39.804C118.946 39.3267 118.767 38.9257 118.409 38.6009C118.058 38.276 117.518 38.0308 116.788 37.8651L114.203 37.2983C112.778 36.9735 111.724 36.4564 111.041 35.7472C110.365 35.0379 110.027 34.1397 110.027 33.0526C110.027 32.151 110.279 31.3622 110.783 30.6861C111.287 30.0099 111.983 29.483 112.871 29.1051C113.759 28.7206 114.777 28.5284 115.923 28.5284C117.574 28.5284 118.873 28.8864 119.821 29.6023C120.769 30.3116 121.395 31.2628 121.7 32.456ZM132.957 28.7273V31.1136H124.614V28.7273H132.957ZM126.852 25.0682H129.825V39.5156C129.825 40.0923 129.911 40.5265 130.083 40.8182C130.256 41.1032 130.478 41.2988 130.749 41.4048C131.028 41.5043 131.329 41.554 131.654 41.554C131.893 41.554 132.102 41.5374 132.281 41.5043C132.46 41.4711 132.599 41.4446 132.698 41.4247L133.235 43.8807C133.063 43.947 132.818 44.0133 132.499 44.0795C132.181 44.1525 131.783 44.1922 131.306 44.1989C130.524 44.2121 129.795 44.0729 129.119 43.7812C128.443 43.4896 127.896 43.0388 127.478 42.429C127.06 41.8191 126.852 41.0535 126.852 40.1321V25.0682ZM136.805 44V28.7273H139.679V31.1534H139.838C140.117 30.3314 140.607 29.6851 141.31 29.2145C142.019 28.7372 142.821 28.4986 143.716 28.4986C143.902 28.4986 144.12 28.5052 144.372 28.5185C144.631 28.5317 144.833 28.5483 144.979 28.5682V31.4119C144.859 31.3788 144.647 31.3423 144.342 31.3026C144.037 31.2562 143.733 31.233 143.428 31.233C142.725 31.233 142.099 31.3821 141.548 31.6804C141.005 31.9721 140.574 32.3797 140.256 32.9034C139.938 33.4205 139.778 34.0104 139.778 34.6733V44H136.805ZM152.419 44.3381C151.452 44.3381 150.577 44.1591 149.794 43.8011C149.012 43.4366 148.392 42.9096 147.935 42.2202C147.484 41.5308 147.259 40.6856 147.259 39.6847C147.259 38.8229 147.425 38.1136 147.756 37.5568C148.088 37 148.535 36.5592 149.098 36.2344C149.662 35.9096 150.292 35.6643 150.988 35.4986C151.684 35.3329 152.393 35.2069 153.115 35.1207C154.03 35.0147 154.773 34.9285 155.343 34.8622C155.913 34.7893 156.327 34.6733 156.586 34.5142C156.844 34.3551 156.973 34.0966 156.973 33.7386V33.669C156.973 32.8007 156.728 32.1278 156.238 31.6506C155.754 31.1733 155.031 30.9347 154.07 30.9347C153.069 30.9347 152.28 31.1567 151.704 31.6009C151.133 32.0384 150.739 32.5256 150.52 33.0625L147.726 32.4261C148.058 31.4981 148.542 30.7491 149.178 30.179C149.821 29.6023 150.56 29.1847 151.395 28.9261C152.231 28.661 153.109 28.5284 154.03 28.5284C154.64 28.5284 155.286 28.6013 155.969 28.7472C156.659 28.8864 157.302 29.1449 157.898 29.5227C158.501 29.9006 158.995 30.4408 159.38 31.1435C159.764 31.8395 159.956 32.7443 159.956 33.858V44H157.053V41.9119H156.934C156.741 42.2964 156.453 42.6742 156.069 43.0455C155.684 43.4167 155.19 43.7249 154.587 43.9702C153.984 44.2154 153.261 44.3381 152.419 44.3381ZM153.066 41.9517C153.888 41.9517 154.59 41.7893 155.174 41.4645C155.764 41.1397 156.211 40.7154 156.516 40.1918C156.828 39.6615 156.983 39.0947 156.983 38.4915V36.5227C156.877 36.6288 156.672 36.7282 156.367 36.821C156.069 36.9072 155.727 36.9834 155.343 37.0497C154.958 37.1094 154.584 37.1657 154.219 37.2188C153.855 37.2652 153.55 37.3049 153.304 37.3381C152.728 37.411 152.201 37.5336 151.723 37.706C151.253 37.8783 150.875 38.1269 150.59 38.4517C150.311 38.7699 150.172 39.1941 150.172 39.7244C150.172 40.4602 150.444 41.017 150.988 41.3949C151.531 41.7661 152.224 41.9517 153.066 41.9517ZM170.88 50.0455C169.667 50.0455 168.623 49.8864 167.748 49.5682C166.879 49.25 166.17 48.8291 165.62 48.3054C165.07 47.7817 164.659 47.2083 164.387 46.5852L166.942 45.5312C167.121 45.8229 167.36 46.1312 167.658 46.456C167.963 46.7874 168.374 47.0691 168.891 47.3011C169.415 47.5331 170.088 47.6491 170.909 47.6491C172.036 47.6491 172.968 47.3741 173.704 46.8239C174.439 46.2803 174.807 45.4119 174.807 44.2188V41.2159H174.618C174.439 41.5407 174.181 41.902 173.843 42.2997C173.511 42.6974 173.054 43.0421 172.471 43.3338C171.887 43.6255 171.128 43.7713 170.194 43.7713C168.987 43.7713 167.9 43.4896 166.932 42.9261C165.971 42.3561 165.209 41.5175 164.645 40.4105C164.088 39.2969 163.81 37.928 163.81 36.304C163.81 34.6799 164.085 33.2879 164.635 32.1278C165.192 30.9678 165.954 30.0795 166.922 29.4631C167.89 28.84 168.987 28.5284 170.213 28.5284C171.161 28.5284 171.927 28.6875 172.51 29.0057C173.094 29.3172 173.548 29.6818 173.873 30.0994C174.204 30.517 174.459 30.8849 174.638 31.2031H174.857V28.7273H177.77V44.3381C177.77 45.6506 177.465 46.7277 176.856 47.5696C176.246 48.4115 175.42 49.0346 174.38 49.4389C173.346 49.8433 172.179 50.0455 170.88 50.0455ZM170.85 41.3054C171.705 41.3054 172.427 41.1065 173.017 40.7088C173.614 40.3045 174.065 39.7277 174.37 38.9787C174.681 38.223 174.837 37.3182 174.837 36.2642C174.837 35.2367 174.685 34.3319 174.38 33.5497C174.075 32.7675 173.627 32.1577 173.037 31.7202C172.447 31.276 171.718 31.054 170.85 31.054C169.955 31.054 169.209 31.286 168.613 31.75C168.016 32.2074 167.565 32.8305 167.26 33.6193C166.962 34.4081 166.813 35.2898 166.813 36.2642C166.813 37.2652 166.965 38.1435 167.27 38.8991C167.575 39.6548 168.026 40.2448 168.623 40.669C169.226 41.0933 169.968 41.3054 170.85 41.3054ZM188.751 44.3082C187.319 44.3082 186.069 43.9801 185.002 43.3239C183.935 42.6676 183.106 41.7495 182.516 40.5696C181.926 39.3897 181.631 38.0109 181.631 36.4332C181.631 34.849 181.926 33.4635 182.516 32.277C183.106 31.0904 183.935 30.169 185.002 29.5128C186.069 28.8565 187.319 28.5284 188.751 28.5284C190.183 28.5284 191.432 28.8565 192.499 29.5128C193.567 30.169 194.395 31.0904 194.985 32.277C195.575 33.4635 195.87 34.849 195.87 36.4332C195.87 38.0109 195.575 39.3897 194.985 40.5696C194.395 41.7495 193.567 42.6676 192.499 43.3239C191.432 43.9801 190.183 44.3082 188.751 44.3082ZM188.761 41.8125C189.689 41.8125 190.458 41.5672 191.067 41.0767C191.677 40.5862 192.128 39.9332 192.42 39.1179C192.718 38.3026 192.867 37.4044 192.867 36.4233C192.867 35.4489 192.718 34.554 192.42 33.7386C192.128 32.9167 191.677 32.2571 191.067 31.7599C190.458 31.2628 189.689 31.0142 188.761 31.0142C187.826 31.0142 187.05 31.2628 186.434 31.7599C185.824 32.2571 185.37 32.9167 185.072 33.7386C184.78 34.554 184.634 35.4489 184.634 36.4233C184.634 37.4044 184.78 38.3026 185.072 39.1179C185.37 39.9332 185.824 40.5862 186.434 41.0767C187.05 41.5672 187.826 41.8125 188.761 41.8125ZM211.193 32.456L208.499 32.9332C208.386 32.5885 208.207 32.2604 207.962 31.9489C207.723 31.6373 207.398 31.3821 206.987 31.1832C206.576 30.9844 206.063 30.8849 205.446 30.8849C204.604 30.8849 203.902 31.0739 203.338 31.4517C202.775 31.8229 202.493 32.3035 202.493 32.8935C202.493 33.4039 202.682 33.8149 203.06 34.1264C203.438 34.438 204.047 34.6932 204.889 34.892L207.315 35.4489C208.721 35.7737 209.768 36.2741 210.457 36.9503C211.147 37.6264 211.491 38.5047 211.491 39.5852C211.491 40.5 211.226 41.3153 210.696 42.0312C210.172 42.7405 209.44 43.2973 208.499 43.7017C207.564 44.1061 206.48 44.3082 205.247 44.3082C203.537 44.3082 202.142 43.9437 201.061 43.2145C199.981 42.4787 199.318 41.4347 199.072 40.0824L201.946 39.6449C202.125 40.3939 202.493 40.9607 203.05 41.3452C203.607 41.723 204.332 41.9119 205.227 41.9119C206.202 41.9119 206.981 41.7098 207.564 41.3054C208.147 40.8944 208.439 40.3939 208.439 39.804C208.439 39.3267 208.26 38.9257 207.902 38.6009C207.551 38.276 207.01 38.0308 206.281 37.8651L203.696 37.2983C202.271 36.9735 201.217 36.4564 200.534 35.7472C199.858 35.0379 199.52 34.1397 199.52 33.0526C199.52 32.151 199.772 31.3622 200.276 30.6861C200.779 30.0099 201.475 29.483 202.364 29.1051C203.252 28.7206 204.269 28.5284 205.416 28.5284C207.067 28.5284 208.366 28.8864 209.314 29.6023C210.262 30.3116 210.888 31.2628 211.193 32.456ZM222.45 28.7273V31.1136H214.107V28.7273H222.45ZM216.344 25.0682H219.317V39.5156C219.317 40.0923 219.404 40.5265 219.576 40.8182C219.748 41.1032 219.97 41.2988 220.242 41.4048C220.521 41.5043 220.822 41.554 221.147 41.554C221.386 41.554 221.594 41.5374 221.773 41.5043C221.952 41.4711 222.092 41.4446 222.191 41.4247L222.728 43.8807C222.556 43.947 222.31 44.0133 221.992 44.0795C221.674 44.1525 221.276 44.1922 220.799 44.1989C220.017 44.2121 219.288 44.0729 218.611 43.7812C217.935 43.4896 217.388 43.0388 216.971 42.429C216.553 41.8191 216.344 41.0535 216.344 40.1321V25.0682ZM226.298 44V28.7273H229.271V44H226.298ZM227.8 26.3707C227.283 26.3707 226.839 26.1984 226.467 25.8537C226.103 25.5024 225.92 25.0848 225.92 24.6009C225.92 24.1103 226.103 23.6927 226.467 23.348C226.839 22.9967 227.283 22.821 227.8 22.821C228.317 22.821 228.758 22.9967 229.122 23.348C229.493 23.6927 229.679 24.1103 229.679 24.6009C229.679 25.0848 229.493 25.5024 229.122 25.8537C228.758 26.1984 228.317 26.3707 227.8 26.3707ZM236.804 34.9318V44H233.831V28.7273H236.685V31.2131H236.874C237.225 30.4044 237.775 29.7547 238.524 29.2642C239.28 28.7737 240.231 28.5284 241.378 28.5284C242.419 28.5284 243.33 28.7472 244.112 29.1847C244.894 29.6155 245.501 30.2585 245.932 31.1136C246.363 31.9687 246.578 33.026 246.578 34.2855V44H243.605V34.6435C243.605 33.5365 243.317 32.6714 242.74 32.0483C242.163 31.4186 241.371 31.1037 240.364 31.1037C239.674 31.1037 239.061 31.2528 238.524 31.5511C237.994 31.8494 237.573 32.2869 237.261 32.8636C236.956 33.4337 236.804 34.1231 236.804 34.9318ZM257.559 44.3082C256.127 44.3082 254.877 43.9801 253.81 43.3239C252.743 42.6676 251.914 41.7495 251.324 40.5696C250.734 39.3897 250.439 38.0109 250.439 36.4332C250.439 34.849 250.734 33.4635 251.324 32.277C251.914 31.0904 252.743 30.169 253.81 29.5128C254.877 28.8565 256.127 28.5284 257.559 28.5284C258.99 28.5284 260.24 28.8565 261.307 29.5128C262.374 30.169 263.203 31.0904 263.793 32.277C264.383 33.4635 264.678 34.849 264.678 36.4332C264.678 38.0109 264.383 39.3897 263.793 40.5696C263.203 41.7495 262.374 42.6676 261.307 43.3239C260.24 43.9801 258.99 44.3082 257.559 44.3082ZM257.568 41.8125C258.497 41.8125 259.265 41.5672 259.875 41.0767C260.485 40.5862 260.936 39.9332 261.228 39.1179C261.526 38.3026 261.675 37.4044 261.675 36.4233C261.675 35.4489 261.526 34.554 261.228 33.7386C260.936 32.9167 260.485 32.2571 259.875 31.7599C259.265 31.2628 258.497 31.0142 257.568 31.0142C256.634 31.0142 255.858 31.2628 255.242 31.7599C254.632 32.2571 254.178 32.9167 253.88 33.7386C253.588 34.554 253.442 35.4489 253.442 36.4233C253.442 37.4044 253.588 38.3026 253.88 39.1179C254.178 39.9332 254.632 40.5862 255.242 41.0767C255.858 41.5672 256.634 41.8125 257.568 41.8125ZM270.515 44.1889C269.972 44.1889 269.504 43.9967 269.113 43.6122C268.722 43.2211 268.527 42.7505 268.527 42.2003C268.527 41.6567 268.722 41.1927 269.113 40.8082C269.504 40.4171 269.972 40.2216 270.515 40.2216C271.059 40.2216 271.526 40.4171 271.917 40.8082C272.308 41.1927 272.504 41.6567 272.504 42.2003C272.504 42.5649 272.411 42.8996 272.225 43.2045C272.046 43.5028 271.808 43.7415 271.51 43.9205C271.211 44.0994 270.88 44.1889 270.515 44.1889ZM282.763 44.2983C281.53 44.2983 280.43 43.9834 279.462 43.3537C278.501 42.7173 277.745 41.8125 277.195 40.6392C276.652 39.4593 276.38 38.044 276.38 36.3935C276.38 34.7429 276.655 33.331 277.205 32.1577C277.762 30.9844 278.524 30.0862 279.492 29.4631C280.46 28.84 281.557 28.5284 282.783 28.5284C283.731 28.5284 284.494 28.6875 285.07 29.0057C285.654 29.3172 286.104 29.6818 286.423 30.0994C286.747 30.517 286.999 30.8849 287.178 31.2031H287.357V23.6364H290.33V44H287.427V41.6236H287.178C286.999 41.9484 286.741 42.3196 286.403 42.7372C286.071 43.1548 285.614 43.5194 285.03 43.831C284.447 44.1425 283.691 44.2983 282.763 44.2983ZM283.42 41.7628C284.275 41.7628 284.997 41.5374 285.587 41.0866C286.184 40.6293 286.635 39.9962 286.94 39.1875C287.251 38.3788 287.407 37.4375 287.407 36.3636C287.407 35.303 287.254 34.375 286.949 33.5795C286.645 32.7841 286.197 32.1643 285.607 31.7202C285.017 31.276 284.288 31.054 283.42 31.054C282.525 31.054 281.779 31.286 281.182 31.75C280.586 32.214 280.135 32.8471 279.83 33.6491C279.532 34.4512 279.383 35.3561 279.383 36.3636C279.383 37.3845 279.535 38.3026 279.84 39.1179C280.145 39.9332 280.596 40.5795 281.192 41.0568C281.796 41.5275 282.538 41.7628 283.42 41.7628ZM301.716 44.3082C300.211 44.3082 298.915 43.9867 297.828 43.3438C296.748 42.6941 295.912 41.7827 295.322 40.6094C294.739 39.4295 294.447 38.0473 294.447 36.4631C294.447 34.8987 294.739 33.5199 295.322 32.3267C295.912 31.1335 296.734 30.2022 297.788 29.5327C298.849 28.8632 300.088 28.5284 301.507 28.5284C302.369 28.5284 303.204 28.6709 304.013 28.956C304.821 29.241 305.547 29.6884 306.19 30.2983C306.833 30.9081 307.34 31.7003 307.712 32.6747C308.083 33.6425 308.268 34.8191 308.268 36.2045V37.2585H296.128V35.0312H305.355C305.355 34.2491 305.196 33.5563 304.878 32.9531C304.56 32.3433 304.112 31.8627 303.535 31.5114C302.965 31.16 302.296 30.9844 301.527 30.9844C300.692 30.9844 299.962 31.1899 299.339 31.6009C298.723 32.0052 298.246 32.5355 297.908 33.1918C297.576 33.8414 297.41 34.5473 297.41 35.3097V37.0497C297.41 38.0705 297.589 38.9389 297.947 39.6548C298.312 40.3707 298.819 40.9176 299.469 41.2955C300.118 41.6667 300.877 41.8523 301.746 41.8523C302.309 41.8523 302.823 41.7727 303.287 41.6136C303.751 41.4479 304.152 41.2027 304.49 40.8778C304.828 40.553 305.087 40.152 305.266 39.6747L308.079 40.1818C307.854 41.0104 307.45 41.7363 306.866 42.3594C306.29 42.9759 305.564 43.4564 304.689 43.8011C303.82 44.1392 302.829 44.3082 301.716 44.3082ZM324.755 28.7273L319.217 44H316.035L310.486 28.7273H313.678L317.546 40.4801H317.705L321.563 28.7273H324.755Z"
                fill="currentColor"
              />
              <path
                d="M21 16H15C13.3431 16 12 17.2088 12 18.7V49.3C12 50.7912 13.3431 52 15 52H21C22.6569 52 24 50.7912 24 49.3V18.7C24 17.2088 22.6569 16 21 16Z"
                fill="currentColor"
              />
              <path
                d="M37 12H31C29.3431 12 28 13.221 28 14.7273V49.2727C28 50.779 29.3431 52 31 52H37C38.6569 52 40 50.779 40 49.2727V14.7273C40 13.221 38.6569 12 37 12Z"
                fill="currentColor"
              />
              <path
                d="M53 16H47C45.3431 16 44 17.2088 44 18.7V49.3C44 50.7912 45.3431 52 47 52H53C54.6569 52 56 50.7912 56 49.3V18.7C56 17.2088 54.6569 16 53 16Z"
                fill="currentColor"
              />
            </svg>
          </a>
        </Link>
      </div>
    </header>
  );
}
