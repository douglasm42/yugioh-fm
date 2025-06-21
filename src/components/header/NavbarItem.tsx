import React from 'react'
import './NavbarItem.css'

import Link from 'next/link'
import { Url } from 'next/dist/shared/lib/router/router'

interface NavbarItemProps {
  title: string
  href: Url
}

export default function NavbarItem({ title, href }: NavbarItemProps) {
  return (
    <div className="navbar-item">
      <Link className="navbar-item-link" href={href}>
        {title}
      </Link>
    </div>
  )
}
