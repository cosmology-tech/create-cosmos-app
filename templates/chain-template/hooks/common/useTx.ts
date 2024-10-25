import { cosmos } from 'interchain-query';
import { useChain } from '@cosmos-kit/react';
import { isDeliverTxSuccess, StdFee } from '@cosmjs/stargate';
import { useToast, type CustomToast } from './useToast';

const txRaw = cosmos.tx.v1beta1.TxRaw;

interface Msg {
  typeUrl: string;
  value: any;
}

interface TxOptions {
  fee?: StdFee | null;
  toast?: Partial<CustomToast>;
  onSuccess?: () => void;
}

export enum TxStatus {
  Failed = 'Transaction Failed',
  Successful = 'Transaction Successful',
  Broadcasting = 'Transaction Broadcasting',
}

export const useTx = (chainName: string) => {
  const { address, getSigningStargateClient, estimateFee } =
    useChain(chainName);

  const { toast } = useToast();

  const tx = async (msgs: Msg[], options: TxOptions) => {
    if (!address) {
      toast({
        type: 'error',
        title: 'Wallet not connected',
        description: 'Please connect your wallet',
      });
      return;
    }

    let signed: Parameters<typeof txRaw.encode>['0'];
    let client: Awaited<ReturnType<typeof getSigningStargateClient>>;

    try {
      let fee: StdFee;
      if (options?.fee) {
        fee = options.fee;
        client = await getSigningStargateClient();
      } else {
        const [_fee, _client] = await Promise.all([
          estimateFee(msgs),
          getSigningStargateClient(),
        ]);
        fee = _fee;
        client = _client;
      }
      signed = await client.sign(address, msgs, fee, '');
    } catch (e: any) {
      console.error(e);
      toast({
        title: TxStatus.Failed,
        description: e?.message || 'An unexpected error has occured',
        type: 'error',
      });
      return;
    }

    let broadcastToastId: string | number;

    broadcastToastId = toast({
      title: TxStatus.Broadcasting,
      description: 'Waiting for transaction to be included in the block',
      type: 'loading',
      duration: 999999,
    });

    if (client && signed) {
      await client
        .broadcastTx(Uint8Array.from(txRaw.encode(signed).finish()))
        .then((res: any) => {
          if (isDeliverTxSuccess(res)) {
            if (options.onSuccess) options.onSuccess();

            toast({
              title: options.toast?.title || TxStatus.Successful,
              type: options.toast?.type || 'success',
              description: options.toast?.description,
            });
          } else {
            toast({
              title: TxStatus.Failed,
              description: res?.rawLog,
              type: 'error',
              duration: 10000,
            });
          }
        })
        .catch((err) => {
          toast({
            title: TxStatus.Failed,
            description: err?.message,
            type: 'error',
            duration: 10000,
          });
        })
        .finally(() => toast.close(broadcastToastId));
    } else {
      toast.close(broadcastToastId);
    }
  };

  return { tx };
};
