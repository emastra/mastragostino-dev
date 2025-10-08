import '../styles/globals.css';
import type { AppProps } from 'next/app';
import ThemeProvider from '~/components/ThemeProvider';
import Header from '~/components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
