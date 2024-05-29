import { prefix } from '@ui/utils'

export interface ChipTheme {
  primary?: string
  onPrimary?: string
}

export const THEME: ChipTheme = {
  primary: 'var(--primary, #ffb74d)',
  onPrimary: 'var(--on-primary, #1c2025)',
}

export interface ChipRootTransientProps {
  $variant?: VariantType
}

export interface ChipProps {
  variant?: VariantType
  theme?: ChipTheme
  children?: NodeType
}

export type VariantType = 'fill' | 'line' | 'text'

export const cx = prefix('chip')

export const DEFAULT_PROPS = {
  variant: 'fill' as VariantType,
}
