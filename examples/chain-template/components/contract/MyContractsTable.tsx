import { useState } from 'react';
import { useChain } from '@cosmos-kit/react';
import { Box, Icon, Spinner, Text } from '@interchain-ui/react';

import { useCopyToClipboard, useMyContracts } from '@/hooks';
import { Button, Table } from '../common';
import { shortenAddress } from '@/utils';
import { TabLabel } from '@/pages/contract';
import { EmptyState } from './EmptyState';
import { useChainStore } from '@/contexts';

type MyContractsTableProps = {
  show: boolean;
  switchTab: (initialAddress: string, tabId: number) => void;
  title?: string;
  createContractTrigger?: React.ReactNode;
};

export const MyContractsTable = ({
  show,
  switchTab,
  title,
  createContractTrigger,
}: MyContractsTableProps) => {
  const { selectedChain } = useChainStore();
  const { address } = useChain(selectedChain);
  const { data: myContracts = [], isLoading } = useMyContracts();

  return (
    <Box display={show ? 'block' : 'none'} maxWidth="900px" mx="auto">
      <Text color="$blackAlpha600" fontSize="24px" fontWeight="700">
        {title}
      </Text>
      <Box display="flex" justifyContent="end" mt="30px" mb="10px">
        {createContractTrigger}
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="300px"
      >
        {!address ? (
          <EmptyState text="Connect wallet to see your contracts." />
        ) : isLoading ? (
          <Spinner size="$6xl" color="$blackAlpha600" />
        ) : myContracts.length === 0 ? (
          <EmptyState text="No contracts found" />
        ) : (
          <Box width="$full" alignSelf="start" overflowX="auto">
            <Table minWidth="650px">
              <Table.Header>
                <Table.Row height="$fit">
                  <Table.HeaderCell width="15%">
                    Contract Address
                  </Table.HeaderCell>
                  <Table.HeaderCell width="20%">Contract Name</Table.HeaderCell>
                  <Table.HeaderCell width="10%">Code ID</Table.HeaderCell>
                  <Table.HeaderCell width="6%" />
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {myContracts.map(({ address, contractInfo }) => (
                  <Table.Row key={address}>
                    <Table.Cell>
                      <CopyText
                        displayValue={shortenAddress(address)}
                        copyValue={address}
                      />
                    </Table.Cell>
                    <Table.Cell>{contractInfo?.label}</Table.Cell>
                    <Table.Cell color="$blackAlpha500" fontWeight="500">
                      {Number(contractInfo?.codeId)}
                    </Table.Cell>
                    <Table.Cell>
                      <Box display="flex" justifyContent="end" gap="10px">
                        <Button
                          size="sm"
                          onClick={() => switchTab(address, TabLabel.Query)}
                        >
                          Query
                        </Button>
                        <Button
                          size="sm"
                          onClick={() => switchTab(address, TabLabel.Execute)}
                        >
                          Execute
                        </Button>
                      </Box>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </Box>
        )}
      </Box>
    </Box>
  );
};

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
      gap="8px"
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
