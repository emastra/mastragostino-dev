'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Meta from '~/components/Meta';
import LayoutContainer from '~/components/LayoutContainer';
import {
  Mail,
  Send,
  MessageSquare,
  Clock,
  Calendar,
  MapPin,
  Linkedin,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Shield,
  Zap,
} from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <>
      <Meta
        title="Contact"
        description="Get in touch for automation solutions tailored to your business needs."
      />
      <ContactHero />
      <LayoutContainer>
        <MainContactSection />
        <ConsultationBanner />
        <ReassuranceSection />
      </LayoutContainer>
    </>
  );
};

export default ContactPage;

/* ============================================================================
   HERO SECTION
   ============================================================================ */
function ContactHero() {
  return (
    <section className="relative overflow-hidden pb-12 pt-8 md:pb-24 md:pt-16">
      {/* Grid Background - matching HeroSection style */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(to right, #4f4f4f22 1px, transparent 1px), linear-gradient(to bottom, #4f4f4f22 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage:
            'radial-gradient(ellipse 65% 65% at 50% 50%, #000 0%, transparent 80%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 65% 65% at 50% 50%, #000 0%, transparent 80%)',
        }}
      />

      {/* Glow Effect */}
      {/* <div className="absolute left-1/2 top-1/3 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-primary-500/20 blur-[120px]" /> */}

      <div className="container relative z-10 mx-auto max-w-4xl text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-500/20 bg-primary-500/10 px-4 py-2 text-sm font-semibold text-primary-600 backdrop-blur-sm dark:text-primary-100">
          <MessageSquare className="h-4 w-4" />
          Contatti
        </div>

        <h1 className="mb-6 text-3xl font-bold text-neutral-900 dark:text-neutral-50 md:text-4xl">
          Scrivimi quando vuoi
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-neutral-600 dark:text-neutral-400 md:text-xl">
          {
            "Hai dubbi, domande o vuoi capire se l'automazione può aiutare la tua attività? Compila il form o invia un messaggio: rispondo sempre entro 24 ore."
          }
        </p>
      </div>
    </section>
  );
}

/* ============================================================================
   MAIN CONTACT SECTION
   ============================================================================ */
function MainContactSection() {
  return (
    <section className="relative pb-12 md:pb-24">
      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          {/* Left: Contact Form */}
          <ContactForm />

          {/* Right: Contact Information */}
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
   CONTACT FORM
   ============================================================================ */
function ContactForm() {
  const [formState, setFormState] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle');
  const [topic, setTopic] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('sending');

    try {
      const form = e.currentTarget;
      const fd = new FormData(form);
      const payload = {
        name: (fd.get('name') as string) || '',
        email: (fd.get('email') as string) || '',
        topic: (fd.get('topic') as string) || '',
        message: (fd.get('message') as string) || '',
      };

      const res = await fetch('/api/contact-form-submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        // optionally read server error message
        const err = await res.json();
        console.error('Contact submission failed:', err.message || err.status);
        setFormState('error');
        return;
      }

      setFormState('success');
      form.reset();
      // return to idle after a short delay if desired
      // setTimeout(() => setFormState('idle'), 6000);
    } catch (error) {
      console.error('Contact submission error:', error);
      setFormState('error');
    }
  };

  const topics = [
    'Informazioni Generali',
    'Informazioni su Call di Analisi',
    'Preventivo Automazione',
    'Integrazione AI',
    'Supporto Tecnico',
    'Altro',
  ];

  if (formState === 'success') {
    return <SuccessMessage goBack={() => setFormState('idle')} />;
  }

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-primary-50/30 to-white dark:from-neutral-900 dark:via-primary-950/10 dark:to-neutral-900" />

      <div className="relative z-10 p-8">
        <>
          <div className="mb-8">
            <h2 className="mb-2 text-2xl font-bold text-neutral-900 dark:text-neutral-50">
              Invia un Messaggio
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400">
              Compila il form e ti risponderò al più presto. Tutti i campi sono
              obbligatori.
            </p>
          </div>

          {formState === 'error' && (
            <ErrorBanner
              onClose={() => {
                setFormState('idle');
              }}
            />
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-neutral-700 dark:text-neutral-300"
              >
                Nome Completo *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Mario Rossi"
                className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 placeholder-neutral-400 transition-all focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:placeholder-neutral-500"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-neutral-700 dark:text-neutral-300"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="mario@example.com"
                className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 placeholder-neutral-400 transition-all focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:placeholder-neutral-500"
              />
            </div>

            {/* Topic Select (Optional) */}
            <div>
              <label
                htmlFor="topic"
                className="mb-2 block text-sm font-semibold text-neutral-700 dark:text-neutral-300"
              >
                Argomento{' '}
                <span className="font-normal text-neutral-500">
                  (Opzionale)
                </span>
              </label>
              <select
                id="topic"
                name="topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 transition-all focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
              >
                <option value="">Seleziona un argomento...</option>
                {topics.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold text-neutral-700 dark:text-neutral-300"
              >
                Messaggio *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Descrivi brevemente il tuo progetto, le tue esigenze, o le domande che hai..."
                className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 placeholder-neutral-400 transition-all focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:placeholder-neutral-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={formState === 'sending'}
              className="group flex w-full items-center justify-center gap-2 rounded-lg bg-primary-600 px-6 py-3.5 font-semibold text-white shadow-md transition-all hover:bg-primary-700 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 dark:bg-primary-500 dark:hover:bg-primary-600"
            >
              {formState === 'sending' ? (
                <>
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  Invio in corso...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Invia Messaggio
                </>
              )}
            </button>
          </form>
        </>
      </div>

      {/* Hover overlay */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-neutral-900/0 transition-colors duration-300 group-hover:bg-neutral-900/[0.01] dark:group-hover:bg-white/[0.01]" />
    </div>
  );
}

/* ============================================================================
   CONTACT INFO
   ============================================================================ */
function ContactInfo() {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'emiliano@mastragostino.dev',
      href: null, // No link. Alternativa: 'mailto:contact@example.com'
      description: 'Risposta entro 24 ore',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'emiliano-mastragostino',
      href: 'https://www.linkedin.com/in/emiliano-mastragostino/',
      description: 'Connettiti professionalmente',
    },
    {
      icon: MapPin,
      label: 'Posizione',
      value: 'Roma, Italia',
      href: null,
      description: 'Disponibile per meeting remoti',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Contact Details Card */}
      <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <h3 className="mb-6 text-xl font-bold text-neutral-900 dark:text-neutral-50">
          Informazioni di Contatto
        </h3>

        <div className="space-y-5">
          {contactMethods.map((method) => (
            <ContactMethod key={method.label} {...method} />
          ))}
        </div>
      </div>

      {/* Office Hours Card */}
      <div className="rounded-2xl border border-neutral-200 bg-gradient-to-br from-neutral-50 to-white p-6 dark:border-neutral-800 dark:from-neutral-900 dark:to-neutral-900/50">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-950/30">
            <Clock className="h-5 w-5 text-primary-600 dark:text-primary-400" />
          </div>
          <h4 className="font-bold text-neutral-900 dark:text-neutral-50">
            Orari di Risposta
          </h4>
        </div>
        <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
          <li className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-success-500" />
            Lun-Ven: 9:00 - 18:00
          </li>
          <li className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-neutral-400" />
            Sabato: Su appuntamento
          </li>
          <li className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-neutral-400" />
            Domenica: Chiuso
          </li>
        </ul>
        <div className="mt-4 rounded-lg bg-success-50 p-3 dark:bg-success-950/20">
          <div className="flex items-center gap-2 text-xs font-medium text-success-700 dark:text-success-400">
            <div className="flex h-2 w-2">
              <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-success-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success-500"></span>
            </div>
            Rispondo tipicamente entro 1 giorno lavorativo
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-3">
        <StatCard icon={Zap} value="<24h" label="Tempo Risposta" />
        <StatCard icon={Shield} value="100%" label="Privacy Garantita" />
      </div>
    </div>
  );
}

/* ============================================================================
   HELPER COMPONENTS
   ============================================================================ */

interface ContactMethodProps {
  icon: React.ElementType;
  label: string;
  value: string;
  href: string | null;
  description: string;
}

function ContactMethod({
  icon: Icon,
  label,
  value,
  href,
  description,
}: ContactMethodProps) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary-100 dark:bg-primary-950/30">
        <Icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-500">
          {label}
        </div>
        <div className="mb-1 break-words text-sm font-semibold text-neutral-900 dark:text-neutral-50 sm:text-base">
          {value}
        </div>
        <div className="text-xs text-neutral-600 dark:text-neutral-400">
          {description}
        </div>
      </div>
    </div>
  );

  if (href) {
    const isLinkInternal = !href.startsWith('http');

    if (isLinkInternal) {
      return (
        <Link href={href} passHref>
          <a className="block rounded-lg p-2 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-800/50">
            {content}
          </a>
        </Link>
      );
    }

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-lg p-2 transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
      >
        {content}
      </a>
    );
  }

  return <div className="p-2">{content}</div>;
}

function StatCard({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ElementType;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-white p-4 text-center shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
      <Icon className="mx-auto mb-2 h-6 w-6 text-primary-600 dark:text-primary-400" />
      <div className="mb-1 text-2xl font-bold text-neutral-900 dark:text-neutral-50">
        {value}
      </div>
      <div className="text-xs text-neutral-600 dark:text-neutral-400">
        {label}
      </div>
    </div>
  );
}

/* ============================================================================
   CONSULTATION BANNER
   ============================================================================ */
function ConsultationBanner() {
  return (
    <section className="relative overflow-hidden py-12 md:py-24">
      {/* Background glow */}
      {/* <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-500/10 blur-[120px]" /> */}

      <div className="container relative z-10 mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-2xl border-2 border-accent-200 bg-white shadow-lg dark:border-accent-900/50 dark:bg-neutral-900">
          {/* Top accent bar */}
          <div className="h-1 bg-gradient-to-r from-accent-500 via-primary-500 to-violet-500" />

          <div className="relative p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-[auto_1fr_auto] md:items-center">
              {/* Icon */}
              <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 shadow-lg">
                <Calendar className="h-10 w-10 text-white" />
              </div>

              {/* Content */}
              <div>
                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-accent-500/20 bg-accent-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-700 backdrop-blur-sm dark:border-accent-400/20 dark:bg-accent-400/10 dark:text-accent-300">
                  <CheckCircle className="h-3 w-3" />
                  100% GRATUITO
                </div>
                <h3 className="mb-3 text-2xl font-bold text-neutral-900 dark:text-neutral-50 md:text-3xl">
                  Preferisci parlarne a voce?
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Prenota un incontro gratuito di 30 minuti. Analizziamo insieme
                  i tuoi processi e individuiamo le opportunità di automazione
                  più utili per te.
                </p>
              </div>

              {/* CTA */}
              <Link href="/booking" passHref>
                <a className="group flex flex-shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-lg bg-accent-600 px-8 py-4 text-center font-semibold text-white shadow-lg transition-all duration-100 hover:bg-accent-700 hover:shadow-xl dark:bg-accent-500 dark:hover:bg-accent-600">
                  Prenota Ora
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
   REASSURANCE SECTION
   ============================================================================ */
function ReassuranceSection() {
  const faqs = [
    {
      icon: Clock,
      question: 'Quanto tempo ci vuole per ricevere una risposta?',
      answer:
        'Rispondo a tutti i messaggi entro 24 ore nei giorni lavorativi. Spesso anche prima!',
    },
    {
      icon: Shield,
      question: 'Le mie informazioni sono al sicuro?',
      answer:
        'Assolutamente sì. Non condivido mai i dati dei clienti e rispetto la massima riservatezza.',
    },
    {
      icon: Zap,
      question: 'Devo prenotare un incontro subito?',
      answer:
        "No, puoi prima scrivermi per fare domande. L'incontro è solo per quando sei pronto.",
    },
  ];

  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <span className="bg-accent/10 text-accent-foreground mb-4 inline-block rounded-full px-3 py-1 text-sm font-semibold uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="mb-4 text-3xl font-bold text-neutral-900 dark:text-neutral-50">
            Domande Frequenti
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            Risposte rapide alle domande più comuni
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900"
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white to-primary-50/30 dark:from-neutral-900 dark:to-primary-950/10" />

              <div className="relative z-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 transition-transform duration-300 group-hover:scale-105 dark:bg-primary-950/30">
                  <faq.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="mb-3 font-bold text-neutral-900 dark:text-neutral-50">
                  {faq.question}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {faq.answer}
                </p>
              </div>

              {/* Hover overlay */}
              <div className="pointer-events-none absolute inset-0 rounded-xl bg-neutral-900/0 transition-colors duration-300 group-hover:bg-neutral-900/[0.01] dark:group-hover:bg-white/[0.01]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
   SUCCESS MESSAGE
   ============================================================================ */
function SuccessMessage({ goBack }: { goBack: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-success-100 dark:bg-success-950/30">
        <CheckCircle className="h-10 w-10 text-success-600 dark:text-success-400" />
      </div>
      <h3 className="mb-4 text-3xl font-bold text-neutral-900 dark:text-neutral-50">
        Messaggio Inviato con Successo!
      </h3>
      <p className="mb-8 max-w-md text-lg text-neutral-600 dark:text-neutral-400">
        Grazie per avermi contattato. Ho ricevuto il tuo messaggio e ti
        risponderò entro 24 ore.
      </p>

      <button
        onClick={goBack}
        className="text-sm font-semibold text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
      >
        ← Invia un altro messaggio
      </button>
    </div>
  );
}

/* ============================================================================
   ERROR BANNER
   ============================================================================ */
function ErrorBanner({ onClose }: { onClose: () => void }) {
  return (
    <div
      role="alert"
      className="mb-4 flex items-start justify-between gap-3 rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
    >
      <div className="flex items-start gap-3">
        <svg
          className="h-5 w-5 flex-shrink-0 text-red-600"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M11.001 7h2v6h-2V7zm0 8h2v2h-2v-2z" fill="currentColor" />
        </svg>
        <div>
          <p className="font-semibold">{"Errore nell'invio"}</p>
          <p className="text-xs text-red-700">
            {
              "Si è verificato un errore durante l'invio. Se il problema persiste scrivi a emiliano@mastragostino.dev"
            }
          </p>
        </div>
      </div>
      <button
        type="button"
        aria-label="Chiudi"
        onClick={onClose}
        className="ml-4 rounded px-1 text-red-600 hover:text-red-800"
      >
        x
      </button>
    </div>
  );
}
