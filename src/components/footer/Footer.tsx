import React from 'react'
import './Footer.css'

interface FooterProps {
  children?: React.ReactNode
}

export default function Footer({ children }: FooterProps) {
  return (
    <footer className="footer">
      {children}
    </footer>
  )
}
