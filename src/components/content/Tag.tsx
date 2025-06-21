import React from 'react'
import './Tag.css'
import { Color } from '../types'

interface TagProps {
  color?: Color
  type?: ('middle' | 'sup')
  children?: React.ReactNode
}

export default function Tag({ color='lblue', type='middle', children }: TagProps) {
  return (
    <span className={`tag tag-${type}`} style={{backgroundColor: `var(--color-${color})`}}>{children}</span>
  )
}
