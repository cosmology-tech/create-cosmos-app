import { useEffect, useState } from 'react';
import { Box, Divider, Text, TextField } from '@interchain-ui/react';
import { useChain } from '@cosmos-kit/react';

import { FileUpload } from './FileUpload';
import { Button } from '../common';
import { TxInfoItem, TxSuccessCard } from './TxSuccessCard';
import { convWasmFileToCodeHash } from '@/utils';
import { useChainStore } from '@/contexts';
import { InputField } from './InputField';
import {
  AccessType,
  Address,
  InstantiatePermissionRadio,
  Permission,
} from './InstantiatePermissionRadio';

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

type UploadTabProps = {
  show: boolean;
};

export const UploadTab = ({ show }: UploadTabProps) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [wasmFile, setWasmFile] = useState<File | null>(null);
  const [addresses, setAddresses] = useState<Address[]>([{ value: '' }]);
  const [codeHash, setCodeHash] = useState('');
  const [permission, setPermission] = useState<Permission>(
    AccessType.ACCESS_TYPE_EVERYBODY
  );

  const { selectedChain } = useChainStore();
  const { chain } = useChain(selectedChain);

  useEffect(() => {
    const getCodeHash = async () => {
      const hash = await convWasmFileToCodeHash(wasmFile);
      setCodeHash(hash);
    };

    getCodeHash();
  }, [wasmFile]);

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

      <InputField title="Upload Wasm File">
        <FileUpload file={wasmFile} setFile={setWasmFile} />
      </InputField>

      <InputField title="Code Hash">
        <TextField id="code_hash" value={codeHash} readonly />
      </InputField>

      <InputField title="Code Name (Optional)">
        <TextField id="code_name" value="" />
        <InputField.Description>
          A short description of what your code does. This is stored locally on
          your device and can be added or changed later.
        </InputField.Description>
      </InputField>

      <Divider opacity="0.4" />

      <InputField title="Instantiate Permission">
        <InputField.Description>
          Specify who has the authority to instantiate the contract using this
          code
        </InputField.Description>
        <InstantiatePermissionRadio
          addresses={addresses}
          permission={permission}
          setAddresses={setAddresses}
          setPermission={setPermission}
        />
      </InputField>

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
