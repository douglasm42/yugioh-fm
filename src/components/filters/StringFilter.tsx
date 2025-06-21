import { SetFilterFunction } from '@/components/content/TableFilter'
import React, { useEffect, useState } from 'react'

interface StringFilterProps<T> {
  key: string
  getField: (drop: T) => string
  placeholder: string
  label: string
  setFilter: SetFilterFunction<T>
}

export default function StringFilter<T>({ key, placeholder, label, getField, setFilter }: StringFilterProps<T>) {
  const [text, setText] = useState<string>('')

  useEffect(() => {
    if(text) {
      setFilter(key, (drop: T) => getField(drop).toLocaleLowerCase().includes(text.toLocaleLowerCase()))
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
