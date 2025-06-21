import { uniq } from 'lodash'
import rawDrops from './drops.json'
import { v4 as uuidv4 } from 'uuid'

interface DropInput {
  rating: string
  duelist: string
  name: string
  type: string
  atk?: number
  def?: number
  chance: number
}

export class Drop {
  id: string
  rating: string
  duelist: string
  name: string
  type: string
  atk?: number
  def?: number
  chance: number

  constructor({ rating, duelist, name, type, atk, def, chance }: DropInput) {
    this.rating = rating
    this.duelist = duelist
    this.name = name
    this.type = type
    this.atk = atk
    this.def = def
    this.chance = chance
    this.id = uuidv4()
  }

  power(): number {
    return (this.atk || 0) + (this.def || 0)
  }

  comparer(): string {
    return `${this.type}-${(100000-this.power()).toString().padStart(5,'0')}-${this.name}-${this.rating}-${this.duelist}`
  }
}

function diff(a: Drop, b: Drop): number {
  return a.comparer().localeCompare(b.comparer())
}

const drops = rawDrops.map( dropData => new Drop(dropData)).sort( diff )

const ratings = ['pow', 'mid', 'tec']
const duelists = uniq(rawDrops.map( drop => drop.duelist))
const types = uniq(rawDrops.map( drop => drop.type))

export { ratings, duelists, types, drops }

export default drops
