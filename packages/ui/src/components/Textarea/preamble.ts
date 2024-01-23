import { prefix } from '../utils';
import { PreferScheme } from '../common';

export interface TextareaTheme {
  primary?: string;
  border?: PreferScheme;
  invalid?: PreferScheme;
  placeholder?: string;
  disabled?: PreferScheme;
}

export const THEME: TextareaTheme = {
  primary: 'var(--primary, #ffb74d)',
  placeholder: 'var(--placeholder, #6B7A90)',
  border: {
    light: 'var(--border, #0000003A)',
    dark: 'var(--border, #ffffff3a)',
  },
  invalid: {
    light: 'var(--invalid, #d32f2f)',
    dark: 'var(--invalid, #f44336)',
  },
  disabled: {
    light: 'var(--disabled, #00000042)',
    dark: 'var(--disabled, #FFFFFF4C)',
  },
};

export const px = prefix('Textarea');
