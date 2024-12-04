import { IdentifiedPacketFees, IdentifiedPacketFeesSDKType } from "./fee";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { JsonSafe } from "../../../../json-safe";
import { DeepPartial, isSet } from "../../../../helpers";
export const protobufPackage = "ibc.applications.fee.v1";
/** GenesisState defines the ICS29 fee middleware genesis state */
export interface GenesisState {
  /** list of identified packet fees */
  identifiedFees: IdentifiedPacketFees[];
  /** list of fee enabled channels */
  feeEnabledChannels: FeeEnabledChannel[];
  /** list of registered payees */
  registeredPayees: RegisteredPayee[];
  /** list of registered counterparty payees */
  registeredCounterpartyPayees: RegisteredCounterpartyPayee[];
  /** list of forward relayer addresses */
  forwardRelayers: ForwardRelayerAddress[];
}
export interface GenesisStateProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.GenesisState";
  value: Uint8Array;
}
/** GenesisState defines the ICS29 fee middleware genesis state */
export interface GenesisStateSDKType {
  identified_fees: IdentifiedPacketFeesSDKType[];
  fee_enabled_channels: FeeEnabledChannelSDKType[];
  registered_payees: RegisteredPayeeSDKType[];
  registered_counterparty_payees: RegisteredCounterpartyPayeeSDKType[];
  forward_relayers: ForwardRelayerAddressSDKType[];
}
/** FeeEnabledChannel contains the PortID & ChannelID for a fee enabled channel */
export interface FeeEnabledChannel {
  /** unique port identifier */
  portId: string;
  /** unique channel identifier */
  channelId: string;
}
export interface FeeEnabledChannelProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.FeeEnabledChannel";
  value: Uint8Array;
}
/** FeeEnabledChannel contains the PortID & ChannelID for a fee enabled channel */
export interface FeeEnabledChannelSDKType {
  port_id: string;
  channel_id: string;
}
/** RegisteredPayee contains the relayer address and payee address for a specific channel */
export interface RegisteredPayee {
  /** unique channel identifier */
  channelId: string;
  /** the relayer address */
  relayer: string;
  /** the payee address */
  payee: string;
}
export interface RegisteredPayeeProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.RegisteredPayee";
  value: Uint8Array;
}
/** RegisteredPayee contains the relayer address and payee address for a specific channel */
export interface RegisteredPayeeSDKType {
  channel_id: string;
  relayer: string;
  payee: string;
}
/**
 * RegisteredCounterpartyPayee contains the relayer address and counterparty payee address for a specific channel (used
 * for recv fee distribution)
 */
export interface RegisteredCounterpartyPayee {
  /** unique channel identifier */
  channelId: string;
  /** the relayer address */
  relayer: string;
  /** the counterparty payee address */
  counterpartyPayee: string;
}
export interface RegisteredCounterpartyPayeeProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.RegisteredCounterpartyPayee";
  value: Uint8Array;
}
/**
 * RegisteredCounterpartyPayee contains the relayer address and counterparty payee address for a specific channel (used
 * for recv fee distribution)
 */
export interface RegisteredCounterpartyPayeeSDKType {
  channel_id: string;
  relayer: string;
  counterparty_payee: string;
}
/** ForwardRelayerAddress contains the forward relayer address and PacketId used for async acknowledgements */
export interface ForwardRelayerAddress {
  /** the forward relayer address */
  address: string;
}
export interface ForwardRelayerAddressProtoMsg {
  typeUrl: "/ibc.applications.fee.v1.ForwardRelayerAddress";
  value: Uint8Array;
}
/** ForwardRelayerAddress contains the forward relayer address and PacketId used for async acknowledgements */
export interface ForwardRelayerAddressSDKType {
  address: string;
}
function createBaseGenesisState(): GenesisState {
  return {
    identifiedFees: [],
    feeEnabledChannels: [],
    registeredPayees: [],
    registeredCounterpartyPayees: [],
    forwardRelayers: []
  };
}
export const GenesisState = {
  typeUrl: "/ibc.applications.fee.v1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.identifiedFees) {
      IdentifiedPacketFees.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.feeEnabledChannels) {
      FeeEnabledChannel.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.registeredPayees) {
      RegisteredPayee.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.registeredCounterpartyPayees) {
      RegisteredCounterpartyPayee.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.forwardRelayers) {
      ForwardRelayerAddress.encode(v!, writer.uint32(42).fork()).ldelim();
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
          message.identifiedFees.push(IdentifiedPacketFees.decode(reader, reader.uint32()));
          break;
        case 2:
          message.feeEnabledChannels.push(FeeEnabledChannel.decode(reader, reader.uint32()));
          break;
        case 3:
          message.registeredPayees.push(RegisteredPayee.decode(reader, reader.uint32()));
          break;
        case 4:
          message.registeredCounterpartyPayees.push(RegisteredCounterpartyPayee.decode(reader, reader.uint32()));
          break;
        case 5:
          message.forwardRelayers.push(ForwardRelayerAddress.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): GenesisState {
    return {
      identifiedFees: Array.isArray(object?.identifiedFees) ? object.identifiedFees.map((e: any) => IdentifiedPacketFees.fromJSON(e)) : [],
      feeEnabledChannels: Array.isArray(object?.feeEnabledChannels) ? object.feeEnabledChannels.map((e: any) => FeeEnabledChannel.fromJSON(e)) : [],
      registeredPayees: Array.isArray(object?.registeredPayees) ? object.registeredPayees.map((e: any) => RegisteredPayee.fromJSON(e)) : [],
      registeredCounterpartyPayees: Array.isArray(object?.registeredCounterpartyPayees) ? object.registeredCounterpartyPayees.map((e: any) => RegisteredCounterpartyPayee.fromJSON(e)) : [],
      forwardRelayers: Array.isArray(object?.forwardRelayers) ? object.forwardRelayers.map((e: any) => ForwardRelayerAddress.fromJSON(e)) : []
    };
  },
  toJSON(message: GenesisState): JsonSafe<GenesisState> {
    const obj: any = {};
    if (message.identifiedFees) {
      obj.identifiedFees = message.identifiedFees.map(e => e ? IdentifiedPacketFees.toJSON(e) : undefined);
    } else {
      obj.identifiedFees = [];
    }
    if (message.feeEnabledChannels) {
      obj.feeEnabledChannels = message.feeEnabledChannels.map(e => e ? FeeEnabledChannel.toJSON(e) : undefined);
    } else {
      obj.feeEnabledChannels = [];
    }
    if (message.registeredPayees) {
      obj.registeredPayees = message.registeredPayees.map(e => e ? RegisteredPayee.toJSON(e) : undefined);
    } else {
      obj.registeredPayees = [];
    }
    if (message.registeredCounterpartyPayees) {
      obj.registeredCounterpartyPayees = message.registeredCounterpartyPayees.map(e => e ? RegisteredCounterpartyPayee.toJSON(e) : undefined);
    } else {
      obj.registeredCounterpartyPayees = [];
    }
    if (message.forwardRelayers) {
      obj.forwardRelayers = message.forwardRelayers.map(e => e ? ForwardRelayerAddress.toJSON(e) : undefined);
    } else {
      obj.forwardRelayers = [];
    }
    return obj;
  },
  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.identifiedFees = object.identifiedFees?.map(e => IdentifiedPacketFees.fromPartial(e)) || [];
    message.feeEnabledChannels = object.feeEnabledChannels?.map(e => FeeEnabledChannel.fromPartial(e)) || [];
    message.registeredPayees = object.registeredPayees?.map(e => RegisteredPayee.fromPartial(e)) || [];
    message.registeredCounterpartyPayees = object.registeredCounterpartyPayees?.map(e => RegisteredCounterpartyPayee.fromPartial(e)) || [];
    message.forwardRelayers = object.forwardRelayers?.map(e => ForwardRelayerAddress.fromPartial(e)) || [];
    return message;
  },
  fromSDK(object: GenesisStateSDKType): GenesisState {
    return {
      identifiedFees: Array.isArray(object?.identified_fees) ? object.identified_fees.map((e: any) => IdentifiedPacketFees.fromSDK(e)) : [],
      feeEnabledChannels: Array.isArray(object?.fee_enabled_channels) ? object.fee_enabled_channels.map((e: any) => FeeEnabledChannel.fromSDK(e)) : [],
      registeredPayees: Array.isArray(object?.registered_payees) ? object.registered_payees.map((e: any) => RegisteredPayee.fromSDK(e)) : [],
      registeredCounterpartyPayees: Array.isArray(object?.registered_counterparty_payees) ? object.registered_counterparty_payees.map((e: any) => RegisteredCounterpartyPayee.fromSDK(e)) : [],
      forwardRelayers: Array.isArray(object?.forward_relayers) ? object.forward_relayers.map((e: any) => ForwardRelayerAddress.fromSDK(e)) : []
    };
  },
  fromSDKJSON(object: any): GenesisStateSDKType {
    return {
      identified_fees: Array.isArray(object?.identified_fees) ? object.identified_fees.map((e: any) => IdentifiedPacketFees.fromSDKJSON(e)) : [],
      fee_enabled_channels: Array.isArray(object?.fee_enabled_channels) ? object.fee_enabled_channels.map((e: any) => FeeEnabledChannel.fromSDKJSON(e)) : [],
      registered_payees: Array.isArray(object?.registered_payees) ? object.registered_payees.map((e: any) => RegisteredPayee.fromSDKJSON(e)) : [],
      registered_counterparty_payees: Array.isArray(object?.registered_counterparty_payees) ? object.registered_counterparty_payees.map((e: any) => RegisteredCounterpartyPayee.fromSDKJSON(e)) : [],
      forward_relayers: Array.isArray(object?.forward_relayers) ? object.forward_relayers.map((e: any) => ForwardRelayerAddress.fromSDKJSON(e)) : []
    };
  },
  toSDK(message: GenesisState): GenesisStateSDKType {
    const obj: any = {};
    if (message.identifiedFees) {
      obj.identified_fees = message.identifiedFees.map(e => e ? IdentifiedPacketFees.toSDK(e) : undefined);
    } else {
      obj.identified_fees = [];
    }
    if (message.feeEnabledChannels) {
      obj.fee_enabled_channels = message.feeEnabledChannels.map(e => e ? FeeEnabledChannel.toSDK(e) : undefined);
    } else {
      obj.fee_enabled_channels = [];
    }
    if (message.registeredPayees) {
      obj.registered_payees = message.registeredPayees.map(e => e ? RegisteredPayee.toSDK(e) : undefined);
    } else {
      obj.registered_payees = [];
    }
    if (message.registeredCounterpartyPayees) {
      obj.registered_counterparty_payees = message.registeredCounterpartyPayees.map(e => e ? RegisteredCounterpartyPayee.toSDK(e) : undefined);
    } else {
      obj.registered_counterparty_payees = [];
    }
    if (message.forwardRelayers) {
      obj.forward_relayers = message.forwardRelayers.map(e => e ? ForwardRelayerAddress.toSDK(e) : undefined);
    } else {
      obj.forward_relayers = [];
    }
    return obj;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.identifiedFees = object.identified_fees?.map(e => IdentifiedPacketFees.fromAmino(e)) || [];
    message.feeEnabledChannels = object.fee_enabled_channels?.map(e => FeeEnabledChannel.fromAmino(e)) || [];
    message.registeredPayees = object.registered_payees?.map(e => RegisteredPayee.fromAmino(e)) || [];
    message.registeredCounterpartyPayees = object.registered_counterparty_payees?.map(e => RegisteredCounterpartyPayee.fromAmino(e)) || [];
    message.forwardRelayers = object.forward_relayers?.map(e => ForwardRelayerAddress.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.identifiedFees) {
      obj.identified_fees = message.identifiedFees.map(e => e ? IdentifiedPacketFees.toAmino(e) : undefined);
    } else {
      obj.identified_fees = message.identifiedFees;
    }
    if (message.feeEnabledChannels) {
      obj.fee_enabled_channels = message.feeEnabledChannels.map(e => e ? FeeEnabledChannel.toAmino(e) : undefined);
    } else {
      obj.fee_enabled_channels = message.feeEnabledChannels;
    }
    if (message.registeredPayees) {
      obj.registered_payees = message.registeredPayees.map(e => e ? RegisteredPayee.toAmino(e) : undefined);
    } else {
      obj.registered_payees = message.registeredPayees;
    }
    if (message.registeredCounterpartyPayees) {
      obj.registered_counterparty_payees = message.registeredCounterpartyPayees.map(e => e ? RegisteredCounterpartyPayee.toAmino(e) : undefined);
    } else {
      obj.registered_counterparty_payees = message.registeredCounterpartyPayees;
    }
    if (message.forwardRelayers) {
      obj.forward_relayers = message.forwardRelayers.map(e => e ? ForwardRelayerAddress.toAmino(e) : undefined);
    } else {
      obj.forward_relayers = message.forwardRelayers;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  toAminoMsg(message: GenesisState): GenesisStateAminoMsg {
    return {
      type: "cosmos-sdk/GenesisState",
      value: GenesisState.toAmino(message)
    };
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseFeeEnabledChannel(): FeeEnabledChannel {
  return {
    portId: "",
    channelId: ""
  };
}
export const FeeEnabledChannel = {
  typeUrl: "/ibc.applications.fee.v1.FeeEnabledChannel",
  encode(message: FeeEnabledChannel, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): FeeEnabledChannel {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFeeEnabledChannel();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.portId = reader.string();
          break;
        case 2:
          message.channelId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): FeeEnabledChannel {
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : ""
    };
  },
  toJSON(message: FeeEnabledChannel): JsonSafe<FeeEnabledChannel> {
    const obj: any = {};
    message.portId !== undefined && (obj.portId = message.portId);
    message.channelId !== undefined && (obj.channelId = message.channelId);
    return obj;
  },
  fromPartial(object: DeepPartial<FeeEnabledChannel>): FeeEnabledChannel {
    const message = createBaseFeeEnabledChannel();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  },
  fromSDK(object: FeeEnabledChannelSDKType): FeeEnabledChannel {
    return {
      portId: object?.port_id,
      channelId: object?.channel_id
    };
  },
  fromSDKJSON(object: any): FeeEnabledChannelSDKType {
    return {
      port_id: isSet(object.port_id) ? String(object.port_id) : "",
      channel_id: isSet(object.channel_id) ? String(object.channel_id) : ""
    };
  },
  toSDK(message: FeeEnabledChannel): FeeEnabledChannelSDKType {
    const obj: any = {};
    obj.port_id = message.portId;
    obj.channel_id = message.channelId;
    return obj;
  },
  fromAmino(object: FeeEnabledChannelAmino): FeeEnabledChannel {
    const message = createBaseFeeEnabledChannel();
    if (object.port_id !== undefined && object.port_id !== null) {
      message.portId = object.port_id;
    }
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    return message;
  },
  toAmino(message: FeeEnabledChannel): FeeEnabledChannelAmino {
    const obj: any = {};
    obj.port_id = message.portId === "" ? undefined : message.portId;
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    return obj;
  },
  fromAminoMsg(object: FeeEnabledChannelAminoMsg): FeeEnabledChannel {
    return FeeEnabledChannel.fromAmino(object.value);
  },
  toAminoMsg(message: FeeEnabledChannel): FeeEnabledChannelAminoMsg {
    return {
      type: "cosmos-sdk/FeeEnabledChannel",
      value: FeeEnabledChannel.toAmino(message)
    };
  },
  fromProtoMsg(message: FeeEnabledChannelProtoMsg): FeeEnabledChannel {
    return FeeEnabledChannel.decode(message.value);
  },
  toProto(message: FeeEnabledChannel): Uint8Array {
    return FeeEnabledChannel.encode(message).finish();
  },
  toProtoMsg(message: FeeEnabledChannel): FeeEnabledChannelProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.FeeEnabledChannel",
      value: FeeEnabledChannel.encode(message).finish()
    };
  }
};
function createBaseRegisteredPayee(): RegisteredPayee {
  return {
    channelId: "",
    relayer: "",
    payee: ""
  };
}
export const RegisteredPayee = {
  typeUrl: "/ibc.applications.fee.v1.RegisteredPayee",
  encode(message: RegisteredPayee, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.relayer !== "") {
      writer.uint32(18).string(message.relayer);
    }
    if (message.payee !== "") {
      writer.uint32(26).string(message.payee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RegisteredPayee {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisteredPayee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.string();
          break;
        case 2:
          message.relayer = reader.string();
          break;
        case 3:
          message.payee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RegisteredPayee {
    return {
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      relayer: isSet(object.relayer) ? String(object.relayer) : "",
      payee: isSet(object.payee) ? String(object.payee) : ""
    };
  },
  toJSON(message: RegisteredPayee): JsonSafe<RegisteredPayee> {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.relayer !== undefined && (obj.relayer = message.relayer);
    message.payee !== undefined && (obj.payee = message.payee);
    return obj;
  },
  fromPartial(object: DeepPartial<RegisteredPayee>): RegisteredPayee {
    const message = createBaseRegisteredPayee();
    message.channelId = object.channelId ?? "";
    message.relayer = object.relayer ?? "";
    message.payee = object.payee ?? "";
    return message;
  },
  fromSDK(object: RegisteredPayeeSDKType): RegisteredPayee {
    return {
      channelId: object?.channel_id,
      relayer: object?.relayer,
      payee: object?.payee
    };
  },
  fromSDKJSON(object: any): RegisteredPayeeSDKType {
    return {
      channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
      relayer: isSet(object.relayer) ? String(object.relayer) : "",
      payee: isSet(object.payee) ? String(object.payee) : ""
    };
  },
  toSDK(message: RegisteredPayee): RegisteredPayeeSDKType {
    const obj: any = {};
    obj.channel_id = message.channelId;
    obj.relayer = message.relayer;
    obj.payee = message.payee;
    return obj;
  },
  fromAmino(object: RegisteredPayeeAmino): RegisteredPayee {
    const message = createBaseRegisteredPayee();
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.relayer !== undefined && object.relayer !== null) {
      message.relayer = object.relayer;
    }
    if (object.payee !== undefined && object.payee !== null) {
      message.payee = object.payee;
    }
    return message;
  },
  toAmino(message: RegisteredPayee): RegisteredPayeeAmino {
    const obj: any = {};
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    obj.relayer = message.relayer === "" ? undefined : message.relayer;
    obj.payee = message.payee === "" ? undefined : message.payee;
    return obj;
  },
  fromAminoMsg(object: RegisteredPayeeAminoMsg): RegisteredPayee {
    return RegisteredPayee.fromAmino(object.value);
  },
  toAminoMsg(message: RegisteredPayee): RegisteredPayeeAminoMsg {
    return {
      type: "cosmos-sdk/RegisteredPayee",
      value: RegisteredPayee.toAmino(message)
    };
  },
  fromProtoMsg(message: RegisteredPayeeProtoMsg): RegisteredPayee {
    return RegisteredPayee.decode(message.value);
  },
  toProto(message: RegisteredPayee): Uint8Array {
    return RegisteredPayee.encode(message).finish();
  },
  toProtoMsg(message: RegisteredPayee): RegisteredPayeeProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.RegisteredPayee",
      value: RegisteredPayee.encode(message).finish()
    };
  }
};
function createBaseRegisteredCounterpartyPayee(): RegisteredCounterpartyPayee {
  return {
    channelId: "",
    relayer: "",
    counterpartyPayee: ""
  };
}
export const RegisteredCounterpartyPayee = {
  typeUrl: "/ibc.applications.fee.v1.RegisteredCounterpartyPayee",
  encode(message: RegisteredCounterpartyPayee, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.relayer !== "") {
      writer.uint32(18).string(message.relayer);
    }
    if (message.counterpartyPayee !== "") {
      writer.uint32(26).string(message.counterpartyPayee);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): RegisteredCounterpartyPayee {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisteredCounterpartyPayee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.channelId = reader.string();
          break;
        case 2:
          message.relayer = reader.string();
          break;
        case 3:
          message.counterpartyPayee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): RegisteredCounterpartyPayee {
    return {
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      relayer: isSet(object.relayer) ? String(object.relayer) : "",
      counterpartyPayee: isSet(object.counterpartyPayee) ? String(object.counterpartyPayee) : ""
    };
  },
  toJSON(message: RegisteredCounterpartyPayee): JsonSafe<RegisteredCounterpartyPayee> {
    const obj: any = {};
    message.channelId !== undefined && (obj.channelId = message.channelId);
    message.relayer !== undefined && (obj.relayer = message.relayer);
    message.counterpartyPayee !== undefined && (obj.counterpartyPayee = message.counterpartyPayee);
    return obj;
  },
  fromPartial(object: DeepPartial<RegisteredCounterpartyPayee>): RegisteredCounterpartyPayee {
    const message = createBaseRegisteredCounterpartyPayee();
    message.channelId = object.channelId ?? "";
    message.relayer = object.relayer ?? "";
    message.counterpartyPayee = object.counterpartyPayee ?? "";
    return message;
  },
  fromSDK(object: RegisteredCounterpartyPayeeSDKType): RegisteredCounterpartyPayee {
    return {
      channelId: object?.channel_id,
      relayer: object?.relayer,
      counterpartyPayee: object?.counterparty_payee
    };
  },
  fromSDKJSON(object: any): RegisteredCounterpartyPayeeSDKType {
    return {
      channel_id: isSet(object.channel_id) ? String(object.channel_id) : "",
      relayer: isSet(object.relayer) ? String(object.relayer) : "",
      counterparty_payee: isSet(object.counterparty_payee) ? String(object.counterparty_payee) : ""
    };
  },
  toSDK(message: RegisteredCounterpartyPayee): RegisteredCounterpartyPayeeSDKType {
    const obj: any = {};
    obj.channel_id = message.channelId;
    obj.relayer = message.relayer;
    obj.counterparty_payee = message.counterpartyPayee;
    return obj;
  },
  fromAmino(object: RegisteredCounterpartyPayeeAmino): RegisteredCounterpartyPayee {
    const message = createBaseRegisteredCounterpartyPayee();
    if (object.channel_id !== undefined && object.channel_id !== null) {
      message.channelId = object.channel_id;
    }
    if (object.relayer !== undefined && object.relayer !== null) {
      message.relayer = object.relayer;
    }
    if (object.counterparty_payee !== undefined && object.counterparty_payee !== null) {
      message.counterpartyPayee = object.counterparty_payee;
    }
    return message;
  },
  toAmino(message: RegisteredCounterpartyPayee): RegisteredCounterpartyPayeeAmino {
    const obj: any = {};
    obj.channel_id = message.channelId === "" ? undefined : message.channelId;
    obj.relayer = message.relayer === "" ? undefined : message.relayer;
    obj.counterparty_payee = message.counterpartyPayee === "" ? undefined : message.counterpartyPayee;
    return obj;
  },
  fromAminoMsg(object: RegisteredCounterpartyPayeeAminoMsg): RegisteredCounterpartyPayee {
    return RegisteredCounterpartyPayee.fromAmino(object.value);
  },
  toAminoMsg(message: RegisteredCounterpartyPayee): RegisteredCounterpartyPayeeAminoMsg {
    return {
      type: "cosmos-sdk/RegisteredCounterpartyPayee",
      value: RegisteredCounterpartyPayee.toAmino(message)
    };
  },
  fromProtoMsg(message: RegisteredCounterpartyPayeeProtoMsg): RegisteredCounterpartyPayee {
    return RegisteredCounterpartyPayee.decode(message.value);
  },
  toProto(message: RegisteredCounterpartyPayee): Uint8Array {
    return RegisteredCounterpartyPayee.encode(message).finish();
  },
  toProtoMsg(message: RegisteredCounterpartyPayee): RegisteredCounterpartyPayeeProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.RegisteredCounterpartyPayee",
      value: RegisteredCounterpartyPayee.encode(message).finish()
    };
  }
};
function createBaseForwardRelayerAddress(): ForwardRelayerAddress {
  return {
    address: ""
  };
}
export const ForwardRelayerAddress = {
  typeUrl: "/ibc.applications.fee.v1.ForwardRelayerAddress",
  encode(message: ForwardRelayerAddress, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ForwardRelayerAddress {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseForwardRelayerAddress();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ForwardRelayerAddress {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toJSON(message: ForwardRelayerAddress): JsonSafe<ForwardRelayerAddress> {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },
  fromPartial(object: DeepPartial<ForwardRelayerAddress>): ForwardRelayerAddress {
    const message = createBaseForwardRelayerAddress();
    message.address = object.address ?? "";
    return message;
  },
  fromSDK(object: ForwardRelayerAddressSDKType): ForwardRelayerAddress {
    return {
      address: object?.address
    };
  },
  fromSDKJSON(object: any): ForwardRelayerAddressSDKType {
    return {
      address: isSet(object.address) ? String(object.address) : ""
    };
  },
  toSDK(message: ForwardRelayerAddress): ForwardRelayerAddressSDKType {
    const obj: any = {};
    obj.address = message.address;
    return obj;
  },
  fromAmino(object: ForwardRelayerAddressAmino): ForwardRelayerAddress {
    const message = createBaseForwardRelayerAddress();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    return message;
  },
  toAmino(message: ForwardRelayerAddress): ForwardRelayerAddressAmino {
    const obj: any = {};
    obj.address = message.address === "" ? undefined : message.address;
    return obj;
  },
  fromAminoMsg(object: ForwardRelayerAddressAminoMsg): ForwardRelayerAddress {
    return ForwardRelayerAddress.fromAmino(object.value);
  },
  toAminoMsg(message: ForwardRelayerAddress): ForwardRelayerAddressAminoMsg {
    return {
      type: "cosmos-sdk/ForwardRelayerAddress",
      value: ForwardRelayerAddress.toAmino(message)
    };
  },
  fromProtoMsg(message: ForwardRelayerAddressProtoMsg): ForwardRelayerAddress {
    return ForwardRelayerAddress.decode(message.value);
  },
  toProto(message: ForwardRelayerAddress): Uint8Array {
    return ForwardRelayerAddress.encode(message).finish();
  },
  toProtoMsg(message: ForwardRelayerAddress): ForwardRelayerAddressProtoMsg {
    return {
      typeUrl: "/ibc.applications.fee.v1.ForwardRelayerAddress",
      value: ForwardRelayerAddress.encode(message).finish()
    };
  }
};