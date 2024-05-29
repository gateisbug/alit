import { prefix } from '@ui/utils'

export type SkeletonVarientType = 'text' | 'circle' | 'paragraph'

export interface SkeletonTheme {
  surface?: PreferScheme
}

export interface SkeletonRootTransientProps {
  $varient?: SkeletonVarientType
}

export const THEME: SkeletonTheme = {
  surface: {
    light: 'var(--surface, rgba(0, 0, 0, 0.11))',
    dark: 'var(--surface, rgba(255, 255, 255, 0.13))',
  },
}

export interface SkeletonProps {
  varient?: SkeletonVarientType
  theme?: SkeletonTheme
}

export const cx = prefix('skeleton')
