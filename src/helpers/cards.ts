import { uniq } from 'lodash'
import rawCardsData from './cards_v.json'
import modCostsData from './mod-costs.json'

const modCosts: Record<string, number> = modCostsData

const magicTypes = [
  "Magic",
  "Trap",
  "Ritual",
  "Equip",
]

export const cardTypes = [
  "Dragon",
  "Spellcaster",
  "Zombie",
  "Warrior",
  "Beast-Warrior",
  "Beast",
  "Winged Beast",
  "Fiend",
  "Fairy",
  "Insect",
  "Dinosaur",
  "Reptile",
  "Fish",
  "Sea Serpent",
  "Machine",
  "Thunder",
  "Aqua",
  "Pyro",
  "Rock",
  "Plant",
  "Magic",
  "Trap",
  "Ritual",
  "Equip",
]

interface Star {
  name: string
  strong: string
  weak: string
}

const stars = [
  { name: "Mars", strong: "Jupiter", weak: "Neptune" },
  { name: "Jupiter", strong: "Saturn", weak: "Mars" },
  { name: "Saturn", strong: "Uranus", weak: "Jupiter" },
  { name: "Uranus", strong: "Pluto", weak: "Saturn" },
  { name: "Pluto", strong: "Neptune", weak: "Uranus" },
  { name: "Neptune", strong: "Mars", weak: "Pluto" },
  { name: "Mercury", strong: "Sun", weak: "Venus" },
  { name: "Sun", strong: "Moon", weak: "Mercury" },
  { name: "Moon", strong: "Venus", weak: "Sun" },
  { name: "Venus", strong: "Mercury", weak: "Moon" },
]

interface FusionRawData {
  _card1: number
  _card2: number
  _result: number
}

interface CardRawData {
  Name: string,
  Description: string,
  Id: number,
  GuardianStarA: number,
  GuardianStarB: number,
  Level: number,
  Type: number,
  Attack: number,
  Defense: number,
  Stars: number,
  CardCode: string,
  Equip: null | number[],
  Fusions: FusionRawData[],
  Ritual: null | { RitualCard: number; Card1: number; Card2: number; Card3: number; Result: number; }[],
  Attribute: number
}

export class Fusion {
  id: string
  _card1: number
  _card2: number
  _result: number

  _card1_card?: Card
  _card2_card?: Card
  _result_card?: Card

  constructor(rawData: FusionRawData) {
    this._card1 = rawData._card1
    this._card2 = rawData._card2
    this._result = rawData._result

    this.id = `${rawData._card1}-${rawData._card2}-${rawData._result}`
  }

  get card1(): Card {
    if(this._card1_card) {
      return this._card1_card
    }

    return this._card1_card = cardsIndex[this._card1]
  }

  get card2(): Card {
    if(this._card2_card) {
      return this._card2_card
    }

    return this._card2_card = cardsIndex[this._card2]
  }

  get result(): Card {
    if(this._result_card) {
      return this._result_card
    }

    return this._result_card = cardsIndex[this._result]
  }

  takesPart(card: Card): boolean {
    return this._card1 == card.id || this._card2 == card.id
  }

  other(card: Card) {
    if(this._card1 == card.id) {
      return this.card2
    }
    if(this._card2 == card.id) {
      return this.card1
    }
    return null
  }
}

function orderFusionCards(fusion: FusionRawData): FusionRawData {
  if(fusion._card1 > fusion._card2) {
    return {
      _card1: fusion._card2,
      _card2: fusion._card1,
      _result: fusion._result,
    }
  } else {
    return fusion
  }
}

export const fusions: Fusion[] = uniq(rawCardsData.flatMap( card => card.Fusions.map( orderFusionCards ) )).map( raw => new Fusion(raw))

export class Card {
  id: number
  name: string
  description: string
  type: string
  guardianStarA: Star | undefined
  guardianStarB: Star | undefined
  level: number
  atk?: number
  def?: number
  cost: number
  code?: string
  fusions: Fusion[]

  constructor(card: CardRawData) {
    this.id = card.Id
    this.name = card.Name
    this.description = card.Description
    this.type = cardTypes[card.Type]
    this.guardianStarA = card.GuardianStarA !== 0 ? stars[card.GuardianStarA - 1] : undefined
    this.guardianStarB = card.GuardianStarB !== 0 ? stars[card.GuardianStarB - 1] : undefined
    this.level = card.Level
    this.atk = magicTypes.includes(this.type) ? undefined : card.Attack
    this.def = magicTypes.includes(this.type) ? undefined : card.Defense
    this.cost = modCosts[this.id] as number
    this.code = card.CardCode === '00000000' ? undefined : card.CardCode
    this.fusions = fusions.filter( fusion => fusion.takesPart(this) )
  }

  fusionResult(card: Card): Fusion | undefined {
    return this.fusions.find(fusion => (
      fusion._card1 == this.id && fusion._card2 == card.id ||
      fusion._card2 == this.id && fusion._card1 == card.id
    ))
  }
}

export const cards: Card[] = rawCardsData.map( rawCardData => new Card(rawCardData) )

export const cardsIndex: Record<number, Card> = {}
cards.forEach( card => cardsIndex[card.id] = card )
