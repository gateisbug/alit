import React from 'react';
import { Button } from '@workspace/ui';
import { Header } from '@domain/common';
import { ItemController, ItemTabs } from '@domain/Item';
import styled from 'styled-components';

const Pageer = styled.div`
  padding: 0 48px;
`;

const TableController = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
`;

const ItemPage = () => {
  const [, setTest] = React.useState(0);
  console.log('render');

  return (
    <div>
      <Header />
      Item Page
      <Button
        onClick={() => {
          setTest((prev) => prev + 1);
        }}
      >
        hello
      </Button>
      <TableController>
        <ItemTabs />
        <ItemController />
      </TableController>
    </div>
  );
};

export default ItemPage;
