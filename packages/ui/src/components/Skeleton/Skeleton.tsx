import React from 'react';
import { CommonProps } from '../common';
import { SkeletonTheme, SkeletonVarientType } from './preamble';
import { SkeletonRoot } from './styled';

export interface SkeletonProps extends Omit<CommonProps, 'children'> {
  varient?: SkeletonVarientType;
  theme?: SkeletonTheme;
}

const Skeleton = React.forwardRef<HTMLSpanElement, SkeletonProps>(
  function Skeleton(props, forwardRef) {
    const { varient, className, ...other } = props;

    return (
      <SkeletonRoot
        ref={forwardRef}
        $varient={varient}
        className={className}
        {...other}
      />
    );
  },
);

interface SkeletonComponent
  extends React.MemoExoticComponent<
    React.ForwardRefExoticComponent<
      SkeletonProps & React.RefAttributes<HTMLSpanElement>
    >
  > {
  Root: typeof SkeletonRoot;
}

const MemoizedSkeleton = React.memo(Skeleton) as SkeletonComponent;
MemoizedSkeleton.Root = SkeletonRoot;

export default MemoizedSkeleton;
