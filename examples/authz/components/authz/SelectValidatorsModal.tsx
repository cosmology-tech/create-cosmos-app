// TODO fix type issues
// @ts-nocheck

import { Dispatch, SetStateAction, useMemo, useState } from 'react';
import {
  BasicModal,
  Box,
  Button,
  GovernanceRadio,
  GovernanceRadioGroup,
  GridColumn,
  Spinner,
  Stack,
  Text,
  ValidatorList,
  ValidatorNameCell,
} from '@interchain-ui/react';

import { useValidators } from '@/hooks';
import { ExtendedValidator as Validator } from '@/utils';
import { AccessList } from './GrantModal';

type SelectValidatorsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  chainName: string;
  accessList: AccessList;
  setAccessList: Dispatch<SetStateAction<AccessList>>;
};

type ListType = 'allowList' | 'denyList';

export const SelectValidatorsModal = ({
  isOpen,
  onClose,
  chainName,
  accessList,
  setAccessList,
}: SelectValidatorsModalProps) => {
  const { data, isLoading } = useValidators(chainName);
  const listType = accessList.type;

  const columns: GridColumn[] = useMemo(() => {
    return [
      {
        id: 'validator',
        label: 'Validator',
        width: '196px',
        align: 'left',
        render: (validator: Validator) => (
          <ValidatorNameCell
            validatorName={validator.name}
            validatorImg={validator.logo}
          />
        ),
      },
      {
        id: 'action',
        width: '126px',
        align: 'right',
        render: (validator: Validator) => (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            gap="$5"
            pr="$6"
          >
            {accessList.addresses.includes(validator.address) ? (
              <Button
                size="sm"
                intent={listType === 'allowList' ? 'success' : 'danger'}
                onClick={() => {
                  setAccessList((prev) => ({
                    ...prev,
                    addresses: prev.addresses.filter(
                      (address) => address !== validator.address
                    ),
                  }));
                }}
                rightIcon="close"
                iconSize="$xl"
              >
                {listType === 'allowList' ? 'Allowed' : 'Denied'}
              </Button>
            ) : (
              <>
                <Button
                  size="sm"
                  intent="text"
                  onClick={() => {
                    setAccessList((prev) => ({
                      ...prev,
                      addresses: [...prev.addresses, validator.address],
                    }));
                  }}
                >
                  {listType === 'allowList' ? 'Allow' : 'Deny'}
                </Button>
              </>
            )}
          </Box>
        ),
      },
    ];
  }, [chainName, accessList]);

  return (
    <BasicModal title="Select Validators" isOpen={isOpen} onClose={onClose}>
      <Box
        width={{ mobile: '100%', tablet: '$containerSm' }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="$30"
        maxHeight="640px"
        overflowY="auto"
        mb="$8"
      >
        {isLoading ? (
          <Spinner size="$6xl" />
        ) : data && data.length > 0 ? (
          <Box width="$full" alignSelf="flex-start">
            <Box
              display="flex"
              justifyContent="center"
              transform="scale(0.86)"
              my="$6"
            >
              <GovernanceRadioGroup
                value={listType}
                defaultValue="allowList"
                onChange={(selected) => {
                  setAccessList((prev) => ({
                    ...prev,
                    type: selected as ListType,
                  }));
                }}
              >
                <Stack direction="horizontal" space="$8">
                  <GovernanceRadio value="allowList">
                    Allow List
                  </GovernanceRadio>
                  <GovernanceRadio value="denyList">Deny List</GovernanceRadio>
                </Stack>
              </GovernanceRadioGroup>
            </Box>

            <ValidatorList
              data={data}
              columns={columns}
              variant="ghost"
              tableProps={{ width: '$full' }}
            />
          </Box>
        ) : (
          <Text color="$textSecondary" fontSize="$lg" fontWeight="$semibold">
            No Validators Found
          </Text>
        )}
      </Box>
    </BasicModal>
  );
};
