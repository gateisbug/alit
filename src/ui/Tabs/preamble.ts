import { prefix } from '@ui/utils'

export interface TabsTheme {
  primary?: string
}

export const THEME: TabsTheme = {
  primary: 'var(--primary, #ffb74d)',
}

export interface TabsProps {
  item: Array<{
    label: string
    render?: NodeType
  }>
  defaultValue?: string
}

export const cx = prefix('tabs')
