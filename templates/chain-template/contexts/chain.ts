import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ChainStore {
  selectedChain: string;
}

const defaultValues: ChainStore = {
  selectedChain: 'osmosis',
};

export const useChainStore = create<ChainStore>()(
  persist(() => defaultValues, {
    name: 'chain-store',
    version: 1,
  })
);

export const chainStoreActions = {
  setSelectedChain: (chainName: string) => {
    useChainStore.setState({ selectedChain: chainName });
  },
};
