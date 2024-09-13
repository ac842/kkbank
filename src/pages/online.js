// src/pages/online.js
import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const OnlinePage = () => (
  <Layout>
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ color: '#003366', marginBottom: '1rem' }}>線上銀行</h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>NuoBank 的安全便捷網上銀行服務，讓您隨時隨地管理您的財務。</p>
      <h2 style={{ color: '#003366', marginBottom: '1rem' }}>我們的線上服務</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {['帳戶查詢', '轉帳', '繳費', '投資交易'].map((service, index) => (
          <li key={index} style={{ 
            background: '#f0f0f0', 
            padding: '1rem', 
            marginBottom: '1rem', 
            borderRadius: '5px' 
          }}>
            {service}
          </li>
        ))}
      </ul>
      <div style={{ marginTop: '2rem' }}>
        <Link to="/contact" style={{
          background: '#003366',
          color: 'white',
          padding: '0.5rem 1rem',
          borderRadius: '5px',
          textDecoration: 'none'
        }}>
          需要幫助？聯繫我們的客戶服務
        </Link>
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="線上銀行" />

export default OnlinePage