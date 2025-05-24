import { cards } from '@/helpers/cards'
import { Select } from 'antd'
import React from 'react'

interface CardOptions {
  value: number
  label: string
}

interface SelectCard {
  onChange: (cardId: number) => void
}

export default function SelectCard({ onChange }: SelectCard) {
  return (
    <Select<number, CardOptions>
      showSearch
      style={{ width: 200 }}
      placeholder="Card"
      optionFilterProp="label"
      filterSort={(optionA, optionB) =>
        (optionA.label ?? '').toLowerCase().localeCompare((optionB.label ?? '').toLowerCase())
      }
      options={cards.map( card => ({ value: card.id, label: card.name,  }))}
      onChange={onChange}
    />
  )
}
