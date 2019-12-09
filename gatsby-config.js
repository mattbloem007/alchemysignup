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
            endpoint: 'https://openinglotus.us11.list-manage.com/subscribe/post?u=9cbcbcf27f6ab9d34faa34d6a&amp;id=697dfbc5d0', // add your MC list endpoint here; see instructions below
        },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
};
