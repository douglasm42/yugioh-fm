'use client'

import DropsTable from "@/components/DropsTable"
import { Input } from "antd"
import Head from "next/head"
import { useState } from "react"

export default function DropsPage() {
  const [ name, setName ] = useState<string>()

  return (
    <div>
      <Head>
        <title>Drops</title>
      </Head>
      <Input placeholder="Card Name" value={name} onChange={e => setName(e.target.value)} />
      <br />
      <DropsTable name={name} />
    </div>
  )
}
