import { generateMnemonic } from '@confio/relayer/build/lib/helpers';
import {
  StdFee,
  assertIsDeliverTxSuccess,
  createProtobufRpcClient,
} from '@cosmjs/stargate';
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import BigNumber from 'bignumber.js';

import { useChains } from '@cosmos-kit/react-lite';

import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import { QueryClient } from '@cosmjs/stargate';

import {
  EncodeObject,
  TxRpc,
  cosmos,
  getSigningCosmosClient,
} from '../src/codegen';
import { useChain } from '../src';
import './setup.test';
import {
  GenericAuthorization,
  Grant,
} from '../src/codegen/cosmos/authz/v1beta1/authz';
import { MsgGrant } from '../src/codegen/cosmos/authz/v1beta1/tx';
import { MsgVote } from '../src/codegen/cosmos/gov/v1beta1/tx';
import { SendAuthorization } from '../src/codegen/cosmos/bank/v1beta1/authz';

describe('Authz testing', () => {
  let wallet1, address1, denom;
  let wallet2, address2;
  let chainInfo, getCoin, getStargateClient, getRpcEndpoint, creditFromFaucet;

  // Variables used accross testcases
  let queryClient;
  let msgClient1;
  let msgClient2;

  beforeAll(async () => {
    ({
      chainInfo,
      getCoin,
      getStargateClient,
      getRpcEndpoint,
      creditFromFaucet,
    } = useChain('cosmos'));
    denom = getCoin().base;

    // const chains = useChains([chainInfo.chain_name]);

    // Promise.all(Object.values(wallets).forEach())

    // Initialize wallet
    wallet1 = await DirectSecp256k1HdWallet.fromMnemonic(generateMnemonic(), {
      prefix: chainInfo.chain.bech32_prefix,
    });
    address1 = (await wallet1.getAccounts())[0].address;

    wallet2 = await DirectSecp256k1HdWallet.fromMnemonic(generateMnemonic(), {
      prefix: chainInfo.chain.bech32_prefix,
    });
    address2 = (await wallet2.getAccounts())[0].address;

    const tmClient: any = await Tendermint34Client.connect(getRpcEndpoint());
    const client = new QueryClient(tmClient);
    const rpc1: any = createProtobufRpcClient(client);
    const rpc2: any = createProtobufRpcClient(client);

    const signingClient1 = await getSigningCosmosClient({
      rpcEndpoint: getRpcEndpoint(),
      signer: wallet1,
    });
    rpc1.signAndBroadcast = (
      signerAddress: string,
      messages: readonly EncodeObject[],
      fee: number | StdFee | 'auto',
      memo?: string | undefined
    ) => {
      return signingClient1.signAndBroadcast(
        signerAddress,
        messages,
        fee,
        memo
      );
    };

    const signingClient2 = await getSigningCosmosClient({
      rpcEndpoint: getRpcEndpoint(),
      signer: wallet2,
    });
    rpc2.signAndBroadcast = (
      signerAddress: string,
      messages: readonly EncodeObject[],
      fee: number | StdFee | 'auto',
      memo?: string | undefined
    ) => {
      return signingClient2.signAndBroadcast(
        signerAddress,
        messages,
        fee,
        memo
      );
    };

    // Create custom cosmos interchain client
    queryClient = await cosmos.ClientFactory.createRPCQueryClient({
      rpc: rpc1,
    });

    msgClient1 = await cosmos.ClientFactory.createRPCMsgClient({
      rpc: rpc1,
    });

    msgClient2 = await cosmos.ClientFactory.createRPCMsgClient({
      rpc: rpc2,
    });

    // Transfer osmosis and ibc tokens to address, send only osmo to address
    await creditFromFaucet(address1);
    await creditFromFaucet(address2);
  }, 200000);

  it('check address1 has tokens', async () => {
    const { balance } = await queryClient.cosmos.bank.v1beta1.balance({
      address: address1,
      denom,
    });

    expect(balance.amount).toEqual('10000000000');
  }, 10000);

  it('check address2 has tokens', async () => {
    const { balance } = await queryClient.cosmos.bank.v1beta1.balance({
      address: address2,
      denom,
    });

    expect(balance.amount).toEqual('10000000000');
  }, 10000);

  it('grant address2', async () => {
    const fee = {
      amount: [
        {
          denom,
          amount: '100000',
        },
      ],
      gas: '550000',
    };

    const msg = MsgGrant.fromPartial({
      granter: address1,
      grantee: address2,
      grant: Grant.fromPartial({
        authorization: SendAuthorization.fromPartial({
          spendLimit: [
            {
              denom: denom,
              amount: '100000',
            },
          ],
        }),
      }),
    });

    const result = await msgClient1.cosmos.authz.v1beta1.grant(
      address1,
      msg,
      fee
    );

    assertIsDeliverTxSuccess(result);


    const authsResults = await queryClient.cosmos.authz.v1beta1.granteeGrants({
      grantee: address2,
    });

    expect(authsResults?.grants?.length).toBeGreaterThan(0);
  }, 10000);
});
