import { useState } from 'react';
import { Box, Icon, Text } from '@interchain-ui/react';

import { useCopyToClipboard } from '@/hooks';
import { Button, Table } from '../common';

type MyContractsTabProps = {
  show: boolean;
};

export const MyContractsTab = ({ show }: MyContractsTabProps) => {
  return (
    <Box display={show ? 'block' : 'none'} maxWidth="900px" mt="40px" mx="auto">
      <Text color="$blackAlpha600" fontSize="24px" fontWeight="700">
        My contracts
      </Text>
      <Table>
        <Table.Header>
          <Table.Row height="$fit">
            <Table.HeaderCell width="10%">Contract Address</Table.HeaderCell>
            <Table.HeaderCell width="20%">Contract Name</Table.HeaderCell>
            <Table.HeaderCell width="10%">Code ID</Table.HeaderCell>
            <Table.HeaderCell width="6%" />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {tableRows.map(({ address, codeId, label }) => (
            <Table.Row key={address}>
              <Table.Cell>
                <CopyText displayValue={address} copyValue={address} />
              </Table.Cell>
              <Table.Cell>{label}</Table.Cell>
              <Table.Cell color="$blackAlpha500" fontWeight="500">
                {codeId}
              </Table.Cell>
              <Table.Cell>
                <Box display="flex" gap="10px">
                  <Button size="sm">Query</Button>
                  <Button size="sm">Execute</Button>
                </Box>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Box>
  );
};

const tableRows = [
  {
    address: 'osmo1v...gk8d4e',
    label: 'test contract',
    codeId: 8323,
  },
  {
    address: 'osmo1t...xwfu62',
    label: 'contract3323',
    codeId: 6323,
  },
  {
    address: 'osmo1x...72ps2u',
    label: 'contract11',
    codeId: 2052,
  },
  {
    address: 'osmo14...f93d7k',
    label: 'contract39893',
    codeId: 39893,
  },
];

const CopyText = ({
  copyValue,
  displayValue,
}: {
  displayValue: string;
  copyValue: string;
}) => {
  const [isHover, setIsHover] = useState(false);
  const { copyToClipboard, isCopied } = useCopyToClipboard();

  return (
    <Box
      display="flex"
      alignItems="center"
      gap="10px"
      width="$fit"
      cursor="pointer"
      attributes={{
        onMouseEnter: () => setIsHover(true),
        onMouseLeave: () => setIsHover(false),
        onClick: () => copyToClipboard(copyValue),
      }}
    >
      <Text color="$blackAlpha600" fontSize="14px" fontWeight="600">
        {displayValue}
      </Text>
      {isHover && (
        <Box display="flex" transform="translateY(2px)">
          <Icon
            name={isCopied ? 'checkLine' : 'copy'}
            color={isCopied ? '$green600' : '$blackAlpha500'}
            size="$md"
          />
        </Box>
      )}
    </Box>
  );
};
