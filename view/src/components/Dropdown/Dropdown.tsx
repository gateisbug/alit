import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

import useDropdown from './useDropdown';

const Container = styled.div.attrs({
  className: 'ui-dropd-container',
})`
  position: relative;
`;

const Anchor = styled.div.attrs({
  className: 'ui-dropd-anchor',
})`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div.attrs({
  className: 'ui-dropd-box',
})`
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
      const x = cLeft + cWidth / 2 - bWidth / 2; // container left + container width / 2 - box width / 2;
      const ww = window.innerWidth;

      // anchor의 x 좌표 + box의 width가 window의 innerWidth에서 padding만큼 뺀 크기 안에 있다면
      // true : x좌표를 그대로 return
      // false : window.innerWidth - padding - box의 width - borderWidth
      return x + bWidth < ww - 16 ? x : ww - 16 - bWidth - 1;
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
