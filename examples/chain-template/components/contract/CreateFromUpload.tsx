import { Box } from '@interchain-ui/react';
import { UploadContract } from './UploadContract';
import { BackButton } from './BackButton';

type CreateFromUploadProps = {
  onBack: () => void;
};

export const CreateFromUpload = ({ onBack }: CreateFromUploadProps) => {
  return (
    <Box position="relative">
      <Box position="absolute" top="0" left="0">
        <BackButton onClick={onBack} />
      </Box>
      <UploadContract show />
    </Box>
  );
};
