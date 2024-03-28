import React from 'react';

import { IconBox, IconBoxProps } from './IconBox';

const FilterIcon = ({ width = '1.5rem', height = '1.5rem' }: IconBoxProps) => {
  return (
    <IconBox width={width} height={height}>
      <svg
        width='100%'
        height='100%'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M10 18V16H14V18H10ZM6 13V11H18V13H6ZM3 8V6H21V8H3Z'
          fill='currentColor'
        />
      </svg>
    </IconBox>
  );
};

export default React.memo(FilterIcon);
