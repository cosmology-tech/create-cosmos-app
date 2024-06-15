import { Box, Text } from '@interchain-ui/react';

type QueryTabProps = {
  show: boolean;
};

export const QueryTab = ({ show }: QueryTabProps) => {
  return (
    <Box display={show ? 'block' : 'none'}>
      <Text>QueryTab</Text>
    </Box>
  );
};
