import styled from 'styled-components';
import { Table } from '@components';

export const Container = styled(Table.Container)`
  margin-top: 2rem;
  border-bottom: 2px solid transparent;

  @media (prefers-color-scheme: light) {
    border-color: rgba(0, 0, 0, 0.16);
  }
  @media (prefers-color-scheme: dark) {
    border-color: rgba(255, 255, 255, 0.16);
  }
`;

export const TBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  //gap: 0.25rem;

  & > .table-row {
    padding: 0.75rem 0;
    border-bottom: 1px solid transparent;
    cursor: pointer;

    @media (prefers-color-scheme: light) {
      border-color: rgba(0, 0, 0, 0.08);
    }
    @media (prefers-color-scheme: dark) {
      border-color: rgba(255, 255, 255, 0.08);
    }
  }
  & > .table-row:last-of-type {
    border-bottom: none;
  }
`;

export const Row = styled(Table.Row)`
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    @media (prefers-color-scheme: light) {
      background-color: rgba(0, 0, 0, 0.04);
    }
    @media (prefers-color-scheme: dark) {
      background-color: rgba(255, 255, 255, 0.04);
    }
  }
`;

export const Cell = styled(Table.Cell)`
  font-family: Pretendard, Inter, system-ui, Avenir, Helvetica, Arial,
    sans-serif;
  font-size: 1rem;
  line-height: 2rem;
  text-align: center;

  &[data-type='th'] {
    font-weight: 700;
    color: var(--font-strong);
  }
  &[data-type='td'] {
    font-weight: 400;
    color: var(--font);
    word-break: keep-all;
  }
  &[data-key='explain'],
  &[data-key='obtain'] {
    justify-content: flex-start;
    text-align: start;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
`;

export const Ellipsis = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
`;
