import { useEffect, useState } from "react";
import { toast } from '@interchain-ui/react';
import { HookOptions, useContracts, useModal } from "@/hooks";
import { Token, STARGAZE_MARKETPLACE_CONTRACT } from "@/config";
import { coin, display } from '@/utils';

export function useUpdatePrice(token: Token, {
  success = () => { },
  error = () => { }
}: HookOptions = {}) {
  const { contracts, isReady } = useContracts();
  const [price, setPrice] = useState(token?.price ? +display(token.price.amount) : 0);

  const [isLoading, setIsLoading] = useState(false);
  const { modal, open: openModal, close: closeModal, toggle: toggleModal } = useModal('Update Price');

  useEffect(() => {
    setPrice(token && token.price ? +display(token.price.amount) : 0);
  }, [token]);

  function onPriceChange(value: number) {
    setPrice(value);
  }

  async function onUpdatePrice() {
    if (isLoading || !isReady) return
    if (token && token.collectionAddr) {
      const client = contracts.marketplace.getSigningClient(STARGAZE_MARKETPLACE_CONTRACT);
      try {
        setIsLoading(true)
        await client.updateAskPrice({
          collection: token.collectionAddr,
          price: coin(price),
          tokenId: parseInt(token.tokenId),
        });
        toast.success('NFT price updated successfully');
        success();
        closeModal();
      } catch (e) {
        toast.error('Failed to update NFT price');
        error();
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    }
  }

  return {
    isLoading, onUpdatePrice,
    price, onPriceChange,
    modal, openModal, closeModal, toggleModal
  }
}