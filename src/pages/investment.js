// src/pages/investment.js
import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const InvestmentPage = () => (
  <Layout>
    <h1>投資服務</h1>
    <p>在 NuoBank,我們提供多元化的投資方案,幫助您實現財務目標並確保未來的財務安全。</p>
    
    <h2>我們的投資產品</h2>
    <ul>
      <li>股票投資</li>
      <li>債券基金</li>
      <li>外匯交易</li>
      <li>共同基金</li>
      <li>退休計劃</li>
    </ul>

    <h2>為什麼選擇 NuoBank 的投資服務?</h2>
    <ul>
      <li>專業的投資顧問團隊</li>
      <li>多元化的投資組合選擇</li>
      <li>先進的風險管理工具</li>
      <li>靈活的投資方案,適合不同風險承受能力</li>
      <li>全天候的市場分析和投資建議</li>
    </ul>

    <h2>開始您的投資之旅</h2>
    <p>無論您是初次投資者還是經驗豐富的投資人,我們都有適合您的投資方案。</p>
    <div style={{ marginTop: '1rem' }}>
      <Link to="/contact" style={{ marginRight: '1rem' }}>聯繫投資顧問</Link>
      <Link to="/online">開始線上投資</Link>
    </div>

    <div style={{ marginTop: '2rem' }}>
      <Link to="/services">返回所有服務</Link>
    </div>
  </Layout>
)

export const Head = () => <Seo title="投資服務" />

export default InvestmentPage