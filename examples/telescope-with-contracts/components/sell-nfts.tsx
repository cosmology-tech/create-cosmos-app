import React, { useEffect, useState } from 'react';
import {
  Center,
  Flex,
  HStack,
  Link,
  Spinner,
  Text,
  useColorMode,
  useDisclosure,
  Icon,
} from '@chakra-ui/react';
import { MdVerified } from 'react-icons/md';
import { useChain } from '@cosmos-kit/react';
import { chainName, NAMES, OWNED_TOKENS, COLLECTIONS, coin } from '../config';
import { useLazyQuery } from '@apollo/client';
import { Collections, Tokens, Names, Token } from './types';
import { shortenAddress, getStargazeProfileLink } from '../utils';
import {
  TransferNftModal,
  BurnNftModal,
  NftSaleModal,
  NftDetailModal,
  UpdatePriceModal,
  RemoveListingModal,
  SimpleButton,
  NftCards,
  ProfileStat,
} from './ui';
import { getPrices } from '../api';
import { useColor } from 'hooks';

export const SellNfts = () => {
  const { address } = useChain(chainName);
  const [selectedToken, setSelectedToken] = useState<Token>();
  const [price, setPrice] = useState<number>();

  const [execNamesQuery, queryNamesResult] = useLazyQuery<Names>(NAMES);
  const [execOwnedTokensQuery, queryOwnedTokensResult] = useLazyQuery<Tokens>(
    OWNED_TOKENS,
    { notifyOnNetworkStatusChange: true }
  );
  const [execCollectionsQuery, queryCollectionsResult] =
    useLazyQuery<Collections>(COLLECTIONS, {
      notifyOnNetworkStatusChange: true,
    });

  const getStarsPrice = async () => {
    const geckoId = coin?.coingecko_id || 'stargaze';
    try {
      const res = await getPrices([geckoId]);
      setPrice(res.stargaze.usd);
    } catch (error) {
      console.error(error);
    }
  };

  const nftDetailModalControl = useDisclosure();
  const nftSaleModalControl = useDisclosure();
  const transferModalControl = useDisclosure();
  const burnModalControl = useDisclosure();
  const updatePriceModalControl = useDisclosure();
  const updatePriceModalRQControl = useDisclosure();
  const removeListingModalControl = useDisclosure();

  useEffect(() => {
    getStarsPrice();
  }, []);

  useEffect(() => {
    if (!address) return;
    execOwnedTokensQuery({
      variables: {
        ownerAddr: address,
        sortBy: 'PRICE_DESC',
        limit: 100,
      },
    });
    execNamesQuery({
      variables: {
        associatedAddr: address,
      },
    });
    execCollectionsQuery({
      variables: {
        tokenOwnerAddr: address,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  const updateData = () => {
    queryOwnedTokensResult.refetch();
    queryCollectionsResult.refetch();
  };

  const update = () => {
    updateData();
    nftDetailModalControl.onClose();
  };

  const isLoading =
    queryNamesResult.loading ||
    queryCollectionsResult.loading ||
    queryOwnedTokensResult.loading;

  const names = queryNamesResult.data?.names.names;

  const name =
    names && names?.length > 0
      ? names[0].name + '.stars'
      : shortenAddress(address);

  const isNameVerified = names?.[0]?.records.some((record) => record.verified);

  const profileStats = [
    {
      name: 'Collections',
      value: queryCollectionsResult.data?.collections.total || 0,
    },
    { name: 'NFTs', value: queryOwnedTokensResult.data?.tokens.total || 0 },
    {
      name: 'Listed on marketplace',
      value:
        queryOwnedTokensResult.data?.tokens.tokens.filter(
          (token) => token.forSale
        ).length || 0,
    },
  ];

  const selectedCollection =
    queryCollectionsResult.data?.collections.collections.find(
      (colletion) => colletion.collectionAddr === selectedToken?.collectionAddr
    );

  const { colorMode } = useColorMode();
  const { textColor, borderColor, bgColor } = useColor();

  return (
    <Flex
      w="792px"
      border={`1px solid ${borderColor}`}
      boxShadow={`0px 15px 35px ${
        colorMode === 'light' ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.8)'
      }`}
      borderRadius="12px"
      px="24px"
      pt="18px"
      pb="75px"
      mb="60px"
      mx="auto"
      minH="400px"
      flexDir="column"
      bg={bgColor}
    >
      <Text
        fontWeight="600"
        fontSize="20px"
        lineHeight="shorter"
        color={textColor.primary}
        mb="32px"
      >
        Profile
      </Text>

      {!address ? (
        <Center h="100%" flex="1">
          <Text fontWeight="600" fontSize="20px" color={textColor.secondary}>
            Please connect the wallet
          </Text>
        </Center>
      ) : (
        <Flex minH="300px" flexDir="column">
          <Flex justifyContent="space-between" mb="16px">
            <HStack spacing="6px">
              <Text
                fontWeight="600"
                fontSize="26px"
                lineHeight="shorter"
                color={textColor.primary}
              >
                {name}
              </Text>
              {isNameVerified && <Icon as={MdVerified} boxSize={6} />}
            </HStack>

            <SimpleButton
              content={
                <Link
                  href={getStargazeProfileLink(address)}
                  isExternal
                  _hover={{
                    textDecor: 'unset',
                  }}
                >
                  View on Stargaze
                </Link>
              }
            />
          </Flex>

          <HStack spacing="24px" mb="30px">
            {profileStats.map((item) => (
              <ProfileStat
                name={item.name}
                value={item.value}
                key={item.name}
              />
            ))}
          </HStack>

          {isLoading ? (
            <Center h="100%" flex="1">
              <Spinner
                color={textColor.primary}
                emptyColor={bgColor.tertiary}
                size="lg"
                speed="0.4s"
              />
            </Center>
          ) : queryOwnedTokensResult.data &&
            queryOwnedTokensResult.data?.tokens.total > 0 ? (
            <NftCards
              allNfts={queryOwnedTokensResult.data}
              handleCardClick={(token: Token) => {
                nftDetailModalControl.onOpen();
                setSelectedToken(token);
              }}
            />
          ) : (
            <Center h="100%" flex="1">
              <Text
                fontWeight="600"
                fontSize="20px"
                color={textColor.secondary}
              >
                No NFTs found
              </Text>
            </Center>
          )}
        </Flex>
      )}

      {selectedToken && selectedCollection && (
        <NftDetailModal
          token={selectedToken}
          ownerName={name}
          collection={selectedCollection}
          modalControl={nftDetailModalControl}
          openModals={{
            burn: burnModalControl.onOpen,
            list: nftSaleModalControl.onOpen,
            transferNft: transferModalControl.onOpen,
            removeListing: removeListingModalControl.onOpen,
            updatePrice: updatePriceModalControl.onOpen,
            updatePriceRQ: updatePriceModalRQControl.onOpen,
          }}
        />
      )}

      {selectedToken && selectedCollection && price && (
        <NftSaleModal
          modalControl={nftSaleModalControl}
          token={selectedToken}
          update={update}
          collection={selectedCollection}
          price={price}
        />
      )}

      {selectedToken && (
        <TransferNftModal
          token={selectedToken}
          modalControl={transferModalControl}
          update={update}
        />
      )}

      {selectedToken && (
        <BurnNftModal
          token={selectedToken}
          update={update}
          modalControl={burnModalControl}
        />
      )}

      {selectedToken && selectedCollection && price && (
        <UpdatePriceModal
          modalControl={updatePriceModalControl}
          collection={selectedCollection}
          update={update}
          token={selectedToken}
          price={price}
          isRQ={false}
        />
      )}

      {selectedToken && selectedCollection && price && (
        <UpdatePriceModal
          modalControl={updatePriceModalRQControl}
          collection={selectedCollection}
          update={update}
          token={selectedToken}
          price={price}
          isRQ={true}
        />
      )}

      {selectedToken && (
        <RemoveListingModal
          modalControl={removeListingModalControl}
          token={selectedToken}
          update={update}
        />
      )}
    </Flex>
  );
};
