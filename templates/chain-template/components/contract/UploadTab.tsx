import { useEffect, useState } from 'react';
import { Box, Divider, Text, TextField } from '@interchain-ui/react';
import { HiOutlineTrash } from 'react-icons/hi';
import { LuPlus } from 'react-icons/lu';

import { FileUpload } from './FileUpload';
import { Button, Radio, RadioGroup } from '../common';
import { TxInfoItem, TxSuccessCard } from './TxSuccessCard';
import { convWasmFileToCodeHash } from '@/utils';

const infoItems: TxInfoItem[] = [
  {
    label: 'Code ID',
    displayValue: '9867',
  },
  {
    label: 'Tx Hash',
    displayValue: '6BAB30...9EAEB1',
    actualValue: '6BAB30F3BAF3CD1AS3',
  },
  {
    label: 'Tx Fee',
    displayValue: '0.143698 OSMO',
    allowCopy: false,
  },
];

type InstantiatePermission = 'everybody' | 'nobody' | 'any_of_addresses';

type UploadTabProps = {
  show: boolean;
};

export const UploadTab = ({ show }: UploadTabProps) => {
  const [wasmFile, setWasmFile] = useState<File | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [instantiatePermission, setInstantiatePermission] =
    useState<InstantiatePermission>('everybody');
  const [addresses, setAddresses] = useState<{ value: string; id: number }[]>([
    {
      value: '',
      id: Date.now(),
    },
  ]);
  const [codeHash, setCodeHash] = useState('');

  useEffect(() => {
    const getCodeHash = async () => {
      const hash = await convWasmFileToCodeHash(wasmFile);
      setCodeHash(hash);
    };

    getCodeHash();
  }, [wasmFile]);

  const onAddAddress = () => {
    setAddresses([
      ...addresses,
      {
        value: '',
        id: Date.now(),
      },
    ]);
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

  if (isSuccess) {
    return (
      <TxSuccessCard
        title="Contract uploaded!"
        description="‘cw20_base.wasm(9867)’ has been uploaded."
        infoItems={infoItems}
        footer={
          <Box width="$full">
            <Button variant="primary" width="$full" mb="10px">
              Instantiate
            </Button>
            <Button
              variant="outline"
              width="$full"
              onClick={() => setIsSuccess(false)}
            >
              Upload New Contract
            </Button>
          </Box>
        }
      />
    );
  }

  return (
    <Box
      display={show ? 'flex' : 'none'}
      mt="40px"
      maxWidth="560px"
      mx="auto"
      flexDirection="column"
      gap="20px"
    >
      <Text
        fontSize="24px"
        fontWeight="500"
        color="$blackAlpha600"
        textAlign="center"
      >
        Upload Contract
      </Text>

      <Field title="Upload Wasm File">
        <FileUpload file={wasmFile} setFile={setWasmFile} />
      </Field>

      <Field title="Code Hash">
        <TextField id="code_hash" value={codeHash} readonly />
      </Field>

      <Field title="Code Name (Optional)">
        <TextField id="code_name" value="" />
        <FieldDescription>
          A short description of what your code does. This is stored locally on
          your device and can be added or changed later.
        </FieldDescription>
      </Field>

      <Divider opacity="0.4" />

      <Field title="Instantiate Permission">
        <FieldDescription>
          Specify who has the authority to instantiate the contract using this
          code
        </FieldDescription>

        <RadioGroup
          name="instantiate_permission"
          value={instantiatePermission}
          onChange={(val) => {
            setInstantiatePermission(val as InstantiatePermission);
          }}
        >
          <Radio value="everybody">Anyone can instantiate (Everybody)</Radio>
          <Radio value="nobody">
            Instantiate through governance only (Nobody)
          </Radio>
          <Radio value="any_of_addresses">
            Only a set of addresses can instantiate (AnyOfAddresses)
          </Radio>
        </RadioGroup>

        {instantiatePermission === 'any_of_addresses' && (
          <Field title="Addresses">
            {addresses.map((address, index) => (
              <Box display="flex" gap="10px" key={address.id}>
                <TextField
                  id={`address-${index}`}
                  value={address.value}
                  onChange={(e) => onAddressChange(e.target.value, index)}
                  attributes={{ width: '100%' }}
                />
                <Button
                  leftIcon={<HiOutlineTrash size="18px" />}
                  px="10px"
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
              Add More Address
            </Button>
          </Field>
        )}
      </Field>

      <Divider opacity="0.4" />

      <Text color="$purple600" fontSize="16px" fontWeight="500">
        Transaction Fee: --
      </Text>

      <Button variant="primary" onClick={() => setIsSuccess(true)}>
        Upload
      </Button>
    </Box>
  );
};

const Field = ({
  children,
  title,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <Box display="flex" flexDirection="column" gap="10px">
      <Text color="$blackAlpha600" fontSize="16px" fontWeight="700">
        {title}
      </Text>
      {children}
    </Box>
  );
};

const FieldDescription = ({ children }: { children: string }) => {
  return (
    <Text color="$blackAlpha500" fontSize="12px" fontWeight="500">
      {children}
    </Text>
  );
};
