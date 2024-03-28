import styled from 'styled-components';
import { px, THEME } from './preamble';

export const TableContainer = styled.div.attrs({
  className: px('Container'),
})`
  display: flex;
  flex-flow: column nowrap;
`;

export const TableRow = styled.div.attrs({
  className: px('Row'),
})`
  display: grid;
  gap: 0.5rem;
  &[data-head='true'] {
    font-weight: 700;
    border-bottom: 0.0625rem solid
      ${({ theme }) => theme.border ?? THEME.border};
  }
`;

export const TableCell = styled.div.attrs({
  className: px('Cell'),
})`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 0 0.5rem;
  box-sizing: border-box;

  &[data-type='number'] {
    justify-content: flex-end;
  }
  &[data-type='string'] {
    justify-content: flex-start;
  }
`;

TableRow.defaultProps = {
  theme: THEME,
};
