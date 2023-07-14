import { Text, Flex } from '@chakra-ui/react';
import { useChain } from '@cosmos-kit/react';
import BigNumber from 'bignumber.js';
import React, { useState } from 'react';
import { chainName, exponent, marketplaceContract } from 'config';
import { useClient, useColor, useTx } from 'hooks';
import { getExpirationTime, toDisplayAmount } from 'utils';
import { Collection, Token } from '../../types';
import { LargeButton } from '../../base/buttons';
import { SplitText } from './nft-cards';
import { StarsIcon } from './stars-icon';
import { Fees } from './fees';
import { Subtitle } from './list-tab';

export const SellNowTab = ({
  token,
  update,
  closeModal,
  collection,
}: {
  token: Token;
  update: () => void;
  closeModal: () => void;
  collection: Collection;
}) => {
  const { address } = useChain(chainName);
  const [isLoading, setIsLoading] = useState(false);
  const { getMarketplaceMsgComposer, getSg721UpdatableMsgComposer } =
    useClient();

  const { tx } = useTx();

  const floorPrice = collection.floorPrice.toString();
  const highestOffer = toDisplayAmount(token.highestCollectionBid, exponent);

  const offerToFloorPriceRatio = new BigNumber(highestOffer)
    .div(floorPrice)
    .decimalPlaces(2)
    .toString();

  const handleClick = async () => {
    if (!address) return;
    setIsLoading(true);

    const marketplaceMsgComposer = getMarketplaceMsgComposer();
    const sg721UpdatableMsgComposer = getSg721UpdatableMsgComposer(
      token.collectionAddr
    );

    const msgs = [
      sg721UpdatableMsgComposer.approve({
        spender: marketplaceContract,
        tokenId: token.tokenId,
        expires: { at_time: getExpirationTime('14') },
      }),
      marketplaceMsgComposer.acceptCollectionBid({
        collection: token.collectionAddr,
        tokenId: parseInt(token.tokenId),
        bidder: token.highestCollectionBidEvent.bidder.addr,
      }),
    ];

    await tx(msgs, { gas: '666666' }, () => {
      closeModal();
      update();
    });

    setIsLoading(false);
  };

  const { textColor } = useColor();

  return (
    <Flex flexDir="column" alignItems="flex-start" pt="28px">
      <Text
        fontWeight="600"
        fontSize="18px"
        lineHeight="22px"
        color={textColor.secondary}
        mb="22px"
      >
        Best Offer
      </Text>

      <Flex alignItems="center" mb="20px">
        <Text
          fontWeight="600"
          fontSize="18px"
          lineHeight="22px"
          color={textColor.primary}
        >
          {highestOffer} STARS
        </Text>

        <StarsIcon boxSize="32px" ml="12px" />
      </Flex>

      <Flex mb="44px">
        <SplitText
          left="This offer is"
          right={offerToFloorPriceRatio + 'X'}
          size="md"
        />
        <SplitText
          left="&nbsp;the floor price of"
          right={`${floorPrice} STARS.`}
          size="md"
        />
      </Flex>

      <Subtitle>Fees</Subtitle>

      <Fees
        address={token.collectionAddr}
        countListingFee={false}
        salePrice={highestOffer}
        showProceeds
        mb="48px"
      />

      <LargeButton
        width="100%"
        btnContent="Accept Offer"
        handleClick={handleClick}
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
        onClick={closeModal}
        alignSelf="center"
      >
        Cancel
      </Text>
    </Flex>
  );
};
