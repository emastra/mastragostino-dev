import type { NextPage } from 'next';

import configuration from '~/configuration';

import LayoutContainer from '~/components/LayoutContainer';
import Header from '~/components/Header';
import Meta from '~/components/Meta';
import HeroSection from '~/components/HeroSection';
import BenefitSection from '~/components/BenefitSection';
import SpotlightCard from '~/components/SpotlightCard';
import AboutMeSection from '~/components/AboutMeSection';
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
        <BenefitSection />
        <ServicesSection />
        <ProcessSection />
        <AboutMeSection />
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
