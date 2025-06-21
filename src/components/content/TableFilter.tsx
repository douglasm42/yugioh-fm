import { Funnel } from 'lucide-react'
import React, { useState } from 'react'
import './TableFilter.css'
import ContextMenu from './ContextMenu';

export type SetFilterFunction<T> = (key: string, filter?: (record: T) => boolean) => void

interface TableFilterProps<T> {
  renderFilter: (setFilter: SetFilterFunction<T>) => React.ReactNode
  setFilter: SetFilterFunction<T>
}

export default function TableFilter<T>({ renderFilter, setFilter }: TableFilterProps<T>) {
  const [active, setActive] = useState(false)
  const [isSet, setIsSet] = useState(false)

  const setFilterSpy = (key: string, filter?: (record: T) => boolean) => {
    setFilter(key, filter)
    setIsSet(filter ? true : false)
  }

  return (
    <div className='table-filter'>
      <Funnel className={`table-filter-button ${isSet ? 'table-filter-is-set' : ''}`} onClick={() => setActive(!active)} />
      <ContextMenu active={active} setActive={setActive}>
        {renderFilter(setFilterSpy)}
      </ContextMenu>
    </div>
  )
}
