import { prefix } from '../utils';
import type { ReactNode } from 'react';

export type RowType = Record<string, string | number | null>;

export type ColumnsType = {
  field: string;
  headerName: string;
  width?: string | number;
  type?: 'string' | 'number';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  valueGetter?: (params: RowType) => ReactNode;
  // editable?: boolean;
};

export interface TableTheme {
  border?: string;
}

export const THEME: TableTheme = {
  border: 'var(--border, #6B7A90)',
};

export const px = prefix('Table');
