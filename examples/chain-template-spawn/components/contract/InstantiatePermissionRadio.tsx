import { useEffect } from 'react';
import { Box, Text, TextField } from '@interchain-ui/react';
import { HiOutlineTrash } from 'react-icons/hi';
import { LuPlus } from 'react-icons/lu';
import { cosmwasm } from 'interchain-query';
import { useChain } from '@cosmos-kit/react';
import { GrGroup } from 'react-icons/gr';
import { MdOutlineHowToVote } from 'react-icons/md';
import { MdChecklistRtl } from 'react-icons/md';

import { Button, Radio, RadioGroup } from '../common';
import { InputField } from './InputField';
import { validateChainAddress } from '@/utils';
import { useChainStore } from '@/contexts';

export const AccessType = cosmwasm.wasm.v1.AccessType;

export type Permission = (typeof AccessType)[keyof typeof AccessType];

export type Address = {
  value: string;
  isValid?: boolean;
  errorMsg?: string | null;
};

type Props = {
  addresses: Address[];
  permission: Permission;
  setAddresses: (addresses: Address[]) => void;
  setPermission: (permission: Permission) => void;
  direction?: 'row' | 'column';
};

export const InstantiatePermissionRadio = ({
  addresses,
  permission,
  setAddresses,
  setPermission,
  direction = 'row',
}: Props) => {
  const { selectedChain } = useChainStore();
  const { chain } = useChain(selectedChain);

  const onAddAddress = () => {
    setAddresses([...addresses, { value: '' }]);
  };

  const onDeleteAddress = (index: number) => {
    const newAddresses = [...addresses];
    newAddresses.splice(index, 1);
    setAddresses(newAddresses);
  };

  const onAddressChange = (value: string, index: number) => {
    const newAddresses = [...addresses];
    newAddresses[index].value = value;
    setAddresses(newAddresses);
  };

  useEffect(() => {
    if (permission !== AccessType.ACCESS_TYPE_ANY_OF_ADDRESSES) return;

    const newAddresses = addresses.map((addr, index) => {
      const isDuplicate =
        addresses.findIndex((a) => a.value === addr.value) !== index;

      const errorMsg = isDuplicate
        ? 'Address already exists'
        : validateChainAddress(addr.value, chain.bech32_prefix);

      return {
        ...addr,
        isValid: !!addr.value && !errorMsg,
        errorMsg: addr.value ? errorMsg : null,
      };
    });

    setAddresses(newAddresses);
  }, [JSON.stringify(addresses.map((addr) => addr.value))]);

  return (
    <>
      <RadioGroup
        direction={direction}
        name="instantiate_permission"
        value={permission.toString()}
        onChange={(val) => {
          setPermission(Number(val) as Permission);
        }}
      >
        <Radio
          icon={<GrGroup size="22px" />}
          value={AccessType.ACCESS_TYPE_EVERYBODY.toString()}
        >
          Everybody
        </Radio>
        <Radio
          icon={<MdOutlineHowToVote size="22px" />}
          value={AccessType.ACCESS_TYPE_NOBODY.toString()}
        >
          Governance only
        </Radio>
        <Radio
          icon={<MdChecklistRtl size="22px" />}
          value={AccessType.ACCESS_TYPE_ANY_OF_ADDRESSES.toString()}
        >
          Approved addresses
        </Radio>
      </RadioGroup>

      {permission === AccessType.ACCESS_TYPE_ANY_OF_ADDRESSES && (
        <InputField title="Addresses">
          {addresses.map(({ value, errorMsg }, index) => (
            <Box display="flex" gap="10px" key={index}>
              <Box width="$full">
                <TextField
                  id={`address-${index}`}
                  value={value}
                  onChange={(e) => onAddressChange(e.target.value, index)}
                  attributes={{ width: '100%' }}
                  intent={errorMsg ? 'error' : 'default'}
                  autoComplete="off"
                />
                {errorMsg && (
                  <Text
                    color="$red600"
                    fontSize="12px"
                    fontWeight="500"
                    wordBreak="break-all"
                    attributes={{ mt: '6px' }}
                  >
                    {errorMsg}
                  </Text>
                )}
              </Box>
              <Button
                leftIcon={<HiOutlineTrash size="18px" />}
                px="10px"
                disabled={addresses.length === 1}
                onClick={() => onDeleteAddress(index)}
              />
            </Box>
          ))}
          <Button
            leftIcon={<LuPlus size="20px" />}
            width="$fit"
            px="10px"
            onClick={onAddAddress}
          >
            New Address
          </Button>
        </InputField>
      )}
    </>
  );
};
