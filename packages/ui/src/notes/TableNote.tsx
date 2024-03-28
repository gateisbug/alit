import { Table } from '@ui';
import { ColumnsType } from '@ui/Table/preamble';

type RowType = Record<string, string | number | null>;

export default function TableNote() {
  const columns: ColumnsType[] = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'firstName',
      headerName: 'First name',
      // width: 150,
      // editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      // width: 150,
      // editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      // width: 110,
      // editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      valueGetter: (params: RowType) =>
        `${params.firstName ?? ''} ${params.lastName ?? ''}`,
    },
  ];

  const rows: RowType[] = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  return (
    <article>
      <Table className='App-table' columns={columns} rows={rows} />
    </article>
  );
}
