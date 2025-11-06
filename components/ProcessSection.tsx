import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Check } from 'lucide-react';
import BasicCard from './BasicCard';

// Extract that cards components that are in GradientCard.tsx? check!
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './GradientCard';

import {
  Zap,
  Clock,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Rocket,
  Crown,
  Search,
  FileText,
  Settings,
  TestTube,
  HeadphonesIcon,
  Quote,
  Star,
} from 'lucide-react';

const process = [
  {
    icon: Search,
    title: 'Analisi Strategica',
    description:
      'Ascoltiamo le tue sfide e identifichiamo i processi che ti costano più tempo e denaro.',
    number: '01',
  },
  {
    icon: FileText,
    title: 'Progettazione (Il Blueprint)',
    description:
      'Definiamo il flusso di lavoro ideale, lo strumento (n8n) e il ruolo di eventuali integrazioni AI.',
    number: '02',
  },
  {
    icon: Settings,
    title: 'Implementazione',
    description: 'Costruiamo le soluzioni su misura',
    number: '03',
  },
  {
    icon: TestTube,
    title: 'Test',
    description: 'Verifichiamo qualità e performance',
    number: '04',
  },
  {
    icon: HeadphonesIcon,
    title: 'Supporto',
    description: 'Ti accompagniamo nel lungo periodo',
    number: '05',
  },
];

const ProcessSection: React.FC = () => {
  return (
    <section className="bg-transparent from-muted/30 px-4 py-20 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="animate-fade-in mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
            Come <span className="gradient-text">Lavoro</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Un processo trasparente e collaudato, dal primo contatto al successo
            finale
          </p>
        </div>

        <CircularNumbers />

        <div className="mt-12 text-center">
          <Card className="border-primary/20 inline-block">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                <Clock className="text-primary mr-2 inline h-4 w-4" />
                Tempistiche medie: 2-8 settimane • Trasparenza totale su ogni
                fase
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>

    //
  );
};

export default ProcessSection;

const CircularNumbers = () => (
  <div className="mx-auto max-w-6xl">
    <div className="grid gap-x-16 gap-y-12 md:grid-cols-2">
      {process.map((benefit, i) => {
        const Icon = benefit.icon;

        return (
          <div key={i} className="group flex gap-6">
            <div className="flex-shrink-0">
              <div className="relative h-20 w-20">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border-4 border-blue-200 transition-colors group-hover:border-blue-400" />
                {/* Inner circle with number */}
                <div className="absolute inset-2 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-2xl font-bold text-white transition-transform group-hover:scale-110">
                  {i + 1}
                </div>
                {/* Icon overlay */}
                <div className="absolute -right-2 -top-2 rounded-full bg-white p-2 shadow-lg">
                  <Icon className="h-5 w-5 text-blue-600" />
                </div>
              </div>
            </div>

            <div className="flex-1 pt-2">
              <h3 className="mb-3 text-2xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                {benefit.title}
              </h3>
              <p className="leading-relaxed text-gray-600">
                {benefit.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

// Example 1: Card Stack Stepper
const CardStackStepper: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      icon: Search,
      title: 'Analisi Strategica',
      description:
        'Ascoltiamo le tue sfide e identifichiamo i processi che ti costano più tempo e denaro.',
      number: '01',
    },
    {
      icon: FileText,
      title: 'Progettazione (Il Blueprint)',
      description:
        'Definiamo il flusso di lavoro ideale, lo strumento (n8n) e il ruolo di eventuali integrazioni AI.',
      number: '02',
    },
    {
      icon: Settings,
      title: 'Implementazione',
      description: 'Costruiamo le soluzioni su misura',
      number: '03',
    },
    {
      icon: TestTube,
      title: 'Test',
      description: 'Verifichiamo qualità e performance',
      number: '04',
    },
    {
      icon: HeadphonesIcon,
      title: 'Supporto',
      description: 'Ti accompagniamo nel lungo periodo',
      number: '05',
    },
  ];

  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="relative flex h-96 items-center justify-center">
        {steps.map((step, idx) => {
          const offset = idx - currentStep;
          const isVisible = Math.abs(offset) <= 2;

          return isVisible ? (
            <div
              key={idx}
              className={`absolute w-full max-w-md rounded-2xl bg-white p-8 shadow-xl transition-all duration-500 ${
                offset === 0
                  ? 'z-30 scale-100 opacity-100'
                  : offset === 1
                  ? 'z-20 translate-x-8 translate-y-4 scale-95 opacity-60'
                  : offset === -1
                  ? 'z-20 -translate-x-8 translate-y-4 scale-95 opacity-60'
                  : offset === 2
                  ? 'z-10 translate-x-16 translate-y-8 scale-90 opacity-30'
                  : 'z-10 -translate-x-16 translate-y-8 scale-90 opacity-30'
              }`}
              style={{
                pointerEvents: offset === 0 ? 'auto' : 'none',
              }}
            >
              {/* <div className="mb-4 text-center text-6xl">{step.icon}</div> */}
              <step.icon className="mb-4 text-center text-6xl" />
              <h3 className="mb-2 text-center text-3xl font-bold">
                {step.title}
              </h3>
              <p className="mb-6 text-center text-gray-600">
                {step.description}
              </p>

              <div className="mb-6 flex justify-center gap-2">
                {steps.map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 rounded-full transition-all ${
                      i === currentStep
                        ? 'w-8 bg-blue-500'
                        : i < currentStep
                        ? 'w-2 bg-green-500'
                        : 'w-2 bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              {offset === 0 && (
                <div className="flex gap-3">
                  {currentStep > 0 && (
                    <button
                      onClick={() => setCurrentStep(currentStep - 1)}
                      className="flex-1 rounded-lg bg-gray-200 px-6 py-3 font-semibold"
                    >
                      Back
                    </button>
                  )}
                  <button
                    onClick={() =>
                      setCurrentStep(
                        Math.min(steps.length - 1, currentStep + 1)
                      )
                    }
                    className="flex-1 rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white"
                  >
                    {currentStep === steps.length - 1 ? 'Finish' : 'Continue'}
                  </button>
                </div>
              )}
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
};

// Example 1: Horizontal Stepper with Progress Bar
const HorizontalStepper: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      icon: Search,
      title: 'Analisi Strategica',
      description:
        'Ascoltiamo le tue sfide e identifichiamo i processi che ti costano più tempo e denaro.',
      number: '01',
    },
    {
      icon: FileText,
      title: 'Progettazione (Il Blueprint)',
      description:
        'Definiamo il flusso di lavoro ideale, lo strumento (n8n) e il ruolo di eventuali integrazioni AI.',
      number: '02',
    },
    {
      icon: Settings,
      title: 'Implementazione',
      description: 'Costruiamo le soluzioni su misura',
      number: '03',
    },
    {
      icon: TestTube,
      title: 'Test',
      description: 'Verifichiamo qualità e performance',
      number: '04',
    },
    {
      icon: HeadphonesIcon,
      title: 'Supporto',
      description: 'Ti accompagniamo nel lungo periodo',
      number: '05',
    },
  ];

  const nextStep = () =>
    setCurrentStep(Math.min(currentStep + 1, steps.length - 1));
  const prevStep = () => setCurrentStep(Math.max(currentStep - 1, 0));

  return (
    <div className="mx-auto w-full bg-background py-6">
      {/* Progress Bar */}
      <div className="relative mb-16">
        <div className="mb-2 flex justify-between">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center"
              style={{ width: `${100 / steps.length}%` }}
            >
              <div
                className={`z-10 flex h-10 w-10 items-center justify-center rounded-full font-semibold ${
                  idx < currentStep
                    ? 'bg-green-500 text-white'
                    : idx === currentStep
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-300 text-gray-600'
                }`}
              >
                {idx < currentStep ? <Check size={20} /> : idx + 1}
              </div>
              <div className="mt-2 text-center text-xs">
                <div className="font-semibold">{step.title}</div>
                {/* <div className="text-gray-500">{step.description}</div> */}
              </div>
            </div>
          ))}
        </div>

        <div
          className="absolute left-0 right-0 top-5 h-1 bg-gray-300"
          style={{ zIndex: 0 }}
        >
          <div
            className="h-full bg-blue-500 transition-all duration-300"
            style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
          />
        </div>
      </div>

      {/* Content Area */}
      <div className="mx-auto mb-8 min-h-32 max-w-2xl rounded-lg bg-secondary p-6 md:p-8">
        <h3 className="mb-2 text-xl font-semibold">
          {steps[currentStep].title}
        </h3>
        <p className="text-gray-600">{steps[currentStep].description}</p>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-around">
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          className="flex items-center gap-2 rounded-lg bg-gray-200 px-4 py-2 disabled:opacity-50"
        >
          <ChevronLeft size={20} /> Previous
        </button>
        <button
          onClick={nextStep}
          disabled={currentStep === steps.length - 1}
          className="flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 text-white disabled:opacity-50"
        >
          Next <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};
