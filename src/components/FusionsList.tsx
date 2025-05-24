import { Card, Fusion } from '@/helpers/cards'
import { Tag } from 'antd'
import { uniq, uniqBy } from 'lodash'
import Link from 'next/link'
import React from 'react'

interface FusionsListProps {
  thisCard?: Card
  fusions: Fusion[]
}

function bestATKFusion(fusions: Fusion[]): Card | undefined {
  let best: Card | undefined = undefined
  fusions.forEach( fusion => {
    if((fusion.result.atk || 0) > (best?.atk || 0)) {
      best = fusion.result
    }
  })

  return best
}

function bestDEFFusion(fusions: Fusion[]): Card | undefined {
  let best: Card | undefined = undefined
  fusions.forEach( fusion => {
    if((fusion.result.def || 0) > (best?.def || 0)) {
      best = fusion.result
    }
  })

  return best
}

function fustionSorter(a: Fusion, b: Fusion) {
  return a._card1 - b._card1 || a._card2 - b._card2
}

export default function FusionsList({ thisCard, fusions }: FusionsListProps) {
  const bestATK = bestATKFusion(fusions)
  const bestDEF = bestDEFFusion(fusions)

  const fustionsRows = uniqBy(fusions, 'id').sort(fustionSorter).map( fusion => (
    <tr key={`${fusion._card1}-${fusion._card2}-${fusion._result}`}>
      {thisCard ? null : (<td>{fusion.card1.name}</td>)}
      <td>+</td>
      <td>
        {thisCard ? fusion.other(thisCard)?.name : fusion.card2.name}
      </td>
      <td>=</td>
      <td><Link href={`/card?id=${fusion.result.id}`}>{fusion.result.name}</Link></td>
      <td>{fusion.result.atk}</td>
      <td>/</td>
      <td>{fusion.result.def}</td>
      <td>
        {fusion.result.id == bestATK?.id ? <Tag color='red' >best</Tag> : null}
        {fusion.result.id == bestDEF?.id ? <Tag color='green' >best</Tag> : null}
      </td>
    </tr>
  ))

  return (
    <table>
      <tbody>
        {fustionsRows}
      </tbody>
    </table>
  )
}
