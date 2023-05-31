import { Minter, MinterSDKType, Params, ParamsSDKType } from "./mint";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState defines the mint module's genesis state. */
export interface GenesisState {
  /** minter is an abstraction for holding current rewards information. */
  minter?: Minter | undefined;
  /** params defines all the paramaters of the mint module. */
  params?: Params | undefined;
  /**
   * reduction_started_epoch is the first epoch in which the reduction of mint
   * begins.
   */
  reductionStartedEpoch: bigint;
}
/** GenesisState defines the mint module's genesis state. */
export interface GenesisStateSDKType {
  minter?: MinterSDKType | undefined;
  params?: ParamsSDKType | undefined;
  reduction_started_epoch: bigint;
}
function createBaseGenesisState(): GenesisState {
  return {
    minter: undefined,
    params: undefined,
    reductionStartedEpoch: BigInt("0")
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minter !== undefined) {
      Minter.encode(message.minter, writer.uint32(10).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    if (message.reductionStartedEpoch !== BigInt(0)) {
      writer.uint32(24).int64(message.reductionStartedEpoch);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minter = Minter.decode(reader, reader.uint32());
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 3:
          message.reductionStartedEpoch = BigInt(reader.int64().toString());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.minter = object.minter !== undefined && object.minter !== null ? Minter.fromPartial(object.minter) : undefined;
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.reductionStartedEpoch = object.reductionStartedEpoch !== undefined && object.reductionStartedEpoch !== null ? BigInt(object.reductionStartedEpoch.toString()) : BigInt("0");
    return message;
  }
};