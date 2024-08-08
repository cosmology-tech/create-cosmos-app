import { useState } from 'react';
import {
  Box,
  Popover,
  PopoverContent,
  PopoverTrigger,
  SelectButton,
  Text,
  TextField,
} from '@interchain-ui/react';

import { useDetectBreakpoints } from '@/hooks';

export type PermissionValue = 'all' | 'without-proposal' | 'with-proposal';

export interface PermissionOption {
  label: string;
  value: PermissionValue;
}

export const permissionOptions: PermissionOption[] = [
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

type StoredCodesFilterProps = {
  searchValue: string;
  setSearchValue: (value: string) => void;
  permissionValue: PermissionValue;
  setPermissionValue: (value: PermissionValue) => void;
};

export const StoredCodesFilter = ({
  searchValue,
  setSearchValue,
  permissionValue,
  setPermissionValue,
}: StoredCodesFilterProps) => {
  const [elemRef, setElemRef] = useState<HTMLDivElement>();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const { isMobile } = useDetectBreakpoints();

  const permissionOption = permissionOptions.find(
    (p) => p.value === permissionValue
  )!;

  return (
    <Box display="flex" justifyContent="space-between" gap="20px">
      <Box flex={1}>
        <Text fontSize="16px" fontWeight="600" attributes={{ mb: '10px' }}>
          Search
        </Text>
        <TextField
          id="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search with Code ID or Code Name"
          autoComplete="off"
        />
      </Box>
      <Box flex={1} ref={setElemRef}>
        <Text fontSize="16px" fontWeight="600" attributes={{ mb: '10px' }}>
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
                    setPermissionValue(p.value);
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
