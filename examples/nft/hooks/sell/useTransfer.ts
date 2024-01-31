import { useState } from "react";
import { toast } from '@interchain-ui/react';
import { HookOptions, useContracts, useModal } from "@/hooks";
import { Token } from "@/config";
import { isValidAddress } from "@/utils";

export function useTransfer(token: Token, {
  success = () => { },
  error = () => { }
}: HookOptions = {}) {
  const { contracts, isReady } = useContracts();
  const [recipient, setRecipient] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { modal, open: openModal, close: closeModal, toggle: toggleModal } = useModal('Transfer NFT');

  function onRecipientChange(value: string = '') {
    if (isValidAddress(value)) setRecipient(value);
  }

  async function onTransfer() {
    if (isLoading || !isReady) return;
    if (!isValidAddress(recipient)) return toast.error('Invalid recipient address');
    if (token && token.collectionAddr) {
      const client = contracts.sg721Updatable.getSigningClient(token.collectionAddr);
      try {
        setIsLoading(true);
        await client.transferNft({
          recipient: recipient,
          tokenId: token.tokenId,
        });
        success();
        closeModal();
        toast.success('NFT transferred successfully');
      } catch (e) {
        error();
        toast.error('NFT transfer failed');
        console.log('NFT transfer failed', e);
      } finally {
        setIsLoading(false);
      }
    }
  }

  return {
    modal,
    openModal,
    closeModal,
    toggleModal,
    recipient,
    onTransfer,
    onRecipientChange
  }
}