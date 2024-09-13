// src/components/Footer.js
import React from "react"

const Footer = () => {
  return (
    <footer className="bg-gray-200 p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} nuobank。保留所有權利。</p>
      </div>
    </footer>
  )
}

export default Footer