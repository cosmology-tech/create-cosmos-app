import {
  Flex,
  Text,
  Box,
  Center,
  NumberInput,
  NumberInputField,
  useColorModeValue,
  Skeleton,
} from '@chakra-ui/react';
import { ChainName } from '@cosmos-kit/core';
import BigNumber from 'bignumber.js';
import React, { useMemo } from 'react';
import { useBalance, useChainUtils } from '../../hooks';
import { PriceHash, Transfer, TransferInfo } from './types';
import { ChainLogo } from './ChainAssetsList';

const ratioLabels = [
  { label: 'Max', divisor: 1 },
  { label: '1/2', divisor: 2 },
  { label: '1/3', divisor: 3 },
];

interface IProps {
  prices: PriceHash;
  transferInfo: TransferInfo;
  inputState: { inputValue: string; setInputValue: (val: string) => void };
  selectedChainName: ChainName;
}

const AmountInput: React.FC<IProps> = ({
  prices,
  inputState,
  transferInfo,
  selectedChainName,
}) => {
  const { inputValue, setInputValue } = inputState;
  const { convRawToDispAmount, symbolToDenom } =
    useChainUtils(selectedChainName);

  const {
    type: transferType,
    token: transferToken,
    sourceChainName,
  } = transferInfo;

  const isDeposit = transferType === Transfer.Deposit;
  const { balance, isLoading } = useBalance(sourceChainName, isDeposit);

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

  const titleColor = useColorModeValue('#697584', '#A7B4C2');
  const statColor = useColorModeValue('#2C3137', '#EEF2F8');
  const bgColor = useColorModeValue('#EEF2F8', '#1D2024');
  const borderColor = useColorModeValue('#D1D6DD', '#434B55');
  const symbolColor = useColorModeValue('#2C3137', '#A7B4C2');

  return (
    <Box mb="30px">
      <Flex justifyContent="space-between" mb="12px" alignItems="flex-end">
        <Text
          fontWeight="600"
          fontSize="18px"
          color={titleColor}
          lineHeight="22px"
        >
          Select amount
        </Text>
        <Flex fontSize="14px" color={titleColor} lineHeight="16px">
          Available&nbsp;
          {isLoading && isDeposit ? (
            <Skeleton w="30px" h="16px" mr="4px" />
          ) : (
            <span style={{ fontWeight: '600' }}>{availableAmount}&nbsp;</span>
          )}
          <span style={{ fontWeight: '600' }}>{transferToken.symbol}</span>
        </Flex>
      </Flex>

      <Flex h="68px" position="relative" mb="12px">
        <Center
          w="68px"
          h="100%"
          bgColor={bgColor}
          border={`1px solid ${borderColor}`}
          borderRight="none"
          borderTopLeftRadius="6px"
          borderBottomLeftRadius="6px"
        >
          <ChainLogo url={transferToken.logoUrl} logoWidth="38px" />
        </Center>

        <NumberInput
          h="68px"
          flex="1"
          value={inputValue}
          w="100%"
          bgColor={bgColor}
          border={`1px solid ${borderColor}`}
          borderTopRightRadius="6px"
          borderBottomRightRadius="6px"
          onChange={(val) => {
            if (new BigNumber(val).gt(availableAmount)) {
              setInputValue(availableAmount);
              return;
            }
            setInputValue(val);
          }}
        >
          <NumberInputField
            border="none"
            borderRadius="0"
            borderTopRightRadius="6px"
            borderBottomRightRadius="6px"
            h="100%"
            pl="18px"
            pr="120px"
            fontWeight="semibold"
            fontSize="18px"
            color={statColor}
            disabled={isLoading && isDeposit}
          />
        </NumberInput>

        <Center h="68px" position="absolute" right="21px" bottom={0}>
          <Flex>
            <Text
              fontWeight="semibold"
              lineHeight="shorter"
              fontSize="14px"
              color={symbolColor}
              mr="6px"
            >
              {transferToken.symbol}
            </Text>
            {new BigNumber(inputValue).gt(0) && (
              <Text fontSize="12px" color={titleColor}>
                {new BigNumber(dollarValue).lt(0.01)
                  ? '< $0.01'
                  : `≈ $${dollarValue}`}
              </Text>
            )}
          </Flex>
        </Center>
      </Flex>

      <Flex justifyContent="flex-end" gap="10px">
        {ratioLabels.map(({ label, divisor }) => (
          <RatioLabel
            label={label}
            key={label}
            onClick={() => {
              if (isLoading && isDeposit) return;
              const inputVal = new BigNumber(availableAmount)
                .div(divisor)
                .decimalPlaces(9)
                .toString();
              setInputValue(inputVal);
            }}
          />
        ))}
      </Flex>
    </Box>
  );
};

const RatioLabel = ({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) => {
  const bgColor = useColorModeValue('#EEF2F8', '#434B55');
  const titleColor = useColorModeValue('#697584', '#EEF2F8');

  return (
    <Center
      h="28px"
      bg={bgColor}
      px="7px"
      borderRadius="4px"
      onClick={onClick}
      cursor="pointer"
    >
      <Text fontWeight="600" fontSize="14px" color={titleColor}>
        {label}
      </Text>
    </Center>
  );
};

export default AmountInput;
