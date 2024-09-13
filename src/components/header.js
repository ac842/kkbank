// src/components/header.js
import * as React from "react"
import { Link } from "gatsby"
import HeaderLogo from "./HeaderLogo"

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
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <h1 style={{ margin: 0, display: 'flex', alignItems: 'center' }}>
        <Link
          to="/home"
          style={{
            color: `white`,
            textDecoration: `none`,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <HeaderLogo />
          <span style={{ marginLeft: '1rem' }}>{siteTitle}</span>
        </Link>
      </h1>
      {/* 其餘的導航保持不變 */}
    </div>
  </header>
)

export default Header