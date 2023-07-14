import { GridItem, Flex, Text, Image, Grid } from '@chakra-ui/react';
import { exponent } from 'config';
import { useColor } from 'hooks';
import { getHttpUrl, isGtZero, toDisplayAmount } from 'utils';
import { Token, Tokens } from '../../types';
import { StarsIcon } from './stars-icon';

interface INftCard {
  handleCardClick: (token: Token) => void;
  token: Token;
}

const NftCard: React.FC<INftCard> = ({ token, handleCardClick }) => {
  const { textColor } = useColor();
  return (
    <GridItem cursor="pointer" onClick={() => handleCardClick(token)}>
      <Image
        mb="12px"
        alt={token.name}
        boxSize="232px"
        borderRadius="6px"
        src={getHttpUrl(token.imageUrl)}
      />
      <Text
        fontWeight="600"
        fontSize="14px"
        color={textColor.primary}
        mb="8px"
        lineHeight="shorter"
      >
        {token.name}
      </Text>
      {isGtZero(token.highestCollectionBid) && (
        <SplitText
          left="Highest offer"
          right={`${toDisplayAmount(
            token.highestCollectionBid,
            exponent
          )} STARS`}
          withIcon
          mb="8px"
        />
      )}
      {token.forSale && token.price && (
        <SplitText
          left="List Price"
          right={`${toDisplayAmount(token.price.amount, exponent)} STARS`}
          withIcon
        />
      )}
    </GridItem>
  );
};

export const SplitText = ({
  left,
  right,
  withIcon,
  size = 'sm',
  rightClickable = false,
  onRightClick,
  mb,
}: {
  left: string;
  right: string;
  size?: 'sm' | 'md' | 'lg';
  withIcon?: boolean;
  rightClickable?: boolean;
  onRightClick?: () => void;
  mb?: string;
}) => {
  const { textColor } = useColor();

  const fontSizes = {
    sm: 12,
    md: 14,
    lg: 16,
  };

  return (
    <Flex alignItems="center" lineHeight="16px" mb={mb}>
      <Text
        fontWeight="400"
        fontSize={fontSizes[size] + 'px'}
        color={textColor.secondary}
        textAlign="left"
      >
        {left}&nbsp;
      </Text>
      <Text
        fontWeight="600"
        fontSize={fontSizes[size] + 'px'}
        color={textColor.primary}
        cursor={rightClickable ? 'pointer' : 'inherit'}
        onClick={onRightClick}
      >
        {right}
      </Text>
      {withIcon && (
        <StarsIcon
          ml="6px"
          yOffset="-1px"
          boxSize={fontSizes[size] + 4 + 'px'}
        />
      )}
    </Flex>
  );
};

export const NftCards = ({
  allNfts,
  handleCardClick,
}: {
  allNfts: Tokens;
  handleCardClick: (token: Token) => void;
}) => {
  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      justifyContent="space-between"
      gridGap="24px"
    >
      {allNfts.tokens.tokens.map((token) => (
        <NftCard
          key={token.id}
          token={token}
          handleCardClick={handleCardClick}
        />
      ))}
    </Grid>
  );
};
