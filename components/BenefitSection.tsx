import React from 'react';
import BentoGridCom from './BentoGridCom';

const BenefitSection: React.FC = () => {
  return (
    <section className="benefit-section">
      <div className="container mx-auto max-w-7xl">
        <div className="animate-fade-in mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
            I <span className="gradient-text">Benefici</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Perché automatizzare con me?
          </p>
        </div>
      </div>
      <BentoGridCom />
    </section>
  );
};

export default BenefitSection;
