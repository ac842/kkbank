// src/pages/online.js
import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const OnlinePage = () => (
  <Layout>
    <h1>線上銀行</h1>
    <p>KKBank 的安全便捷網上銀行服務，讓您隨時隨地管理您的財務。</p>
    <ul>
      <li>帳戶查詢</li>
      <li>轉帳</li>
      <li>繳費</li>
      <li>投資交易</li>
    </ul>
    <div style={{ marginTop: '2rem' }}>
      <Link to="/contact">需要幫助？聯繫我們的客戶服務</Link>
    </div>
  </Layout>
)

export const Head = () => <Seo title="線上銀行" />

export default OnlinePage