import Image from 'next/image';
import { useState } from 'react';
import {
  Box,
  Button,
  IconButton,
  Stack,
  Text,
  TextField,
} from '@interchain-ui/react';

import { getCoin } from '@/configs';
import { getChainLogoByChainName, PrettyGrant } from '@/utils';
import styles from '@/styles/custom.module.css';

type GrantCardProps = {
  role: 'granter' | 'grantee';
  grant: PrettyGrant;
  chainName: string;
  onViewDetails: () => void;
};

export const GrantCard = ({
  role,
  grant,
  chainName,
  onViewDetails,
}: GrantCardProps) => {
  const [isCopied, setIsCopied] = useState(false);
  const { address, permissions } = grant;

  const isGranter = role === 'granter';
  const token = getCoin(chainName);

  const copy = (text: string) => {
    if (isCopied) return;

    navigator.clipboard
      .writeText(text)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 800);
      })
      .catch((error) => {
        console.error('Failed to copy:', error);
      });
  };

  return (
    <Box
      px="$10"
      py="$11"
      backgroundColor="$cardBg"
      borderRadius="$lg"
      width="496px"
    >
      <Stack space="$4" attributes={{ alignItems: 'center', mb: '$10' }}>
        <Image
          alt={token.name}
          src={getChainLogoByChainName(chainName)}
          width="30"
          height="30"
          sizes="100vw"
        />
        <Text fontWeight="$semibold" fontSize="$lg">
          {token.name}
        </Text>
      </Stack>

      <Box position="relative" mb="$10">
        <TextField
          id="address"
          label={isGranter ? 'Grantee' : 'Granter'}
          value={address}
          inputClassName={styles.customInput}
        />
        <Box position="absolute" bottom="$2" right="$2">
          <IconButton
            icon={isCopied ? 'checkLine' : 'copy'}
            size="sm"
            intent="secondary"
            iconSize={isCopied ? '$xl' : '$md'}
            onClick={() => copy(address)}
          />
        </Box>
      </Box>

      <Text
        color="$textSecondary"
        fontSize="$sm"
        fontWeight="$semibold"
        lineHeight="$normal"
        attributes={{ mb: '$6' }}
      >
        Permissions
      </Text>

      <Box
        display="flex"
        gap="$6"
        flexWrap="wrap"
        mb="$12"
        height="$12"
        overflow="hidden"
      >
        {permissions.map(({ name }) => (
          <PermissionItem
            key={name}
            role={role}
            name={name}
            onClick={() => {}}
          />
        ))}
      </Box>

      <Button intent="tertiary" onClick={onViewDetails} fluidWidth>
        View Details
      </Button>
    </Box>
  );
};

type PermissionItemProps = {
  name: string;
  role: 'granter' | 'grantee';
  onClick: () => void;
};

const PermissionItem = ({ name, role, onClick }: PermissionItemProps) => {
  const isGranter = role === 'granter';

  return (
    <Button
      size="sm"
      intent="secondary"
      rightIcon={isGranter ? 'close' : 'arrowRightRounded'}
      iconSize={isGranter ? '$lg' : '$2xs'}
      onClick={onClick}
    >
      {name}
    </Button>
  );
};
