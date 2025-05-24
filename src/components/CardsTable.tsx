import React from 'react'

import { Flex, Table, Tag } from 'antd'
import { ColumnGroupType, ColumnType } from 'antd/es/table'
import { Key } from 'antd/es/table/interface'
import { Card, cards, cardTypes } from '@/helpers/cards'
import GuardianStar from './GuardianStar'
import Link from 'next/link'

interface CardsTableProps {
  name?: string
}

const columns: (ColumnGroupType<Card> | ColumnType<Card>)[] = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    sorter: (a: Card, b: Card) => a.id - b.id,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: (a: Card, b: Card) => a.name.localeCompare(b.name),
    render: (_, record) => <Link key={`name-${record.id}`} href={`/card?id=${record.id}`}>{record.name}</Link>
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    sorter: (a: Card, b: Card) => a.type.localeCompare(b.type),
    filters: cardTypes.map( type => ({ text: type, value: type })),
    filterMode: 'menu',
    filterSearch: true,
    onFilter: (value: boolean | Key, record: Card) => record.type == value,
  },
  {
    title: 'Atk',
    dataIndex: 'atk',
    key: 'atk',
    sorter: (a: Card, b: Card) => (a.atk || 0) - (b.atk || 0),
    render: (_, record) => record.atk || record.def ? <Tag color='red'>{record.atk}</Tag> : null,
  },
  {
    title: 'Def',
    dataIndex: 'def',
    key: 'def',
    sorter: (a: Card, b: Card) => (a.def || 0) - (b.def || 0),
    render: (_, record) => record.def || record.def ? <Tag color='green'>{record.def}</Tag> : null,
  },
  {
    title: 'Cost',
    dataIndex: 'cost',
    key: 'cost',
    render: (_, record) => record?.code ? <code>{record.cost.toLocaleString()}</code> : null,
  },
  {
    title: 'Code',
    dataIndex: 'code',
    key: 'code',
    render: (_, record) => record?.code ? <code>{record.code.replace(/(\d\d\d\d)(\d\d\d\d)/, '$1.$2')}</code> : null,
  },
  {
    title: 'Stars',
    key: 'guardianStars',
    render: (_, record) => {
      if(!record.guardianStarA || !record.guardianStarB) {
        return null
      }

      return (
        <Flex gap="0.2em">
          <GuardianStar key={`gsa-${record.id}`} name={record.guardianStarA.name} />
          <GuardianStar key={`gsb-${record.id}`} name={record.guardianStarB.name} />
        </Flex>
      )
    },
  },
  {
    title: 'Strong',
    key: 'guardianStarsWeakTo',
    render: (_, record) => {
      if(!record.guardianStarA || !record.guardianStarB) {
        return null
      }

      return (
        <Flex gap="0.2em">
          <GuardianStar color='yellow' key={`sa-${record.id}`} name={record.guardianStarA.strong} />
          <GuardianStar color='yellow' key={`sb-${record.id}`} name={record.guardianStarB.strong} />
        </Flex>
      )
    },
  },
  {
    title: 'Weak',
    key: 'guardianStarsWeakTo',
    render: (_, record) => {
      if(!record.guardianStarA || !record.guardianStarB) {
        return null
      }

      return (
        <Flex gap="0.2em">
          <GuardianStar color='red' key={`wa-${record.id}`} name={record.guardianStarA.weak} />
          <GuardianStar color='red' key={`wb-${record.id}`} name={record.guardianStarB.weak} />
        </Flex>
      )
    },
  },
];

export default function CardsTable({ name }: CardsTableProps) {
  let list = cards

  if(name) {
    list = list.filter( card => card.name.toLowerCase().includes(name.toLowerCase()) )
  }

  return (
    <Table<Card> dataSource={list} columns={columns} pagination={{pageSize: 50, showSizeChanger: false}} />
  )
}
