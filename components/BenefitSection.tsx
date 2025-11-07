'use client';
import { cn } from '~/lib/utils';
import React, {
  ReactNode,
  FC,
  ComponentPropsWithoutRef,
  SVGProps,
} from 'react';
import {
  TimerReset,
  TicketCheck,
  Blocks,
  Scaling,
  ArrowRightIcon,
  BanIcon,
  SmileIcon,
  BlocksIcon,
} from 'lucide-react';
import Link from 'next/link';

const BenefitSection: React.FC = () => {
  return (
    <section id="benefits" className="py-12 md:py-24">
      <div className="container mx-auto max-w-7xl">
        <div className="animate-fade-in mb-12 text-center">
          <span
            className="bg-accent/10 text-accent-foreground mb-4 inline-block rounded-full px-3 py-1 text-sm font-semibold uppercase tracking-wider"
            aria-hidden="false"
            role="status"
          >
            Benefici
          </span>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Risultati concreti e duraturi
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            Connettere i tuoi strumenti e automatizzare le attività chiave
            significa costruire basi solide per una crescita più sostenibile e
            meno stressante.
          </p>
        </div>
      </div>
      <BenefitsGrid />
    </section>
  );
};

export default BenefitSection;

//

type Feature = {
  Icon?: React.ElementType;
  name: string;
  description: string;
  href?: string;
  cta?: string;
  className?: string;
  bgColor: string;
};
const features: Feature[] = [
  {
    Icon: TimerReset,
    name: 'Risparmia Ore Ogni Settimana',
    description:
      'Le attività ripetitive diventano processi automatici: guadagni ore ogni settimana da dedicare ai clienti o alle strategie. Più tempo per ciò che conta davvero.',
    href: '#', // TODO: ce li devo avere questi link?
    cta: 'Scopri come velocizzare i tuoi flussi di lavoro',
    bgColor: 'success',
  },
  {
    Icon: BanIcon,
    name: 'Elimina Errori e Dimenticanze',
    description:
      'Automatizzando i passaggi critici, elimini gli errori manuali che ti fanno perdere tempo e credibilità. Le tue operazioni diventano fluide e affidabili.',
    href: '#',
    cta: 'Scopri come rendere i tuoi dati affidabili',
    className: 'md:col-span-1',
    bgColor: 'amber',
  },
  {
    Icon: BlocksIcon,
    name: 'Tutti i Tuoi Software, Finalmente Connessi',
    description:
      'Niente più “ponti” manuali tra le app: i tuoi strumenti lavorano insieme, senza errori né perdite di tempo. Gestionali, email e fogli di calcolo iniziano a parlarsi.',
    href: '#',
    cta: 'Connetti i tuoi strumenti preferiti senza sforzo',
    className: 'md:col-span-1',
    bgColor: 'violet',
  },
  {
    Icon: SmileIcon,
    name: 'Più Professionalità, Meno Stress',
    description:
      'Con processi automatizzati, trasmetti precisione, affidabilità e cura in ogni interazione con clienti e collaboratori. La tua reputazione cresce insieme al tuo business.',
    href: '#',
    cta: 'Scopri come elevare la tua immagine professionale',
    className: 'md:col-span-1',
    bgColor: 'primary',
  },
];

function BenefitsGrid() {
  return (
    <div className="w-full py-8 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid w-full auto-rows-[20rem] grid-cols-1 gap-4 md:grid-cols-2">
          {features.map((feature, idx) => (
            <BenefitCard key={idx} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}

export interface BenefitCardProps extends ComponentPropsWithoutRef<'div'> {
  name: string;
  className?: string;
  bgColor: ReactNode;
  Icon?: React.ElementType;
  description: string;
  href?: string;
  cta?: string;
}

const BenefitCard: FC<BenefitCardProps> = ({
  name,
  className = '',
  bgColor = 'amber',
  Icon,
  description,
  href,
  cta,
  ...props
}) => (
  <div
    key={name}
    className={cn(
      'group relative flex flex-col overflow-hidden rounded-xl transition-all duration-300',
      // Light mode styling
      'border border-neutral-200 bg-white',
      'shadow-sm hover:shadow-md',
      // Dark mode styling
      'dark:border-neutral-800 dark:bg-neutral-900',
      'dark:shadow-none dark:hover:shadow-lg dark:hover:shadow-primary-500/5',
      // Focus state for accessibility
      'focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-2',
      'dark:focus-within:ring-offset-neutral-950',
      className
    )}
    {...props}
  >
    {/* Background layer, renders behind everything (absolute inset-0) */}
    <div
      className={cn(
        'absolute inset-0 bg-gradient-to-br dark:from-neutral-900',
        `from-${String(bgColor)}-50`,
        `to-${String(bgColor)}-100`,
        `dark:to-${String(bgColor)}-950/30`
      )}
    />

    {/* Content layer. `relative z-10` - Sits above the background, `flex flex-1 flex-col` - Vertical flex that expands to fill card */}
    <div className="relative z-10 flex flex-1 flex-col gap-1 p-6 transition-all duration-300">
      {Icon && (
        <Icon className="mb-2 h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-200 ease-out group-hover:scale-105 dark:text-neutral-300" />
      )}

      <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
        {name}
      </h3>

      <p className="max-w-lg text-neutral-600 dark:text-neutral-400">
        {description}
      </p>

      {/* Spacer to push CTA to bottom */}
      {/* <div className="flex-1" /> */}

      {/* {href && cta && (
        <div className="group/link mt-4">
          <Link href={href} passHref>
            <a className="inline-flex items-center text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:text-primary-400 dark:hover:text-primary-300 dark:focus:ring-offset-neutral-950">
              {cta}
              <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-2" />
            </a>
          </Link>
        </div>
      )} */}
    </div>

    {/* Hover overlay */}
    <div className="pointer-events-none absolute inset-0 rounded-xl bg-neutral-900/0 transition-colors duration-300 group-hover:bg-neutral-900/[0.02] dark:group-hover:bg-white/[0.02]" />
  </div>
);
