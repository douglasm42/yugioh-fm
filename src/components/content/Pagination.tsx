import React from 'react'
import './Pagination.css'

interface PaginationProps {
  pageSize: number
  totalRecords: number
  currentPage: number
  onPageChange: (page: number) => void
}

interface PageButtonProps {
  page: number
  currentPage: number
  onPageChange: (page: number) => void
  children?: React.ReactNode
}

function PageButton({ page, currentPage, onPageChange, children }: PageButtonProps): React.JSX.Element {
  return (
    <button className='pagination-button' key={page} onClick={() => onPageChange(page)} disabled={currentPage == page}>
      {children || (page+1)}
    </button>
  )
}

export default function Pagination({ pageSize, totalRecords, currentPage, onPageChange}: PaginationProps) {
  const totalPages = Math.ceil(totalRecords / pageSize)
  if(totalPages > 1) {
    const lastPage = totalPages - 1
    const pageButtons = []

    const firstVisibleButton = Math.max(currentPage - 2, 0)
    const lastVisibleButton = Math.min(currentPage + 2, lastPage)

    // Add previous button
    if(currentPage > 0) {
      pageButtons.push(
        <PageButton key='prev' page={currentPage - 1} currentPage={currentPage} onPageChange={onPageChange}>
          ‹
        </PageButton>
      )
    }

    // Add button for first page
    if(firstVisibleButton > 0) {
      pageButtons.push(<PageButton key='first' page={0} currentPage={currentPage} onPageChange={onPageChange} />)

      // If the first visible button is not just after the first, then add a separator
      if(firstVisibleButton > 1) {
        pageButtons.push(<div key='sec' className='pagination-spacer'>...</div>)
      }
    }

    // Add buttons around current page
    for(let i=firstVisibleButton ; i<=lastVisibleButton ; i++) {
      pageButtons.push(<PageButton key={i} page={i} currentPage={currentPage} onPageChange={onPageChange} />)
    }

    // Add button for last page
    if(lastVisibleButton < lastPage) {
      // If the last visible button is not just before the last page, then add a separator
      if(lastVisibleButton < (lastPage - 1)) {
        pageButtons.push(<div key='set-last' className='pagination-spacer'>...</div>)
      }

      pageButtons.push(<PageButton key='last' page={lastPage} currentPage={currentPage} onPageChange={onPageChange} />)
    }

    // Add next button
    if(currentPage < lastPage) {
      pageButtons.push(
        <PageButton key='next' page={currentPage + 1} currentPage={currentPage} onPageChange={onPageChange}>
          ›
        </PageButton>
      )
    }

    return (
      <div className='pagination-container'>
        {pageButtons}
      </div>
    )
  } else {
    return (
      <React.Fragment/>
    )
  }
}