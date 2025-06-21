import React from 'react'
import './Detail.css'

import Tag from './Tag'

interface DetailProps {
  name: React.ReactNode
  tags?: string[]
  children?: React.ReactNode
}

export default function Detail({ name, tags=[], children }: DetailProps) {
  const componentTags = tags.map(tag => (<Tag key={tag} color='green' type='sup'>{tag}</Tag> ))
  return (
    <div className='detail'>
      <div className='detail-name'><strong>{componentTags} {name}:</strong></div>
      <div className='detail-value'>{children}</div>
    </div>
  )
}
