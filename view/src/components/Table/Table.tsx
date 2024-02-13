import styled from 'styled-components';

const TableContainer = styled.section`
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

const TableRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 16px;
`;

const TableCell = styled.div`
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
