import Image from 'next/image';
import { Box, useColorModeValue, Text } from '@interchain-ui/react';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';

import { NavItems } from './NavItems';
import { Button } from '@/components';
import { useChainStore } from '@/contexts';
import { shortenAddress } from '@/utils';
import { useCopyToClipboard, useConnectChain } from '@/hooks';

export const SidebarContent = ({ onClose }: { onClose: () => void }) => {
  const { selectedChain } = useChainStore();
  const { isCopied, copyToClipboard } = useCopyToClipboard();
  const { connect, disconnect, address, isWalletConnected, wallet } =
    useConnectChain(selectedChain);

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
        {isWalletConnected && address ? (
          <Box display="flex" alignItems="center" justifyContent="center">
            <Button
              variant="outline"
              px="10px"
              borderTopRightRadius={0}
              borderBottomRightRadius={0}
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
              rightIcon={isCopied ? 'checkLine' : 'copy'}
              iconColor={isCopied ? '$textSuccess' : 'inherit'}
              iconSize="$lg"
              onClick={() => copyToClipboard(address)}
            >
              {shortenAddress(address, 4)}&nbsp;
            </Button>
            <Button
              leftIcon={<FiLogOut />}
              variant="outline"
              px="10px"
              borderLeftWidth={0}
              borderTopLeftRadius={0}
              borderBottomLeftRadius={0}
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
