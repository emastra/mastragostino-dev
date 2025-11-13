'use client';
import { cn } from '~/lib/utils';
import React, {
  ReactNode,
  FC,
  ComponentPropsWithoutRef,
  SVGProps,
  useState,
} from 'react';
import {
  TimerReset,
  ShieldCheck,
  BanIcon,
  SmileIcon,
  BlocksIcon,
  Sparkle,
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
            I vantaggi dell'automazione
          </span>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Risultati concreti, ogni giorno
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            Automatizzare non è tecnologia fine a sé stessa. È un modo per
            lavorare meglio, ridurre stress e crescere con più ordine e meno
            fatica.
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
    name: 'Più tempo, meno routine',
    description:
      'Le attività ripetitive vengono gestite in automatico. Recuperi ore ogni settimana e ti concentri su ciò che fa davvero la differenza.',
    // href: '#',
    // cta: 'Scopri come velocizzare i tuoi flussi di lavoro',
    // className: 'md:col-span-1',
    bgColor: 'success',
  },
  {
    Icon: BanIcon,
    name: 'Zero errori, zero dimenticanze',
    description:
      'Le automazioni seguono le regole che definiamo insieme. Ogni passaggio è preciso, tracciabile e affidabile.',
    // href: '#',
    // cta: 'Scopri come rendere i tuoi dati affidabili',
    // className: 'md:col-span-1',
    bgColor: 'amber',
  },
  {
    Icon: BlocksIcon,
    name: 'Strumenti che si parlano',
    description:
      'CRM, email, gestionali, fogli di calcolo: tutto lavora in sincronia. Niente più copia-incolla o passaggi manuali.',
    // href: '#',
    // cta: 'Connetti i tuoi strumenti preferiti senza sforzo',
    // className: 'md:col-span-1',
    bgColor: 'violet',
  },
  {
    Icon: SmileIcon,
    name: 'Più professionalità percepita',
    description:
      "Processi fluidi = esperienza migliore per clienti e collaboratori. L'organizzazione diventa un vantaggio competitivo.",
    // href: '#',
    // cta: 'Scopri come elevare la tua immagine professionale',
    // className: 'md:col-span-1',
    bgColor: 'primary',
  },
  {
    Icon: Sparkle,
    name: "Pronto per l'AI",
    description:
      "Digitalizzando e automatizzando i tuoi processi, crei le basi perfette per integrare l'Intelligenza Artificiale in modo utile e sostenibile.",
    bgColor: 'success',
  },
  {
    Icon: ShieldCheck,
    name: 'Controllo e chiarezza sui processi',
    description:
      'Ogni flusso è chiaro e monitorabile: sai sempre cosa succede, dove e quando. Il tuo business funziona anche quando non sei davanti allo schermo.',
    bgColor: 'amber',
  },
];

function BenefitsGrid() {
  const [showMore, setShowMore] = useState(false);
  const items = showMore ? features : features.slice(0, 4);

  return (
    <div className="w-full py-8 md:px-6">
      <div className="mx-auto max-w-7xl">
        {/* era 22rem qunado c'era lo spacer + card cta */}
        <div className="grid w-full auto-rows-[16rem] grid-cols-1 gap-4 md:grid-cols-2">
          {items.map((feature, idx) => (
            <BenefitCard key={`${feature.name}-${idx}`} {...feature} />
          ))}
        </div>

        {!showMore && (
          <div className="mt-6 flex justify-center">
            <button
              type="button"
              onClick={() => setShowMore((v) => !v)}
              className="inline-flex items-center rounded-md px-4 py-2 text-xs font-semibold text-muted-foreground hover:bg-neutral-100 hover:text-foreground hover:dark:bg-neutral-900"
              aria-expanded={showMore}
            >
              Mostra altri benefici
            </button>
          </div>
        )}
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
