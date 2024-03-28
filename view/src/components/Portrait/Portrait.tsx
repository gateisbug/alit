import React from 'react';
import styled from 'styled-components';

import LazyImage from '@src/components/LazyImage';

// const LazyImage = styled.img`
//   //width: 3rem;
//   //height: 3rem;
//   width: 100%;
//   height: 100%;
//   border: none;
//   outline: none;
// `;

const Frame = styled.div.attrs({
  className: 'ui-portrait-frame',
})`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  width: 4rem;
  height: 4rem;
  border-radius: 0.25rem;
  box-sizing: border-box;
  padding: 0.375rem;
  border: 0.1875rem solid #7e5475;

  &[data-stroke='default'] {
    border-color: #7e5475; // #666666
  }
  &[data-stroke='red'] {
    border-color: #e4002b; // #d61314; #e4002b; #ff2a1b;
  }
  &[data-stroke='yellow'] {
    border-color: #f3e500; // #f3f521
  }
  &[data-stroke='blue'] {
    border-color: #0047bb; // #0801d9
  }
  &[data-stroke='violet'] {
    border-color: #ea27c2; // #db16db
  }

  &[data-tier='N'] {
    background-color: #ddd;
  }
  &[data-tier='R'] {
    background-color: #9fe8ff;
  }
  &[data-tier='SR'] {
    background-color: #c4adff;
  }
  &[data-tier='SSR'] {
    background-color: #ee9;
  }
  &[data-tier='UR'] {
    background: linear-gradient(120deg, #fbffca, #baffbf, #a7efff, #ffabff);
  }
`;

export interface PortraitProps {
  src?: string;
  placeholder?: string;
  stroke?: 'default' | 'red' | 'yellow' | 'blue' | 'violet';
  tier?: TierType;
  className?: string;
}

const Portrait = ({
  placeholder,
  src,
  tier = 'R',
  stroke = 'default',
  className,
}: PortraitProps) => {
  return (
    <Frame data-tier={tier} data-stroke={stroke} className={className}>
      <LazyImage src={src} placeholder={placeholder} />
    </Frame>
  );
};

export default React.memo(Portrait);
