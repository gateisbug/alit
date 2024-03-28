import styled, { css } from 'styled-components';
import {
  px,
  HorizontalType,
  VariantType,
  VerticalType,
  THEME,
} from './preamble';

interface BadgeRootTransientProps {
  $horizontal?: HorizontalType;
  $show?: boolean;
  $variant?: VariantType;
  $vertical?: VerticalType;
}

export const BadgeBox = styled.span.attrs({
  className: px('Box'),
})`
  position: relative;
  display: inline-block;
  width: fit-content;
  height: fit-content;
`;

export const BadgeRoot = styled.span.attrs({
  className: px('Root'),
})<BadgeRootTransientProps>`
  position: absolute;
  flex-flow: row nowrap;
  width: fit-content;
  height: fit-content;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  transition:
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  background-color: ${({ theme }) => theme.primary ?? THEME.primary};
  color: ${({ theme }) => theme.onPrimary ?? THEME.onPrimary};

  // show
  display: ${({ $show }) => ($show ? 'flex' : 'none')};

  // variant
  ${(props) => {
    if (props.$variant === 'standard')
      return css`
        font-size: 0.75rem;
        padding: 0.25rem 0.5rem;
        border-radius: 0.75rem;
      `;
    else
      return css`
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 0.25rem;
      `;
  }}

  // vertical | horizontal
  transform: ${({ $vertical, $horizontal }) => {
    if ($vertical === 'top')
      return $horizontal === 'right'
        ? 'translate(50%, -50%)'
        : 'translate(-50%, -50%)';
    else
      return $horizontal === 'right'
        ? 'translate(50%, 50%)'
        : 'translate(-50%, 50%)';
  }};
  top: ${({ $vertical }) => ($vertical === 'top' ? '0' : 'auto')};
  bottom: ${({ $vertical }) => ($vertical === 'bottom' ? '0' : 'auto')};
  right: ${({ $horizontal }) => ($horizontal === 'right' ? '0' : 'auto')};
  left: ${({ $horizontal }) => ($horizontal === 'left' ? '0' : 'auto')};
`;

BadgeRoot.defaultProps = {
  $variant: 'standard',
  $vertical: 'top',
  $show: true,
  $horizontal: 'right',
  theme: THEME,
};
