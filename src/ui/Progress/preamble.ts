import { prefix } from '@ui/utils'

export interface ProgressTheme {
  primary?: string
}

export const THEME: ProgressTheme = {
  primary: 'var(--primary, #ffb74d)',
}

export const px = prefix('progress')

export interface CircularProgressProps {
  width?: number | string
  height?: number | string
  theme?: ProgressTheme
}

export interface CircularProgressBlockTransientProps {
  $width?: number | string
  $height?: number | string
}
