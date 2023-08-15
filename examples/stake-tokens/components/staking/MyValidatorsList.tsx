import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Box,
  Icon,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { Token } from './Overview';
import { IoArrowForward } from 'react-icons/io5';
import { Dispatch, SetStateAction } from 'react';
import { getCoin } from '../../config';
import { ChainName } from '@cosmos-kit/core';
import React from 'react';
import { Logo } from './ModalElements';
import { type ExtendedValidator as Validator } from '@/utils';

const MyValidatorsList = ({
  myValidators,
  openModal,
  chainName,
  logos,
  setSelectedValidator,
}: {
  myValidators: Validator[];
  chainName: ChainName;
  openModal: () => void;
  setSelectedValidator: Dispatch<SetStateAction<Validator | undefined>>;
  logos: {
    [key: string]: string;
  };
}) => {
  const coin = getCoin(chainName);

  const { colorMode } = useColorMode();

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Validator</Th>
            <Th>Amount Staked</Th>
            <Th>Claimable Rewards</Th>
          </Tr>
        </Thead>
        <Tbody>
          {myValidators.map((validator, index) => (
            <Tr key={validator.name}>
              <Td>
                <Box
                  display="flex"
                  alignItems="center"
                  maxWidth={280}
                  overflowX="hidden"
                >
                  <Text mr={4}>{index + 1}</Text>
                  <Logo
                    identity={validator.identity}
                    name={validator.name}
                    logoUrl={logos[validator.address]}
                  />
                  <Text>{validator.name}</Text>
                </Box>
              </Td>
              <Td>
                {validator.delegation}&nbsp;
                <Token color="blackAlpha.800" token={coin.symbol} />
              </Td>
              <Td>
                <Box width="100%" display="flex" alignItems="center">
                  <span>
                    {validator.reward}&nbsp;
                    <Token color="blackAlpha.800" token={coin.symbol} />
                  </span>
                  <Button
                    variant="ghost"
                    ml="auto"
                    onClick={() => {
                      openModal();
                      setSelectedValidator(validator);
                    }}
                    color={colorMode === 'light' ? 'purple.600' : 'purple.200'}
                  >
                    Manage
                    <Icon as={IoArrowForward} />
                  </Button>
                </Box>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default React.memo(MyValidatorsList);
