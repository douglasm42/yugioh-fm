import React from 'react'

import { Card, cards, cardTypes } from '@/helpers/cards'
import Table, { TableColumn } from '@/components/content/Table';
import Tag from '@/components/content/Tag';
import { SetFilterFunction } from '@/components/content/TableFilter';
import StringFilter from '@/components/filters/StringFilter';
import OptionsFilter from '@/components/filters/OptionsFilter';
import Link from 'next/link';
import GuardianStar from '@/components/GuardianStar';

function compareNumbers(a?: number, b?: number): number {
  return (a == undefined ? -1 : a) - (b == undefined ? -1 : b)
}

const columns: TableColumn<Card>[] = [
  {
    title: 'ID',
    key: 'id',
    field: (card) => card.id,
  },
  {
    title: 'Name',
    key: 'name',
    field: (card) => <Link key={`name-${card.id}`} href={`/card?id=${card.id}`}>{card.name}</Link>,
    sorter: (a, b) => a.name.localeCompare(b.name),
    filter: (setFilter: SetFilterFunction<Card>) => {
      return (
        <StringFilter
          field='name'
          getField={(card: Card) => card.name}
          placeholder='Card Name'
          label='Filter by Name'
          setFilter={setFilter}
        />
      )
    },
  },
  {
    title: 'Type',
    key: 'type',
    field: (card) => card.type,
    sorter: (a, b) => a.type.localeCompare(b.type),
    filter: (setFilter: SetFilterFunction<Card>) => {
      return (
        <OptionsFilter
          field='type'
          getField={(card: Card) => card.type}
          setFilter={setFilter}
          options={cardTypes}
        />
      )
    },
  },
  {
    title: 'Atk',
    key: 'atk',
    field: (card) => (card.atk || card.def ? (<Tag color='red'>{card.atk}</Tag>) : null),
    sorter: (a, b) => compareNumbers(a.atk, b.atk),
  },
  {
    title: 'Def',
    key: 'def',
    field: (card) => (card.atk || card.def ? (<Tag color='green'>{card.def}</Tag>) : null),
    sorter: (a, b) => compareNumbers(a.def, b.def),
  },
  {
    title: 'Cost',
    key: 'cost',
    field: (card) => card?.cost ? <code>{card.cost.toLocaleString()}</code> : null,
    sorter: (a, b) => compareNumbers(a.cost, b.cost),
  },
  {
    title: 'Mod Cost',
    key: 'modCost',
    field: (card) => card?.modCost ? <code>{card.modCost.toLocaleString()}</code> : null,
    sorter: (a, b) => compareNumbers(a.modCost, b.modCost),
  },
  {
    title: 'Code',
    key: 'code',
    field: (card) => card?.code ? <code>{card.code.replace(/(\d\d\d\d)(\d\d\d\d)/, '$1.$2')}</code> : null,
  },
  {
    title: 'Stars',
    key: 'stars',
    field: (card) => {
      if(!card.guardianStarA || !card.guardianStarB) {
        return null
      }

      return (
        <div style={{display: 'flex'}}>
          <GuardianStar key={`gsa-${card.id}`} name={card.guardianStarA.name} />
          <GuardianStar key={`gsb-${card.id}`} name={card.guardianStarB.name} />
        </div>
      )
    },
  },
  {
    title: 'Strong',
    key: 'strong',
    field: (card) => {
      if(!card.guardianStarA || !card.guardianStarB) {
        return null
      }

      return (
        <div style={{display: 'flex'}}>
          <GuardianStar color='yellow' key={`gsa-${card.id}`} name={card.guardianStarA.strong} />
          <GuardianStar color='yellow' key={`gsb-${card.id}`} name={card.guardianStarB.strong} />
        </div>
      )
    },
  },
  {
    title: 'Weak',
    key: 'weak',
    field: (card) => {
      if(!card.guardianStarA || !card.guardianStarB) {
        return null
      }

      return (
        <div style={{display: 'flex'}}>
          <GuardianStar color='red' key={`gsa-${card.id}`} name={card.guardianStarA.weak} />
          <GuardianStar color='red' key={`gsb-${card.id}`} name={card.guardianStarB.weak} />
        </div>
      )
    },
  },
];

export default function CardsTable() {
  return (
    <Table<Card> records={cards} columns={columns} recordKey={card => card.id.toString()} pageSize={30} />
  )
}
