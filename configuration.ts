const configuration = {
  site: {
    name: 'Emiliano Mastragostino',
    description:
      'Emiliano Mastragostino is an Automation Consultant specializing in optimizing workflows, building scalable solutions, and delivering efficient automation strategies.',
    themeColor: '#007acc', // TODO: Updated to a professional blue color
    siteUrl: 'https://mastragostino.dev',
    siteName: 'Emiliano Mastragostino Portfolio',
    twitterHandle: '', // TODO: Replace with your actual Twitter handle
    githubHandle: 'emastra',
    language: 'en', // TODO: Choose default language!
  },
  blog: {
    maxReadMorePosts: 6,
  },
  production: process.env.NODE_ENV === 'production',
};

export default configuration;
