import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgSend, MsgSendResponse, MsgMultiSend, MsgMultiSendResponse } from "./tx";
import { DeliverTxResponse, StdFee } from '@interchainjs/cosmos-types/types';
import { AminoConverter, Encoder, Message } from '@interchainjs/cosmos/types/signer';
import { SigningClient } from "interchainjs/signing-client";
import { MutationOptions, useMutation, UseMutationOptions, useQueryClient } from "@tanstack/react-query";
import { HttpEndpoint } from "@cosmjs/stargate";
import { toConverters, toEncoders } from "@interchainjs/cosmos/utils";

// common utils
export const SIGNING_CLIENT_QUERY_KEY = 'signingClient';

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

export interface ReactMutationParams<TData, TError, TVariables, TContext = unknown> {
  options?: MutationOptions<TData, TError, TVariables, TContext>;
  rpcEndpoint?: string | HttpEndpoint;
  signingClientQueryKey?: string;
}

export interface TxBuilderOptions {
  getSigningClient: () => ISigningClient | undefined,
  typeUrl: string,
  encoders?: Encoder[],
  converters?: AminoConverter[],
}

export interface UseMutationBuilderOptions<TMsg> {
  builderMutationFn: (getSigningClientInstance: () => ISigningClient | undefined) => (
    signerAddress: string,
    message: TMsg,
    fee: StdFee | 'auto',
    memo: string
  ) => Promise<DeliverTxResponse>,
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

export function buildUseMutation<TMsg, TError>(opts: UseMutationBuilderOptions<TMsg>) {
  return ({
    options,
    rpcEndpoint,
    signingClientQueryKey
  }: ReactMutationParams<DeliverTxResponse, TError, ITxArgs<TMsg>>) => {
    const queryClient = useQueryClient();
    const key = signingClientQueryKey || SIGNING_CLIENT_QUERY_KEY;
    const queryKey = rpcEndpoint ? [key, rpcEndpoint] : [SIGNING_CLIENT_QUERY_KEY];
    const signingClient = queryClient.getQueryData<ISigningClient>(queryKey);

    const mutationFn = opts.builderMutationFn(() => {
      return signingClient;
    });

    return useMutation<DeliverTxResponse, Error, ITxArgs<TMsg>>(
      (reqData: ITxArgs<TMsg>) => mutationFn(reqData.signerAddress, reqData.message, reqData.fee, reqData.memo),
      options as Omit<UseMutationOptions<DeliverTxResponse, Error, ITxArgs<TMsg>, unknown>, "mutationFn">
    );
  };
}

// generated helper functions

export const createSend = (getSigningClient: () => ISigningClient | undefined) => buildTx<MsgSend>({
  getSigningClient,
  typeUrl: MsgSend.typeUrl,
  encoders: toEncoders(MsgSend),
  converters: toConverters(MsgSend),
});

export const createMultiSend = (getSigningClient: () => ISigningClient | undefined) => buildTx<MsgMultiSend>({
  getSigningClient,
  typeUrl: MsgMultiSend.typeUrl,
  encoders: toEncoders(MsgMultiSend),
  converters: toConverters(MsgMultiSend),
});

export const useSend = buildUseMutation<MsgSend, Error>({
  builderMutationFn: createSend,
});

export const useMultiSend = buildUseMutation<MsgMultiSend, Error>({
  builderMutationFn: createMultiSend,
});