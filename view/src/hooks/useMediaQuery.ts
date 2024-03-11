import React from 'react';

export default function useMediaQuery(query: string) {
  const queryTest = React.useCallback((query: string): boolean => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches;
    }
    return false;
  }, []);

  const [isMatch, setIsMatch] = React.useState<boolean>(queryTest(query));

  const handleChange = React.useCallback(() => {
    setIsMatch(queryTest(query));
  }, [query]);

  React.useEffect(() => {
    const matchMedia = window.matchMedia(query);
    handleChange();

    matchMedia.addEventListener('change', handleChange);
    return () => {
      matchMedia.removeEventListener('change', handleChange);
    };
  }, [query]);

  return isMatch;
}
