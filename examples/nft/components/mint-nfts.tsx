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
import React, { useEffect, useRef, useState } from 'react';
import { HiOutlineClock } from 'react-icons/hi';
import { LargeButton } from 'components/base';
import { contracts, stargaze } from 'stargazejs';
import { useChain } from '@cosmos-kit/react';
import {
  chainName,
  coin,
  COLLECTION,
  COLLECTIONS_MINT,
  exponent,
} from 'config';
import { getPrices } from 'api';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {
  CollectionMint,
  CollectionsMint,
  ContractsAddress,
  Minter,
  SG721,
  Whitelist,
} from './types';
import { useQuery, useLazyQuery } from '@apollo/client';
import { getHttpUrl, toDisplayAmount } from 'utils';
import { Hero } from './mint/hero';
import { useTx } from 'hooks';

dayjs.extend(relativeTime);

type TData = {
  balanceAmount: string;
  starsPrice: number;
  collectionInfo: {
    minter: Minter;
    sg721: SG721;
    whitelist?: Whitelist;
  };
};

export const MintNfts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMinting, setIsMinting] = useState(false);
  const [data, setData] = useState<Partial<TData>>({});
  const [contractsAddress, setContractsAddress] = useState<ContractsAddress>();
  const [inputAmount, setInputAmount] = useState('1');
  const {
    address,
    getRpcEndpoint,
    getCosmWasmClient,
    getSigningCosmWasmClient,
  } = useChain(chainName);
  const { tx } = useTx();
  const collectionsQuery = useQuery<CollectionsMint>(COLLECTIONS_MINT, {
    variables: {
      limit: 100,
      sortBy: 'VOLUME_24H_DESC',
    },
  });

  const [getCollectionImage, collectionQuery] =
    useLazyQuery<CollectionMint>(COLLECTION);

  const mintBoxRef = useRef<HTMLDivElement>(null);

  const getBalance = async () => {
    if (!address) return;

    try {
      let rpcEndpoint = await getRpcEndpoint();

      if (!rpcEndpoint) {
        console.log('no rpc endpoint — using a fallback');
        rpcEndpoint = `https://rpc.cosmos.directory/${chainName}`;
      }

      const client = await stargaze.ClientFactory.createRPCQueryClient({
        rpcEndpoint:
          typeof rpcEndpoint === 'string' ? rpcEndpoint : rpcEndpoint.url,
      });

      const { balance } = await client.cosmos.bank.v1beta1.balance({
        address,
        denom: coin.base,
      });

      const balanceAmount = toDisplayAmount(balance!.amount, exponent);

      setData((prev) => ({ ...prev, balanceAmount }));
    } catch (error) {
      console.error(error);
    }
  };

  const getStarsPrice = async () => {
    const geckoId = coin?.coingecko_id || 'stargaze';
    try {
      const res = await getPrices([geckoId]);
      setData((prev) => ({ ...prev, starsPrice: res.stargaze.usd }));
    } catch (error) {
      console.error(error);
    }
  };

  const getCollectionInfo = async () => {
    if (!address || !contractsAddress) return;

    getCollectionImage({
      variables: {
        collectionAddr: contractsAddress.sg721,
      },
    });

    try {
      const cosmWasmClient = await getCosmWasmClient();

      // *MINTER QUERY*
      const { VendingMinterQueryClient } = contracts.VendingMinter;
      const minterQueryClient = new VendingMinterQueryClient(
        cosmWasmClient,
        contractsAddress.minter
      );
      const [minterInfo, mintPrice, mintableNumTokens, mintCount] =
        await Promise.all([
          minterQueryClient.config(),
          minterQueryClient.mintPrice(),
          minterQueryClient.mintableNumTokens(),
          minterQueryClient.mintCount({ address }),
        ]);
      const minter: Minter = {
        ...minterInfo,
        all_prices: mintPrice,
        user_minted: mintCount.count,
        remaining_tokens: mintableNumTokens.count,
      };

      // *WHITELIST QUERY*
      let whitelist: Whitelist;
      if (minterInfo.whitelist) {
        const whitelistContractAddress = minterInfo.whitelist || '';
        const { WhitelistQueryClient } = contracts.Whitelist;
        const whitelistQueryClient = new WhitelistQueryClient(
          cosmWasmClient,
          whitelistContractAddress
        );
        whitelist = await whitelistQueryClient.config();
      }

      // *SG721 QUERY*
      const { SG721BaseQueryClient } = contracts.SG721Base;
      const sg721QueryClient = new SG721BaseQueryClient(
        cosmWasmClient,
        contractsAddress.sg721
      );
      const [collectionInfo, contractInfo] = await Promise.all([
        sg721QueryClient.collectionInfo(),
        sg721QueryClient.contractInfo(),
      ]);
      const sg721: SG721 = { ...collectionInfo, ...contractInfo };

      setData((prev) => ({
        ...prev,
        collectionInfo: { minter, sg721, whitelist },
      }));
    } catch (error) {
      console.error(error);
    }
  };

  const getData = async () => {
    setIsLoading(true);
    await Promise.all([getBalance(), getStarsPrice(), getCollectionInfo()]);
    setIsLoading(false);
  };

  const getMinterContractAddr = async () => {
    if (!collectionsQuery.data || contractsAddress) return;

    const sortedCollections = [
      ...collectionsQuery.data.collections.collections,
    ].sort((a, b) => a.floorPrice - b.floorPrice);

    const signingCosmWasmClient = await getSigningCosmWasmClient();
    const { SG721BaseQueryClient } = contracts.SG721Base;
    const { VendingMinterQueryClient } = contracts.VendingMinter;

    for (const collection of sortedCollections) {
      const sg721QueryClient = new SG721BaseQueryClient(
        signingCosmWasmClient,
        collection.collectionAddr
      );

      try {
        const { minter: minterAddr } = await sg721QueryClient.minter();

        const minterQueryClient = new VendingMinterQueryClient(
          signingCosmWasmClient,
          minterAddr
        );

        const [{ current_price: price }, { count: remainingTokens }] =
          await Promise.all([
            minterQueryClient.mintPrice(),
            minterQueryClient.mintableNumTokens(),
          ]);

        const isLowPrice = new BigNumber(price.amount)
          .shiftedBy(-exponent)
          .lte(80);

        if (remainingTokens && isLowPrice) {
          setContractsAddress({
            minter: minterAddr,
            sg721: collection.collectionAddr,
          });
          break;
        }
      } catch (error) {
        console.log(error);
        continue;
      }
    }
  };

  useEffect(() => {
    if (!address) {
      setIsLoading(true);
      return;
    }
    if (collectionsQuery.data) getMinterContractAddr();
    if (contractsAddress) getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address, contractsAddress, collectionsQuery.data]);

  const handleClick = async () => {
    if (!address || !contractsAddress) return;
    setIsMinting(true);

    const { VendingMinterMessageComposer } = contracts.VendingMinter;
    const { mint } = new VendingMinterMessageComposer(
      address,
      contractsAddress.minter
    );

    const price = data.collectionInfo?.minter.all_prices.current_price;

    if (!price) {
      console.error('no mint price found');
      return;
    }

    const msgs = Array(Number(inputAmount)).fill(mint([price]));

    await tx(
      msgs,
      {
        gas: new BigNumber('450000').multipliedBy(inputAmount).toString(),
        toast: { title: 'Mint Successful' },
      },
      () => {
        setInputAmount('1');
        getData();
      }
    );

    setIsMinting(false);
  };

  const isWhitelistActive = !!data.collectionInfo?.whitelist?.is_active;

  const priceRawAmount =
    data.collectionInfo?.minter.all_prices.current_price.amount || '0';
  const priceDisplayAmount = toDisplayAmount(priceRawAmount, exponent);

  const maxTokens = isWhitelistActive
    ? data.collectionInfo!.whitelist!.per_address_limit
    : data.collectionInfo?.minter.per_address_limit;

  const inputDollarValue = new BigNumber(inputAmount || 0)
    .multipliedBy(priceDisplayAmount)
    .multipliedBy(data?.starsPrice || 0)
    .decimalPlaces(2)
    .toString();

  const isSoldOut = !data.collectionInfo?.minter.remaining_tokens;

  const tagText = isWhitelistActive
    ? 'WHITELIST MINT LIVE'
    : !isSoldOut
    ? 'NOW LIVE'
    : 'SOLD OUT';

  const timeLeft =
    isWhitelistActive &&
    dayjs().to(
      dayjs.unix(Number(data.collectionInfo!.whitelist!.end_time.slice(0, 10))),
      true
    );

  const totalTokens = data.collectionInfo?.minter.num_tokens || 0;

  const collectionStats = [
    { type: 'Quantity', value: totalTokens.toLocaleString() },
    {
      type: 'Royalties',
      value:
        new BigNumber(data.collectionInfo?.sg721.royalty_info?.share || 0)
          .shiftedBy(2)
          .toString() + '%',
    },
    {
      type: 'Minted',
      value:
        new BigNumber(totalTokens)
          .minus(data.collectionInfo?.minter.remaining_tokens || 0)
          .div(totalTokens || 1)
          .multipliedBy(100)
          .decimalPlaces(0, BigNumber.ROUND_DOWN)
          .toString() + '%',
    },
  ];

  const starsNeeded = new BigNumber(inputAmount || 0).multipliedBy(
    priceDisplayAmount
  );

  const isAffordable = starsNeeded.lte(data.balanceAmount || 0);
  const isAmountEmpty = new BigNumber(inputAmount || 0).isEqualTo(0);
  const btnText = isAffordable ? 'Mint' : 'Insufficient Balance';

  const imageUrl = collectionQuery.data?.collection?.image?.startsWith('https')
    ? collectionQuery.data?.collection.image
    : getHttpUrl(data.collectionInfo?.sg721.image);

  const titleColor = useColorModeValue('#697584', '#A7B4C2');
  const statColor = useColorModeValue('#2C3137', '#EEF2F8');
  const bgColor = useColorModeValue('#EEF2F8', '#1D2024');
  const borderColor = useColorModeValue('#D1D6DD', '#434B55');
  const lightBorderColor = useColorModeValue('#FFF', '#434B55');
  const symbolColor = useColorModeValue('#2C3137', '#A7B4C2');
  const tagTextColor = useColorModeValue('#FFF', '#1D2024');

  if (collectionsQuery.error) {
    return <pre>{collectionsQuery.error.message}</pre>;
  }

  return (
    <>
      {contractsAddress?.sg721 && data.collectionInfo?.sg721 && (
        <Hero
          collectionAddr={contractsAddress?.sg721}
          collectionInfo={data.collectionInfo?.sg721}
          mintBoxRef={mintBoxRef}
        />
      )}
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
        ) : isLoading || collectionsQuery.loading ? (
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
                    <Text fontWeight="600">{data?.balanceAmount} STARS</Text>
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
                      if (!maxTokens || !data.collectionInfo?.minter) return;
                      const mintQuotaLeft =
                        maxTokens - data.collectionInfo?.minter.user_minted;
                      const maxAmount = Math.min(
                        mintQuotaLeft,
                        data.collectionInfo?.minter.remaining_tokens
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
                              .multipliedBy(priceDisplayAmount)
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
                  {data.collectionInfo?.sg721.name}
                </Text>
                <Text
                  w="85%"
                  fontWeight="400"
                  fontSize="14px"
                  lineHeight="20px"
                  color={titleColor}
                >
                  {(data.collectionInfo?.sg721.description.length || 0) > 200
                    ? data.collectionInfo?.sg721.description.slice(0, 200) +
                      '...'
                    : data.collectionInfo?.sg721.description}
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
                    <Text fontWeight="600">{priceDisplayAmount} STARS</Text>
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
