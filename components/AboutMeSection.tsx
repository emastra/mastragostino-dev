'use client';
import React from 'react';
import {
  Mail,
  Linkedin,
  Github,
  ArrowRight,
  Sparkles,
  Target,
  Zap,
  Heart,
  Focus,
} from 'lucide-react';
import Link from 'next/link'; // TODO: usare next Link per tutto il sito?

const AboutMeSection: React.FC = () => {
  return (
    <section id="about-me" className="relative overflow-hidden py-12 md:py-24">
      {/* Grid Background - matching HeroSection */}
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
      {/* <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-primary-500/10 blur-[120px]" /> */}

      <div className="container relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span
            className="bg-accent/10 text-accent-foreground mb-4 inline-block rounded-full px-3 py-1 text-sm font-semibold uppercase tracking-wider"
            aria-hidden="false"
            role="status"
          >
            Chi c'è dietro
          </span>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Piacere, sono Emiliano
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-neutral-600 dark:text-neutral-400 md:text-xl">
            Aiuto professionisti e PMI a semplificare il lavoro e a liberare
            tempo grazie all'automazione.
          </p>
        </div>

        {/* Main Content - Two Column Layout */}
        <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column - Image & Quick Facts */}
          <div className="flex h-full min-h-0 flex-col gap-6">
            {/* Avatar Card */}
            <div className="group relative min-h-0 flex-1 overflow-hidden rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-violet-50 dark:from-neutral-900 dark:to-primary-950/20" />

              <div className="relative z-10 flex flex-col items-center">
                {/* Avatar with glow */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 to-violet-500 opacity-30 blur-2xl" />
                  <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-white shadow-xl dark:border-neutral-800">
                    <img
                      src="/images/avatar.jpg"
                      alt="Emiliano Mastragostino"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  {/* Status Indicator */}
                  <div className="absolute bottom-0 right-0 flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-success-500 dark:border-neutral-900">
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-white"></span>
                    </span>
                  </div>
                </div>

                <h3 className="mb-1 text-2xl font-bold text-neutral-900 dark:text-neutral-50">
                  Emiliano Mastragostino
                </h3>
                <p className="mb-6 text-sm font-medium text-primary-600 dark:text-primary-400">
                  Sviluppatore & Esperto Automazioni
                </p>

                {/* Social Links */}
                <div className="flex gap-3">
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
                  <SocialButton
                    href="mailto:emiliano.mastragostino@gmail.com"
                    icon={Mail}
                    label="Email"
                  />
                </div>
              </div>

              {/* Hover overlay */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-neutral-900/0 transition-colors duration-300 group-hover:bg-neutral-900/[0.02] dark:group-hover:bg-white/[0.02]" />
            </div>

            {/* Quick Facts Grid */}
            <div className="grid grid-cols-2 gap-4">
              <QuickFactCard
                icon={Zap}
                title="Specialità"
                value="n8n & AI"
                color="primary"
              />
              <QuickFactCard
                icon={Focus}
                title="Focus"
                value="Automazione"
                color="primary"
              />
            </div>
          </div>

          {/* Right Column - Bio & CTA */}
          <div className="flex h-full min-h-0 flex-col gap-6">
            {/* Bio Card */}
            <div className="group relative min-h-0 flex-1 overflow-hidden rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white via-violet-50/30 to-amber-50/30 dark:from-neutral-900 dark:via-violet-950/10 dark:to-amber-950/10" />

              <div className="relative z-10">
                {/* Intro */}
                <div className="mb-8 md:mb-12">
                  <h4 className="mb-3 text-xl font-bold text-neutral-900 dark:text-neutral-50">
                    Trasformo processi manuali in workflow automatici
                  </h4>
                  <p className="leading-relaxed text-neutral-600 dark:text-neutral-400">
                    Aiuto a{' '}
                    <strong className="font-semibold text-neutral-900 dark:text-neutral-50">
                      recuperare tempo prezioso
                    </strong>{' '}
                    automatizzando attività ripetitive e integrando sistemi
                    isolati. Lavoro con strumenti no-code come{' '}
                    <span className="font-semibold text-primary-600 dark:text-primary-400">
                      n8n
                    </span>
                    , linguaggi di programmazione come{' '}
                    <span className="font-semibold text-primary-600 dark:text-primary-400">
                      Javascript
                    </span>{' '}
                    , e, quando serve, soluzioni di{' '}
                    <span className="font-semibold text-primary-600 dark:text-primary-400">
                      Intelligenza Artificiale
                    </span>
                    .
                  </p>
                </div>

                {/* Approach */}
                <div className="mb-8 md:mb-12">
                  <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                    <Heart className="h-4 w-4" />
                    Il mio approccio
                  </h4>
                  <p className="leading-relaxed text-neutral-600 dark:text-neutral-400">
                    Concreto, orientato al risultato. Analizzo, identifico le
                    opportunità ad alto impatto e implemento soluzioni che
                    generano{' '}
                    <strong className="font-semibold text-neutral-900 dark:text-neutral-50">
                      ROI immediato
                    </strong>
                    .
                  </p>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                    Specializzazioni
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <SkillBadge color="primary">n8n Workflows</SkillBadge>
                    <SkillBadge color="violet">API Integration</SkillBadge>
                    <SkillBadge color="amber">AI Automation</SkillBadge>
                    <SkillBadge color="primary">CRM Integration</SkillBadge>
                    <SkillBadge color="violet">Process Optimization</SkillBadge>
                  </div>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-neutral-900/0 transition-colors duration-300 group-hover:bg-neutral-900/[0.02] dark:group-hover:bg-white/[0.02]" />
            </div>

            {/* CTA Card */}
            {/* <div className="group relative overflow-hidden rounded-2xl border border-primary-200 bg-gradient-to-br from-primary-50 to-violet-50 p-6 shadow-sm transition-all duration-300 hover:shadow-md dark:border-primary-900/50 dark:from-primary-950/20 dark:to-violet-950/20">
              <div className="relative z-10">
                <p className="mb-4 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Pronto a liberare tempo per ciò che conta davvero?
                </p>
                <button className="group/btn flex w-full items-center justify-center gap-2 rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-100 hover:bg-primary-700 hover:shadow-xl dark:bg-primary-500 dark:hover:bg-primary-600">
                  Prenota una consulenza gratuita
                  <ArrowRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;

/* ============================================================================
   HELPER COMPONENTS
   ============================================================================ */

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
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-600 shadow-sm transition-all duration-100 hover:border-primary-500 hover:bg-primary-50 hover:text-primary-600 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:border-primary-500 dark:hover:bg-primary-950/30 dark:hover:text-primary-400"
    >
      <Icon className="h-4 w-4" />
    </a>
  );
}

interface SkillBadgeProps {
  children: React.ReactNode;
  color: 'primary' | 'violet' | 'amber';
}

function SkillBadge({ children, color }: SkillBadgeProps) {
  const colorClasses = {
    primary:
      'border-primary-200 bg-primary-50 text-primary-700 hover:border-primary-300 hover:bg-primary-100 dark:border-primary-900/50 dark:bg-primary-950/30 dark:text-primary-300',
    violet:
      'border-violet-200 bg-violet-50 text-violet-700 hover:border-violet-300 hover:bg-violet-100 dark:border-violet-900/50 dark:bg-violet-950/30 dark:text-violet-300',
    amber:
      'border-amber-200 bg-amber-50 text-amber-700 hover:border-amber-300 hover:bg-amber-100 dark:border-amber-900/50 dark:bg-amber-950/30 dark:text-amber-300',
  };

  return (
    <span
      className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${colorClasses[color]}`}
    >
      {children}
    </span>
  );
}

interface QuickFactCardProps {
  icon: React.ElementType;
  title: string;
  value: string;
  color: 'primary' | 'violet';
}

function QuickFactCard({
  icon: Icon,
  title,
  value,
  color,
}: QuickFactCardProps) {
  const gradientClasses = {
    primary: 'from-primary-500 to-primary-600',
    violet: 'from-violet-500 to-purple-600',
  };

  const bgClasses = {
    primary:
      'from-primary-50 to-primary-100/70 dark:from-neutral-900 dark:to-primary-950/30',
    violet:
      'from-violet-50 to-violet-100/70 dark:from-neutral-900 dark:to-violet-950/30',
  };

  return (
    <div className="group relative overflow-hidden rounded-xl border border-neutral-200 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900">
      {/* Background gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${bgClasses[color]}`}
      />

      <div className="relative z-10">
        <div
          className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${gradientClasses[color]} shadow-md transition-transform duration-300 group-hover:scale-105`}
        >
          <Icon className="h-5 w-5 text-white" />
        </div>
        <div className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
          {title}
        </div>
        <div className="text-lg font-bold text-neutral-900 dark:text-neutral-50">
          {value}
        </div>
      </div>

      {/* Hover overlay */}
      <div className="pointer-events-none absolute inset-0 rounded-xl bg-neutral-900/0 transition-colors duration-300 group-hover:bg-neutral-900/[0.02] dark:group-hover:bg-white/[0.02]" />
    </div>
  );
}
