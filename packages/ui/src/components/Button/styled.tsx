import styled, { css } from 'styled-components';
import { px, THEME, VariantType } from './preamble';

interface ButtonRootTransientProps {
  $fullWidth?: boolean;
  $variant?: VariantType;
}

export const ButtonRoot = styled.button.attrs({
  className: px('Root'),
})<ButtonRootTransientProps>`
  display: inline-flex;
  flex-flow: row nowrap;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  border: 0.0625rem solid transparent;
  transition:
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  &:hover {
    border-color: transparent;
  }
  &:focus {
    outline: none;
  }

  // fullWidth
  width: ${({ $fullWidth }) => ($fullWidth === true ? '100%' : 'auto')};

  // variant
  ${({ $variant }) => {
    switch ($variant) {
      case 'fill':
        return css`
          border-color: ${({ theme }) => theme.primary ?? THEME.primary};
          background-color: ${({ theme }) => theme.primary ?? THEME.primary};
          color: ${({ theme }) => theme.onPrimary ?? THEME.onPrimary};
          &:not(:disabled):hover {
            border-color: ${({ theme }) =>
              theme.primaryHover ?? THEME.primaryHover};
            background-color: ${({ theme }) =>
              theme.primaryHover ?? THEME.primaryHover};
          }
        `;
      case 'line':
        return css`
          border-color: ${({ theme }) => theme.primary ?? THEME.primary};
          background-color: transparent;
          color: ${({ theme }) => theme.primary ?? THEME.primary};
          &:not(:disabled):hover {
            border-color: ${({ theme }) =>
              theme.primaryHover ?? THEME.primaryHover};
            color: ${({ theme }) => theme.primaryHover ?? THEME.primaryHover};
          }
        `;
      case 'text':
      default:
        return css`
          border-color: transparent;
          color: ${({ theme }) => theme.primary ?? THEME.primary};
          background-color: transparent;
          &:not(:disabled):hover {
            color: ${({ theme }) => theme.primaryHover ?? THEME.primaryHover};
          }
        `;
    }
  }}

  // disabled
  &:disabled {
    cursor: default;

    @media (prefers-color-scheme: light) {
      ${({ $variant, theme }) =>
        $variant !== 'text' &&
        css`
          border-color: transparent;
          background-color: ${theme.disabled.light ?? THEME.disabled?.light};
        `}
      color: ${({ theme }) =>
        theme.onDisabled.light ?? THEME.onDisabled?.light};
    }

    @media (prefers-color-scheme: dark) {
      ${({ $variant, theme }) =>
        $variant !== 'text' &&
        css`
          border-color: transparent;
          background-color: ${theme.disabled.dark ?? THEME.disabled?.dark};
        `}
      color: ${({ theme }) => theme.onDisabled.dark ?? THEME.onDisabled?.dark};
    }
  }
`;

ButtonRoot.defaultProps = {
  $variant: 'fill',
  $fullWidth: false,
  disabled: false,
  theme: THEME,
};
