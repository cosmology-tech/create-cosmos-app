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

import { getChainLogoUrl } from '@/utils';
import styles from '@/styles/custom.module.css';

const granteeAddress = 'osmo1qx6kgrla69wmz90tn379p4kaux5prdkuzly2tw';

type GrantCardProps = {
  permissions: string[];
};

export const GrantCard = ({ permissions }: GrantCardProps) => {
  const [isCopied, setIsCopied] = useState(false);

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
          alt="chain name"
          src={getChainLogoUrl('juno')}
          width="30"
          height="30"
          sizes="100vw"
        />
        <Text fontWeight="$semibold" fontSize="$lg">
          Juno
        </Text>
      </Stack>

      <Box position="relative" mb="$10">
        <TextField
          id="grantee"
          label="Grantee"
          value={granteeAddress}
          inputClassName={styles.customInput}
        />
        <Box position="absolute" bottom="$2" right="$2">
          <IconButton
            icon={isCopied ? 'checkLine' : 'copy'}
            size="sm"
            intent="secondary"
            iconSize={isCopied ? '$xl' : '$md'}
            onClick={() => copy(granteeAddress)}
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

      <Box display="flex" gap="$6" flexWrap="wrap" mb="$12">
        {permissions.map((permission) => (
          <PermissionItem
            key={permission}
            name={permission}
            onRevoke={() => {}}
          />
        ))}
      </Box>

      <Button intent="tertiary" fluidWidth>
        View Details
      </Button>
    </Box>
  );
};

type PermissionItemProps = {
  name: string;
  onRevoke: () => void;
};

const PermissionItem = ({ name, onRevoke }: PermissionItemProps) => {
  return (
    <Box
      width="$fit"
      py="$3"
      pl="$6"
      pr="$4"
      backgroundColor="$inputBg"
      borderRadius="$base"
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap="$2"
    >
      <Text
        color="$textSecondary"
        fontSize="$md"
        fontWeight="$semibold"
        lineHeight="$normal"
      >
        {name}
      </Text>
      <IconButton
        className={styles.customIconButton}
        icon="close"
        iconSize="$xl"
        intent="secondary"
        size="xs"
        onClick={onRevoke}
      />
    </Box>
  );
};
