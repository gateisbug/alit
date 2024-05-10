import _Link from 'next/link';
import styled, { css } from 'styled-components';

// noinspection CssUnusedSymbol
const commonCss = css`
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
  font-family: inherit;

  &:hover {
    border-color: var(--border);
    background-color: var(--border-weak);
  }
  
  & > svg {
    width: 20px;
    height: 20px;
  }
  
  & > .search-text {
    margin-left: 8px;
    margin-right: 4px;
  }
`

const Link = styled(_Link)`
  ${commonCss}
`

const Button = styled.button`
  ${commonCss}
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

interface ButtonProps {
  onClick?: () => void;
}

export function SearchButton({ onClick }:ButtonProps) {
  return (
    <Button onClick={onClick}>
      <svg
        width='100%'
        height='100%'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M19.6 21L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 16 6.14583 15.3708 4.8875 14.1125C3.62917 12.8542 3 11.3167 3 9.5C3 7.68333 3.62917 6.14583 4.8875 4.8875C6.14583 3.62917 7.68333 3 9.5 3C11.3167 3 12.8542 3.62917 14.1125 4.8875C15.3708 6.14583 16 7.68333 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L21 19.6L19.6 21ZM9.5 14C10.75 14 11.8125 13.5625 12.6875 12.6875C13.5625 11.8125 14 10.75 14 9.5C14 8.25 13.5625 7.1875 12.6875 6.3125C11.8125 5.4375 10.75 5 9.5 5C8.25 5 7.1875 5.4375 6.3125 6.3125C5.4375 7.1875 5 8.25 5 9.5C5 10.75 5.4375 11.8125 6.3125 12.6875C7.1875 13.5625 8.25 14 9.5 14Z'
          fill='currentColor'
        />
      </svg>
      <span className='search-text fza lh'>
        Search...
      </span>
    </Button>
  )
}