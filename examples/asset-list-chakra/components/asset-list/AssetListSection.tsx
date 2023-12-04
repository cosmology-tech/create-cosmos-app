import React from 'react';
import {
  Box,
  Center,
  Spinner,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import AssetsOverview from './AssetsOverview';
import ChainAssetsList from './ChainAssetsList';
import { useChain } from '@cosmos-kit/react';
import { useAssets } from '../../hooks';
import { ChainName } from '@cosmos-kit/core';

interface IProps {
  chainName: ChainName;
}

export const AssetListSection: React.FC<IProps> = ({ chainName }) => {
  const { isWalletConnected, chain } = useChain(chainName);
  const { data, isLoading, refetch } = useAssets(chainName);

  const titleColor = useColorModeValue('#697584', '#A7B4C2');

  if (!isWalletConnected) {
    return (
      <Box maxW="768px" mx="auto" mb="60px">
        <SectionTitle />
        <Center h="160px" bg="#F5F7FB" borderRadius="6px">
          <Text fontSize="18px" color="#2C3137">
            Connect the wallet to see the assets
          </Text>
        </Center>
      </Box>
    );
  }

  return (
    <Box maxW="768px" mx="auto" mb="60px">
      <SectionTitle />
      <AssetsOverview
        assets={data?.assets || []}
        selectedChainName={chainName}
      />
      <Text
        fontSize="18px"
        fontWeight="600"
        color={titleColor}
        lineHeight="22px"
        mb="20px"
      >
        On {chain.pretty_name}
      </Text>
      {isLoading || !data ? (
        <Loader />
      ) : (
        <ChainAssetsList
          assets={data.assets}
          prices={data.prices}
          updateData={refetch}
          selectedChainName={chainName}
        />
      )}
    </Box>
  );
};

const SectionTitle = () => {
  const textColor = useColorModeValue('#2C3137', '#EEF2F8');
  return (
    <Text
      fontSize="20px"
      fontWeight="600"
      color={textColor}
      lineHeight="24px"
      mb="26px"
    >
      My Assets
    </Text>
  );
};

const Loader = () => {
  return (
    <Center h="100px">
      <Spinner size="md" color="#2C3137" emptyColor="#EEF2F8" speed="0.4s" />
    </Center>
  );
};
