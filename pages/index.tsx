import type { NextPage } from 'next';

import configuration from '~/configuration';

import LayoutContainer from '~/components/LayoutContainer';
import Header from '~/components/Header';
import Meta from '~/components/Meta';
import HeroSection from '~/components/HeroSection';
import SpotlightCard from '~/components/SpotlightCard';
import AboutMeSection from '~/components/AboutMeSection';
import BentoGridCom from '~/components/BentoGridCom';
import ServicesSection from '~/components/ServicesSection';
import ProcessSection from '~/components/ProcessSection';
import NewsletterSection from '~/components/NewsletterSection';
import Footer from '~/components/Footer';

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

const Home: NextPage = () => {
  return (
    <>
      <Meta title="Home" description="Welcome to the homepage" />
      <HeroSection />
      <LayoutContainer>
        {/* <BenefitSection /> */}
        <BentoGridCom />
        <ProcessSection />
        <AboutMeSection />
        <ServicesSection />
        <NewsletterSection />
      </LayoutContainer>
      <Footer />
    </>
  );
};

export default Home;

/////////////////////////////////////////////////

const benefits = [
  {
    icon: Zap,
    title: 'Risparmio di Tempo',
    description: 'Automatizza task ripetitivi e libera risorse preziose',
  },
  {
    icon: TrendingUp,
    title: 'Crescita Scalabile',
    description: 'Processi che crescono con la tua azienda',
  },
  {
    icon: Clock,
    title: 'Efficienza Aumentata',
    description: 'Riduci errori e ottimizza i workflow',
  },
  {
    icon: CheckCircle2,
    title: 'ROI Misurabile',
    description: 'Risultati tangibili e documentati',
  },
];

function BenefitSection() {
  return (
    <section className="py-16">
      {/* <div className="container mx-auto max-w-7xl"> */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit, index) => (
          <SpotlightCard>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20">
              <benefit.icon className="h-6 w-6 text-primary" />
            </div>

            <h3 className="mb-2 font-semibold">{benefit.title}</h3>
            <p className="text-sm text-muted-foreground">
              {benefit.description}
            </p>
          </SpotlightCard>
        ))}
      </div>
      {/* </div> */}
    </section>
  );
}
