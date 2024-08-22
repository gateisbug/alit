import styled from 'styled-components'

const LoaderBox = styled.div`
  display: flex;
  width: 40px;
  height: 40px;

  color: var(--primary);
  transition: color 150ms cubic-bezier(0.4, 0, 0.2, 1);
  animation: 1.4s linear 0s infinite normal none running rotate;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const LoaderRoot = styled.svg.attrs({
  children: <circle cx='44' cy='44' r='20.2' fill='none' strokeWidth='3.6' />,
})`
  display: block;

  & > circle {
    stroke: currentColor;
    stroke-dasharray: 80px 200px; /* 80, 200; */
    stroke-dashoffset: 0;
    animation: 1.4s ease-in-out 0s infinite normal none running spinning;
  }

  @keyframes spinning {
    0% {
      stroke-dasharray: 1px 200px; /* 1, 200 */
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 100px 200px; /* 100, 200 */
      stroke-dashoffset: -15px; /* -15 */
    }
    100% {
      stroke-dasharray: 100px 200px; /* 100, 200 */
      stroke-dashoffset: -125px; /* -125 */
    }
  }
`

export default function Loader() {
  return (
    <LoaderBox>
      <LoaderRoot viewBox='22 22 44 44'>
        <circle cx='44' cy='44' r='20.2' fill='none' strokeWidth='3.6' />
      </LoaderRoot>
    </LoaderBox>
  )
}
