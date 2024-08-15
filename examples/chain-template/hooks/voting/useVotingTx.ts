import { cosmos } from 'interchain-query';
import { useChain } from '@cosmos-kit/react';
import {
  DeliverTxResponse,
  isDeliverTxSuccess,
  StdFee,
} from '@cosmjs/stargate';

export type Msg = {
  typeUrl: string;
  value: { [key: string]: any };
};

export type TxOptions = {
  fee?: StdFee;
};

export class TxError extends Error {
  constructor(message: string = 'Tx Error', options?: ErrorOptions) {
    super(message, options);
    this.name = 'TxError';
  }
}

export class TxResult {
  error?: TxError;
  response?: DeliverTxResponse;

  constructor({ error, response }: Pick<TxResult, 'error' | 'response'>) {
    this.error = error;
    this.response = response;
  }

  get errorMsg() {
    return this.isOutOfGas
      ? `Out of gas. gasWanted: ${this.response?.gasWanted} gasUsed: ${this.response?.gasUsed}`
      : this.error?.message || 'Vote Failed';
  }

  get isSuccess() {
    return this.response && isDeliverTxSuccess(this.response);
  }

  get isOutOfGas() {
    return this.response && this.response.gasUsed > this.response.gasWanted;
  }
}

export function useVotingTx(chainName: string) {
  const { address, getSigningStargateClient, estimateFee } =
    useChain(chainName);

  async function tx(msgs: Msg[], options: TxOptions = {}) {
    if (!address) {
      return new TxResult({ error: new TxError('Wallet not connected') });
    }

    try {
      const txRaw = cosmos.tx.v1beta1.TxRaw;
      const fee = options.fee || (await estimateFee(msgs));
      const client = await getSigningStargateClient();
      const signed = await client.sign(address, msgs, fee, '');

      if (!client)
        return new TxResult({ error: new TxError('Invalid stargate client') });
      if (!signed)
        return new TxResult({ error: new TxError('Invalid transaction') });

      // @ts-ignore
      const response: DeliverTxResponse = await client.broadcastTx(
        Uint8Array.from(txRaw.encode(signed).finish())
      );

      return isDeliverTxSuccess(response)
        ? new TxResult({ response })
        : new TxResult({ response, error: new TxError(response.rawLog) });
    } catch (e: any) {
      return new TxResult({ error: new TxError(e.message || 'Tx Error') });
    }
  }

  return { tx };
}
