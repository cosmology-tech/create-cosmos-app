import { Text, Flex, Select, Input } from '@chakra-ui/react';
import { useChain } from '@cosmos-kit/react';
import BigNumber from 'bignumber.js';
import React, { useState } from 'react';
import {
  coin,
  exponent,
  defaultChainName,
  marketplaceContract,
  type Token,
  type Collection,
} from '@/config';
import { useColor, useContracts, useTx } from '@/hooks';
import {
  getExpirationTime,
  getStarsCoin,
  isAddressValid,
  isGtZero,
  toDisplayAmount,
} from '@/utils';
import { AmountInput } from './AmountInput';
import { LargeButton } from '@/components';
import { Fees } from './Fees';
import { SplitText } from './NftCards';
import { SaleType } from './modals';

export const ListTab = ({
  closeModal,
  inputTitle,
  saleType,
  token,
  collection,
  update,
}: {
  closeModal: () => void;
  inputTitle: string;
  saleType: SaleType;
  token: Token;
  collection: Collection;
  update: () => void;
}) => {
  const [period, setPeriod] = useState('30');
  const [inputValue, setInputValue] = useState('');
  const [reserveAddr, setReserveAddr] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { tx } = useTx();
  const { address } = useChain(defaultChainName);
  const { contracts, isReady } = useContracts();

  const symbol = coin.symbol;
  const floorPrice = collection.floorPrice?.toString();
  const highestOffer = toDisplayAmount(token.highestCollectionBid, exponent);
  const isAuctionTab = saleType === SaleType.AUCTION;

  const handleClick = async () => {
    if (!address || !isReady) return;
    setIsLoading(true);

    const marketplaceMsgComposer =
      contracts.marketplace.getMessageComposer(marketplaceContract);
    const sg721UpdatableMsgComposer =
      contracts.sg721Updatable.getMessageComposer(token.collectionAddr);

    const expirationTime = getExpirationTime(period);

    const msgs = [
      sg721UpdatableMsgComposer.approve({
        spender: marketplaceContract,
        tokenId: token.tokenId,
        expires: { at_time: expirationTime },
      }),
      marketplaceMsgComposer.setAsk(
        {
          saleType,
          collection: token.collectionAddr,
          expires: expirationTime,
          price: getStarsCoin(inputValue),
          tokenId: parseInt(token.tokenId),
          fundsRecipient: address,
          reserveFor: isAddressValid(reserveAddr) ? reserveAddr : undefined,
        },
        [getStarsCoin('0.5')]
      ),
    ];

    await tx(
      msgs,
      {
        gas: '666666',
        toast: {
          title: 'Item Listed',
          message: `Your item has been listed for ${inputValue} STARS`,
        },
      },
      () => {
        closeModal();
        update();
      }
    );

    setIsLoading(false);
  };

  const { textColor, bgColor, borderColor } = useColor();

  return (
    <Flex flexDir="column" alignItems="flex-start" pt="22px">
      <Text
        fontWeight="600"
        fontSize="18px"
        lineHeight="22px"
        color={textColor.secondary}
        mb="12px"
      >
        {inputTitle}
      </Text>

      <AmountInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        mb="22px"
      />

      <Flex mb="24px" justifyContent="space-between" w="100%">
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

      <Subtitle>Valid for</Subtitle>

      <Select
        h="40px"
        background={bgColor.tertiary}
        border={`1px solid ${borderColor.secondary}`}
        borderRadius="6px"
        fontWeight="600"
        fontSize="14px"
        color={textColor.primary}
        mb="16px"
        onChange={(e) => setPeriod(e.target.value)}
        value={period}
      >
        <option value="1">1 day</option>
        <option value="3">3 days</option>
        <option value="7">7 days</option>
        <option value="14">14 days</option>
        <option value="30">30 days</option>
        <option value="90">90 days</option>
      </Select>

      {!isAuctionTab && (
        <>
          <Subtitle>Reserve Address (optional)</Subtitle>
          <Input
            h="40px"
            w="100%"
            mb="20px"
            bgColor={bgColor.tertiary}
            border={`1px solid ${borderColor.secondary}`}
            borderRadius="6px"
            fontWeight="600"
            fontSize="14px"
            placeholder="Enter address"
            _placeholder={{
              fontWeight: 400,
              color: textColor.secondary,
            }}
            value={reserveAddr}
            onChange={(e) => setReserveAddr(e.target.value)}
            color={textColor.primary}
          />
        </>
      )}

      <Subtitle mb="16px">Fees</Subtitle>

      <Fees
        salePrice={inputValue}
        address={token.collectionAddr}
        showProceeds={!isAuctionTab}
        showListingFee
      />

      <LargeButton
        width="100%"
        btnContent="List"
        handleClick={handleClick}
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
  );
};

export const Subtitle = ({
  children,
  mb = '12px',
}: {
  children: string;
  mb?: string;
}) => {
  const { textColor } = useColor();
  return (
    <Text
      fontWeight="600"
      fontSize="14px"
      lineHeight="16px"
      color={textColor.secondary}
      mb={mb}
    >
      {children}
    </Text>
  );
};
