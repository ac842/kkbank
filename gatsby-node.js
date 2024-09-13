/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const path = require('path')

exports.createPages = async ({ actions }) => {
  const { createPage } = actions

  // 創建 using-dsg 頁面
  createPage({
    path: "/using-dsg",
    component: path.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  // 如果存在 src/pages/index.js，將其移動到 /home
  if (page.path === '/' && page.component.includes('src/pages/index.js')) {
    deletePage(page)
    createPage({
      ...page,
      path: '/home',
    })
  }

  // 確保 landing.js 作為根路徑
  if (page.component.includes('src/pages/landing.js')) {
    deletePage(page)
    createPage({
      ...page,
      path: '/',
    })
  }
}