import { Token } from "@/config";
import { sum, minus, multiply } from '@/utils';
import { useRoyaltyShare } from ".";

const FAIR_BURN_RATE = 0.02;
const LISTING_FEE = 0.5;

export type Fees = ReturnType<typeof useFees>;

export function useFees(token: Token, price = 0) {
  const royalty = useRoyaltyShare(token.collectionAddr);

  const listingFee = LISTING_FEE;  // const listingFee = countListingFee ? LISTING_FEE : '0';

  const royalties = royalty.value ? multiply(price, royalty.value) : '0';
  const fairBurn = multiply(price, FAIR_BURN_RATE);
  const proceeds = minus(price, sum(listingFee, fairBurn, royalties));

  return { listingFee, royalties, fairBurn, proceeds }
}