import { Box } from '@interchain-ui/react';

import { BackButton } from './BackButton';
import { InstantiateContract } from './InstantiateContract';

type CreateFromCodeIdProps = {
  onBack: () => void;
};

export const CreateFromCodeId = ({ onBack }: CreateFromCodeIdProps) => {
  return (
    <Box position="relative">
      <Box
        position="absolute"
        top="0"
        left="0"
        display="flex"
        flexDirection="column"
        gap="40px"
      >
        <BackButton onClick={onBack} />
      </Box>
      <InstantiateContract onViewMyContracts={onBack} />
    </Box>
  );
};
