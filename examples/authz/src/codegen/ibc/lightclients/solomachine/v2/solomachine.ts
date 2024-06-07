//@ts-nocheck
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { ConnectionEnd, ConnectionEndAmino, ConnectionEndSDKType } from "../../../core/connection/v1/connection";
import { Channel, ChannelAmino, ChannelSDKType } from "../../../core/channel/v1/channel";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "../../../../helpers";
import { JsonSafe } from "../../../../json-safe";
import { GlobalDecoderRegistry } from "../../../../registry";
export const protobufPackage = "ibc.lightclients.solomachine.v2";
/**
 * DataType defines the type of solo machine proof being created. This is done
 * to preserve uniqueness of different data sign byte encodings.
 */
export enum DataType {
  /** DATA_TYPE_UNINITIALIZED_UNSPECIFIED - Default State */
  DATA_TYPE_UNINITIALIZED_UNSPECIFIED = 0,
  /** DATA_TYPE_CLIENT_STATE - Data type for client state verification */
  DATA_TYPE_CLIENT_STATE = 1,
  /** DATA_TYPE_CONSENSUS_STATE - Data type for consensus state verification */
  DATA_TYPE_CONSENSUS_STATE = 2,
  /** DATA_TYPE_CONNECTION_STATE - Data type for connection state verification */
  DATA_TYPE_CONNECTION_STATE = 3,
  /** DATA_TYPE_CHANNEL_STATE - Data type for channel state verification */
  DATA_TYPE_CHANNEL_STATE = 4,
  /** DATA_TYPE_PACKET_COMMITMENT - Data type for packet commitment verification */
  DATA_TYPE_PACKET_COMMITMENT = 5,
  /** DATA_TYPE_PACKET_ACKNOWLEDGEMENT - Data type for packet acknowledgement verification */
  DATA_TYPE_PACKET_ACKNOWLEDGEMENT = 6,
  /** DATA_TYPE_PACKET_RECEIPT_ABSENCE - Data type for packet receipt absence verification */
  DATA_TYPE_PACKET_RECEIPT_ABSENCE = 7,
  /** DATA_TYPE_NEXT_SEQUENCE_RECV - Data type for next sequence recv verification */
  DATA_TYPE_NEXT_SEQUENCE_RECV = 8,
  /** DATA_TYPE_HEADER - Data type for header verification */
  DATA_TYPE_HEADER = 9,
  UNRECOGNIZED = -1,
}
export const DataTypeSDKType = DataType;
export const DataTypeAmino = DataType;
export function dataTypeFromJSON(object: any): DataType {
  switch (object) {
    case 0:
    case "DATA_TYPE_UNINITIALIZED_UNSPECIFIED":
      return DataType.DATA_TYPE_UNINITIALIZED_UNSPECIFIED;
    case 1:
    case "DATA_TYPE_CLIENT_STATE":
      return DataType.DATA_TYPE_CLIENT_STATE;
    case 2:
    case "DATA_TYPE_CONSENSUS_STATE":
      return DataType.DATA_TYPE_CONSENSUS_STATE;
    case 3:
    case "DATA_TYPE_CONNECTION_STATE":
      return DataType.DATA_TYPE_CONNECTION_STATE;
    case 4:
    case "DATA_TYPE_CHANNEL_STATE":
      return DataType.DATA_TYPE_CHANNEL_STATE;
    case 5:
    case "DATA_TYPE_PACKET_COMMITMENT":
      return DataType.DATA_TYPE_PACKET_COMMITMENT;
    case 6:
    case "DATA_TYPE_PACKET_ACKNOWLEDGEMENT":
      return DataType.DATA_TYPE_PACKET_ACKNOWLEDGEMENT;
    case 7:
    case "DATA_TYPE_PACKET_RECEIPT_ABSENCE":
      return DataType.DATA_TYPE_PACKET_RECEIPT_ABSENCE;
    case 8:
    case "DATA_TYPE_NEXT_SEQUENCE_RECV":
      return DataType.DATA_TYPE_NEXT_SEQUENCE_RECV;
    case 9:
    case "DATA_TYPE_HEADER":
      return DataType.DATA_TYPE_HEADER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return DataType.UNRECOGNIZED;
  }
}
export function dataTypeToJSON(object: DataType): string {
  switch (object) {
    case DataType.DATA_TYPE_UNINITIALIZED_UNSPECIFIED:
      return "DATA_TYPE_UNINITIALIZED_UNSPECIFIED";
    case DataType.DATA_TYPE_CLIENT_STATE:
      return "DATA_TYPE_CLIENT_STATE";
    case DataType.DATA_TYPE_CONSENSUS_STATE:
      return "DATA_TYPE_CONSENSUS_STATE";
    case DataType.DATA_TYPE_CONNECTION_STATE:
      return "DATA_TYPE_CONNECTION_STATE";
    case DataType.DATA_TYPE_CHANNEL_STATE:
      return "DATA_TYPE_CHANNEL_STATE";
    case DataType.DATA_TYPE_PACKET_COMMITMENT:
      return "DATA_TYPE_PACKET_COMMITMENT";
    case DataType.DATA_TYPE_PACKET_ACKNOWLEDGEMENT:
      return "DATA_TYPE_PACKET_ACKNOWLEDGEMENT";
    case DataType.DATA_TYPE_PACKET_RECEIPT_ABSENCE:
      return "DATA_TYPE_PACKET_RECEIPT_ABSENCE";
    case DataType.DATA_TYPE_NEXT_SEQUENCE_RECV:
      return "DATA_TYPE_NEXT_SEQUENCE_RECV";
    case DataType.DATA_TYPE_HEADER:
      return "DATA_TYPE_HEADER";
    case DataType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * ClientState defines a solo machine client that tracks the current consensus
 * state and if the client is frozen.
 */
export interface ClientState {
  /** latest sequence of the client state */
  sequence: bigint;
  /** frozen sequence of the solo machine */
  isFrozen: boolean;
  consensusState?: ConsensusState;
  /**
   * when set to true, will allow governance to update a solo machine client.
   * The client will be unfrozen if it is frozen.
   */
  allowUpdateAfterProposal: boolean;
}
export interface ClientStateProtoMsg {
  typeUrl: "/ibc.lightclients.solomachine.v2.ClientState";
  value: Uint8Array;
}
/**
 * ClientState defines a solo machine client that tracks the current consensus
 * state and if the client is frozen.
 */
export interface ClientStateAmino {
  /** latest sequence of the client state */
  sequence?: string;
  /** frozen sequence of the solo machine */
  is_frozen?: boolean;
  consensus_state?: ConsensusStateAmino;
  /**
   * when set to true, will allow governance to update a solo machine client.
   * The client will be unfrozen if it is frozen.
   */
  allow_update_after_proposal?: boolean;
}
export interface ClientStateAminoMsg {
  type: "cosmos-sdk/ClientState";
  value: ClientStateAmino;
}
/**
 * ClientState defines a solo machine client that tracks the current consensus
 * state and if the client is frozen.
 */
export interface ClientStateSDKType {
  sequence: bigint;
  is_frozen: boolean;
  consensus_state?: ConsensusStateSDKType;
  allow_update_after_proposal: boolean;
}
/**
 * ConsensusState defines a solo machine consensus state. The sequence of a
 * consensus state is contained in the "height" key used in storing the
 * consensus state.
 */
export interface ConsensusState {
  /** public key of the solo machine */
  publicKey?: Any;
  /**
   * diversifier allows the same public key to be re-used across different solo
   * machine clients (potentially on different chains) without being considered
   * misbehaviour.
   */
  diversifier: string;
  timestamp: bigint;
}
export interface ConsensusStateProtoMsg {
  typeUrl: "/ibc.lightclients.solomachine.v2.ConsensusState";
  value: Uint8Array;
}
/**
 * ConsensusState defines a solo machine consensus state. The sequence of a
 * consensus state is contained in the "height" key used in storing the
 * consensus state.
 */
export interface ConsensusStateAmino {
  /** public key of the solo machine */
  public_key?: AnyAmino;
  /**
   * diversifier allows the same public key to be re-used across different solo
   * machine clients (potentially on different chains) without being considered
   * misbehaviour.
   */
  diversifier?: string;
  timestamp?: string;
}
export interface ConsensusStateAminoMsg {
  type: "cosmos-sdk/ConsensusState";
  value: ConsensusStateAmino;
}
/**
 * ConsensusState defines a solo machine consensus state. The sequence of a
 * consensus state is contained in the "height" key used in storing the
 * consensus state.
 */
export interface ConsensusStateSDKType {
  public_key?: AnySDKType;
  diversifier: string;
  timestamp: bigint;
}
/** Header defines a solo machine consensus header */
export interface Header {
  /** sequence to update solo machine public key at */
  sequence: bigint;
  timestamp: bigint;
  signature: Uint8Array;
  newPublicKey?: Any;
  newDiversifier: string;
}
export interface HeaderProtoMsg {
  typeUrl: "/ibc.lightclients.solomachine.v2.Header";
  value: Uint8Array;
}
/** Header defines a solo machine consensus header */
export interface HeaderAmino {
  /** sequence to update solo machine public key at */
  sequence?: string;
  timestamp?: string;
  signature?: string;
  new_public_key?: AnyAmino;
  new_diversifier?: string;
}
export interface HeaderAminoMsg {
  type: "cosmos-sdk/Header";
  value: HeaderAmino;
}
/** Header defines a solo machine consensus header */
export interface HeaderSDKType {
  sequence: bigint;
  timestamp: bigint;
  signature: Uint8Array;
  new_public_key?: AnySDKType;
  new_diversifier: string;
}
/**
 * Misbehaviour defines misbehaviour for a solo machine which consists
 * of a sequence and two signatures over different messages at that sequence.
 */
export interface Misbehaviour {
  clientId: string;
  sequence: bigint;
  signatureOne?: SignatureAndData;
  signatureTwo?: SignatureAndData;
}
export interface MisbehaviourProtoMsg {
  typeUrl: "/ibc.lightclients.solomachine.v2.Misbehaviour";
  value: Uint8Array;
}
/**
 * Misbehaviour defines misbehaviour for a solo machine which consists
 * of a sequence and two signatures over different messages at that sequence.
 */
export interface MisbehaviourAmino {
  client_id?: string;
  sequence?: string;
  signature_one?: SignatureAndDataAmino;
  signature_two?: SignatureAndDataAmino;
}
export interface MisbehaviourAminoMsg {
  type: "cosmos-sdk/Misbehaviour";
  value: MisbehaviourAmino;
}
/**
 * Misbehaviour defines misbehaviour for a solo machine which consists
 * of a sequence and two signatures over different messages at that sequence.
 */
export interface MisbehaviourSDKType {
  client_id: string;
  sequence: bigint;
  signature_one?: SignatureAndDataSDKType;
  signature_two?: SignatureAndDataSDKType;
}
/**
 * SignatureAndData contains a signature and the data signed over to create that
 * signature.
 */
export interface SignatureAndData {
  signature: Uint8Array;
  dataType: DataType;
  data: Uint8Array;
  timestamp: bigint;
}
export interface SignatureAndDataProtoMsg {
  typeUrl: "/ibc.lightclients.solomachine.v2.SignatureAndData";
  value: Uint8Array;
}
/**
 * SignatureAndData contains a signature and the data signed over to create that
 * signature.
 */
export interface SignatureAndDataAmino {
  signature?: string;
  data_type?: DataType;
  data?: string;
  timestamp?: string;
}
export interface SignatureAndDataAminoMsg {
  type: "cosmos-sdk/SignatureAndData";
  value: SignatureAndDataAmino;
}
/**
 * SignatureAndData contains a signature and the data signed over to create that
 * signature.
 */
export interface SignatureAndDataSDKType {
  signature: Uint8Array;
  data_type: DataType;
  data: Uint8Array;
  timestamp: bigint;
}
/**
 * TimestampedSignatureData contains the signature data and the timestamp of the
 * signature.
 */
export interface TimestampedSignatureData {
  signatureData: Uint8Array;
  timestamp: bigint;
}
export interface TimestampedSignatureDataProtoMsg {
  typeUrl: "/ibc.lightclients.solomachine.v2.TimestampedSignatureData";
  value: Uint8Array;
}
/**
 * TimestampedSignatureData contains the signature data and the timestamp of the
 * signature.
 */
export interface TimestampedSignatureDataAmino {
  signature_data?: string;
  timestamp?: string;
}
export interface TimestampedSignatureDataAminoMsg {
  type: "cosmos-sdk/TimestampedSignatureData";
  value: TimestampedSignatureDataAmino;
}
/**
 * TimestampedSignatureData contains the signature data and the timestamp of the
 * signature.
 */
export interface TimestampedSignatureDataSDKType {
  signature_data: Uint8Array;
  timestamp: bigint;
}
/** SignBytes defines the signed bytes used for signature verification. */
export interface SignBytes {
  sequence: bigint;
  timestamp: bigint;
  diversifier: string;
  /** type of the data used */
  dataType: DataType;
  /** marshaled data */
  data: Uint8Array;
}
export interface SignBytesProtoMsg {
  typeUrl: "/ibc.lightclients.solomachine.v2.SignBytes";
  value: Uint8Array;
}
/** SignBytes defines the signed bytes used for signature verification. */
export interface SignBytesAmino {
  sequence?: string;
  timestamp?: string;
  diversifier?: string;
  /** type of the data used */
  data_type?: DataType;
  /** marshaled data */
  data?: string;
}
export interface SignBytesAminoMsg {
  type: "cosmos-sdk/SignBytes";
  value: SignBytesAmino;
}
/** SignBytes defines the signed bytes used for signature verification. */
export interface SignBytesSDKType {
  sequence: bigint;
  timestamp: bigint;
  diversifier: string;
  data_type: DataType;
  data: Uint8Array;
}
/** HeaderData returns the SignBytes data for update verification. */
export interface HeaderData {
  /** header public key */
  newPubKey?: Any;
  /** header diversifier */
  newDiversifier: string;
}
export interface HeaderDataProtoMsg {
  typeUrl: "/ibc.lightclients.solomachine.v2.HeaderData";
  value: Uint8Array;
}
/** HeaderData returns the SignBytes data for update verification. */
export interface HeaderDataAmino {
  /** header public key */
  new_pub_key?: AnyAmino;
  /** header diversifier */
  new_diversifier?: string;
}
export interface HeaderDataAminoMsg {
  type: "cosmos-sdk/HeaderData";
  value: HeaderDataAmino;
}
/** HeaderData returns the SignBytes data for update verification. */
export interface HeaderDataSDKType {
  new_pub_key?: AnySDKType;
  new_diversifier: string;
}
/** ClientStateData returns the SignBytes data for client state verification. */
export interface ClientStateData {
  path: Uint8Array;
  clientState?: Any;
}
export interface ClientStateDataProtoMsg {
  typeUrl: "/ibc.lightclients.solomachine.v2.ClientStateData";
  value: Uint8Array;
}
/** ClientStateData returns the SignBytes data for client state verification. */
export interface ClientStateDataAmino {
  path?: string;
  client_state?: AnyAmino;
}
export interface ClientStateDataAminoMsg {
  type: "cosmos-sdk/ClientStateData";
  value: ClientStateDataAmino;
}
/** ClientStateData returns the SignBytes data for client state verification. */
export interface ClientStateDataSDKType {
  path: Uint8Array;
  client_state?: AnySDKType;
}
/**
 * ConsensusStateData returns the SignBytes data for consensus state
 * verification.
 */
export interface ConsensusStateData {
  path: Uint8Array;
  consensusState?: Any;
}
export interface ConsensusStateDataProtoMsg {
  typeUrl: "/ibc.lightclients.solomachine.v2.ConsensusStateData";
  value: Uint8Array;
}
/**
 * ConsensusStateData returns the SignBytes data for consensus state
 * verification.
 */
export interface ConsensusStateDataAmino {
  path?: string;
  consensus_state?: AnyAmino;
}
export interface ConsensusStateDataAminoMsg {
  type: "cosmos-sdk/ConsensusStateData";
  value: ConsensusStateDataAmino;
}
/**
 * ConsensusStateData returns the SignBytes data for consensus state
 * verification.
 */
export interface ConsensusStateDataSDKType {
  path: Uint8Array;
  consensus_state?: AnySDKType;
}
/**
 * ConnectionStateData returns the SignBytes data for connection state
 * verification.
 */
export interface ConnectionStateData {
  path: Uint8Array;
  connection?: ConnectionEnd;
}
export interface ConnectionStateDataProtoMsg {
  typeUrl: "/ibc.lightclients.solomachine.v2.ConnectionStateData";
  value: Uint8Array;
}
/**
 * ConnectionStateData returns the SignBytes data for connection state
 * verification.
 */
export interface ConnectionStateDataAmino {
  path?: string;
  connection?: ConnectionEndAmino;
}
export interface ConnectionStateDataAminoMsg {
  type: "cosmos-sdk/ConnectionStateData";
  value: ConnectionStateDataAmino;
}
/**
 * ConnectionStateData returns the SignBytes data for connection state
 * verification.
 */
export interface ConnectionStateDataSDKType {
  path: Uint8Array;
  connection?: ConnectionEndSDKType;
}
/**
 * ChannelStateData returns the SignBytes data for channel state
 * verification.
 */
export interface ChannelStateData {
  path: Uint8Array;
  channel?: Channel;
}
export interface ChannelStateDataProtoMsg {
  typeUrl: "/ibc.lightclients.solomachine.v2.ChannelStateData";
  value: Uint8Array;
}
/**
 * ChannelStateData returns the SignBytes data for channel state
 * verification.
 */
export interface ChannelStateDataAmino {
  path?: string;
  channel?: ChannelAmino;
}
export interface ChannelStateDataAminoMsg {
  type: "cosmos-sdk/ChannelStateData";
  value: ChannelStateDataAmino;
}
/**
 * ChannelStateData returns the SignBytes data for channel state
 * verification.
 */
export interface ChannelStateDataSDKType {
  path: Uint8Array;
  channel?: ChannelSDKType;
}
/**
 * PacketCommitmentData returns the SignBytes data for packet commitment
 * verification.
 */
export interface PacketCommitmentData {
  path: Uint8Array;
  commitment: Uint8Array;
}
export interface PacketCommitmentDataProtoMsg {
  typeUrl: "/ibc.lightclients.solomachine.v2.PacketCommitmentData";
  value: Uint8Array;
}
/**
 * PacketCommitmentData returns the SignBytes data for packet commitment
 * verification.
 */
export interface PacketCommitmentDataAmino {
  path?: string;
  commitment?: string;
}
export interface PacketCommitmentDataAminoMsg {
  type: "cosmos-sdk/PacketCommitmentData";
  value: PacketCommitmentDataAmino;
}
/**
 * PacketCommitmentData returns the SignBytes data for packet commitment
 * verification.
 */
export interface PacketCommitmentDataSDKType {
  path: Uint8Array;
  commitment: Uint8Array;
}
/**
 * PacketAcknowledgementData returns the SignBytes data for acknowledgement
 * verification.
 */
export interface PacketAcknowledgementData {
  path: Uint8Array;
  acknowledgement: Uint8Array;
}
export interface PacketAcknowledgementDataProtoMsg {
  typeUrl: "/ibc.lightclients.solomachine.v2.PacketAcknowledgementData";
  value: Uint8Array;
}
/**
 * PacketAcknowledgementData returns the SignBytes data for acknowledgement
 * verification.
 */
export interface PacketAcknowledgementDataAmino {
  path?: string;
  acknowledgement?: string;
}
export interface PacketAcknowledgementDataAminoMsg {
  type: "cosmos-sdk/PacketAcknowledgementData";
  value: PacketAcknowledgementDataAmino;
}
/**
 * PacketAcknowledgementData returns the SignBytes data for acknowledgement
 * verification.
 */
export interface PacketAcknowledgementDataSDKType {
  path: Uint8Array;
  acknowledgement: Uint8Array;
}
/**
 * PacketReceiptAbsenceData returns the SignBytes data for
 * packet receipt absence verification.
 */
export interface PacketReceiptAbsenceData {
  path: Uint8Array;
}
export interface PacketReceiptAbsenceDataProtoMsg {
  typeUrl: "/ibc.lightclients.solomachine.v2.PacketReceiptAbsenceData";
  value: Uint8Array;
}
/**
 * PacketReceiptAbsenceData returns the SignBytes data for
 * packet receipt absence verification.
 */
export interface PacketReceiptAbsenceDataAmino {
  path?: string;
}
export interface PacketReceiptAbsenceDataAminoMsg {
  type: "cosmos-sdk/PacketReceiptAbsenceData";
  value: PacketReceiptAbsenceDataAmino;
}
/**
 * PacketReceiptAbsenceData returns the SignBytes data for
 * packet receipt absence verification.
 */
export interface PacketReceiptAbsenceDataSDKType {
  path: Uint8Array;
}
/**
 * NextSequenceRecvData returns the SignBytes data for verification of the next
 * sequence to be received.
 */
export interface NextSequenceRecvData {
  path: Uint8Array;
  nextSeqRecv: bigint;
}
export interface NextSequenceRecvDataProtoMsg {
  typeUrl: "/ibc.lightclients.solomachine.v2.NextSequenceRecvData";
  value: Uint8Array;
}
/**
 * NextSequenceRecvData returns the SignBytes data for verification of the next
 * sequence to be received.
 */
export interface NextSequenceRecvDataAmino {
  path?: string;
  next_seq_recv?: string;
}
export interface NextSequenceRecvDataAminoMsg {
  type: "cosmos-sdk/NextSequenceRecvData";
  value: NextSequenceRecvDataAmino;
}
/**
 * NextSequenceRecvData returns the SignBytes data for verification of the next
 * sequence to be received.
 */
export interface NextSequenceRecvDataSDKType {
  path: Uint8Array;
  next_seq_recv: bigint;
}
function createBaseClientState(): ClientState {
  return {
    sequence: BigInt(0),
    isFrozen: false,
    consensusState: undefined,
    allowUpdateAfterProposal: false
  };
}
export const ClientState = {
  typeUrl: "/ibc.lightclients.solomachine.v2.ClientState",
  aminoType: "cosmos-sdk/ClientState",
  is(o: any): o is ClientState {
    return o && (o.$typeUrl === ClientState.typeUrl || typeof o.sequence === "bigint" && typeof o.isFrozen === "boolean" && typeof o.allowUpdateAfterProposal === "boolean");
  },
  isSDK(o: any): o is ClientStateSDKType {
    return o && (o.$typeUrl === ClientState.typeUrl || typeof o.sequence === "bigint" && typeof o.is_frozen === "boolean" && typeof o.allow_update_after_proposal === "boolean");
  },
  isAmino(o: any): o is ClientStateAmino {
    return o && (o.$typeUrl === ClientState.typeUrl || typeof o.sequence === "bigint" && typeof o.is_frozen === "boolean" && typeof o.allow_update_after_proposal === "boolean");
  },
  encode(message: ClientState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sequence !== undefined) {
      writer.uint32(8).uint64(message.sequence);
    }
    if (message.isFrozen !== undefined) {
      writer.uint32(16).bool(message.isFrozen);
    }
    if (message.consensusState !== undefined) {
      ConsensusState.encode(message.consensusState, writer.uint32(26).fork()).ldelim();
    }
    if (message.allowUpdateAfterProposal !== undefined) {
      writer.uint32(32).bool(message.allowUpdateAfterProposal);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClientState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = reader.uint64();
          break;
        case 2:
          message.isFrozen = reader.bool();
          break;
        case 3:
          message.consensusState = ConsensusState.decode(reader, reader.uint32());
          break;
        case 4:
          message.allowUpdateAfterProposal = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ClientState {
    const obj = createBaseClientState();
    if (isSet(object.sequence)) obj.sequence = BigInt(object.sequence.toString());
    if (isSet(object.isFrozen)) obj.isFrozen = Boolean(object.isFrozen);
    if (isSet(object.consensusState)) obj.consensusState = ConsensusState.fromJSON(object.consensusState);
    if (isSet(object.allowUpdateAfterProposal)) obj.allowUpdateAfterProposal = Boolean(object.allowUpdateAfterProposal);
    return obj;
  },
  toJSON(message: ClientState): JsonSafe<ClientState> {
    const obj: any = {};
    message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
    message.isFrozen !== undefined && (obj.isFrozen = message.isFrozen);
    message.consensusState !== undefined && (obj.consensusState = message.consensusState ? ConsensusState.toJSON(message.consensusState) : undefined);
    message.allowUpdateAfterProposal !== undefined && (obj.allowUpdateAfterProposal = message.allowUpdateAfterProposal);
    return obj;
  },
  fromPartial(object: DeepPartial<ClientState>): ClientState {
    const message = createBaseClientState();
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence.toString());
    }
    message.isFrozen = object.isFrozen ?? false;
    if (object.consensusState !== undefined && object.consensusState !== null) {
      message.consensusState = ConsensusState.fromPartial(object.consensusState);
    }
    message.allowUpdateAfterProposal = object.allowUpdateAfterProposal ?? false;
    return message;
  },
  fromSDK(object: ClientStateSDKType): ClientState {
    return {
      sequence: object?.sequence,
      isFrozen: object?.is_frozen,
      consensusState: object.consensus_state ? ConsensusState.fromSDK(object.consensus_state) : undefined,
      allowUpdateAfterProposal: object?.allow_update_after_proposal
    };
  },
  toSDK(message: ClientState): ClientStateSDKType {
    const obj: any = {};
    obj.sequence = message.sequence;
    obj.is_frozen = message.isFrozen;
    message.consensusState !== undefined && (obj.consensus_state = message.consensusState ? ConsensusState.toSDK(message.consensusState) : undefined);
    obj.allow_update_after_proposal = message.allowUpdateAfterProposal;
    return obj;
  },
  fromAmino(object: ClientStateAmino): ClientState {
    const message = createBaseClientState();
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    if (object.is_frozen !== undefined && object.is_frozen !== null) {
      message.isFrozen = object.is_frozen;
    }
    if (object.consensus_state !== undefined && object.consensus_state !== null) {
      message.consensusState = ConsensusState.fromAmino(object.consensus_state);
    }
    if (object.allow_update_after_proposal !== undefined && object.allow_update_after_proposal !== null) {
      message.allowUpdateAfterProposal = object.allow_update_after_proposal;
    }
    return message;
  },
  toAmino(message: ClientState): ClientStateAmino {
    const obj: any = {};
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence.toString() : undefined;
    obj.is_frozen = message.isFrozen === false ? undefined : message.isFrozen;
    obj.consensus_state = message.consensusState ? ConsensusState.toAmino(message.consensusState) : undefined;
    obj.allow_update_after_proposal = message.allowUpdateAfterProposal === false ? undefined : message.allowUpdateAfterProposal;
    return obj;
  },
  fromAminoMsg(object: ClientStateAminoMsg): ClientState {
    return ClientState.fromAmino(object.value);
  },
  toAminoMsg(message: ClientState): ClientStateAminoMsg {
    return {
      type: "cosmos-sdk/ClientState",
      value: ClientState.toAmino(message)
    };
  },
  fromProtoMsg(message: ClientStateProtoMsg): ClientState {
    return ClientState.decode(message.value);
  },
  toProto(message: ClientState): Uint8Array {
    return ClientState.encode(message).finish();
  },
  toProtoMsg(message: ClientState): ClientStateProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v2.ClientState",
      value: ClientState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ClientState.typeUrl, ClientState);
GlobalDecoderRegistry.registerAminoProtoMapping(ClientState.aminoType, ClientState.typeUrl);
function createBaseConsensusState(): ConsensusState {
  return {
    publicKey: undefined,
    diversifier: "",
    timestamp: BigInt(0)
  };
}
export const ConsensusState = {
  typeUrl: "/ibc.lightclients.solomachine.v2.ConsensusState",
  aminoType: "cosmos-sdk/ConsensusState",
  is(o: any): o is ConsensusState {
    return o && (o.$typeUrl === ConsensusState.typeUrl || typeof o.diversifier === "string" && typeof o.timestamp === "bigint");
  },
  isSDK(o: any): o is ConsensusStateSDKType {
    return o && (o.$typeUrl === ConsensusState.typeUrl || typeof o.diversifier === "string" && typeof o.timestamp === "bigint");
  },
  isAmino(o: any): o is ConsensusStateAmino {
    return o && (o.$typeUrl === ConsensusState.typeUrl || typeof o.diversifier === "string" && typeof o.timestamp === "bigint");
  },
  encode(message: ConsensusState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.publicKey !== undefined) {
      Any.encode(message.publicKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.diversifier !== undefined) {
      writer.uint32(18).string(message.diversifier);
    }
    if (message.timestamp !== undefined) {
      writer.uint32(24).uint64(message.timestamp);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConsensusState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsensusState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.publicKey = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.diversifier = reader.string();
          break;
        case 3:
          message.timestamp = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConsensusState {
    const obj = createBaseConsensusState();
    if (isSet(object.publicKey)) obj.publicKey = Any.fromJSON(object.publicKey);
    if (isSet(object.diversifier)) obj.diversifier = String(object.diversifier);
    if (isSet(object.timestamp)) obj.timestamp = BigInt(object.timestamp.toString());
    return obj;
  },
  toJSON(message: ConsensusState): JsonSafe<ConsensusState> {
    const obj: any = {};
    message.publicKey !== undefined && (obj.publicKey = message.publicKey ? Any.toJSON(message.publicKey) : undefined);
    message.diversifier !== undefined && (obj.diversifier = message.diversifier);
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<ConsensusState>): ConsensusState {
    const message = createBaseConsensusState();
    if (object.publicKey !== undefined && object.publicKey !== null) {
      message.publicKey = Any.fromPartial(object.publicKey);
    }
    message.diversifier = object.diversifier ?? "";
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = BigInt(object.timestamp.toString());
    }
    return message;
  },
  fromSDK(object: ConsensusStateSDKType): ConsensusState {
    return {
      publicKey: object.public_key ? Any.fromSDK(object.public_key) : undefined,
      diversifier: object?.diversifier,
      timestamp: object?.timestamp
    };
  },
  toSDK(message: ConsensusState): ConsensusStateSDKType {
    const obj: any = {};
    message.publicKey !== undefined && (obj.public_key = message.publicKey ? Any.toSDK(message.publicKey) : undefined);
    obj.diversifier = message.diversifier;
    obj.timestamp = message.timestamp;
    return obj;
  },
  fromAmino(object: ConsensusStateAmino): ConsensusState {
    const message = createBaseConsensusState();
    if (object.public_key !== undefined && object.public_key !== null) {
      message.publicKey = Any.fromAmino(object.public_key);
    }
    if (object.diversifier !== undefined && object.diversifier !== null) {
      message.diversifier = object.diversifier;
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = BigInt(object.timestamp);
    }
    return message;
  },
  toAmino(message: ConsensusState): ConsensusStateAmino {
    const obj: any = {};
    obj.public_key = message.publicKey ? Any.toAmino(message.publicKey) : undefined;
    obj.diversifier = message.diversifier === "" ? undefined : message.diversifier;
    obj.timestamp = message.timestamp !== BigInt(0) ? message.timestamp.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ConsensusStateAminoMsg): ConsensusState {
    return ConsensusState.fromAmino(object.value);
  },
  toAminoMsg(message: ConsensusState): ConsensusStateAminoMsg {
    return {
      type: "cosmos-sdk/ConsensusState",
      value: ConsensusState.toAmino(message)
    };
  },
  fromProtoMsg(message: ConsensusStateProtoMsg): ConsensusState {
    return ConsensusState.decode(message.value);
  },
  toProto(message: ConsensusState): Uint8Array {
    return ConsensusState.encode(message).finish();
  },
  toProtoMsg(message: ConsensusState): ConsensusStateProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v2.ConsensusState",
      value: ConsensusState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ConsensusState.typeUrl, ConsensusState);
GlobalDecoderRegistry.registerAminoProtoMapping(ConsensusState.aminoType, ConsensusState.typeUrl);
function createBaseHeader(): Header {
  return {
    sequence: BigInt(0),
    timestamp: BigInt(0),
    signature: new Uint8Array(),
    newPublicKey: undefined,
    newDiversifier: ""
  };
}
export const Header = {
  typeUrl: "/ibc.lightclients.solomachine.v2.Header",
  aminoType: "cosmos-sdk/Header",
  is(o: any): o is Header {
    return o && (o.$typeUrl === Header.typeUrl || typeof o.sequence === "bigint" && typeof o.timestamp === "bigint" && (o.signature instanceof Uint8Array || typeof o.signature === "string") && typeof o.newDiversifier === "string");
  },
  isSDK(o: any): o is HeaderSDKType {
    return o && (o.$typeUrl === Header.typeUrl || typeof o.sequence === "bigint" && typeof o.timestamp === "bigint" && (o.signature instanceof Uint8Array || typeof o.signature === "string") && typeof o.new_diversifier === "string");
  },
  isAmino(o: any): o is HeaderAmino {
    return o && (o.$typeUrl === Header.typeUrl || typeof o.sequence === "bigint" && typeof o.timestamp === "bigint" && (o.signature instanceof Uint8Array || typeof o.signature === "string") && typeof o.new_diversifier === "string");
  },
  encode(message: Header, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sequence !== undefined) {
      writer.uint32(8).uint64(message.sequence);
    }
    if (message.timestamp !== undefined) {
      writer.uint32(16).uint64(message.timestamp);
    }
    if (message.signature.length !== 0) {
      writer.uint32(26).bytes(message.signature);
    }
    if (message.newPublicKey !== undefined) {
      Any.encode(message.newPublicKey, writer.uint32(34).fork()).ldelim();
    }
    if (message.newDiversifier !== undefined) {
      writer.uint32(42).string(message.newDiversifier);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Header {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = reader.uint64();
          break;
        case 2:
          message.timestamp = reader.uint64();
          break;
        case 3:
          message.signature = reader.bytes();
          break;
        case 4:
          message.newPublicKey = Any.decode(reader, reader.uint32());
          break;
        case 5:
          message.newDiversifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Header {
    const obj = createBaseHeader();
    if (isSet(object.sequence)) obj.sequence = BigInt(object.sequence.toString());
    if (isSet(object.timestamp)) obj.timestamp = BigInt(object.timestamp.toString());
    if (isSet(object.signature)) obj.signature = bytesFromBase64(object.signature);
    if (isSet(object.newPublicKey)) obj.newPublicKey = Any.fromJSON(object.newPublicKey);
    if (isSet(object.newDiversifier)) obj.newDiversifier = String(object.newDiversifier);
    return obj;
  },
  toJSON(message: Header): JsonSafe<Header> {
    const obj: any = {};
    message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || BigInt(0)).toString());
    message.signature !== undefined && (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
    message.newPublicKey !== undefined && (obj.newPublicKey = message.newPublicKey ? Any.toJSON(message.newPublicKey) : undefined);
    message.newDiversifier !== undefined && (obj.newDiversifier = message.newDiversifier);
    return obj;
  },
  fromPartial(object: DeepPartial<Header>): Header {
    const message = createBaseHeader();
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence.toString());
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = BigInt(object.timestamp.toString());
    }
    message.signature = object.signature ?? new Uint8Array();
    if (object.newPublicKey !== undefined && object.newPublicKey !== null) {
      message.newPublicKey = Any.fromPartial(object.newPublicKey);
    }
    message.newDiversifier = object.newDiversifier ?? "";
    return message;
  },
  fromSDK(object: HeaderSDKType): Header {
    return {
      sequence: object?.sequence,
      timestamp: object?.timestamp,
      signature: object?.signature,
      newPublicKey: object.new_public_key ? Any.fromSDK(object.new_public_key) : undefined,
      newDiversifier: object?.new_diversifier
    };
  },
  toSDK(message: Header): HeaderSDKType {
    const obj: any = {};
    obj.sequence = message.sequence;
    obj.timestamp = message.timestamp;
    obj.signature = message.signature;
    message.newPublicKey !== undefined && (obj.new_public_key = message.newPublicKey ? Any.toSDK(message.newPublicKey) : undefined);
    obj.new_diversifier = message.newDiversifier;
    return obj;
  },
  fromAmino(object: HeaderAmino): Header {
    const message = createBaseHeader();
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = BigInt(object.timestamp);
    }
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = bytesFromBase64(object.signature);
    }
    if (object.new_public_key !== undefined && object.new_public_key !== null) {
      message.newPublicKey = Any.fromAmino(object.new_public_key);
    }
    if (object.new_diversifier !== undefined && object.new_diversifier !== null) {
      message.newDiversifier = object.new_diversifier;
    }
    return message;
  },
  toAmino(message: Header): HeaderAmino {
    const obj: any = {};
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence.toString() : undefined;
    obj.timestamp = message.timestamp !== BigInt(0) ? message.timestamp.toString() : undefined;
    obj.signature = message.signature ? base64FromBytes(message.signature) : undefined;
    obj.new_public_key = message.newPublicKey ? Any.toAmino(message.newPublicKey) : undefined;
    obj.new_diversifier = message.newDiversifier === "" ? undefined : message.newDiversifier;
    return obj;
  },
  fromAminoMsg(object: HeaderAminoMsg): Header {
    return Header.fromAmino(object.value);
  },
  toAminoMsg(message: Header): HeaderAminoMsg {
    return {
      type: "cosmos-sdk/Header",
      value: Header.toAmino(message)
    };
  },
  fromProtoMsg(message: HeaderProtoMsg): Header {
    return Header.decode(message.value);
  },
  toProto(message: Header): Uint8Array {
    return Header.encode(message).finish();
  },
  toProtoMsg(message: Header): HeaderProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v2.Header",
      value: Header.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Header.typeUrl, Header);
GlobalDecoderRegistry.registerAminoProtoMapping(Header.aminoType, Header.typeUrl);
function createBaseMisbehaviour(): Misbehaviour {
  return {
    clientId: "",
    sequence: BigInt(0),
    signatureOne: undefined,
    signatureTwo: undefined
  };
}
export const Misbehaviour = {
  typeUrl: "/ibc.lightclients.solomachine.v2.Misbehaviour",
  aminoType: "cosmos-sdk/Misbehaviour",
  is(o: any): o is Misbehaviour {
    return o && (o.$typeUrl === Misbehaviour.typeUrl || typeof o.clientId === "string" && typeof o.sequence === "bigint");
  },
  isSDK(o: any): o is MisbehaviourSDKType {
    return o && (o.$typeUrl === Misbehaviour.typeUrl || typeof o.client_id === "string" && typeof o.sequence === "bigint");
  },
  isAmino(o: any): o is MisbehaviourAmino {
    return o && (o.$typeUrl === Misbehaviour.typeUrl || typeof o.client_id === "string" && typeof o.sequence === "bigint");
  },
  encode(message: Misbehaviour, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== undefined) {
      writer.uint32(10).string(message.clientId);
    }
    if (message.sequence !== undefined) {
      writer.uint32(16).uint64(message.sequence);
    }
    if (message.signatureOne !== undefined) {
      SignatureAndData.encode(message.signatureOne, writer.uint32(26).fork()).ldelim();
    }
    if (message.signatureTwo !== undefined) {
      SignatureAndData.encode(message.signatureTwo, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Misbehaviour {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMisbehaviour();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.sequence = reader.uint64();
          break;
        case 3:
          message.signatureOne = SignatureAndData.decode(reader, reader.uint32());
          break;
        case 4:
          message.signatureTwo = SignatureAndData.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): Misbehaviour {
    const obj = createBaseMisbehaviour();
    if (isSet(object.clientId)) obj.clientId = String(object.clientId);
    if (isSet(object.sequence)) obj.sequence = BigInt(object.sequence.toString());
    if (isSet(object.signatureOne)) obj.signatureOne = SignatureAndData.fromJSON(object.signatureOne);
    if (isSet(object.signatureTwo)) obj.signatureTwo = SignatureAndData.fromJSON(object.signatureTwo);
    return obj;
  },
  toJSON(message: Misbehaviour): JsonSafe<Misbehaviour> {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
    message.signatureOne !== undefined && (obj.signatureOne = message.signatureOne ? SignatureAndData.toJSON(message.signatureOne) : undefined);
    message.signatureTwo !== undefined && (obj.signatureTwo = message.signatureTwo ? SignatureAndData.toJSON(message.signatureTwo) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Misbehaviour>): Misbehaviour {
    const message = createBaseMisbehaviour();
    message.clientId = object.clientId ?? "";
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence.toString());
    }
    if (object.signatureOne !== undefined && object.signatureOne !== null) {
      message.signatureOne = SignatureAndData.fromPartial(object.signatureOne);
    }
    if (object.signatureTwo !== undefined && object.signatureTwo !== null) {
      message.signatureTwo = SignatureAndData.fromPartial(object.signatureTwo);
    }
    return message;
  },
  fromSDK(object: MisbehaviourSDKType): Misbehaviour {
    return {
      clientId: object?.client_id,
      sequence: object?.sequence,
      signatureOne: object.signature_one ? SignatureAndData.fromSDK(object.signature_one) : undefined,
      signatureTwo: object.signature_two ? SignatureAndData.fromSDK(object.signature_two) : undefined
    };
  },
  toSDK(message: Misbehaviour): MisbehaviourSDKType {
    const obj: any = {};
    obj.client_id = message.clientId;
    obj.sequence = message.sequence;
    message.signatureOne !== undefined && (obj.signature_one = message.signatureOne ? SignatureAndData.toSDK(message.signatureOne) : undefined);
    message.signatureTwo !== undefined && (obj.signature_two = message.signatureTwo ? SignatureAndData.toSDK(message.signatureTwo) : undefined);
    return obj;
  },
  fromAmino(object: MisbehaviourAmino): Misbehaviour {
    const message = createBaseMisbehaviour();
    if (object.client_id !== undefined && object.client_id !== null) {
      message.clientId = object.client_id;
    }
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    if (object.signature_one !== undefined && object.signature_one !== null) {
      message.signatureOne = SignatureAndData.fromAmino(object.signature_one);
    }
    if (object.signature_two !== undefined && object.signature_two !== null) {
      message.signatureTwo = SignatureAndData.fromAmino(object.signature_two);
    }
    return message;
  },
  toAmino(message: Misbehaviour): MisbehaviourAmino {
    const obj: any = {};
    obj.client_id = message.clientId === "" ? undefined : message.clientId;
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence.toString() : undefined;
    obj.signature_one = message.signatureOne ? SignatureAndData.toAmino(message.signatureOne) : undefined;
    obj.signature_two = message.signatureTwo ? SignatureAndData.toAmino(message.signatureTwo) : undefined;
    return obj;
  },
  fromAminoMsg(object: MisbehaviourAminoMsg): Misbehaviour {
    return Misbehaviour.fromAmino(object.value);
  },
  toAminoMsg(message: Misbehaviour): MisbehaviourAminoMsg {
    return {
      type: "cosmos-sdk/Misbehaviour",
      value: Misbehaviour.toAmino(message)
    };
  },
  fromProtoMsg(message: MisbehaviourProtoMsg): Misbehaviour {
    return Misbehaviour.decode(message.value);
  },
  toProto(message: Misbehaviour): Uint8Array {
    return Misbehaviour.encode(message).finish();
  },
  toProtoMsg(message: Misbehaviour): MisbehaviourProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v2.Misbehaviour",
      value: Misbehaviour.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Misbehaviour.typeUrl, Misbehaviour);
GlobalDecoderRegistry.registerAminoProtoMapping(Misbehaviour.aminoType, Misbehaviour.typeUrl);
function createBaseSignatureAndData(): SignatureAndData {
  return {
    signature: new Uint8Array(),
    dataType: 0,
    data: new Uint8Array(),
    timestamp: BigInt(0)
  };
}
export const SignatureAndData = {
  typeUrl: "/ibc.lightclients.solomachine.v2.SignatureAndData",
  aminoType: "cosmos-sdk/SignatureAndData",
  is(o: any): o is SignatureAndData {
    return o && (o.$typeUrl === SignatureAndData.typeUrl || (o.signature instanceof Uint8Array || typeof o.signature === "string") && isSet(o.dataType) && (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.timestamp === "bigint");
  },
  isSDK(o: any): o is SignatureAndDataSDKType {
    return o && (o.$typeUrl === SignatureAndData.typeUrl || (o.signature instanceof Uint8Array || typeof o.signature === "string") && isSet(o.data_type) && (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.timestamp === "bigint");
  },
  isAmino(o: any): o is SignatureAndDataAmino {
    return o && (o.$typeUrl === SignatureAndData.typeUrl || (o.signature instanceof Uint8Array || typeof o.signature === "string") && isSet(o.data_type) && (o.data instanceof Uint8Array || typeof o.data === "string") && typeof o.timestamp === "bigint");
  },
  encode(message: SignatureAndData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signature.length !== 0) {
      writer.uint32(10).bytes(message.signature);
    }
    if (message.dataType !== 0) {
      writer.uint32(16).int32(message.dataType);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    if (message.timestamp !== undefined) {
      writer.uint32(32).uint64(message.timestamp);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SignatureAndData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignatureAndData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signature = reader.bytes();
          break;
        case 2:
          message.dataType = (reader.int32() as any);
          break;
        case 3:
          message.data = reader.bytes();
          break;
        case 4:
          message.timestamp = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SignatureAndData {
    const obj = createBaseSignatureAndData();
    if (isSet(object.signature)) obj.signature = bytesFromBase64(object.signature);
    if (isSet(object.dataType)) obj.dataType = dataTypeFromJSON(object.dataType);
    if (isSet(object.data)) obj.data = bytesFromBase64(object.data);
    if (isSet(object.timestamp)) obj.timestamp = BigInt(object.timestamp.toString());
    return obj;
  },
  toJSON(message: SignatureAndData): JsonSafe<SignatureAndData> {
    const obj: any = {};
    message.signature !== undefined && (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
    message.dataType !== undefined && (obj.dataType = dataTypeToJSON(message.dataType));
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<SignatureAndData>): SignatureAndData {
    const message = createBaseSignatureAndData();
    message.signature = object.signature ?? new Uint8Array();
    message.dataType = object.dataType ?? 0;
    message.data = object.data ?? new Uint8Array();
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = BigInt(object.timestamp.toString());
    }
    return message;
  },
  fromSDK(object: SignatureAndDataSDKType): SignatureAndData {
    return {
      signature: object?.signature,
      dataType: isSet(object.data_type) ? dataTypeFromJSON(object.data_type) : -1,
      data: object?.data,
      timestamp: object?.timestamp
    };
  },
  toSDK(message: SignatureAndData): SignatureAndDataSDKType {
    const obj: any = {};
    obj.signature = message.signature;
    message.dataType !== undefined && (obj.data_type = dataTypeToJSON(message.dataType));
    obj.data = message.data;
    obj.timestamp = message.timestamp;
    return obj;
  },
  fromAmino(object: SignatureAndDataAmino): SignatureAndData {
    const message = createBaseSignatureAndData();
    if (object.signature !== undefined && object.signature !== null) {
      message.signature = bytesFromBase64(object.signature);
    }
    if (object.data_type !== undefined && object.data_type !== null) {
      message.dataType = object.data_type;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = BigInt(object.timestamp);
    }
    return message;
  },
  toAmino(message: SignatureAndData): SignatureAndDataAmino {
    const obj: any = {};
    obj.signature = message.signature ? base64FromBytes(message.signature) : undefined;
    obj.data_type = message.dataType === 0 ? undefined : message.dataType;
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    obj.timestamp = message.timestamp !== BigInt(0) ? message.timestamp.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: SignatureAndDataAminoMsg): SignatureAndData {
    return SignatureAndData.fromAmino(object.value);
  },
  toAminoMsg(message: SignatureAndData): SignatureAndDataAminoMsg {
    return {
      type: "cosmos-sdk/SignatureAndData",
      value: SignatureAndData.toAmino(message)
    };
  },
  fromProtoMsg(message: SignatureAndDataProtoMsg): SignatureAndData {
    return SignatureAndData.decode(message.value);
  },
  toProto(message: SignatureAndData): Uint8Array {
    return SignatureAndData.encode(message).finish();
  },
  toProtoMsg(message: SignatureAndData): SignatureAndDataProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v2.SignatureAndData",
      value: SignatureAndData.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SignatureAndData.typeUrl, SignatureAndData);
GlobalDecoderRegistry.registerAminoProtoMapping(SignatureAndData.aminoType, SignatureAndData.typeUrl);
function createBaseTimestampedSignatureData(): TimestampedSignatureData {
  return {
    signatureData: new Uint8Array(),
    timestamp: BigInt(0)
  };
}
export const TimestampedSignatureData = {
  typeUrl: "/ibc.lightclients.solomachine.v2.TimestampedSignatureData",
  aminoType: "cosmos-sdk/TimestampedSignatureData",
  is(o: any): o is TimestampedSignatureData {
    return o && (o.$typeUrl === TimestampedSignatureData.typeUrl || (o.signatureData instanceof Uint8Array || typeof o.signatureData === "string") && typeof o.timestamp === "bigint");
  },
  isSDK(o: any): o is TimestampedSignatureDataSDKType {
    return o && (o.$typeUrl === TimestampedSignatureData.typeUrl || (o.signature_data instanceof Uint8Array || typeof o.signature_data === "string") && typeof o.timestamp === "bigint");
  },
  isAmino(o: any): o is TimestampedSignatureDataAmino {
    return o && (o.$typeUrl === TimestampedSignatureData.typeUrl || (o.signature_data instanceof Uint8Array || typeof o.signature_data === "string") && typeof o.timestamp === "bigint");
  },
  encode(message: TimestampedSignatureData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.signatureData.length !== 0) {
      writer.uint32(10).bytes(message.signatureData);
    }
    if (message.timestamp !== undefined) {
      writer.uint32(16).uint64(message.timestamp);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): TimestampedSignatureData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimestampedSignatureData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signatureData = reader.bytes();
          break;
        case 2:
          message.timestamp = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TimestampedSignatureData {
    const obj = createBaseTimestampedSignatureData();
    if (isSet(object.signatureData)) obj.signatureData = bytesFromBase64(object.signatureData);
    if (isSet(object.timestamp)) obj.timestamp = BigInt(object.timestamp.toString());
    return obj;
  },
  toJSON(message: TimestampedSignatureData): JsonSafe<TimestampedSignatureData> {
    const obj: any = {};
    message.signatureData !== undefined && (obj.signatureData = base64FromBytes(message.signatureData !== undefined ? message.signatureData : new Uint8Array()));
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<TimestampedSignatureData>): TimestampedSignatureData {
    const message = createBaseTimestampedSignatureData();
    message.signatureData = object.signatureData ?? new Uint8Array();
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = BigInt(object.timestamp.toString());
    }
    return message;
  },
  fromSDK(object: TimestampedSignatureDataSDKType): TimestampedSignatureData {
    return {
      signatureData: object?.signature_data,
      timestamp: object?.timestamp
    };
  },
  toSDK(message: TimestampedSignatureData): TimestampedSignatureDataSDKType {
    const obj: any = {};
    obj.signature_data = message.signatureData;
    obj.timestamp = message.timestamp;
    return obj;
  },
  fromAmino(object: TimestampedSignatureDataAmino): TimestampedSignatureData {
    const message = createBaseTimestampedSignatureData();
    if (object.signature_data !== undefined && object.signature_data !== null) {
      message.signatureData = bytesFromBase64(object.signature_data);
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = BigInt(object.timestamp);
    }
    return message;
  },
  toAmino(message: TimestampedSignatureData): TimestampedSignatureDataAmino {
    const obj: any = {};
    obj.signature_data = message.signatureData ? base64FromBytes(message.signatureData) : undefined;
    obj.timestamp = message.timestamp !== BigInt(0) ? message.timestamp.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: TimestampedSignatureDataAminoMsg): TimestampedSignatureData {
    return TimestampedSignatureData.fromAmino(object.value);
  },
  toAminoMsg(message: TimestampedSignatureData): TimestampedSignatureDataAminoMsg {
    return {
      type: "cosmos-sdk/TimestampedSignatureData",
      value: TimestampedSignatureData.toAmino(message)
    };
  },
  fromProtoMsg(message: TimestampedSignatureDataProtoMsg): TimestampedSignatureData {
    return TimestampedSignatureData.decode(message.value);
  },
  toProto(message: TimestampedSignatureData): Uint8Array {
    return TimestampedSignatureData.encode(message).finish();
  },
  toProtoMsg(message: TimestampedSignatureData): TimestampedSignatureDataProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v2.TimestampedSignatureData",
      value: TimestampedSignatureData.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(TimestampedSignatureData.typeUrl, TimestampedSignatureData);
GlobalDecoderRegistry.registerAminoProtoMapping(TimestampedSignatureData.aminoType, TimestampedSignatureData.typeUrl);
function createBaseSignBytes(): SignBytes {
  return {
    sequence: BigInt(0),
    timestamp: BigInt(0),
    diversifier: "",
    dataType: 0,
    data: new Uint8Array()
  };
}
export const SignBytes = {
  typeUrl: "/ibc.lightclients.solomachine.v2.SignBytes",
  aminoType: "cosmos-sdk/SignBytes",
  is(o: any): o is SignBytes {
    return o && (o.$typeUrl === SignBytes.typeUrl || typeof o.sequence === "bigint" && typeof o.timestamp === "bigint" && typeof o.diversifier === "string" && isSet(o.dataType) && (o.data instanceof Uint8Array || typeof o.data === "string"));
  },
  isSDK(o: any): o is SignBytesSDKType {
    return o && (o.$typeUrl === SignBytes.typeUrl || typeof o.sequence === "bigint" && typeof o.timestamp === "bigint" && typeof o.diversifier === "string" && isSet(o.data_type) && (o.data instanceof Uint8Array || typeof o.data === "string"));
  },
  isAmino(o: any): o is SignBytesAmino {
    return o && (o.$typeUrl === SignBytes.typeUrl || typeof o.sequence === "bigint" && typeof o.timestamp === "bigint" && typeof o.diversifier === "string" && isSet(o.data_type) && (o.data instanceof Uint8Array || typeof o.data === "string"));
  },
  encode(message: SignBytes, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sequence !== undefined) {
      writer.uint32(8).uint64(message.sequence);
    }
    if (message.timestamp !== undefined) {
      writer.uint32(16).uint64(message.timestamp);
    }
    if (message.diversifier !== undefined) {
      writer.uint32(26).string(message.diversifier);
    }
    if (message.dataType !== 0) {
      writer.uint32(32).int32(message.dataType);
    }
    if (message.data.length !== 0) {
      writer.uint32(42).bytes(message.data);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SignBytes {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignBytes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = reader.uint64();
          break;
        case 2:
          message.timestamp = reader.uint64();
          break;
        case 3:
          message.diversifier = reader.string();
          break;
        case 4:
          message.dataType = (reader.int32() as any);
          break;
        case 5:
          message.data = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SignBytes {
    const obj = createBaseSignBytes();
    if (isSet(object.sequence)) obj.sequence = BigInt(object.sequence.toString());
    if (isSet(object.timestamp)) obj.timestamp = BigInt(object.timestamp.toString());
    if (isSet(object.diversifier)) obj.diversifier = String(object.diversifier);
    if (isSet(object.dataType)) obj.dataType = dataTypeFromJSON(object.dataType);
    if (isSet(object.data)) obj.data = bytesFromBase64(object.data);
    return obj;
  },
  toJSON(message: SignBytes): JsonSafe<SignBytes> {
    const obj: any = {};
    message.sequence !== undefined && (obj.sequence = (message.sequence || BigInt(0)).toString());
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || BigInt(0)).toString());
    message.diversifier !== undefined && (obj.diversifier = message.diversifier);
    message.dataType !== undefined && (obj.dataType = dataTypeToJSON(message.dataType));
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<SignBytes>): SignBytes {
    const message = createBaseSignBytes();
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence.toString());
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = BigInt(object.timestamp.toString());
    }
    message.diversifier = object.diversifier ?? "";
    message.dataType = object.dataType ?? 0;
    message.data = object.data ?? new Uint8Array();
    return message;
  },
  fromSDK(object: SignBytesSDKType): SignBytes {
    return {
      sequence: object?.sequence,
      timestamp: object?.timestamp,
      diversifier: object?.diversifier,
      dataType: isSet(object.data_type) ? dataTypeFromJSON(object.data_type) : -1,
      data: object?.data
    };
  },
  toSDK(message: SignBytes): SignBytesSDKType {
    const obj: any = {};
    obj.sequence = message.sequence;
    obj.timestamp = message.timestamp;
    obj.diversifier = message.diversifier;
    message.dataType !== undefined && (obj.data_type = dataTypeToJSON(message.dataType));
    obj.data = message.data;
    return obj;
  },
  fromAmino(object: SignBytesAmino): SignBytes {
    const message = createBaseSignBytes();
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = BigInt(object.sequence);
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = BigInt(object.timestamp);
    }
    if (object.diversifier !== undefined && object.diversifier !== null) {
      message.diversifier = object.diversifier;
    }
    if (object.data_type !== undefined && object.data_type !== null) {
      message.dataType = object.data_type;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = bytesFromBase64(object.data);
    }
    return message;
  },
  toAmino(message: SignBytes): SignBytesAmino {
    const obj: any = {};
    obj.sequence = message.sequence !== BigInt(0) ? message.sequence.toString() : undefined;
    obj.timestamp = message.timestamp !== BigInt(0) ? message.timestamp.toString() : undefined;
    obj.diversifier = message.diversifier === "" ? undefined : message.diversifier;
    obj.data_type = message.dataType === 0 ? undefined : message.dataType;
    obj.data = message.data ? base64FromBytes(message.data) : undefined;
    return obj;
  },
  fromAminoMsg(object: SignBytesAminoMsg): SignBytes {
    return SignBytes.fromAmino(object.value);
  },
  toAminoMsg(message: SignBytes): SignBytesAminoMsg {
    return {
      type: "cosmos-sdk/SignBytes",
      value: SignBytes.toAmino(message)
    };
  },
  fromProtoMsg(message: SignBytesProtoMsg): SignBytes {
    return SignBytes.decode(message.value);
  },
  toProto(message: SignBytes): Uint8Array {
    return SignBytes.encode(message).finish();
  },
  toProtoMsg(message: SignBytes): SignBytesProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v2.SignBytes",
      value: SignBytes.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SignBytes.typeUrl, SignBytes);
GlobalDecoderRegistry.registerAminoProtoMapping(SignBytes.aminoType, SignBytes.typeUrl);
function createBaseHeaderData(): HeaderData {
  return {
    newPubKey: undefined,
    newDiversifier: ""
  };
}
export const HeaderData = {
  typeUrl: "/ibc.lightclients.solomachine.v2.HeaderData",
  aminoType: "cosmos-sdk/HeaderData",
  is(o: any): o is HeaderData {
    return o && (o.$typeUrl === HeaderData.typeUrl || typeof o.newDiversifier === "string");
  },
  isSDK(o: any): o is HeaderDataSDKType {
    return o && (o.$typeUrl === HeaderData.typeUrl || typeof o.new_diversifier === "string");
  },
  isAmino(o: any): o is HeaderDataAmino {
    return o && (o.$typeUrl === HeaderData.typeUrl || typeof o.new_diversifier === "string");
  },
  encode(message: HeaderData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.newPubKey !== undefined) {
      Any.encode(message.newPubKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.newDiversifier !== undefined) {
      writer.uint32(18).string(message.newDiversifier);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): HeaderData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeaderData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.newPubKey = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.newDiversifier = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): HeaderData {
    const obj = createBaseHeaderData();
    if (isSet(object.newPubKey)) obj.newPubKey = Any.fromJSON(object.newPubKey);
    if (isSet(object.newDiversifier)) obj.newDiversifier = String(object.newDiversifier);
    return obj;
  },
  toJSON(message: HeaderData): JsonSafe<HeaderData> {
    const obj: any = {};
    message.newPubKey !== undefined && (obj.newPubKey = message.newPubKey ? Any.toJSON(message.newPubKey) : undefined);
    message.newDiversifier !== undefined && (obj.newDiversifier = message.newDiversifier);
    return obj;
  },
  fromPartial(object: DeepPartial<HeaderData>): HeaderData {
    const message = createBaseHeaderData();
    if (object.newPubKey !== undefined && object.newPubKey !== null) {
      message.newPubKey = Any.fromPartial(object.newPubKey);
    }
    message.newDiversifier = object.newDiversifier ?? "";
    return message;
  },
  fromSDK(object: HeaderDataSDKType): HeaderData {
    return {
      newPubKey: object.new_pub_key ? Any.fromSDK(object.new_pub_key) : undefined,
      newDiversifier: object?.new_diversifier
    };
  },
  toSDK(message: HeaderData): HeaderDataSDKType {
    const obj: any = {};
    message.newPubKey !== undefined && (obj.new_pub_key = message.newPubKey ? Any.toSDK(message.newPubKey) : undefined);
    obj.new_diversifier = message.newDiversifier;
    return obj;
  },
  fromAmino(object: HeaderDataAmino): HeaderData {
    const message = createBaseHeaderData();
    if (object.new_pub_key !== undefined && object.new_pub_key !== null) {
      message.newPubKey = Any.fromAmino(object.new_pub_key);
    }
    if (object.new_diversifier !== undefined && object.new_diversifier !== null) {
      message.newDiversifier = object.new_diversifier;
    }
    return message;
  },
  toAmino(message: HeaderData): HeaderDataAmino {
    const obj: any = {};
    obj.new_pub_key = message.newPubKey ? Any.toAmino(message.newPubKey) : undefined;
    obj.new_diversifier = message.newDiversifier === "" ? undefined : message.newDiversifier;
    return obj;
  },
  fromAminoMsg(object: HeaderDataAminoMsg): HeaderData {
    return HeaderData.fromAmino(object.value);
  },
  toAminoMsg(message: HeaderData): HeaderDataAminoMsg {
    return {
      type: "cosmos-sdk/HeaderData",
      value: HeaderData.toAmino(message)
    };
  },
  fromProtoMsg(message: HeaderDataProtoMsg): HeaderData {
    return HeaderData.decode(message.value);
  },
  toProto(message: HeaderData): Uint8Array {
    return HeaderData.encode(message).finish();
  },
  toProtoMsg(message: HeaderData): HeaderDataProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v2.HeaderData",
      value: HeaderData.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(HeaderData.typeUrl, HeaderData);
GlobalDecoderRegistry.registerAminoProtoMapping(HeaderData.aminoType, HeaderData.typeUrl);
function createBaseClientStateData(): ClientStateData {
  return {
    path: new Uint8Array(),
    clientState: undefined
  };
}
export const ClientStateData = {
  typeUrl: "/ibc.lightclients.solomachine.v2.ClientStateData",
  aminoType: "cosmos-sdk/ClientStateData",
  is(o: any): o is ClientStateData {
    return o && (o.$typeUrl === ClientStateData.typeUrl || o.path instanceof Uint8Array || typeof o.path === "string");
  },
  isSDK(o: any): o is ClientStateDataSDKType {
    return o && (o.$typeUrl === ClientStateData.typeUrl || o.path instanceof Uint8Array || typeof o.path === "string");
  },
  isAmino(o: any): o is ClientStateDataAmino {
    return o && (o.$typeUrl === ClientStateData.typeUrl || o.path instanceof Uint8Array || typeof o.path === "string");
  },
  encode(message: ClientStateData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    if (message.clientState !== undefined) {
      Any.encode(message.clientState, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ClientStateData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientStateData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;
        case 2:
          message.clientState = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ClientStateData {
    const obj = createBaseClientStateData();
    if (isSet(object.path)) obj.path = bytesFromBase64(object.path);
    if (isSet(object.clientState)) obj.clientState = Any.fromJSON(object.clientState);
    return obj;
  },
  toJSON(message: ClientStateData): JsonSafe<ClientStateData> {
    const obj: any = {};
    message.path !== undefined && (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
    message.clientState !== undefined && (obj.clientState = message.clientState ? Any.toJSON(message.clientState) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<ClientStateData>): ClientStateData {
    const message = createBaseClientStateData();
    message.path = object.path ?? new Uint8Array();
    if (object.clientState !== undefined && object.clientState !== null) {
      message.clientState = Any.fromPartial(object.clientState);
    }
    return message;
  },
  fromSDK(object: ClientStateDataSDKType): ClientStateData {
    return {
      path: object?.path,
      clientState: object.client_state ? Any.fromSDK(object.client_state) : undefined
    };
  },
  toSDK(message: ClientStateData): ClientStateDataSDKType {
    const obj: any = {};
    obj.path = message.path;
    message.clientState !== undefined && (obj.client_state = message.clientState ? Any.toSDK(message.clientState) : undefined);
    return obj;
  },
  fromAmino(object: ClientStateDataAmino): ClientStateData {
    const message = createBaseClientStateData();
    if (object.path !== undefined && object.path !== null) {
      message.path = bytesFromBase64(object.path);
    }
    if (object.client_state !== undefined && object.client_state !== null) {
      message.clientState = Any.fromAmino(object.client_state);
    }
    return message;
  },
  toAmino(message: ClientStateData): ClientStateDataAmino {
    const obj: any = {};
    obj.path = message.path ? base64FromBytes(message.path) : undefined;
    obj.client_state = message.clientState ? Any.toAmino(message.clientState) : undefined;
    return obj;
  },
  fromAminoMsg(object: ClientStateDataAminoMsg): ClientStateData {
    return ClientStateData.fromAmino(object.value);
  },
  toAminoMsg(message: ClientStateData): ClientStateDataAminoMsg {
    return {
      type: "cosmos-sdk/ClientStateData",
      value: ClientStateData.toAmino(message)
    };
  },
  fromProtoMsg(message: ClientStateDataProtoMsg): ClientStateData {
    return ClientStateData.decode(message.value);
  },
  toProto(message: ClientStateData): Uint8Array {
    return ClientStateData.encode(message).finish();
  },
  toProtoMsg(message: ClientStateData): ClientStateDataProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v2.ClientStateData",
      value: ClientStateData.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ClientStateData.typeUrl, ClientStateData);
GlobalDecoderRegistry.registerAminoProtoMapping(ClientStateData.aminoType, ClientStateData.typeUrl);
function createBaseConsensusStateData(): ConsensusStateData {
  return {
    path: new Uint8Array(),
    consensusState: undefined
  };
}
export const ConsensusStateData = {
  typeUrl: "/ibc.lightclients.solomachine.v2.ConsensusStateData",
  aminoType: "cosmos-sdk/ConsensusStateData",
  is(o: any): o is ConsensusStateData {
    return o && (o.$typeUrl === ConsensusStateData.typeUrl || o.path instanceof Uint8Array || typeof o.path === "string");
  },
  isSDK(o: any): o is ConsensusStateDataSDKType {
    return o && (o.$typeUrl === ConsensusStateData.typeUrl || o.path instanceof Uint8Array || typeof o.path === "string");
  },
  isAmino(o: any): o is ConsensusStateDataAmino {
    return o && (o.$typeUrl === ConsensusStateData.typeUrl || o.path instanceof Uint8Array || typeof o.path === "string");
  },
  encode(message: ConsensusStateData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    if (message.consensusState !== undefined) {
      Any.encode(message.consensusState, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConsensusStateData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConsensusStateData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;
        case 2:
          message.consensusState = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConsensusStateData {
    const obj = createBaseConsensusStateData();
    if (isSet(object.path)) obj.path = bytesFromBase64(object.path);
    if (isSet(object.consensusState)) obj.consensusState = Any.fromJSON(object.consensusState);
    return obj;
  },
  toJSON(message: ConsensusStateData): JsonSafe<ConsensusStateData> {
    const obj: any = {};
    message.path !== undefined && (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
    message.consensusState !== undefined && (obj.consensusState = message.consensusState ? Any.toJSON(message.consensusState) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<ConsensusStateData>): ConsensusStateData {
    const message = createBaseConsensusStateData();
    message.path = object.path ?? new Uint8Array();
    if (object.consensusState !== undefined && object.consensusState !== null) {
      message.consensusState = Any.fromPartial(object.consensusState);
    }
    return message;
  },
  fromSDK(object: ConsensusStateDataSDKType): ConsensusStateData {
    return {
      path: object?.path,
      consensusState: object.consensus_state ? Any.fromSDK(object.consensus_state) : undefined
    };
  },
  toSDK(message: ConsensusStateData): ConsensusStateDataSDKType {
    const obj: any = {};
    obj.path = message.path;
    message.consensusState !== undefined && (obj.consensus_state = message.consensusState ? Any.toSDK(message.consensusState) : undefined);
    return obj;
  },
  fromAmino(object: ConsensusStateDataAmino): ConsensusStateData {
    const message = createBaseConsensusStateData();
    if (object.path !== undefined && object.path !== null) {
      message.path = bytesFromBase64(object.path);
    }
    if (object.consensus_state !== undefined && object.consensus_state !== null) {
      message.consensusState = Any.fromAmino(object.consensus_state);
    }
    return message;
  },
  toAmino(message: ConsensusStateData): ConsensusStateDataAmino {
    const obj: any = {};
    obj.path = message.path ? base64FromBytes(message.path) : undefined;
    obj.consensus_state = message.consensusState ? Any.toAmino(message.consensusState) : undefined;
    return obj;
  },
  fromAminoMsg(object: ConsensusStateDataAminoMsg): ConsensusStateData {
    return ConsensusStateData.fromAmino(object.value);
  },
  toAminoMsg(message: ConsensusStateData): ConsensusStateDataAminoMsg {
    return {
      type: "cosmos-sdk/ConsensusStateData",
      value: ConsensusStateData.toAmino(message)
    };
  },
  fromProtoMsg(message: ConsensusStateDataProtoMsg): ConsensusStateData {
    return ConsensusStateData.decode(message.value);
  },
  toProto(message: ConsensusStateData): Uint8Array {
    return ConsensusStateData.encode(message).finish();
  },
  toProtoMsg(message: ConsensusStateData): ConsensusStateDataProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v2.ConsensusStateData",
      value: ConsensusStateData.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ConsensusStateData.typeUrl, ConsensusStateData);
GlobalDecoderRegistry.registerAminoProtoMapping(ConsensusStateData.aminoType, ConsensusStateData.typeUrl);
function createBaseConnectionStateData(): ConnectionStateData {
  return {
    path: new Uint8Array(),
    connection: undefined
  };
}
export const ConnectionStateData = {
  typeUrl: "/ibc.lightclients.solomachine.v2.ConnectionStateData",
  aminoType: "cosmos-sdk/ConnectionStateData",
  is(o: any): o is ConnectionStateData {
    return o && (o.$typeUrl === ConnectionStateData.typeUrl || o.path instanceof Uint8Array || typeof o.path === "string");
  },
  isSDK(o: any): o is ConnectionStateDataSDKType {
    return o && (o.$typeUrl === ConnectionStateData.typeUrl || o.path instanceof Uint8Array || typeof o.path === "string");
  },
  isAmino(o: any): o is ConnectionStateDataAmino {
    return o && (o.$typeUrl === ConnectionStateData.typeUrl || o.path instanceof Uint8Array || typeof o.path === "string");
  },
  encode(message: ConnectionStateData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    if (message.connection !== undefined) {
      ConnectionEnd.encode(message.connection, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ConnectionStateData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseConnectionStateData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;
        case 2:
          message.connection = ConnectionEnd.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConnectionStateData {
    const obj = createBaseConnectionStateData();
    if (isSet(object.path)) obj.path = bytesFromBase64(object.path);
    if (isSet(object.connection)) obj.connection = ConnectionEnd.fromJSON(object.connection);
    return obj;
  },
  toJSON(message: ConnectionStateData): JsonSafe<ConnectionStateData> {
    const obj: any = {};
    message.path !== undefined && (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
    message.connection !== undefined && (obj.connection = message.connection ? ConnectionEnd.toJSON(message.connection) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<ConnectionStateData>): ConnectionStateData {
    const message = createBaseConnectionStateData();
    message.path = object.path ?? new Uint8Array();
    if (object.connection !== undefined && object.connection !== null) {
      message.connection = ConnectionEnd.fromPartial(object.connection);
    }
    return message;
  },
  fromSDK(object: ConnectionStateDataSDKType): ConnectionStateData {
    return {
      path: object?.path,
      connection: object.connection ? ConnectionEnd.fromSDK(object.connection) : undefined
    };
  },
  toSDK(message: ConnectionStateData): ConnectionStateDataSDKType {
    const obj: any = {};
    obj.path = message.path;
    message.connection !== undefined && (obj.connection = message.connection ? ConnectionEnd.toSDK(message.connection) : undefined);
    return obj;
  },
  fromAmino(object: ConnectionStateDataAmino): ConnectionStateData {
    const message = createBaseConnectionStateData();
    if (object.path !== undefined && object.path !== null) {
      message.path = bytesFromBase64(object.path);
    }
    if (object.connection !== undefined && object.connection !== null) {
      message.connection = ConnectionEnd.fromAmino(object.connection);
    }
    return message;
  },
  toAmino(message: ConnectionStateData): ConnectionStateDataAmino {
    const obj: any = {};
    obj.path = message.path ? base64FromBytes(message.path) : undefined;
    obj.connection = message.connection ? ConnectionEnd.toAmino(message.connection) : undefined;
    return obj;
  },
  fromAminoMsg(object: ConnectionStateDataAminoMsg): ConnectionStateData {
    return ConnectionStateData.fromAmino(object.value);
  },
  toAminoMsg(message: ConnectionStateData): ConnectionStateDataAminoMsg {
    return {
      type: "cosmos-sdk/ConnectionStateData",
      value: ConnectionStateData.toAmino(message)
    };
  },
  fromProtoMsg(message: ConnectionStateDataProtoMsg): ConnectionStateData {
    return ConnectionStateData.decode(message.value);
  },
  toProto(message: ConnectionStateData): Uint8Array {
    return ConnectionStateData.encode(message).finish();
  },
  toProtoMsg(message: ConnectionStateData): ConnectionStateDataProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v2.ConnectionStateData",
      value: ConnectionStateData.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ConnectionStateData.typeUrl, ConnectionStateData);
GlobalDecoderRegistry.registerAminoProtoMapping(ConnectionStateData.aminoType, ConnectionStateData.typeUrl);
function createBaseChannelStateData(): ChannelStateData {
  return {
    path: new Uint8Array(),
    channel: undefined
  };
}
export const ChannelStateData = {
  typeUrl: "/ibc.lightclients.solomachine.v2.ChannelStateData",
  aminoType: "cosmos-sdk/ChannelStateData",
  is(o: any): o is ChannelStateData {
    return o && (o.$typeUrl === ChannelStateData.typeUrl || o.path instanceof Uint8Array || typeof o.path === "string");
  },
  isSDK(o: any): o is ChannelStateDataSDKType {
    return o && (o.$typeUrl === ChannelStateData.typeUrl || o.path instanceof Uint8Array || typeof o.path === "string");
  },
  isAmino(o: any): o is ChannelStateDataAmino {
    return o && (o.$typeUrl === ChannelStateData.typeUrl || o.path instanceof Uint8Array || typeof o.path === "string");
  },
  encode(message: ChannelStateData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    if (message.channel !== undefined) {
      Channel.encode(message.channel, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ChannelStateData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseChannelStateData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;
        case 2:
          message.channel = Channel.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ChannelStateData {
    const obj = createBaseChannelStateData();
    if (isSet(object.path)) obj.path = bytesFromBase64(object.path);
    if (isSet(object.channel)) obj.channel = Channel.fromJSON(object.channel);
    return obj;
  },
  toJSON(message: ChannelStateData): JsonSafe<ChannelStateData> {
    const obj: any = {};
    message.path !== undefined && (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
    message.channel !== undefined && (obj.channel = message.channel ? Channel.toJSON(message.channel) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<ChannelStateData>): ChannelStateData {
    const message = createBaseChannelStateData();
    message.path = object.path ?? new Uint8Array();
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = Channel.fromPartial(object.channel);
    }
    return message;
  },
  fromSDK(object: ChannelStateDataSDKType): ChannelStateData {
    return {
      path: object?.path,
      channel: object.channel ? Channel.fromSDK(object.channel) : undefined
    };
  },
  toSDK(message: ChannelStateData): ChannelStateDataSDKType {
    const obj: any = {};
    obj.path = message.path;
    message.channel !== undefined && (obj.channel = message.channel ? Channel.toSDK(message.channel) : undefined);
    return obj;
  },
  fromAmino(object: ChannelStateDataAmino): ChannelStateData {
    const message = createBaseChannelStateData();
    if (object.path !== undefined && object.path !== null) {
      message.path = bytesFromBase64(object.path);
    }
    if (object.channel !== undefined && object.channel !== null) {
      message.channel = Channel.fromAmino(object.channel);
    }
    return message;
  },
  toAmino(message: ChannelStateData): ChannelStateDataAmino {
    const obj: any = {};
    obj.path = message.path ? base64FromBytes(message.path) : undefined;
    obj.channel = message.channel ? Channel.toAmino(message.channel) : undefined;
    return obj;
  },
  fromAminoMsg(object: ChannelStateDataAminoMsg): ChannelStateData {
    return ChannelStateData.fromAmino(object.value);
  },
  toAminoMsg(message: ChannelStateData): ChannelStateDataAminoMsg {
    return {
      type: "cosmos-sdk/ChannelStateData",
      value: ChannelStateData.toAmino(message)
    };
  },
  fromProtoMsg(message: ChannelStateDataProtoMsg): ChannelStateData {
    return ChannelStateData.decode(message.value);
  },
  toProto(message: ChannelStateData): Uint8Array {
    return ChannelStateData.encode(message).finish();
  },
  toProtoMsg(message: ChannelStateData): ChannelStateDataProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v2.ChannelStateData",
      value: ChannelStateData.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ChannelStateData.typeUrl, ChannelStateData);
GlobalDecoderRegistry.registerAminoProtoMapping(ChannelStateData.aminoType, ChannelStateData.typeUrl);
function createBasePacketCommitmentData(): PacketCommitmentData {
  return {
    path: new Uint8Array(),
    commitment: new Uint8Array()
  };
}
export const PacketCommitmentData = {
  typeUrl: "/ibc.lightclients.solomachine.v2.PacketCommitmentData",
  aminoType: "cosmos-sdk/PacketCommitmentData",
  is(o: any): o is PacketCommitmentData {
    return o && (o.$typeUrl === PacketCommitmentData.typeUrl || (o.path instanceof Uint8Array || typeof o.path === "string") && (o.commitment instanceof Uint8Array || typeof o.commitment === "string"));
  },
  isSDK(o: any): o is PacketCommitmentDataSDKType {
    return o && (o.$typeUrl === PacketCommitmentData.typeUrl || (o.path instanceof Uint8Array || typeof o.path === "string") && (o.commitment instanceof Uint8Array || typeof o.commitment === "string"));
  },
  isAmino(o: any): o is PacketCommitmentDataAmino {
    return o && (o.$typeUrl === PacketCommitmentData.typeUrl || (o.path instanceof Uint8Array || typeof o.path === "string") && (o.commitment instanceof Uint8Array || typeof o.commitment === "string"));
  },
  encode(message: PacketCommitmentData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    if (message.commitment.length !== 0) {
      writer.uint32(18).bytes(message.commitment);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PacketCommitmentData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketCommitmentData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;
        case 2:
          message.commitment = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PacketCommitmentData {
    const obj = createBasePacketCommitmentData();
    if (isSet(object.path)) obj.path = bytesFromBase64(object.path);
    if (isSet(object.commitment)) obj.commitment = bytesFromBase64(object.commitment);
    return obj;
  },
  toJSON(message: PacketCommitmentData): JsonSafe<PacketCommitmentData> {
    const obj: any = {};
    message.path !== undefined && (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
    message.commitment !== undefined && (obj.commitment = base64FromBytes(message.commitment !== undefined ? message.commitment : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<PacketCommitmentData>): PacketCommitmentData {
    const message = createBasePacketCommitmentData();
    message.path = object.path ?? new Uint8Array();
    message.commitment = object.commitment ?? new Uint8Array();
    return message;
  },
  fromSDK(object: PacketCommitmentDataSDKType): PacketCommitmentData {
    return {
      path: object?.path,
      commitment: object?.commitment
    };
  },
  toSDK(message: PacketCommitmentData): PacketCommitmentDataSDKType {
    const obj: any = {};
    obj.path = message.path;
    obj.commitment = message.commitment;
    return obj;
  },
  fromAmino(object: PacketCommitmentDataAmino): PacketCommitmentData {
    const message = createBasePacketCommitmentData();
    if (object.path !== undefined && object.path !== null) {
      message.path = bytesFromBase64(object.path);
    }
    if (object.commitment !== undefined && object.commitment !== null) {
      message.commitment = bytesFromBase64(object.commitment);
    }
    return message;
  },
  toAmino(message: PacketCommitmentData): PacketCommitmentDataAmino {
    const obj: any = {};
    obj.path = message.path ? base64FromBytes(message.path) : undefined;
    obj.commitment = message.commitment ? base64FromBytes(message.commitment) : undefined;
    return obj;
  },
  fromAminoMsg(object: PacketCommitmentDataAminoMsg): PacketCommitmentData {
    return PacketCommitmentData.fromAmino(object.value);
  },
  toAminoMsg(message: PacketCommitmentData): PacketCommitmentDataAminoMsg {
    return {
      type: "cosmos-sdk/PacketCommitmentData",
      value: PacketCommitmentData.toAmino(message)
    };
  },
  fromProtoMsg(message: PacketCommitmentDataProtoMsg): PacketCommitmentData {
    return PacketCommitmentData.decode(message.value);
  },
  toProto(message: PacketCommitmentData): Uint8Array {
    return PacketCommitmentData.encode(message).finish();
  },
  toProtoMsg(message: PacketCommitmentData): PacketCommitmentDataProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v2.PacketCommitmentData",
      value: PacketCommitmentData.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PacketCommitmentData.typeUrl, PacketCommitmentData);
GlobalDecoderRegistry.registerAminoProtoMapping(PacketCommitmentData.aminoType, PacketCommitmentData.typeUrl);
function createBasePacketAcknowledgementData(): PacketAcknowledgementData {
  return {
    path: new Uint8Array(),
    acknowledgement: new Uint8Array()
  };
}
export const PacketAcknowledgementData = {
  typeUrl: "/ibc.lightclients.solomachine.v2.PacketAcknowledgementData",
  aminoType: "cosmos-sdk/PacketAcknowledgementData",
  is(o: any): o is PacketAcknowledgementData {
    return o && (o.$typeUrl === PacketAcknowledgementData.typeUrl || (o.path instanceof Uint8Array || typeof o.path === "string") && (o.acknowledgement instanceof Uint8Array || typeof o.acknowledgement === "string"));
  },
  isSDK(o: any): o is PacketAcknowledgementDataSDKType {
    return o && (o.$typeUrl === PacketAcknowledgementData.typeUrl || (o.path instanceof Uint8Array || typeof o.path === "string") && (o.acknowledgement instanceof Uint8Array || typeof o.acknowledgement === "string"));
  },
  isAmino(o: any): o is PacketAcknowledgementDataAmino {
    return o && (o.$typeUrl === PacketAcknowledgementData.typeUrl || (o.path instanceof Uint8Array || typeof o.path === "string") && (o.acknowledgement instanceof Uint8Array || typeof o.acknowledgement === "string"));
  },
  encode(message: PacketAcknowledgementData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    if (message.acknowledgement.length !== 0) {
      writer.uint32(18).bytes(message.acknowledgement);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PacketAcknowledgementData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketAcknowledgementData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;
        case 2:
          message.acknowledgement = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PacketAcknowledgementData {
    const obj = createBasePacketAcknowledgementData();
    if (isSet(object.path)) obj.path = bytesFromBase64(object.path);
    if (isSet(object.acknowledgement)) obj.acknowledgement = bytesFromBase64(object.acknowledgement);
    return obj;
  },
  toJSON(message: PacketAcknowledgementData): JsonSafe<PacketAcknowledgementData> {
    const obj: any = {};
    message.path !== undefined && (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
    message.acknowledgement !== undefined && (obj.acknowledgement = base64FromBytes(message.acknowledgement !== undefined ? message.acknowledgement : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<PacketAcknowledgementData>): PacketAcknowledgementData {
    const message = createBasePacketAcknowledgementData();
    message.path = object.path ?? new Uint8Array();
    message.acknowledgement = object.acknowledgement ?? new Uint8Array();
    return message;
  },
  fromSDK(object: PacketAcknowledgementDataSDKType): PacketAcknowledgementData {
    return {
      path: object?.path,
      acknowledgement: object?.acknowledgement
    };
  },
  toSDK(message: PacketAcknowledgementData): PacketAcknowledgementDataSDKType {
    const obj: any = {};
    obj.path = message.path;
    obj.acknowledgement = message.acknowledgement;
    return obj;
  },
  fromAmino(object: PacketAcknowledgementDataAmino): PacketAcknowledgementData {
    const message = createBasePacketAcknowledgementData();
    if (object.path !== undefined && object.path !== null) {
      message.path = bytesFromBase64(object.path);
    }
    if (object.acknowledgement !== undefined && object.acknowledgement !== null) {
      message.acknowledgement = bytesFromBase64(object.acknowledgement);
    }
    return message;
  },
  toAmino(message: PacketAcknowledgementData): PacketAcknowledgementDataAmino {
    const obj: any = {};
    obj.path = message.path ? base64FromBytes(message.path) : undefined;
    obj.acknowledgement = message.acknowledgement ? base64FromBytes(message.acknowledgement) : undefined;
    return obj;
  },
  fromAminoMsg(object: PacketAcknowledgementDataAminoMsg): PacketAcknowledgementData {
    return PacketAcknowledgementData.fromAmino(object.value);
  },
  toAminoMsg(message: PacketAcknowledgementData): PacketAcknowledgementDataAminoMsg {
    return {
      type: "cosmos-sdk/PacketAcknowledgementData",
      value: PacketAcknowledgementData.toAmino(message)
    };
  },
  fromProtoMsg(message: PacketAcknowledgementDataProtoMsg): PacketAcknowledgementData {
    return PacketAcknowledgementData.decode(message.value);
  },
  toProto(message: PacketAcknowledgementData): Uint8Array {
    return PacketAcknowledgementData.encode(message).finish();
  },
  toProtoMsg(message: PacketAcknowledgementData): PacketAcknowledgementDataProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v2.PacketAcknowledgementData",
      value: PacketAcknowledgementData.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PacketAcknowledgementData.typeUrl, PacketAcknowledgementData);
GlobalDecoderRegistry.registerAminoProtoMapping(PacketAcknowledgementData.aminoType, PacketAcknowledgementData.typeUrl);
function createBasePacketReceiptAbsenceData(): PacketReceiptAbsenceData {
  return {
    path: new Uint8Array()
  };
}
export const PacketReceiptAbsenceData = {
  typeUrl: "/ibc.lightclients.solomachine.v2.PacketReceiptAbsenceData",
  aminoType: "cosmos-sdk/PacketReceiptAbsenceData",
  is(o: any): o is PacketReceiptAbsenceData {
    return o && (o.$typeUrl === PacketReceiptAbsenceData.typeUrl || o.path instanceof Uint8Array || typeof o.path === "string");
  },
  isSDK(o: any): o is PacketReceiptAbsenceDataSDKType {
    return o && (o.$typeUrl === PacketReceiptAbsenceData.typeUrl || o.path instanceof Uint8Array || typeof o.path === "string");
  },
  isAmino(o: any): o is PacketReceiptAbsenceDataAmino {
    return o && (o.$typeUrl === PacketReceiptAbsenceData.typeUrl || o.path instanceof Uint8Array || typeof o.path === "string");
  },
  encode(message: PacketReceiptAbsenceData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): PacketReceiptAbsenceData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePacketReceiptAbsenceData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): PacketReceiptAbsenceData {
    const obj = createBasePacketReceiptAbsenceData();
    if (isSet(object.path)) obj.path = bytesFromBase64(object.path);
    return obj;
  },
  toJSON(message: PacketReceiptAbsenceData): JsonSafe<PacketReceiptAbsenceData> {
    const obj: any = {};
    message.path !== undefined && (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<PacketReceiptAbsenceData>): PacketReceiptAbsenceData {
    const message = createBasePacketReceiptAbsenceData();
    message.path = object.path ?? new Uint8Array();
    return message;
  },
  fromSDK(object: PacketReceiptAbsenceDataSDKType): PacketReceiptAbsenceData {
    return {
      path: object?.path
    };
  },
  toSDK(message: PacketReceiptAbsenceData): PacketReceiptAbsenceDataSDKType {
    const obj: any = {};
    obj.path = message.path;
    return obj;
  },
  fromAmino(object: PacketReceiptAbsenceDataAmino): PacketReceiptAbsenceData {
    const message = createBasePacketReceiptAbsenceData();
    if (object.path !== undefined && object.path !== null) {
      message.path = bytesFromBase64(object.path);
    }
    return message;
  },
  toAmino(message: PacketReceiptAbsenceData): PacketReceiptAbsenceDataAmino {
    const obj: any = {};
    obj.path = message.path ? base64FromBytes(message.path) : undefined;
    return obj;
  },
  fromAminoMsg(object: PacketReceiptAbsenceDataAminoMsg): PacketReceiptAbsenceData {
    return PacketReceiptAbsenceData.fromAmino(object.value);
  },
  toAminoMsg(message: PacketReceiptAbsenceData): PacketReceiptAbsenceDataAminoMsg {
    return {
      type: "cosmos-sdk/PacketReceiptAbsenceData",
      value: PacketReceiptAbsenceData.toAmino(message)
    };
  },
  fromProtoMsg(message: PacketReceiptAbsenceDataProtoMsg): PacketReceiptAbsenceData {
    return PacketReceiptAbsenceData.decode(message.value);
  },
  toProto(message: PacketReceiptAbsenceData): Uint8Array {
    return PacketReceiptAbsenceData.encode(message).finish();
  },
  toProtoMsg(message: PacketReceiptAbsenceData): PacketReceiptAbsenceDataProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v2.PacketReceiptAbsenceData",
      value: PacketReceiptAbsenceData.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(PacketReceiptAbsenceData.typeUrl, PacketReceiptAbsenceData);
GlobalDecoderRegistry.registerAminoProtoMapping(PacketReceiptAbsenceData.aminoType, PacketReceiptAbsenceData.typeUrl);
function createBaseNextSequenceRecvData(): NextSequenceRecvData {
  return {
    path: new Uint8Array(),
    nextSeqRecv: BigInt(0)
  };
}
export const NextSequenceRecvData = {
  typeUrl: "/ibc.lightclients.solomachine.v2.NextSequenceRecvData",
  aminoType: "cosmos-sdk/NextSequenceRecvData",
  is(o: any): o is NextSequenceRecvData {
    return o && (o.$typeUrl === NextSequenceRecvData.typeUrl || (o.path instanceof Uint8Array || typeof o.path === "string") && typeof o.nextSeqRecv === "bigint");
  },
  isSDK(o: any): o is NextSequenceRecvDataSDKType {
    return o && (o.$typeUrl === NextSequenceRecvData.typeUrl || (o.path instanceof Uint8Array || typeof o.path === "string") && typeof o.next_seq_recv === "bigint");
  },
  isAmino(o: any): o is NextSequenceRecvDataAmino {
    return o && (o.$typeUrl === NextSequenceRecvData.typeUrl || (o.path instanceof Uint8Array || typeof o.path === "string") && typeof o.next_seq_recv === "bigint");
  },
  encode(message: NextSequenceRecvData, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    if (message.nextSeqRecv !== undefined) {
      writer.uint32(16).uint64(message.nextSeqRecv);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): NextSequenceRecvData {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNextSequenceRecvData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;
        case 2:
          message.nextSeqRecv = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): NextSequenceRecvData {
    const obj = createBaseNextSequenceRecvData();
    if (isSet(object.path)) obj.path = bytesFromBase64(object.path);
    if (isSet(object.nextSeqRecv)) obj.nextSeqRecv = BigInt(object.nextSeqRecv.toString());
    return obj;
  },
  toJSON(message: NextSequenceRecvData): JsonSafe<NextSequenceRecvData> {
    const obj: any = {};
    message.path !== undefined && (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
    message.nextSeqRecv !== undefined && (obj.nextSeqRecv = (message.nextSeqRecv || BigInt(0)).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<NextSequenceRecvData>): NextSequenceRecvData {
    const message = createBaseNextSequenceRecvData();
    message.path = object.path ?? new Uint8Array();
    if (object.nextSeqRecv !== undefined && object.nextSeqRecv !== null) {
      message.nextSeqRecv = BigInt(object.nextSeqRecv.toString());
    }
    return message;
  },
  fromSDK(object: NextSequenceRecvDataSDKType): NextSequenceRecvData {
    return {
      path: object?.path,
      nextSeqRecv: object?.next_seq_recv
    };
  },
  toSDK(message: NextSequenceRecvData): NextSequenceRecvDataSDKType {
    const obj: any = {};
    obj.path = message.path;
    obj.next_seq_recv = message.nextSeqRecv;
    return obj;
  },
  fromAmino(object: NextSequenceRecvDataAmino): NextSequenceRecvData {
    const message = createBaseNextSequenceRecvData();
    if (object.path !== undefined && object.path !== null) {
      message.path = bytesFromBase64(object.path);
    }
    if (object.next_seq_recv !== undefined && object.next_seq_recv !== null) {
      message.nextSeqRecv = BigInt(object.next_seq_recv);
    }
    return message;
  },
  toAmino(message: NextSequenceRecvData): NextSequenceRecvDataAmino {
    const obj: any = {};
    obj.path = message.path ? base64FromBytes(message.path) : undefined;
    obj.next_seq_recv = message.nextSeqRecv !== BigInt(0) ? message.nextSeqRecv.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: NextSequenceRecvDataAminoMsg): NextSequenceRecvData {
    return NextSequenceRecvData.fromAmino(object.value);
  },
  toAminoMsg(message: NextSequenceRecvData): NextSequenceRecvDataAminoMsg {
    return {
      type: "cosmos-sdk/NextSequenceRecvData",
      value: NextSequenceRecvData.toAmino(message)
    };
  },
  fromProtoMsg(message: NextSequenceRecvDataProtoMsg): NextSequenceRecvData {
    return NextSequenceRecvData.decode(message.value);
  },
  toProto(message: NextSequenceRecvData): Uint8Array {
    return NextSequenceRecvData.encode(message).finish();
  },
  toProtoMsg(message: NextSequenceRecvData): NextSequenceRecvDataProtoMsg {
    return {
      typeUrl: "/ibc.lightclients.solomachine.v2.NextSequenceRecvData",
      value: NextSequenceRecvData.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(NextSequenceRecvData.typeUrl, NextSequenceRecvData);
GlobalDecoderRegistry.registerAminoProtoMapping(NextSequenceRecvData.aminoType, NextSequenceRecvData.typeUrl);