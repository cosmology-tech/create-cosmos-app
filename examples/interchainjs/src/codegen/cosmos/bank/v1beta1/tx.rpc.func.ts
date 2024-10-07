import { buildTx, ISigningClient } from "../../../helpers";
import { MsgSend, MsgMultiSend } from "./tx";
import { toConverters, toEncoders } from "@interchainjs/cosmos/utils";
import { buildUseMutation } from "../../../react-query";

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