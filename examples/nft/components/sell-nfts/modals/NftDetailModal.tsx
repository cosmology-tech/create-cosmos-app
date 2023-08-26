import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  UseDisclosureReturn,
  Image,
  Text,
  Grid,
  GridItem,
  Icon,
  Flex,
  HStack,
  Link,
} from '@chakra-ui/react';
import React, { useMemo } from 'react';
import { AiOutlineTag, AiOutlineFire } from 'react-icons/ai';
import { BsSend } from 'react-icons/bs';
import { FiShare } from 'react-icons/fi';
import { IoMdRemoveCircleOutline } from 'react-icons/io';

import { NormalButton, SemiLargeButton, SimpleButton } from '@/components';
import {
  download,
  getHttpUrl,
  getTwitterShareLink,
  shortenAddress,
  toDisplayAmount,
} from '@/utils';
import { exponent, Token, Collection } from '@/config';
import { useColor, useEvents } from '@/hooks';
import { SplitText } from '../NftCards';
import { NftTraits } from '../NftTraits';

export const NftDetailModal = ({
  token,
  ownerName,
  collection,
  modalControl,
  openModals,
}: {
  token: Token;
  ownerName: string;
  collection: Collection;
  modalControl: UseDisclosureReturn;
  openModals: {
    list: () => void;
    burn: () => void;
    transferNft: () => void;
    updatePrice: () => void;
    removeListing: () => void;
  };
}) => {
  const { events } = useEvents(
    collection.collectionAddr,
    token.tokenId,
    !token.lastSale
  );

  const { isOpen, onClose } = modalControl;

  const creatorName = collection.createdBy.name
    ? collection.createdBy.name.name + '.stars'
    : shortenAddress(collection.createdBy.addr);

  const lastSaleEvent = useMemo(() => {
    if (token?.lastSale) {
      return {
        name: 'Last sale',
        value: toDisplayAmount(token.lastSale.price?.amount, exponent),
      };
    }
    if (!events) return;
    const mintEvent = events.find(
      (event) => event.node.action === 'mint_sender'
    );
    return mintEvent
      ? {
          name: 'Minted for',
          value: toDisplayAmount(mintEvent.node.data.mintPrice, exponent),
        }
      : undefined;
  }, [events, token.lastSale]);

  const priceText: {
    [key: string]: string;
  } = {
    fixed_price: 'Price:',
    auction: 'Best offer:',
  };

  const { bgColor, textColor } = useColor();

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="4xl">
      <ModalOverlay />
      <ModalContent w="816px" pb="60px" bg={bgColor.primary}>
        <ModalHeader>NFT Detail</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Grid templateColumns="repeat(2, 1fr)" gridGap="24px" mb="12px">
            <GridItem>
              <Image
                alt="nft"
                boxSize="100%"
                borderRadius="6px"
                src={getHttpUrl(token.imageUrl!)}
              />
            </GridItem>
            <GridItem>
              <Text
                fontWeight="600"
                fontSize="14px"
                color={textColor.secondary}
                mb="10px"
                lineHeight="16px"
              >
                {collection.name}
              </Text>
              <Text
                fontWeight="600"
                fontSize="26px"
                color={textColor.primary}
                mb="12px"
                lineHeight="30px"
              >
                {token.name}
              </Text>
              <SplitText left="Created by" right={creatorName} mb="14px" />
              <Text
                fontWeight="400"
                fontSize="14px"
                color={textColor.secondary}
                lineHeight="20px"
                w="90%"
                mb="14px"
              >
                {collection.description}
              </Text>
              {lastSaleEvent && (
                <SplitText
                  left={lastSaleEvent.name}
                  right={`${lastSaleEvent.value} STARS`}
                  withIcon
                  mb="8px"
                />
              )}
              <SplitText left="Owned by" right={ownerName} mb="18px" />

              {token.forSale && token.saleType && (
                <SplitText
                  left={priceText[token.saleType]}
                  right={`${toDisplayAmount(
                    token.price?.amount,
                    exponent
                  )} STARS`}
                  size="lg"
                  withIcon
                  mb="24px"
                />
              )}

              {token.forSale ? (
                <Flex gap="16px" mb="16px">
                  <NormalButton
                    onClick={openModals.updatePrice}
                    size={{ h: '36px', w: '100%' }}
                    leftIcon={<Icon as={AiOutlineTag} boxSize={4} />}
                    text="Update Price"
                    type="solid"
                  />
                  <NormalButton
                    onClick={openModals.removeListing}
                    size={{ h: '36px', w: '100%' }}
                    leftIcon={<Icon as={IoMdRemoveCircleOutline} boxSize={4} />}
                    text="Remove Listing"
                    type="outline"
                  />
                </Flex>
              ) : (
                <SemiLargeButton
                  handleClick={openModals.list}
                  isLoading={false}
                  width="100%"
                  btnContent="List for Sale"
                  leftIcon={<Icon as={AiOutlineTag} boxSize={6} />}
                  mb="16px"
                />
              )}

              <Flex gap="16px">
                <SimpleButton
                  content="Transfer"
                  width="100%"
                  leftIcon={<Icon as={BsSend} boxSize={4} />}
                  onClick={openModals.transferNft}
                  isBoldText
                />
                <SimpleButton
                  content="Burn"
                  width="100%"
                  onClick={openModals.burn}
                  leftIcon={<Icon as={AiOutlineFire} boxSize={4} />}
                  isBoldText
                />
              </Flex>
            </GridItem>
          </Grid>

          <Text
            fontWeight="400"
            fontSize="14px"
            lineHeight="20px"
            color={textColor.secondary}
            mb="10px"
          >
            Rank&nbsp;
            <Text as="span" fontWeight="600" color={textColor.primary}>
              {token.rarityOrder?.toLocaleString()}
            </Text>
            &nbsp;of {collection.tokensCount?.toLocaleString()}
          </Text>

          <HStack spacing="16px" mb="28px">
            <SimpleButton
              content="Download"
              onClick={() =>
                download(getHttpUrl(token.imageUrl!), `${token.name}.png`)
              }
            />
            <SimpleButton
              content={
                <Link
                  href={getTwitterShareLink(
                    token.tokenId,
                    token.name!,
                    collection.collectionAddr
                  )}
                  isExternal
                >
                  <Icon as={FiShare} boxSize={4} />
                </Link>
              }
            />
          </HStack>

          {token?.traits && <NftTraits traits={token.traits} />}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
