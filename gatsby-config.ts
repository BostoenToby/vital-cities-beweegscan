import type { GatsbyConfig } from 'gatsby'
import path from 'path'

require("dotenv").config({
  path: `.env`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-source-google-spreadsheet`,
      options: {
        spreadsheetId: process.env.SPREADSHEET_ID,
        spreadsheetName: process.env.SPREADSHEET_NAME,
        typePrefix: 'GS',
        credentials: {
          "type": process.env.PROJECT_TYPE,
          "project_id": process.env.PROJECT_ID,
          "private_key_id": process.env.PRIVATE_KEY_ID,
          "private_key": process.env.PRIVATE_KEY?.replace(/\\n/gm, "\n"),
          "client_email": process.env.CLIENT_EMAIL,
          "client_id": process.env.CLIENT_ID,
          "auth_uri": process.env.AUTH_URI,
          "token_uri": process.env.TOKEN_URI,
          "auth_provider_x509_cert_url": process.env.AUTH_PROVIDER_X509_CERT_URL,
          "client_x509_cert_url": process.env.CLIENT_X509_CERT_URL
        }
      }
    },
    {
      resolve: `gatsby-source-google-spreadsheet`,
      options: {
        spreadsheetId: process.env.SPREADSHEET_ID_WRITE,
        spreadsheetName: process.env.SPREADSHEET_NAME_WRITE,
        typePrefix: 'GS',
        credentials: {
          "type": process.env.PROJECT_TYPE,
          "project_id": process.env.PROJECT_ID,
          "private_key_id": process.env.PRIVATE_KEY_ID,
          "private_key": process.env.PRIVATE_KEY?.replace(/\\n/gm, "\n"),
          "client_email": process.env.CLIENT_EMAIL,
          "client_id": process.env.CLIENT_ID,
          "auth_uri": process.env.AUTH_URI,
          "token_uri": process.env.TOKEN_URI,
          "auth_provider_x509_cert_url": process.env.AUTH_PROVIDER_X509_CERT_URL,
          "client_x509_cert_url": process.env.CLIENT_X509_CERT_URL
        }
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Poppins', 'Raleway&display=swap', 'Droid Serif'],
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
        name: `intbron`,
        path: `${__dirname}/src/cms`,
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
