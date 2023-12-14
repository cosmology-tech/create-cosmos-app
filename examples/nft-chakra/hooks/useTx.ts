import { cosmos } from 'stargaze-query';
import { ToastId } from '@chakra-ui/react';
import { useChain } from '@cosmos-kit/react';
import { SigningCosmWasmClient } from '@cosmjs/cosmwasm-stargate';
import { isDeliverTxSuccess, StdFee, coins } from '@cosmjs/stargate';
import { TxRaw } from 'stargaze-query/types/codegen/cosmos/tx/v1beta1/tx';

import { defaultChainName, coin } from '@/config';
import { useToaster, ToastType, type CustomToast } from './useToaster';

interface Msg {
  typeUrl: string;
  value: any;
}

interface TxOptions {
  gas: string | number;
  toast?: Partial<CustomToast>;
}

export enum TxStatus {
  Failed = 'Transaction Failed',
  Successful = 'Transaction Successful',
  Broadcasting = 'Transaction Broadcasting',
}

const txRaw = cosmos.tx.v1beta1.TxRaw;

export const useTx = () => {
  const { address, getSigningCosmWasmClient } = useChain(defaultChainName);

  const toaster = useToaster();

  const tx = async (msgs: Msg[], options: TxOptions, callback?: () => void) => {
    if (!address) {
      toaster.toast({
        type: ToastType.Error,
        title: 'Wallet not connected',
        message: 'Please connect the wallet',
      });
      return;
    }

    const fee: StdFee = {
      amount: coins(0, coin.base),
      gas: String(options.gas),
    };

    let signed: TxRaw;
    let client: SigningCosmWasmClient;

    try {
      client = await getSigningCosmWasmClient();
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
            if (callback) callback();

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
