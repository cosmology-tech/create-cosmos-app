import {
  Flex,
  Text,
  Center,
  NumberInput,
  NumberInputField,
  useColorModeValue,
} from '@chakra-ui/react';
import BigNumber from 'bignumber.js';
import React from 'react';
import { StarsIcon } from './StarsIcon';
import { useStarsPrice } from '@/hooks';

interface IProps {
  mb?: string;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

export const AmountInput: React.FC<IProps> = ({
  mb,
  inputValue,
  setInputValue,
}) => {
  const { starsPrice } = useStarsPrice();

  const bgColor = useColorModeValue('#EEF2F8', '#1D2024');
  const statColor = useColorModeValue('#2C3137', '#EEF2F8');
  const titleColor = useColorModeValue('#697584', '#A7B4C2');
  const borderColor = useColorModeValue('#D1D6DD', '#434B55');
  const symbolColor = useColorModeValue('#2C3137', '#A7B4C2');

  const inputDollarValue = new BigNumber(inputValue || 0)
    .multipliedBy(starsPrice || 0)
    .decimalPlaces(2)
    .toString();

  return (
    <Flex mb={mb} w="100%" h="68px" position="relative">
      <Center
        w="68px"
        h="100%"
        bgColor={bgColor}
        border={`1px solid ${borderColor}`}
        borderRight="none"
        borderTopLeftRadius="6px"
        borderBottomLeftRadius="6px"
      >
        <StarsIcon boxSize="32px" />
      </Center>

      <NumberInput
        h="68px"
        flex="1"
        w="100%"
        bgColor={bgColor}
        border={`1px solid ${borderColor}`}
        borderTopRightRadius="6px"
        borderBottomRightRadius="6px"
        value={inputValue}
        onChange={(val) => {
          setInputValue(
            val && !isNaN(Number(val))
              ? new BigNumber(val).decimalPlaces(0).toString()
              : ''
          );
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
            STARS
          </Text>
          {new BigNumber(inputDollarValue).gt(0) && (
            <Text fontSize="12px" color={titleColor}>
              {new BigNumber(inputDollarValue).lt(0.01)
                ? '< $0.01'
                : `≈ $${inputDollarValue}`}
            </Text>
          )}
        </Flex>
      </Center>
    </Flex>
  );
};
