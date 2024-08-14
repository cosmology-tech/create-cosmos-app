import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import { MainWalletBase, ChainWalletBase } from '@cosmos-kit/core';
import { Box, Text, useColorModeValue } from '@interchain-ui/react';
import { Keplr } from '@keplr-wallet/types';

import { darkColors, lightColors, wallets } from '@/config';
import { getWalletLogo, makeKeplrChainInfo } from '@/utils';
import { useChainStore } from '@/contexts';

export const SelectWallet = ({
  setSelectedWallet,
}: {
  setSelectedWallet: Dispatch<SetStateAction<ChainWalletBase | null>>;
}) => {
  const { selectedChain } = useChainStore();

  const handleSelectWallet = (wallet: MainWalletBase) => async () => {
    const chainWallet = wallet.getChainWallet(selectedChain)!;
    const { chain, assets, connect, client } = chainWallet;
    const chainInfo = makeKeplrChainInfo(chain, assets[0]);

    try {
      if (wallet.walletName.startsWith('keplr')) {
        // @ts-ignore
        await (client?.client as Keplr).experimentalSuggestChain(chainInfo);
      }
      connect();
      setTimeout(() => {
        setSelectedWallet(chainWallet);
      }, 100);
    } catch (error) {
      console.error(error);
    }
  };

  const boxShadowColor = useColorModeValue(
    lightColors?.blackAlpha200 as string,
    darkColors?.blackAlpha200 as string
  );

  return (
    <Box
      display="flex"
      width="208px"
      p="10px"
      flexDirection="column"
      gap="10px"
      borderRadius="6px"
      boxShadow={`0px 0px 20px 0px ${boxShadowColor}`}
      bg="$background"
    >
      {wallets.map((w) => (
        <Box
          display="flex"
          width="100%"
          p="10px"
          justifyContent="space-between"
          alignItems="center"
          borderRadius="6px"
          borderWidth="1px"
          borderStyle="solid"
          borderColor="$blackAlpha200"
          backgroundColor={{ base: '$background', hover: '$blackAlpha100' }}
          cursor="pointer"
          attributes={{ onClick: handleSelectWallet(w) }}
          key={w.walletName}
        >
          <Text color="$blackAlpha600" fontSize="14px" fontWeight="500">
            {w.walletPrettyName}
          </Text>
          <Image
            src={getWalletLogo(w.walletInfo)}
            alt={w.walletPrettyName}
            width="0"
            height="0"
            style={{ width: '20px', height: 'auto' }}
          />
        </Box>
      ))}
    </Box>
  );
};
