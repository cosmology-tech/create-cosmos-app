import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  UseDisclosureReturn,
  ModalFooter,
  Input,
} from '@chakra-ui/react';
import { Token } from '@/config';
import { LargeButton } from '@/components';
import { isAddressValid } from '@/utils';
import { useColor, useContracts, useToaster } from '@/hooks';

export const TransferNftModal = ({
  token,
  modalControl,
  update,
}: {
  token: Token;
  modalControl: UseDisclosureReturn;
  update: () => void;
}) => {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { contracts, isReady } = useContracts();
  const { toastSuccess, toastFailed } = useToaster();

  const closeModal = () => {
    modalControl.onClose();
    setInputValue('');
  };

  const handleTransferClick = async () => {
    if (!isReady) return;
    setIsLoading(true);

    const client = contracts.sg721Updatable.getSigningClient(
      token.collectionAddr
    );

    try {
      await client.transferNft({
        recipient: inputValue,
        tokenId: token.tokenId,
      });
      toastSuccess();
      update();
      closeModal();
    } catch (error) {
      toastFailed(error);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const { textColor, bgColor, borderColor } = useColor();

  return (
    <Modal
      isOpen={modalControl.isOpen}
      onClose={closeModal}
      size="xl"
      isCentered
    >
      <ModalOverlay />
      <ModalContent bg={bgColor.primary}>
        <ModalHeader>Transfer NFT</ModalHeader>
        <ModalCloseButton color={textColor.secondary} />
        <ModalBody>
          <Text
            fontWeight="600"
            fontSize="18px"
            lineHeight="shorter"
            color={textColor.secondary}
            mb="12px"
            mt="10px"
          >
            Recipient
          </Text>
          <Input
            h="68px"
            w="100%"
            mb="24px"
            bgColor={bgColor.tertiary}
            border={`1px solid ${borderColor.secondary}`}
            borderRadius="6px"
            fontWeight="600"
            fontSize="16px"
            placeholder="Enter address"
            _placeholder={{
              fontWeight: 400,
            }}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            color={textColor.primary}
          />
        </ModalBody>
        <ModalFooter flexDir="column" pt="0" mt="12px">
          <LargeButton
            width="100%"
            btnContent="Transfer"
            handleClick={handleTransferClick}
            isLoading={isLoading}
            disabled={!isAddressValid(inputValue)}
          />
          <Text
            fontWeight="600"
            fontSize="14px"
            color={textColor.secondary}
            mt="18px"
            mb="10px"
            lineHeight="shorter"
            cursor="pointer"
            onClick={closeModal}
          >
            Cancel
          </Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
