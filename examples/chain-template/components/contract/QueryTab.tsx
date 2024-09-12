import { Box, Text } from '@interchain-ui/react';

type QueryTabProps = {
  show: boolean;
  initialAddress: string;
  clearInitAddress: () => void;
};

export const QueryTab = ({
  show,
  initialAddress,
  clearInitAddress,
}: QueryTabProps) => {
  return (
    <Box display={show ? 'block' : 'none'}>
      <Text>Query Contract</Text>
    </Box>
  );
};
