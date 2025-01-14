import { useChain } from '@cosmos-kit/react';
import { isDeliverTxSuccess, StdFee } from '@cosmjs/stargate';

import { MsgVote } from 'interchain-react/cosmos/gov/v1beta1/tx';
import { MsgWithdrawDelegatorReward } from 'interchain-react/cosmos/distribution/v1beta1/tx';
import { MsgExec, MsgGrant } from 'interchain-react/cosmos/authz/v1beta1/tx';
import { EncodeObject } from 'interchain-react/types';
import { SendAuthorization } from 'interchain-react/cosmos/bank/v1beta1/authz';
import {
  AuthorizationType,
  StakeAuthorization,
} from 'interchain-react/cosmos/staking/v1beta1/authz';
import { GenericAuthorization } from 'interchain-react/cosmos/authz/v1beta1/authz';

import { getTokenByChainName, PrettyPermission } from '@/utils';
import { Permission } from '@/configs';
import { useToast, type CustomToast } from './useToast';
import { coin } from '@cosmjs/amino';
import { MsgSend } from 'interchain-react/cosmos/bank/v1beta1/tx';
import {
  MsgDelegate,
  MsgBeginRedelegate,
  MsgUndelegate,
} from 'interchain-react/cosmos/staking/v1beta1/tx';
import dayjs from 'dayjs';

// ==========================================

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

  return {
    granter,
    grantee,
    grant: {
      authorization: authz[grantType],
      expiration,
    },
  };
};

// ==========================================

export const createRevokeMsg = (permission: PrettyPermission) => {
  const { grantee, granter, authorization: authz } = permission;

  let msgTypeUrl = '';

  switch (true) {
    case GenericAuthorization.is(authz):
      msgTypeUrl = (authz as GenericAuthorization).msg;
      break;

    case SendAuthorization.is(authz):
      msgTypeUrl = MsgSend.typeUrl;
      break;

    case StakeAuthorization.is(authz):
      const authzType = (authz as StakeAuthorization).authorizationType;
      if (authzType === AuthorizationType.AUTHORIZATION_TYPE_DELEGATE) {
        msgTypeUrl = MsgDelegate.typeUrl;
        break;
      }
      if (authzType === AuthorizationType.AUTHORIZATION_TYPE_UNDELEGATE) {
        msgTypeUrl = MsgUndelegate.typeUrl;
        break;
      }
      if (authzType === AuthorizationType.AUTHORIZATION_TYPE_REDELEGATE) {
        msgTypeUrl = MsgBeginRedelegate.typeUrl;
        break;
      }
    default:
      break;
  }

  return {
    grantee,
    granter,
    msgTypeUrl,
  };
};

// ==========================================

export const createExecMsg = ({ grantee, msgs }: MsgExec) => {
  return { grantee, msgs };
};

// ==========================================

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
  execExpiration?: Date | undefined;
};

export const useAuthzTx = (chainName: string) => {
  return { createGrantMsg, createRevokeMsg, createExecMsg };
};
