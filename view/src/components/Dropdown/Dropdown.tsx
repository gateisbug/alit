import React from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';
import useDropdown from './useDropdown';

const Container = styled.div`
  position: relative;
`;

const Anchor = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  pointer-events: auto;
  padding: 0.5rem;
`;

interface Props {
  children?: React.ReactNode;
  contents?: React.ReactNode;
  show?: boolean;
}

const Dropdown = ({ children, contents, show }: Props) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const boxRef = React.useRef<HTMLDivElement>(null);

  const { windowWidth } = useDropdown();

  const handlePosition = React.useCallback(() => {
    if (!show || !containerRef.current || !boxRef.current) return;

    const {
      left: cLeft,
      bottom: cBottom,
      width: cWidth,
    } = containerRef.current.getBoundingClientRect();
    const { width: bWidth } = boxRef.current.getBoundingClientRect();

    const x = (() => {
      const x = cLeft + cWidth / 2 - bWidth / 2;
      const ww = window.innerWidth;

      return x + bWidth < ww - 16 ? x : ww - 16 - bWidth;
    })();
    const y = cBottom;

    boxRef.current.style.position = 'absolute';
    boxRef.current.style.inset = '0px auto auto 0px';
    boxRef.current.style.margin = '0px';
    boxRef.current.style.transform = `translate3d(${x}px, ${y}px, 0px)`;
  }, [show, windowWidth]);

  React.useEffect(() => {
    handlePosition();
  }, [handlePosition]);

  return (
    <Container>
      <Anchor ref={containerRef}>{children}</Anchor>
      {show
        ? createPortal(<Box ref={boxRef}>{contents}</Box>, document.body)
        : null}
    </Container>
  );
};

export default React.memo(Dropdown);
