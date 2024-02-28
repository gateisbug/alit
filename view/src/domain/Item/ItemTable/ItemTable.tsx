import { TBox, Row, Container, Cell } from './styles';
import { ColumnType, COLUMNS, getJson } from './preamble';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
    <TBox className='table-body'>
      {items.map((v, i) => (
        <Row key={`${v.name}_${i}`} data-type='row'>
          {columns.map((u) => (
            <Cell
              key={`${v.name}_${i}_${u.value}`}
              style={{ flexBasis: u.basis, minWidth: u.minWidth }}
              data-type='td'
              data-key={u.value}
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
  const params = useParams();
  const [data, setData] = useState<ItemInterface[]>([]);

  useEffect(() => {
    const path: ItemURL = (params?.category as ItemURL | undefined) ?? 'all';
    getJson(path)
      .then((res) => {
        setData(res);
      })
      .catch((reject) => {
        console.error(reject);
      });
  }, [params]);

  return (
    <Container>
      <Header columns={COLUMNS} />
      <Body columns={COLUMNS} items={data} />
    </Container>
  );
};

export default ItemTable;
