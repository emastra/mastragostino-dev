import React, { ReactNode } from 'react';
import { AlertTriangle, Clock, GitBranchPlus } from 'lucide-react';

// Pain point data with gradient backgrounds
const painPoints = [
  {
    Icon: AlertTriangle,
    title: 'Errori Costosi',
    description:
      'Un "copia-incolla" sbagliato, un\'email inviata al cliente errato, un dato non aggiornato. Piccoli errori manuali che costano tempo e credibilità.',
    background: (
      <div className="dark:to-error-950/30 absolute inset-0 bg-gradient-to-br from-error-50 to-error-100 dark:from-neutral-900" />
    ),
    iconColor: 'text-error-600 dark:text-error-400',
  },
  {
    Icon: Clock,
    title: 'Ore Perse in "Lavoro Spazzatura"',
    description:
      'Il tuo CRM, i fogli di calcolo, la fatturazione e le email non comunicano. Passi più tempo a fare da "ponte" umano che a lavorare sulla strategia.',
    background: (
      <div className="dark:to-warning-950/30 absolute inset-0 bg-gradient-to-br from-warning-50 to-warning-100 dark:from-neutral-900" />
    ),
    iconColor: 'text-warning-600 dark:text-warning-400',
  },
  {
    Icon: GitBranchPlus,
    title: 'Processi Lenti e Inefficaci',
    description:
      "Ogni nuovo cliente richiede 10 passaggi manuali. La gestione dei lead è un caos. Senti che potresti fare di più, ma sei bloccato dall'operatività.",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-800" />
    ),
    iconColor: 'text-neutral-700 dark:text-neutral-300',
  },
];

// Pain Point Card Component
interface PainPointCardProps {
  Icon: React.ElementType;
  title: string;
  description: string;
  background: ReactNode;
  iconColor: string;
}

function PainPointCard({
  Icon,
  title,
  description,
  background,
  iconColor,
}: PainPointCardProps) {
  return (
    <div
      className="
        dark:focus-within:ring-offset-neutral-950 group relative flex flex-col overflow-hidden rounded-xl border
        border-neutral-200 bg-white shadow-sm
        transition-all duration-300
        focus-within:ring-2 focus-within:ring-primary-500
        focus-within:ring-offset-2 hover:shadow-md dark:border-neutral-800
        dark:bg-neutral-900 dark:shadow-none dark:hover:shadow-lg
        dark:hover:shadow-primary-500/5
      "
    >
      {/* Background */}
      <div className="absolute inset-0">{background}</div>

      {/* Content */}
      <div className="relative z-10 flex flex-1 flex-col gap-1 p-8 transition-all duration-300">
        {/* Icon */}
        <Icon
          className={`mb-4 h-14 w-14 origin-left transform-gpu transition-all duration-200 ease-out group-hover:scale-105 ${iconColor}`}
        />

        {/* Title */}
        <h3 className="mb-3 text-2xl font-semibold text-neutral-900 dark:text-neutral-50">
          {title}
        </h3>

        {/* Description */}
        <p className="max-w-lg text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
      </div>

      {/* Hover overlay - subtle interaction feedback */}
      <div className="pointer-events-none absolute inset-0 rounded-xl bg-neutral-900/0 transition-colors duration-300 group-hover:bg-neutral-900/[0.02] dark:group-hover:bg-white/[0.02]" />
    </div>
  );
}

// Main Section Component
export default function ProblemSection() {
  return (
    <section className="w-full px-4 py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
            Ti riconosci in queste{' '}
            <span className="bg-gradient-to-r from-error-500 via-warning-500 to-neutral-600 bg-clip-text text-transparent">
              situazioni
            </span>
            ?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-neutral-500 dark:text-neutral-400">
            Questi problemi quotidiani frenano la crescita del tuo business
          </p>
        </div>

        {/* Pain Point Cards Grid */}
        <div className="grid w-full auto-rows-[24rem] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {painPoints.map((painPoint, index) => (
            <PainPointCard
              key={index}
              Icon={painPoint.Icon}
              title={painPoint.title}
              description={painPoint.description}
              background={painPoint.background}
              iconColor={painPoint.iconColor}
            />
          ))}
        </div>

        {/* Transition statement */}
        <div className="mt-20 text-center">
          <p className="text-xl font-medium text-neutral-700 dark:text-neutral-300 md:text-2xl">
            È ora di cambiare approccio.{' '}
            <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text font-semibold text-transparent">
              L'automazione è la risposta.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
