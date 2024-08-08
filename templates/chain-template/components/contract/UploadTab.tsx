import { useEffect, useState } from 'react';
import { Box, Divider, Text, TextField } from '@interchain-ui/react';
import { useChain } from '@cosmos-kit/react';
import { AccessType } from 'interchain-query/cosmwasm/wasm/v1/types';

import { FileUpload } from './FileUpload';
import { Button } from '../common';
import { TxInfoItem, TxSuccessCard } from './TxSuccessCard';
import {
  convWasmFileToCodeHash,
  formatTxFee,
  PrettyTxResult,
  shortenAddress,
} from '@/utils';
import { codeStore, useChainStore } from '@/contexts';
import { InputField } from './InputField';
import {
  Address,
  InstantiatePermissionRadio,
  Permission,
} from './InstantiatePermissionRadio';
import { useStoreCodeTx, useStoredCodes } from '@/hooks';

export interface CodeInfo {
  id: number;
  name: string;
  uploader: string;
  permission: AccessType;
}

type UploadTabProps = {
  show: boolean;
  switchTab: (codeInfo: CodeInfo) => void;
};

export const UploadTab = ({ show, switchTab }: UploadTabProps) => {
  const [wasmFile, setWasmFile] = useState<File | null>(null);
  const [codeName, setCodeName] = useState('');
  const [addresses, setAddresses] = useState<Address[]>([{ value: '' }]);
  const [codeHash, setCodeHash] = useState('');
  const [permission, setPermission] = useState<Permission>(
    AccessType.ACCESS_TYPE_EVERYBODY
  );

  const [isLoading, setIsLoading] = useState(false);
  const [txResult, setTxResult] = useState<PrettyTxResult>();

  const { selectedChain } = useChainStore();
  const { address, assets } = useChain(selectedChain);
  const { storeCodeTx } = useStoreCodeTx(selectedChain);
  const { refetch: updateStoredCodes } = useStoredCodes();

  useEffect(() => {
    const getCodeHash = async () => {
      const hash = await convWasmFileToCodeHash(wasmFile);
      setCodeHash(hash);
    };

    getCodeHash();
  }, [wasmFile]);

  const handleUpload = () => {
    if (!address || !wasmFile) return;

    setIsLoading(true);

    storeCodeTx({
      wasmFile,
      permission,
      codeName,
      addresses: addresses.map((addr) => addr.value),
      onTxFailed() {
        setIsLoading(false);
      },
      onTxSucceed(txResult) {
        setIsLoading(false);
        setTxResult(txResult);
        updateStoredCodes();
        if (codeName) {
          codeStore.updateCodeName({
            id: Number(txResult.codeId),
            name: codeName,
          });
        }
      },
    });
  };

  const resetStates = () => {
    setWasmFile(null);
    setCodeName('');
    setAddresses([{ value: '' }]);
    setPermission(AccessType.ACCESS_TYPE_EVERYBODY);
    setTxResult(undefined);
  };

  const isAddressesValid =
    permission === AccessType.ACCESS_TYPE_ANY_OF_ADDRESSES
      ? addresses.every((addr) => addr.isValid)
      : true;

  const isButtonDisabled = !address || !wasmFile || !isAddressesValid;

  if (txResult) {
    const infoItems: TxInfoItem[] = [
      {
        label: 'Code ID',
        displayValue: txResult.codeId,
      },
      {
        label: 'Tx Hash',
        displayValue: shortenAddress(txResult.txHash),
        actualValue: txResult.txHash,
      },
      {
        label: 'Tx Fee',
        displayValue: formatTxFee(txResult.txFee, assets!),
        allowCopy: false,
      },
    ];

    return (
      <TxSuccessCard
        title="Contract uploaded!"
        description={`"${txResult.codeDisplayName}" has been uploaded.`}
        infoItems={infoItems}
        show={show}
        footer={
          <Box width="$full">
            <Button
              variant="primary"
              width="$full"
              mb="10px"
              onClick={() => {
                if (address) {
                  switchTab({
                    id: Number(txResult.codeId),
                    uploader: address,
                    permission,
                    name: codeName,
                  });
                }
              }}
            >
              Instantiate
            </Button>
            <Button variant="text" width="$full" onClick={resetStates}>
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
        <TextField
          id="code_name"
          value={codeName}
          onChange={(e) => setCodeName(e.target.value)}
          autoComplete="off"
        />
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

      <Button
        variant="primary"
        disabled={isButtonDisabled}
        onClick={handleUpload}
        isLoading={isLoading}
        width="$full"
      >
        Upload
      </Button>
    </Box>
  );
};
