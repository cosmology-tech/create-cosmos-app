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
import { LargeButton } from '../nft/buttons';
import { Token, TxResult } from '../../types';
import { useClient, useColor, useTransactionToast } from 'hooks';
import { isAddressValid } from 'utils';

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
  const { getSg721UpdatableClient } = useClient();

  const { showToast } = useTransactionToast();

  const closeModal = () => {
    modalControl.onClose();
    setInputValue('');
  };

  const handleTransferClick = async () => {
    setIsLoading(true);

    try {
      const client = await getSg721UpdatableClient(token.collectionAddr);
      await client.transferNft({
        recipient: inputValue,
        tokenId: token.tokenId,
      });
      showToast(TxResult.Success);
      update();
      closeModal();
    } catch (error) {
      showToast(TxResult.Failed, error);
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
