import type { NextPage } from 'next';
import configuration from '~/configuration';
import LayoutContainer from '~/components/LayoutContainer';
import Meta from '~/components/Meta';
import HeroSection from '~/components/HeroSection';
import BenefitSection from '~/components/BenefitSection';
import AboutMeSection from '~/components/AboutMeSection';
import ServicesSection from '~/components/ServicesSection';
import ProcessSection from '~/components/ProcessSection';
import NewsletterSection from '~/components/NewsletterSection';
import ContactSection from '~/components/ContactSection';
import Footer from '~/components/Footer';

const Home: NextPage = () => {
  return (
    <>
      <Meta title="Home" description="Welcome to the homepage" />
      <HeroSection />
      <LayoutContainer>
        <BenefitSection />
        <ServicesSection />
        {/* <ProcessSection /> */}
        <AboutMeSection />
        <ContactSection />
      </LayoutContainer>
      <Footer />
    </>
  );
};

export default Home;
