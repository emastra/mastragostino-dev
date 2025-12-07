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
      </LayoutContainer>
    </>
  );
};

MiniAuditPage.hideLayout = true;

export default MiniAuditPage;

function TopBadge() {
  return (
    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-500/20 bg-primary-500/10 px-4 py-2 text-sm text-primary-600 backdrop-blur-sm dark:text-primary-100">
      <Sparkles className="h-4 w-4" />
      <span className="hidden sm:inline">
        Automazioni su misura per PMI e Professionisti
      </span>
      <span className="inline sm:hidden">
        Automazioni per PMI e Professionisti
      </span>
    </div>
  );
}

function CTAButtons() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <Link href="/booking" passHref>
        <a className="group flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary-600 px-8 py-3 font-medium text-white shadow-lg transition-all duration-100 hover:bg-primary-700 hover:shadow-xl dark:bg-primary-500 dark:hover:bg-primary-600">
          Prenota un incontro gratuito
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </a>
      </Link>

      <Link href="#benefits" passHref>
        <a className="rounded-lg border border-neutral-200 bg-neutral-50 px-8 py-3 font-medium text-neutral-900 shadow-lg backdrop-blur-sm transition-all duration-100 hover:bg-neutral-100 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-50 dark:hover:bg-neutral-800">
          Scopri di più
        </a>
      </Link>
    </div>
  );
}

function HeroSection() {
  return (
    <div className="relative z-10">
      <div className="mx-auto max-w-7xl px-4 pb-12 pt-16 sm:px-6 sm:pb-16 sm:pt-24 lg:px-8 lg:pb-24 lg:pt-32">
        <div className="text-center">
          <TopBadge />

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl md:text-6xl lg:text-7xl">
            Mini-Audit gratuito
          </h1>
          <p className="mx-auto max-w-xl text-base text-slate-600 dark:text-slate-300 sm:text-lg md:max-w-3xl">
            Una breve analisi dei tuoi processi per capire dove migliorare
            l'efficienza operativa della tua agenzia.
          </p>
          {/* <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="inline-flex h-11 items-center justify-center rounded-md bg-slate-900 px-8 text-base font-medium text-slate-50 transition-colors hover:bg-slate-900/90 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-200">
              Get a Demo
            </button>
            <button className="inline-flex h-11 items-center justify-center rounded-md border border-slate-200 bg-white px-8 text-base font-medium text-slate-900 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700">
              Get Started Free
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

function FormSection() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');
  const [agency, setAgency] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Main Card */}
        <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-black">
          {/* Header */}
          <div className="mb-6 flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight text-foreground">
              Create an account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your details below to create your account
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

            {/* Create Account Button */}
            <button
              type="submit"
              className="inline-flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 ring-offset-white transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:ring-offset-black dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            >
              Richiedi il Mini-Audit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
