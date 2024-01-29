import { BasicModal, Box, Button } from '@interchain-ui/react';
import { PermissionDetailCard } from './PermissionDetailCard';

type GrantDetailsModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const GrantDetailsModal = ({
  isOpen,
  onClose,
}: GrantDetailsModalProps) => {
  const onModalClose = () => {
    onClose();
  };

  const permissions = Array(4).fill(0);

  const isScrollable = permissions.length > 4;

  return (
    <BasicModal title="All Permissions" isOpen={isOpen} onClose={onModalClose}>
      <Box width={{ mobile: '100%', tablet: '$containerSm' }}>
        <Box
          mt="$7"
          mb="$12"
          display="grid"
          gridTemplateColumns={{ mobile: '1fr', tablet: '1fr 1fr' }}
          gap="$10"
          maxHeight="360px"
          overflowY="auto"
          pr={isScrollable ? '$4' : '0'}
        >
          {permissions.map((_, i) => (
            <PermissionDetailCard key={i} />
          ))}
        </Box>

        <Button intent="tertiary" fluidWidth>
          Revoke All
        </Button>
      </Box>
    </BasicModal>
  );
};
