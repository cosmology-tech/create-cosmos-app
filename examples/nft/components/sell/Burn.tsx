import { Box, Icon, Text, Stack, Button } from '@interchain-ui/react';

export type BurnProps = {
  onBurn?: () => void;
  onCancal?: () => void;
}

export function Burn({
  onBurn = () => {},
  onCancal = () => {},
}: BurnProps) {
  return <Box>
    <Box display="flex" alignItems="center" p="$4" maxWidth="30rem" mx="auto" backgroundColor="$red100" borderRadius="$md">
      <Icon name="errorWarningFill" size="$2xl" color="$red500" />
      <Box flex="1" mt="$1" ml="$5" pb="$1">
        <Text fontSize="$xl" fontWeight="bold" attributes={{ mb: "$3" }}>Burning is irreversible</Text>
        <Text lineHeight="150%">
          Burning is an irreversible action and deletes your item from the blockchain. Make sure you have selected the correct one, and intend to perform this action
        </Text>
      </Box>
    </Box>
    <Stack space="$6" attributes={{ mt: '$8', justifyContent: 'right' }}>
      <Button intent="secondary" variant="ghost" onClick={onCancal}>Cancel</Button>
      <Button intent="danger" onClick={onBurn}>Burn</Button>
    </Stack>
  </Box>;
}