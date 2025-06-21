import React from 'react'
import './NavbarToggle.css'
import { Menu } from 'lucide-react'

interface NavbarToggleProps {
  onToggle: () => void
}

export default function NavbarToggle({ onToggle }: NavbarToggleProps) {
  return (
    <div className="navbar-toggle">
      <button onClick={onToggle} className="navbar-toggle-link">
        <Menu size={36} display='block' />
      </button>
    </div>
  )
}
