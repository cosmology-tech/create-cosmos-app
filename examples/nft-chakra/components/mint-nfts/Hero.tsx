import React, { useMemo } from 'react';
import { Box, Flex, useColorModeValue, Text, Image } from '@chakra-ui/react';

import { useTokens } from '@/hooks';
import { getHttpUrl } from '@/utils';
import { LargeButton, type SG721 } from '@/components';

export const Hero = ({
  collectionInfo,
  mintBoxRef,
}: {
  collectionInfo: SG721 | undefined;
  mintBoxRef: React.RefObject<HTMLDivElement>;
}) => {
  const { tokens } = useTokens();

  const statColor = useColorModeValue('#2C3137', '#EEF2F8');
  const titleColor = useColorModeValue('#697584', '#A7B4C2');

  const images = useMemo(() => {
    if (!tokens) return [];
    return [
      {
        url: tokens[0].imageUrl!,
        cssProperties: { top: '40px' },
      },
      {
        url: tokens[1].imageUrl!,
        cssProperties: { left: '160px', top: '-55px', zIndex: '40' },
      },
      {
        url: tokens[2].imageUrl!,
        cssProperties: { right: '0', top: '80px', zIndex: '30' },
      },
      {
        url: tokens[3].imageUrl!,
        cssProperties: { bottom: '-55px', left: '130px', zIndex: '20' },
      },
    ];
  }, [tokens]);

  const handleClick = () => {
    mintBoxRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  if (!collectionInfo) return <></>;

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
