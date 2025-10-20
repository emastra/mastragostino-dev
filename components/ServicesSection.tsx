import { ReactNode } from 'react';
import GradientCard from './GradientCard';
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Card,
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

const services = [
  {
    name: 'Pacchetto Base',
    icon: Zap,
    price: 'da €299',
    description:
      "L'ideale per sbarazzarsi immediatamente delle attività ripetitive con poco valore. Inizia a recuperare tempo da subito.",
    features: [
      '2-3 Automazioni Semplici',
      'Risparmio Tempo Immediato',
      'Focus su Task Operativi',
      'Briefing di Avvio Rapido',
    ],
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    name: 'Pacchetto Growth',
    icon: Rocket,
    price: 'da €499',
    description:
      "Per chi ha bisogno di automatizzare processi complessi con logiche condizionali, riducendo drasticamente l'errore umano.",
    features: [
      'Workflow Multi-Step e Logiche Complesse',
      'Integrazioni Multiple e Sincronizzate',
      'Monitoraggio Errori e Affidabilità',
      'AI Opzionale per Task Intelligenti',
    ],
    color: 'from-purple-500/20 to-pink-500/20',
    featured: false,
  },
  {
    name: 'Pacchetto Premium',
    icon: Crown,
    price: 'Personalizzato',
    description:
      'Per le PMI che cercano integrazione completa, automazioni predittive e monitoraggio proattivo',
    features: [
      'Workflow Complessi e Strategici',
      'Monitoraggio e Sicurezza Avanzata',
      'AI Come Agente Strategico/Decisore',
      'Affiancamento e Ottimizzazione Continua',
    ],
    color: 'from-orange-500/20 to-red-500/20',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="animate-fade-in mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
            Automazioni <span className="gradient-text">Scalabili</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Dal sollievo immediato alla strategia automatizzata. Ogni pacchetto
            è scalabile e concentrato sul tuo risultato.
          </p>
        </div>
      </div>
      <div className="grid gap-8 py-6 md:grid-cols-3">
        {services.map((service, index) => (
          // <Card
          //   key={service.name}
          //   className={`animate-fade-in-up relative transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
          //     service.featured ? 'border-2 border-primary shadow-xl' : ''
          //   }`}
          //   style={{ animationDelay: `${index * 150}ms` }}
          // >
          //   {service.featured && (
          //     <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-1 text-sm font-semibold text-white">
          //       Consigliato
          //     </div>
          //   )}
          //   <CardHeader>
          //     <div
          //       className={`h-16 w-16 rounded-xl bg-gradient-to-br ${service.color} mb-4 flex items-center justify-center`}
          //     >
          //       <service.icon className="h-8 w-8 text-primary" />
          //     </div>
          //     <CardTitle className="text-2xl">{service.name}</CardTitle>
          //     <CardDescription className="text-lg font-semibold text-primary">
          //       {service.price}
          //     </CardDescription>
          //     <p className="mt-2 text-sm text-muted-foreground">
          //       {service.description}
          //     </p>
          //   </CardHeader>
          //   <CardContent>
          //     <ul className="mb-6 space-y-3">
          //       {service.features.map((feature) => (
          //         <li key={feature} className="flex items-start space-x-2">
          //           <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
          //           <span className="text-sm">{feature}</span>
          //         </li>
          //       ))}
          //     </ul>
          //     <button className="w-full">Scopri di Più</button>
          //   </CardContent>
          // </Card>
          <GradientCard>
            <CardHeader>
              <div
                className={`h-16 w-16 rounded-xl bg-gradient-to-br ${service.color} mb-4 flex items-center justify-center`}
              >
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">{service.name}</CardTitle>
              <p className="text-lg font-semibold text-primary">
                {service.price}
              </p>
              <CardDescription className="mt-2 text-sm">
                {service.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="mb-6 space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start space-x-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              {/* <Button
                variant={service.featured ? 'hero' : 'outline'}
                className="w-full"
              >
                Scopri di Più
              </Button> */}
              <button className="w-full">Scopri di Più</button>
            </CardContent>
          </GradientCard>
        ))}
      </div>

      {/* AI Integration Sub-section */}
      <div
        className="animate-fade-in-up relative mt-16 overflow-hidden rounded-3xl border-2 border-primary/20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10"
        style={{ animationDelay: '450ms' }}
      >
        <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-gradient-to-tl from-secondary/20 to-transparent blur-3xl" />

        <div className="relative z-10 p-8 md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary shadow-lg">
                  <Sparkles className="h-7 w-7 text-white" />
                </div>
                <Badge>Powered by ChatGPT, Gemini o Claude</Badge>
              </div>
              <h3 className="gradient-text mb-4 text-3xl font-bold">
                Intelligenza Artificiale Integrata
              </h3>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <button>
                Scopri le Potenzialità AI
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Zap, label: 'Automazione Intelligente' },
                { icon: TrendingUp, label: 'Analisi Predittiva' },
                { icon: Rocket, label: 'Ottimizzazione Real-Time' },
                { icon: Sparkles, label: 'Insights Avanzati' },
              ].map((item, idx) => (
                <div
                  key={item.label}
                  className="group rounded-2xl border border-border bg-background/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl"
                >
                  <item.icon className="mb-3 h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                  <p className="text-sm font-semibold">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom Solutions Sub-section */}
      <div
        className="animate-fade-in-up relative mt-12"
        style={{ animationDelay: '600ms' }}
      >
        <div className="grid gap-6 md:grid-cols-3">
          <div className="group relative overflow-hidden rounded-2xl border-2 border-border bg-gradient-to-br from-secondary/20 to-accent/20 p-8 transition-all duration-500 hover:border-secondary/50 hover:shadow-2xl md:col-span-2">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute top-4 right-4 h-32 w-32 rounded-full bg-gradient-to-br from-secondary/30 to-transparent blur-2xl transition-transform duration-700 group-hover:scale-150" />

            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-4 py-2 backdrop-blur-sm">
                <Crown className="h-4 w-4 text-secondary" />
                <span className="text-sm font-semibold">
                  Soluzione Personalizzata
                </span>
              </div>

              <h3 className="mb-4 text-3xl font-bold">
                Progetto <span className="gradient-text">Su Misura</span>
              </h3>
              <p className="mb-6 max-w-xl leading-relaxed text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>

              <div className="mb-6 flex flex-wrap gap-3">
                {[
                  'Analisi Completa',
                  'Roadmap Dedicata',
                  'Supporto Prioritario',
                ].map((tag) => (
                  <Badge>{tag}</Badge>
                ))}
              </div>

              <button>
                Richiedi Preventivo
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border-2 border-border bg-card p-6 transition-shadow duration-300 hover:shadow-lg">
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <h4 className="mb-2 text-lg font-bold">Progetti Unici</h4>
              <p className="mb-6 text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Successo</span>
                <span className="gradient-text text-2xl font-bold">98%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Progetti</span>
                <span className="gradient-text text-2xl font-bold">50+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

function Badge({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400 backdrop-blur-sm">
      {children}
    </div>
  );
}
