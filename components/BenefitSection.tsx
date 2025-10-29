import React from 'react';
import BentoGridCom from './BentoGridCom';
import Carousel from './Carousel';

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
