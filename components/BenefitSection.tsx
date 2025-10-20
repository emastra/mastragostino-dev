import React from 'react';
import BentoGridCom from './BentoGridCom';

const BenefitSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-7xl">
        <div className="animate-fade-in mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
            I <span className="gradient-text">Benefici</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Smetti di sprecare risorse in attività ripetitive. Investi il tuo
            tempo dove conta davvero.
          </p>
        </div>
      </div>
      <BentoGridCom />
    </section>
  );
};

export default BenefitSection;
