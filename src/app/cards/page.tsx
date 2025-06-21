'use client'

import Card from "@/components/content/Card"
import Ruler from "@/components/content/Ruler"
import Title from "@/components/content/Title"
import CardsTable from "./partials/CardsTable"

export default function CardsPage() {
  return (
    <Card>
      <Title>Cards</Title>
      <Ruler/>

      <CardsTable />
    </Card>
  )
}
