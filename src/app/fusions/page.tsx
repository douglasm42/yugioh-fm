'use client'

import DropsTable from "@/components/DropsTable"
import FusionsList from "@/components/FusionsList"
import SelectCard from "@/components/SelectCard"
import { forEachCombination } from "@/helpers/array"
import { Card, cards, cardsIndex, Fusion, fusions } from "@/helpers/cards"
import { Flex, Input, Select } from "antd"
import Head from "next/head"
import { useState } from "react"

function getPossibleFusions(cards: Card[]): Fusion[] {
  console.log(cards)
  if(cards.length === 0) {
    return []
  }

  let fusions: Fusion[] = []
  forEachCombination(cards.filter( c => c.fusions ), (a, b) => {
    console.log(a.name, b.name, a.fusionResult(b))
    const fusion = a.fusionResult(b)
    if(fusion) {
      fusions.push(fusion)

      fusions = fusions.concat(getPossibleFusions(cards.filter( c => c.id != a.id && c.id != b.id).concat(fusion.result)))
    }
  })

  return fusions
}

export default function DropsPage() {
  const [ card1, setCard1 ] = useState<Card | null>(null)
  const [ card2, setCard2 ] = useState<Card | null>(null)
  const [ card3, setCard3 ] = useState<Card | null>(null)
  const [ card4, setCard4 ] = useState<Card | null>(null)
  const [ card5, setCard5 ] = useState<Card | null>(null)

  const cards = [card1, card2, card3, card4, card5]

  const possibleFusions = getPossibleFusions(cards.filter( c => c != null))

  return (
    <div>
      <Head>
        <title>Hand Fusions</title>
      </Head>
      <Flex  gap="0.2em">
        <SelectCard onChange={ card => setCard1(cardsIndex[card]) } />
        <SelectCard onChange={ card => setCard2(cardsIndex[card]) } />
        <SelectCard onChange={ card => setCard3(cardsIndex[card]) } />
        <SelectCard onChange={ card => setCard4(cardsIndex[card]) } />
        <SelectCard onChange={ card => setCard5(cardsIndex[card]) } />
      </Flex>

      {
        possibleFusions.length > 0 ? (
          <h2>Possible Fusions</h2>
        ) : (
          <h2>No Possible Fussions Found</h2>
        )
      }
      <FusionsList fusions={possibleFusions} />
    </div>
  )
}
