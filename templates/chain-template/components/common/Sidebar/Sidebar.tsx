import Image from 'next/image';
import { Box, useColorModeValue, Text } from '@interchain-ui/react';
import { NavItems } from './NavItems';
import { Button } from '../Button';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';
import { useChainStore } from '@/contexts';
import { useChain } from '@cosmos-kit/react';
import { FiLogOut } from 'react-icons/fi';

type SidebarProps = {};

export const Sidebar = ({}: SidebarProps) => {
  const { selectedChain } = useChainStore();
  const { connect, disconnect, username, isWalletConnected, wallet, openView } =
    useChain(selectedChain);

  const logoSrc = useColorModeValue(
    '/logos/cosmology.svg',
    '/logos/cosmology-dark.svg'
  );

  return (
    <Box
      width="240px"
      pt="30px"
      pb="24px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      height="100vh"
      borderRightColor="#DDE2E9"
      borderRightWidth="1px"
      borderRightStyle="solid"
    >
      <Image
        src={logoSrc}
        alt="cosmology"
        width="0"
        height="0"
        style={{ width: '180px', height: 'auto', marginBottom: '60px' }}
      />
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
            src={logoSrc}
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
