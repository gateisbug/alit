import styled from 'styled-components';

import { Table } from '@components';

export const Container = styled(Table.Container).attrs({
  className: 'ui-itemtable-container',
})`
  margin-top: 2rem;
  //padding-bottom: 3rem;
  overflow-x: auto;
`;

// noinspection CssUnusedSymbol
export const TBox = styled.div.attrs({
  className: 'ui-itemtable-box',
})`
  display: flex;
  flex-flow: column nowrap;
  //width: fit-content;
  width: 100%;

  &.table-body {
    width: fit-content;
    border-bottom: 0.125rem solid transparent;

    @media (prefers-color-scheme: light) {
      border-color: rgba(0, 0, 0, 0.16);
    }
    @media (prefers-color-scheme: dark) {
      border-color: rgba(255, 255, 255, 0.16);
    }
  }
`;

export const Row = styled(Table.Row).attrs({
  className: 'ui-itemtable-row',
})`
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  ${TBox} > &[data-type='row'] {
    padding: 0.75rem 0;
    border-bottom: 0.0625rem solid transparent;
    cursor: pointer;

    @media (prefers-color-scheme: light) {
      border-color: rgba(0, 0, 0, 0.08);
    }
    @media (prefers-color-scheme: dark) {
      border-color: rgba(255, 255, 255, 0.08);
    }

    &:last-of-type {
      border-bottom: none;
    }

    &:hover {
      @media (prefers-color-scheme: light) {
        background-color: rgba(0, 0, 0, 0.04);
      }
      @media (prefers-color-scheme: dark) {
        background-color: rgba(255, 255, 255, 0.04);
      }
    }
  }
`;

export const Cell = styled(Table.Cell).attrs({
  className: 'ui-itemtable-cell',
})`
  line-height: 1.5em;
  text-align: center;

  &[data-type='th'] {
    display: inline-block;
    width: 100%;
  }
  &[data-type='td'] {
    word-break: keep-all;
  }
  &[data-key='explain'],
  &[data-key='obtain'] {
    justify-content: flex-start;
    text-align: start;
  }
`;

export const CellBox = styled.div.attrs({
  className: 'ui-itemtable-cellbox',
})`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
`;

export const Ellipsis = styled.div.attrs({
  className: 'ui-itemtable-ellipsis',
})`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const NoSearchData = styled.div.attrs({
  className: 'ui-itemtable-nodata',
})`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 3rem 0;
  color: var(--font-strong);

  p:first-child {
    font-size: 12.5rem;
    line-height: 1.25em;
  }
  p:last-child {
    font-size: 1.5rem;
  }
`;
