import { useState } from 'react';
import { Box, Text } from '@interchain-ui/react';
import { AccessType } from 'interchain-query/cosmwasm/wasm/v1/types';
import { useChain } from '@cosmos-kit/react';

import { InputField } from './InputField';
import { WasmFileUploader } from './WasmFileUploader';
import {
  Address,
  Permission,
  InstantiatePermissionRadio,
} from './InstantiatePermissionRadio';
import { Button } from '../common';
import { useChainStore } from '@/contexts';
import { useDetectBreakpoints, useStoreCodeTx } from '@/hooks';

type UploadContractProps = {
  show: boolean;
  onSuccess?: (codeId: string) => void;
};

export const UploadContract = ({ show, onSuccess }: UploadContractProps) => {
  const [wasmFile, setWasmFile] = useState<File | null>(null);
  const [addresses, setAddresses] = useState<Address[]>([{ value: '' }]);
  const [permission, setPermission] = useState<Permission>(
    AccessType.ACCESS_TYPE_EVERYBODY,
  );
  const [isLoading, setIsLoading] = useState(false);

  const { selectedChain } = useChainStore();
  const { address } = useChain(selectedChain);
  const { storeCodeTx } = useStoreCodeTx(selectedChain);

  const resetStates = () => {
    setWasmFile(null);
    setAddresses([{ value: '' }]);
    setPermission(AccessType.ACCESS_TYPE_EVERYBODY);
  };

  const handleUpload = () => {
    if (!address || !wasmFile) return;

    setIsLoading(true);

    storeCodeTx({
      wasmFile,
      permission,
      addresses: addresses.map((addr) => addr.value),
      onTxFailed() {
        setIsLoading(false);
      },
      onTxSucceed(codeId) {
        setIsLoading(false);
        onSuccess?.(codeId);
        resetStates();
      },
    });
  };

  const isAddressesValid =
    permission === AccessType.ACCESS_TYPE_ANY_OF_ADDRESSES
      ? addresses.every((addr) => addr.isValid)
      : true;

  const isButtonDisabled = !address || !wasmFile || !isAddressesValid;

  const { isMobile } = useDetectBreakpoints();

  return (
    <Box
      display={show ? 'flex' : 'none'}
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
      <InputField title="Contract File" required>
        <WasmFileUploader file={wasmFile} setFile={setWasmFile} />
      </InputField>
      <InputField title="Instantiate Permission" required>
        <InstantiatePermissionRadio
          direction={isMobile ? 'column' : 'row'}
          addresses={addresses}
          permission={permission}
          setAddresses={setAddresses}
          setPermission={setPermission}
        />
      </InputField>
      <Button
        variant="primary"
        disabled={isButtonDisabled}
        onClick={handleUpload}
        isLoading={isLoading}
        mx="auto"
      >
        Upload
      </Button>
    </Box>
  );
};
