import { generateMnemonic } from '@confio/relayer/build/lib/helpers';
import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';
import { assertIsDeliverTxSuccess } from '@cosmjs/stargate';
import BigNumber from 'bignumber.js';

//@ts-ignore
import { getSigningIbcClient } from './codegen';
import { useChain, Config } from './config';

export const calcShareOutAmount = (poolInfo, coinsNeeded) => {
  return poolInfo.poolAssets
    .map(({ token }, i) => {
      const tokenInAmount = new BigNumber(coinsNeeded[i].amount);
      const totalShare = new BigNumber(poolInfo.totalShares.amount);
      const totalShareExp = totalShare.shiftedBy(-18);
      const poolAssetAmount = new BigNumber(token.amount);

      return tokenInAmount
        .multipliedBy(totalShareExp)
        .dividedBy(poolAssetAmount)
        .shiftedBy(18)
        .decimalPlaces(0, BigNumber.ROUND_HALF_UP)
        .toString();
    })
    .sort((a, b) => (new BigNumber(a).lt(b) ? -1 : 1))[0];
};

export const waitUntil = (date, timeout = 90000) => {
  return new Promise((resolve) => {
    const delay = date.getTime() - Date.now();
    if (delay > timeout) {
      throw new Error('Timeout to wait until date');
    }
    setTimeout(resolve, delay + 3000);
  });
};

export const transferIbcTokens = async (
  fromChain,
  toChain,
  toAddress,
  amount
) => {
  const registry = Config.registry;
  const { chainInfo, getCoin, getRpcEndpoint, creditFromFaucet } =
    useChain(fromChain);
  const denom = getCoin().base;

  const { chainInfo: toChainInfo } = useChain(toChain);

  const ibcInfos = registry.getChainIbcData(chainInfo.chain.chain_id);
  const ibcInfo = ibcInfos.find(
    (i) =>
      i.chain_1.chain_name === chainInfo.chain.chain_id &&
      i.chain_2.chain_name === toChainInfo.chain.chain_id
  );

  if (!ibcInfo) {
    throw new Error('cannot find IBC info');
  }

  const { port_id: sourcePort, channel_id: sourceChannel } =
    ibcInfo.channels[0].chain_1;

  // Create temp address on fromChain that will transfer the funds
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(
    generateMnemonic(),
    { prefix: chainInfo.chain.bech32_prefix }
  );
  const fromAddress = (await wallet.getAccounts())[0].address;

  // Transfer funds to address from faucet
  await creditFromFaucet(fromAddress);

  // Create ibc client to transfer tokens
  const fromClient = await getSigningIbcClient({
    rpcEndpoint: getRpcEndpoint(),
    signer: wallet
  });

  const currentTime = Math.floor(Date.now() / 1000);
  const timeoutTime = currentTime + 300; // 5 minutes

  const fee = {
    amount: [
      {
        denom,
        amount: '100000'
      }
    ],
    gas: '550000'
  };

  const token = {
    denom,
    amount
  };

  // send ibc tokens
  const resp = await fromClient.sendIbcTokens(
    fromAddress,
    toAddress,
    token,
    sourcePort,
    sourceChannel,
    undefined,
    timeoutTime,
    fee
  );

  assertIsDeliverTxSuccess(resp);

  return token;
};
