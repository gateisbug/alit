import styled from 'styled-components';

import { THEME, px } from './preamble';

export const InputBox = styled.label.attrs({
  className: px('Box'),
})`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: 0.5rem;
  background-color: transparent;
  box-sizing: border-box;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: text;

  border: 0.0625rem solid transparent;
  border-radius: 0.25rem;
  padding: 0.75rem 1rem;

  &:has(:focus) {
    border-color: ${({ theme }) => theme.primary ?? THEME.primary};
  }
  &:has(:disabled) {
    cursor: default;
  }

  & {
    @media (prefers-color-scheme: light) {
      border-color: ${({ theme }) => theme.border.light ?? THEME.border?.light};
      &:has(:invalid) {
        border-color: ${({ theme }) =>
          theme.invalid.light ?? THEME.invalid?.light};
      }
    }
    @media (prefers-color-scheme: dark) {
      border-color: ${({ theme }) => theme.border.dark ?? THEME.invalid?.dark};
      &:has(:invalid) {
        border-color: ${({ theme }) =>
          theme.invalid.dark ?? THEME.invalid?.dark};
      }
    }
  }
`;

export const InputRoot = styled.input.attrs({
  className: px('Root'),
})`
  display: inline-block;
  box-sizing: border-box;
  background-color: transparent;
  color: inherit;
  font-family: inherit;
  font-size: 1rem;
  width: 100%;
  border: none;
  padding: 0;

  &:disabled {
    cursor: default;

    @media (prefers-color-scheme: light) {
      color: ${({ theme }) => theme.disabled.light ?? THEME.disabled?.light};
    }
    @media (prefers-color-scheme: dark) {
      color: ${({ theme }) => theme.disabled.dark ?? THEME.disabled?.dark};
    }
  }
  &::placeholder {
    color: ${({ theme }) => theme.placeholder};
  }

  &:focus {
    border: none;
    outline: none;
  }
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button,
  &::-webkit-clear-button,
  &::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
    margin: 0;
  }
  &[type='number'] {
    -moz-appearance: textfield;
  }
`;

InputBox.defaultProps = {
  theme: THEME,
};

InputRoot.defaultProps = {
  type: 'text',
  theme: THEME,
};
