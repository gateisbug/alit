import styled from 'styled-components'

import {
  CircularProgressBlockTransientProps,
  CircularProgressProps,
  cx,
  THEME,
} from './preamble'

const CircularProgressBox = styled.div.attrs({
  className: cx('box'),
})`
  display: flex;
`

const CircularProgressBlock = styled.div.attrs({
  className: cx('block'),
})<CircularProgressBlockTransientProps>`
  display: inline-block;
  color: ${({ theme }) => theme.primary};
  transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1);
  animation: 1.4s linear 0s infinite normal none running rotate;

  ${({ $width, $height }) => {
    const w = typeof $width === 'number' ? `${$width}px` : $width
    const h = typeof $height === 'number' ? `${$height}px` : $height
    return `
      width: ${w};
      height: ${h};
    `
  }};

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
CircularProgressBlock.defaultProps = {
  $width: 40,
  $height: 40,
  theme: THEME,
}

const CircularProgressRoot = styled.svg.attrs({
  className: cx('root'),
})`
  display: block;
`

const CircularProgressSpinner = styled.circle.attrs({
  className: cx('spinner'),
})`
  stroke: currentColor;
  stroke-dasharray: 5rem, 12.5rem; /* 80, 200; */
  stroke-dashoffset: 0;
  animation: 1.4s ease-in-out 0s infinite normal none running spinning;

  @keyframes spinning {
    0% {
      stroke-dasharray: 0.0625rem, 12.5rem; /* 1, 200 */
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 6.25rem, 12.5rem; /* 100, 200 */
      stroke-dashoffset: -0.9375rem; /* -15 */
    }
    100% {
      stroke-dasharray: 6.25rem, 12.5rem; /* 100, 200 */
      stroke-dashoffset: -7.8125rem; /* -125 */
    }
  }
`

function CircularProgressComponent({
  width = 40,
  height = 40,
  theme = THEME,
}: CircularProgressProps) {
  return (
    <CircularProgressBox>
      <CircularProgressBlock $width={width} $height={height} theme={theme}>
        <CircularProgressRoot viewBox='22 22 44 44'>
          <CircularProgressSpinner
            cx='44'
            cy='44'
            r='20.2'
            fill='none'
            strokeWidth='3.6'
          />
        </CircularProgressRoot>
      </CircularProgressBlock>
    </CircularProgressBox>
  )
}

export const CircularProgress = Object.assign(CircularProgressComponent, {
  Box: CircularProgressBox,
  Block: CircularProgressBlock,
  Root: CircularProgressRoot,
  Circle: CircularProgressSpinner,
})
