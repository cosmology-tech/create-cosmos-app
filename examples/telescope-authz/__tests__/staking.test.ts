import { generateMnemonic } from '@confio/relayer/build/lib/helpers';
import {
  StdFee,
  assertIsDeliverTxSuccess,
  createProtobufRpcClient,
} from '@cosmjs/stargate';
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import BigNumber from 'bignumber.js';

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
import { MsgDelegate } from '../src/codegen/cosmos/staking/v1beta1/tx';

describe('Staking tokens testing', () => {
  let wallet1, address1, denom;
  let wallet2, address2;
  let chainInfo, getCoin, getStargateClient, getRpcEndpoint, creditFromFaucet;

  // Variables used accross testcases
  let queryClient;
  let msgClient1;
  let msgClient2;

  let validatorAddress;
  let delegationAmount;

  beforeAll(async () => {
    ({
      chainInfo,
      getCoin,
      getStargateClient,
      getRpcEndpoint,
      creditFromFaucet,
    } = useChain('osmosis'));
    denom = getCoin().base;

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
      return signingClient1.signAndBroadcast(signerAddress, messages, fee, memo);
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
      return signingClient2.signAndBroadcast(signerAddress, messages, fee, memo);
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

  it('check address has tokens', async () => {
    const { balance } = await queryClient.cosmos.bank.v1beta1.balance({
      address: address1,
      denom,
    });

    expect(balance.amount).toEqual('10000000000');
  }, 10000);

  it('query validator address', async () => {
    const { validators } = await queryClient.cosmos.staking.v1beta1.validators({
      status: cosmos.staking.v1beta1.bondStatusToJSON(
        cosmos.staking.v1beta1.BondStatus.BOND_STATUS_BONDED
      ),
    });
    let allValidators = validators;
    if (validators.length > 1) {
      allValidators = validators.sort((a, b) =>
        new BigNumber(b.tokens).minus(new BigNumber(a.tokens)).toNumber()
      );
    }

    expect(allValidators.length).toBeGreaterThan(0);

    // set validator address to the first one
    validatorAddress = allValidators[0].operatorAddress;
  });

  it('stake tokens to genesis validator', async () => {
    const signingClient = await getSigningCosmosClient({
      rpcEndpoint: getRpcEndpoint(),
      signer: wallet1,
    });

    const { balance } = await queryClient.cosmos.bank.v1beta1.balance({
      address: address1,
      denom,
    });

    // Stake half of the tokens
    // eslint-disable-next-line no-undef
    delegationAmount = (BigInt(balance.amount) / BigInt(2)).toString();

    const fee = {
      amount: [
        {
          denom,
          amount: '100000',
        },
      ],
      gas: '550000',
    };

    let msg = MsgDelegate.fromPartial({
      delegatorAddress: address1,
      validatorAddress: validatorAddress,
      amount: {
        denom,
        amount: delegationAmount,
      },
    });

    const result = await msgClient1.cosmos.staking.v1beta1.delegate(
      address1,
      msg,
      fee
    );

    assertIsDeliverTxSuccess(result);
  });

  it('query delegation', async () => {
    const { delegationResponse } =
      await queryClient.cosmos.staking.v1beta1.delegation({
        delegatorAddr: address1,
        validatorAddr: validatorAddress,
      });

    // Assert that the delegation amount is the set delegation amount
    // eslint-disable-next-line no-undef
    expect(BigInt(delegationResponse.balance.amount)).toBeGreaterThan(
      // eslint-disable-next-line no-undef
      BigInt(0)
    );
    expect(delegationResponse.balance.amount).toEqual(delegationAmount);
    expect(delegationResponse.balance.denom).toEqual(denom);
  });
});
