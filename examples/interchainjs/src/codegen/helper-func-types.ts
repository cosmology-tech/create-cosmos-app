import { BinaryReader, BinaryWriter } from "./binary";
import { Rpc } from "./helpers";

export interface QueryBuilderOptions<TReq, TRes> {
  reqEncoderFn: (request: TReq, writer?: BinaryWriter) => BinaryWriter
  resDecoderFn: (input: BinaryReader | Uint8Array, length?: number) => TRes
  service: string,
  method: string,
  getRpcInstance: () => Rpc | undefined
}

export function buildQuery<TReq, TRes>(opts: QueryBuilderOptions<TReq, TRes>) {
    return async (request: TReq) => {
      const rpc = opts.getRpcInstance();

      if (!rpc) throw new Error("Query Rpc is not initialized");

      const data = opts.reqEncoderFn(request).finish();
      const response = await rpc.request(opts.service, opts.method, data);
      return opts.resDecoderFn(response);
    };
}

export interface ITxArgs<TMsg> {
  signerAddress: string;
  message: TMsg;
  fee: StdFee | 'auto';
  memo: string;
}

export interface ISigningClient {
  /**
   * register converters
   */
  addConverters: (converters: AminoConverter[]) => void;
  /**
   * register encoders
   */
  addEncoders: (encoders: Encoder[]) => void;

  signAndBroadcast: (
    signerAddress: string,
    message: Message[],
    fee: StdFee | 'auto',
    memo: string
  ) => Promise<DeliverTxResponse>;
}

export interface TxBuilderOptions {
  getSigningClient: SigningClientResolver,
  typeUrl: string,
  encoders?: Encoder[],
  converters?: AminoConverter[],
}

export function buildTx<TMsg>(opts: TxBuilderOptions) {
  return async (
    signerAddress: string,
    message: TMsg,
    fee: StdFee | 'auto',
    memo: string
  ): Promise<DeliverTxResponse> => {
    const client = opts.getSigningClient();

    if (!client) throw new Error("SigningClient is not initialized");

    //register all related encoders and converters
    client.addEncoders(opts.encoders ?? []);
    client.addConverters(opts.converters ?? []);

    const data = [
      {
        typeUrl: opts.typeUrl,
        value: message,
      },
    ];
    return client.signAndBroadcast!(signerAddress, data, fee, memo);
  };
}

export interface Coin {
  denom: string;
  amount: string;
}

export interface StdFee {
  amount: Coin[];
  gas: string;
  /** The granter address that is used for paying with feegrants */
  granter?: string;
  /** The fee payer address. The payer must have signed the transaction. */
  payer?: string;
}

/**
 * The response after successfully broadcasting a transaction.
 * Success or failure refer to the execution result.
 */
export interface DeliverTxResponse {
  height: number;
  /** The position of the transaction within the block. This is a 0-based index. */
  txIndex: number;
  /** Error code. The transaction suceeded if and only if code is 0. */
  code: number;
  transactionHash: string;
  events: Event[];
  /**
   * A string-based log document.
   *
   * This currently seems to merge attributes of multiple events into one event per type
   * (https://github.com/tendermint/tendermint/issues/9595). You might want to use the `events`
   * field instead.
   */
  rawLog?: string;
  /** @deprecated Use `msgResponses` instead. */
  data?: MsgData[];
  /**
   * The message responses of the [TxMsgData](https://github.com/cosmos/cosmos-sdk/blob/v0.46.3/proto/cosmos/base/abci/v1beta1/abci.proto#L128-L140)
   * as `Any`s.
   * This field is an empty list for chains running Cosmos SDK < 0.46.
   */
  msgResponses: Array<{
    typeUrl: string;
    value: Uint8Array;
  }>;
  gasUsed: bigint;
  gasWanted: bigint;
}

export interface MsgData {
  msgType: string;
  data: Uint8Array;
}

export interface Attribute {
  key: string;
  value: string;
  index: boolean;
}
export interface Event {
  type: string;
  attributes: Attribute[];
}

export interface Message<T = any> {
  typeUrl: string;
  value: T;
}

export interface Encoder {
  typeUrl: string;
  fromPartial: (data: any) => any;
  encode: (data: any) => Uint8Array;
}

export interface AminoConverter {
  typeUrl: string;
  aminoType: string;
  fromAmino: (data: any) => any;
  toAmino: (data: any) => any;
}

export type SigningClientResolver = () => ISigningClient | undefined;