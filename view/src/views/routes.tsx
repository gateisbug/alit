import React, { lazy } from 'react';

const MainPage = lazy(async () => await import('../pages/Main'));

const ItemPage = lazy(async () => await import('../pages/Item'));

const TreePage = lazy(async () => await import('../pages/Tree'));

const ShipsPage = lazy(async () => await import('../pages/Ships'));

const NAPage = lazy(async () => await import('../pages/NA'));

type RouteType = Array<{
  path: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: React.ComponentType<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Fallback?: React.ComponentType<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props?: React.ComponentProps<any>;
}>;

export const routes: RouteType = [
  {
    path: '/',
    Component: MainPage,
    props: {
      to: '/item',
    },
  },
  {
    path: '/item/:category?/:id?',
    Component: ItemPage,
  },
  {
    path: '/Tree',
    Component: TreePage,
  },
  {
    path: '/Ships',
    Component: ShipsPage,
  },
  {
    path: '*',
    Component: NAPage,
    props: {
      to: '/',
    },
  },
];
