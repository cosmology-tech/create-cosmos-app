import { useManager } from '@cosmos-kit/react';
import { Center, Grid, GridItem } from '@chakra-ui/react';
import { useEffect, useMemo, useState } from 'react';
import {
  ChainOption,
  ChooseChain,
  handleSelectChainDropdown,
  ConnectWalletButton,
} from '.';
import { ChainName } from '@cosmos-kit/core';
import { WalletCardSection } from './card';
import store from '../store';

export const WalletSection = () => {
  const [chainName, setChainName] = useState<ChainName | undefined>('osmosis');
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
      window.localStorage.getItem('selected-chain') || 'osmosis';

    setChainName(currentChain);
    store.setSourceChain(currentChain);
  }, []);

  const onChainChange: handleSelectChainDropdown = async (
    selectedValue: ChainOption | null
  ) => {
    setChainName(selectedValue?.chainName);

    if (selectedValue?.chainName) {
      store.setSourceChain(selectedValue?.chainName);
      window?.localStorage.setItem('selected-chain', selectedValue?.chainName);
    } else {
      window?.localStorage.removeItem('selected-chain');
      store.setSourceChain('osmosis');
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
          <WalletCardSection chainName={chainName} />
        ) : (
          <ConnectWalletButton buttonText={'Connect Wallet'} isDisabled />
        )}
      </Grid>
    </Center>
  );
};
