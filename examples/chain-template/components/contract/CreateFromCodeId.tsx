import { Box } from '@interchain-ui/react';

import { BackButton } from './BackButton';
import { InstantiateContract } from './InstantiateContract';
import { useDetectBreakpoints } from '@/hooks';

type CreateFromCodeIdProps = {
  onBack: () => void;
  switchTab: (addressValue: string, tabId: number) => void;
};

export const CreateFromCodeId = ({
  onBack,
  switchTab,
}: CreateFromCodeIdProps) => {
  const { isTablet } = useDetectBreakpoints();

  return (
    <Box position="relative">
      <Box position={isTablet ? 'relative' : 'absolute'} top="0" left="0">
        <BackButton onClick={onBack} />
      </Box>
      <Box mt={isTablet ? '40px' : '0'}>
        <InstantiateContract switchTab={switchTab} onViewMyContracts={onBack} />
      </Box>
    </Box>
  );
};
