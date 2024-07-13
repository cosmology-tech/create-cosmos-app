import { breakpoints } from '@/config';
import { useMediaQuery } from './useMediaQuery';

export const useDetectBreakpoints = () => {
  const { tablet, desktop } = breakpoints;

  const isMobile = useMediaQuery(`(max-width: ${tablet - 1}px)`);
  const isTablet = useMediaQuery(
    `(min-width: ${tablet}px) and (max-width: ${desktop - 1}px)`
  );
  const isDesktop = useMediaQuery(`(min-width: ${desktop}px)`);

  return { isMobile, isTablet, isDesktop };
};
