'use client';
import React, { useState } from 'react';
import { Mail, Send, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('sending');

    // Simulate form submission
    setTimeout(() => {
      setFormState('success');
      // Reset after 3 seconds
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  return (
    <section className="relative overflow-hidden py-20">
      {/* Subtle background decoration */}
      <div className="absolute left-1/4 top-10 h-64 w-64 rounded-full bg-primary-500/5 blur-3xl" />
      <div className="absolute bottom-10 right-1/4 h-64 w-64 rounded-full bg-accent-500/5 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-4xl px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-neutral-900 dark:text-neutral-50 sm:text-4xl">
            Hai una domanda prima di prenotare?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
            Scrivimi pure, rispondo a tutti entro 24 ore. Nessun impegno, solo
            risposte chiare.
          </p>
        </div>

        {/* Two-column layout: Form + Quick Links */}
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr]">
          {/* Left: Contact Form */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900 sm:p-8">
            {formState === 'success' ? (
              <SuccessMessage />
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Il tuo nome"
                    className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-neutral-900 placeholder-neutral-400 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:placeholder-neutral-500 dark:focus:border-primary-500"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="tua@email.com"
                    className="w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-neutral-900 placeholder-neutral-400 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:placeholder-neutral-500 dark:focus:border-primary-500"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
                  >
                    Messaggio
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Racconta brevemente cosa vorresti automatizzare o quale dubbio hai..."
                    className="w-full resize-none rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-neutral-900 placeholder-neutral-400 transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:placeholder-neutral-500 dark:focus:border-primary-500"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formState === 'sending'}
                  className="group flex w-full items-center justify-center gap-2 rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white transition-all hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-primary-500 dark:hover:bg-primary-600"
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
            )}
          </div>

          {/* Right: Quick Actions & Info */}
          <div className="space-y-6">
            {/* Primary CTA Card */}
            <div className="rounded-2xl border-2 border-accent-200 bg-gradient-to-br from-accent-50 to-amber-50 p-6 dark:border-accent-900/50 dark:from-neutral-900 dark:to-accent-950/20">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500 shadow-md">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-neutral-900 dark:text-neutral-50">
                Oppure, se sei pronto...
              </h3>
              <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
                Prenota subito il tuo audit gratuito e scopri come automatizzare
                il tuo business in 30 minuti.
              </p>
              <Link href="#audit" passHref>
                <a className="group inline-flex items-center gap-2 rounded-lg bg-accent-600 px-5 py-2.5 font-semibold text-white transition-all hover:bg-accent-700 dark:bg-accent-500 dark:hover:bg-accent-600">
                  Prenota Consulenza Gratuita
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Link>
            </div>

            {/* Direct Email Card */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-950/30">
                  <Mail className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">
                    {"Preferisci l'email?"}
                  </h4>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    Scrivimi direttamente
                  </p>
                </div>
              </div>
              <a
                href="mailto:contact@example.com"
                className="block break-all text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
              >
                contact@example.com
              </a>
            </div>

            {/* Response Time Badge */}
            <div className="rounded-xl bg-neutral-100 px-4 py-3 dark:bg-neutral-800">
              <div className="flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                <div className="flex h-2 w-2 items-center justify-center">
                  <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-success-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-success-500"></span>
                </div>
                <span>Risposta garantita entro 24 ore</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

/* ============================================================================
   SUCCESS MESSAGE COMPONENT
   ============================================================================ */
function SuccessMessage() {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-success-100 dark:bg-success-950/30">
        <CheckCircle2 className="h-8 w-8 text-success-600 dark:text-success-400" />
      </div>
      <h3 className="mb-3 text-2xl font-bold text-neutral-900 dark:text-neutral-50">
        Messaggio Inviato!
      </h3>
      <p className="mb-2 text-neutral-600 dark:text-neutral-400">
        Grazie per avermi scritto. Ti risponderò al più presto, di solito entro
        24 ore.
      </p>
      <p className="text-sm text-neutral-500 dark:text-neutral-500">
        Controlla la tua casella email (anche spam) 📬
      </p>
    </div>
  );
}
