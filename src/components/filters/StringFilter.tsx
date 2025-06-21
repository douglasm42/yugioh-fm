import { SetFilterFunction } from '@/components/content/TableFilter'
import React, { useState } from 'react'

interface StringFilterProps<T> {
  field: string
  getField: (drop: T) => string
  placeholder: string
  label: string
  setFilter: SetFilterFunction<T>
}

export default function StringFilter<T>({ field, placeholder, label, getField, setFilter }: StringFilterProps<T>) {
  const [text, setText] = useState<string>('')

  const handleTextChange = (newText: string) => {
    setText(newText)
    if(text) {
      setFilter(field, (drop: T) => getField(drop).toLocaleLowerCase().includes(text.toLocaleLowerCase()))
    }

    return () => {
      setFilter(field, undefined)
    }
  }

  return (
    <label>
      {label}
      <input placeholder={placeholder} value={text} onChange={e => handleTextChange(e.target.value)} />
    </label>
  )
}
