import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ChainName } from 'cosmos-kit';

import { defaultChain, useChainStore } from './chain';

type CodeStore = {
  codeNames: Record<ChainName, Record<number, string>>;
  currentChain: ChainName;
};

export const useCodeStore = create<CodeStore>()(
  persist(
    () => ({
      codeNames: {},
      currentChain: defaultChain,
    }),
    {
      name: 'code-store',
      version: 1,
      partialize(state) {
        return { codeNames: state.codeNames };
      },
    }
  )
);

export const codeStore = {
  setCurrentChain(chainName: ChainName) {
    useCodeStore.setState({ currentChain: chainName });
  },

  getCodeName(id: number): string | undefined {
    const state = useCodeStore.getState();
    return state.codeNames[state.currentChain]?.[id];
  },

  updateCodeName({ id, name }: { id: number; name: string }): void {
    const state = useCodeStore.getState();
    useCodeStore.setState({
      codeNames: {
        ...state.codeNames,
        [state.currentChain]: {
          ...state.codeNames[state.currentChain],
          [id]: name,
        },
      },
    });
  },
};

useChainStore.subscribe(({ selectedChain }) => {
  codeStore.setCurrentChain(selectedChain);
});
