import { prefix } from '../utils';

export interface ChipTheme {
  primary?: string;
  onPrimary?: string;
}

export const THEME: ChipTheme = {
  primary: 'var(--primary, #ffb74d)',
  onPrimary: 'var(--on-primary, #1c2025)',
};

export type VariantType = 'fill' | 'line' | 'text';

export const px = prefix('Chip');
