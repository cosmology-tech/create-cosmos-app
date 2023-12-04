import React, { useMemo } from 'react';
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
import { ChainLogo } from './ChainAssetsList';
import { SwapDropdown } from '@cosmology-ui/react';
import {
  PrettyAsset,
  PrettyAssetOption,
  PriceHash,
  Transfer,
  TransferInfo,
} from './types';
import BigNumber from 'bignumber.js';
import { useBalance, useChainUtils } from '../../hooks';
import { ChainName } from '@cosmos-kit/core';
import { truncDecimals } from '@/utils';

interface IProps {
  prices: PriceHash;
  assets: PrettyAsset[];
  transferInfo: TransferInfo;
  setTransferInfo: React.Dispatch<
    React.SetStateAction<TransferInfo | undefined>
  >;
  selectedChainName: ChainName;
  inputState: {
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
  };
}

const DropdownInput: React.FC<IProps> = ({
  assets,
  prices,
  inputState,
  transferInfo,
  setTransferInfo,
  selectedChainName,
}) => {
  const { inputValue, setInputValue } = inputState;
  const { convRawToDispAmount, symbolToDenom, getChainName, getNativeDenom } =
    useChainUtils(selectedChainName);

  const {
    type: transferType,
    token: transferToken,
    sourceChainName,
  } = transferInfo;

  const isDeposit = transferType === Transfer.Deposit;
  const { balance, isLoading } = useBalance(sourceChainName, isDeposit);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const ZERO_AMOUNT = '0';

  const availableAmount = useMemo(() => {
    if (!isDeposit) return transferToken.displayAmount;
    if (isLoading) return ZERO_AMOUNT;

    return convRawToDispAmount(
      transferToken.symbol,
      balance?.amount || ZERO_AMOUNT
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDeposit, isLoading, transferToken]);

  const dollarValue = new BigNumber(inputValue)
    .multipliedBy(prices[symbolToDenom(transferToken.symbol)])
    .decimalPlaces(2)
    .toString();

  const handleOnChange = (assetOption: PrettyAssetOption) => {
    setInputValue('');
    setTransferInfo((prev) => {
      if (!prev) return;

      if (transferType === Transfer.Withdraw) {
        const destChainName = getChainName(assetOption.denom);
        return { ...prev, destChainName, token: assetOption };
      }

      const sourceChainName = getChainName(assetOption.denom);
      const sourceChainAssetDenom = getNativeDenom(sourceChainName);
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
        value: asset.prettyChainName,
        icon: { png: asset.logoUrl },
        amount: asset.displayAmount,
        dollarValue: '$' + truncDecimals(asset.dollarValue, 2),
      }));
  }, [assets, isDeposit, transferToken]);

  const titleColor = useColorModeValue('#697584', '#A7B4C2');
  const statColor = useColorModeValue('#2C3137', '#EEF2F8');
  const bgColor = useColorModeValue('#EEF2F8', '#1D2024');
  const labelBgColor = useColorModeValue('#A2AEBB', '#434B55');

  return (
    <Box h="114px" bg={bgColor} borderRadius="6px" py="10px">
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
          {isLoading && isDeposit ? (
            <Skeleton w="30px" h="16px" />
          ) : (
            <span style={{ color: statColor }}>{availableAmount}</span>
          )}
        </Flex>
        <Center
          h="26px"
          bg={labelBgColor}
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
                color={statColor}
                mr="8px"
              >
                {transferToken.symbol}
              </Text>
              <ChevronDownIcon boxSize={6} color={titleColor} />
            </Flex>
            <Text
              fontWeight="400"
              fontSize="14px"
              lineHeight="16px"
              color={titleColor}
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
            focusBorderColor={bgColor}
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
              disabled={isLoading && isDeposit}
              fontWeight="600"
              fontSize="22px"
              lineHeight="26px"
              textAlign="right"
              color={statColor}
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
            color={titleColor}
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
          // @ts-ignore
          dropdownData={assetOptions}
          // @ts-ignore
          onDropdownChange={handleOnChange}
        />
      </Box>
    </Box>
  );
};

export default DropdownInput;
