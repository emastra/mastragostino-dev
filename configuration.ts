const configuration = {
  site: {
    name: 'Emiliano Mastragostino',
    // TODO: Improve description for SEO, include AI
    description:
      'Emiliano Mastragostino is an Automation Consultant specializing in optimizing workflows, building scalable solutions, and delivering efficient automation strategies.',
    themeColor: '#3b82f6', // blue color
    siteUrl: 'https://mastragostino.dev',
    siteName: 'Emiliano Mastragostino Portfolio',
    twitterHandle: '', // TODO: Replace with your actual Twitter handle
    githubHandle: 'emastra',
    language: 'it', // TODO: how to handle multiple languages?
  },
  blog: {
    maxReadMorePosts: 6,
  },
  production: process.env.NODE_ENV === 'production',
};

export default configuration;

/*
REGADING INTERNATIONALIZATION (i18n)

FROM copilot chat:
Two simple approaches depending on complexity:
- Quick/simple: keep a small translations map in configuration.ts and choose strings per page using router.locale or a helper. Good for small sites with a few strings.
- Proper i18n: enable Next.js i18n routing (next.config.js) and use a library (next-intl, next-i18next) or localized JSON files for scalable translations.

*/
