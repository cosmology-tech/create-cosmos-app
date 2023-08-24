import { useMemo } from 'react';
import { InfoOutlineIcon } from '@chakra-ui/icons';
import { SimpleGrid, Flex, Tooltip, Text, Skeleton } from '@chakra-ui/react';
import { useColor, useRoyaltyShare } from '@/hooks';
import { minus, multiply, sum } from '@/utils';

const FAIR_BURN_RATE = 0.02;
const LISTING_FEE = 0.5;

export const Fees = ({
  address,
  salePrice,
  mb = '22px',
  showProceeds = false,
  showListingFee = false,
  countListingFee = true,
}: {
  mb?: string;
  address: string;
  salePrice: string;
  showProceeds?: boolean;
  showListingFee?: boolean;
  countListingFee?: boolean;
}) => {
  const { royaltyShare, isLoading } = useRoyaltyShare(address);

  const listingFee = countListingFee ? LISTING_FEE : '0';

  const amountConfig = useMemo(() => {
    const priceAmount = salePrice ? salePrice : '0';
    const royalties = royaltyShare ? multiply(priceAmount, royaltyShare) : '0';
    const fairBurn = multiply(priceAmount, FAIR_BURN_RATE);
    const proceeds = minus(priceAmount, sum(listingFee, fairBurn, royalties));

    return { royalties, fairBurn, proceeds };
  }, [salePrice, royaltyShare, listingFee]);

  const fees = [
    {
      feeName: 'Listing Fee',
      amount: listingFee,
      desc: '50% burned, 50% to stakers',
      show: showListingFee,
    },
    {
      feeName: 'Creator Royalties',
      amount: amountConfig.royalties,
      desc: 'Paid to creators when selling your item',
      show: true,
      loadable: true,
    },
    {
      feeName: 'Fair Burn',
      amount: amountConfig.fairBurn,
      desc: '50% burned, 50% to stakers',
      show: true,
    },
    {
      feeName: 'Proceeds',
      amount: amountConfig.proceeds,
      desc: 'Proceeds = Sale Price - Fees',
      show: showProceeds,
      isBold: true,
      loadable: true,
    },
  ];

  const displayedFees = fees.filter(({ show }) => show);

  const { textColor } = useColor();

  return (
    <SimpleGrid columns={2} spacingX="18px" spacingY="10px" w="100%" mb={mb}>
      {displayedFees.map((fee) => (
        <Flex
          justifyContent="space-between"
          alignItems="center"
          fontWeight={fee?.isBold ? '600' : '400'}
          fontSize="12px"
          lineHeight="14px"
          key={fee.feeName}
        >
          <Text color={textColor.secondary}>
            {fee.feeName}&nbsp;
            <Tooltip label={fee.desc} placement="top" fontSize="smaller">
              <InfoOutlineIcon
                boxSize={4}
                transform="translateY(-1px)"
                cursor="help"
              />
            </Tooltip>
          </Text>
          {isLoading && fee?.loadable ? (
            <Skeleton w="40px" h="14px" />
          ) : (
            <Text color={textColor.primary}>{fee.amount} STARS</Text>
          )}
        </Flex>
      ))}
    </SimpleGrid>
  );
};
