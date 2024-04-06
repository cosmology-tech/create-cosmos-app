// TODO fix type issues
// @ts-nocheck

import { useChain } from '@cosmos-kit/react';
import { Box, Icon, Text } from '@interchain-ui/react';

type LoginInfoBannerProps = {
  loginAddress: string;
  chainName: string;
};

export const LoginInfoBanner = ({
  loginAddress,
  chainName,
}: LoginInfoBannerProps) => {
  const { isWalletConnected } = useChain(chainName);

  if (!isWalletConnected) return null;

  return (
    <Box
      width="$fit"
      height="$14"
      backgroundColor="$cardBg"
      borderRadius="$md"
      display="flex"
      alignItems="center"
      gap="$4"
      px="$6"
      my="$16"
      mx="auto"
    >
      <Icon name="errorWarningLine" size="$xl" />
      <Text>
        You are now logged in as&nbsp;
        <Text as="span" fontWeight="$semibold">
          {loginAddress}
        </Text>
      </Text>
    </Box>
  );
};
