/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Zoe's Graph Blog`,
    siteUrl: `https://www.zoesgraphblog.com`,
    firstPublishedDate: `2024-01-12`
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-PMFEFVB5SM",
        head: true, // Place the script in the head of the document
        anonymize: true, // Anonymize IP addresses
      },
    },
  ],
}
