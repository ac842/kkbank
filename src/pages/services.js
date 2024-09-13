// src/pages/services.js
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ServicesPage = () => (
  <Layout>
    <h1>我們的服務</h1>
    <ul>
      <li>個人銀行</li>
      <li>企業銀行</li>
      <li>投資服務</li>
      <li>貸款</li>
      <li>線上銀行</li>
    </ul>
  </Layout>
)

export const Head = () => <Seo title="服務" />

export default ServicesPage

