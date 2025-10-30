'use client';
import React from 'react';
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Briefcase,
  Target,
  ArrowRight,
} from 'lucide-react';

const AboutMeSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:py-20 md:py-24">
      {/* Decorative background elements - matching HeroSection style */}
      <div className="absolute right-10 top-20 h-[400px] w-[400px] animate-pulse rounded-full bg-primary-500/10 blur-[100px]" />
      <div className="absolute bottom-20 left-10 h-[400px] w-[400px] animate-pulse rounded-full bg-accent-500/10 blur-[100px]" />

      <div className="container relative z-10 mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span
            className="bg-accent/10 text-accent-foreground mb-4 inline-block rounded-full px-3 py-1 text-sm font-semibold uppercase tracking-wider"
            aria-hidden="false"
            role="status"
          >
            Chi Sono
          </span>
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
            Il consulente che trasforma{' '}
            <span className="bg-gradient-to-r from-primary-500 via-violet-500 to-amber-500 bg-clip-text text-transparent">
              processi manuali in automazioni intelligenti
            </span>
          </h2>
        </div>

        {/* Main Content Card */}
        <div className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900 dark:shadow-none dark:hover:shadow-lg dark:hover:shadow-primary-500/5">
          {/* Background gradient layer */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-primary-50/30 to-violet-50/30 dark:from-neutral-900 dark:via-primary-950/10 dark:to-violet-950/10" />

          <div className="relative z-10 grid gap-8 p-8 md:grid-cols-[280px_1fr] md:gap-12 md:p-12">
            {/* Left Column - Avatar & Quick Info */}
            <div className="flex flex-col items-center md:items-start">
              {/* Avatar */}
              <div className="relative mb-6">
                {/* Glow effect behind avatar */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 to-violet-500 opacity-40 blur-xl" />
                <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-white shadow-lg dark:border-neutral-800">
                  <img
                    src="/images/avatar.jpg"
                    alt="Emiliano Mastragostino"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                {/* Status badge - matching design system */}
                <div className="absolute bottom-2 right-2 flex items-center gap-2 rounded-full border-2 border-white bg-success-500 px-3 py-1.5 text-xs font-semibold text-white shadow-md dark:border-neutral-900">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
                  </span>
                  Disponibile
                </div>
              </div>

              {/* Quick Info Tags */}
              <div className="flex w-full flex-col gap-3">
                <InfoTag icon={MapPin} text="Roma, Italia" />
                <InfoTag icon={Briefcase} text="Automation Consultant" />
                <InfoTag icon={Target} text="Specialist in n8n" />
              </div>
            </div>

            {/* Right Column - Bio & CTA */}
            <div className="flex flex-col">
              {/* Name & Title */}
              <div className="mb-6">
                <h3 className="mb-2 text-3xl font-bold text-neutral-900 dark:text-neutral-50">
                  Emiliano Mastragostino
                </h3>
                <p className="text-lg font-medium text-primary-600 dark:text-primary-400">
                  Automation Consultant & n8n Expert
                </p>
              </div>

              {/* Bio Text */}
              <div className="mb-8 space-y-4 text-base text-neutral-600 dark:text-neutral-400">
                <p className="leading-relaxed">
                  Ciao! Sono un consulente specializzato nell'automazione di
                  processi aziendali usando{' '}
                  <strong className="font-semibold text-neutral-900 dark:text-neutral-50">
                    n8n
                  </strong>{' '}
                  e intelligenza artificiale.
                </p>
                <p className="leading-relaxed">
                  Aiuto PMI e professionisti a{' '}
                  <strong className="font-semibold text-neutral-900 dark:text-neutral-50">
                    liberare tempo prezioso
                  </strong>{' '}
                  automatizzando task ripetitivi, integrando sistemi esistenti e
                  costruendo workflow intelligenti che lavorano 24/7.
                </p>
                <p className="leading-relaxed">
                  Il mio approccio è pratico e orientato ai risultati: analizzo
                  i tuoi processi, identifico le opportunità ad alto impatto, e
                  implemento soluzioni che generano{' '}
                  <strong className="font-semibold text-neutral-900 dark:text-neutral-50">
                    ROI immediato
                  </strong>
                  .
                </p>
              </div>

              {/* Skills/Specialties */}
              <div className="mb-8">
                <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  Specializzazioni
                </h4>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge>n8n Workflows</SkillBadge>
                  <SkillBadge>API Integration</SkillBadge>
                  <SkillBadge>AI Automation</SkillBadge>
                  <SkillBadge>Process Optimization</SkillBadge>
                  <SkillBadge>CRM Integration</SkillBadge>
                  <SkillBadge>Data Sync</SkillBadge>
                </div>
              </div>

              {/* Spacer */}
              <div className="flex-1" />

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="mailto:contact@example.com"
                  className="group/btn inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-100 hover:bg-primary-700 hover:shadow-xl dark:bg-primary-500 dark:hover:bg-primary-600"
                >
                  <Mail className="h-5 w-5" />
                  Contattami
                  <ArrowRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                </a>

                <div className="flex items-center gap-3">
                  <SocialLink
                    href="https://linkedin.com"
                    ariaLabel="LinkedIn Profile"
                    icon={Linkedin}
                  />
                  <SocialLink
                    href="https://github.com"
                    ariaLabel="GitHub Profile"
                    icon={Github}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Hover overlay - matching BenefitSection pattern */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-neutral-900/0 transition-colors duration-300 group-hover:bg-neutral-900/[0.02] dark:group-hover:bg-white/[0.02]" />
        </div>

        {/* Value Proposition Cards */}
        <ValuePropositionCards />
      </div>
    </section>
  );
};

export default AboutMeSection;

/* ============================================================================
   HELPER COMPONENTS
   ============================================================================ */

interface InfoTagProps {
  icon: React.ElementType;
  text: string;
}

function InfoTag({ icon: Icon, text }: InfoTagProps) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm font-medium text-neutral-700 backdrop-blur-sm transition-colors hover:border-neutral-300 dark:border-neutral-800 dark:bg-neutral-800/50 dark:text-neutral-300 dark:hover:border-neutral-700">
      <Icon className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />
      <span>{text}</span>
    </div>
  );
}

function SkillBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-primary-200 bg-primary-50 px-3 py-1.5 text-xs font-medium text-primary-700 transition-colors hover:border-primary-300 hover:bg-primary-100 dark:border-primary-900/50 dark:bg-primary-950/30 dark:text-primary-300 dark:hover:border-primary-800 dark:hover:bg-primary-950/50">
      {children}
    </span>
  );
}

interface SocialLinkProps {
  href: string;
  ariaLabel: string;
  icon: React.ElementType;
}

function SocialLink({ href, ariaLabel, icon: Icon }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="flex h-12 w-12 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-700 shadow-sm transition-all duration-100 hover:border-primary-500 hover:bg-primary-50 hover:text-primary-600 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:border-primary-500 dark:hover:bg-primary-950/30 dark:hover:text-primary-400"
    >
      <Icon className="h-5 w-5" />
    </a>
  );
}

/* ============================================================================
   VALUE PROPOSITION CARDS - Replaces stats with meaningful info
   ============================================================================ */
function ValuePropositionCards() {
  const values = [
    {
      title: 'Approccio Pratico',
      description: 'Soluzioni concrete che puoi usare da subito, non teoria.',
      gradient: 'from-primary-500 to-primary-600',
    },
    {
      title: 'ROI Misurabile',
      description: 'Ogni automazione è progettata per generare valore reale.',
      gradient: 'from-violet-500 to-purple-600',
    },
    {
      title: 'Supporto Continuo',
      description: "Non ti lascio solo: ti seguo anche dopo l'implementazione.",
      gradient: 'from-amber-500 to-orange-600',
    },
  ];

  return (
    <div className="mt-12 grid gap-6 sm:grid-cols-3">
      {values.map((value, index) => (
        <div
          key={index}
          className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900"
        >
          {/* Gradient background */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-5 transition-opacity duration-300 group-hover:opacity-10`}
          />

          {/* Content */}
          <div className="relative z-10">
            <h4 className="mb-2 text-lg font-bold text-neutral-900 dark:text-neutral-50">
              {value.title}
            </h4>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {value.description}
            </p>
          </div>

          {/* Hover overlay */}
          <div className="pointer-events-none absolute inset-0 rounded-xl bg-neutral-900/0 transition-colors duration-300 group-hover:bg-neutral-900/[0.02] dark:group-hover:bg-white/[0.02]" />
        </div>
      ))}
    </div>
  );
}
