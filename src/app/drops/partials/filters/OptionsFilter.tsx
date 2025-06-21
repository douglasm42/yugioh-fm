import { SetFilterFunction } from '@/components/content/TableFilter'
import { Drop } from '@/helpers/drops'
import React, { ChangeEventHandler, useEffect, useState } from 'react'

import './OptionsFilter.css'

interface OptionsFilterProps {
  key: string
  getField: (drop: Drop) => string
  setFilter: SetFilterFunction<Drop>
  options: string[]
}

export default function OptionsFilter({ key, getField, setFilter, options }: OptionsFilterProps) {
  const [selected, setSelected] = useState<string[]>([])

  useEffect(() => {
    if(selected.length > 0) {
      setFilter(key, (drop: Drop) => selected.includes(getField(drop)))
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
