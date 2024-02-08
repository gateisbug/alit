import styled from 'styled-components';
import { Table } from '@components';

export const TBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
`;

export const Th = styled(Table.Cell)`
  font-family: Pretendard, Inter, system-ui, Avenir, Helvetica, Arial,
    sans-serif;
  font-weight: 700;
  font-size: 1rem;
  line-height: 2rem;
  color: var(--font-strong);
`;

export const Td = styled(Table.Cell)`
  font-family: Pretendard, Inter, system-ui, Avenir, Helvetica, Arial,
    sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 2rem;
  color: var(--font);
  word-break: keep-all;
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
