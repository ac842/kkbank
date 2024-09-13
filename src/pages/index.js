// src/pages/index.js
import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
      <h1>歡迎來到 KKBank</h1>
      <p>您信賴的金融合作夥伴，幫助您實現財務目標。</p>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
      <div style={{ background: '#f0f0f0', padding: '1rem', borderRadius: '8px' }}>
        <h2>個人銀行</h2>
        <p>為您的未來做好準備，探索我們的儲蓄和投資方案。</p>
        <Link to="/personal">了解更多</Link>
      </div>
      <div style={{ background: '#f0f0f0', padding: '1rem', borderRadius: '8px' }}>
        <h2>商業銀行</h2>
        <p>幫助您的企業成長，提供全面的商業金融解決方案。</p>
        <Link to="/business">了解更多</Link>
      </div>
      <div style={{ background: '#f0f0f0', padding: '1rem', borderRadius: '8px' }}>
        <h2>線上銀行</h2>
        <p>隨時隨地管理您的賬戶，安全便捷的網上銀行服務。</p>
        <Link to="/online">了解更多</Link>
      </div>
    </div>
    <div style={{ marginTop: '2rem', textAlign: 'center' }}>
      <Link to="/services">查看所有服務</Link>
    </div>
  </Layout>
)

export const Head = () => <Seo title="首頁" />

export default IndexPage