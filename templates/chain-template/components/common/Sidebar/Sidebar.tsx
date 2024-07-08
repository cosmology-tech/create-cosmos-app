import Image from 'next/image';
import Link from 'next/link';
import { Box, useColorModeValue, Text } from '@interchain-ui/react';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';
import { useChain } from '@cosmos-kit/react';

import { NavItems } from './NavItems';
import { Button } from '../Button';
import { useChainStore } from '@/contexts';

type SidebarProps = {};

export const Sidebar = ({}: SidebarProps) => {
  const { selectedChain } = useChainStore();
  const { connect, disconnect, username, isWalletConnected, wallet, openView } =
    useChain(selectedChain);

  const brandLogoSrc = useColorModeValue(
    '/logos/your-logo.svg',
    '/logos/your-logo-dark.svg'
  );

  const poweredByLogoSrc = useColorModeValue(
    '/logos/cosmology.svg',
    '/logos/cosmology-dark.svg'
  );

  return (
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
      borderRightColor="#DDE2E9"
      borderRightWidth="1px"
      borderRightStyle="solid"
    >
      <Link href="/" style={{ marginBottom: '50px' }}>
        <Image
          src={brandLogoSrc}
          alt="cosmology"
          width="0"
          height="0"
          style={{ width: '180px', height: 'auto' }}
        />
      </Link>
      <NavItems />
      <Box mt="$auto">
        {isWalletConnected ? (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap="10px"
          >
            <Button
              variant="outline"
              onClick={openView}
              leftIcon={
                wallet?.logo ? (
                  <Image
                    src={
                      typeof wallet.logo === 'string'
                        ? wallet.logo
                        : wallet.logo.major || wallet.logo.minor
                    }
                    alt={wallet.prettyName}
                    width="0"
                    height="0"
                    style={{ width: '20px', height: 'auto' }}
                  />
                ) : (
                  'checkboxCircle'
                )
              }
            >
              {username ? username : 'Connected'}
            </Button>
            <Button
              leftIcon={<FiLogOut />}
              variant="outline"
              px="10px"
              onClick={disconnect}
            />
          </Box>
        ) : (
          <Button
            variant="outline"
            leftIcon={<MdOutlineAccountBalanceWallet size="20px" />}
            onClick={connect}
          >
            Connect Wallet
          </Button>
        )}
        <Box
          mt="10px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          py="10px"
          gap="10px"
        >
          <Text fontSize="12px" fontWeight="500" color="$text">
            Powered by
          </Text>
          <Image
            src={poweredByLogoSrc}
            alt="cosmology"
            width="0"
            height="0"
            style={{ width: '100px', height: 'auto' }}
          />
        </Box>
      </Box>
    </Box>
  );
};
