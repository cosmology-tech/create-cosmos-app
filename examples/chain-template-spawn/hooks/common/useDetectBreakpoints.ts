import { breakpoints } from '@/config';
import { useMediaQuery } from './useMediaQuery';

export const useDetectBreakpoints = () => {
  const { mobile, tablet, desktop } = breakpoints;

  const isSmMobile = useMediaQuery(`(max-width: ${mobile - 1}px)`);
  const isMobile = useMediaQuery(`(max-width: ${tablet - 1}px)`);
  const isTablet = useMediaQuery(`(max-width: ${desktop - 1}px)`);
  const isDesktop = useMediaQuery(`(min-width: ${desktop}px)`);

  return { isSmMobile, isMobile, isTablet, isDesktop };
};
