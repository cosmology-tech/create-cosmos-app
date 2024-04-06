// TODO fix type issues
// @ts-nocheck

import Link from 'next/link';
import { Box, Button, Icon, Skeleton, Text } from '@interchain-ui/react';

import { useValidators } from '@/hooks';
import { permissionNameToRouteMap } from '@/configs';
import { getAttributePairs, PrettyGrant } from '@/utils';
import { useAuthzContext } from '@/context';

type PermissionDetailCardProps = {
  role: 'granter' | 'grantee';
  onRevoke: () => void;
  isRevoking: boolean;
  chainName: string;
  permission: PrettyGrant['permissions'][0];
};

export const PermissionDetailCard = ({
  role,
  onRevoke,
  isRevoking,
  chainName,
  permission,
}: PermissionDetailCardProps) => {
  const { name, expiration, expiry, authorization } = permission;
  const isGranter = role === 'granter';

  const { setPermission } = useAuthzContext();
  const { data, isLoading } = useValidators(chainName, { fetchLogos: false });
  const attributes = getAttributePairs(authorization, data || []);

  return (
    <Box
      px="$10"
      py="$11"
      backgroundColor="$cardBg"
      borderRadius="$lg"
      width="100%"
      height={{ mobile: 'auto', tablet: '100%' }}
    >
      <Box mb="$10">
        {isGranter ? (
          <Box display="flex" justifyContent="space-between" gap="$6">
            <Text fontWeight="$semibold" fontSize="$lg">
              {name}
            </Text>
            <Button
              intent="tertiary"
              size="sm"
              onClick={onRevoke}
              disabled={isRevoking}
            >
              Revoke
            </Button>
          </Box>
        ) : permissionNameToRouteMap[name] ? (
          <Link
            href={permissionNameToRouteMap[name]}
            style={{ textDecoration: 'none' }}
          >
            <Box
              display="flex"
              alignItems="center"
              gap="$4"
              attributes={{ onClick: () => setPermission(permission) }}
            >
              <Text fontWeight="$semibold" fontSize="$lg">
                {name}
              </Text>
              <Icon name="arrowRightRounded" size="$xs" />
            </Box>
          </Link>
        ) : (
          <Text fontWeight="$semibold" fontSize="$lg">
            {name}
          </Text>
        )}
      </Box>

      <Box display="flex" flexDirection="column" gap="$7">
        {expiration && <PermissionAttribute label="Expiry" value={expiry} />}
        {attributes.map((attr) => (
          <PermissionAttribute
            {...attr}
            key={attr.label}
            isLoading={
              (attr.label === 'Allow List' || attr.label === 'Deny List') &&
              isLoading
            }
          />
        ))}
      </Box>
    </Box>
  );
};

type PermissionAttributeProps = {
  label: string;
  value: string;
  isLoading?: boolean;
};

const PermissionAttribute = ({
  label,
  value,
  isLoading = false,
}: PermissionAttributeProps) => {
  return (
    <Box display="flex" justifyContent="space-between">
      <Text
        fontWeight="$normal"
        fontSize="$sm"
        attributes={{ maxWidth: '30%' }}
      >
        {label}
      </Text>
      {isLoading ? (
        <Skeleton width="$20" height="$9" />
      ) : (
        <Text
          fontWeight="$semibold"
          fontSize="$sm"
          textAlign="right"
          attributes={{ maxWidth: '65%' }}
        >
          {value}
        </Text>
      )}
    </Box>
  );
};
