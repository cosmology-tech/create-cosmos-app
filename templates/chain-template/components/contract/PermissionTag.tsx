import { Box, Text } from '@interchain-ui/react';
import { AccessType } from 'interchain-query/cosmwasm/wasm/v1/types';

type PermissionTagProps = {
  permission: AccessType;
};

export const PermissionTag = ({ permission }: PermissionTagProps) => {
  const renderText = () => {
    switch (permission) {
      case AccessType.ACCESS_TYPE_EVERYBODY:
        return 'Everybody';
      case AccessType.ACCESS_TYPE_NOBODY:
        return 'Nobody';
      case AccessType.ACCESS_TYPE_ANY_OF_ADDRESSES:
        return 'AnyOfAddresses';
      default:
        return 'Everybody';
    }
  };

  return (
    <Box
      p="2px 8px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius="10px"
      bg="$purple200"
      width="$fit"
    >
      <Text color="$purple600" fontSize="12px" fontWeight="500">
        {renderText()}
      </Text>
    </Box>
  );
};
