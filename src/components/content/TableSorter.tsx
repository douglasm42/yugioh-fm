import { ArrowDownAZ, ArrowUpAZ } from 'lucide-react'
import React, { MouseEventHandler } from 'react'
import './TableSorter.css'

interface TableSorterProps {
  ascending: boolean | undefined
  onClick?: MouseEventHandler<SVGSVGElement>;
}

export default function TableSorter({ ascending, onClick }: TableSorterProps) {
  let icon = undefined
  if(ascending === undefined) {
    icon = <ArrowDownAZ className='table-sorter-unset table-sorter-button' onClick={onClick} />
  }

  if(ascending === true) {
    icon = <ArrowDownAZ className='table-sorter-set table-sorter-button' onClick={onClick} />
  } else if(ascending === false) {
    icon = <ArrowUpAZ className='table-sorter-set table-sorter-button' onClick={onClick} />
  }

  return icon
}
