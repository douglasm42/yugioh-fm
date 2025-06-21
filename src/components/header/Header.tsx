import React from 'react'
import './Header.css'

import MainTitle from './MainTitle'
import Navbar from './Navbar'

interface HeaderProps {
  children?: React.ReactNode
}

export default function Header({ children }: HeaderProps) {
  return (
    <header className="header">
      <MainTitle title="Yu-Gi-Oh: FM - Helper" />
      <Navbar>
        {children}
      </Navbar>
    </header>
  )
}
