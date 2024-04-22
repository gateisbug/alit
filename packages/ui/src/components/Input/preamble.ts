import { PreferScheme } from '../common';
import { prefix } from '../utils';

export interface InputTheme {
  primary?: string;
  border?: PreferScheme;
  invalid?: PreferScheme;
  placeholder?: string;
  disabled?: PreferScheme;
}

export const THEME: InputTheme = {
  primary: 'var(--primary, #ffb74d)',
  border: {
    light: 'var(--border, #0000003A)',
    dark: 'var(--border, #ffffff3a)',
  },
  invalid: {
    light: 'var(--invalid, #d32f2f)',
    dark: 'var(--invalid, #f44336)',
  },
  placeholder: 'var(--placeholder, #6B7A90)',
  disabled: {
    light: 'var(--disabled, #00000042)',
    dark: 'var(--disabled, #FFFFFF4C)',
  },
};

export type InputTypes =
  | 'text'
  | 'password'
  | 'url'
  | 'email'
  | 'date'
  | 'number';

export const px = prefix('Input');
