import type { NextPage } from 'next';
import configuration from '~/configuration';
import LayoutContainer from '~/components/LayoutContainer';
import Meta from '~/components/Meta';
import HeroSection from '~/components/HeroSection';
import WhatSection from '~/components/WhatSection';
import BenefitSection from '~/components/BenefitSection';
import AboutMeSection from '~/components/AboutMeSection';
import ServicesSection from '~/components/ServicesSection';
import ProcessSection from '~/components/ProcessSection';
import NewsletterSection from '~/components/NewsletterSection';
import Footer from '~/components/Footer';

const Home: NextPage = () => {
  return (
    <>
      <Meta title="Home" description="Welcome to the homepage" />
      <HeroSection />
      <LayoutContainer>
        <WhatSection />
        <BenefitSection />
        <ServicesSection />
        <AboutMeSection />
        <NewsletterSection />
      </LayoutContainer>
      <Footer />
    </>
  );
};

export default Home;
