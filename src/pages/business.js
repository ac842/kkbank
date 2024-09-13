// src/pages/business.js
import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BusinessPage = () => (
  <Layout>
    <div style={styles.container}>
      <h1 style={styles.title}>商業銀行服務</h1>
      <p style={styles.description}>KKBank 為您的企業提供全面的金融解決方案，助力您的業務成長。</p>
      <div style={styles.serviceGrid}>
        {['企業帳戶', '商業貸款', '貿易融資', '現金管理'].map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
      <div style={styles.ctaContainer}>
        <Link to="/contact" style={styles.ctaButton}>聯繫我們了解更多</Link>
      </div>
    </div>
  </Layout>
)

const ServiceCard = ({ service }) => (
  <div style={styles.card}>
    <h3 style={styles.cardTitle}>{service}</h3>
  </div>
)

const styles = {
  container: { maxWidth: '800px', margin: '0 auto', padding: '2rem' },
  title: { color: '#003366', marginBottom: '1rem' },
  description: { fontSize: '1.1rem', marginBottom: '2rem' },
  serviceGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem',
    marginBottom: '2rem'
  },
  card: {
    background: '#f0f8ff',
    padding: '1rem',
    borderRadius: '8px',
    textAlign: 'center'
  },
  cardTitle: { color: '#003366', marginBottom: '0.5rem' },
  ctaContainer: { textAlign: 'center' },
  ctaButton: {
    background: '#003366',
    color: 'white',
    padding: '0.8rem 1.5rem',
    borderRadius: '5px',
    textDecoration: 'none',
    fontWeight: 'bold'
  }
}

export const Head = () => <Seo title="商業銀行" />

export default BusinessPage