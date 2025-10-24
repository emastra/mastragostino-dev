'use client';
import React, { useState } from 'react';
import {
  Mail,
  Send,
  MessageSquare,
  Clock,
  Calendar,
  MapPin,
  Linkedin,
  CheckCircle2,
  ArrowRight,
  Phone,
  Globe,
  Zap,
  Shield,
  Sparkles,
} from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="dark:bg-neutral-950 min-h-screen bg-white">
      {/* Hero Section */}
      <ContactHero />

      {/* Main Contact Section */}
      <section className="relative py-16">
        {/* Decorative background */}
        <div className="absolute top-20 left-1/4 h-96 w-96 rounded-full bg-primary-500/5 blur-3xl" />
        <div className="absolute bottom-20 right-1/4 h-96 w-96 rounded-full bg-accent-500/5 blur-3xl" />

        <div className="container relative z-10 mx-auto max-w-7xl px-4">
          <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
            {/* Left: Contact Form */}
            <ContactForm />

            {/* Right: Contact Information */}
            <ContactInfo />
          </div>
        </div>
      </section>

      {/* Free Consultation CTA Banner */}
      <ConsultationBanner />

      {/* Reassurance Section */}
      <ReassuranceSection />
    </div>
  );
};

export default ContactPage;

/* ============================================================================
   HERO SECTION
   ============================================================================ */
function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-neutral-50 to-neutral-100 py-20 dark:from-neutral-900 dark:to-neutral-800">
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary-500/10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent-500/10 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-4xl px-4 text-center">
        <div className="dark:bg-primary-950/30 mb-6 inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-700 dark:border-primary-900/50 dark:text-primary-300">
          <MessageSquare className="h-4 w-4" />
          Siamo Qui per Te
        </div>

        <h1 className="mb-6 text-4xl font-bold text-neutral-900 dark:text-neutral-50 sm:text-5xl md:text-6xl">
          Parliamo del Tuo{' '}
          <span className="bg-gradient-to-r from-primary-600 via-accent-500 to-primary-500 bg-clip-text text-transparent">
            Progetto
          </span>
        </h1>

        <p className="mx-auto max-w-2xl text-lg text-neutral-600 dark:text-neutral-400 md:text-xl">
          Hai domande sull'automazione? Vuoi capire se posso aiutarti?
          Contattami in qualsiasi modo preferisci — rispondo sempre entro 24
          ore.
        </p>
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

    // Simulate submission
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 4000);
    }, 1500);
  };

  const topics = [
    'Informazioni Generali',
    'Pacchetto Starter',
    'Piani Growth',
    'Hosting & Manutenzione',
    'Integrazione AI',
    'Altro',
  ];

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
      {formState === 'success' ? (
        <SuccessMessage />
      ) : (
        <>
          <div className="mb-8">
            <h2 className="mb-2 text-2xl font-bold text-neutral-900 dark:text-neutral-50">
              Invia un Messaggio
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400">
              Compila il form e ti risponderò al più presto. Tutti i campi sono
              obbligatori tranne il topic.
            </p>
          </div>

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
                className="w-full resize-none rounded-lg border border-neutral-300 bg-white px-4 py-3 text-neutral-900 placeholder-neutral-400 transition-all focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:placeholder-neutral-500"
              />
              <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-500">
                Più dettagli fornisci, meglio posso aiutarti nella risposta.
              </p>
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
                  <Send className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                  Invia Messaggio
                </>
              )}
            </button>
          </form>
        </>
      )}
    </div>
  );
}

/* ============================================================================
   CONTACT INFO SIDEBAR
   ============================================================================ */
function ContactInfo() {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@example.com',
      href: 'mailto:contact@example.com',
      description: 'Risposta entro 24 ore',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/emiliano',
      href: 'https://linkedin.com',
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
          <div className="dark:bg-primary-950/30 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100">
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
        <div className="dark:bg-success-950/20 mt-4 rounded-lg bg-success-50 p-3">
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
      <div className="dark:bg-primary-950/30 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary-100">
        <Icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-500">
          {label}
        </div>
        <div className="mb-1 break-words font-semibold text-neutral-900 dark:text-neutral-50">
          {value}
        </div>
        <div className="text-xs text-neutral-600 dark:text-neutral-400">
          {description}
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className="block rounded-lg transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-800/50"
      >
        {content}
      </a>
    );
  }

  return <div>{content}</div>;
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
    <div className="rounded-xl border border-neutral-200 bg-white p-4 text-center dark:border-neutral-800 dark:bg-neutral-900">
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
    <section className="dark:via-accent-950/20 dark:to-primary-950/20 bg-gradient-to-br from-accent-50 via-amber-50 to-primary-50 py-16 dark:from-neutral-900">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="overflow-hidden rounded-3xl border-2 border-accent-200 bg-white shadow-xl dark:border-accent-900/50 dark:bg-neutral-900">
          <div className="relative p-8 md:p-12">
            {/* Decorative glow */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent-500/20 blur-3xl" />

            <div className="relative z-10 grid gap-8 md:grid-cols-[auto_1fr_auto] md:items-center">
              {/* Icon */}
              <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-500 to-accent-600 shadow-lg">
                <Calendar className="h-10 w-10 text-white" />
              </div>

              {/* Content */}
              <div>
                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-accent-600/20 bg-accent-600/10 px-3 py-1 text-xs font-semibold text-accent-700 dark:border-accent-400/20 dark:bg-accent-400/10 dark:text-accent-300">
                  <Sparkles className="h-3 w-3" />
                  100% GRATUITO
                </div>
                <h3 className="mb-3 text-2xl font-bold text-neutral-900 dark:text-neutral-50 md:text-3xl">
                  Preferisci parlare direttamente?
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Prenota una consulenza gratuita di 30 minuti. Analizziamo
                  insieme i tuoi processi e identifichiamo le opportunità di
                  automazione ad alto impatto.
                </p>
              </div>

              {/* CTA */}
              <a
                href="#consultation"
                className="group flex-shrink-0 rounded-lg bg-accent-600 px-8 py-4 text-center font-semibold text-white transition-all hover:bg-accent-700 hover:shadow-lg dark:bg-accent-500 dark:hover:bg-accent-600"
              >
                <div className="flex items-center gap-2 whitespace-nowrap">
                  Prenota Ora
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </div>
              </a>
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
      icon: MessageSquare,
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
      icon: Calendar,
      question: 'Devo prenotare una consulenza subito?',
      answer:
        'No, puoi prima scrivermi per fare domande. La consulenza è solo quando sei pronto.',
    },
  ];

  return (
    <section className="bg-neutral-50 py-16 dark:bg-neutral-900">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-neutral-900 dark:text-neutral-50">
            Domande Frequenti
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            Risposte rapide alle domande più comuni
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900"
            >
              <div className="dark:bg-primary-950/30 mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
                <faq.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="mb-3 font-bold text-neutral-900 dark:text-neutral-50">
                {faq.question}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {faq.answer}
              </p>
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
function SuccessMessage() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="dark:bg-success-950/30 mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-success-100">
        <CheckCircle2 className="h-10 w-10 text-success-600 dark:text-success-400" />
      </div>
      <h3 className="mb-4 text-3xl font-bold text-neutral-900 dark:text-neutral-50">
        Messaggio Inviato con Successo!
      </h3>
      <p className="mb-2 max-w-md text-lg text-neutral-600 dark:text-neutral-400">
        Grazie per avermi contattato. Ho ricevuto il tuo messaggio e ti
        risponderò entro 24 ore.
      </p>
      <p className="mb-6 text-sm text-neutral-500 dark:text-neutral-500">
        Controlla la tua email (anche la cartella spam) per la mia risposta 📬
      </p>
      <button
        onClick={() => window.location.reload()}
        className="text-sm font-semibold text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
      >
        ← Invia un altro messaggio
      </button>
    </div>
  );
}
