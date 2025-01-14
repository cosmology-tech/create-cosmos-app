import { useChain } from '@cosmos-kit/react';
import { isDeliverTxSuccess, StdFee } from '@cosmjs/stargate';
import { useToast, type CustomToast } from './useToast';
import { useQuery } from '@tanstack/react-query';

import { SigningClient } from '@interchainjs/cosmos/signing-client';
import {
  AminoGenericOfflineSigner,
  DirectGenericOfflineSigner,
} from '@interchainjs/cosmos/types/wallet';

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

export const useSigningClientDirect = (chainName: string) => {
  const { getRpcEndpoint, getOfflineSignerDirect } = useChain(chainName);

  return useQuery(
    ['signingClientDirect', chainName],
    async () => {
      const endpoint = await getRpcEndpoint();
      const offlineSigner = await getOfflineSignerDirect();
      const client = SigningClient.connectWithSigner(
        endpoint,
        // @ts-ignore
        new DirectGenericOfflineSigner(offlineSigner),
        {
          broadcast: {
            checkTx: true,
            deliverTx: true,
          },
        }
      );
      return client;
    },
    {
      enabled: !!chainName,
    }
  );
};

export const useSigningClientAmino = (chainName: string) => {
  const { getRpcEndpoint, getOfflineSignerAmino } = useChain(chainName);

  return useQuery(
    ['signingClientAmino', chainName],
    async () => {
      const endpoint = await getRpcEndpoint();
      const offlineSigner = await getOfflineSignerAmino();
      const client = SigningClient.connectWithSigner(
        endpoint,
        // @ts-ignore
        new AminoGenericOfflineSigner(offlineSigner),
        {
          broadcast: {
            checkTx: true,
            deliverTx: true,
          },
        }
      );
      return client;
    },
    {
      enabled: !!chainName,
    }
  );
};
