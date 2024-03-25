import React, { useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { Container, Box, Text } from './styled';

interface Props {
  show?: boolean;
  children?: React.ReactNode;
  title?: React.ReactNode;
}

const Tooltip = ({ children, title }: Props) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useLayoutEffect(() => {
    if (!show || !containerRef?.current || !boxRef?.current) return;
    const {
      top,
      left,
      height,
      width: w,
    } = containerRef.current.getBoundingClientRect();
    const { width } = boxRef.current.getBoundingClientRect();

    const translateX = left - width / 2 + w / 2;
    const translateY = top + height;

    boxRef.current.setAttribute(
      'style',
      `transform: translate(${translateX}px, ${translateY}px)`,
    );
  }, [show]);

  return (
    <Container
      ref={containerRef}
      onMouseOver={() => {
        setShow(true);
      }}
      onMouseLeave={() => {
        setShow(false);
      }}
      onClick={() => {
        setShow(!show);
      }}
    >
      {children}
      {show
        ? createPortal(
            <Box ref={boxRef}>
              <Text data-placement={'bottom'}>{title}</Text>
            </Box>,
            document.body,
          )
        : null}
    </Container>
  );
};

export default Tooltip;
