import BigNumber from 'bignumber.js';
import { Box, Text, Icon, Tabs, Stack, Button, NftFees, TextField, Select, SelectOption } from '@interchain-ui/react';
import { FloorPriceHighestBid, PriceField } from '.';
import { Fees, useFees } from '@/hooks/sell';
import { Token } from '@/config';

type SelectOption = {
  key: string;
  label: string;
  index: number;
}

export const ValidFor30Days = 30;
export const ValidForValues = [1, 3, 7, 14, 30, 90];
export const ValidForLabels = ['1 day', '3 days', '7 days', '14 days', '30 days', '90 days'];
export const ValidForOptions = ValidForValues.map((value, index) => ({
  key: String(value),
  label: ValidForLabels[index],
  index
})) as SelectOption[];
export const ValidFor30DaysOption = ValidForOptions[4];

function onSelect(
  item: SelectOption | null,
  handler = (_: number) => {}) {
  handler(item ? ValidForValues[item.index] : ValidFor30Days)
}

export type ListForSaleProps = {
  token: Token
  fixed: ListForSalePriceForm;
  auction: ListForSalePriceForm;
  sellnow: ListForSalePriceForm;
  floorPrice: string;
  highestBid: string;
}

export type ListForSalePriceForm = {
  price: number;
  valid: number;
  reserve?: string;
  isLoading?: boolean;
  onList?: () => void;
  onCancel?: () => void;
  onPriceChange?: (price: number) => void;
  onValidChange?: (valid: number) => void;
  onReserveChange?: (address: string) => void;
}

export function ListForSale({
  token, fixed, auction, sellnow, floorPrice, highestBid
}: ListForSaleProps) {

  const fixedFees = useFees(token, fixed.price);
  const auctionFees = useFees(token, auction.price);
  const sellnowFees = useFees(token, sellnow.price);

  const tabs = [
    { 
      label: 'Fixed Price',
      content: FixedPrice(fixed, fixedFees, floorPrice, highestBid),
    },
    { 
      label: 'Auction',
      content: Auction(auction, auctionFees, floorPrice, highestBid),
    },
    {
      label: 'Sell Now',
      content: SellNow(sellnow, sellnowFees, floorPrice, highestBid),
    }
  ];

  return <Box mt="$6">
    <Tabs tabs={tabs} />
  </Box>
}

function FixedPrice({
  price,
  valid,
  reserve = '',
  isLoading = false,
  onList = () => {},
  onCancel = () => {},
  onPriceChange = () => {},
  onValidChange = () => {},
  onReserveChange = () => {}
}: ListForSalePriceForm, fees: Fees, floorPrice = '', highestBid = '') {
  return <Box mt="$8">
    <Text color="$textSecondary" fontSize="$lg" fontWeight="600">
      Sales Price
    </Text>
    <Box pt="$6">
      <PriceField value={price} onChange={onPriceChange} />
    </Box>
    <Box my="$9">
      {floorPrice && highestBid ?
        <FloorPriceHighestBid
          floorPrice={floorPrice}
          highestBid={highestBid}
          onFloorPriceClick={() => onPriceChange(+floorPrice)}
          onHighestBidClick={() => onPriceChange(+highestBid)}
        /> : null}
    </Box>
    <Box mt="$10">
      <Select
        fullWidth
        label="Valid for"
        defaultSelectedItem={ValidFor30DaysOption}
        onSelectItem={(item) => onSelect(item, onValidChange)}
      >
        {ValidForOptions.map((option) =>
          <SelectOption key={option.key} optionKey={option.key} label={option.label} />
        )}
      </Select>
    </Box>
    <Box mt="$8">
      <TextField
        id="reserve-address"
        label="Reserve Address (optional)"
        value={reserve}
        onChange={(e: any) => onReserveChange(e.target.value) }
        placeholder="Enter address"
      />
    </Box>
    <Box mt="$10">
      <NftFees
        title='Fees'
        symbol='STAR'
        fairBurn={fees.fairBurn}
        listFee={fees.listingFee}
        proceeds={fees.proceeds}
        royalities={fees.royalties}
      />
    </Box>
    <Stack space="$2" direction="vertical" attributes={{ mt: '$12' }}>
      <Button
        fluidWidth
        size="lg"
        intent="tertiary"
        isLoading={isLoading}
        disabled={isLoading || !valid || !price || price === 0}
        onClick={onList}
      >List
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

function Auction({
  price,
  isLoading = false,
  onList = () => {},
  onCancel = () => {},
  onPriceChange = () => {},
  onValidChange = () => {},
}: ListForSalePriceForm, fees: Fees, floorPrice = '', highestBid = '') {
  return <Box mt="$8">
    <Text color="$textSecondary" fontSize="$lg" fontWeight="600">
      Minimum Offer
    </Text>
    <Box pt="$6">
      <PriceField value={price} onChange={onPriceChange} />
    </Box>
    <Box my="$9">
      {floorPrice && highestBid ?
        <FloorPriceHighestBid
          floorPrice={floorPrice}
          highestBid={highestBid}
          onFloorPriceClick={() => onPriceChange(+floorPrice)}
          onHighestBidClick={() => onPriceChange(+highestBid)}
        /> : null}
    </Box>  
    <Box mt="$10">
      <Select
        fullWidth
        label="Valid for"
        defaultSelectedItem={ValidFor30DaysOption}
        onSelectItem={(item) => onSelect(item, onValidChange)}
      >
        {ValidForOptions.map((option) =>
          <SelectOption key={option.key} optionKey={option.key} label={option.label} />
        )}
      </Select>
    </Box>
    <Box mt="$10">
      <NftFees
        title='Fees'
        symbol='STAR'
        fairBurn={fees.fairBurn}
        listFee={fees.listingFee}
        proceeds={fees.proceeds}
        royalities={fees.royalties}
      />
    </Box>
    <Stack space="$2" direction="vertical" attributes={{ mt: '$12' }}>
      <Button
        fluidWidth
        size="lg"
        intent="tertiary"
        isLoading={isLoading}
        disabled={isLoading || !price || price === 0}
        onClick={onList}
      >List
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

function SellNow({
  isLoading = false,
  onList = () => {},
  onCancel = () => {}
}: ListForSalePriceForm, fees: Fees, floorPrice = '', highestBid = '') {
  const ratio = new BigNumber(highestBid)
    .div(floorPrice || 1)
    .decimalPlaces(2)
    .toString();

  return <Box mt="$8">
    <Text color="$textSecondary" fontSize="$lg" fontWeight="600">
      Best Offer
    </Text>
    <Stack attributes={{ pt: "$9", alignItems: "center" }} space="$6">
      <Text fontWeight="$semibold" fontSize={{ mobile: "$md", tablet: "$lg" }}>
        {`${highestBid} STARS`}
      </Text>
      <Icon
        name="stargazePixel"
        size="$7xl"
        attributes={{ borderRadius: "$full", backgroundColor: "$black" }}
      />
    </Stack>
    <Box
      mt="$6"
      mb="$12"
      color="$textSecondary"
      display="flex"
      fontSize="$sm"
      alignItems="center"
    >
      This offer is
      <Text fontWeight="$semibold" attributes={{ mx: '$2' }}>
        {ratio} X 
      </Text>
      the floor price of
      <Text fontWeight="$semibold" attributes={{ mx: '$2' }}>
        {floorPrice} STARS
      </Text>
      .
    </Box>
    <Box mt="$8">
      <NftFees
        title='Fees'
        symbol='STAR'
        fairBurn={fees.fairBurn}
        listFee={fees.listingFee}
        proceeds={fees.proceeds}
        royalities={fees.royalties}
      />
    </Box>
    <Stack space="$2" direction="vertical" attributes={{ mt: '$12' }}>
      <Button
        fluidWidth
        size="lg"
        intent="tertiary"
        isLoading={isLoading}
        disabled={isLoading}
        onClick={onList}
      >Accept Offer
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