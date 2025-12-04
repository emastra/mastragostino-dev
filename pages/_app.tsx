import '../styles/globals.css';
import type { AppProps } from 'next/app';
import ThemeProvider from '~/components/ThemeProvider';
import Header from '~/components/Header';
import Footer from '~/components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  const hideLayout = (Component as any).hideLayout || false;

  return (
    <ThemeProvider>
      {!hideLayout && <Header />}
      <Component {...pageProps} />
      {!hideLayout && <Footer />}
    </ThemeProvider>
  );
}

export default MyApp;
