// TODO fix type issues
// @ts-nocheck

import { useMemo } from 'react';
import { useChain } from '@cosmos-kit/react';
import { fromBech32 } from '@cosmjs/encoding';
import { TextField, Text, Box, BoxProps } from '@interchain-ui/react';

type AddressInputProps = {
  chainName: string;
  address: string;
  onAddressChange: (address: string) => void;
  mb?: BoxProps['mb'];
  label?: string;
  placeholder?: string;
  onInvalidAddress?: (error: string) => void;
};

export const AddressInput = ({
  chainName,
  address,
  onAddressChange,
  label,
  mb,
  onInvalidAddress,
  placeholder,
}: AddressInputProps) => {
  const { chain } = useChain(chainName);

  const errorMessage = useMemo(() => {
    let errorMsg = '';

    if (!address) {
      onInvalidAddress && onInvalidAddress(errorMsg);
      return errorMsg;
    }

    try {
      const res = fromBech32(address);
      if (!address.startsWith(chain.bech32_prefix)) {
        errorMsg = `Invalid address: Unexpected prefix (expected: ${chain.bech32_prefix}, actual: ${res.prefix})`;
      }
    } catch (error) {
      errorMsg = 'Invalid address';
    } finally {
      onInvalidAddress && onInvalidAddress(errorMsg);
      return errorMsg;
    }
  }, [address]);

  return (
    <Box mb={mb}>
      <TextField
        id={label || 'address'}
        value={address}
        onChange={(e) => onAddressChange(e.target.value)}
        label={label}
        placeholder={placeholder}
        attributes={{ mb: errorMessage ? '$2' : '0' }}
        intent={errorMessage ? 'error' : 'default'}
      />

      {errorMessage && <Text color="$textDanger">{errorMessage}</Text>}
    </Box>
  );
};
