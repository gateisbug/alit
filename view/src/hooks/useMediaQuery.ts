import React from 'react';

type MinMax = { min?: number, max?: number };

interface MonitorSize {
  desktop?: MinMax;
  laptop?: MinMax;
  desktop?: MinMax;
  desktop?: MinMax;
}

export default function useMediaQuery() {
  React.useEffect(() => {
    const handleResize = () => {
      console.log(window.innerWidth, window.outerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
}
