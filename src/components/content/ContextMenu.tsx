import React, { useEffect, useRef } from 'react'
import './ContextMenu.css'

interface ContextMenuProps {
  active: boolean
  setActive: React.Dispatch<React.SetStateAction<boolean>>
  children?: React.ReactNode
}

export default function ContextMenu({ active, children, setActive }: ContextMenuProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if(active) {
      const handleClickOutside = (event: MouseEvent) => {
        if(ref.current && !ref.current.contains(event.target as Node)) {
          setActive(false)
        }
      }

      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }

    return () => {}
  }, [ref, active, setActive])

  return (
    <div ref={ref} className={`context-menu ${active ? 'context-menu-active' : ''}`}>
      {children}
    </div>
  )
}
