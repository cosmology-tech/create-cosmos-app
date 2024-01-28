import { Box, Text } from '@interchain-ui/react';

type GrantsToMeProps = {
  grants: any[];
};

export const GrantsToMe = ({ grants }: GrantsToMeProps) => {
  if (grants.length === 0) {
    return (
      <Text
        fontSize="$lg"
        color="$textSecondary"
        fontWeight="$semibold"
        textAlign="center"
        attributes={{ my: '$28' }}
      >
        You don't have any grants
      </Text>
    );
  }

  return <div>GrantsToMe</div>;
};
