'use client'

import Card from "@/components/content/Card"
import Ruler from "@/components/content/Ruler"
import Title from "@/components/content/Title"
import { useState } from "react"
import CardsTable from "./partials/CardsTable"

export default function CardsPage() {
  const [ name, setName ] = useState<string>()

  return (
    <Card>
      <Title>Cards</Title>
      <Ruler/>

      <CardsTable />
    </Card>
  )
}
