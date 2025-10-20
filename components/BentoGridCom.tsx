'use client';
import { cn } from '~/lib/utils';
import React, {
  ComponentPropsWithoutRef,
  FC,
  ReactNode,
  SVGProps,
} from 'react';
import { TimerReset, TicketCheck, Blocks, Sprout, Scaling } from 'lucide-react';

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
        'grid w-full auto-rows-[22rem] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3',
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
      'group relative flex overflow-hidden rounded-xl',

      'bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]',

      'dark:bg-black transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]',
      className
    )}
    {...props}
  >
    <div>{background}</div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300">
      {Icon && (
        <Icon className="mb-2 h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out dark:text-neutral-300" />
      )}

      <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
        {name}
      </h3>

      <p className="max-w-lg text-neutral-500 dark:text-neutral-400">
        {description}
      </p>
    </div>

    {href && (
      <div
        className={cn(
          'pointer-events-none absolute bottom-0 flex w-full transform-gpu flex-row items-center p-4 transition-all duration-300'
        )}
      >
        <a
          href={href}
          className="pointer-events-auto flex items-center text-sm font-semibold text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"
        >
          {cta}
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </a>
      </div>
    )}

    <div className="group-hover:bg-black/[.03] pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:dark:bg-neutral-800/10" />
  </div>
);

// --- Example Usage ---

const FileTextIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <line x1="10" y1="9" x2="8" y2="9" />
  </svg>
);
const IntegrationIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);
const ShareIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
    <polyline points="16 6 12 2 8 6" />
    <line x1="12" y1="2" x2="12" y2="15" />
  </svg>
);
const GlobeIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
);

type Feature = {
  Icon: any;
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
    className: 'lg:col-span-1',
    background: (
      <div className="absolute inset-0 bg-amber-200 dark:bg-amber-900/90" />
    ),
  },
  {
    Icon: TicketCheck,
    name: 'Workflow Zero Errori',
    description:
      'Ogni automazione è progettata per eseguire compiti ripetitivi con precisione assoluta. Elimina gli errori umani che costano tempo, clienti e credibilità.',
    href: '#',
    cta: "Scopri l'Affidabilità",
    className: 'lg:col-span-2',
    background: (
      <div className="absolute inset-0 bg-purple-200 dark:bg-purple-900/90" />
    ),
  },
  {
    Icon: Blocks,
    name: 'Integrazione Senza Sforzo',
    description:
      'Colleghiamo in modo fluido tutti i tuoi software (CRM, Email, Fogli di calcolo, ERP) usando n8n. Non servono sviluppatori, solo logiche efficaci.',
    href: '#',
    cta: 'Vedi le Piattaforme incluse',
    className: 'lg:col-span-2',
    background: (
      <div className="absolute inset-0 bg-blue-200 dark:bg-blue-900/90" />
    ),
  },
  {
    Icon: Scaling,
    name: 'Scalabilità Immediata',
    description:
      "Le automazioni non hanno picchi di stanchezza. Il tuo business può crescere in volume e complessità senza richiedere l'assunzione di nuovo personale per i compiti operativi.",
    href: '#',
    cta: 'Inizia a Scalare',
    className: 'lg:col-span-1',
    background: (
      <div className="absolute inset-0 bg-green-200 dark:bg-green-900/90" />
    ),
  },
];

export default function BentoGridCom() {
  return (
    <div className="w-full p-4 sm:p-6 lg:p-8">
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
