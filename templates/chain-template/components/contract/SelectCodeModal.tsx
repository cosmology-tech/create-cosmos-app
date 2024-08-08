import { useEffect, useState } from 'react';
import {
  BasicModal,
  Box,
  Popover,
  PopoverContent,
  PopoverTrigger,
  SelectButton,
  Text,
  TextField,
  Icon,
} from '@interchain-ui/react';
import { useChain } from '@cosmos-kit/react';
import { CodeInfoResponse } from 'interchain-query/cosmwasm/wasm/v1/query';

import { useDetectBreakpoints, useStoredCodes } from '@/hooks';
import { PermissionTag } from './PermissionTag';
import { Table, CustomThemeProvider } from '@/components';
import { codeStore, useChainStore } from '@/contexts';
import { shortenAddress } from '@/utils';

type PermissionValue = 'all' | 'without-proposal' | 'with-proposal';

interface PermissionOption {
  label: string;
  value: PermissionValue;
}

const permissionOptions: PermissionOption[] = [
  {
    label: 'All',
    value: 'all',
  },
  {
    label: 'Can Instantiate without proposal',
    value: 'without-proposal',
  },
  {
    label: 'Instantiate through proposal only',
    value: 'with-proposal',
  },
];

type SelectCodeModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onRowSelect: (codeInfo: CodeInfoResponse) => void;
};

export const SelectCodeModal = ({
  isOpen,
  onClose,
  onRowSelect,
}: SelectCodeModalProps) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const { isMobile } = useDetectBreakpoints();
  const [permissionOption, setPermissionOption] = useState<PermissionOption>(
    permissionOptions[0]
  );
  const [elemRef, setElemRef] = useState<HTMLDivElement>();

  const { selectedChain } = useChainStore();
  const { address } = useChain(selectedChain);

  const { data: storedCodes = [], refetch } = useStoredCodes();

  useEffect(() => {
    if (isOpen) refetch();
  }, [isOpen]);

  return (
    <BasicModal
      title=""
      isOpen={isOpen}
      onClose={onClose}
      renderCloseButton={() => null}
    >
      <CustomThemeProvider>
        <Box
          display="flex"
          flexDirection="column"
          gap="20px"
          width="760px"
          minHeight="450px"
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
          <Box display="flex" justifyContent="space-between" gap="20px">
            <Box flex={1}>
              <Text
                fontSize="16px"
                fontWeight="600"
                attributes={{ mb: '10px' }}
              >
                Search
              </Text>
              <TextField
                id="search"
                value=""
                placeholder="Search with Code ID or Code Name"
                autoComplete="off"
              />
            </Box>
            <Box flex={1} ref={setElemRef}>
              <Text
                fontSize="16px"
                fontWeight="600"
                attributes={{ mb: '10px' }}
              >
                Filter by Instantiate Permission
              </Text>
              <Popover
                // @ts-ignore
                arrowRef={undefined}
                triggerType="click"
                placement={isMobile ? 'bottom-start' : 'bottom'}
                offset={{ mainAxis: 10 }}
                isOpen={isPopoverOpen}
                setIsOpen={setIsPopoverOpen}
              >
                <PopoverTrigger>
                  <SelectButton
                    onClick={() => {}}
                    placeholder={permissionOption.label}
                    _css={{ width: `${elemRef?.offsetWidth}px` }}
                  />
                </PopoverTrigger>
                <PopoverContent showArrow={false}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    width={`${elemRef?.offsetWidth}px`}
                    py="10px"
                    bg="$white"
                    borderRadius="4px"
                    boxShadow="0px 4px 20px 0px rgba(0, 0, 0, 0.1)"
                    maxHeight="220px"
                    overflowY="auto"
                  >
                    {permissionOptions.map((p) => (
                      <CustomOption
                        key={p.value}
                        onClick={() => {
                          setPermissionOption(p);
                          setIsPopoverOpen(false);
                        }}
                      >
                        {p.label}
                      </CustomOption>
                    ))}
                  </Box>
                </PopoverContent>
              </Popover>
            </Box>
          </Box>
          <Text fontSize="16px" fontWeight="600" attributes={{ mb: '-20px' }}>
            My Stored Codes
          </Text>
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
              {storedCodes.map((code) => (
                <Table.Row
                  key={Number(code.codeId)}
                  hasHover
                  attributes={{
                    onClick: () => {
                      onRowSelect(code);
                      onClose();
                    },
                  }}
                >
                  <Table.Cell>{Number(code.codeId)}</Table.Cell>
                  <Table.Cell>
                    {codeStore.getCodeName(Number(code.codeId)) ||
                      'Untitled Name'}
                  </Table.Cell>
                  <Table.Cell color="$blackAlpha500" fontWeight="500">
                    {code.creator === address
                      ? 'Me'
                      : shortenAddress(code.creator)}
                  </Table.Cell>
                  <Table.Cell>
                    <PermissionTag
                      permission={code.instantiatePermission?.permission!}
                    />
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Box>
      </CustomThemeProvider>
    </BasicModal>
  );
};

const CustomOption = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <Box
      display="flex"
      gap="10px"
      alignItems="center"
      minHeight="40px"
      px="20px"
      cursor="pointer"
      bg={{
        hover: '$blackAlpha100',
        base: '$white',
      }}
      attributes={{ onClick }}
    >
      <Text
        fontSize="16px"
        fontWeight="500"
        attributes={{
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        }}
      >
        {children}
      </Text>
    </Box>
  );
};
