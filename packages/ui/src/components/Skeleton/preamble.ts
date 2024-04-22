import { PreferScheme } from '../common';
import { prefix } from '../utils';

export type SkeletonVarientType = 'text' | 'circle' | 'paragraph';

export interface SkeletonTheme {
  surface?: PreferScheme;
}

export const THEME: SkeletonTheme = {
  surface: {
    light: 'var(--surface, rgba(0, 0, 0, 0.11))',
    dark: 'var(--surface, rgba(255, 255, 255, 0.13))',
  },
};

export const px = prefix('Skeleton');
