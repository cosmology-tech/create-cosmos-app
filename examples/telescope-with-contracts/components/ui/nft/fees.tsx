import { useLazyQuery } from '@apollo/client';
import { InfoOutlineIcon } from '@chakra-ui/icons';
import { SimpleGrid, Flex, Tooltip, Text, Skeleton } from '@chakra-ui/react';
import { Contract } from 'components/types';
import { CONTRACT } from 'config';
import { useColor } from 'hooks';
import { useEffect, useMemo } from 'react';
import { minus, multiply, sum } from 'utils';

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
  const [execContractQuery, queryContractResult] =
    useLazyQuery<Contract>(CONTRACT);

  useEffect(() => {
    execContractQuery({
      variables: { address },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const listingFee = countListingFee ? LISTING_FEE : '0';

  const amountConfig = useMemo(() => {
    const rayaltyShare =
      queryContractResult.data?.contract.contractInfo.royalty_info.share;
    const priceAmount = salePrice ? salePrice : '0';
    const rayalties = rayaltyShare ? multiply(priceAmount, rayaltyShare) : '0';
    const fairBurn = multiply(priceAmount, FAIR_BURN_RATE);
    const proceeds = minus(priceAmount, sum(listingFee, fairBurn, rayalties));

    return { rayalties, fairBurn, proceeds };
  }, [salePrice, queryContractResult.data, listingFee]);

  const fees = [
    {
      feeName: 'Listing Fee',
      amount: listingFee,
      desc: '50% burned, 50% to stakers',
      show: showListingFee,
    },
    {
      feeName: 'Creator Royalties',
      amount: amountConfig.rayalties,
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
          {queryContractResult.loading && fee?.loadable ? (
            <Skeleton w="40px" h="14px" />
          ) : (
            <Text color={textColor.primary}>{fee.amount} STARS</Text>
          )}
        </Flex>
      ))}
    </SimpleGrid>
  );
};
