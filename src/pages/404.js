import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <div style={{ 
      maxWidth: '600px', 
      margin: '0 auto', 
      padding: '2rem', 
      textAlign: 'center' 
    }}>
      <h1 style={{ color: '#003366', fontSize: '3rem', marginBottom: '1rem' }}>404: 找不到頁面</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
        很抱歉，您要找的頁面不存在。可能是鏈接已更改或頁面已被移除。
      </p>
      <div>
        <Link to="/" style={{
          background: '#003366',
          color: 'white',
          padding: '0.8rem 1.5rem',
          borderRadius: '5px',
          textDecoration: 'none',
          fontWeight: 'bold',
          marginRight: '1rem'
        }}>
          返回首頁
        </Link>
        <Link to="/contact" style={{
          color: '#003366',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}>
          聯繫我們
        </Link>
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="404: 找不到頁面" />

export default NotFoundPage