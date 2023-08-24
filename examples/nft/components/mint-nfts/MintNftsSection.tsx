import {
  Box,
  Center,
  Flex,
  Icon,
  Image,
  NumberInput,
  NumberInputField,
  Spinner,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import BigNumber from 'bignumber.js';
import React, { useRef, useState } from 'react';
import { HiOutlineClock } from 'react-icons/hi';
import { useChain } from '@cosmos-kit/react';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';

import { Hero } from './Hero';
import { LargeButton } from '@/components';
import { defaultChainName, exponent } from '@/config';
import { getHttpUrl, toDisplayAmount } from '@/utils';
import {
  useTx,
  useStarsBalance,
  useCollection,
  useStarsPrice,
  useContracts,
} from '@/hooks';

dayjs.extend(relativeTime);

export const MintNftsSection = () => {
  const [isMinting, setIsMinting] = useState(false);
  const [inputAmount, setInputAmount] = useState('1');

  const { contracts, isReady } = useContracts();
  const { starsPrice, isFetchingPrice } = useStarsPrice();
  const { starsBalance, isFetchingBalance, refetchBalance } = useStarsBalance();
  const { collection, isFetchingCollection, refetchCollection } =
    useCollection();

  const { tx } = useTx();
  const { address } = useChain(defaultChainName);
  const mintBoxRef = useRef<HTMLDivElement>(null);

  const handleClick = async () => {
    const minterAddr = collection?.address.minterAddr;
    if (!address || !isReady || !minterAddr) return;

    setIsMinting(true);

    const { mint } = contracts.vendingMinter.getMessageComposer(minterAddr);
    const mintPrice = collection?.minter.current_price;

    if (!mintPrice) {
      console.error('no mint price found');
      setIsMinting(false);
      return;
    }

    const msgs = Array(Number(inputAmount)).fill(mint([mintPrice]));

    await tx(
      msgs,
      {
        gas: new BigNumber('450000').multipliedBy(inputAmount).toString(),
        toast: { title: 'Mint Successful' },
      },
      () => {
        setInputAmount('1');
        refetchBalance();
        refetchCollection();
      }
    );

    setIsMinting(false);
  };

  const isWhitelistActive = !!collection?.whitelist?.is_active;

  const mintPriceRaw = collection?.minter.current_price.amount || '0';
  const mintPriceDisplay = toDisplayAmount(mintPriceRaw, exponent);

  const maxTokens = isWhitelistActive
    ? collection!.whitelist!.per_address_limit
    : collection?.minter.per_address_limit;

  const inputDollarValue = new BigNumber(inputAmount || 0)
    .multipliedBy(mintPriceDisplay)
    .multipliedBy(starsPrice || 0)
    .decimalPlaces(2)
    .toString();

  const isSoldOut = !collection?.minter.remaining_tokens;

  const tagText = isWhitelistActive
    ? 'WHITELIST MINT LIVE'
    : !isSoldOut
    ? 'NOW LIVE'
    : 'SOLD OUT';

  const timeLeft =
    isWhitelistActive &&
    dayjs().to(
      dayjs.unix(Number(collection!.whitelist!.end_time.slice(0, 10))),
      true
    );

  const totalTokens = collection?.minter.num_tokens || 0;

  const collectionStats = [
    { type: 'Quantity', value: totalTokens.toLocaleString() },
    {
      type: 'Royalties',
      value:
        new BigNumber(collection?.sg721.royalty_info?.share || 0)
          .shiftedBy(2)
          .toString() + '%',
    },
    {
      type: 'Minted',
      value:
        new BigNumber(totalTokens)
          .minus(collection?.minter.remaining_tokens || 0)
          .div(totalTokens || 1)
          .multipliedBy(100)
          .decimalPlaces(0, BigNumber.ROUND_DOWN)
          .toString() + '%',
    },
  ];

  const starsNeeded = new BigNumber(inputAmount || 0).multipliedBy(
    mintPriceDisplay
  );

  const isAffordable = starsNeeded.lte(starsBalance || 0);
  const isAmountEmpty = new BigNumber(inputAmount || 0).isEqualTo(0);
  const btnText = isAffordable ? 'Mint' : 'Insufficient Balance';

  const imageUrl = collection?.image?.startsWith('http')
    ? collection.image
    : getHttpUrl(collection?.sg721.image);

  const titleColor = useColorModeValue('#697584', '#A7B4C2');
  const statColor = useColorModeValue('#2C3137', '#EEF2F8');
  const bgColor = useColorModeValue('#EEF2F8', '#1D2024');
  const borderColor = useColorModeValue('#D1D6DD', '#434B55');
  const lightBorderColor = useColorModeValue('#FFF', '#434B55');
  const symbolColor = useColorModeValue('#2C3137', '#A7B4C2');
  const tagTextColor = useColorModeValue('#FFF', '#1D2024');

  const isLoading =
    isFetchingPrice || isFetchingCollection || isFetchingBalance;

  return (
    <>
      <Hero collectionInfo={collection?.sg721} mintBoxRef={mintBoxRef} />
      <Flex
        w="816px"
        minH="595px"
        border="1px solid"
        borderColor={lightBorderColor}
        boxShadow="0px 15px 35px rgba(0, 0, 0, 0.2)"
        borderRadius="12px"
        flexDir="column"
        p="22px"
        mb="60px"
        mx="auto"
        ref={mintBoxRef}
      >
        <Text
          fontWeight="600"
          fontSize="20px"
          color={statColor}
          mb="30px"
          lineHeight="shorter"
        >
          NFT Mint
        </Text>

        {!address ? (
          <Center h="100%" flex="1 1 100%">
            <Text fontWeight="600" fontSize="20px" color={titleColor}>
              Please connect the wallet
            </Text>
          </Center>
        ) : isLoading ? (
          <Center h="100%" flex="1 1 100%">
            <Spinner
              color={statColor}
              emptyColor={bgColor}
              size="lg"
              speed="0.4s"
            />
          </Center>
        ) : (
          <Flex gap="24px" flex="1 1 100%">
            <Flex w="100%" flexDir="column" justifyContent="space-between">
              <Image w="100%" alt="nft" borderRadius="6px" src={imageUrl} />
              <Box mt="10px">
                <Flex
                  mb="12px"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Text
                    fontWeight="600"
                    fontSize="18px"
                    color={titleColor}
                    lineHeight="18px"
                  >
                    Select amount
                  </Text>
                  <Flex fontSize="14px" color={titleColor} lineHeight="16px">
                    Available&nbsp;
                    <Text fontWeight="600">{starsBalance} STARS</Text>
                  </Flex>
                </Flex>

                <Flex position="relative">
                  <NumberInput
                    h="68px"
                    flex="1"
                    w="100%"
                    bgColor={bgColor}
                    border={`1px solid ${borderColor}`}
                    borderRadius="6px"
                    value={inputAmount}
                    step={1}
                    precision={0}
                    onChange={(val) => {
                      if (!maxTokens || !collection?.minter) return;
                      const mintQuotaLeft =
                        maxTokens - collection?.minter.user_minted;
                      const maxAmount = Math.min(
                        mintQuotaLeft,
                        collection?.minter.remaining_tokens
                      );
                      if (new BigNumber(val).gt(maxAmount)) {
                        setInputAmount(maxAmount.toString());
                        return;
                      }
                      setInputAmount(
                        val && !isNaN(Number(val))
                          ? new BigNumber(val).decimalPlaces(0).toString()
                          : ''
                      );
                    }}
                  >
                    <NumberInputField
                      border="none"
                      h="100%"
                      pl="18px"
                      pr="120px"
                      fontWeight="semibold"
                      fontSize="18px"
                      color={statColor}
                      disabled={isLoading}
                    />
                  </NumberInput>

                  <Center h="68px" position="absolute" right="21px" bottom={0}>
                    <Flex alignItems="center">
                      <Image
                        alt="stars"
                        src="https://wallet.keplr.app/_next/image?url=https%3A%2F%2Fraw.githubusercontent.com%2Fchainapsis%2Fkeplr-chain-registry%2Fmain%2Fimages%2Fstargaze%2Fchain.png&w=64&q=75"
                        boxSize="28px"
                        border="none"
                        borderRadius="full"
                        mr="6px"
                      />
                      <Text
                        fontWeight="semibold"
                        lineHeight="shorter"
                        fontSize="14px"
                        color={symbolColor}
                        mr="8px"
                      >
                        {new BigNumber(inputAmount).gt(0) && (
                          <Text as="span">
                            {new BigNumber(inputAmount)
                              .multipliedBy(mintPriceDisplay)
                              .toString()}
                          </Text>
                        )}{' '}
                        STARS
                      </Text>
                      {new BigNumber(inputDollarValue).gt(0) && (
                        <Text fontSize="12px" color={titleColor}>
                          {new BigNumber(inputDollarValue || 0).lt(0.01)
                            ? '< $0.01'
                            : `≈ $${inputDollarValue}`}
                        </Text>
                      )}
                    </Flex>
                  </Center>
                </Flex>
              </Box>
            </Flex>
            <Flex w="100%" flexDir="column" justifyContent="space-between">
              <Box>
                <Center
                  px="9px"
                  h="20px"
                  w="max-content"
                  background={statColor}
                  borderRadius="full"
                  mb="10px"
                >
                  <Text fontWeight="600" fontSize="12px" color={tagTextColor}>
                    {tagText}
                  </Text>
                </Center>
                <Text
                  fontWeight="600"
                  fontSize="26px"
                  color={statColor}
                  lineHeight="shorter"
                  w="80%"
                  mb="6px"
                >
                  {collection?.sg721.name}
                </Text>
                <Text
                  w="85%"
                  fontWeight="400"
                  fontSize="14px"
                  lineHeight="20px"
                  color={titleColor}
                >
                  {(collection?.sg721.description.length || 0) > 200
                    ? collection?.sg721.description.slice(0, 200) + '...'
                    : collection?.sg721.description}
                </Text>
                <Flex justifyContent="space-between" mt="22px">
                  {collectionStats.map(({ type, value }) => {
                    return (
                      <Box key={type} flex="1">
                        <Text
                          fontWeight="600"
                          fontSize="14px"
                          color={titleColor}
                          lineHeight="shorter"
                          mb="3px"
                        >
                          {type}
                        </Text>
                        <Text
                          fontWeight="600"
                          lineHeight="shorter"
                          fontSize="26px"
                          color={statColor}
                        >
                          {value}
                        </Text>
                      </Box>
                    );
                  })}
                </Flex>

                {isWhitelistActive && (
                  <Flex
                    h="40px"
                    bg={bgColor}
                    borderRadius="6px"
                    p="12px"
                    alignItems="center"
                    mt="22px"
                  >
                    <Icon as={HiOutlineClock} w="20px" h="20px" mr="12px" />
                    <Text
                      fontWeight="400"
                      fontSize="14px"
                      color={statColor}
                      lineHeight="shorter"
                    >
                      Whitelist Mint:&nbsp;
                      <span style={{ fontWeight: 600 }}>{timeLeft} left</span>
                    </Text>
                  </Flex>
                )}
              </Box>
              <Box>
                <Flex justifyContent="space-between" mb="13px">
                  <Flex fontSize="14px" color={titleColor} lineHeight="16px">
                    Price:&nbsp;
                    <Text fontWeight="600">{mintPriceDisplay} STARS</Text>
                  </Flex>
                  <Text fontSize="14px" color={titleColor} lineHeight="16px">
                    Limited to {maxTokens} tokens
                  </Text>
                </Flex>
                <LargeButton
                  handleClick={handleClick}
                  isLoading={isMinting}
                  disabled={!isAffordable || isAmountEmpty || isSoldOut}
                  width="100%"
                  btnContent={btnText}
                />
              </Box>
            </Flex>
          </Flex>
        )}
      </Flex>
    </>
  );
};
