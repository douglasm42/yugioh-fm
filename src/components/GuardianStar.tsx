import React from 'react'

import Mars from './icons/Mars'
import Jupiter from './icons/Jupiter'
import Saturn from './icons/Saturn'
import Uranus from './icons/Uranus'
import Pluto from './icons/Pluto'
import Neptune from './icons/Neptune'
import Mercury from './icons/Mercury'
import Sun from './icons/Sun'
import Moon from './icons/Moon'
import Venus from './icons/Venus'

const icons: Record<string, (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element> = {
  Mars: Mars,
  Jupiter: Jupiter,
  Saturn: Saturn,
  Uranus: Uranus,
  Pluto: Pluto,
  Neptune: Neptune,
  Mercury: Mercury,
  Sun: Sun,
  Moon: Moon,
  Venus: Venus,
}

interface GuardianStarProps {
  name: string
  size?: string
  color?: string
}

export default function GuardianStar({ name, size, color }: GuardianStarProps) {
  const colors: Record<string, string> = {
    none: 'var(--color-white)',
    yellow: 'var(--color-yellow)',
    red: 'var(--color-red)',
  }

  const actualSize = size || '1.6em'

  return (
    <div style={{position: 'relative', height: actualSize, width: actualSize }}>
      <div style={{position: 'absolute', height: actualSize, width: actualSize }}>
        {icons[name]({ height: actualSize, width: actualSize, stroke: color ? colors[color] : colors.none})}
      </div>
    </div>
  )
}
