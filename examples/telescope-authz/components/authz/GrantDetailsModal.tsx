import { useState } from 'react';
import { BasicModal, Box, Button } from '@interchain-ui/react';

import { useAuthzTx, useGrants } from '@/hooks';
import { PrettyGrant, PrettyPermission } from '@/utils';
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

  const [isRevoking, setIsRevoking] = useState(false);
  const [revokingPermission, setRevokingPermission] =
    useState<PrettyPermission>();

  const { refetch } = useGrants(chainName);
  const { authzTx, createRevokeMsg } = useAuthzTx(chainName);

  const handleRevoke = (permissions: PrettyPermission[]) => {
    setIsRevoking(true);

    authzTx({
      msgs: permissions.map(createRevokeMsg),
      onSuccess: () => {
        refetch();
        onClose();
      },
      onComplete: () => {
        setIsRevoking(false);
        setRevokingPermission(undefined);
      },
    });
  };

  const isScrollable = permissions.length > 4;

  return (
    <BasicModal title="All Permissions" isOpen={isOpen} onClose={onClose}>
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
              onRevoke={() => {
                handleRevoke([permission]);
                setRevokingPermission(permission);
              }}
              isRevoking={
                isRevoking && permission.name === revokingPermission?.name
              }
              chainName={chainName}
              permission={permission}
            />
          ))}
        </Box>

        <Button
          intent="tertiary"
          fluidWidth
          onClick={() => {
            handleRevoke(permissions);
          }}
          isLoading={isRevoking && !revokingPermission}
          disabled={isRevoking && !revokingPermission}
        >
          Revoke All
        </Button>
      </Box>
    </BasicModal>
  );
};
