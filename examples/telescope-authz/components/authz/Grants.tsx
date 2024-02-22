import { useState } from 'react';
import { Box, Spinner, Text } from '@interchain-ui/react';

import { useGrants } from '@/hooks';
import { PrettyGrant } from '@/utils';
import { GrantCard } from './GrantCard';
import { GrantDetailsModal } from './GrantDetailsModal';

type GrantsProps = {
  role: 'granter' | 'grantee';
  chainName: string;
};

export const Grants = ({ chainName, role }: GrantsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [viewingGrant, setViewingGrant] = useState<PrettyGrant>();
  const { data, isLoading } = useGrants(chainName);

  const isGranter = role === 'granter';
  const grants = isGranter ? data?.granterGrants : data?.granteeGrants;

  return (
    <Box flex="1" display="flex" justifyContent="center" alignItems="center">
      {isLoading ? (
        <Spinner size="$6xl" />
      ) : grants && grants.length > 0 ? (
        <Box
          width="$full"
          alignSelf="flex-start"
          display="grid"
          gridTemplateColumns={{ mobile: '1fr', tablet: '1fr 1fr' }}
          gap="$10"
        >
          {grants.map((grant) => (
            <GrantCard
              key={grant.address}
              role={role}
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
          {isGranter
            ? "You haven't granted any permission yet"
            : "You don't have any grants"}
        </Text>
      )}

      {viewingGrant && (
        <GrantDetailsModal
          role={role}
          grant={viewingGrant}
          isOpen={isOpen}
          chainName={chainName}
          onClose={() => setIsOpen(false)}
        />
      )}
    </Box>
  );
};
