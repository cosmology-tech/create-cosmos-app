import { toBech32, fromBech32 } from '@cosmjs/encoding';

export const validateContractAddress = (
  address: string,
  bech32Prefix: string
) => {
  if (!bech32Prefix)
    return 'Cannot retrieve bech32 prefix of the current network.';

  if (!address.startsWith(bech32Prefix))
    return `Invalid prefix (expected "${bech32Prefix}")`;

  const bytes = Array.from(Array(32).keys());
  const exampleAddress = toBech32(bech32Prefix, new Uint8Array(bytes));

  if (address.length !== exampleAddress.length) return 'Invalid address length';

  try {
    fromBech32(address);
  } catch (e) {
    return (e as Error).message;
  }

  return null;
};
