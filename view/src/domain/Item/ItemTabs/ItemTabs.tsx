import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { Tabs } from '@components';

import { INDEX, PATH, TEXT, VALUE } from '../const';

const Anchor = styled(NavLink).attrs({
  className: 'ui-itemtabs-anchor',
})`
  display: block;
  padding: 0.5rem 0.75rem;
  color: inherit;
  text-decoration: none;
`;

type ItemsType = {
  l: string;
  t: string;
  r: string;
};
const ITEMS: ItemsType[] = INDEX.map((v) => ({
  l: VALUE[v],
  t: PATH[v],
  r: TEXT[v],
}));

const ItemTabs = () => {
  const { pathname } = useLocation();

  const tabItems = React.useRef(
    ITEMS.map((v) => ({
      label: v.l,
      render: <Anchor to={v.t}>{v.r}</Anchor>,
    })),
  );

  return (
    <Tabs
      item={tabItems.current}
      defaultValue={ITEMS.find((v) => pathname === v.t)?.l ?? undefined}
    />
  );
};

export default React.memo(ItemTabs);
