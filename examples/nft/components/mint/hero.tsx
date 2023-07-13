import { useQuery } from '@apollo/client';
import { Box, Flex, useColorModeValue, Text, Image } from '@chakra-ui/react';
import { LargeButton } from 'components/base';
import { SG721, TokensMint } from 'components/types';
import { TOKENS } from 'config';
import React, { useMemo } from 'react';
import { getHttpUrl } from 'utils';

export const Hero = ({
  collectionAddr,
  collectionInfo,
  mintBoxRef,
}: {
  collectionAddr: string;
  collectionInfo: SG721;
  mintBoxRef: React.RefObject<HTMLDivElement>;
}) => {
  const tokensQuery = useQuery<TokensMint>(TOKENS, {
    variables: { collectionAddr, limit: 10 },
  });

  const statColor = useColorModeValue('#2C3137', '#EEF2F8');
  const titleColor = useColorModeValue('#697584', '#A7B4C2');

  const images = useMemo(() => {
    const tokens = tokensQuery.data?.tokens.tokens;
    if (!tokens) return [];
    return [
      {
        url: tokens[0].imageUrl,
        cssProperties: { top: '40px' },
      },
      {
        url: tokens[1].imageUrl,
        cssProperties: { left: '160px', top: '-55px', zIndex: '40' },
      },
      {
        url: tokens[2].imageUrl,
        cssProperties: { right: '0', top: '80px', zIndex: '30' },
      },
      {
        url: tokens[3].imageUrl,
        cssProperties: { bottom: '-55px', left: '130px', zIndex: '20' },
      },
    ];
  }, [tokensQuery.data?.tokens.tokens]);

  const handleClick = () => {
    mintBoxRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <Flex w="100%" h="460px" mb="100px" py="85px" px="24px" gap="20px">
      <Flex flex="1 1 100%" flexDir="column">
        <Text
          fontWeight="600"
          fontSize="48px"
          color={statColor}
          lineHeight="shorter"
          w="80%"
          mb="18px"
        >
          {collectionInfo.name}
        </Text>
        <Text
          w="85%"
          fontWeight="400"
          fontSize="16px"
          lineHeight="shorter"
          color={titleColor}
        >
          {(collectionInfo.description.length || 0) > 200
            ? collectionInfo.description.slice(0, 200) + '...'
            : collectionInfo.description}
        </Text>
        <Box mt="auto">
          <LargeButton
            width="260px"
            btnContent="Mint Now"
            handleClick={handleClick}
          />
        </Box>
      </Flex>

      <Box position="relative" flex="1 1 100%">
        {images.map(({ url, cssProperties }) => {
          return (
            <Image
              {...cssProperties}
              key={url}
              position="absolute"
              alt=""
              boxSize="180px"
              borderRadius="6px"
              src={getHttpUrl(url)}
            />
          );
        })}
      </Box>
    </Flex>
  );
};
