import type { GatsbyConfig } from 'gatsby'
import path from 'path'

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Poppins', 'Droid Serif'],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, 'src', 'images'),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `WaaromOpl`,
        path: `${__dirname}/src/WaaromOpl`
      }
    },
    {
      resolve: `gatsby-transformer-excel`,
      options: {
        raw: false,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        forceBase64Format: `png`,
        defaults: {
          formats: ['png'],
        },
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-remark`
  ],
}

export default config
