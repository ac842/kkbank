// src/pages/contact.js
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ContactPage = () => (
  <Layout>
    <div style={styles.container}>
      <h1 style={styles.title}>聯繫我們</h1>
      <p style={styles.description}>我們隨時為您提供幫助。請選擇以下任一方式與我們聯繫。</p>
      
      <div style={styles.infoGrid}>
        <ContactInfo icon="📞" title="電話" content="0800-123-456" />
        <ContactInfo icon="✉️" title="電子郵件" content="info@kkbank.com" />
        <ContactInfo icon="🏢" title="地址" content="台北市信義區金融街1號" />
      </div>

      <h2 style={styles.subtitle}>發送訊息</h2>
      <form style={styles.form}>
        <Input type="text" placeholder="您的姓名" />
        <Input type="email" placeholder="您的電子郵件" />
        <Input as="textarea" placeholder="您的訊息" rows="5" />
        <button type="submit" style={styles.submitButton}>發送</button>
      </form>
    </div>
  </Layout>
)

const ContactInfo = ({ icon, title, content }) => (
  <div style={styles.infoCard}>
    <div style={styles.icon}>{icon}</div>
    <h3 style={styles.infoTitle}>{title}</h3>
    <p>{content}</p>
  </div>
)

const Input = ({ as: Component = 'input', ...props }) => (
  <Component style={styles.input} {...props} />
)

const styles = {
  container: { maxWidth: '800px', margin: '0 auto', padding: '2rem' },
  title: { color: '#003366', marginBottom: '1rem' },
  description: { fontSize: '1.1rem', marginBottom: '2rem' },
  infoGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem',
    marginBottom: '2rem'
  },
  infoCard: {
    background: '#f0f8ff',
    padding: '1rem',
    borderRadius: '8px',
    textAlign: 'center'
  },
  icon: { fontSize: '2rem', marginBottom: '0.5rem' },
  infoTitle: { color: '#003366', marginBottom: '0.5rem' },
  subtitle: { color: '#003366', marginBottom: '1rem' },
  form: { display: 'grid', gap: '1rem' },
  input: {
    width: '100%',
    padding: '0.5rem',
    borderRadius: '5px',
    border: '1px solid #ccc'
  },
  submitButton: {
    background: '#003366',
    color: 'white',
    padding: '0.8rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
}

export const Head = () => <Seo title="聯繫我們" />

export default ContactPage