import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  UseDisclosureReturn,
  Box,
  Text,
  Flex,
  Center,
  Icon,
} from '@chakra-ui/react';
import React from 'react';
import AmountInput from './amount-input';
import { ChainLogo } from './osmosis-assets';
import { HiOutlineClock } from 'react-icons/hi';
import { LargeButton } from './buttons';

interface IProps {
  modalControl: UseDisclosureReturn;
}

const TransferModal: React.FC<IProps> = ({ modalControl }) => {
  return (
    <Modal
      isOpen={modalControl.isOpen}
      onClose={modalControl.onClose}
      size="lg"
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader
          fontWeight="600"
          fontSize="20px"
          color="#2C3137"
          py={0}
          pt="24px"
          mb="26px"
        >
          Deposit ATOM
        </ModalHeader>
        <ModalCloseButton color="#697584" size="lg" mt="10px" />
        <ModalBody>
          <Flex justifyContent="space-between" alignItems="flex-end" mb="24px">
            <ChainAddress
              type="fromChain"
              address="cosmos1ja4n4wd7nupkl9ze27phqllen8hx42l79edyul"
              chainName="Cosmos Hub"
              logoUrl="https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png"
            />
            <Center h="54px">
              <ArrowForwardIcon boxSize={5} color="#4A5568" />
            </Center>
            <ChainAddress
              type="toChain"
              address="osmo1ja4n4wd7nupkl9ze27phqllen8hx42l7dz752d"
              chainName="Osmosis"
              logoUrl="https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png"
            />
          </Flex>

          <AmountInput />

          <Flex
            h="40px"
            bg="#EEF2F8"
            borderRadius="6px"
            p="12px"
            alignItems="center"
          >
            <Icon as={HiOutlineClock} w="20px" h="20px" mr="12px" />
            <Text
              fontWeight="400"
              fontSize="14px"
              color="#2C3137"
              lineHeight="shorter"
            >
              Estimated time:&nbsp;
              <span style={{ fontWeight: 600 }}>20 seconds</span>
            </Text>
          </Flex>
        </ModalBody>

        <ModalFooter flexDir="column" pt="0" mt="12px">
          <LargeButton
            btnText="Transfer"
            handleClick={() => {}}
            isLoading={false}
            width="100%"
            disabled={false}
          />
          <Text
            fontWeight="600"
            fontSize="14px"
            color="#697584"
            mt="18px"
            mb="10px"
            lineHeight="shorter"
            cursor="pointer"
            onClick={modalControl.onClose}
          >
            Cancel
          </Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const shortenAddress = (address: string) => {
  return address.slice(0, 9) + '...' + address.slice(-9);
};

const ChainAddress = ({
  type,
  chainName,
  logoUrl,
  address,
}: {
  type: 'fromChain' | 'toChain';
  chainName: string;
  logoUrl: string;
  address: string;
}) => {
  return (
    <Box>
      <Text fontWeight="600" fontSize="14px" color="#697584" mb="12px">
        {type === 'fromChain' ? 'From' : 'To'} {chainName}
      </Text>
      <Flex
        w="216px"
        h="54px"
        bg="#EEF2F8"
        borderRadius="6px"
        p="14px"
        alignItems="center"
      >
        <ChainLogo logoWidth="28px" url={logoUrl} />
        <Text fontWeight="400" fontSize="14px" color="#697584" ml="8px">
          {shortenAddress(address)}
        </Text>
      </Flex>
    </Box>
  );
};

export default TransferModal;
