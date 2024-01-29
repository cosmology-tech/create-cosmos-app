import { Box, Text } from '@interchain-ui/react';
import { useState } from 'react';
import { GrantCard } from './GrantCard';
import { GrantDetailsModal } from './GrantDetailsModal';

type GrantsByMeProps = {
  grants: any[];
};

export const GrantsByMe = ({ grants }: GrantsByMeProps) => {
  const [isOpen, setIsOpen] = useState(false);

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
      <GrantCard
        permissions={['Send', 'Vote', 'Delegate']}
        onViewDetails={() => setIsOpen(true)}
      />

      <GrantDetailsModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </Box>
  );
};
