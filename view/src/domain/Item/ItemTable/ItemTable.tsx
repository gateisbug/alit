import { TBox, Row, Container, Cell } from './styles';
import { EXAMPLE, ColumnType, COLUMNS } from './preamble';

export interface TableProps {
  columns?: ColumnType[];
  items?: ItemInterface[];
}

const Header = ({ columns = [] }: Pick<TableProps, 'columns'>) => {
  return (
    <TBox>
      <Row>
        {columns.map((v) => (
          <Cell
            key={v.value}
            style={{ flexBasis: v.basis, minWidth: v.minWidth }}
            data-type='th'
          >
            {v.label}
          </Cell>
        ))}
      </Row>
    </TBox>
  );
};

const Body = ({ columns = [], items = [] }: TableProps) => {
  return (
    <TBox>
      {items.map((v, i) => (
        <Row key={`${v.name}_${i}`} className='table-row'>
          {columns.map((u) => (
            <Cell
              key={`${v.name}_${i}_${u.value}`}
              style={{ flexBasis: u.basis, minWidth: u.minWidth }}
              data-type='td'
            >
              {u.render ? u.render(v) : v[u.value]}
            </Cell>
          ))}
        </Row>
      ))}
    </TBox>
  );
};

const ItemTable = () => {
  return (
    <Container>
      <Header columns={COLUMNS} />
      <Body columns={COLUMNS} items={EXAMPLE} />
    </Container>
  );
};

export default ItemTable;
