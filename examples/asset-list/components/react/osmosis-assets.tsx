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
  useColorModeValue,
} from '@chakra-ui/react';
import BigNumber from 'bignumber.js';
import React, { useMemo, useState } from 'react';
import { PrettyAsset, PriceHash, Transfer, TransferInfo } from '../types';
import { SimpleButton } from './buttons';
import TransferModal from './transfer-modal';
import { ChainName } from '@cosmos-kit/core';
import { QueryAllBalancesRequest } from 'osmojs/types/codegen/cosmos/bank/v1beta1/query';
import { useIbcAssets } from '../../hooks';

export const truncDecimals = (
  val: string | number | undefined,
  decimals: number
) => {
  return new BigNumber(val || 0).decimalPlaces(decimals).toString();
};

export const formatDollarValue = (dollarValue: string, amount: string) => {
  return new BigNumber(dollarValue).gt(0.01)
    ? '$' + truncDecimals(dollarValue, 2)
    : new BigNumber(amount).gt(0)
    ? '< $0.01'
    : '$0';
};

const ZERO_AMOUNT = '0';

interface IProps {
  assets: PrettyAsset[];
  prices: PriceHash;
  updateBalances: (arg: QueryAllBalancesRequest) => Promise<void>;
  selectedChainName: ChainName;
}

const OsmosisAssetsList: React.FC<IProps> = ({
  assets,
  prices,
  updateBalances,
  selectedChainName,
}) => {
  const [showAll, setShowAll] = useState(false);
  const [transferInfo, setTransferInfo] = useState<TransferInfo>();

  const { colorMode } = useColorMode();
  const transferModalControl = useDisclosure();
  const { getChainName, isNativeAsset, getNativeDenom } =
    useIbcAssets(selectedChainName);

  const assetsToShow = useMemo(
    () => (showAll ? assets : assets.slice(0, 6)),
    [assets, showAll]
  );

  if (assets.length === 0) {
    return (
      <Center>
        <Text fontSize="16px" color="#2C3137" lineHeight="16px">
          No assets on this chain
        </Text>
      </Center>
    );
  }

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
                helpText={formatDollarValue(asset.dollarValue, asset.amount)}
              />
            </Flex>

            {!isNativeAsset(asset) && (
              <Flex justifyContent="flex-end" alignItems="center">
                <SimpleButton
                  onClick={() => {
                    const sourceChainName = getChainName(asset.denom);
                    const sourceChainNativeDenom =
                      getNativeDenom(sourceChainName);
                    setTransferInfo({
                      sourceChainName,
                      type: Transfer.Deposit,
                      destChainName: selectedChainName,
                      token: {
                        ...asset,
                        displayAmount: ZERO_AMOUNT,
                        dollarValue: ZERO_AMOUNT,
                        amount: ZERO_AMOUNT,
                        denom: sourceChainNativeDenom,
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
                      sourceChainName: selectedChainName,
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
          selectedChainName={selectedChainName}
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
  const titleColor = useColorModeValue('#697584', '#A7B4C2');
  const statColor = useColorModeValue('#2C3137', '#EEF2F8');

  return (
    <Flex flexDir="column" gap="4px">
      <Text
        fontSize="14px"
        fontWeight="600"
        color={statColor}
        lineHeight="16px"
      >
        {value}
      </Text>
      <Text
        fontSize="14px"
        fontWeight="400"
        color={titleColor}
        lineHeight="16px"
      >
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
  const titleColor = useColorModeValue('#697584', '#A7B4C2');

  return (
    <Text
      fontSize="14px"
      fontWeight="400"
      color={titleColor}
      lineHeight="16px"
      ml={ml}
    >
      {text}
    </Text>
  );
};

export default OsmosisAssetsList;
