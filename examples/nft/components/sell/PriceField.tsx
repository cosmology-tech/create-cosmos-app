import { useStarsPrice } from '@/hooks';
import { Box, Icon, Text, Stack, NumberField, TokenInput } from '@interchain-ui/react';

export type PriceFieldProps = {
  value?: number;
  onChange?: (price: number) => void;
}

export function PriceField({ value = undefined, onChange = () => {} }: PriceFieldProps) {
  const { price } = useStarsPrice();
  const $value = value ? (value * (price || 0)).toFixed(2) : '';
  return <Box position="relative">
    <NumberField
      size="md"
      fontSize="$lg"
      value={value}
      onChange={onChange}
      formatOptions={{ minimumFractionDigits: 0, maximumFractionDigits: 0 }}
    />
    <Stack attributes={{
      top: "50%",
      right: "$6",
      position: "absolute",
      alignItems: "center",
      transform: "translateY(-50%)"
    }}>
      <Icon
        size="$5xl"
        name="stargazePixel"
        attributes={{ borderRadius: "$full", backgroundColor: "$black" }}
      />
      <Text fontWeight="$semibold" attributes={{ ml: "$6", mr: "$4" }}>
        {value} STARS
      </Text>
      {price && value ?
        <Box>
          <Text color="$textPlaceholder">{`≈ $${$value}`}</Text>
        </Box> : null}
    </Stack>
  </Box>
}