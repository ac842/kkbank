// src/pages/services.js
import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ServicesPage = () => (
  <Layout>
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ color: '#003366', marginBottom: '1rem' }}>我們的服務</h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>nuobank 提供全面的銀行服務，滿足您的各種金融需求。</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {[
          { title: '個人銀行', link: '/personal' },
          { title: '企業銀行', link: '/business' },
          { title: '投資服務', link: '/investment' },
          { title: '貸款', link: '#' },
          { title: '線上銀行', link: '/online' }
        ].map((service, index) => (
          <li key={index} style={{ marginBottom: '1rem' }}>
            <Link to={service.link} style={{
              display: 'block',
              background: '#f0f0f0',
              padding: '1rem',
              borderRadius: '5px',
              textDecoration: 'none',
              color: '#003366'
            }}>
              {service.title}
            </Link>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: '2rem' }}>
        <Link to="/contact" style={{
          background: '#003366',
          color: 'white',
          padding: '0.5rem 1rem',
          borderRadius: '5px',
          textDecoration: 'none'
        }}>
          需要幫助？聯繫我們
        </Link>
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="服務" />

export default ServicesPage