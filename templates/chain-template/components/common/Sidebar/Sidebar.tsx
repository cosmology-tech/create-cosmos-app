import Image from 'next/image';
import Link from 'next/link';
import { Box, useColorModeValue } from '@interchain-ui/react';
import { VscClose } from 'react-icons/vsc';

import { Drawer } from '@/components';
import { useDetectBreakpoints } from '@/hooks';
import { SidebarContent } from './SidebarContent';

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const { isDesktop } = useDetectBreakpoints();

  const brandLogoSrc = useColorModeValue(
    '/logos/brand-logo.svg',
    '/logos/brand-logo-dark.svg'
  );

  const desktopSidebar = (
    <Box
      width="240px"
      px="30px"
      pt="30px"
      pb="24px"
      position="sticky"
      top="0"
      left="0"
      display="flex"
      flexDirection="column"
      alignItems="center"
      height="100vh"
      borderRightColor="$blackAlpha300"
      borderRightWidth="1px"
      borderRightStyle="solid"
    >
      <Link href="/" style={{ marginBottom: '50px' }}>
        <Image
          src={brandLogoSrc}
          alt="your logo"
          width="0"
          height="0"
          style={{ width: '180px', height: 'auto' }}
        />
      </Link>
      <SidebarContent onClose={onClose} />
    </Box>
  );

  const mobileSidebar = (
    <Drawer isOpen={isOpen} onClose={onClose} direction="right">
      <Box
        height="100%"
        minHeight="650px"
        overflowY="auto"
        width="320px"
        px="20px"
        py="30px"
        display="flex"
        flexDirection="column"
      >
        <Box
          display="flex"
          justifyContent="flex-end"
          mb="64px"
          mr="10px"
          color="$blackAlpha400"
        >
          <VscClose size="26px" cursor="pointer" onClick={onClose} />
        </Box>
        <SidebarContent onClose={onClose} />
      </Box>
    </Drawer>
  );

  return isDesktop ? desktopSidebar : mobileSidebar;
};
