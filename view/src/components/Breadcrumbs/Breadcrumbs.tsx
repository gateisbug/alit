import styled from 'styled-components';
import React from 'react';
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

export default React.memo(Breadcrumbs);
