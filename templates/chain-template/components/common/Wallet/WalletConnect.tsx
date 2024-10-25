import { useState } from 'react';
import { useChain } from '@cosmos-kit/react';
import { ChainWalletBase } from '@cosmos-kit/core';

import { useChainStore } from '@/contexts';
import { Connected } from './Connected';
import { Connecting } from './Connecting';
import { SelectWallet } from './SelectWallet';
import { wallets } from '@/config';

export const WalletConnect = () => {
  const { selectedChain } = useChainStore();
  const { wallet } = useChain(selectedChain);

  const currentWallet = wallets.find((w) => w.walletName === wallet?.name);
  const chainWallet = currentWallet?.getChainWallet(selectedChain);

  const [selectedWallet, setSelectedWallet] = useState<ChainWalletBase | null>(
    chainWallet?.isWalletConnected ? chainWallet : null
  );

  if (selectedWallet && selectedWallet.isWalletConnected) {
    return (
      <Connected
        selectedWallet={selectedWallet}
        clearSelectedWallet={() => setSelectedWallet(null)}
      />
    );
  }

  if (selectedWallet) {
    return (
      <Connecting
        selectedWallet={selectedWallet}
        clearSelectedWallet={() => setSelectedWallet(null)}
      />
    );
  }

  return <SelectWallet setSelectedWallet={setSelectedWallet} />;
};
