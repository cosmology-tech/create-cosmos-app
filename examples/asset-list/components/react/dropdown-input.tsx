import React, { useState } from 'react';
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
} from '@chakra-ui/react';
import { ChainLogo } from './osmosis-assets';
import { chainList } from './config';
import { handleSwapDropdown, SwapDropdown } from '@cosmology-ui/react';

const formatData = chainList.map(
  ({ chainName, label, value, symbol, icon, amountValue, fiatValue }) => ({
    name: chainName,
    label,
    value,
    symbol,
    icon,
    amountValue,
    fiatValue,
  })
);

const DropdownInput = () => {
  const [inputValue, setInputValue] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOnChange: handleSwapDropdown = (value) => {
    console.log('selected', value);
  };

  const titleColor = useColorModeValue('#697584', '#A7B4C2');

  return (
    <Box h="114px" bg="#EEF2F8" borderRadius="6px" py="10px">
      <Flex
        h="26px"
        alignItems="center"
        justifyContent="flex-end"
        mb="10px"
        pr="10px"
      >
        <Text
          fontSize="15px"
          color={titleColor}
          lineHeight="18px"
          fontWeight="600"
          mr="20px"
        >
          Available&nbsp;&nbsp;
          <span style={{ color: '#2C3137', fontSize: '14px' }}>2.123</span>
        </Text>
        <Center
          h="26px"
          bg="#A2AEBB"
          px="7px"
          borderRadius="4px"
          onClick={() => console.log('clicked')}
          cursor="pointer"
        >
          <Text fontWeight="600" fontSize="15px" color="#FFF">
            Max
          </Text>
        </Center>
      </Flex>

      <Flex justifyContent="space-between" alignItems="flex-start" pl="20px">
        <Flex gap="20px" cursor="pointer" onClick={onOpen}>
          <ChainLogo
            logoWidth="50px"
            url="https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png"
          />
          <Flex flexDir="column" justifyContent="center" h="50px">
            <Flex alignItems="center">
              <Text
                fontWeight="600"
                fontSize="22px"
                lineHeight="26px"
                color="#2C3137"
                mr="8px"
              >
                ATOM
              </Text>
              <ChevronDownIcon boxSize={6} color="#697584" />
            </Flex>
            <Text
              fontWeight="400"
              fontSize="14px"
              lineHeight="16px"
              color="#697584"
            >
              Cosmos Hub
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
            focusBorderColor="#EEF2F8"
            onChange={(val) => setInputValue(val)}
            position="relative"
          >
            <NumberInputField
              h="100%"
              px={0}
              value={inputValue}
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

          {!isOpen && (
            <Text
              fontWeight="400"
              fontSize="12px"
              lineHeight="14px"
              color="#697584"
              zIndex={100}
            >
              ~ $98.23
            </Text>
          )}
        </Flex>
      </Flex>

      <Box mt="-58px">
        <SwapDropdown
          isOpen={isOpen}
          onClose={onClose}
          dropdownData={formatData.slice(0, 20)}
          onDropdownChange={handleOnChange}
        />
      </Box>
    </Box>
  );
};

export default DropdownInput;
