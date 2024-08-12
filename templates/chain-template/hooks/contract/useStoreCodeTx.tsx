import { useChain } from '@cosmos-kit/react';
import { AccessType } from 'interchain-query/cosmwasm/wasm/v1/types';
import { cosmwasm } from 'interchain-query';
import { gzip } from 'node-gzip';
import { StdFee } from '@cosmjs/amino';
import { Box } from '@interchain-ui/react';

import { useToast } from '../common';
import { prettyStoreCodeTxResult, PrettyTxResult } from '@/utils';
import { CodeInfo } from '@/components';

const { storeCode } = cosmwasm.wasm.v1.MessageComposer.fromPartial;

type StoreCodeTxParams = {
  wasmFile: File;
  permission: AccessType;
  addresses: string[];
  codeName: string;
  onTxSucceed?: (txResult: PrettyTxResult, codeInfo: CodeInfo) => void;
  onTxFailed?: () => void;
};

export const useStoreCodeTx = (chainName: string) => {
  const { getSigningCosmWasmClient, address } = useChain(chainName);
  const { toast } = useToast();

  const storeCodeTx = async ({
    wasmFile,
    permission,
    addresses,
    codeName,
    onTxSucceed = () => {},
    onTxFailed = () => {},
  }: StoreCodeTxParams) => {
    if (!address) return;

    const toastId = toast({
      title: 'Sending Transaction',
      type: 'loading',
      duration: 999999,
    });

    const wasmCode = await wasmFile.arrayBuffer();
    const wasmByteCode = await gzip(new Uint8Array(wasmCode));

    const message = storeCode({
      sender: address,
      wasmByteCode,
      instantiatePermission: {
        permission,
        addresses,
      },
    });

    const fee: StdFee = { amount: [], gas: '5800000' };

    try {
      const client = await getSigningCosmWasmClient();
      const result = await client.signAndBroadcast(address, [message], fee);
      const txResult = prettyStoreCodeTxResult(result, codeName, wasmFile.name);
      onTxSucceed(txResult, {
        id: Number(txResult.codeId),
        name: codeName,
        uploader: address,
        permission,
        addresses,
      });
      toast.close(toastId);
      toast({
        title: 'Contract uploaded successfully',
        type: 'success',
      });
    } catch (error: any) {
      console.error('Failed to upload contract:', error);
      onTxFailed();
      toast.close(toastId);
      toast({
        title: 'Transaction Failed',
        type: 'error',
        description: (
          <Box width="300px" wordBreak="break-all">
            {error.message}
          </Box>
        ),
        duration: 10000,
      });
    }
  };

  return { storeCodeTx };
};
