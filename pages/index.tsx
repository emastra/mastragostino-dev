import type { NextPage } from 'next';

import configuration from '~/configuration';

import LayoutContainer from '~/components/LayoutContainer';
import Header from '~/components/Header';
import Meta from '~/components/Meta';

const Home: NextPage = () => {
  return (
    <>
      <Meta title="Home" description="Welcome to the homepage" />
      <Header />

      <LayoutContainer>
        <div
          className={'align-center flex h-full flex-col justify-center pb-32'}
        >
          <div className={'my-8'}>
            <h1 className={'text-6xl font-extrabold'}>
              {configuration.site.siteName}
            </h1>
            <p className={'mt-4 text-xl'}>
              Welcome to my personal website. Explore my blog, projects, and
              more!
            </p>
          </div>
        </div>
      </LayoutContainer>
    </>
  );
};

export default Home;
