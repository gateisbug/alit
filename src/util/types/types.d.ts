type OptionType<T = string> = {
  value: T
  label: string
}

interface IChangeLog {
  version: string
  release?: string
  date?: string
  patch?: string[]
}
