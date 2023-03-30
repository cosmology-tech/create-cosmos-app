import {
  Flex,
  Text,
  Box,
  Center,
  NumberInput,
  NumberInputField,
  useColorModeValue,
} from '@chakra-ui/react';
import BigNumber from 'bignumber.js';
import React from 'react';
import { ChainLogo } from './osmosis-assets';

const ratioLabels = [
  { label: 'Max', divisor: 1 },
  { label: '1/2', divisor: 2 },
  { label: '1/3', divisor: 3 },
];

const AmountInput = () => {
  const titleColor = useColorModeValue('#697584', '#A7B4C2');
  const statColor = useColorModeValue('#2C3137', '#EEF2F8');
  const bgColor = useColorModeValue('#EEF2F8', '#1D2024');
  const borderColor = useColorModeValue('#D1D6DD', '#434B55');

  const amount = 0.1;

  return (
    <Box mb="30px">
      <Flex justifyContent="space-between" mb="12px" alignItems="flex-end">
        <Text
          fontWeight="600"
          fontSize="18px"
          color="#697584"
          lineHeight="22px"
        >
          Select amount
        </Text>
        <Text fontSize="14px" color={titleColor} lineHeight="16px">
          Available&nbsp;
          <span style={{ fontWeight: '600' }}>2 ATOM</span>
        </Text>
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
          <ChainLogo
            url="https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png"
            logoWidth="38px"
          />
        </Center>

        <NumberInput
          h="68px"
          flex="1"
          // value={amount}
          w="100%"
          bgColor={bgColor}
          border={`1px solid ${borderColor}`}
          borderTopRightRadius="6px"
          borderBottomRightRadius="6px"
          onChange={(val) => {
            console.log(val);
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
            disabled={false}
          />
        </NumberInput>

        <Center h="68px" position="absolute" right="21px" bottom={0}>
          <Flex alignItems="center">
            <Text
              fontWeight="semibold"
              lineHeight="shorter"
              fontSize="14px"
              color={statColor}
              mr="6px"
            >
              ATOM
            </Text>
            {amount && !Number.isNaN(Number(amount)) && (
              <Text fontSize="12px" color={titleColor}>
                ≈ $1,013
              </Text>
            )}
          </Flex>
        </Center>
      </Flex>

      <Flex justifyContent="flex-end" gap="10px">
        {ratioLabels.map(({ label, divisor }) => (
          <RatioLabel label={label} divisor={divisor} key={label} />
        ))}
      </Flex>
    </Box>
  );
};

const RatioLabel = ({ label, divisor }: { label: string; divisor: number }) => {
  return (
    <Center
      h="28px"
      bg="#EEF2F8"
      px="7px"
      borderRadius="4px"
      onClick={() => console.log(divisor)}
      cursor="pointer"
    >
      <Text fontWeight="600" fontSize="14px" color="#697584">
        {label}
      </Text>
    </Center>
  );
};

export default AmountInput;
