import React from 'react';

import { throttle } from 'lodash';

export default function useDropdown() {
  const [windowWidth, setWindowWidth] = React.useState(0);

  const handleResize = React.useCallback(
    throttle(() => {
      setWindowWidth(window.innerWidth);
    }, 200),
    [],
  );

  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      // cleanup
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return {
    windowWidth,
    handleResize,
  };
}
