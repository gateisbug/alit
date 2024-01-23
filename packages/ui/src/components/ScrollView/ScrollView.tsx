import React from 'react';
import { CommonProps } from '../common';
import { ScrollviewRoot } from './styled';

const ScrollView = React.forwardRef<HTMLDivElement, CommonProps>(
  function ScrollView(props, forwardRef) {
    const { children, className, ...others } = props;

    return (
      <ScrollviewRoot className={className} ref={forwardRef} {...others}>
        {children}
      </ScrollviewRoot>
    );
  },
);

interface ScrollViewComponent
  extends React.MemoExoticComponent<
    React.ForwardRefExoticComponent<
      CommonProps & React.RefAttributes<HTMLDivElement>
    >
  > {
  Root: typeof ScrollviewRoot;
}

const MemoizedScrollView = React.memo(ScrollView) as ScrollViewComponent;
MemoizedScrollView.Root = ScrollviewRoot;

export default MemoizedScrollView;
