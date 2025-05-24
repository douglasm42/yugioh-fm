'use client'

import Link from "next/link"

import StarsMap from "@/components/StarsMap"
import { ConfigProvider, theme } from "antd"

export default function HomePage() {
  return (
    <ConfigProvider
      theme={{
        // 1. Use dark algorithm
        algorithm: theme.darkAlgorithm,

        // 2. Combine dark algorithm and compact algorithm
        // algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
      }}
    >

    <div>
      <h1>Yu-Gi-Oh Forbidden Memories Helper</h1>
      <p><Link href='/drops'>Drops</Link> show a list of possible drops for each duelist. <Link href='/cards'>Cards</Link> show the list of all cards in the game.</p>

      <h2>Stars Map</h2>
      <p>The arrow indicates the advantage. For example, Sun is strong against Moon, but weak against Mercury.</p>
      <p style={{ margin: '0 auto' }}>
        <StarsMap style={{ maxWidth: '700px', maxHeight: '360px' }} />
      </p>
    </div>
    </ConfigProvider>
  )
}
