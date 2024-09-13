// src/pages/investment.js
import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const InvestmentPage = () => (
  <Layout>
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ color: '#003366', marginBottom: '1rem' }}>投資服務</h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>在 NuoBank，我們提供多元化的投資方案，幫助您實現財務目標並確保未來的財務安全。</p>
      
      <h2 style={{ color: '#003366', marginBottom: '1rem' }}>我們的投資產品</h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
        gap: '1rem',
        marginBottom: '2rem'
      }}>
        {['股票投資', '債券基金', '外匯交易', '共同基金', '退休計劃'].map((product, index) => (
          <div key={index} style={{ 
            background: '#f0f8ff', 
            padding: '1rem', 
            borderRadius: '8px',
            textAlign: 'center'
          }}>
            {product}
          </div>
        ))}
      </div>

      <h2 style={{ color: '#003366', marginBottom: '1rem' }}>為什麼選擇 NuoBank 的投資服務?</h2>
      <ul style={{ marginBottom: '2rem' }}>
        <li>專業的投資顧問團隊</li>
        <li>多元化的投資組合選擇</li>
        <li>先進的風險管理工具</li>
        <li>靈活的投資方案，適合不同風險承受能力</li>
        <li>全天候的市場分析和投資建議</li>
      </ul>

      <h2 style={{ color: '#003366', marginBottom: '1rem' }}>開始您的投資之旅</h2>
      <p style={{ marginBottom: '1rem' }}>無論您是初次投資者還是經驗豐富的投資人，我們都有適合您的投資方案。</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <Link to="/contact" style={buttonStyle}>聯繫投資顧問</Link>
        <Link to="/online" style={buttonStyle}>開始線上投資</Link>
      </div>

      <div style={{ textAlign: 'center' }}>
        <Link to="/services" style={{
          color: '#003366',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}>返回所有服務</Link>
      </div>
    </div>
  </Layout>
)

const buttonStyle = {
  background: '#003366',
  color: 'white',
  padding: '0.8rem 1.5rem',
  borderRadius: '5px',
  textDecoration: 'none',
  fontWeight: 'bold'
}

export const Head = () => <Seo title="投資服務" />

export default InvestmentPage