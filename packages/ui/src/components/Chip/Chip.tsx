import React from 'react';

import { CommonProps } from '../common';

import { ChipTheme, VariantType } from './preamble';
import { ChipRoot } from './styled';

export interface ChipProps extends CommonProps {
  variant?: VariantType;
  theme?: ChipTheme;
}

const Chip = React.forwardRef<HTMLSpanElement, ChipProps>(
  function Chip(props, forwardRef) {
    const { children, className, variant = 'fill', ...others } = props;

    return (
      <ChipRoot
        $variant={variant}
        className={className}
        ref={forwardRef}
        {...others}
      >
        {children}
      </ChipRoot>
    );
  },
);

interface ChipComponent
  extends React.MemoExoticComponent<
    React.ForwardRefExoticComponent<
      ChipProps & React.RefAttributes<HTMLSpanElement>
    >
  > {
  Root: typeof ChipRoot;
}

const MemoizedChip = React.memo(Chip) as ChipComponent;
MemoizedChip.Root = ChipRoot;

export default MemoizedChip;
