import React from 'react'
import './Article.css'

import Card from './Card'
import Tag from './Tag'

interface ArticleProps {
  title: React.ReactNode
  footer?: React.ReactNode
  tags: string[]
  children?: React.ReactNode
}

export default function Article({ title, footer, tags=[], children }: ArticleProps) {
  return (
    <Card>
      <article className="article">
        <h2 className="article-title">{title}</h2>
        {tags.map(tag => <Tag key={tag} color='lblue'>{tag}</Tag>)}
        <div className="article-content">
          {children}
        </div>
        <div className="article-footer">
          {footer}
        </div>
      </article>
    </Card>
  )
}
