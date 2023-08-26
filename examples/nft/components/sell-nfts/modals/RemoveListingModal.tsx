import {
  Text,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  UseDisclosureReturn,
  Flex,
  Center,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useColor, useContracts, useToaster } from '@/hooks';
import { LargeButton } from '@/components';
import { marketplaceContract, Token } from '@/config';

export const RemoveListingModal = ({
  token,
  update,
  modalControl,
}: {
  token: Token;
  update: () => void;
  modalControl: UseDisclosureReturn;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const { contracts, isReady } = useContracts();
  const { toastSuccess, toastFailed } = useToaster();

  const handleUnlistClick = async () => {
    if (!isReady) return;
    setIsLoading(true);

    const client = contracts.marketplace.getSigningClient(marketplaceContract);

    try {
      await client.removeAsk({
        collection: token.collectionAddr,
        tokenId: parseInt(token.tokenId),
      });
      toastSuccess();
      update();
      modalControl.onClose();
    } catch (error) {
      toastFailed(error);
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
      size="md"
      isCentered
    >
      <ModalOverlay />
      <ModalContent bg={bgColor.primary}>
        <ModalHeader>Unlist Item</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex flexDir="column" alignItems="flex-start">
            <Center w="100%">
              <Text
                fontWeight="400"
                fontSize="18px"
                color={textColor.primary}
                mb="48px"
                mt="18px"
              >
                Remove this listing from Marketplace?
              </Text>
            </Center>
            <LargeButton
              width="100%"
              btnContent="Unlist"
              handleClick={handleUnlistClick}
              isLoading={isLoading}
            />

            <Text
              fontWeight="600"
              fontSize="14px"
              color={textColor.secondary}
              mt="18px"
              mb="10px"
              lineHeight="shorter"
              cursor="pointer"
              onClick={modalControl.onClose}
              alignSelf="center"
            >
              Cancel
            </Text>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
