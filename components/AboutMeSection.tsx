'use client';
import React from 'react';
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Briefcase,
  GraduationCap,
} from 'lucide-react';

const AboutMeSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-primary-500/10 blur-3xl" />
      <div className="absolute bottom-20 left-10 h-72 w-72 rounded-full bg-accent-500/10 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-5xl px-4">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
            Chi{' '}
            <span className="bg-gradient-to-r from-primary-600 via-accent-500 to-primary-500 bg-clip-text text-transparent">
              Sono
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-neutral-600 dark:text-neutral-400">
            Il consulente che trasforma processi manuali in automazioni
            intelligenti
          </p>
        </div>

        {/* Main Content Card */}
        <div className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-lg transition-shadow duration-300 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900">
          <div className="grid gap-8 p-8 md:grid-cols-[300px_1fr] md:gap-12 md:p-12">
            {/* Left Column - Avatar & Quick Info */}
            <div className="flex flex-col items-center md:items-start">
              {/* Avatar */}
              <div className="relative mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 opacity-50 blur-md" />
                <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-white shadow-lg dark:border-neutral-800">
                  <img
                    src="/images/avatar.jpg"
                    alt="Emiliano Mastragostino"
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* Status badge */}
                <div className="absolute bottom-2 right-2 flex items-center gap-2 rounded-full border-2 border-white bg-success-500 px-3 py-1.5 text-xs font-semibold text-white shadow-lg dark:border-neutral-900">
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
                <InfoTag icon={GraduationCap} text="Specialist in n8n" />
              </div>
            </div>

            {/* Right Column - Bio & CTA */}
            <div className="flex flex-col">
              {/* Name & Title */}
              <div className="mb-6">
                <h3 className="mb-2 text-3xl font-bold text-neutral-900 dark:text-neutral-50">
                  Emiliano Mastragostino
                </h3>
                <p className="text-lg text-primary-600 dark:text-primary-400">
                  Automation Consultant & n8n Expert
                </p>
              </div>

              {/* Bio Text */}
              <div className="mb-8 space-y-4 text-neutral-700 dark:text-neutral-300">
                <p className="leading-relaxed">
                  Ciao! Sono un consulente specializzato nell'automazione di
                  processi aziendali usando{' '}
                  <strong className="text-neutral-900 dark:text-neutral-50">
                    n8n
                  </strong>{' '}
                  e intelligenza artificiale.
                </p>
                <p className="leading-relaxed">
                  Aiuto PMI e professionisti a{' '}
                  <strong className="text-neutral-900 dark:text-neutral-50">
                    liberare tempo prezioso
                  </strong>{' '}
                  automatizzando task ripetitivi, integrando sistemi esistenti e
                  costruendo workflow intelligenti che lavorano 24/7.
                </p>
                <p className="leading-relaxed">
                  Il mio approccio è pratico e orientato ai risultati: analizzo
                  i tuoi processi, identifico le opportunità ad alto impatto, e
                  implemento soluzioni che generano{' '}
                  <strong className="text-neutral-900 dark:text-neutral-50">
                    ROI immediato
                  </strong>
                  .
                </p>
              </div>

              {/* Skills/Specialties */}
              <div className="mb-8">
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                  Specializzazioni
                </h4>
                <div className="flex flex-wrap gap-2">
                  <SkillBadge>n8n Workflows</SkillBadge>
                  <SkillBadge>API Integration</SkillBadge>
                  <SkillBadge>AI Automation</SkillBadge>
                  <SkillBadge>Process Optimization</SkillBadge>
                  <SkillBadge>CRM Integration</SkillBadge>
                </div>
              </div>

              {/* Spacer */}
              <div className="flex-1" />

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="mailto:contact@example.com"
                  className="group inline-flex items-center gap-2 rounded-lg bg-primary-600 px-6 py-3 font-semibold text-white shadow-md transition-all hover:bg-primary-700 hover:shadow-lg dark:bg-primary-500 dark:hover:bg-primary-600"
                >
                  <Mail className="h-5 w-5" />
                  Contattami
                </a>

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

        {/* Stats or Additional Info (Optional) */}
        <StatsSection />
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
    <div className="flex items-center gap-2 rounded-lg bg-neutral-100 px-3 py-2 text-sm text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300">
      <Icon className="h-4 w-4 text-neutral-500 dark:text-neutral-400" />
      <span>{text}</span>
    </div>
  );
}

function SkillBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="dark:bg-primary-950/30 rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700 dark:border-primary-900/50 dark:text-primary-300">
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
      className="dark:hover:bg-primary-950/30 flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 bg-neutral-100 text-neutral-700 transition-all hover:border-primary-500 hover:bg-primary-50 hover:text-primary-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:border-primary-500 dark:hover:text-primary-400"
    >
      <Icon className="h-5 w-5" />
    </a>
  );
}

/* ============================================================================
   STATS SECTION (Optional - shows credibility)
   ============================================================================ */
function StatsSection() {
  const stats = [
    { value: '50+', label: 'Automazioni Create' },
    { value: '30+', label: 'Clienti Soddisfatti' },
    { value: '1000+', label: 'Ore Risparmiate' },
  ];

  return (
    <div className="mt-12 grid gap-6 sm:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-xl border border-neutral-200 bg-gradient-to-br from-neutral-50 to-white p-6 text-center transition-all hover:shadow-md dark:border-neutral-800 dark:from-neutral-900 dark:to-neutral-900/50"
        >
          <div className="mb-2 text-4xl font-bold text-primary-600 dark:text-primary-400">
            {stat.value}
          </div>
          <div className="text-sm text-neutral-600 dark:text-neutral-400">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
