// TODO fix type issues
// @ts-nocheck

import { useState } from 'react';
import { BasicModal, Box, Button } from '@interchain-ui/react';

import {
  useAuthzTx,
  useGrants,
  useSigningClientAmino,
  useSigningClientDirect,
} from '@/hooks';
import { PrettyGrant, PrettyPermission } from '@/utils';
import { PermissionDetailCard } from './PermissionDetailCard';
import { useRevoke } from 'interchain-react/cosmos/authz/v1beta1/tx.rpc.func';
import { defaultContext } from '@tanstack/react-query';
import { useChain } from '@cosmos-kit/react';

type GrantDetailsModalProps = {
  grant: PrettyGrant;
  chainName: string;
  role: 'granter' | 'grantee';
  isOpen: boolean;
  onClose: () => void;
};

export const GrantDetailsModal = ({
  role,
  grant,
  isOpen,
  onClose,
  chainName,
}: GrantDetailsModalProps) => {
  const { permissions } = grant;
  const isGranter = role === 'granter';

  const [isRevoking, setIsRevoking] = useState(false);
  const [revokingPermission, setRevokingPermission] =
    useState<PrettyPermission>();

  const { address: signerAddress } = useChain(chainName);
  const { refetch } = useGrants(chainName);
  const { createRevokeMsg } = useAuthzTx(chainName);

  const { data: client } = useSigningClientDirect(chainName);

  const { mutate: revoke } = useRevoke({
    clientResolver: client,
    options: {
      context: defaultContext,
    },
  });

  const handleRevoke = (permissions: PrettyPermission[]) => {
    setIsRevoking(true);

    revoke(
      {
        signerAddress,
        message: permissions.map(createRevokeMsg),
        fee: 'auto',
        memo: 'revoking permission',
      },
      {
        onSuccess: () => {
          refetch();
          onClose();
        },
        onError: () => {
          setIsRevoking(false);
          setRevokingPermission(undefined);
        },
      }
    );
  };

  return (
    <BasicModal title="All Permissions" isOpen={isOpen} onClose={onClose}>
      <Box width={{ mobile: '100%', tablet: '$containerMd' }}>
        <Box
          mt="$7"
          mb={isGranter ? '$12' : '$2'}
          display="grid"
          gridTemplateColumns={{ mobile: '1fr', tablet: '1fr 1fr' }}
          gap="$10"
          maxHeight="500px"
          overflowY="auto"
        >
          {permissions.map((permission) => (
            <PermissionDetailCard
              key={permission.name}
              role={role}
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

        {isGranter && (
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
        )}
      </Box>
    </BasicModal>
  );
};
