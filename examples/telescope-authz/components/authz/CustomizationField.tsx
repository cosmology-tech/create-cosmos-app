import { Dispatch, SetStateAction, useState } from 'react';
import { Box, NumberField, SelectButton, Text } from '@interchain-ui/react';

import { useValidators } from '@/hooks';
import { Permission, PermissionId } from '@/configs';
import { SelectValidatorsModal } from './SelectValidatorsModal';

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
  allowList: string[];
  denyList: string[];
  setAllowList: Dispatch<SetStateAction<string[]>>;
  setDenyList: Dispatch<SetStateAction<string[]>>;
};

const DelegateCustomization = ({
  value,
  onChange,
  chainName,
  allowList,
  denyList,
  setAllowList,
  setDenyList,
}: DelegateCustomizationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { data } = useValidators(chainName);

  const allowedValidators = data
    ? allowList.map((address) => data.find((v) => v.address === address)!.name)
    : [];

  const deniedValidators = data
    ? denyList.map((address) => data.find((v) => v.address === address)!.name)
    : [];

  const hasAllowedValidators = allowedValidators.length > 0;
  const hasDeniedValidators = deniedValidators.length > 0;

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
        display={hasAllowedValidators || hasDeniedValidators ? 'flex' : 'none'}
        flexDirection="column"
        gap="$4"
        mt="$2"
        px="$2"
      >
        {hasAllowedValidators && (
          <Text>
            <Text as="span" fontWeight="$semibold" color="$textSuccess">
              Allow List:&nbsp;
            </Text>
            {allowedValidators.join(', ')}
          </Text>
        )}
        {hasDeniedValidators && (
          <Text>
            <Text as="span" fontWeight="$semibold" color="$textDanger">
              Deny List:&nbsp;
            </Text>
            {deniedValidators.join(', ')}
          </Text>
        )}
      </Box>
      <SelectValidatorsModal
        chainName={chainName}
        allowList={allowList}
        denyList={denyList}
        setAllowList={setAllowList}
        setDenyList={setDenyList}
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
