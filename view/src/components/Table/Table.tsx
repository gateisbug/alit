import styled from 'styled-components';

const TableContainer = styled.section.attrs({
  className: 'ui-table-container',
})`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  gap: 0.5rem;
`;

// const TableHeader = styled.header`
//   display: flex;
//   flex-flow: column nowrap;
//   width: 100%;
//   position: sticky;
//   top: 0;
// `;
//
// const TableBody = styled.article`
//   display: flex;
//   flex-flow: column nowrap;
//   width: 100%;
// `;

const TableRow = styled.div.attrs({
  className: 'ui-table-row',
})`
  display: flex;
  flex-flow: row nowrap;
  gap: 1rem;
`;

const TableCell = styled.div.attrs({
  className: 'ui-table-cell',
})`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  //background-color: var(--surface);
  background-color: transparent;
`;

const Table = {
  Container: TableContainer,
  // Header: TableHeader,
  // Body: TableBody,
  Row: TableRow,
  Cell: TableCell,
};

export default Table;
