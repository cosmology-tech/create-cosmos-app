import { Box } from '@interchain-ui/react';

import { BackButton } from './BackButton';
import { InstantiateContract } from './InstantiateContract';

type CreateFromCodeIdProps = {
  onBack: () => void;
  switchTab: (initialAddress: string, tabId: number) => void;
};

export const CreateFromCodeId = ({
  onBack,
  switchTab,
}: CreateFromCodeIdProps) => {
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
      <InstantiateContract switchTab={switchTab} onViewMyContracts={onBack} />
    </Box>
  );
};
