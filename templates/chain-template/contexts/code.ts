import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ChainName } from 'cosmos-kit';
import { AccessType } from 'interchain-query/cosmwasm/wasm/v1/types';

import { defaultChain, useChainStore } from './chain';

export interface CodeIdInfo {
  id: number;
  uploader: string;
  permission: AccessType;
  name?: string;
}

type CodeStore = {
  codeInfo: Record<ChainName, Record<number, CodeIdInfo>>;
  currentChain: ChainName;
};

export const useCodeStore = create<CodeStore>()(
  persist(
    () => ({
      codeInfo: {},
      currentChain: defaultChain,
    }),
    {
      name: 'code-store',
      version: 1,
      partialize(state) {
        return { codeInfo: state.codeInfo };
      },
    }
  )
);

export const codeStore = {
  setCurrentChain(chainName: ChainName) {
    useCodeStore.setState({ currentChain: chainName });
  },

  getCodeIdInfo(id: number): CodeIdInfo | undefined {
    const state = useCodeStore.getState();
    return state.codeInfo[state.currentChain]?.[id];
  },

  getAllCodes(uploader: string | undefined): CodeIdInfo[] {
    if (!uploader) return [];
    const state = useCodeStore.getState();
    return Object.values(state.codeInfo[state.currentChain] || {}).filter(
      (code) => code.uploader === uploader
    );
  },

  updateCodeInfo({ id, uploader, permission, name }: CodeIdInfo): void {
    useCodeStore.setState(({ codeInfo, currentChain }) => {
      const codeIdInfo = codeInfo[currentChain]?.[id] || {
        id,
        uploader,
        permission,
      };

      if (name !== undefined) {
        codeIdInfo.name = name.trim().length ? name.trim() : undefined;
      }

      return {
        codeInfo: {
          ...codeInfo,
          [currentChain]: {
            ...codeInfo[currentChain],
            [id]: codeIdInfo,
          },
        },
      };
    });
  },
};

useChainStore.subscribe(({ selectedChain }) => {
  codeStore.setCurrentChain(selectedChain);
});
