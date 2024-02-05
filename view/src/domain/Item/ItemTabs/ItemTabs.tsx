import React from 'react';
import { Tabs } from '@components';

const ItemTabs = () => {
  const tabItems = React.useRef([
    { label: 'all', render: '전체' },
    { label: 'gun', render: '함포' },
    { label: 'torpedo', render: '어뢰' },
    { label: 'antiair', render: '대공' },
    { label: 'aircraft', render: '함재기' },
    { label: 'accessory', render: '설비' },
    { label: 'special', render: '특수' },
  ]);

  return <Tabs item={tabItems.current} />;
};

export default React.memo(ItemTabs);
