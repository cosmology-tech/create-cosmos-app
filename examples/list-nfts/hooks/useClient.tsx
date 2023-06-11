import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate';
import { useChain } from '@cosmos-kit/react';
import { useRef } from 'react';
import { contracts } from 'stargazejs';
import { chainName, marketplaceContract } from '../config';

export const useClient = () => {
  const { getSigningCosmWasmClient, address } = useChain(chainName);
  const signingCosmWasmClientRef = useRef<SigningCosmWasmClient>();
  const noAddressWarn = 'Wallet is not connected.';

  const fetchSigningCosmWasmClient = async () => {
    if (signingCosmWasmClientRef.current) {
      return signingCosmWasmClientRef.current;
    }
    const signingCosmWasmClient = await getSigningCosmWasmClient();
    signingCosmWasmClientRef.current = signingCosmWasmClient;
    return signingCosmWasmClient;
  };

  const getMarketplaceClient = async () => {
    if (!address) throw Error(noAddressWarn);
    const { MarketplaceClient } = contracts.Marketplace;
    const signingCosmWasmClient = await fetchSigningCosmWasmClient();
    return new MarketplaceClient(
      signingCosmWasmClient,
      address,
      marketplaceContract
    );
  };

  const getMarketplaceMsgComposer = () => {
    if (!address) throw Error(noAddressWarn);
    const { MarketplaceMessageComposer } = contracts.Marketplace;
    return new MarketplaceMessageComposer(address, marketplaceContract);
  };

  const getSg721UpdatableClient = async (collectionAddr: string) => {
    if (!address) throw Error(noAddressWarn);
    const { Sg721UpdatableClient } = contracts.Sg721Updatable;
    const signingCosmWasmClient = await fetchSigningCosmWasmClient();
    return new Sg721UpdatableClient(
      signingCosmWasmClient,
      address,
      collectionAddr
    );
  };

  const getSg721UpdatableMsgComposer = (collectionAddr: string) => {
    if (!address) throw Error(noAddressWarn);
    const { Sg721UpdatableMessageComposer } = contracts.Sg721Updatable;
    return new Sg721UpdatableMessageComposer(address, collectionAddr);
  };

  return {
    getMarketplaceClient,
    getMarketplaceMsgComposer,
    getSg721UpdatableClient,
    getSg721UpdatableMsgComposer,
  };
};
