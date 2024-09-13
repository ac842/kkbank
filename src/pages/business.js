// src/pages/business.js
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BusinessPage = () => (
  <Layout>
    <h1>商業銀行服務</h1>
    <ul>
      <li>企業帳戶</li>
      <li>商業貸款</li>
      <li>貿易融資</li>
      <li>現金管理</li>
    </ul>
  </Layout>
)

export const Head = () => <Seo title="商業銀行" />

export default BusinessPage

