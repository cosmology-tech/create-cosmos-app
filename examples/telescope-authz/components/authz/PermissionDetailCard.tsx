import { Box, Button, Skeleton, Text } from '@interchain-ui/react';

import { useValidators } from '@/hooks';
import { getAttributePairs, PrettyGrant } from '@/utils';

type PermissionDetailCardProps = {
  chainName: string;
  permission: PrettyGrant['permissions'][0];
};

export const PermissionDetailCard = ({
  chainName,
  permission,
}: PermissionDetailCardProps) => {
  const { data, isLoading } = useValidators(chainName, { fetchLogos: false });
  const { name, expiration, expiry, authorization } = permission;

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
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap="$6"
        mb="$10"
      >
        <Text fontWeight="$semibold" fontSize="$md">
          {name}
        </Text>
        <Button intent="tertiary" size="sm">
          Revoke
        </Button>
      </Box>

      <Box display="flex" flexDirection="column" gap="$7">
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
        {expiration && <PermissionAttribute label="Expiry" value={expiry} />}
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
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Text fontWeight="$normal" fontSize="$sm">
        {label}
      </Text>
      {isLoading ? (
        <Skeleton width="$20" height="$9" />
      ) : (
        <Text fontWeight="$semibold" fontSize="$sm">
          {value}
        </Text>
      )}
    </Box>
  );
};
