import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { ConnectionEnd, ConnectionEndAmino, ConnectionEndSDKType } from "../../../core/connection/v1/connection";
import { Channel, ChannelAmino, ChannelSDKType } from "../../../core/channel/v1/channel";
import { Long, isSet, DeepPartial, bytesFromBase64, base64FromBytes } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "ibc.lightclients.solomachine.v1";
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
  sequence: Long;
  /** frozen sequence of the solo machine */
  frozenSequence: Long;
  consensusState: ConsensusState;
  /**
   * when set to true, will allow governance to update a solo machine client.
   * The client will be unfrozen if it is frozen.
   */
  allowUpdateAfterProposal: boolean;
}
export interface ClientStateProtoMsg {
  typeUrl: "/ibc.lightclients.solomachine.v1.ClientState";
  value: Uint8Array;
}
/**
 * ClientState defines a solo machine client that tracks the current consensus
 * state and if the client is frozen.
 */
export interface ClientStateAmino {
  /** latest sequence of the client state */
  sequence: string;
  /** frozen sequence of the solo machine */
  frozen_sequence: string;
  consensus_state?: ConsensusStateAmino;
  /**
   * when set to true, will allow governance to update a solo machine client.
   * The client will be unfrozen if it is frozen.
   */
  allow_update_after_proposal: boolean;
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
  sequence: Long;
  frozen_sequence: Long;
  consensus_state: ConsensusStateSDKType;
  allow_update_after_proposal: boolean;
}
/**
 * ConsensusState defines a solo machine consensus state. The sequence of a
 * consensus state is contained in the "height" key used in storing the
 * consensus state.
 */
export interface ConsensusState {
  /** public key of the solo machine */
  publicKey: Any;
  /**
   * diversifier allows the same public key to be re-used across different solo
   * machine clients (potentially on different chains) without being considered
   * misbehaviour.
   */
  diversifier: string;
  timestamp: Long;
}
export interface ConsensusStateProtoMsg {
  typeUrl: "/ibc.lightclients.solomachine.v1.ConsensusState";
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
  diversifier: string;
  timestamp: string;
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
  public_key: AnySDKType;
  diversifier: string;
  timestamp: Long;
}
/** Header defines a solo machine consensus header */
export interface Header {
  /** sequence to update solo machine public key at */
  sequence: Long;
  timestamp: Long;
  signature: Uint8Array;
  newPublicKey: Any;
  newDiversifier: string;
}
export interface HeaderProtoMsg {
  typeUrl: "/ibc.lightclients.solomachine.v1.Header";
  value: Uint8Array;
}
/** Header defines a solo machine consensus header */
export interface HeaderAmino {
  /** sequence to update solo machine public key at */
  sequence: string;
  timestamp: string;
  signature: Uint8Array;
  new_public_key?: AnyAmino;
  new_diversifier: string;
}
export interface HeaderAminoMsg {
  type: "cosmos-sdk/Header";
  value: HeaderAmino;
}
/** Header defines a solo machine consensus header */
export interface HeaderSDKType {
  sequence: Long;
  timestamp: Long;
  signature: Uint8Array;
  new_public_key: AnySDKType;
  new_diversifier: string;
}
/**
 * Misbehaviour defines misbehaviour for a solo machine which consists
 * of a sequence and two signatures over different messages at that sequence.
 */
export interface Misbehaviour {
  clientId: string;
  sequence: Long;
  signatureOne: SignatureAndData;
  signatureTwo: SignatureAndData;
}
export interface MisbehaviourProtoMsg {
  typeUrl: "/ibc.lightclients.solomachine.v1.Misbehaviour";
  value: Uint8Array;
}
/**
 * Misbehaviour defines misbehaviour for a solo machine which consists
 * of a sequence and two signatures over different messages at that sequence.
 */
export interface MisbehaviourAmino {
  client_id: string;
  sequence: string;
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
  sequence: Long;
  signature_one: SignatureAndDataSDKType;
  signature_two: SignatureAndDataSDKType;
}
/**
 * SignatureAndData contains a signature and the data signed over to create that
 * signature.
 */
export interface SignatureAndData {
  signature: Uint8Array;
  dataType: DataType;
  data: Uint8Array;
  timestamp: Long;
}
export interface SignatureAndDataProtoMsg {
  typeUrl: "/ibc.lightclients.solomachine.v1.SignatureAndData";
  value: Uint8Array;
}
/**
 * SignatureAndData contains a signature and the data signed over to create that
 * signature.
 */
export interface SignatureAndDataAmino {
  signature: Uint8Array;
  data_type: DataType;
  data: Uint8Array;
  timestamp: string;
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
  timestamp: Long;
}
/**
 * TimestampedSignatureData contains the signature data and the timestamp of the
 * signature.
 */
export interface TimestampedSignatureData {
  signatureData: Uint8Array;
  timestamp: Long;
}
export interface TimestampedSignatureDataProtoMsg {
  typeUrl: "/ibc.lightclients.solomachine.v1.TimestampedSignatureData";
  value: Uint8Array;
}
/**
 * TimestampedSignatureData contains the signature data and the timestamp of the
 * signature.
 */
export interface TimestampedSignatureDataAmino {
  signature_data: Uint8Array;
  timestamp: string;
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
  timestamp: Long;
}
/** SignBytes defines the signed bytes used for signature verification. */
export interface SignBytes {
  sequence: Long;
  timestamp: Long;
  diversifier: string;
  /** type of the data used */
  dataType: DataType;
  /** marshaled data */
  data: Uint8Array;
}
export interface SignBytesProtoMsg {
  typeUrl: "/ibc.lightclients.solomachine.v1.SignBytes";
  value: Uint8Array;
}
/** SignBytes defines the signed bytes used for signature verification. */
export interface SignBytesAmino {
  sequence: string;
  timestamp: string;
  diversifier: string;
  /** type of the data used */
  data_type: DataType;
  /** marshaled data */
  data: Uint8Array;
}
export interface SignBytesAminoMsg {
  type: "cosmos-sdk/SignBytes";
  value: SignBytesAmino;
}
/** SignBytes defines the signed bytes used for signature verification. */
export interface SignBytesSDKType {
  sequence: Long;
  timestamp: Long;
  diversifier: string;
  data_type: DataType;
  data: Uint8Array;
}
/** HeaderData returns the SignBytes data for update verification. */
export interface HeaderData {
  /** header public key */
  newPubKey: Any;
  /** header diversifier */
  newDiversifier: string;
}
export interface HeaderDataProtoMsg {
  typeUrl: "/ibc.lightclients.solomachine.v1.HeaderData";
  value: Uint8Array;
}
/** HeaderData returns the SignBytes data for update verification. */
export interface HeaderDataAmino {
  /** header public key */
  new_pub_key?: AnyAmino;
  /** header diversifier */
  new_diversifier: string;
}
export interface HeaderDataAminoMsg {
  type: "cosmos-sdk/HeaderData";
  value: HeaderDataAmino;
}
/** HeaderData returns the SignBytes data for update verification. */
export interface HeaderDataSDKType {
  new_pub_key: AnySDKType;
  new_diversifier: string;
}
/** ClientStateData returns the SignBytes data for client state verification. */
export interface ClientStateData {
  path: Uint8Array;
  clientState: Any;
}
export interface ClientStateDataProtoMsg {
  typeUrl: "/ibc.lightclients.solomachine.v1.ClientStateData";
  value: Uint8Array;
}
/** ClientStateData returns the SignBytes data for client state verification. */
export interface ClientStateDataAmino {
  path: Uint8Array;
  client_state?: AnyAmino;
}
export interface ClientStateDataAminoMsg {
  type: "cosmos-sdk/ClientStateData";
  value: ClientStateDataAmino;
}
/** ClientStateData returns the SignBytes data for client state verification. */
export interface ClientStateDataSDKType {
  path: Uint8Array;
  client_state: AnySDKType;
}
/**
 * ConsensusStateData returns the SignBytes data for consensus state
 * verification.
 */
export interface ConsensusStateData {
  path: Uint8Array;
  consensusState: Any;
}
export interface ConsensusStateDataProtoMsg {
  typeUrl: "/ibc.lightclients.solomachine.v1.ConsensusStateData";
  value: Uint8Array;
}
/**
 * ConsensusStateData returns the SignBytes data for consensus state
 * verification.
 */
export interface ConsensusStateDataAmino {
  path: Uint8Array;
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
  consensus_state: AnySDKType;
}
/**
 * ConnectionStateData returns the SignBytes data for connection state
 * verification.
 */
export interface ConnectionStateData {
  path: Uint8Array;
  connection: ConnectionEnd;
}
export interface ConnectionStateDataProtoMsg {
  typeUrl: "/ibc.lightclients.solomachine.v1.ConnectionStateData";
  value: Uint8Array;
}
/**
 * ConnectionStateData returns the SignBytes data for connection state
 * verification.
 */
export interface ConnectionStateDataAmino {
  path: Uint8Array;
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
  connection: ConnectionEndSDKType;
}
/**
 * ChannelStateData returns the SignBytes data for channel state
 * verification.
 */
export interface ChannelStateData {
  path: Uint8Array;
  channel: Channel;
}
export interface ChannelStateDataProtoMsg {
  typeUrl: "/ibc.lightclients.solomachine.v1.ChannelStateData";
  value: Uint8Array;
}
/**
 * ChannelStateData returns the SignBytes data for channel state
 * verification.
 */
export interface ChannelStateDataAmino {
  path: Uint8Array;
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
  channel: ChannelSDKType;
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
  typeUrl: "/ibc.lightclients.solomachine.v1.PacketCommitmentData";
  value: Uint8Array;
}
/**
 * PacketCommitmentData returns the SignBytes data for packet commitment
 * verification.
 */
export interface PacketCommitmentDataAmino {
  path: Uint8Array;
  commitment: Uint8Array;
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
  typeUrl: "/ibc.lightclients.solomachine.v1.PacketAcknowledgementData";
  value: Uint8Array;
}
/**
 * PacketAcknowledgementData returns the SignBytes data for acknowledgement
 * verification.
 */
export interface PacketAcknowledgementDataAmino {
  path: Uint8Array;
  acknowledgement: Uint8Array;
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
  typeUrl: "/ibc.lightclients.solomachine.v1.PacketReceiptAbsenceData";
  value: Uint8Array;
}
/**
 * PacketReceiptAbsenceData returns the SignBytes data for
 * packet receipt absence verification.
 */
export interface PacketReceiptAbsenceDataAmino {
  path: Uint8Array;
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
  nextSeqRecv: Long;
}
export interface NextSequenceRecvDataProtoMsg {
  typeUrl: "/ibc.lightclients.solomachine.v1.NextSequenceRecvData";
  value: Uint8Array;
}
/**
 * NextSequenceRecvData returns the SignBytes data for verification of the next
 * sequence to be received.
 */
export interface NextSequenceRecvDataAmino {
  path: Uint8Array;
  next_seq_recv: string;
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
  next_seq_recv: Long;
}
function createBaseClientState(): ClientState {
  return {
    sequence: Long.UZERO,
    frozenSequence: Long.UZERO,
    consensusState: ConsensusState.fromPartial({}),
    allowUpdateAfterProposal: false
  };
}
export const ClientState = {
  typeUrl: "/ibc.lightclients.solomachine.v1.ClientState",
  aminoType: "cosmos-sdk/ClientState",
  encode(message: ClientState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.sequence.isZero()) {
      writer.uint32(8).uint64(message.sequence);
    }
    if (!message.frozenSequence.isZero()) {
      writer.uint32(16).uint64(message.frozenSequence);
    }
    if (message.consensusState !== undefined) {
      ConsensusState.encode(message.consensusState, writer.uint32(26).fork()).ldelim();
    }
    if (message.allowUpdateAfterProposal === true) {
      writer.uint32(32).bool(message.allowUpdateAfterProposal);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ClientState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = (reader.uint64() as Long);
          break;
        case 2:
          message.frozenSequence = (reader.uint64() as Long);
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
    return {
      sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO,
      frozenSequence: isSet(object.frozenSequence) ? Long.fromValue(object.frozenSequence) : Long.UZERO,
      consensusState: isSet(object.consensusState) ? ConsensusState.fromJSON(object.consensusState) : undefined,
      allowUpdateAfterProposal: isSet(object.allowUpdateAfterProposal) ? Boolean(object.allowUpdateAfterProposal) : false
    };
  },
  toJSON(message: ClientState): unknown {
    const obj: any = {};
    message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
    message.frozenSequence !== undefined && (obj.frozenSequence = (message.frozenSequence || Long.UZERO).toString());
    message.consensusState !== undefined && (obj.consensusState = message.consensusState ? ConsensusState.toJSON(message.consensusState) : undefined);
    message.allowUpdateAfterProposal !== undefined && (obj.allowUpdateAfterProposal = message.allowUpdateAfterProposal);
    return obj;
  },
  fromPartial(object: DeepPartial<ClientState>): ClientState {
    const message = createBaseClientState();
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    message.frozenSequence = object.frozenSequence !== undefined && object.frozenSequence !== null ? Long.fromValue(object.frozenSequence) : Long.UZERO;
    message.consensusState = object.consensusState !== undefined && object.consensusState !== null ? ConsensusState.fromPartial(object.consensusState) : undefined;
    message.allowUpdateAfterProposal = object.allowUpdateAfterProposal ?? false;
    return message;
  },
  fromSDK(object: ClientStateSDKType): ClientState {
    return {
      sequence: object?.sequence,
      frozenSequence: object?.frozen_sequence,
      consensusState: object.consensus_state ? ConsensusState.fromSDK(object.consensus_state) : undefined,
      allowUpdateAfterProposal: object?.allow_update_after_proposal
    };
  },
  toSDK(message: ClientState): ClientStateSDKType {
    const obj: any = {};
    obj.sequence = message.sequence;
    obj.frozen_sequence = message.frozenSequence;
    message.consensusState !== undefined && (obj.consensus_state = message.consensusState ? ConsensusState.toSDK(message.consensusState) : undefined);
    obj.allow_update_after_proposal = message.allowUpdateAfterProposal;
    return obj;
  },
  fromAmino(object: ClientStateAmino): ClientState {
    return {
      sequence: Long.fromString(object.sequence),
      frozenSequence: Long.fromString(object.frozen_sequence),
      consensusState: object?.consensus_state ? ConsensusState.fromAmino(object.consensus_state) : undefined,
      allowUpdateAfterProposal: object.allow_update_after_proposal
    };
  },
  toAmino(message: ClientState): ClientStateAmino {
    const obj: any = {};
    obj.sequence = message.sequence ? message.sequence.toString() : undefined;
    obj.frozen_sequence = message.frozenSequence ? message.frozenSequence.toString() : undefined;
    obj.consensus_state = message.consensusState ? ConsensusState.toAmino(message.consensusState) : undefined;
    obj.allow_update_after_proposal = message.allowUpdateAfterProposal;
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
      typeUrl: "/ibc.lightclients.solomachine.v1.ClientState",
      value: ClientState.encode(message).finish()
    };
  }
};
function createBaseConsensusState(): ConsensusState {
  return {
    publicKey: undefined,
    diversifier: "",
    timestamp: Long.UZERO
  };
}
export const ConsensusState = {
  typeUrl: "/ibc.lightclients.solomachine.v1.ConsensusState",
  aminoType: "cosmos-sdk/ConsensusState",
  encode(message: ConsensusState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.publicKey !== undefined) {
      Any.encode(message.publicKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.diversifier !== "") {
      writer.uint32(18).string(message.diversifier);
    }
    if (!message.timestamp.isZero()) {
      writer.uint32(24).uint64(message.timestamp);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ConsensusState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
          message.timestamp = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): ConsensusState {
    return {
      publicKey: isSet(object.publicKey) ? Any.fromJSON(object.publicKey) : undefined,
      diversifier: isSet(object.diversifier) ? String(object.diversifier) : "",
      timestamp: isSet(object.timestamp) ? Long.fromValue(object.timestamp) : Long.UZERO
    };
  },
  toJSON(message: ConsensusState): unknown {
    const obj: any = {};
    message.publicKey !== undefined && (obj.publicKey = message.publicKey ? Any.toJSON(message.publicKey) : undefined);
    message.diversifier !== undefined && (obj.diversifier = message.diversifier);
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<ConsensusState>): ConsensusState {
    const message = createBaseConsensusState();
    message.publicKey = object.publicKey !== undefined && object.publicKey !== null ? Any.fromPartial(object.publicKey) : undefined;
    message.diversifier = object.diversifier ?? "";
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.UZERO;
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
    return {
      publicKey: object?.public_key ? Any.fromAmino(object.public_key) : undefined,
      diversifier: object.diversifier,
      timestamp: Long.fromString(object.timestamp)
    };
  },
  toAmino(message: ConsensusState): ConsensusStateAmino {
    const obj: any = {};
    obj.public_key = message.publicKey ? Any.toAmino(message.publicKey) : undefined;
    obj.diversifier = message.diversifier;
    obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
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
      typeUrl: "/ibc.lightclients.solomachine.v1.ConsensusState",
      value: ConsensusState.encode(message).finish()
    };
  }
};
function createBaseHeader(): Header {
  return {
    sequence: Long.UZERO,
    timestamp: Long.UZERO,
    signature: new Uint8Array(),
    newPublicKey: undefined,
    newDiversifier: ""
  };
}
export const Header = {
  typeUrl: "/ibc.lightclients.solomachine.v1.Header",
  aminoType: "cosmos-sdk/Header",
  encode(message: Header, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.sequence.isZero()) {
      writer.uint32(8).uint64(message.sequence);
    }
    if (!message.timestamp.isZero()) {
      writer.uint32(16).uint64(message.timestamp);
    }
    if (message.signature.length !== 0) {
      writer.uint32(26).bytes(message.signature);
    }
    if (message.newPublicKey !== undefined) {
      Any.encode(message.newPublicKey, writer.uint32(34).fork()).ldelim();
    }
    if (message.newDiversifier !== "") {
      writer.uint32(42).string(message.newDiversifier);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): Header {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHeader();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = (reader.uint64() as Long);
          break;
        case 2:
          message.timestamp = (reader.uint64() as Long);
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
    return {
      sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO,
      timestamp: isSet(object.timestamp) ? Long.fromValue(object.timestamp) : Long.UZERO,
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(),
      newPublicKey: isSet(object.newPublicKey) ? Any.fromJSON(object.newPublicKey) : undefined,
      newDiversifier: isSet(object.newDiversifier) ? String(object.newDiversifier) : ""
    };
  },
  toJSON(message: Header): unknown {
    const obj: any = {};
    message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || Long.UZERO).toString());
    message.signature !== undefined && (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
    message.newPublicKey !== undefined && (obj.newPublicKey = message.newPublicKey ? Any.toJSON(message.newPublicKey) : undefined);
    message.newDiversifier !== undefined && (obj.newDiversifier = message.newDiversifier);
    return obj;
  },
  fromPartial(object: DeepPartial<Header>): Header {
    const message = createBaseHeader();
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.UZERO;
    message.signature = object.signature ?? new Uint8Array();
    message.newPublicKey = object.newPublicKey !== undefined && object.newPublicKey !== null ? Any.fromPartial(object.newPublicKey) : undefined;
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
    return {
      sequence: Long.fromString(object.sequence),
      timestamp: Long.fromString(object.timestamp),
      signature: object.signature,
      newPublicKey: object?.new_public_key ? Any.fromAmino(object.new_public_key) : undefined,
      newDiversifier: object.new_diversifier
    };
  },
  toAmino(message: Header): HeaderAmino {
    const obj: any = {};
    obj.sequence = message.sequence ? message.sequence.toString() : undefined;
    obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
    obj.signature = message.signature;
    obj.new_public_key = message.newPublicKey ? Any.toAmino(message.newPublicKey) : undefined;
    obj.new_diversifier = message.newDiversifier;
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
      typeUrl: "/ibc.lightclients.solomachine.v1.Header",
      value: Header.encode(message).finish()
    };
  }
};
function createBaseMisbehaviour(): Misbehaviour {
  return {
    clientId: "",
    sequence: Long.UZERO,
    signatureOne: SignatureAndData.fromPartial({}),
    signatureTwo: SignatureAndData.fromPartial({})
  };
}
export const Misbehaviour = {
  typeUrl: "/ibc.lightclients.solomachine.v1.Misbehaviour",
  aminoType: "cosmos-sdk/Misbehaviour",
  encode(message: Misbehaviour, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (!message.sequence.isZero()) {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): Misbehaviour {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMisbehaviour();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.sequence = (reader.uint64() as Long);
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
    return {
      clientId: isSet(object.clientId) ? String(object.clientId) : "",
      sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO,
      signatureOne: isSet(object.signatureOne) ? SignatureAndData.fromJSON(object.signatureOne) : undefined,
      signatureTwo: isSet(object.signatureTwo) ? SignatureAndData.fromJSON(object.signatureTwo) : undefined
    };
  },
  toJSON(message: Misbehaviour): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
    message.signatureOne !== undefined && (obj.signatureOne = message.signatureOne ? SignatureAndData.toJSON(message.signatureOne) : undefined);
    message.signatureTwo !== undefined && (obj.signatureTwo = message.signatureTwo ? SignatureAndData.toJSON(message.signatureTwo) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<Misbehaviour>): Misbehaviour {
    const message = createBaseMisbehaviour();
    message.clientId = object.clientId ?? "";
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    message.signatureOne = object.signatureOne !== undefined && object.signatureOne !== null ? SignatureAndData.fromPartial(object.signatureOne) : undefined;
    message.signatureTwo = object.signatureTwo !== undefined && object.signatureTwo !== null ? SignatureAndData.fromPartial(object.signatureTwo) : undefined;
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
    return {
      clientId: object.client_id,
      sequence: Long.fromString(object.sequence),
      signatureOne: object?.signature_one ? SignatureAndData.fromAmino(object.signature_one) : undefined,
      signatureTwo: object?.signature_two ? SignatureAndData.fromAmino(object.signature_two) : undefined
    };
  },
  toAmino(message: Misbehaviour): MisbehaviourAmino {
    const obj: any = {};
    obj.client_id = message.clientId;
    obj.sequence = message.sequence ? message.sequence.toString() : undefined;
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
      typeUrl: "/ibc.lightclients.solomachine.v1.Misbehaviour",
      value: Misbehaviour.encode(message).finish()
    };
  }
};
function createBaseSignatureAndData(): SignatureAndData {
  return {
    signature: new Uint8Array(),
    dataType: 0,
    data: new Uint8Array(),
    timestamp: Long.UZERO
  };
}
export const SignatureAndData = {
  typeUrl: "/ibc.lightclients.solomachine.v1.SignatureAndData",
  aminoType: "cosmos-sdk/SignatureAndData",
  encode(message: SignatureAndData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signature.length !== 0) {
      writer.uint32(10).bytes(message.signature);
    }
    if (message.dataType !== 0) {
      writer.uint32(16).int32(message.dataType);
    }
    if (message.data.length !== 0) {
      writer.uint32(26).bytes(message.data);
    }
    if (!message.timestamp.isZero()) {
      writer.uint32(32).uint64(message.timestamp);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): SignatureAndData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
          message.timestamp = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): SignatureAndData {
    return {
      signature: isSet(object.signature) ? bytesFromBase64(object.signature) : new Uint8Array(),
      dataType: isSet(object.dataType) ? dataTypeFromJSON(object.dataType) : 0,
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
      timestamp: isSet(object.timestamp) ? Long.fromValue(object.timestamp) : Long.UZERO
    };
  },
  toJSON(message: SignatureAndData): unknown {
    const obj: any = {};
    message.signature !== undefined && (obj.signature = base64FromBytes(message.signature !== undefined ? message.signature : new Uint8Array()));
    message.dataType !== undefined && (obj.dataType = dataTypeToJSON(message.dataType));
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<SignatureAndData>): SignatureAndData {
    const message = createBaseSignatureAndData();
    message.signature = object.signature ?? new Uint8Array();
    message.dataType = object.dataType ?? 0;
    message.data = object.data ?? new Uint8Array();
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.UZERO;
    return message;
  },
  fromSDK(object: SignatureAndDataSDKType): SignatureAndData {
    return {
      signature: object?.signature,
      dataType: isSet(object.data_type) ? dataTypeFromJSON(object.data_type) : 0,
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
    return {
      signature: object.signature,
      dataType: isSet(object.data_type) ? dataTypeFromJSON(object.data_type) : 0,
      data: object.data,
      timestamp: Long.fromString(object.timestamp)
    };
  },
  toAmino(message: SignatureAndData): SignatureAndDataAmino {
    const obj: any = {};
    obj.signature = message.signature;
    obj.data_type = message.dataType;
    obj.data = message.data;
    obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
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
      typeUrl: "/ibc.lightclients.solomachine.v1.SignatureAndData",
      value: SignatureAndData.encode(message).finish()
    };
  }
};
function createBaseTimestampedSignatureData(): TimestampedSignatureData {
  return {
    signatureData: new Uint8Array(),
    timestamp: Long.UZERO
  };
}
export const TimestampedSignatureData = {
  typeUrl: "/ibc.lightclients.solomachine.v1.TimestampedSignatureData",
  aminoType: "cosmos-sdk/TimestampedSignatureData",
  encode(message: TimestampedSignatureData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signatureData.length !== 0) {
      writer.uint32(10).bytes(message.signatureData);
    }
    if (!message.timestamp.isZero()) {
      writer.uint32(16).uint64(message.timestamp);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): TimestampedSignatureData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTimestampedSignatureData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.signatureData = reader.bytes();
          break;
        case 2:
          message.timestamp = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): TimestampedSignatureData {
    return {
      signatureData: isSet(object.signatureData) ? bytesFromBase64(object.signatureData) : new Uint8Array(),
      timestamp: isSet(object.timestamp) ? Long.fromValue(object.timestamp) : Long.UZERO
    };
  },
  toJSON(message: TimestampedSignatureData): unknown {
    const obj: any = {};
    message.signatureData !== undefined && (obj.signatureData = base64FromBytes(message.signatureData !== undefined ? message.signatureData : new Uint8Array()));
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<TimestampedSignatureData>): TimestampedSignatureData {
    const message = createBaseTimestampedSignatureData();
    message.signatureData = object.signatureData ?? new Uint8Array();
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.UZERO;
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
    return {
      signatureData: object.signature_data,
      timestamp: Long.fromString(object.timestamp)
    };
  },
  toAmino(message: TimestampedSignatureData): TimestampedSignatureDataAmino {
    const obj: any = {};
    obj.signature_data = message.signatureData;
    obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
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
      typeUrl: "/ibc.lightclients.solomachine.v1.TimestampedSignatureData",
      value: TimestampedSignatureData.encode(message).finish()
    };
  }
};
function createBaseSignBytes(): SignBytes {
  return {
    sequence: Long.UZERO,
    timestamp: Long.UZERO,
    diversifier: "",
    dataType: 0,
    data: new Uint8Array()
  };
}
export const SignBytes = {
  typeUrl: "/ibc.lightclients.solomachine.v1.SignBytes",
  aminoType: "cosmos-sdk/SignBytes",
  encode(message: SignBytes, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.sequence.isZero()) {
      writer.uint32(8).uint64(message.sequence);
    }
    if (!message.timestamp.isZero()) {
      writer.uint32(16).uint64(message.timestamp);
    }
    if (message.diversifier !== "") {
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
  decode(input: _m0.Reader | Uint8Array, length?: number): SignBytes {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSignBytes();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = (reader.uint64() as Long);
          break;
        case 2:
          message.timestamp = (reader.uint64() as Long);
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
    return {
      sequence: isSet(object.sequence) ? Long.fromValue(object.sequence) : Long.UZERO,
      timestamp: isSet(object.timestamp) ? Long.fromValue(object.timestamp) : Long.UZERO,
      diversifier: isSet(object.diversifier) ? String(object.diversifier) : "",
      dataType: isSet(object.dataType) ? dataTypeFromJSON(object.dataType) : 0,
      data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array()
    };
  },
  toJSON(message: SignBytes): unknown {
    const obj: any = {};
    message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
    message.timestamp !== undefined && (obj.timestamp = (message.timestamp || Long.UZERO).toString());
    message.diversifier !== undefined && (obj.diversifier = message.diversifier);
    message.dataType !== undefined && (obj.dataType = dataTypeToJSON(message.dataType));
    message.data !== undefined && (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
    return obj;
  },
  fromPartial(object: DeepPartial<SignBytes>): SignBytes {
    const message = createBaseSignBytes();
    message.sequence = object.sequence !== undefined && object.sequence !== null ? Long.fromValue(object.sequence) : Long.UZERO;
    message.timestamp = object.timestamp !== undefined && object.timestamp !== null ? Long.fromValue(object.timestamp) : Long.UZERO;
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
      dataType: isSet(object.data_type) ? dataTypeFromJSON(object.data_type) : 0,
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
    return {
      sequence: Long.fromString(object.sequence),
      timestamp: Long.fromString(object.timestamp),
      diversifier: object.diversifier,
      dataType: isSet(object.data_type) ? dataTypeFromJSON(object.data_type) : 0,
      data: object.data
    };
  },
  toAmino(message: SignBytes): SignBytesAmino {
    const obj: any = {};
    obj.sequence = message.sequence ? message.sequence.toString() : undefined;
    obj.timestamp = message.timestamp ? message.timestamp.toString() : undefined;
    obj.diversifier = message.diversifier;
    obj.data_type = message.dataType;
    obj.data = message.data;
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
      typeUrl: "/ibc.lightclients.solomachine.v1.SignBytes",
      value: SignBytes.encode(message).finish()
    };
  }
};
function createBaseHeaderData(): HeaderData {
  return {
    newPubKey: undefined,
    newDiversifier: ""
  };
}
export const HeaderData = {
  typeUrl: "/ibc.lightclients.solomachine.v1.HeaderData",
  aminoType: "cosmos-sdk/HeaderData",
  encode(message: HeaderData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.newPubKey !== undefined) {
      Any.encode(message.newPubKey, writer.uint32(10).fork()).ldelim();
    }
    if (message.newDiversifier !== "") {
      writer.uint32(18).string(message.newDiversifier);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): HeaderData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    return {
      newPubKey: isSet(object.newPubKey) ? Any.fromJSON(object.newPubKey) : undefined,
      newDiversifier: isSet(object.newDiversifier) ? String(object.newDiversifier) : ""
    };
  },
  toJSON(message: HeaderData): unknown {
    const obj: any = {};
    message.newPubKey !== undefined && (obj.newPubKey = message.newPubKey ? Any.toJSON(message.newPubKey) : undefined);
    message.newDiversifier !== undefined && (obj.newDiversifier = message.newDiversifier);
    return obj;
  },
  fromPartial(object: DeepPartial<HeaderData>): HeaderData {
    const message = createBaseHeaderData();
    message.newPubKey = object.newPubKey !== undefined && object.newPubKey !== null ? Any.fromPartial(object.newPubKey) : undefined;
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
    return {
      newPubKey: object?.new_pub_key ? Any.fromAmino(object.new_pub_key) : undefined,
      newDiversifier: object.new_diversifier
    };
  },
  toAmino(message: HeaderData): HeaderDataAmino {
    const obj: any = {};
    obj.new_pub_key = message.newPubKey ? Any.toAmino(message.newPubKey) : undefined;
    obj.new_diversifier = message.newDiversifier;
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
      typeUrl: "/ibc.lightclients.solomachine.v1.HeaderData",
      value: HeaderData.encode(message).finish()
    };
  }
};
function createBaseClientStateData(): ClientStateData {
  return {
    path: new Uint8Array(),
    clientState: undefined
  };
}
export const ClientStateData = {
  typeUrl: "/ibc.lightclients.solomachine.v1.ClientStateData",
  aminoType: "cosmos-sdk/ClientStateData",
  encode(message: ClientStateData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    if (message.clientState !== undefined) {
      Any.encode(message.clientState, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ClientStateData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    return {
      path: isSet(object.path) ? bytesFromBase64(object.path) : new Uint8Array(),
      clientState: isSet(object.clientState) ? Any.fromJSON(object.clientState) : undefined
    };
  },
  toJSON(message: ClientStateData): unknown {
    const obj: any = {};
    message.path !== undefined && (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
    message.clientState !== undefined && (obj.clientState = message.clientState ? Any.toJSON(message.clientState) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<ClientStateData>): ClientStateData {
    const message = createBaseClientStateData();
    message.path = object.path ?? new Uint8Array();
    message.clientState = object.clientState !== undefined && object.clientState !== null ? Any.fromPartial(object.clientState) : undefined;
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
    return {
      path: object.path,
      clientState: object?.client_state ? Any.fromAmino(object.client_state) : undefined
    };
  },
  toAmino(message: ClientStateData): ClientStateDataAmino {
    const obj: any = {};
    obj.path = message.path;
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
      typeUrl: "/ibc.lightclients.solomachine.v1.ClientStateData",
      value: ClientStateData.encode(message).finish()
    };
  }
};
function createBaseConsensusStateData(): ConsensusStateData {
  return {
    path: new Uint8Array(),
    consensusState: undefined
  };
}
export const ConsensusStateData = {
  typeUrl: "/ibc.lightclients.solomachine.v1.ConsensusStateData",
  aminoType: "cosmos-sdk/ConsensusStateData",
  encode(message: ConsensusStateData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    if (message.consensusState !== undefined) {
      Any.encode(message.consensusState, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ConsensusStateData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    return {
      path: isSet(object.path) ? bytesFromBase64(object.path) : new Uint8Array(),
      consensusState: isSet(object.consensusState) ? Any.fromJSON(object.consensusState) : undefined
    };
  },
  toJSON(message: ConsensusStateData): unknown {
    const obj: any = {};
    message.path !== undefined && (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
    message.consensusState !== undefined && (obj.consensusState = message.consensusState ? Any.toJSON(message.consensusState) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<ConsensusStateData>): ConsensusStateData {
    const message = createBaseConsensusStateData();
    message.path = object.path ?? new Uint8Array();
    message.consensusState = object.consensusState !== undefined && object.consensusState !== null ? Any.fromPartial(object.consensusState) : undefined;
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
    return {
      path: object.path,
      consensusState: object?.consensus_state ? Any.fromAmino(object.consensus_state) : undefined
    };
  },
  toAmino(message: ConsensusStateData): ConsensusStateDataAmino {
    const obj: any = {};
    obj.path = message.path;
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
      typeUrl: "/ibc.lightclients.solomachine.v1.ConsensusStateData",
      value: ConsensusStateData.encode(message).finish()
    };
  }
};
function createBaseConnectionStateData(): ConnectionStateData {
  return {
    path: new Uint8Array(),
    connection: ConnectionEnd.fromPartial({})
  };
}
export const ConnectionStateData = {
  typeUrl: "/ibc.lightclients.solomachine.v1.ConnectionStateData",
  aminoType: "cosmos-sdk/ConnectionStateData",
  encode(message: ConnectionStateData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    if (message.connection !== undefined) {
      ConnectionEnd.encode(message.connection, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ConnectionStateData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    return {
      path: isSet(object.path) ? bytesFromBase64(object.path) : new Uint8Array(),
      connection: isSet(object.connection) ? ConnectionEnd.fromJSON(object.connection) : undefined
    };
  },
  toJSON(message: ConnectionStateData): unknown {
    const obj: any = {};
    message.path !== undefined && (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
    message.connection !== undefined && (obj.connection = message.connection ? ConnectionEnd.toJSON(message.connection) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<ConnectionStateData>): ConnectionStateData {
    const message = createBaseConnectionStateData();
    message.path = object.path ?? new Uint8Array();
    message.connection = object.connection !== undefined && object.connection !== null ? ConnectionEnd.fromPartial(object.connection) : undefined;
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
    return {
      path: object.path,
      connection: object?.connection ? ConnectionEnd.fromAmino(object.connection) : undefined
    };
  },
  toAmino(message: ConnectionStateData): ConnectionStateDataAmino {
    const obj: any = {};
    obj.path = message.path;
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
      typeUrl: "/ibc.lightclients.solomachine.v1.ConnectionStateData",
      value: ConnectionStateData.encode(message).finish()
    };
  }
};
function createBaseChannelStateData(): ChannelStateData {
  return {
    path: new Uint8Array(),
    channel: Channel.fromPartial({})
  };
}
export const ChannelStateData = {
  typeUrl: "/ibc.lightclients.solomachine.v1.ChannelStateData",
  aminoType: "cosmos-sdk/ChannelStateData",
  encode(message: ChannelStateData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    if (message.channel !== undefined) {
      Channel.encode(message.channel, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): ChannelStateData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    return {
      path: isSet(object.path) ? bytesFromBase64(object.path) : new Uint8Array(),
      channel: isSet(object.channel) ? Channel.fromJSON(object.channel) : undefined
    };
  },
  toJSON(message: ChannelStateData): unknown {
    const obj: any = {};
    message.path !== undefined && (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
    message.channel !== undefined && (obj.channel = message.channel ? Channel.toJSON(message.channel) : undefined);
    return obj;
  },
  fromPartial(object: DeepPartial<ChannelStateData>): ChannelStateData {
    const message = createBaseChannelStateData();
    message.path = object.path ?? new Uint8Array();
    message.channel = object.channel !== undefined && object.channel !== null ? Channel.fromPartial(object.channel) : undefined;
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
    return {
      path: object.path,
      channel: object?.channel ? Channel.fromAmino(object.channel) : undefined
    };
  },
  toAmino(message: ChannelStateData): ChannelStateDataAmino {
    const obj: any = {};
    obj.path = message.path;
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
      typeUrl: "/ibc.lightclients.solomachine.v1.ChannelStateData",
      value: ChannelStateData.encode(message).finish()
    };
  }
};
function createBasePacketCommitmentData(): PacketCommitmentData {
  return {
    path: new Uint8Array(),
    commitment: new Uint8Array()
  };
}
export const PacketCommitmentData = {
  typeUrl: "/ibc.lightclients.solomachine.v1.PacketCommitmentData",
  aminoType: "cosmos-sdk/PacketCommitmentData",
  encode(message: PacketCommitmentData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    if (message.commitment.length !== 0) {
      writer.uint32(18).bytes(message.commitment);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PacketCommitmentData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    return {
      path: isSet(object.path) ? bytesFromBase64(object.path) : new Uint8Array(),
      commitment: isSet(object.commitment) ? bytesFromBase64(object.commitment) : new Uint8Array()
    };
  },
  toJSON(message: PacketCommitmentData): unknown {
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
    return {
      path: object.path,
      commitment: object.commitment
    };
  },
  toAmino(message: PacketCommitmentData): PacketCommitmentDataAmino {
    const obj: any = {};
    obj.path = message.path;
    obj.commitment = message.commitment;
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
      typeUrl: "/ibc.lightclients.solomachine.v1.PacketCommitmentData",
      value: PacketCommitmentData.encode(message).finish()
    };
  }
};
function createBasePacketAcknowledgementData(): PacketAcknowledgementData {
  return {
    path: new Uint8Array(),
    acknowledgement: new Uint8Array()
  };
}
export const PacketAcknowledgementData = {
  typeUrl: "/ibc.lightclients.solomachine.v1.PacketAcknowledgementData",
  aminoType: "cosmos-sdk/PacketAcknowledgementData",
  encode(message: PacketAcknowledgementData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    if (message.acknowledgement.length !== 0) {
      writer.uint32(18).bytes(message.acknowledgement);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PacketAcknowledgementData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    return {
      path: isSet(object.path) ? bytesFromBase64(object.path) : new Uint8Array(),
      acknowledgement: isSet(object.acknowledgement) ? bytesFromBase64(object.acknowledgement) : new Uint8Array()
    };
  },
  toJSON(message: PacketAcknowledgementData): unknown {
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
    return {
      path: object.path,
      acknowledgement: object.acknowledgement
    };
  },
  toAmino(message: PacketAcknowledgementData): PacketAcknowledgementDataAmino {
    const obj: any = {};
    obj.path = message.path;
    obj.acknowledgement = message.acknowledgement;
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
      typeUrl: "/ibc.lightclients.solomachine.v1.PacketAcknowledgementData",
      value: PacketAcknowledgementData.encode(message).finish()
    };
  }
};
function createBasePacketReceiptAbsenceData(): PacketReceiptAbsenceData {
  return {
    path: new Uint8Array()
  };
}
export const PacketReceiptAbsenceData = {
  typeUrl: "/ibc.lightclients.solomachine.v1.PacketReceiptAbsenceData",
  aminoType: "cosmos-sdk/PacketReceiptAbsenceData",
  encode(message: PacketReceiptAbsenceData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): PacketReceiptAbsenceData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
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
    return {
      path: isSet(object.path) ? bytesFromBase64(object.path) : new Uint8Array()
    };
  },
  toJSON(message: PacketReceiptAbsenceData): unknown {
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
    return {
      path: object.path
    };
  },
  toAmino(message: PacketReceiptAbsenceData): PacketReceiptAbsenceDataAmino {
    const obj: any = {};
    obj.path = message.path;
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
      typeUrl: "/ibc.lightclients.solomachine.v1.PacketReceiptAbsenceData",
      value: PacketReceiptAbsenceData.encode(message).finish()
    };
  }
};
function createBaseNextSequenceRecvData(): NextSequenceRecvData {
  return {
    path: new Uint8Array(),
    nextSeqRecv: Long.UZERO
  };
}
export const NextSequenceRecvData = {
  typeUrl: "/ibc.lightclients.solomachine.v1.NextSequenceRecvData",
  aminoType: "cosmos-sdk/NextSequenceRecvData",
  encode(message: NextSequenceRecvData, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path.length !== 0) {
      writer.uint32(10).bytes(message.path);
    }
    if (!message.nextSeqRecv.isZero()) {
      writer.uint32(16).uint64(message.nextSeqRecv);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): NextSequenceRecvData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNextSequenceRecvData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.path = reader.bytes();
          break;
        case 2:
          message.nextSeqRecv = (reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): NextSequenceRecvData {
    return {
      path: isSet(object.path) ? bytesFromBase64(object.path) : new Uint8Array(),
      nextSeqRecv: isSet(object.nextSeqRecv) ? Long.fromValue(object.nextSeqRecv) : Long.UZERO
    };
  },
  toJSON(message: NextSequenceRecvData): unknown {
    const obj: any = {};
    message.path !== undefined && (obj.path = base64FromBytes(message.path !== undefined ? message.path : new Uint8Array()));
    message.nextSeqRecv !== undefined && (obj.nextSeqRecv = (message.nextSeqRecv || Long.UZERO).toString());
    return obj;
  },
  fromPartial(object: DeepPartial<NextSequenceRecvData>): NextSequenceRecvData {
    const message = createBaseNextSequenceRecvData();
    message.path = object.path ?? new Uint8Array();
    message.nextSeqRecv = object.nextSeqRecv !== undefined && object.nextSeqRecv !== null ? Long.fromValue(object.nextSeqRecv) : Long.UZERO;
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
    return {
      path: object.path,
      nextSeqRecv: Long.fromString(object.next_seq_recv)
    };
  },
  toAmino(message: NextSequenceRecvData): NextSequenceRecvDataAmino {
    const obj: any = {};
    obj.path = message.path;
    obj.next_seq_recv = message.nextSeqRecv ? message.nextSeqRecv.toString() : undefined;
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
      typeUrl: "/ibc.lightclients.solomachine.v1.NextSequenceRecvData",
      value: NextSequenceRecvData.encode(message).finish()
    };
  }
};