import React, { useEffect, useState } from 'react'
import Pagination from './Pagination'
import './Table.css'
import TableSorter from './TableSorter'
import TableFilter, { SetFilterFunction } from './TableFilter'

export interface TableColumn<T> {
  title: React.ReactNode
  key: string
  field: (record: T) => React.ReactNode
  sorter?: (a: T, b: T) => number
  filter?: (setFilter: SetFilterFunction<T>) => React.ReactNode
}

interface SortColumn<T> {
  column: TableColumn<T>
  ascending: boolean
}

function renderTHeadCell<T>(column: TableColumn<T>, handleSortChange: (column: TableColumn<T>) => void, sortColumn: SortColumn<T> | undefined, setFilter: SetFilterFunction<T> ): React.ReactNode {
  let controls = []
  if(column.sorter) {
    controls.push(
      <TableSorter key='sorter' ascending={sortColumn?.column.key == column.key ? sortColumn.ascending : undefined } onClick={() => handleSortChange(column)} />
    )
  }

  if(column.filter) {
    controls.push(
      <TableFilter key='filter' renderFilter={column.filter} setFilter={setFilter}/>
    )
  }

  return (
    <th key={column.key}>
      <div className='table-column-header-container'>
        <div>
          {column.title}
        </div>
        <div className='table-column-header-actions-container'>
          {controls}
        </div>
      </div>
    </th>
  )
}

function renderTHeadRow<T>(columns: TableColumn<T>[], handleSortChange: (column: TableColumn<T>) => void, sortColumn: SortColumn<T> | undefined, setFilter: SetFilterFunction<T> ): React.ReactNode {
  return columns.map( column => renderTHeadCell(column, handleSortChange, sortColumn, setFilter) )
}

function renderTBodyCell<T>(record: T, column: TableColumn<T>): React.ReactNode {
  return (
    <td className='table-cell' key={column.key}>{column.field(record)}</td>
  )
}

function renderTBodyRow<T>(record: T, columns: TableColumn<T>[], recordKey: (record: T) => string): React.ReactNode {
  const cells = columns.map( column => renderTBodyCell(record, column) )

  return (
    <tr key={recordKey(record)}>
      {cells}
    </tr>
  )
}

interface TableProps<T> {
  columns: TableColumn<T>[]
  records: T[]
  recordKey: (record: T) => string
  pageSize?: number
}

export default function Table<T>({ columns, records, recordKey, pageSize }: TableProps<T>) {
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [recordsPage, setRecordsPage] = useState<T[]>([])
  const [sortColumn, setSortColumn] = useState<SortColumn<T> | undefined>(undefined)
  const [filters, setFilters] = useState<Record<string, (record: T) => boolean>>({})

  const setFilter = (key: string, filter?: (record: T) => boolean) => {
    if(filter) {
      setFilters({...filters, [key]: filter})
    } else {
      const filtersToSet = {...filters}
      delete filtersToSet[key]
      setFilters(filtersToSet)
    }
  }

  const sortRecords = (records: T[]): T[] => {
    if(sortColumn?.column.sorter) {
      const sorter = sortColumn.column.sorter
      const asc = sortColumn.ascending ? 1 : -1
      return records.slice().sort( (a, b) => ( asc * sorter(a, b)) )
    }

    return records
  }

  const passAllFilters = (record: T): boolean => {
    return Object.values(filters).every( f => f(record))
  }

  useEffect(() => {
    let sortedRecords = sortRecords(records.filter(passAllFilters))

    setRecordsPage(pageSize ? sortedRecords.slice(pageSize * currentPage, pageSize * currentPage + pageSize) : sortedRecords)

    return () => {}
  }, [currentPage, records.length, sortColumn, filters])

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const handleSortChange = (column: TableColumn<T>) => {
    if(sortColumn == undefined || sortColumn.column.key != column.key) {
      setSortColumn({ column: column, ascending: true })
    } else if(sortColumn.column.key == column.key) {
      if(sortColumn.ascending) {
        setSortColumn({ column: column, ascending: false })
      } else {
        setSortColumn(undefined)
      }
    }
  }

  const header = renderTHeadRow(columns, handleSortChange, sortColumn, setFilter)

  const rows = recordsPage.map( record => renderTBodyRow(record, columns, recordKey) )

  const pagination = pageSize ? (
    <Pagination pageSize={pageSize} totalRecords={records.length} currentPage={currentPage} onPageChange={handlePageChange} />
  ) : null

  return (
    <div>
      <div className='overflow-x'>
        <table className='table'>
          <thead>
            <tr className='table-header'>
              {header}
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
      {pagination}
    </div>
  )
}
