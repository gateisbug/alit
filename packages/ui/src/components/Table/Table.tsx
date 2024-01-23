import React from 'react';
import { CommonProps } from '../common';
import { combineClass } from '@src/components/utils';
import { ColumnsType, px, RowType, TableTheme } from './preamble';
import { TableCell, TableContainer, TableRow } from './styled';

export interface TableProps extends Omit<CommonProps, 'children'> {
  columns: ColumnsType[];
  rows: RowType[];
  theme?: TableTheme;
}

const Table = React.forwardRef<HTMLDivElement, TableProps>(
  function Table(props, forwardRef) {
    const { columns, rows, theme, className, ...others } = props;

    return (
      <TableContainer ref={forwardRef} className={className} {...others}>
        <TableRow
          className={combineClass(px('Header'))}
          data-head={true}
          theme={theme}
        >
          {columns.map((v) => (
            <TableCell
              key={v.field}
              data-field={v.field}
              data-type={v.type ?? 'string'}
              className={combineClass(px('Head'))}
              style={{ width: v.width }}
            >
              {v.headerName}
            </TableCell>
          ))}
        </TableRow>

        {rows.map((v, i) => (
          <TableRow
            key={`row-${i}`}
            data-index={i}
            className={combineClass(px('Body'))}
          >
            {columns.map((c, l) => (
              <TableCell
                key={`${i}-${l}`}
                data-field={c.field}
                data-type={c.type ?? 'string'}
                className={combineClass(px('Data'))}
                style={{ width: c.width }}
              >
                {(c.valueGetter && c.valueGetter(v)) ?? v[c.field] ?? ''}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableContainer>
    );
  },
);

interface TableComponent
  extends React.MemoExoticComponent<
    React.ForwardRefExoticComponent<
      TableProps & React.RefAttributes<HTMLDivElement>
    >
  > {
  Container: typeof TableContainer;
  Row: typeof TableRow;
  Cell: typeof TableCell;
}

const MemoizedTable = React.memo(Table) as TableComponent;
MemoizedTable.Container = TableContainer;
MemoizedTable.Row = TableRow;
MemoizedTable.Cell = TableCell;

export default MemoizedTable;
