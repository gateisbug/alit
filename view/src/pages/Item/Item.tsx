import React from 'react';
import { Header } from '@domain/common';
import { ItemController, ItemTabs } from '@domain/Item';
import styled from 'styled-components';

const Pager = styled.div`
  padding: 3rem 2rem 0;
`;

const TableController = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
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
      </Pager>
    </div>
  );
};

export default ItemPage;
