import { SetFilterFunction } from '@/components/content/TableFilter'
import React, { useEffect, useState } from 'react'

import './OptionsFilter.css'

interface OptionsFilterProps<T> {
  key: string
  getField: (drop: T) => string
  setFilter: SetFilterFunction<T>
  options: string[]
}

export default function OptionsFilter<T>({ key, getField, setFilter, options }: OptionsFilterProps<T>) {
  const [selected, setSelected] = useState<string[]>([])

  useEffect(() => {
    if(selected.length > 0) {
      setFilter(key, (drop: T) => selected.includes(getField(drop)))
    } else {
      setFilter(key, undefined)
    }

    return () => {
      setFilter(key, undefined)
    }
  }, [selected])

  const handleCheckboxChange = (option: string, checked: boolean) => {
    if(checked) {
      setSelected(selected.concat(option))
    } else {
      setSelected(selected.filter(o => o != option))
    }
  }

  const optionsCheckboxes = options.map( option => (
    <label>
      <input type="checkbox" key={option} onChange={e => handleCheckboxChange(option, e.target.checked)} />
      {option}
    </label>
  ))

  return (
    <div className='options-filter'>
      {optionsCheckboxes}
    </div>
  )
}
