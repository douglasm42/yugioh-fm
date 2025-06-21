import React from 'react'
import './Title.css'

interface TitleProps {
  level?: ('h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6')
  children?: React.ReactNode
}

export default function Title({ level='h1', children }: TitleProps) {
  if(level === 'h1') { return (<h1 className={`title-${level}`}>{children}</h1>) }
  if(level === 'h2') { return (<h2 className={`title-${level}`}>{children}</h2>) }
  if(level === 'h3') { return (<h3 className={`title-${level}`}>{children}</h3>) }
  if(level === 'h4') { return (<h4 className={`title-${level}`}>{children}</h4>) }
  if(level === 'h5') { return (<h5 className={`title-${level}`}>{children}</h5>) }
  if(level === 'h6') { return (<h6 className={`title-${level}`}>{children}</h6>) }
}
