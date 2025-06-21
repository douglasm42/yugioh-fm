import React from 'react'
import './MainTitle.css'

interface MainTitleProps {
  title: string
}

export default function MainTitle({ title }: MainTitleProps) {
  return (
    <h1 className="main-title">
      {title}
    </h1>
  )
}
