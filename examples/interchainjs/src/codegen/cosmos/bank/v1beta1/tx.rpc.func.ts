import { buildTx, ISigningClient, SigningClientResolver } from "../../../helper-func-types";
import { MsgSend, MsgMultiSend } from "./tx";
import { toConverters, toEncoders } from "@interchainjs/cosmos/utils";
import { buildUseMutation } from "../../../react-query";

// generated helper functions

// creators
export const createSend = (getSigningClient: SigningClientResolver) => buildTx<MsgSend>({
  getSigningClient,
  typeUrl: MsgSend.typeUrl,
  encoders: toEncoders(MsgSend),
  converters: toConverters(MsgSend),
});

export const createMultiSend = (getSigningClient: SigningClientResolver) => buildTx<MsgMultiSend>({
  getSigningClient,
  typeUrl: MsgMultiSend.typeUrl,
  encoders: toEncoders(MsgMultiSend),
  converters: toConverters(MsgMultiSend),
});

// hooks
export const useSend = buildUseMutation<MsgSend, Error>({
  builderMutationFn: createSend,
});

export const useMultiSend = buildUseMutation<MsgMultiSend, Error>({
  builderMutationFn: createMultiSend,
});