import { create } from 'zustand';
import { chainOptions } from '@/config';

interface ChainStore {
  selectedChain: string;
}

export const defaultChain = chainOptions[0].chain_name;

export const useChainStore = create<ChainStore>()(() => ({
  selectedChain: defaultChain,
}));

export const chainStore = {
  setSelectedChain: (chainName: string) => {
    useChainStore.setState({ selectedChain: chainName });
  },
};
