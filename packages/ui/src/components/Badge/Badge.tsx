import React from 'react';

import { CommonProps } from '../common';

import {
  BadgeTheme,
  HorizontalType,
  VariantType,
  VerticalType,
} from './preamble';
import { BadgeBox, BadgeRoot } from './styled';

export interface BadgeProps extends CommonProps {
  content?: number | string;
  horizontal?: HorizontalType;
  max?: number;
  show?: boolean;
  theme?: BadgeTheme;
  variant?: VariantType;
  vertical?: VerticalType;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  function Badge(props, forwardRef) {
    const {
      children,
      className,
      content,
      horizontal = 'right',
      max = 99,
      show = true,
      variant = 'standard',
      vertical = 'top',
      ...others
    } = props;

    return (
      <BadgeBox>
        {children}
        <BadgeRoot
          $variant={variant}
          $show={show}
          $vertical={vertical}
          $horizontal={horizontal}
          className={className}
          ref={forwardRef}
          {...others}
        >
          {variant === 'standard'
            ? typeof content === 'number' && content > max
              ? `${max}+`
              : content ?? ''
            : null}
        </BadgeRoot>
      </BadgeBox>
    );
  },
);

interface BadgeComponent
  extends React.MemoExoticComponent<
    React.ForwardRefExoticComponent<
      BadgeProps & React.RefAttributes<HTMLSpanElement>
    >
  > {
  Box: typeof BadgeBox;
  Root: typeof BadgeRoot;
}

const MemoizedBadge = React.memo(Badge) as BadgeComponent;
MemoizedBadge.Box = BadgeBox;
MemoizedBadge.Root = BadgeRoot;

export default MemoizedBadge;
