import React from 'react';
import Carousel from './Carousel';

const WhatSection: React.FC = () => {
  return (
    <section className="px-4 py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full bg-accent-500/10 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400">
            Esempi pratici
          </span>
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
            Cosa sono le automazioni
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-neutral-600 dark:text-neutral-400 md:text-xl">
            Un'automazione collega i tuoi strumenti digitali e gestisce in
            automatico i passaggi ripetitivi. Tu decidi la logica, io la
            costruisco: così ogni processo funziona da solo, senza errori,
            mentre tu ti concentri su ciò che conta davvero.
          </p>
        </div>

        {/* Carousel */}
        <Carousel />

        {/* Closing Text */}
        <div className="mt-16 text-center">
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            Le automazioni non sono magia: sono logica applicata ai tuoi
            strumenti.
            <br />
            <span className="font-semibold text-neutral-900 dark:text-neutral-100">
              Una volta create, lavorano 24/7 — silenziose, affidabili, precise.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatSection;
