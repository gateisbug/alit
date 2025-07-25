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
  | 'HNLMS'
  | 'MOT'
  | string

type OptionType<T = string> = {
  value: T
  label: string
}

interface IChangeLog {
  version: string
  release?: string
  date?: string
  patch?: string[]
  isOpen?: boolean
}
