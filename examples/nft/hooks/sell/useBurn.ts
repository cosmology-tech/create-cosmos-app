import { useState } from "react";
import { HookOptions, useContracts, useModal } from "@/hooks";
import { Token } from "@/config";
import { toast } from '@interchain-ui/react';

export function useBurn(token: Token, {
  success = () => { },
  error = () => { }
}: HookOptions = {}) {
  const { contracts, isReady } = useContracts();
  const [isLoading, setIsLoading] = useState(false);
  const { modal, open: openModal, close: closeModal, toggle: toggleModal } = useModal('Warning: You are attempting to burn an NFT');

  async function onBurn() {
    if (isLoading || !isReady) return
    if (token && token.collectionAddr) {
      const client = contracts.sg721Updatable.getSigningClient(token.collectionAddr);
      try {
        setIsLoading(true)
        await client.burn({ tokenId: token.tokenId });
        toast.success('NFT burned successfully');
        success();
        closeModal();
      } catch (e) {
        error();
        toast.error('NFT burn failed');
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    }
  }

  return {
    isLoading, onBurn,
    modal, openModal, closeModal, toggleModal
  }
}