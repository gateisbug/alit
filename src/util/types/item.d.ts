type ItemDomain =
  | 'all'
  | 'gun'
  | 'torpedo'
  | 'antiair'
  | 'aircraft'
  | 'accessory'
  | 'special'
  | string

type ItemClass =
  | 'dd'
  | 'cl'
  | 'ca'
  | 'bb'
  | 'cb'
  | 'surface'
  | 'submarine'
  | 'missile'
  | 'normal'
  | 'fuse'
  | 'fighter'
  | 'bomber'
  | 'seaplane'
  | 'torpedo-bomber'
  | 'backline'
  | 'frontline'
  | 'signiture'
  | 'sailing'
  | string

interface ItemInterface {
  class?: ItemClass
  domain?: ItemDomain
  explain?: string[]
  image?: string
  index?: number
  name?: string
  nation?: NationType
  nickname?: string
  // no?: number
  obtain?: string[]
  status?: string[]
  tag?: string[]
  tier?: TierType
  type?: string
  // id?: number
  // link?: string
}
