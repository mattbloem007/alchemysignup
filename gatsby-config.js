const config = require('./config');

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: config.siteTitle,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.manifestName,
        short_name: config.manifestShortName,
        start_url: config.pathPrefix || config.manifestStartUrl,
        background_color: config.manifestBackgroundColor,
        theme_color: config.manifestThemeColor,
        display: config.manifestDisplay,
        icon: config.manifestIcon, // This path is relative to the root of the site.
      },
    },
    {
       resolve: 'gatsby-plugin-mailchimp',
       options: {
           endpoint: 'https://netlify.us4.list-manage.com/subscribe/post?u=4bb341a70f699ab5f28026c9b&amp;id=4899fd0d31', // add your MC list endpoint here; see instructions below
       },
   },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
};
