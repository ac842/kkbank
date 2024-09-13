// src/pages/contact.js
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ContactPage = () => (
  <Layout>
    <h1>聯繫我們</h1>
    <p>電話：0800-123-456</p>
    <p>電子郵件：info@kkbank.com</p>
    <p>地址：台北市信義區金融街1號</p>
  </Layout>
)

export const Head = () => <Seo title="聯繫我們" />

export default ContactPage

