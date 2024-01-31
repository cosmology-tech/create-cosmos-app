import { useState } from "react";
import { HookOptions, useContracts, useModal } from "@/hooks";
import { Token, STARGAZE_MARKETPLACE_CONTRACT } from "@/config";
import { toast } from '@interchain-ui/react';

export function useUnlist(token: Token, {
  success = () => { },
  error = () => { }
}: HookOptions = {}) {
  const { contracts, isReady } = useContracts();
  const [isLoading, setIsLoading] = useState(false);
  const { modal, open: openModal, close: closeModal, toggle: toggleModal } = useModal('Unlist Item');

  async function onUnlist() {
    if (isLoading || !isReady) return
    if (token && token.collectionAddr) {
      const client = contracts.marketplace.getSigningClient(STARGAZE_MARKETPLACE_CONTRACT);
      try {
        setIsLoading(true)
        await client.removeAsk({
          collection: token.collectionAddr,
          tokenId: parseInt(token.tokenId),
        });
        toast.success('NFT unlisted');
        success();
        closeModal();
      } catch (e) {
        error();
        toast.error('NFt unlist failed');
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    }
  }

  return {
    isLoading, onUnlist,
    modal, openModal, closeModal, toggleModal
  }
}