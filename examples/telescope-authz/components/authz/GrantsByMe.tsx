import { useState } from 'react';
import { Box, Spinner, Text } from '@interchain-ui/react';

import { useGrants } from '@/hooks';
import { PrettyGrant } from '@/utils';
import { GrantCard } from './GrantCard';
import { GrantDetailsModal } from './GrantDetailsModal';

type GrantsByMeProps = {
  chainName: string;
};

export const GrantsByMe = ({ chainName }: GrantsByMeProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [viewingGrant, setViewingGrant] = useState<PrettyGrant>();
  const { data, isLoading } = useGrants(chainName);

  return (
    <Box flex="1" display="flex" justifyContent="center" alignItems="center">
      {isLoading ? (
        <Spinner size="$6xl" />
      ) : data && data.granterGrants.length > 0 ? (
        <Box width="$full" alignSelf="flex-start">
          {data.granterGrants.map((grant) => (
            <GrantCard
              key={grant.address}
              role="granter"
              grant={grant}
              chainName={chainName}
              onViewDetails={() => {
                setIsOpen(true);
                setViewingGrant(grant);
              }}
            />
          ))}
        </Box>
      ) : (
        <Text fontSize="$lg" color="$textSecondary" fontWeight="$semibold">
          You haven't granted any permission yet
        </Text>
      )}

      {viewingGrant && (
        <GrantDetailsModal
          grant={viewingGrant}
          isOpen={isOpen}
          chainName={chainName}
          onClose={() => setIsOpen(false)}
        />
      )}
    </Box>
  );
};
