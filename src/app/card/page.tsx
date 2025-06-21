'use client'
 
import Card from '@/components/content/Card'
import CardDetails from './partials/CardDetails'
import { Suspense } from 'react'
import Title from '@/components/content/Title'
import Ruler from '@/components/content/Ruler'
import { useSearchParams } from 'next/navigation'
import { cardsIndex } from '@/helpers/cards'
 
export default function CardPage() {
  const searchParams = useSearchParams()
 
  const id: string | null = searchParams.get('id')
  if(!id) {
    return (<div>Not Found!</div>)
  }

  const card = cardsIndex[Number.parseInt(id)]

  return (
    <Card>
      <Title>#{card.id} - {card.name}</Title>
      <Ruler/>

      <CardDetails card={card} />
    </Card>
  )
}