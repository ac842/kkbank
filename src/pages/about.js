// src/pages/about.js
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
  <Layout>
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ color: '#003366', marginBottom: '1rem' }}>關於 NuoBank</h1>
      <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
        NuoBank 是您值得信賴的金融合作夥伴。自1990年成立以來，我們一直致力於提供卓越的銀行服務，幫助個人和企業實現財務目標。
      </p>
      
      <h2 style={{ color: '#003366', marginBottom: '1rem' }}>我們的使命</h2>
      <p style={{ marginBottom: '2rem' }}>
        我們的使命是通過創新的金融產品和個性化的服務，幫助客戶實現財務目標，共同創造美好未來。
      </p>

      <h2 style={{ color: '#003366', marginBottom: '1rem' }}>我們的價值觀</h2>
      <ul style={{ marginBottom: '2rem' }}>
        <li>誠信：我們以最高的道德標準經營業務</li>
        <li>創新：我們不斷探索新的方法來滿足客戶需求</li>
        <li>卓越：我們追求在所有領域都達到卓越水平</li>
        <li>客戶至上：我們把客戶的利益放在首位</li>
      </ul>

      <h2 style={{ color: '#003366', marginBottom: '1rem' }}>我們的成就</h2>
      <p>
        30多年來，NuoBank 已經幫助數百萬客戶實現了他們的財務目標。我們榮獲多個行業獎項，包括「最佳客戶服務銀行」和「最具創新力銀行」等稱號。
      </p>
    </div>
  </Layout>
)

export const Head = () => <Seo title="關於我們" />

export default AboutPage