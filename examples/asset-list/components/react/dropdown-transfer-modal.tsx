import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  UseDisclosureReturn,
  Text,
  Flex,
  Center,
  Icon,
} from '@chakra-ui/react';
import React from 'react';
import { ChainLogo } from './osmosis-assets';
import { HiOutlineClock } from 'react-icons/hi';
import { LargeButton } from './buttons';
import DropdownInput from './dropdown-input';

interface IProps {
  modalControl: UseDisclosureReturn;
}

const DropdownTransferModal: React.FC<IProps> = ({ modalControl }) => {
  return (
    <Modal
      isOpen={modalControl.isOpen}
      onClose={modalControl.onClose}
      size="xl"
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
          Deposit
        </ModalHeader>
        <ModalCloseButton color="#697584" size="lg" mt="10px" />
        <ModalBody>
          <DropdownInput />

          <Center mb="16px" mt="30px">
            <Flex gap="12px" alignItems="center">
              <ChainLogo
                url="https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png"
                logoWidth="50px"
              />
              <Center h="50px">
                <ArrowForwardIcon boxSize={7} color="#4A5568" />
              </Center>
              <ChainLogo
                url="https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png"
                logoWidth="50px"
              />
            </Flex>
          </Center>
        </ModalBody>

        <ModalFooter flexDir="column" pt="0" mt="12px">
          <LargeButton
            btnContent={<BtnContent />}
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
            mb="4px"
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

const BtnContent = () => (
  <Flex alignItems="center">
    <Text
      fontWeight="600"
      fontSize="18px"
      color="#FFF"
      lineHeight="22px"
      mr="12px"
    >
      Transfer
    </Text>
    <Icon as={HiOutlineClock} w="20px" h="20px" mr="4px" />
    <Text fontWeight="400" fontSize="12px" color="#FFF" lineHeight="14px">
      ≈ 20 seconds
    </Text>
  </Flex>
);

export default DropdownTransferModal;
