import { Box, Text, Stack, Button, NftFees, StarText, NumberField } from '@interchain-ui/react';
import { Token } from '@/config';
import { PriceField } from './PriceField';
import { useFees } from '@/hooks/sell';

export type UpdatePriceProps = {
  price: number;
  token: Token;
  isLoading?: boolean;
  floorPrice?: string;
  highestBid?: string;
  onCancel?: () => void;
  onUpdate?: () => void;
  onChange?: (price: number) => void;
}

export function UpdatePrice({
  price = 0,
  token,
  floorPrice = '',
  highestBid = '',
  isLoading = false,
  onCancel = () => {},
  onUpdate = () => {},
  onChange = () => {}
}: UpdatePriceProps) {

  const { listingFee, fairBurn, proceeds, royalties } = useFees(token, price);

  return <Box minWidth="30rem">
    <Text color="$textSecondary" fontSize="$lg" fontWeight="600">
      Sales Price
    </Text>
    <Box pt="$6">
      <PriceField value={price} onChange={onChange} />
    </Box>
    <Box my="$9">
      <FloorPriceHighestBid
        floorPrice={floorPrice}
        highestBid={highestBid}
        onFloorPriceClick={() => onChange(+floorPrice)}
        onHighestBidClick={() => onChange(+highestBid)}
      />
    </Box>
    <Box mt="$12">
      <NftFees
        title='Fees'
        symbol='STAR'
        fairBurn={fairBurn}
        listFee={listingFee}
        proceeds={proceeds}
        royalities={royalties}
      />
    </Box>
    <Stack space="$4" direction="vertical" attributes={{ mt: '$12' }}>
      <Button
        fluidWidth
        intent="tertiary"
        isLoading={isLoading}
        disabled={isLoading || !price || price === 0}
        onClick={onUpdate}
      >Update
      </Button>
      <Button
        fluidWidth
        intent="secondary"
        variant="unstyled"
        onClick={onCancel}
      >Cancel</Button>
    </Stack>
  </Box>
}

export type FloorPriceHighestBidProps = {
  floorPrice?: string;
  highestBid?: string;
  onFloorPriceClick?: () => void;
  onHighestBidClick?: () => void;
}

export function FloorPriceHighestBid({
  floorPrice = '',
  highestBid = '',
  onFloorPriceClick = () => {},
  onHighestBidClick = () => {},
}: FloorPriceHighestBidProps) {
  return <Box>
    <Stack attributes={{ justifyContent: 'space-between' }}>
      <StarText
        label='Floor Price'
        value={floorPrice}
        attributes={{ cursor: 'pointer' }}
        onClick={onFloorPriceClick} 
      />
      <StarText 
        label='Highest Offer'
        value={highestBid}
        attributes={{ cursor: 'pointer' }}
        onClick={onHighestBidClick}
      />
    </Stack>
  </Box>
}