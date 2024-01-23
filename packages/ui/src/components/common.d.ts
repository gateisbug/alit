import React from 'react';

export type CommonProps<T = HTMLElement> = Pick<
  React.DetailedHTMLProps<React.HTMLAttributes<T>, T>,
  'id' | 'className' | 'children' | 'style'
>;

export type PreferScheme = {
  light?: string;
  dark?: string;
};
