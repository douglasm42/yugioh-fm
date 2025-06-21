import React from 'react'

import { Drop, drops, duelists, ratings, types } from '@/helpers/drops'
import Table, { TableColumn } from '@/components/content/Table';
import Tag from '@/components/content/Tag';
import { Color } from '@/components/types';
import { SetFilterFunction } from '@/components/content/TableFilter';
import StringFilter from '@/components/filters/StringFilter';
import OptionsFilter from '@/components/filters/OptionsFilter';

const columns: TableColumn<Drop>[] = [
  {
    title: 'Rating',
    key: 'rating',
    field: (record) => {
      const colors: Record<string, Color> = {
        'pow': 'red',
        'tec': 'blue',
        'mid': 'gray3',
      }
      return (
        <Tag color={colors[record.rating]}>{record.rating.toUpperCase()}</Tag>
      )
    },
    sorter: (a, b) => a.rating.localeCompare(b.rating),
    filter: (setFilter: SetFilterFunction<Drop>) => {
      return (
        <OptionsFilter
          field='rating'
          getField={(drop: Drop) => drop.rating}
          setFilter={setFilter}
          options={ratings}
        />
      )
    },
  },
  {
    title: 'Duelist',
    key: 'duelist',
    field: (record) => record.duelist,
    sorter: (a, b) => a.duelist.localeCompare(b.duelist),
    filter: (setFilter: SetFilterFunction<Drop>) => {
      return (
        <OptionsFilter
          field='duelist'
          getField={(drop: Drop) => drop.duelist}
          setFilter={setFilter}
          options={duelists}
        />
      )
    },
  },
  {
    title: 'Name',
    key: 'name',
    field: (record) => record.name,
    sorter: (a, b) => a.name.localeCompare(b.name),
    filter: (setFilter: SetFilterFunction<Drop>) => {
      return (
        <StringFilter
          field='name'
          getField={(drop: Drop) => drop.name}
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
    field: (record) => record.type,
    sorter: (a, b) => a.type.localeCompare(b.type),
    filter: (setFilter: SetFilterFunction<Drop>) => {
      return (
        <OptionsFilter
          field='type'
          getField={(drop: Drop) => drop.type}
          setFilter={setFilter}
          options={types}
        />
      )
    },
  },
  {
    title: 'Atk',
    key: 'atk',
    field: (record) => (record.atk || record.def ? (<Tag color='red'>{record.atk}</Tag>) : null),
    sorter: (a, b) => ( (a.atk || -1) - (b.atk || -1) ),
  },
  {
    title: 'Def',
    key: 'def',
    field: (record) => (record.atk || record.def ? (<Tag color='green'>{record.def}</Tag>) : null),
    sorter: (a, b) => ( (a.def || -1) - (b.def || -1) ),
  },
  {
    title: 'Chance',
    key: 'chance',
    field: (record) => record.chance,
    sorter: (a, b) => ( (a.chance || -1) - (b.chance || -1) ),
  },
];

export default function DropsTable() {
  return (
    <Table<Drop> records={drops} columns={columns} recordKey={record => record.id} pageSize={30} />
  )
}
