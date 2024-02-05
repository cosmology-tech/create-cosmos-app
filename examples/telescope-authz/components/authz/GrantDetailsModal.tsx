import { PrettyGrant } from '@/utils';
import { BasicModal, Box, Button } from '@interchain-ui/react';
import { PermissionDetailCard } from './PermissionDetailCard';

type GrantDetailsModalProps = {
  grant: PrettyGrant;
  chainName: string;
  isOpen: boolean;
  onClose: () => void;
};

export const GrantDetailsModal = ({
  grant,
  isOpen,
  onClose,
  chainName,
}: GrantDetailsModalProps) => {
  const { permissions } = grant;

  const onModalClose = () => {
    onClose();
  };

  const isScrollable = permissions.length > 4;

  return (
    <BasicModal title="All Permissions" isOpen={isOpen} onClose={onModalClose}>
      <Box width={{ mobile: '100%', tablet: '$containerMd' }}>
        <Box
          mt="$7"
          mb="$12"
          display="grid"
          gridTemplateColumns={{ mobile: '1fr', tablet: '1fr 1fr' }}
          gap="$10"
          maxHeight="480px"
          overflowY="auto"
          pr={isScrollable ? '$4' : '0'}
        >
          {permissions.map((permission) => (
            <PermissionDetailCard
              key={permission.name}
              chainName={chainName}
              permission={permission}
            />
          ))}
        </Box>

        <Button intent="tertiary" fluidWidth>
          Revoke All
        </Button>
      </Box>
    </BasicModal>
  );
};
