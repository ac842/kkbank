// src/pages/contact.js
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ContactPage = () => (
  <Layout>
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ color: '#003366', marginBottom: '1rem' }}>聯繫我們</h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>我們隨時為您提供幫助。請選擇以下任一方式與我們聯繫。</p>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '1rem',
        marginBottom: '2rem'
      }}>
        <ContactInfo icon="📞" title="電話" content="0800-123-456" />
        <ContactInfo icon="✉️" title="電子郵件" content="info@nuobank.com" />
        <ContactInfo icon="🏢" title="地址" content="台北市信義區金融街1號" />
      </div>

      <h2 style={{ color: '#003366', marginBottom: '1rem' }}>發送訊息</h2>
      <form style={{ display: 'grid', gap: '1rem' }}>
        <input type="text" placeholder="您的姓名" style={inputStyle} />
        <input type="email" placeholder="您的電子郵件" style={inputStyle} />
        <textarea placeholder="您的訊息" rows="5" style={inputStyle}></textarea>
        <button type="submit" style={{
          background: '#003366',
          color: 'white',
          padding: '0.8rem',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>發送</button>
      </form>
    </div>
  </Layout>
)

const ContactInfo = ({ icon, title, content }) => (
  <div style={{ 
    background: '#f0f8ff', 
    padding: '1rem', 
    borderRadius: '8px',
    textAlign: 'center'
  }}>
    <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{icon}</div>
    <h3 style={{ color: '#003366', marginBottom: '0.5rem' }}>{title}</h3>
    <p>{content}</p>
  </div>
)

const inputStyle = {
  width: '100%',
  padding: '0.5rem',
  borderRadius: '5px',
  border: '1px solid #ccc'
}

export const Head = () => <Seo title="聯繫我們" />

export default ContactPage