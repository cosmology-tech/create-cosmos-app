import BigNumber from 'bignumber.js';
import { useState } from 'react';
import { useChain } from '@cosmos-kit/react';
import { toast } from '@interchain-ui/react';
import { useContracts, useStarsBalance, useStarsPrice } from "@/hooks";
import { display, percent } from '@/utils';
import { useCollection } from '.';
import { useTx } from '../useTx';
import { CHAIN_NAME } from '@/config';

export function useMint() {
  const [count, setCount] = useState(0);
  const [isMinting, setIsMinting] = useState(false);
  const [isInsufficientBalance, setIsInsufficientBalance] = useState(false);
  const { address } = useChain(CHAIN_NAME);
  const { contracts, isReady } = useContracts();

  const tx = useTx();
  const price = useStarsPrice();
  const balance = useStarsBalance();
  const collection = useCollection();

  const quantity = collection?.minter?.num_tokens || 0;
  const royalties = percent(collection?.info?.royalty_info?.share || 0);
  const minted = percent(new BigNumber(quantity)
    .minus(collection?.mintable?.count || 0)
    .div(quantity || 1).toString());

  const isSoldOut = !collection?.mintable?.count;
  const isWhitelistActive = Boolean(collection?.whitelist?.is_active);

  const tag = isWhitelistActive
    ? 'WHITELIST MINT LIVE'
    : isSoldOut
      ? 'SOLD OUT'
      : 'NOW LIVE'

  const limited = isWhitelistActive
    ? collection?.whitelist?.per_address_limit!
    : collection?.minter?.per_address_limit!;

  const starPrice = price.value || 0;
  const mintPrice = collection?.mint?.price?.current_price
    ? display(collection?.mint.price.current_price.amount)
    : 0;

  const value = new BigNumber(count)
    .multipliedBy(price.value || 0).precision(2).toNumber();
  const amount = new BigNumber(count)
    .multipliedBy(mintPrice || 0).precision(2).toNumber();

  function onCountChange(value: string | number) {
    const n = Number(value);
    setCount(n);
    setIsInsufficientBalance(
      n > 0 && n * Number(mintPrice) > Number(balance.display || 0)
    );
  }

  async function onMint() {
    if (!address || !isReady || !collection.address?.minter) return;

    const price = collection?.mint?.price?.current_price;
    if (!price) {
      return console.error('no mint price found');
    }

    setIsMinting(true);
    const { mint } = contracts.vendingMinter.getMessageComposer(collection.address.minter);
    const msgs = Array(count).fill(mint([price]));
    const res = await tx(msgs, {
      gas: new BigNumber('450000').multipliedBy(count).toString(),
    });
    setIsMinting(false);

    if (res.error) {
      toast.error(res.errorMsg);
      console.log(res.response);
      console.log(res.error.message);
    } else {
      setCount(0);
      toast.success('Mint successful');
      collection.refetch();
      balance.query.refetch();
    }
  }

  return {
    count, price, value, amount, balance, collection, address,
    tag, quantity, royalties, minted, limited,
    starPrice, mintPrice, isMinting, isInsufficientBalance,
    onMint, onCountChange
  }
}