import React from 'react';

import { IconBox, IconBoxProps } from './IconBox';

const SearchIcon = ({ width = '1.5rem', height = '1.5rem' }: IconBoxProps) => {
  return (
    <IconBox width={width} height={height}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        height='100%'
        width='100%'
        viewBox='0 0 48 48'
      >
        <path
          fill='currentColor'
          d='m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z'
        />
      </svg>
    </IconBox>
  );
};

export default React.memo(SearchIcon);
