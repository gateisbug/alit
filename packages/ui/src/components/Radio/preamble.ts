import { prefix } from '../utils';
import { PreferScheme } from '../common';

export interface RadioTheme {
  primary?: string;
  default?: PreferScheme;
  disabled?: PreferScheme;
}

export const THEME: RadioTheme = {
  primary: 'var(--primary, #ffb74d)',
  default: {
    light: 'var(--default, #00000099)',
    dark: 'var(--default, #ffffffb2)',
  },
  disabled: {
    light: 'var(--disabled, #00000042)',
    dark: 'var(--disabled, #ffffff4c)',
  },
};

export const px = prefix('Radio');
