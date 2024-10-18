import {
  Box,
  Button,
  ClipboardCopyText,
  useTheme
} from "@interchain-ui/react";
import { WalletStatus } from 'cosmos-kit';
import React, { ReactNode, useEffect, useState } from "react";

import { CopyAddressType } from "../types";

const SIZES = {
  lg: {
    height: 12,
    walletImageSize: 7,
    icon: 5,
    fontSize: 'md',
  },
  md: {
    height: 10,
    walletImageSize: 6,
    icon: 4,
    fontSize: 'sm',
  },
  sm: {
    height: 7,
    walletImageSize: 5,
    icon: 3.5,
    fontSize: 'sm',
  },
};

export function stringTruncateFromCenter(str: string, maxLength: number) {
  const midChar = '…'; // character to insert into the center of the result

  if (str.length <= maxLength) return str;

  // length of beginning part
  const left = Math.ceil(maxLength / 2);

  // start index of ending part
  const right = str.length - Math.floor(maxLength / 2) + 1;

  return str.substring(0, left) + midChar + str.substring(right);
}

export function handleChangeColorModeValue(
  colorMode: string,
  light: string,
  dark: string
) {
  if (colorMode === 'light') return light;
  if (colorMode === 'dark') return dark;
}

export const ConnectedShowAddress = ({
  address,
  walletIcon,
  isLoading,
  isRound,
  size = 'md',
  maxDisplayLength,
}: CopyAddressType) => {
  const { theme } = useTheme();
  const [displayAddress, setDisplayAddress] = useState('');
  const defaultMaxLength = {
    lg: 14,
    md: 16,
    sm: 18,
  };

  useEffect(() => {
    if (!address) setDisplayAddress('address not identified yet');
    if (address && maxDisplayLength)
      setDisplayAddress(stringTruncateFromCenter(address, maxDisplayLength));
    if (address && !maxDisplayLength)
      setDisplayAddress(
        stringTruncateFromCenter(
          address,
          defaultMaxLength[size as keyof typeof defaultMaxLength]
        )
      );
  }, [address]);

  return (
    <Button
      variant="unstyled"
      attributes={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: isRound ? 'full' : 'lg',
        border: '1px solid',
        borderColor: theme === 'light' ? 'gray.200' : 'whiteAlpha.300',
        width: 'full',
        height: SIZES[size as keyof typeof SIZES].height,
        minHeight: 'fit-content',
        paddingLeft: 2,
        paddingRight: 2,
        color: theme === 'light' ? 'gray.700' : 'whiteAlpha.600',
        transition: 'all .3s ease-in-out',
      }}
      disabled={!address && true}
      isLoading={isLoading}
    >
      {address && walletIcon && (
        // @ts-ignore
        <Box
          borderRadius="full"
          attributes={{
            width: 'full',
            height: 'full',
            minWidth: SIZES[size as keyof typeof SIZES].walletImageSize,
            minHeight: SIZES[size as keyof typeof SIZES].walletImageSize,
            maxWidth: SIZES[size as keyof typeof SIZES].walletImageSize,
            maxHeight: SIZES[size as keyof typeof SIZES].walletImageSize,
            marginRight: 2,
            opacity: 0.85,
          }}
          mr={2}
          opacity={0.85}
        >
          {/* @ts-ignore */}
          <img
            alt={displayAddress} src={walletIcon} width={10} height={10} />
        </Box>
      )}

      {address && <ClipboardCopyText text={address} truncate="middle" />}
    </Button>
  );
};

export const CopyAddressBtn = ({
  walletStatus,
  connected,
}: {
  walletStatus: WalletStatus;
  connected: ReactNode;
}) => {
  switch (walletStatus) {
    case WalletStatus.Connected:
      return <>{connected}</>;
    default:
      return <></>;
  }
};
