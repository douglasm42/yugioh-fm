'use client'
 
import CardDetails from '@/components/CardDetails'
import { Suspense } from 'react'
 
export default function CardPage() {
  return (
    <Suspense>
      <CardDetails />
    </Suspense>
  )
}