'use client'

import Card from "@/components/content/Card"
import Ruler from "@/components/content/Ruler"
import Title from "@/components/content/Title"
import DropsTable from "@/app/drops/partials/DropsTable"
import { useState } from "react"

export default function DropsPage() {
  const [ name, setName ] = useState<string>()

  return (
    <Card>
      <Title>Drops</Title>
      <Ruler/>

      <DropsTable />
    </Card>
  )
}
