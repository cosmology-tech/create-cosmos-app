import { useEffect, useMemo, useState } from 'react';
import { ChainName } from '@cosmos-kit/core';
import { useManager } from '@cosmos-kit/react';
import { Center, Grid, GridItem } from '@chakra-ui/react';

import { WalletCard } from './WalletCard';
import { ChooseChain } from './ChooseChain';
import { ConnectWalletButton } from './WalletConnect';
import { ChainOption, HandleSelectChain } from './ChainDropdown';
import store, { defaultChainName } from '@/store';

export const WalletSection = () => {
  const [chainName, setChainName] = useState<ChainName | undefined>(
    defaultChainName
  );
  const { chainRecords, getChainLogo } = useManager();

  const chainOptions = useMemo(
    () =>
      chainRecords.map((chainRecord) => {
        return {
          chainName: chainRecord?.name,
          label: chainRecord?.chain.pretty_name,
          value: chainRecord?.name,
          icon: getChainLogo(chainRecord.name),
        };
      }),
    [chainRecords, getChainLogo]
  );

  useEffect(() => {
    const currentChain =
      window.localStorage.getItem('selected-chain') || defaultChainName;

    setChainName(currentChain);
    store.setSourceChain(currentChain);
  }, []);

  const onChainChange: HandleSelectChain = async (
    selectedValue: ChainOption | null
  ) => {
    setChainName(selectedValue?.chainName);

    if (selectedValue?.chainName) {
      store.setSourceChain(selectedValue?.chainName);
      window?.localStorage.setItem('selected-chain', selectedValue?.chainName);
    } else {
      window?.localStorage.removeItem('selected-chain');
      store.setSourceAddress('');
    }
  };

  const chooseChain = (
    <ChooseChain
      chainName={chainName}
      chainInfos={chainOptions}
      onChange={onChainChange}
    />
  );

  return (
    <Center py={8}>
      <Grid
        w="full"
        maxW="sm"
        templateColumns="1fr"
        rowGap={4}
        alignItems="center"
        justifyContent="center"
      >
        <GridItem>{chooseChain}</GridItem>
        {chainName ? (
          <WalletCard chainName={chainName} />
        ) : (
          <ConnectWalletButton buttonText="Connect Wallet" isDisabled />
        )}
      </Grid>
    </Center>
  );
};
