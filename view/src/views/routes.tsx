import React, { lazy } from 'react';

const MainPage = lazy(async () => await import('../pages/Main'));

const ItemPage = lazy(async () => await import('../pages/Item'));

const TreePage = lazy(async () => await import('../pages/Tree'));

const ShipsPage = lazy(async () => await import('../pages/Ships'));

type RouteType = Array<{
  path: string;
  Component: React.ComponentType<any>;
  Fallback?: React.ComponentType<any>;
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
];
