// src/pages/index.js
import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    {/* 英雄區域 */}
    <div style={{
      background: 'linear-gradient(135deg, #003366 0%, #0066cc 100%)',
      color: 'white',
      padding: '4rem 2rem',
      borderRadius: '10px',
      marginBottom: '2rem',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>歡迎來到 NuoBank</h1>
      <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
        您信賴的金融合作夥伴，為您的未來提供安全、創新的金融解決方案。
      </p>
    </div>

    {/* 關於我們 */}
    <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
      <h2 style={{ color: '#003366', marginBottom: '1rem' }}>關於NuoBankk</h2>
      <p style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
      NuoBanknk 成立於1990年，30多年來一直致力於為台灣民眾和企業提供卓越的金融服務。
        我們的使命是通過創新的金融產品和個性化的服務，幫助客戶實現財務目標，共同創造美好未來。
      </p>
    </div>

    {/* 我們的服務 */}
    <h2 style={{ color: '#003366', textAlign: 'center', marginBottom: '2rem' }}>我們的服務</h2>
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
      gap: '2rem',
      marginBottom: '3rem'
    }}>
      <ServiceCard 
        title="個人銀行" 
        description="為您的未來做好準備，探索我們的儲蓄和投資方案。" 
        link="/personal"
      />
      <ServiceCard 
        title="商業銀行" 
        description="幫助您的企業成長，提供全面的商業金融解決方案。" 
        link="/business"
      />
      <ServiceCard 
        title="投資服務" 
        description="專業的投資建議和多元化的投資組合選擇。" 
        link="/investment"
      />
      <ServiceCard 
        title="線上銀行" 
        description="隨時隨地管理您的賬戶，安全便捷的網上銀行服務。" 
        link="/online"
      />
    </div>

    {/* 為什麼選擇我們 */}
    <div style={{ 
      background: '#f0f8ff', 
      padding: '3rem 2rem', 
      borderRadius: '10px',
      marginBottom: '3rem'
    }}>
      <h2 style={{ color: '#003366', textAlign: 'center', marginBottom: '2rem' }}>為什麼選NuoBankank</h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '2rem' 
      }}>
        <FeatureCard title="安全可靠" description="採用先進的安全技術，保護您的資產和隱私" />
        <FeatureCard title="創新服務" description="持續推出創新的金融產品，滿足您不斷變化的需求" />
        <FeatureCard title="專業團隊" description="經驗豐富的金融專家，為您提供專業的建議和服務" />
        <FeatureCard title="便捷體驗" description="無論線上還是線下，都能享受便捷的銀行服務" />
      </div>
    </div>

    {/* 號召行動 */}
    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
      <h2 style={{ color: '#003366', marginBottom: '1rem' }}>開始您的 NuoBank 之旅</h2>
      <p style={{ marginBottom: '1rem' }}>無論您是個人還是企業，我們都有適合您的金融解決方案。</p>
      <Link to="/contact" style={{
        background: '#003366',
        color: 'white',
        padding: '0.8rem 1.5rem',
        borderRadius: '5px',
        textDecoration: 'none',
        fontWeight: 'bold'
      }}>聯繫我們</Link>
    </div>
  </Layout>
)

const ServiceCard = ({ title, description, link }) => (
  <div style={{ 
    background: 'white', 
    padding: '1.5rem', 
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
    ':hover': {
      transform: 'translateY(-5px)'
    }
  }}>
    <h3 style={{ color: '#003366', marginBottom: '0.5rem' }}>{title}</h3>
    <p style={{ marginBottom: '1rem' }}>{description}</p>
    <Link to={link} style={{ color: '#003366', fontWeight: 'bold' }}>了解更多 &rarr;</Link>
  </div>
)

const FeatureCard = ({ title, description }) => (
  <div style={{ textAlign: 'center' }}>
    <h3 style={{ color: '#003366', marginBottom: '0.5rem' }}>{title}</h3>
    <p>{description}</p>
  </div>
)

export const Head = () => <Seo title="首頁" />

export default IndexPage