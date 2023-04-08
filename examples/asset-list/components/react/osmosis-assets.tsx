import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons';
import {
  Text,
  Center,
  Image,
  SimpleGrid,
  HStack,
  Flex,
  useColorMode,
  Box,
  useDisclosure,
} from '@chakra-ui/react';
import BigNumber from 'bignumber.js';
import React, { useMemo, useState } from 'react';
import { PrettyAsset, PriceHash, Transfer, TransferInfo } from '../types';
import { SimpleButton } from './buttons';
import TransferModal from './transfer-modal';
import { chainName as osmoChainName } from '../../config';
import {
  asset_list as osmosisAssetList,
  assets as osmosisAssets,
} from '@chain-registry/osmosis';
import { useManager } from '@cosmos-kit/react';
import { ChainRecord } from '@cosmos-kit/core';
import { QueryAllBalancesRequest } from 'osmojs/types/codegen/cosmos/bank/v1beta1/query';

export const isOsmosisAsset = ({ denom }: PrettyAsset) => {
  return !!osmosisAssets.assets.find((asset) => asset.base === denom);
};

export const getChainName = (osmoDenom: string) => {
  if (osmosisAssets.assets.find((asset) => asset.base === osmoDenom))
    return osmosisAssets.chain_name;
  const asset = osmosisAssetList.assets.find(
    (asset) => asset.base === osmoDenom
  )!;
  const chainName = asset?.traces?.[0].counterparty.chain_name;
  if (!chainName) throw Error('chainName not found: ' + osmoDenom);
  return chainName;
};

export const getNativeDenom = (chainRecord: ChainRecord) => {
  const denom = chainRecord.assetList?.assets[0].base;
  if (!denom) throw Error('denom not found');
  return denom;
};

export const truncDecimals = (
  val: string | number | undefined,
  decimals: number
) => {
  return new BigNumber(val || 0).decimalPlaces(decimals).toString();
};

const ZERO_AMOUNT = '0';

interface IProps {
  assets: PrettyAsset[];
  prices: PriceHash;
  updateBalances: (arg: QueryAllBalancesRequest) => Promise<void>;
}

const OsmosisAssetsList: React.FC<IProps> = ({
  assets,
  prices,
  updateBalances,
}) => {
  const [showAll, setShowAll] = useState(false);
  const [transferInfo, setTransferInfo] = useState<TransferInfo>();

  const { getChainRecord } = useManager();
  const { colorMode } = useColorMode();
  const transferModalControl = useDisclosure();

  const assetsToShow = useMemo(
    () => (showAll ? assets : assets.slice(0, 6)),
    [assets, showAll]
  );

  return (
    <Box position="relative" mb="100px">
      <SimpleGrid columns={3} mb="24px">
        <Header text="Asset" ml="64px" />
        <Header text="Balance" />
      </SimpleGrid>

      {assetsToShow.map((asset) => {
        return (
          <SimpleGrid columns={3} h="40px" key={asset.denom} mb="24px">
            <HStack spacing="24px" h="100%">
              <ChainLogo logoWidth="40px" url={asset.logoUrl} />
              <Center>
                <DataDisplay
                  value={asset.symbol}
                  helpText={asset.prettyChainName}
                />
              </Center>
            </HStack>

            <Flex alignItems="center">
              <DataDisplay
                value={truncDecimals(asset.displayAmount, 6)}
                helpText={'$' + truncDecimals(asset.dollarValue, 2)}
              />
            </Flex>

            {!isOsmosisAsset(asset) && (
              <Flex justifyContent="flex-end" alignItems="center">
                <SimpleButton
                  onClick={() => {
                    const sourceChainName = getChainName(asset.denom);
                    const sourceChainRecord = getChainRecord(sourceChainName);
                    const sourceChainAssetDenom =
                      getNativeDenom(sourceChainRecord);
                    setTransferInfo({
                      sourceChainName,
                      type: Transfer.Deposit,
                      destChainName: osmoChainName,
                      token: {
                        ...asset,
                        displayAmount: ZERO_AMOUNT,
                        dollarValue: ZERO_AMOUNT,
                        amount: ZERO_AMOUNT,
                        denom: sourceChainAssetDenom,
                      },
                    });
                    transferModalControl.onOpen();
                  }}
                  text={Transfer.Deposit}
                  mr="12px"
                />
                <SimpleButton
                  onClick={() => {
                    const destChainName = getChainName(asset.denom);
                    setTransferInfo({
                      sourceChainName: osmoChainName,
                      type: Transfer.Withdraw,
                      destChainName,
                      token: asset,
                    });
                    transferModalControl.onOpen();
                  }}
                  visible={new BigNumber(asset.amount).gt(0)}
                  text={Transfer.Withdraw}
                />
              </Flex>
            )}
          </SimpleGrid>
        );
      })}

      <Flex
        w="100%"
        h={showAll ? 'min-content' : '180px'}
        position="absolute"
        bottom="-62px"
        alignItems="flex-end"
        justifyContent="center"
        zIndex={0}
        css={{
          background:
            colorMode === 'light'
              ? 'linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 60%, rgba(255,255,255,0.2) 100%)'
              : 'linear-gradient(to top, rgba(44,49,55,1) 0%, rgba(44,49,55,0.8) 60%, rgba(44,49,55,0.2) 100%)',
        }}
      >
        <Text
          color={colorMode === 'light' ? '#697584' : '#A7B4C2'}
          fontSize="14px"
          fontWeight="600"
          cursor="pointer"
          onClick={() => setShowAll(!showAll)}
        >
          {`Show ${showAll ? 'less' : 'more'}`}
          {showAll ? (
            <ChevronUpIcon boxSize={6} transform="translateY(-1px)" />
          ) : (
            <ChevronDownIcon boxSize={6} transform="translateY(-1px)" />
          )}
        </Text>
      </Flex>

      {transferInfo && (
        <TransferModal
          prices={prices}
          transferInfo={transferInfo}
          updateBalances={updateBalances}
          modalControl={transferModalControl}
        />
      )}
    </Box>
  );
};

const DataDisplay = ({
  value,
  helpText,
}: {
  value: string;
  helpText: string;
}) => {
  return (
    <Flex flexDir="column" gap="4px">
      <Text fontSize="14px" fontWeight="600" color="#2C3137" lineHeight="16px">
        {value}
      </Text>
      <Text fontSize="14px" fontWeight="400" color="#697584" lineHeight="16px">
        {helpText}
      </Text>
    </Flex>
  );
};

export const ChainLogo = ({
  logoWidth,
  url,
}: {
  logoWidth: string;
  url: string | undefined;
}) => {
  if (!url)
    return (
      <Center
        minW={logoWidth}
        minH={logoWidth}
        border="none"
        borderRadius="full"
        bgColor="#cdd5f3e6"
      >
        <Text color="gray.600">?</Text>
      </Center>
    );
  return (
    <Image
      alt=""
      src={url}
      boxSize={logoWidth}
      border="none"
      borderRadius="full"
      bgColor="#cdd5f3e6"
    />
  );
};

const Header = ({ text, ml }: { text: string; ml?: string }) => {
  return (
    <Text
      fontSize="14px"
      fontWeight="400"
      color="#697584"
      lineHeight="16px"
      ml={ml}
    >
      {text}
    </Text>
  );
};

export default OsmosisAssetsList;
