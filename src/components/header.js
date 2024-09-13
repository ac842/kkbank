// src/components/header.js
import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#003366`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <nav style={{ marginTop: `1rem` }}>
        <Link to="/personal" style={{ color: `white`, marginRight: `1rem` }}>個人銀行</Link>
        <Link to="/business" style={{ color: `white`, marginRight: `1rem` }}>商業銀行</Link>
        <Link to="/services" style={{ color: `white`, marginRight: `1rem` }}>服務</Link>
        <Link to="/online" style={{ color: `white`, marginRight: `1rem` }}>線上銀行</Link>
        <Link to="/contact" style={{ color: `white` }}>聯繫我們</Link>
      </nav>
    </div>
  </header>
)

export default Header