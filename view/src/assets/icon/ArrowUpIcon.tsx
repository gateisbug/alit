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
          d='M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z'
          fill='currentColor'
        />
      </svg>
    </IconBox>
  );
};

export default React.memo(ArrowUpIcon);
