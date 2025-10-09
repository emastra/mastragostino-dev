import type { NextPage } from 'next';

import configuration from '~/configuration';

import LayoutContainer from '~/components/LayoutContainer';
import Header from '~/components/Header';
import Meta from '~/components/Meta';
import HeroSection from '~/components/HeroSection';

const Home: NextPage = () => {
  return (
    <>
      <Meta title="Home" description="Welcome to the homepage" />

      <LayoutContainer>
        <HeroSection />
      </LayoutContainer>
    </>
  );
};

export default Home;
