import { prefix } from '@ui/utils'

import type { ChangeEvent } from 'react'

export interface CheckboxTheme {
  primary?: string
  default?: PreferScheme
  disabled?: PreferScheme
}

export const THEME: CheckboxTheme = {
  primary: 'var(--primary, #ffb74d)',
  default: {
    light: 'var(--default, #00000099)',
    dark: 'var(--default, #FFFFFFB2)',
  },
  disabled: {
    light: 'var(--disabled, #00000042)',
    dark: 'var(--disabled, #FFFFFF4C)',
  },
}

export interface CheckProps {
  checked?: boolean
  disabled?: boolean
  defaultChecked?: boolean
  multiple?: boolean
  name?: string
  value?: string | readonly string[] | number
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  readOnly?: boolean
  children?: NodeType
  theme?: CheckboxTheme
}

export const px = prefix('check')

export const DEFAULT_PROPS = {
  type: 'checkbox',
  variant: 'standard' as VariantType,
  vertical: 'top' as VerticalType,
  horizontal: 'right' as HorizontalType,
  max: 99,
}
