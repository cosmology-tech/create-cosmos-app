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
import { useState, useEffect } from 'react';
import { coin, exponent, marketplaceContract } from 'config';
import { useColor, useTransactionToast } from 'hooks';
import { isGtZero, toDisplayAmount, toRawAmount } from 'utils';
import { Collection, Token, TxResult } from '../../types';
import { AmountInput } from '../nft/amount-input';
import { LargeButton } from '../nft/buttons';
import { SplitText } from '../nft/nft-cards';
import { Subtitle, Fees } from '../nft';
import { useContracts } from '../../../src/codegen/contracts-context';
import { useMarketplaceUpdateAskPriceMutation } from 'src/codegen/Marketplace.react-query';

export const UpdatePriceModal = ({
  modalControl,
  collection,
  token,
  price,
  update,
  isRQ,
}: {
  token: Token;
  price: number;
  isRQ: boolean;
  modalControl: UseDisclosureReturn;
  collection: Collection;
  update: () => void;
}) => {
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const {
    isSuccess: isRQSuccess,
    isError: isRQError,
    error: rqError,
    isLoading: isRQLoading,
    mutate: updateAskPrice,
  } = useMarketplaceUpdateAskPriceMutation();

  const { showToast } = useTransactionToast();

  const symbol = coin.symbol;
  const floorPrice = collection.floorPrice.toString();
  const highestOffer = toDisplayAmount(token.highestCollectionBid, exponent);

  const closeModal = () => {
    modalControl.onClose();
    setInputValue('');
  };

  const { marketplace } = useContracts();

  const handleUpdateClick = async () => {
    setIsLoading(true);

    try {
      const marketplaceClient =
        marketplace.getSigningClient(marketplaceContract);
      await marketplaceClient.updateAskPrice({
        collection: token.collectionAddr,
        price: {
          amount: toRawAmount(inputValue, exponent),
          denom: coin.base,
        },
        tokenId: parseInt(token.tokenId),
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

  const handleRQUpdateClick = async () => {
    try {
      console.log("react query's working.");

      updateAskPrice({
        client: marketplaceContract,
        msg: {
          collection: token.collectionAddr,
          price: {
            amount: toRawAmount(inputValue, exponent),
            denom: coin.base,
          },
          tokenId: parseInt(token.tokenId),
        },
      });
    } catch (ex) {
      showToast(TxResult.Failed, ex);
      console.error(ex);
    }
  };

  useEffect(() => {
    if (isRQSuccess) {
      showToast(TxResult.Success);
      update();
      closeModal();
    }
  }, [isRQSuccess]);

  useEffect(() => {
    if (isRQError) {
      showToast(TxResult.Failed, rqError);
      console.error(rqError);
    }
  }, [isRQError, rqError]);

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
              price={price}
              mb="22px"
            />

            <Flex mb="44px" justifyContent="space-between" w="100%">
              <SplitText
                left="Floor Price"
                right={`${floorPrice} ${symbol}`}
                rightClickable={true}
                onRightClick={() => setInputValue(floorPrice)}
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
              btnContent={`Update${isRQ ? '(ReactQuery)' : ''}`}
              handleClick={isRQ ? handleRQUpdateClick : handleUpdateClick}
              isLoading={isLoading || isRQLoading}
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
