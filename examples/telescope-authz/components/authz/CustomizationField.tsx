import { Permission, PermissionId } from '@/configs';
import { NumberField } from '@interchain-ui/react';

/* --------------SendCustomization-------------- */

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

/* ------------DelegateCustomization------------ */

type DelegateCustomizationProps = {
  value: number | undefined;
  onChange: (value: string) => void;
};

const DelegateCustomization = ({
  value,
  onChange,
}: DelegateCustomizationProps) => {
  return (
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
  );
};

/* --------------CustomizationField------------- */

type CustomizationFieldProps =
  | {
      permissionType: typeof Permission['Send'];
      inputProps: SendCustomizationProps;
    }
  | {
      permissionType: typeof Permission['Delegate'];
      inputProps: DelegateCustomizationProps;
    }
  | {
      permissionType: PermissionId;
      inputProps?: never;
    };

export const CustomizationField = ({
  permissionType,
  inputProps,
}: CustomizationFieldProps): JSX.Element | null => {
  const fields: Partial<Record<PermissionId, JSX.Element | null>> = {
    send:
      permissionType === 'send' ? (
        <SendCustomization {...(inputProps as SendCustomizationProps)} />
      ) : null,
    delegate:
      permissionType === 'delegate' ? (
        <DelegateCustomization
          {...(inputProps as DelegateCustomizationProps)}
        />
      ) : null,
  };

  return fields[permissionType] ?? null;
};
