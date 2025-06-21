'use client'

import React, {useState} from 'react'
import './Navbar.css'

import NavbarToggle from './NavbarToggle'

interface NavbarProps {
  children?: React.ReactNode
}

export default function Navbar({ children }: NavbarProps) {
  const [visible, setVisible] = useState(false);

  function onToggle() {
    setVisible(!visible)
  }

  return (
    <nav className="navbar">
      <div className={`navbar-items ${visible ? ' navbar-show' : ''}`}>
        {children}
      </div>
      <NavbarToggle onToggle={onToggle} />
    </nav>
  )
}
