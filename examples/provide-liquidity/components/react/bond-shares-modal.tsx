import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
} from '@chakra-ui/react';
import { Pool } from './provide-liquidity';

const BondSharesModal = ({
  isOpen,
  onClose,
  currentPool,
}: {
  isOpen: boolean;
  onClose: () => void;
  currentPool: Pool | undefined;
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay bg="blackAlpha.800" />
      <ModalContent>
        <ModalHeader>
          <Text>Bond shares</Text>
          <Text>Pool #{currentPool?.id.low}</Text>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat illo
          error, laboriosam dolores illum voluptate veritatis nisi eligendi
          eaque, fuga et facilis voluptatem minima ducimus accusantium fugiat
          rerum adipisci mollitia?
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default BondSharesModal;
