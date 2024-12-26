type CharacterCate =
  | 'all'
  | '구축'
  | '경순'
  | '중순'
  | '대순'
  | '모니터'
  | '전함'
  | '순전'
  | '항전'
  | '경항모'
  | '항모'
  | '잠수'
  | '잠항'
  | '공작'
  | '미구'

interface CharacterInterface {
  category?: CharacterCate[]
  fleet?: string[]
  image?: string
  index?: number
  name?: string
  nation?: NationType
  // no?: number
  rarity?: TierType[]
  retrofitted?: boolean
  stat?: string[]
  tag?: string[]
}
