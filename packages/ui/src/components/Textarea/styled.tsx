import styled from 'styled-components';
import { px, THEME } from './preamble';

export const TextareaBox = styled.label.attrs({
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
      border-color: ${({ theme }) => theme.border ?? THEME.border?.light};
      &:has(:invalid) {
        border-color: ${({ theme }) => theme.invalid ?? THEME.invalid?.light};
      }
    }
    @media (prefers-color-scheme: dark) {
      border-color: ${({ theme }) => theme.border ?? THEME.border?.dark};
      &:has(:invalid) {
        border-color: ${({ theme }) => theme.invalid ?? THEME.invalid?.dark};
      }
    }
  }
`;

export const TextareaRoot = styled.textarea.attrs({
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
  resize: none;
  overflow-y: hidden;

  &::placeholder {
    color: ${({ theme }) => theme.placeholder ?? THEME.placeholder};
  }
  &:disabled {
    @media (prefers-color-scheme: light) {
      color: ${({ theme }) => theme.disabled.light ?? THEME.disabled?.light};
    }
    @media (prefers-color-scheme: dark) {
      color: ${({ theme }) => theme.disabled.dark ?? THEME.disabled?.dark};
    }
  }

  &:focus {
    border: none;
    outline: none;
  }
`;

TextareaBox.defaultProps = {
  theme: THEME,
};

TextareaRoot.defaultProps = {
  rows: 1,
  theme: THEME,
};
