import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { chains } from '@/config';

interface ChainStore {
  selectedChain: string;
}

const defaultValues: ChainStore = {
  selectedChain: chains[0].chain_name,
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
