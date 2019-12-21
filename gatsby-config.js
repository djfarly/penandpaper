require('dotenv').config({
  path: '.env',
});
const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Pen&Paper — Spotify Playlists for Roleplaying Sessions`,
    description: `Background game music for pen and paper, tabletop or writing sessions. Hand picked to not contain anything distracting.`,
    author: `@djfarly`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-typescript-checker',
      options: { tsconfig: path.resolve(__dirname, './tsconfig.json') },
    },
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-polyfill-io',
      options: {
        features: [
          'HTMLPictureElement',
          'WeakSet',
          'String.prototype.startsWith',
          'Array.prototype.includes',
          'String.prototype.endsWith',
          'Array.from',
          'Promise',
          'Object.entries',
          'IntersectionObserver',
        ],
      },
    },
    'gatsby-plugin-offline',
  ],
};
