// src/pages/landing.js
import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"

const LandingPage = () => (
  <div style={{
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #003366 0%, #0066cc 100%)',
    color: 'white',
    textAlign: 'center',
    padding: '2rem'
  }}>
    <StaticImage
      src="../images/nuobank-logo.png"
      alt="nuobank Logo"
      placeholder="blurred"
      layout="fixed"
      width={200}
      height={100}
      style={{ marginBottom: '2rem' }}
    />
    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>歡迎來到 nuobank</h1>
    <p style={{ fontSize: '1.2rem', maxWidth: '600px', marginBottom: '2rem' }}>
      您值得信賴的金融夥伴，為您的未來提供安全、創新的金融解決方案。
    </p>
    <div style={{ marginBottom: '2rem' }}>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>關於我們</h2>
      <p style={{ maxWidth: '800px', marginBottom: '1rem' }}>
        nuobank 成立於1990年，30多年來一直致力於為台灣民眾和企業提供卓越的金融服務。
        我們的使命是通過創新的金融產品和個性化的服務，幫助客戶實現財務目標，共同創造美好未來。
      </p>
    </div>
    <div style={{ marginBottom: '2rem' }}>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>我們的合作夥伴</h2>
      <p>台灣經濟研究院 • 中小企業信用保證基金 • 金融科技創新園區</p>
    </div>
    <Link 
      to="/"
      style={{
        background: 'white',
        color: '#003366',
        padding: '1rem 2rem',
        borderRadius: '50px',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '1.2rem',
        transition: 'all 0.3s ease'
      }}
    >
      進入 nuobank
    </Link>
  </div>
)

export const Head = () => <Seo title="歡迎來到 nuobank" />

export default LandingPage