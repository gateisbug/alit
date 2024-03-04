import { TBox, Row, Container, Cell } from './styles';
import { ColumnType, COLUMNS } from './preamble';
import { useRecoilValue } from 'recoil';
import { filterStore, itemStore, searchStore } from '@domain/Item/store';
import { useMemo } from 'react';

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
  const itemTableData = useRecoilValue(itemStore);
  const filterList = useRecoilValue(filterStore);
  const searchValue = useRecoilValue(searchStore);

  const refinedList = useMemo<ItemInterface[]>(() => {
    let itemData: ItemInterface[] = itemTableData;

    if (itemData.length === 0) return [];

    if (filterList.length > 0)
      itemData =
        filterList.length === 0
          ? itemData
          : itemData.filter((v) => filterList.includes(v.class ?? ''));

    if (searchValue.length > 0)
      itemData = itemData.filter(
        (v) =>
          v.name?.includes(searchValue) ||
          v.nickname?.includes(searchValue) ||
          v.nation?.includes(searchValue),
      );

    return itemData;
  }, [itemTableData, filterList, searchValue]);

  return (
    <Container>
      <Header columns={COLUMNS} />
      <Body
        columns={COLUMNS}
        // items={
        //   filterList.length === 0
        //     ? itemTableData
        //     : itemTableData.filter((v) => filterList.includes(v.class ?? ''))
        // }
        items={refinedList}
      />
    </Container>
  );
};

export default ItemTable;
