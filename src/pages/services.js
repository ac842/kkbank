// src/pages/services.js
import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ServicesPage = () => (
  <Layout>
    <div style={styles.container}>
      <h1 style={styles.title}>我們的服務</h1>
      <p style={styles.description}>KKBank 提供全面的銀行服務，滿足您的各種金融需求。</p>
      <ServiceList services={[
        { title: '個人銀行', link: '/personal' },
        { title: '企業銀行', link: '/business' },
        { title: '投資服務', link: '/investment' },
        { title: '貸款', link: '#' },
        { title: '線上銀行', link: '/online' }
      ]} />
      <div style={styles.buttonContainer}>
        <Link to="/contact" style={styles.button}>
          需要幫助？聯繫我們
        </Link>
      </div>
    </div>
  </Layout>
)

const ServiceList = ({ services }) => (
  <ul style={styles.list}>
    {services.map((service, index) => (
      <ServiceItem key={index} title={service.title} link={service.link} />
    ))}
  </ul>
)

const ServiceItem = ({ title, link }) => (
  <li style={styles.listItem}>
    <Link to={link} style={styles.link}>
      {title}
    </Link>
  </li>
)

const styles = {
  container: { maxWidth: '800px', margin: '0 auto', padding: '2rem' },
  title: { color: '#003366', marginBottom: '1rem' },
  description: { fontSize: '1.1rem', marginBottom: '2rem' },
  list: { listStyle: 'none', padding: 0 },
  listItem: { marginBottom: '1rem' },
  link: {
    display: 'block',
    background: '#f0f0f0',
    padding: '1rem',
    borderRadius: '5px',
    textDecoration: 'none',
    color: '#003366'
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

export const Head = () => <Seo title="服務" />

export default ServicesPage