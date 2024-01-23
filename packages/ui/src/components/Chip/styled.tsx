import styled, { css } from 'styled-components';
import { px, THEME, VariantType } from './preamble';

interface ChipRootTransientProps {
  $variant?: VariantType;
}

export const ChipRoot = styled.span.attrs({
  className: px('Root'),
})<ChipRootTransientProps>`
  display: inline-flex;
  flex-flow: row nowrap;
  box-sizing: border-box;
  justify-content: center;
  align-content: center;
  width: fit-content;
  border: 0.0625rem solid transparent;
  transition:
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  padding: 0.5rem 1rem;
  border-radius: 3rem;

  ${({ $variant }) => {
    switch ($variant) {
      case 'fill':
        return css`
          border-color: ${({ theme }) => theme.primary ?? THEME.primary};
          background-color: ${({ theme }) => theme.primary ?? THEME.primary};
          color: ${({ theme }) => theme.onPrimary ?? THEME.onPrimary};
        `;
      case 'line':
        return css`
          border-color: ${({ theme }) => theme.primary ?? THEME.primary};
          background-color: transparent;
          color: ${({ theme }) => theme.primary ?? THEME.primary};
        `;
      case 'text':
      default:
        return css`
          color: ${({ theme }) => theme.primary ?? THEME.primary};
          border-color: transparent;
          background-color: transparent;
        `;
    }
  }}
`;

ChipRoot.defaultProps = {
  $variant: 'fill',
  theme: THEME,
};
