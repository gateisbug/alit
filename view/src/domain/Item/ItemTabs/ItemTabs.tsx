import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { Tabs } from '@components';

import { INDEX, PATH, TEXT, VALUE } from '../const';

const FitBox = styled.div.attrs({
  className: 'item-fitbox',
})`
  width: fit-content;
  min-width: 28.75rem; // 460px

  /* @device: Tablet */
  @media (max-width: 768px) {
    min-width: 23.75rem; // 380px
    & .ui-tabs-box {
      gap: 0;
    }
  }
`;

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
    <FitBox>
      <Tabs
        item={tabItems.current}
        defaultValue={ITEMS.find((v) => pathname === v.t)?.l ?? undefined}
      />
    </FitBox>
  );
};

export default React.memo(ItemTabs);
