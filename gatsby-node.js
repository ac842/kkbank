/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  const { createPage } = actions

  // 創建 using-dsg 頁面
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })

  // 創建新的登陸頁面作為根路徑
  createPage({
    path: '/',
    component: require.resolve('./src/pages/landing.js'),
  })
}

/**
 * @type {import('gatsby').GatsbyNode['onCreatePage']}
 */
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  // 將原來的首頁移動到 /home 路徑
  if (page.path === '/') {
    deletePage(page)
    createPage({
      ...page,
      path: '/home',
    })
  }
}