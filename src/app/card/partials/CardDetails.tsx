import { cardsIndex } from '@/helpers/cards'
import React from 'react'
import { Flex } from 'antd'
import Head from 'next/head'
import GuardianStar from '@/components/GuardianStar'
import FusionsList from '@/components/FusionsList'
import { useSearchParams } from 'next/navigation'
import Title from '@/components/content/Title'
import Ruler from '@/components/content/Ruler'

export default function CardDetails() {
  const searchParams = useSearchParams()
 
  const id: string | null = searchParams.get('id')
  if(!id) {
    return (<div>Not Found!</div>)
  }

  const card = cardsIndex[Number.parseInt(id)]

  return (
    <React.Fragment>
      <Title>#{card.id} - {card.name}</Title>
      <Ruler/>

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
    </React.Fragment>
  )
}
