import { Box } from '@interchain-ui/react';

type InstantiateTabProps = {
  show: boolean;
};

export const InstantiateTab = ({ show }: InstantiateTabProps) => {
  return (
    <Box display={show ? 'block' : 'none'} mt="40px">
      InstantiateTab
    </Box>
  );
};
