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
    icon: Sparkles,
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

      <div className="mt-16 text-center">
        <p className="mb-4 text-muted-foreground">
          Ogni progetto è unico. Posso creare soluzioni completamente
          personalizzate.
        </p>

        <button className="rounded-lg border border-slate-200 bg-slate-50 px-8 py-3 font-medium text-slate-900 shadow-lg backdrop-blur-sm transition-all duration-100 hover:bg-slate-100 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:text-slate-50 dark:hover:bg-slate-800">
          Richiedi Preventivo Personalizzato
        </button>
      </div>
    </section>
  );
};

export default ServicesSection;
