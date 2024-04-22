import { PreferScheme } from '../common';
import { prefix } from '../utils';

export interface CheckboxTheme {
  primary?: string;
  default?: PreferScheme;
  disabled?: PreferScheme;
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
};

export const px = prefix('Check');
