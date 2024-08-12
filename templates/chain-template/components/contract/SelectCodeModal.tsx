import { useMemo, useState } from 'react';
import { BasicModal, Box, Text, Icon, Spinner } from '@interchain-ui/react';
import { useChain } from '@cosmos-kit/react';

import { useStoredCodes } from '@/hooks';
import { PermissionTag } from './PermissionTag';
import { Table, CustomThemeProvider, CodeInfo } from '@/components';
import { useChainStore } from '@/contexts';
import {
  filterCodeByPermission,
  filterCodeBySearch,
  shortenAddress,
} from '@/utils';
import { PermissionValue, StoredCodesFilter } from './StoredCodesFilter';
import { EmptyState } from './EmptyState';

type SelectCodeModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onRowSelect: (codeInfo: CodeInfo) => void;
};

export const SelectCodeModal = ({
  isOpen,
  onClose,
  onRowSelect,
}: SelectCodeModalProps) => {
  const [searchValue, setSearchValue] = useState('');
  const [permissionValue, setPermissionValue] =
    useState<PermissionValue>('all');

  const { selectedChain } = useChainStore();
  const { address } = useChain(selectedChain);

  const { data: storedCodes = [], isLoading } = useStoredCodes();

  const filteredCodes = useMemo(() => {
    if (!address) return [];

    return storedCodes
      .filter((code) => filterCodeByPermission(code, address, permissionValue))
      .filter((code) => filterCodeBySearch(code, searchValue));
  }, [storedCodes, searchValue, permissionValue, address]);

  return (
    <BasicModal
      title=""
      isOpen={isOpen}
      onClose={() => {
        onClose();
        setSearchValue('');
        setPermissionValue('all');
      }}
      renderCloseButton={() => null}
    >
      <CustomThemeProvider>
        <Box
          display="flex"
          flexDirection="column"
          gap="20px"
          width="760px"
          px="10px"
          pt="20px"
        >
          <Box display="flex" alignItems="center" mb="10px">
            <Box flex={1} />
            <Text color="$blackAlpha600" fontSize="24px" fontWeight="600">
              Select Code ID
            </Text>
            <Box
              flex={1}
              display="flex"
              justifyContent="end"
              attributes={{ onClick: onClose }}
              cursor="pointer"
            >
              <Icon name="close" size="$5xl" color="$blackAlpha500" />
            </Box>
          </Box>
          <StoredCodesFilter
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            permissionValue={permissionValue}
            setPermissionValue={setPermissionValue}
          />
          <Text fontSize="16px" fontWeight="600" attributes={{ mb: '-20px' }}>
            My Stored Codes
          </Text>
          <Box
            minHeight="260px"
            maxHeight="350px"
            overflowY="auto"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {!address ? (
              <EmptyState text="Connect wallet to see your previously stored codes." />
            ) : isLoading ? (
              <Spinner size="$6xl" color="$blackAlpha600" />
            ) : storedCodes.length === 0 ? (
              <EmptyState text="No codes found" />
            ) : filteredCodes.length === 0 ? (
              <EmptyState text="No matched codes found" />
            ) : (
              <Box width="$full" alignSelf="start">
                <Table>
                  <Table.Header>
                    <Table.Row height="$fit">
                      <Table.HeaderCell width="10%">Code</Table.HeaderCell>
                      <Table.HeaderCell width="20%">Code Name</Table.HeaderCell>
                      <Table.HeaderCell width="10%">Uploader</Table.HeaderCell>
                      <Table.HeaderCell width="6%">Permission</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {filteredCodes.map((code) => (
                      <Table.Row
                        key={code.id}
                        hasHover
                        attributes={{
                          onClick: () => {
                            onRowSelect(code);
                            onClose();
                          },
                        }}
                      >
                        <Table.Cell>{code.id}</Table.Cell>
                        <Table.Cell>{code.name || 'Untitled Name'}</Table.Cell>
                        <Table.Cell color="$blackAlpha500" fontWeight="500">
                          {code.uploader === address
                            ? 'Me'
                            : shortenAddress(code.uploader)}
                        </Table.Cell>
                        <Table.Cell>
                          <PermissionTag permission={code.permission} />
                        </Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table>
              </Box>
            )}
          </Box>
        </Box>
      </CustomThemeProvider>
    </BasicModal>
  );
};
