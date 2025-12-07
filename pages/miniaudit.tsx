'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Meta from '~/components/Meta';
import LayoutContainer from '~/components/LayoutContainer';
import {
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  Sparkles,
  UserIcon,
  MailIcon,
} from 'lucide-react';

const MiniAuditPage: React.FC & { hideLayout?: boolean } = () => {
  return (
    <>
      <Meta
        title="Request Mini-Audit"
        description="Request a mini-audit for your real estate agency workflows."
      />
      <LayoutContainer>
        <HeroSection />
        <FormSection />
        <TrustSection />
      </LayoutContainer>
    </>
  );
};

MiniAuditPage.hideLayout = true;

export default MiniAuditPage;

function HeroSection() {
  return (
    <div className="relative z-10">
      <div className="mx-auto max-w-7xl px-4 pb-12 pt-16 sm:px-6 sm:pb-16 sm:pt-24 lg:px-8 lg:pb-24 lg:pt-32">
        <div className="text-center">
          {/* Top badge */}
          {/* <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-500/20 bg-primary-500/10 px-4 py-2 text-sm text-primary-600 backdrop-blur-sm dark:text-primary-100">
            <Sparkles className="h-4 w-4" />
            <span className="hidden sm:inline">
              Automazioni su misura per PMI e Professionisti
            </span>
            <span className="inline sm:hidden">
              Automazioni per PMI e Professionisti
            </span>
          </div> */}

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl md:text-6xl lg:text-7xl">
            Mini-Audit gratuito
          </h1>
          <p className="mx-auto max-w-xl text-base text-slate-600 dark:text-slate-300 sm:text-lg md:max-w-3xl">
            Una breve analisi dei tuoi processi per capire dove migliorare
            l'efficienza operativa della tua agenzia.
          </p>
        </div>
      </div>
    </div>
  );
}

function FormSection() {
  const [email, setEmail] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');
  const [agency, setAgency] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Main Card */}
        <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-black">
          {/* Header */}
          <div className="mb-6 flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight text-foreground">
              Richiedi il Mini-Audit
            </h1>
            <p className="text-sm text-muted-foreground">
              Analizziamo insieme dove puoi semplificare.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6">
            {/* Name Input */}
            <div className="space-y-2">
              <label
                htmlFor="fullName"
                className="text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                Nome
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 dark:text-gray-500">
                  <UserIcon className="h-4 w-4" />
                </div>
                <input
                  id="fullName"
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Inserisci il tuo nome"
                  className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 pl-10 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 focus:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-black dark:text-gray-100 dark:placeholder:text-gray-400 dark:focus:ring-gray-300 dark:focus:ring-offset-black"
                />
              </div>
            </div>

            {/* Agency Input */}
            <div className="space-y-2">
              <label
                htmlFor="fullName"
                className="text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                Agenzia
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 dark:text-gray-500">
                  <UserIcon className="h-4 w-4" />
                </div>
                <input
                  id="agency"
                  type="text"
                  value={agency}
                  onChange={(e) => setAgency(e.target.value)}
                  placeholder="Inserisci il nome della tua agenzia"
                  className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 pl-10 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 focus:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-black dark:text-gray-100 dark:placeholder:text-gray-400 dark:focus:ring-gray-300 dark:focus:ring-offset-black"
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                Email
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 dark:text-gray-500">
                  <MailIcon className="h-4 w-4" />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nome@esempio.com"
                  className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 pl-10 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 focus:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-black dark:text-gray-100 dark:placeholder:text-gray-400 dark:focus:ring-gray-300 dark:focus:ring-offset-black"
                />
              </div>
            </div>

            {/* Phone Input */}
            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-gray-900 dark:text-gray-100"
              >
                Telefono
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400 dark:text-gray-500">
                  <UserIcon className="h-4 w-4" />
                </div>
                <input
                  id="phone"
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Inserisci il tuo numero di telefono"
                  className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 pl-10 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 focus:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-black dark:text-gray-100 dark:placeholder:text-gray-400 dark:focus:ring-gray-300 dark:focus:ring-offset-black"
                />
              </div>
            </div>

            {/* Form submit button which is the CTA as well */}
            <button
              type="submit"
              className="inline-flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 ring-offset-white transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-black dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            >
              Invia richiesta
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

// Helper component for social media links for cleaner code
const SocialLink: React.FC<{
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
}> = ({ href, ariaLabel, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    className="rounded-full bg-gray-200 p-3 text-black transition-colors duration-300 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
  >
    {children}
  </a>
);

function TrustSection() {
  return (
    <section className="relative overflow-hidden font-sans">
      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center p-8 text-center">
        <h2 className="mb-4 text-4xl font-bold md:text-5xl">Chi ti segue</h2>

        {/* Avatar */}
        <div className="relative mb-8">
          <div className="h-40 w-40 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 p-1 shadow-lg dark:from-gray-500 dark:to-gray-700 dark:shadow-gray-800">
            <img
              src="/images/avatar.jpg"
              alt="Emiliano's avatar"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div className="animate-wave absolute -right-2 bottom-2 text-4xl">
            <span>👋</span>
          </div>
        </div>

        <p className="text-xl leading-tight text-black dark:text-white md:text-2xl">
          Sono Emiliano, esperto in automazioni operative per agenzie
          immobiliari. Aiuto il tuo team a lavorare con più ordine, meno
          frizioni e processi più chiari.
        </p>

        {/* Social links */}
        <div className="mt-12 flex items-center gap-4">
          <SocialLink
            href="https://www.linkedin.com/in/emiliano-mastragostino/"
            ariaLabel="LinkedIn Profile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </SocialLink>
          <SocialLink
            href="https://github.com/emastra"
            ariaLabel="GitHub Profile"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            </svg>
          </SocialLink>
        </div>
      </div>
    </section>
  );
}
