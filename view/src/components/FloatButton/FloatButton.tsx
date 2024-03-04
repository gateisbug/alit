import React from 'react';
import styled from 'styled-components';
import { createPortal } from 'react-dom';
import { Button } from '@workspace/ui';

const Anchor = styled.div`
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 10;
  transform: scale(0);
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1);
  visibility: visible;
`;

const Dial = styled(Button)`
  position: relative;
  box-sizing: border-box;
  user-select: none;
  appearance: none;
  vertical-align: middle;
  text-decoration: none;
  text-transform: inherit;
  font-weight: 700;
  letter-spacing: 0;
  font-family: Pretendard, Inter, system-ui, Avenir, Helvetica, Arial,
    sans-serif;
  font-size: 0.875rem;
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
  const [show, setShow] = React.useState<boolean>(false);
  const [hasScroll, setHasScroll] = React.useState<boolean>(false);

  const onClick = React.useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [show]);

  React.useEffect(() => {
    if (show) {
      setTimeout(() => {
        anchorRef.current?.setAttribute('style', 'transform: none;');
      }, 25);
    } else {
      anchorRef.current?.setAttribute('style', 'transform: scale(0);');
      setTimeout(() => {
        anchorRef.current?.setAttribute(
          'style',
          'visibility: hidden; transform: scale(0);',
        );
      }, 225);
    }
  }, [show]);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 200;
      setShow(scrolled);

      if (scrolled) {
        const hasScrollbar =
          document.body.scrollHeight > document.body.offsetHeight;
        setHasScroll(hasScrollbar);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return hasScroll
    ? createPortal(
        <Anchor ref={anchorRef}>
          <Dial onClick={onClick}>{children}</Dial>
        </Anchor>,
        document.body,
      )
    : null;
};

export default React.memo(FloatButton);
