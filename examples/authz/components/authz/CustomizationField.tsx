// TODO fix type issues
// @ts-nocheck

import { Dispatch, SetStateAction, useState } from 'react';
import { Box, NumberField, SelectButton, Text } from '@interchain-ui/react';

import { useValidators } from '@/hooks';
import { Permission, PermissionId } from '@/configs';
import { SelectValidatorsModal } from './SelectValidatorsModal';
import { AccessList } from './GrantModal';

// ==============================================

type SendCustomizationProps = {
  value: number | undefined;
  onChange: (value: string) => void;
};

const SendCustomization = ({ value, onChange }: SendCustomizationProps) => {
  return (
    <NumberField
      placeholder="Spend Limit (Optional)"
      value={value}
      onInput={(e) => {
        // @ts-ignore
        onChange(e.target.value);
      }}
      formatOptions={{
        maximumFractionDigits: 6,
      }}
    />
  );
};

// ==============================================

type DelegateCustomizationProps = {
  value: number | undefined;
  onChange: (value: string) => void;
  chainName: string;
  accessList: AccessList;
  setAccessList: Dispatch<SetStateAction<AccessList>>;
};

const DelegateCustomization = ({
  value,
  onChange,
  chainName,
  accessList,
  setAccessList,
}: DelegateCustomizationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { data } = useValidators(chainName);

  const validatorNames = data
    ? accessList.addresses.map(
        (address) => data.find((v) => v.address === address)!.name
      )
    : [];

  return (
    <>
      <NumberField
        placeholder="Max Tokens (Optional)"
        value={value}
        onInput={(e) => {
          // @ts-ignore
          onChange(e.target.value);
        }}
        formatOptions={{
          maximumFractionDigits: 6,
        }}
      />
      <SelectButton
        placeholder="Select Validators (Optional)"
        onClick={() => setIsOpen(true)}
      />
      <Box
        display={validatorNames.length > 0 ? 'block' : 'none'}
        mt="$2"
        px="$2"
      >
        <Text>
          <Text
            as="span"
            fontWeight="$semibold"
            color={
              accessList.type === 'allowList' ? '$textSuccess' : '$textDanger'
            }
          >
            {accessList.type === 'allowList' ? 'Allow List' : 'Deny List'}
            :&nbsp;
          </Text>
          {validatorNames.join(', ')}
        </Text>
      </Box>
      <SelectValidatorsModal
        chainName={chainName}
        accessList={accessList}
        setAccessList={setAccessList}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

// ==============================================

type CustomizationFieldProps =
  | ({
      permissionType: typeof Permission['Send'];
    } & SendCustomizationProps)
  | ({
      permissionType: typeof Permission['Delegate'];
    } & DelegateCustomizationProps);

export const CustomizationField = ({
  permissionType,
  ...rest
}: CustomizationFieldProps): JSX.Element | null => {
  const fields: Partial<Record<PermissionId, JSX.Element | null>> = {
    send:
      permissionType === 'send' ? (
        <SendCustomization {...(rest as SendCustomizationProps)} />
      ) : null,
    delegate:
      permissionType === 'delegate' ? (
        <DelegateCustomization {...(rest as DelegateCustomizationProps)} />
      ) : null,
  };

  return fields[permissionType] ?? null;
};
