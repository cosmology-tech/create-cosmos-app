import { makeAutoObservable } from 'mobx';
import type { ChainName } from '@cosmos-kit/core';

class ChainStore {
  sourceChain: ChainName = 'osmosis';
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
