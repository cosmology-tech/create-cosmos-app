import { useState } from 'react';
import { useChain } from '@cosmos-kit/react';
import { toast } from '@interchain-ui/react';
import { CHAIN_NAME, STARGAZE_MARKETPLACE_CONTRACT, Token } from '@/config';
import { ListForSalePriceForm, ValidFor30Days } from '@/components/sell';
import { useTx, useContracts, useModal, HookOptions } from "@/hooks";
import { coin, expires, isValidAddress } from '@/utils';

function run(...funcs: Function[]) {
  return function () {
    funcs.forEach(func => func())
  }
}

export enum SaleType {
  Auction = 'auction',
  FixedPrice = 'fixed_price'
}

export function useListForSale(token: Token, {
  success = () => { },
  error = () => { }
}: HookOptions = {}) {
  const tx = useTx();
  const { address } = useChain(CHAIN_NAME);
  const { contracts, isReady } = useContracts();
  const [isLoading, setIsLoading] = useState(false);
  const { modal, open: openModal, close: closeModal, toggle: toggleModal } = useModal('List for Sale');
  const [fixed, setFixed] = useState<ListForSalePriceForm>({ price: 0, valid: ValidFor30Days, reserve: '' });
  const [auction, setAuction] = useState<ListForSalePriceForm>({ price: 0, valid: ValidFor30Days });
  const [sellnow, setSellnow] = useState<ListForSalePriceForm>({ price: 0, valid: 0 });

  function reset() {
    setFixed({ price: 0, valid: ValidFor30Days });
    setAuction({ price: 0, valid: ValidFor30Days });
    setSellnow({ price: 0, valid: 0 });
  }

  function onCancel() {
    reset();
    closeModal();
  }

  async function OnList(saleType: SaleType, form: ListForSalePriceForm) {
    if (isLoading || !isReady) return;

    const { price, valid, reserve } = form;

    const expiredAt = expires(valid);
    const marketplaceMsgComposer =
      contracts.marketplace.getMessageComposer(STARGAZE_MARKETPLACE_CONTRACT);
    const sg721UpdatableMsgComposer =
      contracts.sg721Updatable.getMessageComposer(token.collectionAddr);

    const msgs = [
      sg721UpdatableMsgComposer.approve({
        spender: STARGAZE_MARKETPLACE_CONTRACT,
        tokenId: token.tokenId,
        expires: { at_time: expiredAt },
      }),
      marketplaceMsgComposer.setAsk(
        {
          saleType,
          collection: token.collectionAddr,
          expires: expiredAt,
          price: coin(price),
          tokenId: parseInt(token.tokenId),
          fundsRecipient: address,
          reserveFor: isValidAddress(reserve) ? reserve : undefined,
        },
        [coin('0.5')]
      ),
    ];

    try {
      setIsLoading(true);
      const res = await tx(msgs, { gas: '666666' });
      if (res.error) {
        error();
        console.error(res.error);
        toast.error(res.errorMsg);
      } else {
        toast.success(`Your NFT has been listed for ${price} STARS`);
        success();
        closeModal();
      }
    } catch (e: any) {
      error();
      console.log(e);
      toast.error(e.message || 'List for sale failed')
    } finally {
      setIsLoading(false);
    }
  }

  async function onSell() {
    if (!address || !isReady) return;

    const marketplaceMsgComposer =
      contracts.marketplace.getMessageComposer(STARGAZE_MARKETPLACE_CONTRACT);
    const sg721UpdatableMsgComposer =
      contracts.sg721Updatable.getMessageComposer(token.collectionAddr);

    const msgs = [
      sg721UpdatableMsgComposer.approve({
        spender: STARGAZE_MARKETPLACE_CONTRACT,
        tokenId: token.tokenId,
        expires: { at_time: expires(14) },
      }),
      marketplaceMsgComposer.acceptCollectionBid({
        collection: token.collectionAddr,
        tokenId: parseInt(token.tokenId),
        bidder: token.highestCollectionBidEvent!.bidder!.addr,
      }),
    ];

    try {
      setIsLoading(true);
      const res = await tx(msgs, { gas: '666666' });
      if (res.error) {
        error();
        console.error(res.error);
        toast.error(res.errorMsg);
      } else {
        success();
        toast.success(`Successful`);
        closeModal();
      }
    } catch (e: any) {
      error();
      console.log(e);
      toast.error(e.message || 'List for sale failed')
    } finally {
      setIsLoading(false);
    }
  }

  return {
    isLoading,
    modal,
    openModal: run(reset, openModal),
    toggleModal: run(reset, toggleModal),
    closeModal: run(reset, closeModal),
    fixed: {
      isLoading,
      price: fixed.price,
      valid: fixed.valid,
      reserve: fixed.reserve,
      onList: () => OnList(SaleType.FixedPrice, fixed),
      onCancel,
      onPriceChange: (price: number) => setFixed((prev) => ({ ...prev, price })),
      onValidChange: (valid: number) => setFixed((prev) => ({ ...prev, valid })),
      onReserveChange: (reserve: string) => setFixed((prev) => ({ ...prev, reserve }))
    },
    auction: {
      isLoading,
      price: auction.price,
      valid: auction.valid,
      onList: () => OnList(SaleType.Auction, auction),
      onCancel,
      onPriceChange: (price: number) => setAuction((prev) => ({ ...prev, price })),
      onValidChange: (valid: number) => setAuction((prev) => ({ ...prev, valid }))
    },
    sellnow: {
      isLoading,
      price: sellnow.price,
      valid: sellnow.valid,
      onList: onSell,
      onCancel,
      onPriceChange: (price: number) => setSellnow((prev) => ({ ...prev, price }))
    },
  }
}