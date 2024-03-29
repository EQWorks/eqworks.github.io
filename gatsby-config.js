require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: `EQ Works`,
    author: {
      name: `EQ Works`,
      summary: `Unleash the power of location behaviour data and step into the future of advertising. Leverage our first-party audience data to uncover deep insights about your consumers' digital journey. Actively engage with your audience by mapping real- world location behaviour into consumable and actionable data.`
    },
    description: `Unleash the power of location behaviour data and step into the future of advertising. Leverage our first-party audience data to uncover deep insights about your consumers' digital journey. Actively engage with your audience by mapping real- world location behaviour into consumable and actionable data.`,
    siteUrl: `https://www.eqworks.com/`,
    social: {
      twitter: `eqworkscorp`
    }
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svgs/
        }
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-recaptcha`,

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `'UA-176486966-1`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `EQ Works Demo Page`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#3232f5`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_API_TOKEN
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
