import React from 'react';

// TODO: extract that cards components that are in GradientCard.tsx? check!
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
    title: 'Diagnosi',
    description: 'Analizziamo i tuoi processi attuali',
    number: '01',
  },
  {
    icon: FileText,
    title: 'Progetto',
    description: 'Definiamo la roadmap di automazione',
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
    // <section className="bg-transparent from-muted/30 py-20 px-4 sm:px-6 lg:px-8">
    //   <div className="container mx-auto max-w-7xl">
    //     <div className="animate-fade-in mb-12 text-center">
    //       <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
    //         Come <span className="gradient-text">Lavoro</span>
    //       </h2>
    //       <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
    //         Un processo trasparente e collaudato, dal primo contatto al successo
    //         finale
    //       </p>
    //     </div>

    //     <div className="relative grid gap-6 md:grid-cols-5">
    //       {process.map((step, index) => (
    //         <div
    //           key={step.title}
    //           className="animate-fade-in-up relative"
    //           style={{ animationDelay: `${index * 100}ms` }}
    //         >
    //           <Card className="h-full text-center transition-all duration-300 hover:shadow-lg">
    //             <CardContent className="pt-6">
    //               <div className="relative mb-6">
    //                 <div className="absolute -top-2 left-1/2 -translate-x-1/2 text-6xl font-bold text-muted/20">
    //                   {step.number}
    //                 </div>
    //                 <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-secondary/20">
    //                   <step.icon className="h-8 w-8 text-primary" />
    //                 </div>
    //               </div>
    //               <h3 className="mb-2 font-bold">{step.title}</h3>
    //               <p className="text-sm text-muted-foreground">
    //                 {step.description}
    //               </p>
    //             </CardContent>
    //           </Card>
    //           {index < process.length - 1 && (
    //             <div className="absolute top-1/3 -right-3 z-10 hidden md:block">
    //               <ArrowRight className="h-6 w-6 text-primary" />
    //             </div>
    //           )}
    //         </div>
    //       ))}
    //     </div>

    //     <div className="mt-12 text-center">
    //       <Card className="inline-block border-primary/20">
    //         <CardContent className="pt-6">
    //           <p className="text-sm text-muted-foreground">
    //             <Clock className="mr-2 inline h-4 w-4 text-primary" />
    //             Tempistiche medie: 2-8 settimane • Trasparenza totale su ogni
    //             fase
    //           </p>
    //         </CardContent>
    //       </Card>
    //     </div>
    //   </div>
    // </section>

    <section className="relative overflow-hidden py-32 px-4 sm:px-6 lg:px-8">
      {/* Background Decorations */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-3xl" />
      <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-gradient-to-tl from-secondary/10 to-transparent blur-3xl" /> */}

      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="animate-fade-in mb-20 text-center">
          {/* <Badge variant="secondary" className="mb-4">
            <Settings className="mr-1 h-3 w-3" />
            Il Metodo
          </Badge> */}
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
            Come <span className="gradient-text">Lavoro</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Un processo trasparente e collaudato, dal primo contatto al successo
            finale
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Connecting Line - Desktop */}
          <div className="absolute top-24 left-0 right-0 hidden h-1 bg-primary/30 lg:block" />

          <div className="grid gap-8 lg:grid-cols-5 lg:gap-6">
            {process.map((step, index) => (
              <div
                key={step.title}
                className="animate-fade-in-up group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Step Number - Large and Styled */}
                <div className="mb-6 flex justify-center">
                  <div className="relative">
                    {/* oltre al numero, visualizza la linea che connette i dots */}
                    <div className="gradient-text absolute -top-8 left-1/2 -translate-x-1/2 select-none text-8xl font-bold opacity-10">
                      {/* {step.number} */}
                    </div>
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-primary shadow-lg transition-all duration-500 group-hover:rotate-3 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-primary/20">
                      <step.icon className="h-10 w-10 text-white" />
                    </div>
                    {/* Connecting Dot */}
                    <div className="absolute -bottom-6 left-1/2 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-background bg-primary shadow-lg lg:block" />
                  </div>
                </div>

                {/* Content Card */}
                <Card className="relative overflow-hidden border-2 border-transparent bg-card/50 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <CardContent className="relative z-10 pt-6">
                    <h3 className="mb-3 text-xl font-bold transition-colors duration-300 group-hover:text-primary">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>

                {/* Arrow for Mobile */}
                {index < process.length - 1 && (
                  <div className="my-4 flex justify-center lg:hidden">
                    <div className="h-8 w-px bg-gradient-to-b from-primary/50 to-secondary/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Info Card */}
        <div className="animate-fade-in mt-20 text-center">
          <div className="inline-block">
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5 shadow-xl">
              <CardContent className="px-8 pt-6">
                <div className="flex flex-col items-center justify-center gap-6 text-sm sm:flex-row">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="font-semibold">
                      Tempistiche: 2-8 settimane
                    </span>
                  </div>
                  <div className="hidden h-6 w-px bg-border sm:block" />
                  <div className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="font-semibold">
                      Trasparenza totale su ogni fase
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
