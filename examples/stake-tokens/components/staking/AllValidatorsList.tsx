import React, { Dispatch, SetStateAction } from 'react';
import { IoArrowForward } from 'react-icons/io5';
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
import { ChainName } from '@cosmos-kit/core';

import { getCoin } from '@/config';
import { Token } from './Overview';
import { shiftDigits, type ExtendedValidator as Validator } from '@/utils';
import { Logo } from './ModalElements';

const AllValidatorsList = ({
  validators,
  openModal,
  chainName,
  logos,
  setSelectedValidator,
}: {
  validators: Validator[];
  chainName: ChainName;
  openModal: () => void;
  setSelectedValidator: Dispatch<SetStateAction<Validator | undefined>>;
  logos: {
    [key: string]: string;
  };
}) => {
  const coin = getCoin(chainName);

  const { colorMode } = useColorMode();
  const hasApr = !!validators[0].apr;

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Validator</Th>
            <Th>Voting Power</Th>
            <Th>Commission</Th>
            {hasApr && <Th>APR</Th>}
          </Tr>
        </Thead>

        <Tbody>
          {validators.map((validator: Validator, index: number) => (
            <Tr key={validator.address}>
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
                {validator.votingPower.toLocaleString()}&nbsp;
                <Token color="blackAlpha.800" token={coin.symbol} />
              </Td>
              <Td>{shiftDigits(validator.commission, 2)}%</Td>
              <Td>
                <Box width="100%" display="flex" alignItems="center">
                  {hasApr && <Text>{validator.apr + '%'}</Text>}
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

export default React.memo(AllValidatorsList);
