import { Box, Text } from '@interchain-ui/react';

type ExecuteTabProps = {
  show: boolean;
  initialAddress: string;
  clearInitAddress: () => void;
};

export const ExecuteTab = ({
  show,
  initialAddress,
  clearInitAddress,
}: ExecuteTabProps) => {
  return (
    <Box display={show ? 'block' : 'none'}>
      <Text>Execute Contract</Text>
    </Box>
  );
};
