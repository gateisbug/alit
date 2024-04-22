import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

import { Button } from '@workspace/ui';

const Anchor = styled.div.attrs({
  className: 'ui-floatbtn-anchor',
})`
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 10;
  transform: scale(0);
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1);
  visibility: visible;
`;

const Dial = styled(Button.Root).attrs({
  className: 'ui-floatbtn-anchor',
})`
  position: relative;
  box-sizing: border-box;
  user-select: none;
  appearance: none;
  vertical-align: middle;
  text-decoration: none;
  text-transform: inherit;
  letter-spacing: 0;
  line-height: 1.75;
  scroll-margin-block: 6rem;
  border-radius: 50%;
  min-width: 0;
  padding: 0;
  width: 3rem;
  height: 3rem;

  @media (prefers-color-scheme: light) {
    box-shadow: rgba(170, 180, 190, 0.3) 0 0.25rem 1.25rem;
  }
  @media (prefers-color-scheme: dark) {
    box-shadow: rgba(0, 0, 0, 0.5) 0 0.25rem 1.25rem;
  }
`;

interface Props {
  children?: React.ReactNode;
}

const FloatButton = ({ children }: Props) => {
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const [hasScroll, setHasScroll] = React.useState(false);

  const onClick = React.useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleScroll = React.useCallback(() => {
    const scrolled = window.scrollY > 200;

    if (scrolled) {
      anchorRef.current?.setAttribute('style', 'transform: none;');
    } else {
      anchorRef.current?.setAttribute('style', 'transform: scale(0);');
    }
  }, []);

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  React.useEffect(() => {
    setHasScroll(document.body.scrollHeight > 200);
  }, []);

  return hasScroll
    ? createPortal(
        <Anchor ref={anchorRef}>
          <Dial onClick={onClick} className='ff fzb fwb'>
            {children}
          </Dial>
        </Anchor>,
        document.body,
      )
    : null;
};

export default React.memo(FloatButton);
