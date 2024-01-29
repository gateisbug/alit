import React from 'react';

interface Props {
  width?: string;
  height?: string;
}

const GithubIcon = ({ width = '1.5rem', height = '1.5rem' }: Props) => {
  return (
    <div style={{ width, height }}>
      <svg
        version='1.0'
        xmlns='http://www.w3.org/2000/svg'
        width='100%'
        height='100%'
        viewBox='0 0 144 144'
        preserveAspectRatio='xMidYMid meet'
      >
        <g
          transform='translate(0.000000,144.000000) scale(0.100000,-0.100000)'
          fill='currentColor'
          stroke='none'
        >
          <path
            d='M582 1345 c-286 -62 -502 -331 -502 -625 0 -95 24 -191 71 -288 57 -117 158 -219 280 -281 115 -58 129 -54 129 39 l0 69 -62 -1 c-83 -2 -121 19
							-152 80 -13 26 -40 62 -60 81 -39 37 -38 51 1 51 19 0 43 -18 89 -66 l63 -65 58 3 58 3 21 45 21 45 -53 12 c-137 32 -200 98 -225 238 -13 79 -2 148 33 205
							17 28 21 48 19 95 -1 33 2 73 8 88 10 26 14 28 44 22 17 -4 57 -20 87 -36 48 -25 60 -27 95 -19 22 5 74 10 115 10 41 0 93 -5 115 -10 35 -8 47 -6 95 19 30
							16 71 32 92 36 32 6 37 4 44 -17 4 -12 8 -55 9 -93 0 -49 5 -79 17 -97 44 -67 48 -200 10 -288 -35 -80 -120 -140 -219 -156 l-42 -6 17 -26 c13 -20 18 -57
							22 -155 6 -166 7 -167 127 -107 211 105 353 333 353 570 0 404 -382 711 -778 625z'
          />
        </g>
      </svg>
    </div>
  );
};

export default React.memo(GithubIcon);
