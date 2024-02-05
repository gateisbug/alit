import React from 'react';
import { IconBox, IconBoxProps } from './IconBox';

const ArcaLiveIcon = ({
  width = '1.5rem',
  height = '1.5rem',
}: IconBoxProps) => {
  return (
    <IconBox width={width} height={height}>
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
            d='M591 1314 c-325 -70 -535 -394 -466 -719 70 -328 393 -539 720 -470 328 70 539 393 470 720 -70 329 -396 541 -724 469z m269 -564 l0 -410 -40 0
							-40 0 0 410 0 410 40 0 40 0 0 -410z m-337 219 c44 -53 6 -129 -64 -129 -61 0 -94 55 -68 114 22 49 96 57 132 15z m530 0 c41 -50 4 -129 -61 -129 -88 0
							-114 105 -37 149 27 15 76 5 98 -20z m-373 -424 l0 -205 -40 0 -40 0 0 165 0 165 -110 0 -110 0 0 40 0 40 150 0 150 0 0 -205z m-166 24 c55 -43 18 -139
							-54 -139 -19 0 -40 9 -55 25 -73 72 28 178 109 114z m531 -4 c50 -49 15 -135 -55 -135 -41 0 -80 39 -80 80 0 41 39 80 80 80 19 0 40 -9 55 -25z'
          />
        </g>
      </svg>
    </IconBox>
  );
};

export default React.memo(ArcaLiveIcon);
