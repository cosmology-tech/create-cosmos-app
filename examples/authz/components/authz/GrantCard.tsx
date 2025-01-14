// TODO fix type issues
// @ts-nocheck

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import {
  Box,
  Button,
  IconButton,
  Stack,
  Text,
  TextField,
} from '@interchain-ui/react';
import { useChain } from '@cosmos-kit/react';

import {
  getChainLogoByChainName,
  PrettyGrant,
  PrettyPermission,
} from '@/utils';
import { useAuthzContext } from '@/context';
import {
  useAuthzTx,
  useGrants,
  useSigningClientAmino,
  useSigningClientDirect,
} from '@/hooks';
import { getCoin, permissionNameToRouteMap } from '@/configs';

import styles from '@/styles/custom.module.css';
import { useRevoke } from 'interchain-react/cosmos/authz/v1beta1/tx.rpc.func';
import { defaultContext } from '@tanstack/react-query';

type GrantCardProps = {
  role: 'granter' | 'grantee';
  grant: PrettyGrant;
  chainName: string;
  onViewDetails: () => void;
};

export const GrantCard = ({
  role,
  grant,
  chainName,
  onViewDetails,
}: GrantCardProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const [isRevoking, setIsRevoking] = useState(false);
  const [revokingPermission, setRevokingPermission] =
    useState<PrettyPermission>();

  const { address: signerAddress, chain } = useChain(chainName);
  const { refetch } = useGrants(chainName);
  const { setPermission } = useAuthzContext();
  const { createRevokeMsg } = useAuthzTx(chainName);
  const { data: client } = useSigningClientDirect(chainName);

  const { mutate: revoke } = useRevoke({
    clientResolver: client,
    options: {
      context: defaultContext,
    },
  });

  const { address, permissions } = grant;

  const isGranter = role === 'granter';
  const token = getCoin(chainName);

  const copy = (text: string) => {
    if (isCopied) return;

    navigator.clipboard
      .writeText(text)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 800);
      })
      .catch((error) => {
        console.error('Failed to copy:', error);
      });
  };

  const handleRevoke = (permission: PrettyPermission) => {
    setIsRevoking(true);

    revoke(
      {
        signerAddress,
        message: createRevokeMsg(permission),
        fee: 'auto',
        memo: 'revoking permission',
      },
      {
        onSuccess: () => {
          refetch();
        },
        onComplete: () => {
          setIsRevoking(false);
        },
      }
    );
  };

  return (
    <Box
      px="$10"
      py="$11"
      backgroundColor="$cardBg"
      borderRadius="$lg"
      width="$full"
    >
      <Stack space="$4" attributes={{ alignItems: 'center', mb: '$10' }}>
        <Image
          alt={token.name}
          src={getChainLogoByChainName(chainName)}
          width="30"
          height="30"
          sizes="100vw"
        />
        <Text fontWeight="$semibold" fontSize="$lg">
          {chain.pretty_name}
        </Text>
      </Stack>

      <Box position="relative" mb="$10">
        <TextField
          id="address"
          label={isGranter ? 'Grantee' : 'Granter'}
          value={address}
          inputClassName={styles.customInput}
        />
        <Box position="absolute" bottom="$2" right="$2">
          <IconButton
            icon={isCopied ? 'checkLine' : 'copy'}
            size="sm"
            intent="secondary"
            iconSize={isCopied ? '$xl' : '$md'}
            onClick={() => copy(address)}
          />
        </Box>
      </Box>

      <Text
        color="$textSecondary"
        fontSize="$sm"
        fontWeight="$semibold"
        lineHeight="$normal"
        attributes={{ mb: '$6' }}
      >
        Permissions
      </Text>

      <Box
        display="flex"
        gap="$6"
        flexWrap="wrap"
        mb="$12"
        height="$12"
        overflow="hidden"
      >
        {permissions.map((permission) =>
          isGranter ? (
            <Button
              key={permission.name}
              size="sm"
              intent="secondary"
              rightIcon="close"
              iconSize="$lg"
              onClick={() => {
                handleRevoke(permission);
                setRevokingPermission(permission);
              }}
              disabled={
                isRevoking && revokingPermission?.name === permission.name
              }
            >
              {permission.name}
            </Button>
          ) : permissionNameToRouteMap[permission.name] ? (
            <Link
              href={permissionNameToRouteMap[permission.name]}
              style={{ textDecoration: 'none' }}
            >
              <Button
                key={permission.name}
                size="sm"
                intent="secondary"
                rightIcon="arrowRightRounded"
                iconSize="$2xs"
                onClick={() => setPermission(permission)}
              >
                {permission.name}
              </Button>
            </Link>
          ) : (
            <Button key={permission.name} size="sm" intent="secondary">
              {permission.name}
            </Button>
          )
        )}
      </Box>

      <Button intent="tertiary" onClick={onViewDetails}>
        View Details
      </Button>
    </Box>
  );
};
