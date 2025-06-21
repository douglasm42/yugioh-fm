import { SetFilterFunction } from '@/components/content/TableFilter'
import { Drop } from '@/helpers/drops'
import React, { useEffect, useState } from 'react'

interface StringFilterProps {
  key: string
  getField: (drop: Drop) => string
  placeholder: string
  label: string
  setFilter: SetFilterFunction<Drop>
}

export default function StringFilter({ key, placeholder, label, getField, setFilter }: StringFilterProps) {
  const [text, setText] = useState<string>('')

  useEffect(() => {
    if(text) {
      setFilter(key, (drop: Drop) => getField(drop).toLocaleLowerCase().includes(text.toLocaleLowerCase()))
    }

    return () => {
      setFilter(key, undefined)
    }
  }, [text])

  return (
    <label>
      {label}
      <input placeholder={placeholder} value={text} onChange={e => setText(e.target.value)} />
    </label>
  )
}
