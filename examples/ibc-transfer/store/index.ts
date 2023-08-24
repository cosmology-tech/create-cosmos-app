import { makeAutoObservable } from 'mobx';
import type { ChainName } from '@cosmos-kit/core';

export const defaultChainName = 'osmosis';

class ChainStore {
  sourceChain: ChainName = defaultChainName;
  sourceAddress: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  setSourceChain(chainName: ChainName) {
    this.sourceChain = chainName;
  }

  setSourceAddress(address: string) {
    this.sourceAddress = address;
  }
}

const chainStore = new ChainStore();

export default chainStore;
