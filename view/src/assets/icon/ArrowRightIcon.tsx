import React from 'react';

import { IconBox, IconBoxProps } from './IconBox';

const ArrowUpIcon = ({ width = '1.5rem', height = '1.5rem' }: IconBoxProps) => {
  return (
    <IconBox width={width} height={height}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='100%'
        height='100%'
        viewBox='0 -960 960 960'
      >
        <path
          d='M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z'
          fill='currentColor'
        />
      </svg>
    </IconBox>
  );
};

export default React.memo(ArrowUpIcon);
