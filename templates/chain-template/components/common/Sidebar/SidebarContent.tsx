import Image from 'next/image';
import { useChain } from '@cosmos-kit/react';
import { Box, useColorModeValue, Text } from '@interchain-ui/react';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';

import { NavItems } from './NavItems';
import { Button } from '@/components';
import { useChainStore } from '@/contexts';

export const SidebarContent = ({ onClose }: { onClose: () => void }) => {
  const { selectedChain } = useChainStore();

  const { connect, disconnect, username, isWalletConnected, wallet, openView } =
    useChain(selectedChain);

  const poweredByLogoSrc = useColorModeValue(
    '/logos/cosmology.svg',
    '/logos/cosmology-dark.svg'
  );

  return (
    <Box
      flex="1"
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%"
    >
      <NavItems onItemClick={onClose} />
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
