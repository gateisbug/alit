import styled from 'styled-components';

import { px, THEME } from './preamble';

export const ModalBackdrop = styled.div.attrs({
  className: px('Backdrop'),
})`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${({ theme }) => theme.backdrop ?? THEME.backdrop};
  z-index: 1000;

  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
`;

export const ModalRoot = styled.div.attrs({
  className: px('Root'),
})`
  min-width: 20rem;
  min-height: 16rem;
  background-color: ${({ theme }) => theme.surface ?? THEME.surface};
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 1rem 0 ${({ theme }) => theme.shadow ?? THEME.shadow};
`;

ModalBackdrop.defaultProps = {
  theme: THEME,
};

ModalRoot.defaultProps = {
  theme: THEME,
};
