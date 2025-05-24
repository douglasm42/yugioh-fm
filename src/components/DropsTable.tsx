import React from 'react'

import { Drop, drops, duelists, ratings, types } from '@/helpers/drops'
import { Table, Tag } from 'antd'
import { ColumnGroupType, ColumnType } from 'antd/es/table'
import { Key } from 'antd/es/table/interface'

interface DropsTableProps {
  name?: string
}

const columns: (ColumnGroupType<Drop> | ColumnType<Drop>)[] = [
  {
    title: 'Rating',
    dataIndex: 'rating',
    key: 'rating',
    sorter: (a: Drop, b: Drop) => a.rating.localeCompare(b.rating),
    filters: ratings.map( rating => ({ key: rating, text: rating, value: rating })),
    filterMode: 'menu',
    filterSearch: true,
    onFilter: (value: boolean | Key, record: Drop) => record.rating == value,
    render: (_value, record) => <React.Fragment key={`rating-${record.id}`}>{record.rating.toUpperCase()}</React.Fragment>,
  },
  {
    title: 'Duelist',
    dataIndex: 'duelist',
    key: 'duelist',
    sorter: (a: Drop, b: Drop) => a.duelist.localeCompare(b.duelist),
    filters: duelists.map( duelist => ({ key: duelist, text: duelist, value: duelist })),
    filterMode: 'menu',
    filterSearch: true,
    onFilter: (value: boolean | Key, record: Drop) => record.duelist == value,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: (a: Drop, b: Drop) => a.name.localeCompare(b.name),
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    sorter: (a: Drop, b: Drop) => a.type.localeCompare(b.type),
    filters: types.map( type => ({ key: type, text: type, value: type })),
    filterMode: 'menu',
    filterSearch: true,
    onFilter: (value: boolean | Key, record: Drop) => record.type == value,
  },
  {
    title: 'Atk',
    dataIndex: 'atk',
    key: 'atk',
    sorter: (a: Drop, b: Drop) => (a.atk || 0) - (b.atk || 0),
    render: (_value, record) => record.atk ? <Tag key={`atk-${record.id}`} color='red'>{record.atk}</Tag> : null,
  },
  {
    title: 'Def',
    dataIndex: 'def',
    key: 'def',
    sorter: (a: Drop, b: Drop) => (a.def || 0) - (b.def || 0),
    render: (_value, record) => record.def ? <Tag key={`def-${record.id}`} color='green'>{record.def}</Tag> : null,
  },
  {
    title: 'Chance',
    dataIndex: 'chance',
    key: 'chance',
  },
];

export default function DropsTable({ name }: DropsTableProps) {
  let list = drops

  if(name) {
    list = list.filter( drop => drop.name.toLowerCase().includes(name.toLowerCase()) )
  }

  return (
    <Table<Drop> dataSource={list} columns={columns} pagination={{pageSize: 50, showSizeChanger: false}} />
  )
}
