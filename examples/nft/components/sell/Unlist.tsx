import { Box, Text, Stack, Button } from '@interchain-ui/react';

export type UnlistProps = {
  isLoading?: boolean;
  onUnlist?: () => void;
  onCancal?: () => void;
}

export function Unlist({
  isLoading = false,
  onUnlist = () => {},
  onCancal = () => {},
}: UnlistProps) {
  return <Box>
    <Box display="flex" alignItems="center" p="$4" mx="auto" borderRadius="$md">
      <Text lineHeight="150%" fontSize="$md">
        Remove this listing from Marketplace?
      </Text>
    </Box>
    <Stack direction="vertical" space="$2" attributes={{ mt: '$10' }}>
      <Button
        fluidWidth
        intent="tertiary"
        onClick={onUnlist}
        disabled={isLoading}
        isLoading={isLoading}
      >
        Unlist
      </Button>
      <Button
        fluidWidth
        intent="secondary"
        variant="unstyled"
        onClick={onCancal}
      >
        Cancel
      </Button>
    </Stack>
  </Box>;
}