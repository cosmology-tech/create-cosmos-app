import { useChain } from '@cosmos-kit/react';
import { isDeliverTxSuccess, StdFee } from '@cosmjs/stargate';

import { cosmos, getSigningCosmosClient } from '@/src/codegen';
import { MsgVote } from '@/src/codegen/cosmos/gov/v1beta1/tx';
import { MsgWithdrawDelegatorReward } from '@/src/codegen/cosmos/distribution/v1beta1/tx';
import {
  MsgExec,
  MsgGrant,
  MsgRevoke,
} from '@/src/codegen/cosmos/authz/v1beta1/tx';
import { EncodeObject } from '@/src/codegen/types';
import { SendAuthorization } from '@/src/codegen/cosmos/bank/v1beta1/authz';
import { StakeAuthorization } from '@/src/codegen/cosmos/staking/v1beta1/authz';
import { GenericAuthorization } from '@/src/codegen/cosmos/authz/v1beta1/authz';

import { getTokenByChainName } from '@/utils';
import { Permission } from '@/configs';
import { useToast, type CustomToast } from './useToast';
import { coin } from '@cosmjs/amino';
import { MsgSend } from '@/src/codegen/cosmos/bank/v1beta1/tx';
import { MsgDelegate } from '@/src/codegen/cosmos/staking/v1beta1/tx';

const { grant } = cosmos.authz.v1beta1.MessageComposer.fromPartial;

/**
 authz type: grant, revoke, exec
  msg type: MsgGrant, MsgRevoke, MsgExec
  grant type: send, delegate, undelegate, withdraw, vote
*/

export type GrantMsg =
  | {
      grantType: typeof Permission.Send;
      customize?: SendAuthorization;
    }
  | {
      grantType: typeof Permission.Delegate;
      customize?: StakeAuthorization;
    }
  | {
      grantType: typeof Permission.ClaimRewards | typeof Permission.Vote;
      customize?: GenericAuthorization;
    };

type CreateGrantMsgOptions = GrantMsg & {
  grantee: MsgGrant['grantee'];
  granter: MsgGrant['granter'];
  expiration?: NonNullable<MsgGrant['grant']>['expiration'];
};

const createGrantMsg = (options: CreateGrantMsgOptions) => {
  const { grantType, customize, grantee, granter, expiration } = options;

  const authz: Record<typeof grantType, typeof customize> = {
    send:
      customize ||
      GenericAuthorization.fromPartial({
        msg: MsgSend.typeUrl,
      }),
    delegate:
      customize ||
      GenericAuthorization.fromPartial({
        msg: MsgDelegate.typeUrl,
      }),
    vote: GenericAuthorization.fromPartial({
      msg: MsgVote.typeUrl,
    }),
    'claim-rewards': GenericAuthorization.fromPartial({
      msg: MsgWithdrawDelegatorReward.typeUrl,
    }),
  };

  return grant({
    granter,
    grantee,
    grant: {
      authorization: authz[grantType],
      expiration,
    },
  });
};

const txRaw = cosmos.tx.v1beta1.TxRaw;

enum TxStatus {
  Failed = 'Transaction Failed',
  Successful = 'Transaction Successful',
  Broadcasting = 'Transaction Broadcasting',
}

type AuthzTxOptions = {
  msgs: EncodeObject[];
  fee?: StdFee | null;
  toast?: Partial<CustomToast>;
  onSuccess?: () => void;
  onComplete?: () => void;
};

export const useAuthzTx = (chainName: string) => {
  const { toast } = useToast();
  const { address, getRpcEndpoint, getOfflineSignerDirect } =
    useChain(chainName);

  const authzTx = async (options: AuthzTxOptions) => {
    const { msgs, fee, onSuccess, onComplete, toast: customToast } = options;

    if (!address) {
      toast({
        type: 'error',
        title: 'Wallet not connected',
        description: 'Please connect the wallet',
      });
      if (onComplete) onComplete();
      return;
    }

    let signed: Parameters<typeof txRaw.encode>['0'];
    let client: Awaited<ReturnType<typeof getSigningCosmosClient>>;

    const defaultFee: StdFee = {
      amount: [coin('0', getTokenByChainName(chainName).base)],
      gas: '860000',
    };

    try {
      client = await getSigningCosmosClient({
        rpcEndpoint: await getRpcEndpoint(),
        signer: getOfflineSignerDirect(),
      });
      signed = await client.sign(address, msgs, fee || defaultFee, '');
    } catch (e: any) {
      console.error(e);
      toast({
        title: TxStatus.Failed,
        description: e?.message || 'An unexpected error has occurred',
        type: 'error',
      });
      if (onComplete) onComplete();
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
        .then((res) => {
          if (isDeliverTxSuccess(res)) {
            if (onSuccess) onSuccess();

            toast({
              title: customToast?.title || TxStatus.Successful,
              type: customToast?.type || 'success',
              description: customToast?.description,
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
          console.error(err);
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

    if (onComplete) onComplete();
  };

  return { authzTx, createGrantMsg };
};
