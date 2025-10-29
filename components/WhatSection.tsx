import React from 'react';
import Carousel from './Carousel';

const WhatSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-7xl">
        <div className="animate-fade-in mb-12 text-center">
          <span
            className="bg-accent/10 text-accent-foreground mb-4 inline-block rounded-full px-3 py-1 text-sm font-semibold uppercase tracking-wider"
            aria-hidden="false"
            role="status"
          >
            Esempi pratici
          </span>
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
            Cosa sono le automazioni
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Un’automazione è un flusso che collega i tuoi strumenti digitali e
            fa in automatico ciò che oggi richiede tempo, attenzione e passaggi
            manuali.
          </p>
        </div>
      </div>
      <Carousel />
    </section>
  );
};

export default WhatSection;
