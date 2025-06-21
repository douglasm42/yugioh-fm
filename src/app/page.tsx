'use client'

import Link from "next/link"

import StarsMap from "@/components/StarsMap"
import Card from "@/components/content/Card"
import Title from "@/components/content/Title"

export default function HomePage() {
  return (
    <Card>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <p>This was built to serve as a guide to the PS1 game Yu-Gi-Oh Forbidden Memories and its shenanigans.</p>
        <ul>
          <li><Link href='/drops'>Drops</Link> show a list of possible drops for each duelist.</li>
          <li><Link href='/cards'>Cards</Link> show the list of all cards in the game.</li>
          <li><Link href='/fusions'>Fusions</Link> show all possible fusions with the current hand.</li>
        </ul>
        <p>Bellow is a list of good to know stuff and instructions.</p>

        <Title level="h4">Guardian &quot;Stars&quot; Map</Title>
        <p>The arrow indicates the advantage. For example, Sun is strong against Moon, but weak against Mercury.</p>
        <div className="overflow-x">
          <StarsMap style={{ maxWidth: '700px', maxHeight: '360px', display: 'block', margin: '0 auto' }} />
        </div>
        <Title level="h4">Getting S-Tec Rank</Title>
        <p>The arrow indicates the advantage. For example, Sun is strong against Moon, but weak against Mercury.</p>
      </div>
    </Card>
  )
}
