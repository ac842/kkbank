// src/pages/about.js
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
  <Layout>
    <h1>關於 KKBank</h1>
    <p>KKBank 是您值得信賴的金融合作夥伴。我們致力於提供卓越的銀行服務,幫助個人和企業實現財務目標。</p>
  </Layout>
)

export const Head = () => <Seo title="關於我們" />

export default AboutPage

