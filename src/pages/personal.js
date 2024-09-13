// src/pages/personal.js
import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const PersonalPage = () => (
  <Layout>
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ color: '#003366', marginBottom: '1rem' }}>個人銀行服務</h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>KKBank 為您提供全面的個人銀行服務，助您實現財務目標。</p>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '1rem' 
      }}>
        {[
          { title: '儲蓄帳戶', description: '安全可靠的儲蓄選擇' },
          { title: '信用卡', description: '靈活的支付和獎勵計劃' },
          { title: '個人貸款', description: '滿足您的資金需求' },
          { title: '投資理財', description: '專業的投資建議和產品' }
        ].map((service, index) => (
          <div key={index} style={{ 
            background: '#f0f0f0', 
            padding: '1rem', 
            borderRadius: '5px' 
          }}>
            <h3 style={{ color: '#003366', marginBottom: '0.5rem' }}>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '2rem' }}>
        <Link to="/contact" style={{
          background: '#003366',
          color: 'white',
          padding: '0.5rem 1rem',
          borderRadius: '5px',
          textDecoration: 'none'
        }}>
          了解更多或開戶
        </Link>
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="個人銀行" />

export default PersonalPage