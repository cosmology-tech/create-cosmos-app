import { Flex, Skeleton, SkeletonCircle, Stack, Text } from '@chakra-ui/react';
import React from 'react';

export const SwapSkeletonControlPanel = () => {
  return (
    <Stack className="swap-dropdown-control-panel-skeleton">
      <Skeleton />
      <Skeleton />
    </Stack>
  );
};

export const SwapSkeletonOptions = () => {
  return (
    <>
      {Array(3)
        .fill(null)
        .map((_, i) => (
          <Stack
            isInline={true}
            key={`swap-skeleton-options-${i}`}
            className="swap-skeleton-option"
          >
            <SkeletonCircle className="swap-skeleton-options-logo" />
            <Stack flex={1} className="swap-skeleton-options-text">
              <Skeleton />
              <Skeleton />
            </Stack>
            <Stack className="swap-skeleton-options-text">
              <Skeleton />
              <Skeleton />
            </Stack>
          </Stack>
        ))}
    </>
  );
};

export const SwapSkeletonControlDropdownButton = () => {
  return (
    <Stack isInline={true} className="swap-skeleton-dropdown-button">
      <SkeletonCircle />
      <SwapSkeletonControlPanel />
    </Stack>
  );
};

export const SwapSkeletonInputPanel = () => {
  return (
    <Stack isInline={true} className="swap-skeleton-input-panel">
      <SwapSkeletonControlPanel />
    </Stack>
  );
};

export const SwapSkeletonPrice = () => {
  return (
    <Flex className="swap-skeleton-box">
      <Skeleton className="swap-skeleton-amount" />
      <Text className="swap-price-fiat">~ &nbsp;</Text>
      <Skeleton className="swap-skeleton-fiat" />
    </Flex>
  );
};
