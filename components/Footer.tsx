'use client';
import React from 'react';
import { Linkedin, Github, Mail, MapPin, Sparkles } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-neutral-200 bg-white px-4 py-12 dark:border-neutral-800 dark:bg-neutral-900">
      {/* Subtle background decoration */}
      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-primary-500/5 blur-3xl" />
      <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-violet-500/5 blur-3xl" />

      <div className="container relative z-10 mx-auto max-w-6xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand Section */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-violet-500">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-50">
                Mastragostino
              </h3>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              Consulente in automazione per PMI e professionisti. Trasformo
              processi manuali in workflow automatici che liberano tempo e
              riducono errori.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              <SocialLink
                href="https://linkedin.com"
                icon={Linkedin}
                label="LinkedIn"
              />
              <SocialLink
                href="https://github.com"
                icon={Github}
                label="GitHub"
              />
              <SocialLink
                href="mailto:contact@example.com"
                icon={Mail}
                label="Email"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              Link Rapidi
            </h4>
            <ul className="space-y-3">
              <FooterLink href="#servizi">Servizi</FooterLink>
              <FooterLink href="#benefici">Benefici</FooterLink>
              <FooterLink href="#chi-sono">Chi Sono</FooterLink>
              <FooterLink href="#contatti">Contatti</FooterLink>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              Contatti
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm text-neutral-600 dark:text-neutral-400">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-500" />
                <span>Roma, Italia</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-neutral-600 dark:text-neutral-400">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-500" />
                <a
                  href="mailto:info@mastragostino.dev"
                  className="transition-colors hover:text-primary-600 dark:hover:text-primary-400"
                >
                  info@mastragostino.dev
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-neutral-600 dark:text-neutral-400 sm:flex-row">
          <div>
            <p>
              © {currentYear} Emiliano Mastragostino. Tutti i diritti riservati.
            </p>
          </div>
          <div className="flex gap-6">
            <Link href="#privacy" passHref>
              <a className="transition-colors hover:text-primary-600 dark:hover:text-primary-400">
                Privacy Policy
              </a>
            </Link>
            <Link href="#termini" passHref>
              <a className="transition-colors hover:text-primary-600 dark:hover:text-primary-400">
                Termini di Servizio
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

/* ============================================================================
   HELPER COMPONENTS
   ============================================================================ */

interface SocialLinkProps {
  href: string;
  icon: React.ElementType;
  label: string;
}

function SocialLink({ href, icon: Icon, label }: SocialLinkProps) {
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

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <li>
      <Link href={href} passHref>
        <a className="text-sm text-neutral-600 transition-colors hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400">
          {children}
        </a>
      </Link>
    </li>
  );
}
