import React, { useEffect } from 'react';
import { Header } from '@domain/common';
import { ItemController, ItemModal, ItemTable, ItemTabs } from '@domain/Item';
import styled from 'styled-components';
import { FloatButton } from '@components';
import { ArrowUpIcon } from '@icon';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import { filterStore, itemStore, searchStore } from '@domain/Item/store';
import { getJson } from '@domain/Item/ItemTable/preamble';
import { useParams } from 'react-router-dom';

const Pager = styled.div`
  padding: 3rem 2rem 0;
`;

const TableController = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0;
  background-color: var(--surface);
`;

const ItemPage = () => {
  const params = useParams();
  const setItemTableData = useSetRecoilState(itemStore);
  const resetFilterList = useResetRecoilState(filterStore);
  const resetSearchValue = useResetRecoilState(searchStore);

  useEffect(() => {
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

  React.useEffect(() => {
    console.log('render');
  });

  return (
    <div>
      <Header />
      <Pager className='wrap'>
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
