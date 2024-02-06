import React from 'react';
import { Tabs } from '@components';
import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';

const Anchor = styled(NavLink)`
  display: block;
  padding: 0.5rem 0.75rem;
  color: inherit;
  text-decoration: none;
`;

const ITEMS = [
  { l: 'all', t: '/item', r: '전체' },
  { l: 'gun', t: '/item/gun', r: '함포' },
  { l: 'torpedo', t: '/item/torpedo', r: '어뢰' },
  { l: 'antiair', t: '/item/antiair', r: '대공' },
  {
    l: 'aircraft',
    t: '/item/aircraft',
    r: '함재기',
  },
  {
    l: 'accessory',
    t: '/item/accessory',
    r: '설비',
  },
  { l: 'special', t: '/item/special', r: '특수' },
];

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
