/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `NuoBank`,
    description: `您值得信賴的金融合作夥伴。NuoBank 提供全面的個人和商業銀行服務,幫助您實現財務目標。`,
    author: `@NuoBank`,
    siteUrl: `https://www.NuoBank.com/`,
  },
  plugins: [
    `gatsby-plugin-image`,
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
        name: `NuoBank-website`,
        short_name: `NuoBank`,
        start_url: `/`,
        background_color: `#003366`,
        theme_color: `#003366`,
        display: `minimal-ui`,
        icon: `src/images/NuoBank-icon.png`, // 您需要創建這個圖標文件
      },
    },
  ],
}