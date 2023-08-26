import React, { useState } from 'react';
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

import { defaultChainName, Token } from '@/config';
import { shortenAddress, getStargazeProfileLink } from '@/utils';
import { useColor, useProfile } from '@/hooks';
import { SimpleButton } from '../common';
import {
  NftDetailModal,
  NftSaleModal,
  TransferNftModal,
  BurnNftModal,
  UpdatePriceModal,
  RemoveListingModal,
} from './modals';
import { NftCards } from './NftCards';
import { ProfileStat } from './ProfileStat';

export const SellNftsSection = () => {
  const [selectedToken, setSelectedToken] = useState<Token>();
  const { profile, isLoading, refetch } = useProfile();
  const { address } = useChain(defaultChainName);

  const nftDetailModalControl = useDisclosure();
  const nftSaleModalControl = useDisclosure();
  const transferModalControl = useDisclosure();
  const burnModalControl = useDisclosure();
  const updatePriceModalControl = useDisclosure();
  const removeListingModalControl = useDisclosure();

  const update = () => {
    refetch();
    nftDetailModalControl.onClose();
  };

  const names = profile?.names;

  const name =
    names && names?.length > 0
      ? names[0].name + '.stars'
      : shortenAddress(address);

  const isNameVerified = names?.[0]?.records?.some((record) => record.verified);

  const profileStats = [
    {
      name: 'Collections',
      value: profile?.collections.total || 0,
    },
    { name: 'NFTs', value: profile?.ownedTokens.total || 0 },
    {
      name: 'Listed on marketplace',
      value:
        profile?.ownedTokens.tokens.filter((token) => token.forSale).length ||
        0,
    },
  ];

  const selectedCollection = profile?.collections.collections.find(
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
          ) : profile?.ownedTokens && profile?.ownedTokens?.total > 0 ? (
            <NftCards
              allNfts={profile.ownedTokens.tokens}
              handleCardClick={(token) => {
                setSelectedToken(token);
                nftDetailModalControl.onOpen();
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
          }}
        />
      )}

      {selectedToken && selectedCollection && (
        <NftSaleModal
          modalControl={nftSaleModalControl}
          token={selectedToken}
          update={update}
          collection={selectedCollection}
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

      {selectedToken && selectedCollection && (
        <UpdatePriceModal
          modalControl={updatePriceModalControl}
          collection={selectedCollection}
          update={update}
          token={selectedToken}
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
