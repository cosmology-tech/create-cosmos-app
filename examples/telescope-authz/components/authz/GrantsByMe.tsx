import { Box, Text } from '@interchain-ui/react';
import { GrantCard } from './GrantCard';

type GrantsByMeProps = {
  grants: any[];
};

export const GrantsByMe = ({ grants }: GrantsByMeProps) => {
  if (grants.length === 0) {
    return (
      <Text
        fontSize="$lg"
        color="$textSecondary"
        fontWeight="$semibold"
        textAlign="center"
        attributes={{ my: '$28' }}
      >
        You haven't granted any permission yet
      </Text>
    );
  }

  return (
    <Box width="$full">
      <GrantCard permissions={['Send', 'Vote', 'Delegate']} />
    </Box>
  );
};
