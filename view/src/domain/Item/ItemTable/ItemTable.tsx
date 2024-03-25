import { useCallback, useMemo } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { useDeviceSize } from '@hooks';
import { ScrollView } from '@workspace/ui';

import {
  filterStore,
  itemStore,
  modalItemStore,
  modalShowStore,
  searchStore,
} from '@domain/Item/store';

import { ColumnType, COLUMNS } from './preamble';
import { TBox, Row, Container, Cell } from './styled';

export interface TableProps {
  columns?: ColumnType[];
  items?: ItemInterface[];
}

const Header = ({ columns = [] }: Pick<TableProps, 'columns'>) => {
  return (
    <TBox className='table-header'>
      <Row>
        {columns.map((v) => (
          <Cell
            key={v.value}
            style={{ flexBasis: v.basis, minWidth: v.minWidth }}
            data-type='th'
            className='ff fzp fwb fcs'
          >
            {v.label}
          </Cell>
        ))}
      </Row>
    </TBox>
  );
};

const Body = ({ columns = [], items = [] }: TableProps) => {
  const setModalShow = useSetRecoilState(modalShowStore);
  const setModalItem = useSetRecoilState(modalItemStore);

  const onClickItem = useCallback((v?: ItemInterface) => {
    setModalShow(true);
    setModalItem(v);
  }, []);

  return (
    <TBox className='table-body'>
      {items.map((v, i) => (
        <Row
          key={`${v.name}_${i}`}
          data-type='row'
          onClick={() => {
            onClickItem(v);
          }}
        >
          {columns.map((u) => (
            <Cell
              key={`${v.name}_${i}_${u.value}`}
              style={{ flexBasis: u.basis, minWidth: u.minWidth }}
              data-type='td'
              data-key={u.value}
              className='ff fzp fwr fc'
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

  const { isDesktop, isTablet, isMobile } = useDeviceSize();

  const refinedColumn = useMemo<ColumnType[]>(() => {
    if (isMobile) {
      return COLUMNS.filter((v) =>
        ['link', 'name', 'class', 'explain'].includes(v.value),
      );
    } else if (isTablet) {
      return COLUMNS.filter((v) =>
        ['link', 'name', 'obtain', 'class', 'type', 'explain'].includes(
          v.value,
        ),
      );
    }
    return COLUMNS;
  }, [isDesktop, isTablet, isMobile]);

  const refinedList = useMemo<ItemInterface[]>(() => {
    let itemData: ItemInterface[] = itemTableData;

    if (itemData.length === 0) return [];

    if (filterList.length > 0)
      itemData =
        filterList.length === 0
          ? itemData
          : itemData.filter((v) => filterList.includes(v.class ?? ''));

    if (searchValue.length > 0) {
      itemData = itemData.filter(
        (v) =>
          // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
          v.name?.includes(searchValue) ||
          // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
          v.nickname?.includes(searchValue) ||
          // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
          v.obtain?.join('|').includes(searchValue) ||
          // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
          v.nation?.includes(searchValue) ||
          v.explain?.join('|').includes(searchValue),
      );
    }

    return itemData;
  }, [itemTableData, filterList, searchValue]);

  return (
    <ScrollView>
      <Container>
        <Header columns={refinedColumn} />
        <Body
          columns={refinedColumn}
          // items={
          //   filterList.length === 0
          //     ? itemTableData
          //     : itemTableData.filter((v) => filterList.includes(v.class ?? ''))
          // }
          items={refinedList}
        />
      </Container>
    </ScrollView>
  );
};

export default ItemTable;
