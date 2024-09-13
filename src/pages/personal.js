// src/pages/personal.js
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const PersonalPage = () => (
  <Layout>
    <h1>個人銀行服務</h1>
    <ul>
      <li>儲蓄帳戶</li>
      <li>信用卡</li>
      <li>個人貸款</li>
      <li>投資理財</li>
    </ul>
  </Layout>
)

export const Head = () => <Seo title="個人銀行" />

export default PersonalPage

