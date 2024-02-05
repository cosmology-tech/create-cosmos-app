import { Dispatch, SetStateAction, useMemo } from 'react';
import {
  BasicModal,
  Box,
  Button,
  GridColumn,
  Spinner,
  Text,
  ValidatorList,
  ValidatorNameCell,
} from '@interchain-ui/react';

import { useValidators } from '@/hooks';
import { ExtendedValidator as Validator } from '@/utils';

type SelectValidatorsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  chainName: string;
  allowList: string[];
  denyList: string[];
  setAllowList: Dispatch<SetStateAction<string[]>>;
  setDenyList: Dispatch<SetStateAction<string[]>>;
};

export const SelectValidatorsModal = ({
  isOpen,
  onClose,
  chainName,
  allowList,
  denyList,
  setAllowList,
  setDenyList,
}: SelectValidatorsModalProps) => {
  const { data, isLoading } = useValidators(chainName);

  const handleChoiceClick =
    (validator: Validator, onListChange: typeof setAllowList) => () => {
      onListChange((prev) => [...prev, validator.address]);
    };

  const handleCancelClick =
    (validator: Validator, onListChange: typeof setAllowList) => () => {
      onListChange((prev) =>
        prev.filter((address) => address !== validator.address)
      );
    };

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
            pr="$4"
          >
            {allowList.includes(validator.address) ? (
              <Button
                size="sm"
                intent="success"
                onClick={handleCancelClick(validator, setAllowList)}
                rightIcon="close"
                iconSize="$xl"
              >
                Allowed
              </Button>
            ) : denyList.includes(validator.address) ? (
              <Button
                size="sm"
                intent="danger"
                onClick={handleCancelClick(validator, setDenyList)}
                rightIcon="close"
                iconSize="$xl"
              >
                Denied
              </Button>
            ) : (
              <>
                <Button
                  size="sm"
                  intent="text"
                  onClick={handleChoiceClick(validator, setAllowList)}
                >
                  Allow
                </Button>
                <Button
                  size="sm"
                  intent="text"
                  onClick={handleChoiceClick(validator, setDenyList)}
                >
                  Deny
                </Button>
              </>
            )}
          </Box>
        ),
      },
    ];
  }, [chainName, allowList, denyList]);

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
