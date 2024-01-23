import React from 'react';
import { prefix } from '../utils';
import { PreferScheme } from '../common';

export interface SelectTheme {
  placeholder?: string;
  surface?: PreferScheme;
  border?: PreferScheme;
}

export const THEME: SelectTheme = {
  placeholder: 'var(--placeholder, #6B7A90)',
  surface: {
    light: 'var(--surface, #f1f1f2)',
    dark: 'var(--surface, #242424)',
  },
  border: {
    light: 'var(--border, #0000003A)',
    dark: 'var(--border, #FFFFFF3A)',
  },
};

export type SelectItemType = {
  label?: React.ReactNode;
  value: string | number | boolean | null;
};

export const px = prefix('Select');
