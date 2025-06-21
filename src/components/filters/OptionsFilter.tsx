import { SetFilterFunction } from '@/components/content/TableFilter'
import React, { useState } from 'react'

import './OptionsFilter.css'

interface OptionsFilterProps<T> {
  field: string
  getField: (drop: T) => string
  setFilter: SetFilterFunction<T>
  options: string[]
}

export default function OptionsFilter<T>({ field, getField, setFilter, options }: OptionsFilterProps<T>) {
  const [selected, setSelected] = useState<string[]>([])

  const handleCheckboxChange = (option: string, checked: boolean) => {
    const newSelected = checked ? selected.concat(option) : selected.filter(o => o != option)
    setSelected(newSelected)
    if(newSelected.length > 0) {
      setFilter(field, (drop: T) => newSelected.includes(getField(drop)))
    } else {
      setFilter(field, undefined)
    }
  }

  const optionsCheckboxes = options.map( option => (
    <label key={option}>
      <input type="checkbox" onChange={e => handleCheckboxChange(option, e.target.checked)} />
      {option}
    </label>
  ))

  return (
    <div className='options-filter'>
      {optionsCheckboxes}
    </div>
  )
}
