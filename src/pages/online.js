// src/pages/online.js
import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const OnlinePage = () => (
  <Layout>
    <div style={styles.container}>
      <h1 style={styles.title}>線上銀行</h1>
      <p style={styles.description}>KKBank 的安全便捷網上銀行服務，讓您隨時隨地管理您的財務。</p>
      <h2 style={styles.subtitle}>我們的線上服務</h2>
      <ServiceList services={['帳戶查詢', '轉帳', '繳費', '投資交易']} />
      <div style={styles.buttonContainer}>
        <Link to="/contact" style={styles.button}>
          需要幫助？聯繫我們的客戶服務
        </Link>
      </div>
    </div>
  </Layout>
)

const ServiceList = ({ services }) => (
  <ul style={styles.list}>
    {services.map((service, index) => (
      <li key={index} style={styles.listItem}>{service}</li>
    ))}
  </ul>
)

const styles = {
  container: { maxWidth: '800px', margin: '0 auto', padding: '2rem' },
  title: { color: '#003366', marginBottom: '1rem' },
  subtitle: { color: '#003366', marginBottom: '1rem' },
  description: { fontSize: '1.1rem', marginBottom: '2rem' },
  list: { listStyle: 'none', padding: 0 },
  listItem: { 
    background: '#f0f0f0', 
    padding: '1rem', 
    marginBottom: '1rem', 
    borderRadius: '5px' 
  },
  buttonContainer: { marginTop: '2rem' },
  button: {
    background: '#003366',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    textDecoration: 'none'
  }
}

export const Head = () => <Seo title="線上銀行" />

export default OnlinePage