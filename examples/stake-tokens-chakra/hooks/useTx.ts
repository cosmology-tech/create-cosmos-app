import { cosmos } from 'interchain-query';
import { isDeliverTxSuccess, StdFee } from '@cosmjs/stargate';
import { useToaster, ToastType, type CustomToast } from './useToaster';
import { useChain } from '@cosmos-kit/react';
import { ToastId } from '@chakra-ui/react';
import { TxRaw } from 'interchain-query/cosmos/tx/v1beta1/tx';

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

const txRaw = cosmos.tx.v1beta1.TxRaw;

export const useTx = (chainName: string) => {
  const { address, getSigningStargateClient, estimateFee } =
    useChain(chainName);

  const toaster = useToaster();

  const tx = async (msgs: Msg[], options: TxOptions) => {
    if (!address) {
      toaster.toast({
        type: ToastType.Error,
        title: 'Wallet not connected',
        message: 'Please connect the wallet',
      });
      return;
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
      toaster.toast({
        title: TxStatus.Failed,
        message: e?.message || 'An unexpected error has occured',
        type: ToastType.Error,
      });
      return;
    }

    let broadcastToastId: ToastId;

    broadcastToastId = toaster.toast({
      title: TxStatus.Broadcasting,
      message: 'Waiting for transaction to be included in the block',
      type: ToastType.Loading,
      duration: 999999,
    });

    if (client && signed) {
      await client
        .broadcastTx(Uint8Array.from(txRaw.encode(signed).finish()))
        .then((res) => {
          if (isDeliverTxSuccess(res)) {
            if (options.onSuccess) options.onSuccess();

            toaster.toast({
              title: options.toast?.title || TxStatus.Successful,
              type: options.toast?.type || ToastType.Success,
              message: options.toast?.message,
            });
          } else {
            toaster.toast({
              title: TxStatus.Failed,
              message: res?.rawLog,
              type: ToastType.Error,
              duration: 10000,
            });
          }
        })
        .catch((err) => {
          toaster.toast({
            title: TxStatus.Failed,
            message: err?.message,
            type: ToastType.Error,
            duration: 10000,
          });
        })
        .finally(() => toaster.close(broadcastToastId));
    } else {
      toaster.close(broadcastToastId);
    }
  };

  return { tx };
};
