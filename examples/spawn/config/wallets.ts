import { wallets as _wallets } from 'cosmos-kit';
import { MainWalletBase } from '@cosmos-kit/core';

export const keplrWalletName = _wallets.keplr.extension?.walletName!;

export const wallets = [
  _wallets.keplr.extension,
  _wallets.leap.extension,
  _wallets.cosmostation.extension,
  _wallets.station.extension,
] as MainWalletBase[];
