import { GrantAuthorization, GrantAuthorizationSDKType } from "./authz";
import { BinaryReader, BinaryWriter } from "../../../binary";
/** GenesisState defines the authz module's genesis state. */
export interface GenesisState {
  authorization: GrantAuthorization[];
}
/** GenesisState defines the authz module's genesis state. */
export interface GenesisStateSDKType {
  authorization: GrantAuthorizationSDKType[];
}
function createBaseGenesisState(): GenesisState {
  return {
    authorization: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.authorization) {
      GrantAuthorization.encode(v!, writer.uint32(10).fork()).ldelim();
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
          message.authorization.push(GrantAuthorization.decode(reader, reader.uint32()));
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
    message.authorization = object.authorization?.map(e => GrantAuthorization.fromPartial(e)) || [];
    return message;
  }
};