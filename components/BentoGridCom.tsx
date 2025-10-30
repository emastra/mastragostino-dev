'use client';
import { cn } from '~/lib/utils';
import React, { ReactNode } from 'react';
import { TimerReset, TicketCheck, Blocks, Scaling } from 'lucide-react';
// import { BentoGrid, BentoCard } from '~/components/BentoCard';
import { FC, ComponentPropsWithoutRef, SVGProps } from 'react';

type Feature = {
  Icon: React.ElementType;
  name: string;
  description: string;
  href: string;
  cta: string;
  className: string;
  background: ReactNode;
};

const features: Feature[] = [
  {
    Icon: TimerReset,
    name: 'Recupera Ore Preziose',
    description:
      'Dimentica il tempo perso in data entry, copia-incolla e gestione manuale. Automatizziamo i processi più esosi di tempo, regalandoti ore da reinvestire in strategia e vendita.',
    href: '#',
    cta: 'Calcola il tuo ROI',
    className: 'md:col-span-1',
    background: (
      <div className="dark:to-amber-950/30 absolute inset-0 bg-gradient-to-br from-amber-50 to-amber-100 dark:from-neutral-900" />
    ),
  },
  {
    Icon: TicketCheck,
    name: 'Workflow Zero Errori',
    description:
      'Ogni automazione è progettata per eseguire compiti ripetitivi con precisione assoluta. Elimina gli errori umani che costano tempo, clienti e credibilità.',
    href: '#',
    cta: "Scopri l'Affidabilità",
    className: 'md:col-span-1',
    background: (
      <div className="dark:to-primary-950/30 absolute inset-0 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-neutral-900" />
    ),
  },
  {
    Icon: Blocks,
    name: 'Integrazione Senza Sforzo',
    description:
      'Colleghiamo in modo fluido tutti i tuoi software (CRM, Email, Fogli di calcolo, ERP) usando n8n. Non servono sviluppatori, solo logiche efficaci.',
    href: '#',
    cta: 'Vedi le Piattaforme incluse',
    className: 'md:col-span-1',
    background: (
      <div className="dark:to-violet-950/30 absolute inset-0 bg-gradient-to-br from-violet-50 to-violet-100 dark:from-neutral-900" />
    ),
  },
  {
    Icon: Scaling,
    name: 'Scalabilità Immediata',
    description:
      "Le automazioni non hanno picchi di stanchezza. Il tuo business può crescere in volume e complessità senza richiedere l'assunzione di nuovo personale per i compiti operativi.",
    href: '#',
    cta: 'Inizia a Scalare',
    className: 'md:col-span-1',
    background: (
      <div className="dark:to-success-950/30 absolute inset-0 bg-gradient-to-br from-success-50 to-success-100 dark:from-neutral-900" />
    ),
  },
];

export default function BentoGridCom() {
  return (
    <div className="w-full px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <BentoGrid>
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}

//

const ArrowRightIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M8.22 2.72a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 8.5H3.75a.75.75 0 0 1 0-1.5h8.19L8.22 3.78a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />
  </svg>
);

interface BentoGridProps extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode;
  className?: string;
}

export const BentoGrid: FC<BentoGridProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'grid w-full auto-rows-[22rem] grid-cols-1 gap-4 md:grid-cols-2',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export interface BentoCardProps extends ComponentPropsWithoutRef<'div'> {
  name: string;
  className: string;
  background: ReactNode;
  Icon?: React.ElementType;
  description: string;
  href?: string;
  cta?: string;
}

export const BentoCard: FC<BentoCardProps> = ({
  name,
  className,
  background,
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
    {/* Background */}
    <div className="absolute inset-0">{background}</div>

    {/* Content */}
    <div className="relative z-10 flex flex-1 flex-col gap-1 p-6 transition-all duration-300">
      {/* Icon */}
      {Icon && (
        <Icon className="mb-2 h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-200 ease-out group-hover:scale-105 dark:text-neutral-300" />
      )}

      {/* Title */}
      <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-50">
        {name}
      </h3>

      {/* Description */}
      <p className="max-w-lg text-neutral-600 dark:text-neutral-400">
        {description}
      </p>

      {/* Spacer to push CTA to bottom */}
      <div className="flex-1" />

      {/* CTA Link */}
      {href && cta && (
        <div className="mt-4">
          <a
            href={href}
            className="group/link dark:focus:ring-offset-neutral-950 inline-flex items-center text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:text-primary-400 dark:hover:text-primary-300"
          >
            {cta}
            <ArrowRightIcon className="group-hover/link:translate-x-1 ml-2 h-4 w-4 transition-transform" />
          </a>
        </div>
      )}
    </div>

    {/* Hover overlay - subtle interaction feedback */}
    <div className="pointer-events-none absolute inset-0 rounded-xl bg-neutral-900/0 transition-colors duration-300 group-hover:bg-neutral-900/[0.02] dark:group-hover:bg-white/[0.02]" />
  </div>
);

// export default BentoCard;
