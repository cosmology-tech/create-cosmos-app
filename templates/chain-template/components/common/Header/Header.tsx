import Link from 'next/link';
import Image from 'next/image';
import { Box, useColorModeValue, useTheme } from '@interchain-ui/react';
import { RxHamburgerMenu } from 'react-icons/rx';

import { ChainDropdown } from './ChainDropdown';
import { Button } from '../Button';
import { useDetectBreakpoints } from '@/hooks';
import { AddressButton } from './AddressButton';

interface HeaderProps {
  onOpenSidebar: () => void;
}

export const Header = ({ onOpenSidebar }: HeaderProps) => {
  const { theme, setTheme } = useTheme();
  const { isDesktop, isMobile } = useDetectBreakpoints();

  const brandLogo = useColorModeValue(
    '/logos/brand-logo.svg',
    '/logos/brand-logo-dark.svg'
  );

  const brandLogoSm = useColorModeValue(
    '/logos/brand-logo-sm.svg',
    '/logos/brand-logo-sm-dark.svg'
  );

  return (
    <Box
      display="flex"
      justifyContent={isDesktop ? 'flex-end' : 'space-between'}
      alignItems="center"
      mb="30px"
    >
      {!isDesktop && (
        <Link href="/">
          <Image
            src={isMobile ? brandLogoSm : brandLogo}
            alt="your logo"
            width="0"
            height="0"
            style={{ width: isMobile ? '40px' : '180px', height: 'auto' }}
          />
        </Link>
      )}
      <Box display="flex" alignItems="center" gap="10px">
        <AddressButton />
        <ChainDropdown />
        <Button
          leftIcon={theme === 'dark' ? 'moonLine' : 'sunLine'}
          px="10px"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        />
        {!isDesktop && (
          <Box
            color="$blackAlpha400"
            cursor="pointer"
            ml="6px"
            attributes={{ onClick: onOpenSidebar }}
          >
            <RxHamburgerMenu size="22px" />
          </Box>
        )}
      </Box>
    </Box>
  );
};
