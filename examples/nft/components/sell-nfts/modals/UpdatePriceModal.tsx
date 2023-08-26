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
} from '@chakra-ui/react';
import BigNumber from 'bignumber.js';
import { useState } from 'react';

import {
  coin,
  Collection,
  exponent,
  marketplaceContract,
  Token,
} from '@/config';
import { useColor, useContracts, useToaster } from '@/hooks';
import { isGtZero, toDisplayAmount, toRawAmount } from '@/utils';
import { LargeButton } from '@/components';
import { AmountInput } from '../AmountInput';
import { SplitText } from '../NftCards';
import { Subtitle } from '../ListTab';
import { Fees } from '../Fees';

export const UpdatePriceModal = ({
  modalControl,
  collection,
  token,
  update,
}: {
  token: Token;
  modalControl: UseDisclosureReturn;
  collection: Collection;
  update: () => void;
}) => {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { contracts, isReady } = useContracts();
  const { toastSuccess, toastFailed } = useToaster();

  const symbol = coin.symbol;
  const floorPrice = collection.floorPrice?.toString();
  const highestOffer = toDisplayAmount(token.highestCollectionBid, exponent);

  const closeModal = () => {
    modalControl.onClose();
    setInputValue('');
  };

  const handleUpdateClick = async () => {
    if (!isReady) return;
    setIsLoading(true);

    const client = contracts.marketplace.getSigningClient(marketplaceContract);

    try {
      await client.updateAskPrice({
        collection: token.collectionAddr,
        price: {
          amount: toRawAmount(inputValue, exponent),
          denom: coin.base,
        },
        tokenId: parseInt(token.tokenId),
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

  const { textColor, bgColor } = useColor();

  return (
    <Modal
      isOpen={modalControl.isOpen}
      onClose={closeModal}
      size="lg"
      isCentered
    >
      <ModalOverlay />
      <ModalContent bg={bgColor.primary}>
        <ModalHeader>Update Price</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex flexDir="column" alignItems="flex-start">
            <Text
              fontWeight="600"
              fontSize="18px"
              lineHeight="22px"
              color={textColor.secondary}
              mb="12px"
            >
              Sale Price
            </Text>

            <AmountInput
              inputValue={inputValue}
              setInputValue={setInputValue}
              mb="22px"
            />

            <Flex mb="44px" justifyContent="space-between" w="100%">
              <SplitText
                left="Floor Price"
                right={`${floorPrice} ${symbol}`}
                rightClickable={!!floorPrice}
                onRightClick={() => setInputValue(floorPrice || '0')}
                withIcon
                size="md"
              />

              {isGtZero(highestOffer) && (
                <SplitText
                  left="Highest Offer"
                  right={`${highestOffer} ${symbol}`}
                  rightClickable={true}
                  onRightClick={() => setInputValue(highestOffer)}
                  withIcon
                  size="md"
                />
              )}
            </Flex>

            <Subtitle mb="16px">Fees</Subtitle>

            <Fees
              salePrice={inputValue}
              address={token.collectionAddr}
              showProceeds
              mb="48px"
            />

            <LargeButton
              width="100%"
              btnContent="Update"
              handleClick={handleUpdateClick}
              isLoading={isLoading}
              disabled={
                !inputValue ||
                new BigNumber(inputValue).isEqualTo(0) ||
                isNaN(Number(inputValue))
              }
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
