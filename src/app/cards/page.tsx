'use client'

import CardsTable from "@/components/CardsTable"
import { Input } from "antd"
import Head from "next/head"
import { useState } from "react"

export default function CardsPage() {
  const [ name, setName ] = useState<string>()

  return (
    <div>
      <Head>
        <title>Cards Search</title>
      </Head>
      <Input placeholder="Card Name" value={name} onChange={e => setName(e.target.value)} />
      <br />
      <CardsTable name={name} />
    </div>
  )
}
