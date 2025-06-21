import React from 'react'

import './ArticleLink.css'
import { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'

interface ArticleLinkProps {
  href: Url
  text: React.ReactNode
  icon: string
}

export default function ArticleLink({ href, text, icon }: ArticleLinkProps) {
  return (
    <Link className="article-link" target="_blank" rel="noreferrer" href={href}>
      <i className={`fa fa-${icon}`}></i> {text}
    </Link>
  )
}
