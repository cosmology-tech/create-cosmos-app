import { cosmos } from 'osmo-query';
import { isDeliverTxSuccess, StdFee } from '@cosmjs/stargate';
import { toast, ToastShape } from '@interchain-ui/react';
import { useChain } from '@cosmos-kit/react';
import { TxRaw } from 'osmo-query/dist/codegen/cosmos/tx/v1beta1/tx';

interface Msg {
  typeUrl: string;
  value: any;
}

interface TxOptions {
  fee?: StdFee | null;
  toast?: ToastShape;
  onSuccess?: () => void;
}

export enum TxStatus {
  Failed = 'Transaction Failed',
  Successful = 'Transaction Successful',
  Broadcasting = 'Transaction Broadcasting',
}

const txRaw = cosmos.tx.v1beta1.TxRaw;

export const useTx = (chainName: string) => {
  const { address, getSigningStargateClient, estimateFee } =
    useChain(chainName);

  const tx = async (msgs: Msg[], options: TxOptions) => {
    if (!address) {
      return toast.error('Wallet not connected', {
        description: 'Please connect the wallet',
      });
    }

    let signed: TxRaw;
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

      return toast.error(TxStatus.Failed, {
        description: e?.message || 'An unexpected error has occured',
      });
    }

    if (client && signed) {
      const promise = client.broadcastTx(
        Uint8Array.from(txRaw.encode(signed).finish())
      );

      toast.promise(promise, {
        loading: 'Waiting for transaction to be included in the block',
        success: (data: any) => {
          if (isDeliverTxSuccess(data)) {
            if (options.onSuccess) options.onSuccess();
            return options.toast?.title || TxStatus.Successful;
          } else {
            console.error(data?.rawLog);
            return {
              message: TxStatus.Failed,
              toastType: 'error',
            };
          }
        },
        error: (error: Error) => {
          if (error?.message) {
            console.error(error?.message);
          }
          return TxStatus.Failed;
        },
      });
    }
  };

  return { tx };
};
