'use client'
 
import Card from '@/components/content/Card'
import CardDetails from './partials/CardDetails'
import { Suspense } from 'react'

export default function CardPage() {
  
  return (
    <Suspense>
      <Card>
        <CardDetails />
      </Card>
    </Suspense>
  )
}