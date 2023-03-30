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
import React, { useState } from 'react';
import { SimpleButton } from './buttons';
import TransferModal from './transfer-modal';

const OsmosisAssets: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const { colorMode } = useColorMode();

  const transferModalControl = useDisclosure();

  return (
    <Box position="relative" mb="100px">
      <SimpleGrid columns={3} mb="24px">
        <Header text="Asset" ml="64px" />
        <Header text="Balance" />
      </SimpleGrid>

      {(showAll ? 'abcdefghijklmn' : 'abcdefg').split('').map((value) => {
        return (
          <SimpleGrid columns={3} h="40px" key={value} mb="24px">
            <HStack spacing="24px" h="100%">
              <ChainLogo
                logoWidth="40px"
                url="https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png"
              />
              <Center>
                <DataDisplay value="OSMO" helpText="Osmosis" />
              </Center>
            </HStack>

            <Flex alignItems="center">
              <DataDisplay value="102.614224" helpText="$101.02" />
            </Flex>

            <Flex justifyContent="flex-end" alignItems="center">
              <SimpleButton
                onClick={transferModalControl.onOpen}
                text="Deposit"
                mr="12px"
              />
              <SimpleButton
                onClick={transferModalControl.onOpen}
                text="Withdraw"
              />
            </Flex>
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

      <TransferModal modalControl={transferModalControl} />
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

export default OsmosisAssets;
