// src/pages/business.js
import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BusinessPage = () => (
  <Layout>
    <h1>商業銀行服務</h1>
    <p>KKBank 為您的企業提供全面的金融解決方案，助力您的業務成長。</p>
    <ul>
      <li>企業帳戶</li>
      <li>商業貸款</li>
      <li>貿易融資</li>
      <li>現金管理</li>
    </ul>
    <div style={{ marginTop: '2rem' }}>
      <Link to="/contact">聯繫我們了解更多</Link>
    </div>
  </Layout>
)

export const Head = () => <Seo title="商業銀行" />

export default BusinessPage