import { Flex, VStack, Text, Grid, GridItem } from '@chakra-ui/react';
import BigNumber from 'bignumber.js';
import { useColor } from 'hooks';
import { Trait } from '../../types';

export const TraitDisplay = ({ trait }: { trait: Trait }) => {
  const { textColor } = useColor();
  return (
    <Flex justifyContent="space-between" alignItems="center" pr="44px">
      <VStack alignItems="flex-start">
        <Text
          fontWeight="400"
          fontSize="12px"
          lineHeight="6px"
          color={textColor.secondary}
          mb="2px"
        >
          {trait.name}
        </Text>
        <Text
          fontWeight="600"
          fontSize="14px"
          lineHeight="8px"
          color={textColor.primary}
        >
          {trait.value}
        </Text>
      </VStack>
      <Text
        fontWeight="600"
        fontSize="20px"
        lineHeight="12px"
        color={textColor.primary}
      >
        {new BigNumber(trait.rarityPercent).decimalPlaces(2).toString()}&nbsp;
        <Text as="span" fontSize="14px" lineHeight="8px">
          %
        </Text>
      </Text>
    </Flex>
  );
};

export const NftTraits = ({ traits }: { traits: Trait[] }) => {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gridGap="24px">
      {traits.map((trait) => (
        <GridItem key={trait.name}>
          <TraitDisplay trait={trait} />
        </GridItem>
      ))}
    </Grid>
  );
};
