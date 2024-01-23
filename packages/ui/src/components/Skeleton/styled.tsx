import styled, { css } from 'styled-components';
import { px, SkeletonVarientType, THEME } from './preamble';

interface SkeletonRootTransientProps {
  $varient?: SkeletonVarientType;
}

export const SkeletonRoot = styled.span.attrs({
  className: px('Root'),
})<SkeletonRootTransientProps>`
  display: block;
  min-width: 1rem;
  min-height: 1rem;
  animation: animation-skeleton 2s ease-in-out 0.5s infinite;

  ${({ $varient }) => {
    switch ($varient) {
      case 'text':
        return css`
          border-radius: 0.25rem;
          transform-origin: 0 55%;
          transform: scale(1, 0.6);
        `;
      case 'circle':
        return css`
          border-radius: 50%;
        `;
      case 'paragraph':
      default:
        return css`
          border-radius: 0.25rem;
        `;
    }
  }}

  & {
    @media (prefers-color-scheme: light) {
      background-color: ${({ theme }) =>
        theme.surface?.light ?? THEME.surface?.light};
    }

    /*noinspection CssUnresolvedCustomProperty*/
    @media (prefers-color-scheme: dark) {
      background-color: ${({ theme }) =>
        theme.surface?.dark ?? THEME.surface?.dark};
    }
  }

  &:empty::before {
    display: inline-block;
    content: ' ';
    min-height: 1rem;
  }

  @keyframes animation-skeleton {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`;

SkeletonRoot.defaultProps = {
  theme: THEME,
};
