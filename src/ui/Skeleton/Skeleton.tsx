import styled, { css } from 'styled-components'

import {
  cx,
  THEME,
  SkeletonRootTransientProps,
  SkeletonProps,
} from './preamble'

const SkeletonRoot = styled.span.attrs({
  className: cx('root'),
})<SkeletonRootTransientProps>`
  display: block;
  min-width: 1rem; /* 16 */
  min-height: 1rem; /* 16 */
  animation: animation-skeleton 2s ease-in-out 0.5s infinite;

  ${({ $varient }) => {
    switch ($varient) {
      case 'text':
        return css`
          border-radius: 0.25rem; /* 4 */
          transform-origin: 0 55%;
          transform: scale(1, 0.6);
        `
      case 'circle':
        return css`
          border-radius: 50%;
        `
      case 'paragraph':
      default:
        return css`
          border-radius: 0.25rem; /* 4 */
        `
    }
  }}

  & {
    @media (prefers-color-scheme: light) {
      background-color: ${({ theme }) => theme.surface?.light};
    }

    /*noinspection CssUnresolvedCustomProperty*/
    @media (prefers-color-scheme: dark) {
      background-color: ${({ theme }) => theme.surface?.dark};
    }
  }

  &:empty::before {
    display: inline-block;
    content: ' ';
    min-height: 1rem; /* 16 */
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
`

SkeletonRoot.defaultProps = {
  theme: THEME,
}

function SkeletonComponent({ varient, theme }: SkeletonProps) {
  return <SkeletonRoot $varient={varient} theme={theme} />
}

const Skeleton = Object.assign(SkeletonComponent, {
  Root: SkeletonRoot,
})

export default Skeleton
