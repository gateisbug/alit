import { prefix } from '../utils';

export interface ModalTheme {
  surface?: string;
  backdrop?: string;
  shadow?: string;
}

export const THEME: ModalTheme = {
  backdrop: 'var(--backdrop, #0000007F)',
  surface: 'var(--surface, #fff)',
  shadow: 'var(--shadow, #00000099)',
};

export const px = prefix('Modal');
