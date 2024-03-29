import React from 'react';
import { useParams } from 'react-router-dom';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import { FloatButton } from '@components';
import { ArrowUpIcon } from '@icon';

import { Header } from '@domain/common';
import { ItemController, ItemModal, ItemTable, ItemTabs } from '@domain/Item';
import { getJson } from '@domain/Item/ItemTable/preamble';
import { filterStore, itemStore, searchStore } from '@domain/Item/store';

const Pager = styled.div`
  padding: 3rem 2rem 0;
  //padding-bottom: 3rem;
`;

const TableController = styled.div.attrs({
  className: 'ui-table-controller',
})`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
  gap: 2rem;
  background-color: var(--surface);
  overflow-x: auto;
`;

const ItemPage = () => {
  const params = useParams();
  const setItemTableData = useSetRecoilState(itemStore);
  const resetFilterList = useResetRecoilState(filterStore);
  const resetSearchValue = useResetRecoilState(searchStore);

  React.useEffect(() => {
    resetFilterList();
    resetSearchValue();
    const path: ItemURL = (params?.category as ItemURL | undefined) ?? 'all';
    getJson(path)
      .then((res) => {
        setItemTableData(res);
      })
      .catch((reject) => {
        setItemTableData([]);
        console.error(reject);
      });
  }, [params]);

  return (
    <div>
      <Header />
      <Pager className='wrap' style={{ paddingBottom: '2rem' }}>
        <TableController>
          <ItemTabs />
          <ItemController />
        </TableController>
        <ItemTable />
      </Pager>

      <FloatButton>
        <ArrowUpIcon width='1.5rem' height='1.5rem' />
      </FloatButton>

      <ItemModal />
    </div>
  );
};

export default ItemPage;
