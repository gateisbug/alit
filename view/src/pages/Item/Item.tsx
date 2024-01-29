import React from 'react';
import { Button } from '@workspace/ui';
import { Header } from '@domain/common';

const ItemPage = () => {
  const [value, setValue] = React.useState('');

  return (
    <div>
      <Header />
      Item Page<Button>hello</Button>
      {/* <Search setValue={setValue} /> */}
    </div>
  );
};

export default ItemPage;
