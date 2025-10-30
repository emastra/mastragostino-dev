'use client';
import { cn } from '~/lib/utils';
import React, {
  ReactNode,
  FC,
  ComponentPropsWithoutRef,
  SVGProps,
} from 'react';
import BentoGridCom from './BentoGridCom';
import Carousel from './Carousel';
import {
  TimerReset,
  TicketCheck,
  Blocks,
  Scaling,
  ArrowRightIcon,
} from 'lucide-react';

const BenefitSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-7xl">
        <div className="animate-fade-in mb-12 text-center">
          <span
            className="bg-accent/10 text-accent-foreground mb-4 inline-block rounded-full px-3 py-1 text-sm font-semibold uppercase tracking-wider"
            aria-hidden="false"
            role="status"
          >
            Benefici
          </span>
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
            Risultati che Contano Davvero
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Ogni automazione che creo non è teoria: è progettata per liberare
            tempo, ridurre errori e permetterti di concentrarti su ciò che fa
            davvero crescere la tua attività.
          </p>
        </div>
      </div>
      <BentoGridCom />
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
    name: 'Recupera Ore Preziose',
    description:
      'Dimentica il tempo perso in data entry, copia-incolla e gestione manuale. Automatizziamo i processi più esosi di tempo, regalandoti ore da reinvestire in strategia e vendita.',
    href: '#',
    cta: 'Calcola il tuo ROI',
    bgColor: 'amber',
  },
  {
    Icon: TicketCheck,
    name: 'Workflow Zero Errori',
    description:
      'Ogni automazione è progettata per eseguire compiti ripetitivi con precisione assoluta. Elimina gli errori umani che costano tempo, clienti e credibilità.',
    href: '#',
    cta: "Scopri l'Affidabilità",
    className: 'md:col-span-1',
    bgColor: 'primary',
  },
  {
    Icon: Blocks,
    name: 'Integrazione Senza Sforzo',
    description:
      'Colleghiamo in modo fluido tutti i tuoi software (CRM, Email, Fogli di calcolo, ERP) usando n8n. Non servono sviluppatori, solo logiche efficaci.',
    href: '#',
    cta: 'Vedi le Piattaforme incluse',
    className: 'md:col-span-1',
    bgColor: 'violet',
  },
  {
    Icon: Scaling,
    name: 'Scalabilità Immediata',
    description:
      "Le automazioni non hanno picchi di stanchezza. Il tuo business può crescere in volume e complessità senza richiedere l'assunzione di nuovo personale per i compiti operativi.",
    href: '#',
    cta: 'Inizia a Scalare',
    className: 'md:col-span-1',
    bgColor: 'success',
  },
];

function BenefitsGrid() {
  return (
    <div className="w-full px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid w-full auto-rows-[22rem] grid-cols-1 gap-4 md:grid-cols-2">
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
      <div className="flex-1" />

      {href && cta && (
        <div className="mt-4">
          <a
            href={href}
            className="dark:focus:ring-offset-neutral-950 inline-flex items-center text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:text-primary-400 dark:hover:text-primary-300"
          >
            {cta}
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </a>
        </div>
      )}
    </div>

    {/* Hover overlay */}
    <div className="pointer-events-none absolute inset-0 rounded-xl bg-neutral-900/0 transition-colors duration-300 group-hover:bg-neutral-900/[0.02] dark:group-hover:bg-white/[0.02]" />
  </div>
);
