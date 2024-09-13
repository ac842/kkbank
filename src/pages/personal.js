// src/pages/personal.js
import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const PersonalPage = () => (
  <Layout>
    <div style={styles.container}>
      <h1 style={styles.title}>個人銀行服務</h1>
      <p style={styles.description}>KKBank 為您提供全面的個人銀行服務，助您實現財務目標。</p>
      <ServiceGrid services={[
        { title: '儲蓄帳戶', description: '安全可靠的儲蓄選擇' },
        { title: '信用卡', description: '靈活的支付和獎勵計劃' },
        { title: '個人貸款', description: '滿足您的資金需求' },
        { title: '投資理財', description: '專業的投資建議和產品' }
      ]} />
      <div style={styles.buttonContainer}>
        <Link to="/contact" style={styles.button}>
          了解更多或開戶
        </Link>
      </div>
    </div>
  </Layout>
)

const ServiceGrid = ({ services }) => (
  <div style={styles.grid}>
    {services.map((service, index) => (
      <ServiceCard key={index} title={service.title} description={service.description} />
    ))}
  </div>
)

const ServiceCard = ({ title, description }) => (
  <div style={styles.card}>
    <h3 style={styles.cardTitle}>{title}</h3>
    <p>{description}</p>
  </div>
)

const styles = {
  container: { maxWidth: '800px', margin: '0 auto', padding: '2rem' },
  title: { color: '#003366', marginBottom: '1rem' },
  description: { fontSize: '1.1rem', marginBottom: '2rem' },
  grid: { 
    display: 'grid', 
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
    gap: '1rem' 
  },
  card: { 
    background: '#f0f0f0', 
    padding: '1rem', 
    borderRadius: '5px' 
  },
  cardTitle: { color: '#003366', marginBottom: '0.5rem' },
  buttonContainer: { marginTop: '2rem' },
  button: {
    background: '#003366',
    color: 'white',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    textDecoration: 'none'
  }
}

export const Head = () => <Seo title="個人銀行" />

export default PersonalPage