// src/pages/online.js
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const OnlinePage = () => (
  <Layout>
    <h1>線上銀行</h1>
    <p>安全便捷的網上銀行服務,讓您隨時隨地管理您的財務。</p>
    <ul>
      <li>帳戶查詢</li>
      <li>轉帳</li>
      <li>繳費</li>
      <li>投資交易</li>
    </ul>
  </Layout>
)

export const Head = () => <Seo title="線上銀行" />

export default OnlinePage