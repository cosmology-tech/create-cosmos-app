import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorMode,
  UseDisclosureReturn,
} from '@chakra-ui/react';
import { Token } from './Overview';
import { shiftDigits } from '@/utils';
import { getCoin } from '@/config';
import { ChainName } from '@cosmos-kit/core';
import { Logo } from './ModalElements';
import { type ExtendedValidator as Validator } from '@/utils';

export const SelectValidatorModal = ({
  allValidators,
  chainName,
  logos,
  handleValidatorClick,
  modalControl,
}: {
  allValidators: Validator[];
  chainName: ChainName;
  handleValidatorClick: (validator: Validator) => void;
  modalControl: UseDisclosureReturn;
  logos: {
    [key: string]: string;
  };
}) => {
  const coin = getCoin(chainName);
  const { colorMode } = useColorMode();
  const hasApr = !!allValidators[0].apr;

  return (
    <Modal
      isOpen={modalControl.isOpen}
      onClose={modalControl.onClose}
      size="4xl"
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Redelegate to</ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <TableContainer maxH={600} overflowY="scroll">
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
                {allValidators.map((validator: Validator, index: number) => (
                  <Tr
                    key={validator.address}
                    onClick={() => handleValidatorClick(validator)}
                    _hover={{
                      background:
                        colorMode === 'light' ? 'gray.100' : 'gray.800',
                      cursor: 'pointer',
                    }}
                  >
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
                    {hasApr && (
                      <Td>
                        <Box width="100%" display="flex" alignItems="center">
                          <Text>{validator.apr + '%'}</Text>
                        </Box>
                      </Td>
                    )}
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
