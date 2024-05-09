import _Link from 'next/link';
import styled from 'styled-components';

const Link = styled(_Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  cursor: pointer;
  user-select: none;
  vertical-align: middle;
  appearance: none;
  text-decoration: none;
  text-align: center;
  flex: 0 0 auto;
  font-size: 1.5rem;
  overflow: visible;
  transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  padding: 0.375rem;
  border: 1px solid var(--border-weak);
  border-radius: 0.75rem;
  color: var(--primary);

  &:hover {
    border-color: var(--border);
  }
  
  & > svg {
    min-width: 20px;
    min-height: 20px;
  }
`

export function ArcaLiveLink() {
  return (
    <Link href='https://arca.live/b/azurlane/45593816' target='_blank' rel='noopener noreferrer'>
      <svg
        version='1.0'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 144 144'
        preserveAspectRatio='xMidYMid meet'
      >
        <g
          transform='translate(0.000000,144.000000) scale(0.100000,-0.100000)'
          fill='currentColor'
          stroke='none'
        >
          <path
            d='M591 1314 c-325 -70 -535 -394 -466 -719 70 -328 393 -539 720 -470 328 70 539 393 470 720 -70 329 -396 541 -724 469z m269 -564 l0 -410 -40 0 -40 0 0 410 0 410 40 0 40 0 0 -410z m-337 219 c44 -53 6 -129 -64 -129 -61 0 -94 55 -68 114 22 49 96 57 132 15z m530 0 c41 -50 4 -129 -61 -129 -88 0 -114 105 -37 149 27 15 76 5 98 -20z m-373 -424 l0 -205 -40 0 -40 0 0 165 0 165 -110 0 -110 0 0 40 0 40 150 0 150 0 0 -205z m-166 24 c55 -43 18 -139 -54 -139 -19 0 -40 9 -55 25 -73 72 28 178 109 114z m531 -4 c50 -49 15 -135 -55 -135 -41 0 -80 39 -80 80 0 41 39 80 80 80 19 0 40 -9 55 -25z'
          />
        </g>
      </svg>
    </Link>
  )
}

export function GithubLink() {
  return (
    <Link href='https://github.com/gateisbug/alit' target='_blank' rel='noopener noreferrer'>
      <svg
        version='1.0'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 144 144'
        preserveAspectRatio='xMidYMid meet'
      >
        <g
          transform='translate(0.000000,144.000000) scale(0.100000,-0.100000)'
          fill='currentColor'
          stroke='none'
        >
          <path
            d='M582 1345 c-286 -62 -502 -331 -502 -625 0 -95 24 -191 71 -288 57 -117 158 -219 280 -281 115 -58 129 -54 129 39 l0 69 -62 -1 c-83 -2 -121 19 -152 80 -13 26 -40 62 -60 81 -39 37 -38 51 1 51 19 0 43 -18 89 -66 l63 -65 58 3 58 3 21 45 21 45 -53 12 c-137 32 -200 98 -225 238 -13 79 -2 148 33 205 17 28 21 48 19 95 -1 33 2 73 8 88 10 26 14 28 44 22 17 -4 57 -20 87 -36 48 -25 60 -27 95 -19 22 5 74 10 115 10 41 0 93 -5 115 -10 35 -8 47 -6 95 19 30 16 71 32 92 36 32 6 37 4 44 -17 4 -12 8 -55 9 -93 0 -49 5 -79 17 -97 44 -67 48 -200 10 -288 -35 -80 -120 -140 -219 -156 l-42 -6 17 -26 c13 -20 18 -57 22 -155 6 -166 7 -167 127 -107 211 105 353 333 353 570 0 404 -382 711 -778 625z'
          />
        </g>
      </svg>
    </Link>
  )
}