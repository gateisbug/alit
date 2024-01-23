import { prefix } from '../utils';

export interface BadgeTheme {
  primary?: string;
  onPrimary?: string;
}

export const THEME: BadgeTheme = {
  primary: 'var(--primary, #ffb74d)',
  onPrimary: 'var(--on-primary, #1c2025)',
};

export type VariantType = 'standard' | 'dot';
export type VerticalType = 'top' | 'bottom';
export type HorizontalType = 'right' | 'left';

export const px = prefix('Badge');
