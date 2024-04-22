import { PreferScheme } from '../common';
import { prefix } from '../utils';

export interface ButtonTheme {
  primary?: string;
  onPrimary?: string;
  primaryHover?: string;
  disabled?: PreferScheme;
  onDisabled?: PreferScheme;
}

export const THEME: ButtonTheme = {
  primary: 'var(--primary, #ffb74d)',
  onPrimary: 'var(--on-primary, #1c2025)',
  primaryHover: 'var(--primary-hover, #b28035)',
  disabled: {
    light: 'var(--disabled, #0000001E)',
    dark: 'var(--disabled, #FFFFFF1E)',
  },
  onDisabled: {
    light: 'var(--on-disabled, #00000042)',
    dark: 'var(--on-disabled, #FFFFFF4C)',
  },
};

export type VariantType = 'fill' | 'line' | 'text';

export const px = prefix('Button');
