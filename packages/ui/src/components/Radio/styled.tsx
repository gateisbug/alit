import styled from 'styled-components';

import { px, THEME } from './preamble';

export const RadioBox = styled.label.attrs({
  className: px('Box'),
})`
  display: inline-flex;
  flex-flow: row nowrap;
  gap: 0.25rem;
  cursor: pointer;

  &:has(input:disabled) {
    cursor: default;
  }
`;

export const RadioRoot = styled.input.attrs({
  className: px('Root'),
})`
  display: none;
`;

export const RadioMark = styled.div.attrs({
  className: px('Mark'),
})`
  position: relative;
  display: inline-flex;
  user-select: none;
  width: 1.5rem;
  height: 1.5rem;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  input:not(:disabled):checked + & {
    color: ${({ theme }) => theme.primary ?? THEME.primary};
  }

  & {
    @media (prefers-color-scheme: light) {
      color: ${({ theme }) => theme.default ?? THEME.default?.light};
      input:disabled + & {
        color: ${({ theme }) => theme.disabled ?? THEME.disabled?.light};
      }
    }
    /*noinspection CssUnresolvedCustomProperty*/
    @media (prefers-color-scheme: dark) {
      color: ${({ theme }) => theme.default ?? THEME.default?.dark};
      input:disabled + & {
        color: ${({ theme }) => theme.disabled ?? THEME.disabled?.dark};
      }
    }
  }

  & > svg {
    width: 1em;
    height: 1em;
    display: inline-block;
    flex-shrink: 0;
    font-size: 1.5rem;
  }
  & > svg:first-of-type {
    transform: scale(1);
  }
  & > svg:last-of-type {
    transform: scale(0);
    position: absolute;
    left: 0;
    transition: transform 150ms cubic-bezier(0.4, 0, 1, 1) 0ms;
  }
  input:not(:disabled):checked + & > svg:last-of-type {
    transform: scale(1);
  }
`;

RadioRoot.defaultProps = {
  type: 'radio',
};

RadioMark.defaultProps = {
  theme: {
    primary: 'var(--primary, #ffb74d)',
    default: {
      light: 'var(--default, #00000099)',
      dark: 'var(--default, #ffffffb2)',
    },
    disabled: {
      light: 'var(--disabled, #00000042)',
      dark: 'var(--disabled, #ffffff4c)',
    },
  },
};
