// src/pages/index.js
import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <WhyChooseUsSection />
    <CallToActionSection />
  </Layout>
)

const HeroSection = () => (
  <div style={styles.hero}>
    <h1 style={styles.heroTitle}>歡迎來到 KKBank</h1>
    <p style={styles.heroText}>
      您信賴的金融合作夥伴，為您的未來提供安全、創新的金融解決方案。
    </p>
  </div>
)

const AboutSection = () => (
  <div style={styles.section}>
    <h2 style={styles.sectionTitle}>關於 KKBank</h2>
    <p style={styles.sectionText}>
      KKBank 成立於1990年，30多年來一直致力於為台灣民眾和企業提供卓越的金融服務。
      我們的使命是通過創新的金融產品和個性化的服務，幫助客戶實現財務目標，共同創造美好未來。
    </p>
  </div>
)

const ServicesSection = () => (
  <div style={styles.section}>
    <h2 style={styles.sectionTitle}>我們的服務</h2>
    <div style={styles.serviceGrid}>
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
  </div>
)

const WhyChooseUsSection = () => (
  <div style={styles.whyChooseUs}>
    <h2 style={styles.sectionTitle}>為什麼選擇 KKBank</h2>
    <div style={styles.featureGrid}>
      <FeatureCard title="安全可靠" description="採用先進的安全技術，保護您的資產和隱私" />
      <FeatureCard title="創新服務" description="持續推出創新的金融產品，滿足您不斷變化的需求" />
      <FeatureCard title="專業團隊" description="經驗豐富的金融專家，為您提供專業的建議和服務" />
      <FeatureCard title="便捷體驗" description="無論線上還是線下，都能享受便捷的銀行服務" />
    </div>
  </div>
)

const CallToActionSection = () => (
  <div style={styles.callToAction}>
    <h2 style={styles.sectionTitle}>開始您的 KKBank 之旅</h2>
    <p style={styles.callToActionText}>無論您是個人還是企業，我們都有適合您的金融解決方案。</p>
    <Link to="/contact" style={styles.ctaButton}>聯繫我們</Link>
  </div>
)

const ServiceCard = ({ title, description, link }) => (
  <div style={styles.card}>
    <h3 style={styles.cardTitle}>{title}</h3>
    <p style={styles.cardText}>{description}</p>
    <Link to={link} style={styles.cardLink}>了解更多 &rarr;</Link>
  </div>
)

const FeatureCard = ({ title, description }) => (
  <div style={styles.featureCard}>
    <h3 style={styles.featureTitle}>{title}</h3>
    <p style={styles.featureText}>{description}</p>
  </div>
)

const styles = {
  hero: {
    background: 'linear-gradient(135deg, #003366 0%, #0066cc 100%)',
    color: 'white',
    padding: '4rem 2rem',
    borderRadius: '10px',
    marginBottom: '2rem',
    textAlign: 'center',
  },
  heroTitle: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  heroText: {
    fontSize: '1.2rem',
    maxWidth: '600px',
    margin: '0 auto',
  },
  section: {
    marginBottom: '3rem',
    textAlign: 'center',
  },
  sectionTitle: {
    color: '#003366',
    marginBottom: '1rem',
  },
  sectionText: {
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  serviceGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
  },
  whyChooseUs: {
    background: '#f0f8ff',
    padding: '3rem 2rem',
    borderRadius: '10px',
    marginBottom: '3rem',
  },
  featureGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
  },
  callToAction: {
    textAlign: 'center',
    marginBottom: '3rem',
  },
  callToActionText: {
    marginBottom: '1rem',
  },
  ctaButton: {
    background: '#003366',
    color: 'white',
    padding: '0.8rem 1.5rem',
    borderRadius: '5px',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  card: {
    background: 'white',
    padding: '1.5rem',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
  },
  cardTitle: {
    color: '#003366',
    marginBottom: '0.5rem',
  },
  cardText: {
    marginBottom: '1rem',
  },
  cardLink: {
    color: '#003366',
    fontWeight: 'bold',
  },
  featureCard: {
    textAlign: 'center',
  },
  featureTitle: {
    color: '#003366',
    marginBottom: '0.5rem',
  },
  featureText: {
    // 无特殊样式
  },
}

export const Head = () => <Seo title="首頁" />

export default IndexPage