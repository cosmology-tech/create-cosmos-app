import Link from 'next/link';
import { Coin, StdFee } from '@cosmjs/amino';
import { useChain } from '@cosmos-kit/react';

import { useToast } from '../common';
import { Box, Text, Icon } from '@interchain-ui/react';
import { getExplorerLink } from '@/utils';

interface ExecuteTxParams {
  address: string;
  contractAddress: string;
  fee: StdFee;
  msg: object;
  funds: Coin[];
  onTxSucceed?: () => void;
  onTxFailed?: () => void;
}

export const useExecuteContractTx = (chainName: string) => {
  const { getSigningCosmWasmClient, chain } = useChain(chainName);

  const executeTx = async ({
    address,
    contractAddress,
    fee,
    funds,
    msg,
    onTxFailed = () => {},
    onTxSucceed = () => {},
  }: ExecuteTxParams) => {
    const client = await getSigningCosmWasmClient();
    const { toast } = useToast();

    const toastId = toast({
      title: 'Sending Transaction',
      type: 'loading',
      duration: 999999,
    });

    try {
      const result = await client.execute(
        address,
        contractAddress,
        msg,
        fee,
        undefined,
        funds
      );
      onTxSucceed();
      toast.close(toastId);
      toast({
        title: 'Transaction Successful',
        type: 'success',
        description: (
          <Link
            href={getExplorerLink(chain, result.transactionHash)}
            target="_blank"
          >
            <Box display="flex" gap="6px" alignItems="center" color="$text">
              <Text fontSize="14px">View tx details</Text>
              <Icon name="externalLinkLine" />
            </Box>
          </Link>
        ),
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

  return { executeTx };
};
