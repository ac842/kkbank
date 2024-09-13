import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <div style={styles.container}>
      <h1 style={styles.title}>404: 找不到頁面</h1>
      <p style={styles.description}>
        很抱歉，您要找的頁面不存在。可能是鏈接已更改或頁面已被移除。
      </p>
      <div>
        <Link to="/" style={styles.primaryButton}>
          返回首頁
        </Link>
        <Link to="/contact" style={styles.secondaryButton}>
          聯繫我們
        </Link>
      </div>
    </div>
  </Layout>
)

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '2rem',
    textAlign: 'center'
  },
  title: {
    color: '#003366',
    fontSize: '3rem',
    marginBottom: '1rem'
  },
  description: {
    fontSize: '1.2rem',
    marginBottom: '2rem'
  },
  primaryButton: {
    background: '#003366',
    color: 'white',
    padding: '0.8rem 1.5rem',
    borderRadius: '5px',
    textDecoration: 'none',
    fontWeight: 'bold',
    marginRight: '1rem'
  },
  secondaryButton: {
    color: '#003366',
    textDecoration: 'none',
    fontWeight: 'bold'
  }
}

export const Head = () => <Seo title="404: 找不到頁面" />

export default NotFoundPage