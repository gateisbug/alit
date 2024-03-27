import React from 'react';

import { Container, Box, IconBox, Span } from './styled';

interface Props {
  icon?: React.ReactElement;
  label?: string;
  value?: React.ReactNode;
  className?: string;
}

const KeyValue = ({ label, value, icon, className }: Props) => {
  return (
    <Container className={className}>
      {icon && <IconBox>{icon}</IconBox>}
      <Box>
        <Span data-type='key'>{label}</Span>
        <Span data-type='value'>{value}</Span>
      </Box>
    </Container>
  );
};

interface KeyValueComponent extends React.MemoExoticComponent<typeof KeyValue> {
  Container: typeof Container;
  Box: typeof Box;
  IconBox: typeof IconBox;
  Span: typeof Span;
}

const MemoizedKeyValue = React.memo(KeyValue) as KeyValueComponent;
MemoizedKeyValue.Container = Container;
MemoizedKeyValue.Box = Box;
MemoizedKeyValue.IconBox = IconBox;
MemoizedKeyValue.Span = Span;

export default MemoizedKeyValue;
