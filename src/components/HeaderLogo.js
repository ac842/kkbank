// src/components/HeaderLogo.js
import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export function HeaderLogo() {
  return (
    <StaticImage
      src="../images/logo.png"
      alt="NuoBank Logo"
      placeholder="blurred"
      layout="fixed"
      width={100}
      height={50}  // 調整尺寸以適應您的 header
    />
  )
}

export default HeaderLogo