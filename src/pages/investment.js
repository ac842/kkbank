// src/pages/investment.js
import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const InvestmentPage = () => (
  <Layout>
    <div style={styles.container}>
      <h1 style={styles.title}>投資服務</h1>
      <p style={styles.description}>在 KKBank，我們提供多元化的投資方案，幫助您實現財務目標並確保未來的財務安全。</p>
      
      <h2 style={styles.subtitle}>我們的投資產品</h2>
      <ProductGrid products={['股票投資', '債券基金', '外匯交易', '共同基金', '退休計劃']} />

      <h2 style={styles.subtitle}>為什麼選擇 KKBank 的投資服務?</h2>
      <FeatureList features={[
        '專業的投資顧問團隊',
        '多元化的投資組合選擇',
        '先進的風險管理工具',
        '靈活的投資方案，適合不同風險承受能力',
        '全天候的市場分析和投資建議'
      ]} />

      <h2 style={styles.subtitle}>開始您的投資之旅</h2>
      <p style={styles.text}>無論您是初次投資者還是經驗豐富的投資人，我們都有適合您的投資方案。</p>
      <div style={styles.buttonContainer}>
        <Link to="/contact" style={styles.button}>聯繫投資顧問</Link>
        <Link to="/online" style={styles.button}>開始線上投資</Link>
      </div>

      <div style={styles.backLink}>
        <Link to="/services" style={styles.link}>返回所有服務</Link>
      </div>
    </div>
  </Layout>
)

const ProductGrid = ({ products }) => (
  <div style={styles.grid}>
    {products.map((product, index) => (
      <div key={index} style={styles.gridItem}>{product}</div>
    ))}
  </div>
)

const FeatureList = ({ features }) => (
  <ul style={styles.list}>
    {features.map((feature, index) => (
      <li key={index} style={styles.listItem}>{feature}</li>
    ))}
  </ul>
)

const styles = {
  container: { maxWidth: '800px', margin: '0 auto', padding: '2rem' },
  title: { color: '#003366', marginBottom: '1rem' },
  subtitle: { color: '#003366', marginBottom: '1rem' },
  description: { fontSize: '1.1rem', marginBottom: '2rem' },
  text: { marginBottom: '1rem' },
  grid: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', 
    gap: '1rem',
    marginBottom: '2rem'
  },
  gridItem: { 
    background: '#f0f8ff', 
    padding: '1rem', 
    borderRadius: '8px',
    textAlign: 'center'
  },
  list: { marginBottom: '2rem' },
  listItem: { marginBottom: '0.5rem' },
  buttonContainer: { display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' },
  button: {
    background: '#003366',
    color: 'white',
    padding: '0.8rem 1.5rem',
    borderRadius: '5px',
    textDecoration: 'none',
    fontWeight: 'bold'
  },
  backLink: { textAlign: 'center' },
  link: { color: '#003366', textDecoration: 'none', fontWeight: 'bold' }
}

export const Head = () => <Seo title="投資服務" />

export default InvestmentPage