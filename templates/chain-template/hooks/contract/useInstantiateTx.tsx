import { Box } from '@interchain-ui/react';
import { useChain } from '@cosmos-kit/react';
import { Coin, StdFee } from '@cosmjs/amino';
import { InstantiateResult } from '@cosmjs/cosmwasm-stargate';

import { useToast } from '../common';

interface InstantiateTxParams {
  address: string;
  codeId: number;
  initMsg: object;
  label: string;
  admin: string;
  funds: Coin[];
  onTxSucceed?: (txInfo: InstantiateResult) => void;
  onTxFailed?: () => void;
}

export const useInstantiateTx = (chainName: string) => {
  const { getSigningCosmWasmClient } = useChain(chainName);

  const instantiateTx = async ({
    address,
    codeId,
    initMsg,
    label,
    admin,
    funds,
    onTxSucceed = () => {},
    onTxFailed = () => {},
  }: InstantiateTxParams) => {
    const client = await getSigningCosmWasmClient();
    const { toast } = useToast();

    const toastId = toast({
      title: 'Sending Transaction',
      type: 'loading',
      duration: 999999,
    });

    const fee: StdFee = {
      amount: [],
      gas: '300000',
    };

    try {
      const result = await client.instantiate(
        address,
        codeId,
        initMsg,
        label,
        fee,
        {
          admin,
          funds,
        }
      );
      onTxSucceed(result);
      toast.close(toastId);
      toast({
        title: 'Instantiate Success',
        type: 'success',
      });
    } catch (e: any) {
      console.error(e);
      onTxFailed();
      toast.close(toastId);
      toast({
        title: 'Transaction Failed',
        type: 'error',
        description: (
          <Box width="300px" wordBreak="break-all">
            {e.message}
          </Box>
        ),
        duration: 10000,
      });
    }
  };

  return { instantiateTx };
};
