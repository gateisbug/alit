import React from 'react';
import { Header } from '@domain/common';
import { ItemController, ItemTable, ItemTabs } from '@domain/Item';
import styled from 'styled-components';
import {FloatButton} from '@components';
import {ArrowUpIcon} from '@icon';

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
    </div>
  );
};

export default ItemPage;
