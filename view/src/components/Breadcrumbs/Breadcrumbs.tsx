import React from 'react';
import styled from 'styled-components';

import ArrowRightIcon from '@icon/ArrowRightIcon';

const Container = styled.div.attrs({
  className: 'ui-breadcrumbs-container',
})`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 0.75rem;
`;

const Seperator = styled.div.attrs({
  className: 'ui-breadcrumbs-seperator',
})``;

const Span = styled.div.attrs({
  className: 'ui-breadcrumbs-span',
})``;

interface Props {
  texts: React.ReactNode[];
}

const Breadcrumbs = ({ texts }: Props) => {
  const makeSeperator = React.useCallback(
    (i: number) => {
      return (
        texts.length - 1 !== i && (
          <Seperator className='fcw'>
            <ArrowRightIcon width='0.875rem' height='0.875rem' />
          </Seperator>
        )
      );
    },
    [texts],
  );

  return (
    <Container>
      {texts.map((v, i) => (
        <React.Fragment key={i}>
          <Span>{v}</Span>
          {makeSeperator(i)}
        </React.Fragment>
      ))}
    </Container>
  );
};

interface BreadcrumbsComponent
  extends React.MemoExoticComponent<typeof Breadcrumbs> {
  Container: typeof Container;
  Seperator: typeof Seperator;
  Span: typeof Span;
}

const MemoizedBreadcrums = React.memo(Breadcrumbs) as BreadcrumbsComponent;
MemoizedBreadcrums.Container = Container;
MemoizedBreadcrums.Seperator = Seperator;
MemoizedBreadcrums.Span = Span;

export default React.memo(Breadcrumbs);
