// TODO fix type issues
// @ts-nocheck

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
  const { data, isLoading, isError } = useGrants(chainName);

  const isGranter = role === 'granter';
  const grants = isGranter ? data?.granterGrants : data?.granteeGrants;

  const renderContent = () => {
    if (isError) {
      return (
        <Text fontSize="$lg" color="$textDanger" fontWeight="$semibold">
          There was an error fetching grants. Please try again later.
        </Text>
      );
    }

    if (isLoading) {
      return <Spinner size="$6xl" />;
    }

    if (grants && grants.length > 0) {
      return (
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
      );
    }

    return (
      <Text fontSize="$lg" color="$textSecondary" fontWeight="$semibold">
        {isGranter
          ? "You haven't granted any permission yet"
          : "You don't have any grants"}
      </Text>
    );
  };

  return (
    <Box flex="1" display="flex" justifyContent="center" alignItems="center">
      {renderContent()}

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
