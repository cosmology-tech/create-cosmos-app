import Image from 'next/image';
import { Box, Text } from '@interchain-ui/react';

export const EmptyState = ({ text }: { text: string }) => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
    gap="10px"
  >
    <Image alt="empty" src="/images/empty.svg" width="72" height="72" />
    <Text color="$blackAlpha500" fontSize="16px" fontWeight="500">
      {text}
    </Text>
  </Box>
);
