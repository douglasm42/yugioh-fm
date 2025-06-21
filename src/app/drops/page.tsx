'use client'

import Card from "@/components/content/Card"
import Ruler from "@/components/content/Ruler"
import Title from "@/components/content/Title"
import DropsTable from "@/app/drops/partials/DropsTable"

export default function DropsPage() {
  return (
    <Card>
      <Title>Drops</Title>
      <Ruler/>

      <DropsTable />
    </Card>
  )
}
