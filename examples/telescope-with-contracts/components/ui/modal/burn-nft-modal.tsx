import {
  UseDisclosureReturn,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Box,
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useClient, useColor, useTransactionToast } from 'hooks';
import { Token, TxResult } from '../../types';

export const BurnNftModal = ({
  modalControl,
  token,
  update,
}: {
  modalControl: UseDisclosureReturn;
  token: Token;
  update: () => void;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { getSg721UpdatableClient } = useClient();

  const { showToast } = useTransactionToast();

  const handleBurnClick = async () => {
    setIsLoading(true);

    try {
      const client = await getSg721UpdatableClient(token.collectionAddr);
      await client.burn({ tokenId: token.tokenId });
      showToast(TxResult.Success);
      update();
      modalControl.onClose();
    } catch (error) {
      showToast(TxResult.Failed, error);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const { textColor, bgColor } = useColor();

  return (
    <Modal
      isOpen={modalControl.isOpen}
      onClose={modalControl.onClose}
      size="xl"
      isCentered
    >
      <ModalOverlay />
      <ModalContent bg={bgColor.primary}>
        <ModalHeader>Warning: You are attempting to burn an NFT</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Alert status="error" borderRadius="6px">
            <AlertIcon />
            <Box>
              <AlertTitle
                fontWeight="600"
                fontSize="18px"
                color={textColor.primary}
              >
                Burning is irreversible
              </AlertTitle>
              <AlertDescription
                fontWeight="400"
                fontSize="14px"
                color={textColor.primary}
              >
                Burning is an irreversible action and deletes your item from the
                blockchain. Make sure you have selected the correct one, and
                intend to perform this action.
              </AlertDescription>
            </Box>
          </Alert>
        </ModalBody>
        <ModalFooter>
          <Button mr={3} onClick={modalControl.onClose} variant="ghost">
            Cancel
          </Button>
          <Button
            colorScheme="red"
            onClick={handleBurnClick}
            isLoading={isLoading}
          >
            Burn
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
