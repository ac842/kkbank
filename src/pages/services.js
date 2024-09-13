// src/pages/services.js
import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ServicesPage = () => (
  <Layout>
    <h1>我們的服務</h1>
    <p>NuoBank 提供全面的銀行服務，滿足您的各種金融需求。</p>
    <ul>
      <li><Link to="/personal">個人銀行</Link></li>
      <li><Link to="/business">企業銀行</Link></li>
      <li><Link to="/investment">投資服務</Link></li>
      <li>貸款</li>
      <li><Link to="/online">線上銀行</Link></li>
    </ul>
    <div style={{ marginTop: '2rem' }}>
      <Link to="/contact">需要幫助？聯繫我們</Link>
    </div>
  </Layout>
)

export const Head = () => <Seo title="服務" />

export default ServicesPage