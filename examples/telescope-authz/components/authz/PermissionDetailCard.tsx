import { Box, Button, Text } from '@interchain-ui/react';

export const PermissionDetailCard = () => {
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
        mb="$10"
      >
        <Text fontWeight="$semibold" fontSize="$md">
          Send
        </Text>
        <Button intent="tertiary" size="sm">
          Revoke
        </Button>
      </Box>

      <Box display="flex" flexDirection="column" gap="$7">
        <PermissionAttribute label="Spend Limit" value="10 ATOM" />
        <PermissionAttribute label="Expiry" value="2025-01-18 18:27:21" />
      </Box>
    </Box>
  );
};

type PermissionAttributeProps = {
  label: string;
  value: string;
};

const PermissionAttribute = ({ label, value }: PermissionAttributeProps) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between">
      <Text fontWeight="$normal" fontSize="$sm">
        {label}
      </Text>
      <Text fontWeight="$semibold" fontSize="$sm">
        {value}
      </Text>
    </Box>
  );
};
