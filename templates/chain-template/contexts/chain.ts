import { create } from 'zustand';
import { staticChains } from '@/config';

interface ChainStore {
  selectedChain: string;
}

const defaultValues: ChainStore = {
  selectedChain: staticChains[0].chain_name,
};

export const useChainStore = create<ChainStore>()(() => defaultValues);

export const chainStoreActions = {
  setSelectedChain: (chainName: string) => {
    useChainStore.setState({ selectedChain: chainName });
  },
};
