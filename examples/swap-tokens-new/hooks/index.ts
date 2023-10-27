export * from './useTx';
export * from './useSwap';
export * from './usePools';
export * from './usePrices';
export * from './useBalances';
export * from './useQueryHooks';


// Fix TypeError: Do not know how to serialize a BigInt
// cosmos.bank.v1beta1.useAllBalances({
//                    ^
(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

export function paginate(limit = 100n, offset = 0n) {
  return {
    limit,
    offset,
    key: new Uint8Array(),
    countTotal: true,
    reverse: false,
  };
}