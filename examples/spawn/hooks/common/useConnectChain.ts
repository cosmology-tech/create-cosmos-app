import { makeKeplrChainInfo } from '@/utils';
import { useChain, useWalletClient } from '@cosmos-kit/react';

export const useConnectChain = (chainName: string) => {
  const { connect, chain, assets, ...rest } = useChain(chainName);
  const { client: keplrWallet } = useWalletClient('keplr-extension');

  const addAndConnectChain = async () => {
    const chainInfo = makeKeplrChainInfo(chain, assets!.assets[0]);
    try {
      // @ts-ignore
      await keplrWallet?.client?.experimentalSuggestChain(chainInfo);
      connect();
    } catch (error) {
      console.error(error);
    }
  };

  return { connect: addAndConnectChain, chain, assets, ...rest };
};
