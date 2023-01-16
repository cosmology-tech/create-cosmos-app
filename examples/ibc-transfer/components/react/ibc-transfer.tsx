import React, { useCallback, useEffect, useState } from 'react';
import { cosmos } from 'interchain';
import { useChain } from '@cosmos-kit/react';
import { Asset, AssetList } from '@chain-registry/types';
import { observer } from 'mobx-react-lite';
import { assets } from 'chain-registry';
import BigNumber from 'bignumber.js';
import { asset_lists as assetLists } from '@chain-registry/assets';

import store from '../../store';
import { ToChain } from './to-chain';
import { FromChain } from './from-chain';
import type { Balance } from '../types';

const truncateDenom = (denom: string) => {
  return denom.slice(0, 10) + '...' + denom.slice(-6);
};

const getChainAssets = (chainName: string) => {
  return assets.find((chain) => chain.chain_name === chainName) as AssetList;
};

const exponentiate = (num: number | string, exp: number) => {
  return new BigNumber(num)
    .multipliedBy(new BigNumber(10).exponentiatedBy(exp))
    .toNumber();
};

const denomToAsset = (denom: string): Asset | undefined => {
  for (const chain of assetLists) {
    for (const asset of chain.assets) {
      if (asset.base === denom) return asset;
    }
  }
};

export const getCoin = (chainName: string) => {
  const chainAssets = getChainAssets(chainName);
  return chainAssets?.assets[0] as Asset;
};

export const getExponent = (chainName: string) => {
  const coin = getCoin(chainName);
  return coin?.denom_units.find((unit) => unit.denom === coin.display)
    ?.exponent as number;
};

export const denomToExponent = (denom: string) => {
  const asset = denomToAsset(denom);
  return asset?.denom_units.find((unit) => unit.denom === asset.display)
    ?.exponent;
};

export const IbcTransfer = observer(() => {
  const { address, getRpcEndpoint } = useChain(store.sourceChain);

  const sourceAddress = store.sourceAddress;
  const currentChainName = store.sourceChain;

  const [isLoading, setIsLoading] = useState(false);
  const [balances, setBalances] = useState<Balance[]>([]);

  const coin = getCoin(currentChainName);
  const defaultExp = getExponent(currentChainName);

  const formatBalance = useCallback(
    ({ denom, amount }: { denom: string; amount: string }) => {
      let asset: Asset | undefined;
      const isIbcDenom = denom.startsWith('ibc/');

      if (isIbcDenom) asset = denomToAsset(denom);

      const symbol = isIbcDenom
        ? asset?.symbol || truncateDenom(denom)
        : coin.symbol;

      const logoUrl = isIbcDenom
        ? asset?.logo_URIs?.png || ''
        : coin.logo_URIs?.png;

      const exp = isIbcDenom
        ? denomToExponent(denom) || defaultExp
        : defaultExp;

      const displayAmount = exponentiate(amount, -exp);

      return { denom, symbol, amount, displayAmount, logoUrl };
    },
    [coin, defaultExp]
  );

  const getBalances = useCallback(async () => {
    if (!address || !sourceAddress) {
      setBalances([]);
      return;
    }

    setIsLoading(true);

    let rpcEndpoint = await getRpcEndpoint();

    if (!rpcEndpoint) {
      console.log('no rpc endpoint — using a fallback');
      rpcEndpoint = `https://rpc.cosmos.directory/${currentChainName}`;
    }

    const client = await cosmos.ClientFactory.createRPCQueryClient({
      rpcEndpoint,
    });

    const { balances } = await client.cosmos.bank.v1beta1.allBalances({
      address,
    });

    const emptyBalance: Balance = {
      denom: coin.base,
      symbol: coin.symbol,
      amount: '0',
      displayAmount: 0,
      logoUrl: coin.logo_URIs?.png,
    };

    if (balances.length > 0) {
      const allBalances = balances
        .filter(({ denom }) => !denom.startsWith('gamm'))
        .map(formatBalance);

      const hasOwnTokens = balances.some(
        (balance) => balance.denom === coin.base
      );

      if (hasOwnTokens) {
        setBalances(allBalances);
      } else {
        setBalances([...allBalances, emptyBalance]);
      }
    } else {
      setBalances([emptyBalance]);
    }

    setIsLoading(false);
  }, [
    coin,
    address,
    sourceAddress,
    currentChainName,
    formatBalance,
    getRpcEndpoint,
  ]);

  useEffect(() => {
    getBalances();
  }, [address, getBalances]);

  return (
    <>
      <FromChain balances={balances} isLoading={isLoading} />
      {store.sourceAddress && (
        <ToChain balances={balances} updateBalance={getBalances} />
      )}
    </>
  );
});
