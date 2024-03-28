import { useMediaQuery } from '@hooks';

export default function useScreenSize() {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1024px)');
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isMobileL = useMediaQuery('(min-width: 375px) and (max-width: 768px)');
  const isMobileM = useMediaQuery('(min-width: 320px) and (max-width: 375px)');
  const isMobileS = useMediaQuery('(max-width: 320px)');

  return { isDesktop, isTablet, isMobileL, isMobileM, isMobileS, isMobile };
}
