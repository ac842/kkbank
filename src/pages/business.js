// src/pages/business.js
import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BusinessPage = () => (
  <Layout>
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ color: '#003366', marginBottom: '1rem' }}>商業銀行服務</h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>nuobank 為您的企業提供全面的金融解決方案，助力您的業務成長。</p>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '1rem',
        marginBottom: '2rem'
      }}>
        {['企業帳戶', '商業貸款', '貿易融資', '現金管理'].map((service, index) => (
          <div key={index} style={{ 
            background: '#f0f8ff', 
            padding: '1rem', 
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            <h3 style={{ color: '#003366', marginBottom: '0.5rem' }}>{service}</h3>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center' }}>
        <Link to="/contact" style={{
          background: '#003366',
          color: 'white',
          padding: '0.8rem 1.5rem',
          borderRadius: '5px',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}>聯繫我們了解更多</Link>
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="商業銀行" />

export default BusinessPage