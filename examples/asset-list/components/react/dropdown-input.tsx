import React, { useEffect, useMemo } from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Flex,
  Center,
  Text,
  Box,
  useColorModeValue,
  NumberInput,
  NumberInputField,
  useDisclosure,
  Skeleton,
} from '@chakra-ui/react';
import {
  ChainLogo,
  getChainName,
  getNativeDenom,
  truncDecimals,
} from './osmosis-assets';
import { SwapDropdown } from '@cosmology-ui/react';
import {
  PrettyAsset,
  PrettyAssetOption,
  PriceHash,
  Transfer,
  TransferInfo,
} from '../types';
import BigNumber from 'bignumber.js';
import { useManager } from '@cosmos-kit/react';
import { useOsmosisClient, useRequest } from '../../hooks';
import { baseUnitsToDisplayUnits, symbolToOsmoDenom } from '../../utils';

const ZERO_AMOUNT = '0';

interface IProps {
  prices: PriceHash;
  assets: PrettyAsset[];
  transferInfo: TransferInfo;
  address: string | undefined;
  setTransferInfo: React.Dispatch<React.SetStateAction<TransferInfo>>;
  inputState: {
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
  };
}

const DropdownInput: React.FC<IProps> = ({
  assets,
  prices,
  address,
  inputState,
  transferInfo,
  setTransferInfo,
}) => {
  const { inputValue, setInputValue } = inputState;
  const {
    type: transferType,
    token: transferToken,
    sourceChainName,
  } = transferInfo;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getChainRecord } = useManager();

  const osmosisClient = useOsmosisClient(sourceChainName);
  const getBalance = useRequest(osmosisClient.getBalance);
  const isDeposit = transferType === Transfer.Deposit;

  useEffect(() => {
    if (!address || !isDeposit) return;
    getBalance.request({ address, denom: transferToken.denom });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  let availableAmount: string = isDeposit
    ? ZERO_AMOUNT
    : transferToken.displayAmount;

  if (getBalance.data && isDeposit) {
    availableAmount = baseUnitsToDisplayUnits(
      transferToken.symbol,
      getBalance.data.amount
    );
  }

  const dollarValue = new BigNumber(inputValue)
    .multipliedBy(prices[symbolToOsmoDenom(transferToken.symbol)])
    .decimalPlaces(2)
    .toString();

  const handleOnChange = (assetOption: PrettyAssetOption) => {
    setInputValue('');
    setTransferInfo((prev) => {
      if (transferType === Transfer.Withdraw) {
        const destChainName = getChainName(assetOption.denom);
        return { ...prev, destChainName, token: assetOption };
      }

      const sourceChainName = getChainName(assetOption.denom);
      const sourceChainRecord = getChainRecord(sourceChainName);
      const sourceChainAssetDenom = getNativeDenom(sourceChainRecord);
      return {
        ...prev,
        sourceChainName,
        token: {
          ...assetOption,
          displayAmount: ZERO_AMOUNT,
          dollarValue: ZERO_AMOUNT,
          amount: ZERO_AMOUNT,
          denom: sourceChainAssetDenom,
        },
      };
    });
  };

  const titleColor = useColorModeValue('#697584', '#A7B4C2');

  const assetOptions: PrettyAssetOption[] = useMemo(() => {
    return assets
      .filter((asset) => {
        if (isDeposit) return true;
        return new BigNumber(asset.amount).gt(0);
      })
      .filter((asset) => {
        return asset.symbol !== transferToken.symbol;
      })
      .map((asset) => ({
        ...asset,
        label: asset.prettyChainName,
        icon: { png: asset.logoUrl },
        amountValue: asset.displayAmount,
        fiatValue: '$' + truncDecimals(asset.dollarValue, 2),
      }));
  }, [assets, isDeposit, transferToken]);

  return (
    <Box h="114px" bg="#EEF2F8" borderRadius="6px" py="10px">
      <Flex
        h="26px"
        alignItems="center"
        justifyContent="flex-end"
        mb="10px"
        pr="10px"
      >
        <Flex
          fontSize="15px"
          color={titleColor}
          lineHeight="18px"
          fontWeight="600"
          alignItems="center"
          mr="20px"
        >
          Available&nbsp;&nbsp;
          {getBalance.loading && isDeposit ? (
            <Skeleton w="30px" h="16px" />
          ) : (
            <span style={{ color: '#2C3137' }}>{availableAmount}</span>
          )}
        </Flex>
        <Center
          h="26px"
          bg="#A2AEBB"
          px="7px"
          borderRadius="4px"
          onClick={() => setInputValue(availableAmount)}
          cursor="pointer"
        >
          <Text fontWeight="600" fontSize="15px" color="#FFF">
            Max
          </Text>
        </Center>
      </Flex>

      <Flex justifyContent="space-between" alignItems="flex-start" pl="20px">
        <Flex gap="20px" cursor="pointer" onClick={onOpen}>
          <ChainLogo logoWidth="50px" url={transferToken.logoUrl} />
          <Flex flexDir="column" justifyContent="center" h="50px">
            <Flex alignItems="center">
              <Text
                fontWeight="600"
                fontSize="22px"
                lineHeight="26px"
                color="#2C3137"
                mr="8px"
              >
                {transferToken.symbol}
              </Text>
              <ChevronDownIcon boxSize={6} color="#697584" />
            </Flex>
            <Text
              fontWeight="400"
              fontSize="14px"
              lineHeight="16px"
              color="#697584"
            >
              {transferToken.prettyChainName}
            </Text>
          </Flex>
        </Flex>

        <Flex
          flexDir="column"
          justifyContent="center"
          h="50px"
          alignItems="flex-end"
          pr="10px"
        >
          <NumberInput
            h="28px"
            value={inputValue}
            focusBorderColor="#EEF2F8"
            position="relative"
            onChange={(val) => {
              if (new BigNumber(val).gt(availableAmount)) {
                setInputValue(availableAmount);
                return;
              }
              setInputValue(val);
            }}
          >
            <NumberInputField
              h="100%"
              px={0}
              disabled={getBalance.loading && isDeposit}
              fontWeight="600"
              fontSize="22px"
              lineHeight="26px"
              textAlign="right"
              color="#2C3137"
              border="none"
            />
            {!inputValue && (
              <Text
                fontWeight="600"
                fontSize="22px"
                lineHeight="26px"
                textAlign="right"
                color="#A2AEBB"
                position="absolute"
                top="1px"
                right={0}
              >
                0
              </Text>
            )}
          </NumberInput>

          <Text
            fontWeight="400"
            fontSize="12px"
            lineHeight="14px"
            color="#697584"
            visibility={
              !isOpen && new BigNumber(inputValue).gt(0) ? 'visible' : 'hidden'
            }
          >
            {new BigNumber(dollarValue).lt(0.01)
              ? '< $0.01'
              : `~ $${dollarValue}`}
          </Text>
        </Flex>
      </Flex>

      <Box mt="-58px">
        <SwapDropdown
          isOpen={isOpen}
          onClose={onClose}
          dropdownData={assetOptions}
          onDropdownChange={handleOnChange}
        />
      </Box>
    </Box>
  );
};

export default DropdownInput;
