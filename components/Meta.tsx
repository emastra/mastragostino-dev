import Head from 'next/head';
import { useRouter } from 'next/router';
import configuration from '~/configuration';

interface MetaProps {
  title?: string;
  description?: string;
  structuredDataType?: string; // e.g., "AboutPage", "ContactPage"
  url?: string;
}

const Meta = ({
  title,
  description,
  structuredDataType = 'WebPage',
  url,
}: MetaProps) => {
  const router = useRouter();
  const siteUrl = configuration.site.siteUrl;

  if (!siteUrl) {
    throw new Error(`Please add the property siteUrl in the configuration`);
  }

  const pageUrl = url || `${siteUrl}${router.asPath}`;
  const pageTitle = title
    ? `${title} - ${configuration.site.name}`
    : configuration.site.name;
  const pageDescription = description || configuration.site.description;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': structuredDataType, // Page-specific type
    name: configuration.site.name,
    url: pageUrl,
    description: pageDescription,
    logo: `${siteUrl}/assets/images/favicon/favicon-150x150.png`,
    author: {
      '@type': 'Person', // Entity-specific type
      name: 'Your Name',
      url: siteUrl,
    },
  };

  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/assets/images/favicon/apple-touch-icon.png"
      />

      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/assets/images/favicon/favicon-16x16.png"
      />

      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/assets/images/favicon/favicon-32x32.png"
      />

      <link
        rel="icon"
        type="image/png"
        sizes="150x150"
        href="/assets/images/favicon/favicon-150x150.png"
      />

      <link rel="manifest" href="/assets/images/favicon/site.webmanifest" />

      <link
        rel="mask-icon"
        href="/assets/images/favicon/safari-pinned-tab.svg"
        color="#000000"
      />

      <link rel="dns-prefetch" href="//fonts.googleapis.com" />

      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin={'true'}
      />

      <link rel="shortcut icon" href="/assets/images/favicon/favicon.ico" />

      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content={configuration.site.themeColor} />

      <meta
        key="meta:description"
        name="description"
        content={pageDescription}
      />

      <title key="title">{pageTitle}</title>

      <meta key="og:title" property="og:title" content={pageTitle} />

      <meta property="og:site_name" content={configuration.site.name} />

      <meta
        key="og:description"
        property="og:description"
        content={pageDescription}
      />

      <meta key="twitter:title" property="twitter:title" content={pageTitle} />

      <meta property="twitter:card" content="summary_large_image" />

      <meta
        key="twitter:description"
        property="twitter:description"
        content={pageDescription}
      />

      <meta
        property="twitter:creator"
        content={configuration.site.twitterHandle}
      />

      <meta property="og:url" content={pageUrl} />

      <script
        key="ld:json"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
};

export default Meta;
