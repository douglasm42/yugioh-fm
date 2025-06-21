import React from 'react'
import './Skill.css'

import ProgressBar from './ProgressBar'

interface SkillProps {
  name: React.ReactNode
  current: number
  max: number
  level?: number
}

function renderCurrentLabel(current: number): React.ReactNode {
  if(current >= 12) {
    return `${(current / 12).toFixed(1)} years`
  } else {
    return `${current.toFixed(0)} months`
  }
}

export default function Skill({ name, current, max }: SkillProps) {
  return (
    <div className="skill-root">
      <div className="skill-container">
        <div>{name}</div>
        <div>{renderCurrentLabel(current)}</div>
      </div>
      <ProgressBar progress={current * 100.0 / max}/>
    </div>
  )
}
