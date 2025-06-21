import { Card } from '@/helpers/cards'
import React from 'react'
import { Flex } from 'antd'
import Head from 'next/head'
import GuardianStar from '@/components/GuardianStar'
import FusionsList from '@/components/FusionsList'

interface CardDetailsProps {
  card: Card
}

export default function CardDetails({ card }: CardDetailsProps) {
  return (
    <div>
      <Head>
        <title>{card.name}</title>
      </Head>

      <ul>
        <li><b>#{card.id}</b>: {card.name}</li>
        <li>{card.description}</li>
        <li>{card.type}</li>
        <li>
          <Flex gap="0.2em">
            {card.guardianStarA ? (<GuardianStar name={card.guardianStarA.name} size='1em' />) : null}
            {card.guardianStarB ? (<GuardianStar name={card.guardianStarB.name} size='1em' />) : null}
          </Flex>
        </li>
        <li><b>level</b>: {card.level}</li>
        <li><b>ATK</b>: {card.atk} / <b>DEF</b>: {card.def}</li>
        <li><b>cost</b>: {card.cost}</li>
        <li><b>code</b>: {card.code}</li>
      </ul>

      <FusionsList fusions={card.fusions} thisCard={card} />
    </div>
  )
}
