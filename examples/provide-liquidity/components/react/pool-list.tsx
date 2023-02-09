import React from 'react';
import {
  Icon,
  Image,
  Flex,
  TableContainer,
  Table,
  Tr,
  Th,
  Thead,
  Tbody,
  Td,
  Text,
  Center,
} from '@chakra-ui/react';
import { useManager } from '@cosmos-kit/react';
import { SlOptionsVertical } from 'react-icons/sl';
import { chainName } from '../../config';

const TableHeaders: ReadonlyArray<string> = [
  '',
  'Pool',
  'Liquidity',
  '24H Volume',
  '7D Fees',
  'APR',
  '',
];

const PoolList = ({
  poolNumber,
  isBold = false,
}: {
  poolNumber: number;
  isBold?: boolean;
}) => {
  const { getChainLogo } = useManager();
  const nums = [...Array(poolNumber).keys()];

  const stats: string[] = ['$168,767,639', '$3,288,612', '$59,075', '24%'];

  return (
    <>
      <TableContainer mb="20px">
        <Table variant="unstyled">
          <Thead>
            <Tr>
              {TableHeaders.map((header, i) => (
                <Th
                  key={header + i}
                  css={{ textTransform: 'none' }}
                  fontWeight="400"
                  fontSize="14px"
                  color="#697584"
                >
                  {header}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {nums.map((num) => (
              <Tr key={num}>
                <Td p={0} w={0}>
                  <Flex w={isBold ? '60px' : '40px'}>
                    <Image
                      w={isBold ? '40px' : '28px'}
                      alt="cosmoshub"
                      src={getChainLogo('cosmoshub')}
                    />
                    <Image
                      w={isBold ? '52px' : '40px'}
                      alt={chainName}
                      src={getChainLogo(chainName)}
                      transform="translateX(-16px)"
                    />
                  </Flex>
                </Td>
                <Td py={0}>
                  <Text
                    mb="2px"
                    fontWeight="600"
                    fontSize="14px"
                    color={isBold ? '#2C3137' : '#697584'}
                  >
                    ATOM/OSMO
                  </Text>
                  <Text fontWeight="400" fontSize="14px" color="#697584">
                    Pool #1
                  </Text>
                </Td>
                {stats.map((stat) => (
                  <Td key={stat}>
                    <Text
                      fontWeight="600"
                      fontSize={isBold ? '14px' : '12px'}
                      color={isBold ? '#2C3137' : '#697584'}
                    >
                      {stat}
                    </Text>
                  </Td>
                ))}
                <Td px={0} py="14px">
                  <Center
                    w="38px"
                    h="38px"
                    ml="auto"
                    borderRadius="4px"
                    transition="all 0.2s linear"
                    cursor="pointer"
                    _hover={{
                      backgroundColor: '#EEF2F8',
                    }}
                  >
                    <Icon as={SlOptionsVertical} />
                  </Center>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default PoolList;
