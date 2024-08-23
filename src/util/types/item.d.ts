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
  | string

type TierType = 'N' | 'R' | 'SR' | 'SSR' | 'UR' | string

type NationType =
  | 'USS'
  | 'HMS'
  | 'IJN'
  | 'KMS'
  | 'SMS'
  | 'ROC'
  | 'PRAN'
  | 'SN'
  | 'FFNF'
  | 'MNF'
  | 'RN'
  | 'MOT'
  | string

interface ItemInterface {
  index?: number | string
  name?: string
  tier?: TierType
  nickname?: string
  image?: string
  link?: string
  nation?: NationType
  explain?: string[]
  obtain?: string[]
  domain?: ItemDomain
  class?: ItemClass
  type?: string
  status?: string[]
}
