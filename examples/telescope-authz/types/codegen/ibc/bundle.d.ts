import * as _108 from "./applications/transfer/v1/genesis";
import * as _109 from "./applications/transfer/v1/query";
import * as _110 from "./applications/transfer/v1/transfer";
import * as _111 from "./applications/transfer/v1/tx";
import * as _112 from "./applications/transfer/v2/packet";
import * as _113 from "./core/channel/v1/channel";
import * as _114 from "./core/channel/v1/genesis";
import * as _115 from "./core/channel/v1/query";
import * as _116 from "./core/channel/v1/tx";
import * as _117 from "./core/client/v1/client";
import * as _118 from "./core/client/v1/genesis";
import * as _119 from "./core/client/v1/query";
import * as _120 from "./core/client/v1/tx";
import * as _121 from "./core/commitment/v1/commitment";
import * as _122 from "./core/connection/v1/connection";
import * as _123 from "./core/connection/v1/genesis";
import * as _124 from "./core/connection/v1/query";
import * as _125 from "./core/connection/v1/tx";
import * as _126 from "./core/port/v1/query";
import * as _127 from "./core/types/v1/genesis";
import * as _128 from "./lightclients/localhost/v1/localhost";
import * as _129 from "./lightclients/solomachine/v1/solomachine";
import * as _130 from "./lightclients/solomachine/v2/solomachine";
import * as _131 from "./lightclients/tendermint/v1/tendermint";
import * as _262 from "./applications/transfer/v1/query.rpc.Query";
import * as _263 from "./core/channel/v1/query.rpc.Query";
import * as _264 from "./core/client/v1/query.rpc.Query";
import * as _265 from "./core/connection/v1/query.rpc.Query";
import * as _266 from "./core/port/v1/query.rpc.Query";
import * as _267 from "./applications/transfer/v1/tx.rpc.msg";
import * as _268 from "./core/channel/v1/tx.rpc.msg";
import * as _269 from "./core/client/v1/tx.rpc.msg";
import * as _270 from "./core/connection/v1/tx.rpc.msg";
export declare namespace ibc {
    namespace applications {
        namespace transfer {
            const v1: {
                MsgClientImpl: typeof _267.MsgClientImpl;
                createClientImpl: (rpc: import("..").TxRpc) => _267.MsgClientImpl;
                QueryClientImpl: typeof _262.QueryClientImpl;
                createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                    useDenomTrace: <TData = _109.QueryDenomTraceResponse>({ request, options }: _262.UseDenomTraceQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
                    useDenomTraces: <TData_1 = _109.QueryDenomTracesResponse>({ request, options }: _262.UseDenomTracesQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
                    useParams: <TData_2 = _109.QueryParamsResponse>({ request, options }: _262.UseParamsQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
                };
                createRpcQueryMobxStores: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                    QueryDenomTraceStore: {
                        new (): {
                            store: import("..").QueryStore<_109.QueryDenomTraceRequest, _109.QueryDenomTraceResponse>;
                            denomTrace(request: _109.QueryDenomTraceRequest): import("..").MobxResponse<_109.QueryDenomTraceResponse>;
                        };
                    };
                    QueryDenomTracesStore: {
                        new (): {
                            store: import("..").QueryStore<_109.QueryDenomTracesRequest, _109.QueryDenomTracesResponse>;
                            denomTraces(request: _109.QueryDenomTracesRequest): import("..").MobxResponse<_109.QueryDenomTracesResponse>;
                        };
                    };
                    QueryParamsStore: {
                        new (): {
                            store: import("..").QueryStore<_109.QueryParamsRequest, _109.QueryParamsResponse>;
                            params(request: _109.QueryParamsRequest): import("..").MobxResponse<_109.QueryParamsResponse>;
                        };
                    };
                };
                registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        transfer(value: _111.MsgTransfer): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        transfer(value: _111.MsgTransfer): {
                            typeUrl: string;
                            value: _111.MsgTransfer;
                        };
                    };
                    toJSON: {
                        transfer(value: _111.MsgTransfer): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        transfer(value: any): {
                            typeUrl: string;
                            value: _111.MsgTransfer;
                        };
                    };
                    fromPartial: {
                        transfer(value: _111.MsgTransfer): {
                            typeUrl: string;
                            value: _111.MsgTransfer;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.applications.transfer.v1.MsgTransfer": {
                        aminoType: string;
                        toAmino: (message: _111.MsgTransfer) => _111.MsgTransferAmino;
                        fromAmino: (object: _111.MsgTransferAmino) => _111.MsgTransfer;
                    };
                };
                MsgTransfer: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _111.MsgTransfer;
                    isSDK(o: any): o is _111.MsgTransferSDKType;
                    isAmino(o: any): o is _111.MsgTransferAmino;
                    encode(message: _111.MsgTransfer, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.MsgTransfer;
                    fromJSON(object: any): _111.MsgTransfer;
                    toJSON(message: _111.MsgTransfer): unknown;
                    fromPartial(object: {
                        sourcePort?: string;
                        sourceChannel?: string;
                        token?: {
                            denom?: string;
                            amount?: string;
                        };
                        sender?: string;
                        receiver?: string;
                        timeoutHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                        timeoutTimestamp?: bigint;
                    }): _111.MsgTransfer;
                    fromSDK(object: _111.MsgTransferSDKType): _111.MsgTransfer;
                    toSDK(message: _111.MsgTransfer): _111.MsgTransferSDKType;
                    fromAmino(object: _111.MsgTransferAmino): _111.MsgTransfer;
                    toAmino(message: _111.MsgTransfer): _111.MsgTransferAmino;
                    fromAminoMsg(object: _111.MsgTransferAminoMsg): _111.MsgTransfer;
                    toAminoMsg(message: _111.MsgTransfer): _111.MsgTransferAminoMsg;
                    fromProtoMsg(message: _111.MsgTransferProtoMsg): _111.MsgTransfer;
                    toProto(message: _111.MsgTransfer): Uint8Array;
                    toProtoMsg(message: _111.MsgTransfer): _111.MsgTransferProtoMsg;
                };
                MsgTransferResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _111.MsgTransferResponse;
                    isSDK(o: any): o is _111.MsgTransferResponseSDKType;
                    isAmino(o: any): o is _111.MsgTransferResponseAmino;
                    encode(_: _111.MsgTransferResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _111.MsgTransferResponse;
                    fromJSON(_: any): _111.MsgTransferResponse;
                    toJSON(_: _111.MsgTransferResponse): unknown;
                    fromPartial(_: {}): _111.MsgTransferResponse;
                    fromSDK(_: _111.MsgTransferResponseSDKType): _111.MsgTransferResponse;
                    toSDK(_: _111.MsgTransferResponse): _111.MsgTransferResponseSDKType;
                    fromAmino(_: _111.MsgTransferResponseAmino): _111.MsgTransferResponse;
                    toAmino(_: _111.MsgTransferResponse): _111.MsgTransferResponseAmino;
                    fromAminoMsg(object: _111.MsgTransferResponseAminoMsg): _111.MsgTransferResponse;
                    toAminoMsg(message: _111.MsgTransferResponse): _111.MsgTransferResponseAminoMsg;
                    fromProtoMsg(message: _111.MsgTransferResponseProtoMsg): _111.MsgTransferResponse;
                    toProto(message: _111.MsgTransferResponse): Uint8Array;
                    toProtoMsg(message: _111.MsgTransferResponse): _111.MsgTransferResponseProtoMsg;
                };
                DenomTrace: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _110.DenomTrace;
                    isSDK(o: any): o is _110.DenomTraceSDKType;
                    isAmino(o: any): o is _110.DenomTraceAmino;
                    encode(message: _110.DenomTrace, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.DenomTrace;
                    fromJSON(object: any): _110.DenomTrace;
                    toJSON(message: _110.DenomTrace): unknown;
                    fromPartial(object: {
                        path?: string;
                        baseDenom?: string;
                    }): _110.DenomTrace;
                    fromSDK(object: _110.DenomTraceSDKType): _110.DenomTrace;
                    toSDK(message: _110.DenomTrace): _110.DenomTraceSDKType;
                    fromAmino(object: _110.DenomTraceAmino): _110.DenomTrace;
                    toAmino(message: _110.DenomTrace): _110.DenomTraceAmino;
                    fromAminoMsg(object: _110.DenomTraceAminoMsg): _110.DenomTrace;
                    toAminoMsg(message: _110.DenomTrace): _110.DenomTraceAminoMsg;
                    fromProtoMsg(message: _110.DenomTraceProtoMsg): _110.DenomTrace;
                    toProto(message: _110.DenomTrace): Uint8Array;
                    toProtoMsg(message: _110.DenomTrace): _110.DenomTraceProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _110.Params;
                    isSDK(o: any): o is _110.ParamsSDKType;
                    isAmino(o: any): o is _110.ParamsAmino;
                    encode(message: _110.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _110.Params;
                    fromJSON(object: any): _110.Params;
                    toJSON(message: _110.Params): unknown;
                    fromPartial(object: {
                        sendEnabled?: boolean;
                        receiveEnabled?: boolean;
                    }): _110.Params;
                    fromSDK(object: _110.ParamsSDKType): _110.Params;
                    toSDK(message: _110.Params): _110.ParamsSDKType;
                    fromAmino(object: _110.ParamsAmino): _110.Params;
                    toAmino(message: _110.Params): _110.ParamsAmino;
                    fromAminoMsg(object: _110.ParamsAminoMsg): _110.Params;
                    toAminoMsg(message: _110.Params): _110.ParamsAminoMsg;
                    fromProtoMsg(message: _110.ParamsProtoMsg): _110.Params;
                    toProto(message: _110.Params): Uint8Array;
                    toProtoMsg(message: _110.Params): _110.ParamsProtoMsg;
                };
                QueryDenomTraceRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _109.QueryDenomTraceRequest;
                    isSDK(o: any): o is _109.QueryDenomTraceRequestSDKType;
                    isAmino(o: any): o is _109.QueryDenomTraceRequestAmino;
                    encode(message: _109.QueryDenomTraceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.QueryDenomTraceRequest;
                    fromJSON(object: any): _109.QueryDenomTraceRequest;
                    toJSON(message: _109.QueryDenomTraceRequest): unknown;
                    fromPartial(object: {
                        hash?: string;
                    }): _109.QueryDenomTraceRequest;
                    fromSDK(object: _109.QueryDenomTraceRequestSDKType): _109.QueryDenomTraceRequest;
                    toSDK(message: _109.QueryDenomTraceRequest): _109.QueryDenomTraceRequestSDKType;
                    fromAmino(object: _109.QueryDenomTraceRequestAmino): _109.QueryDenomTraceRequest;
                    toAmino(message: _109.QueryDenomTraceRequest): _109.QueryDenomTraceRequestAmino;
                    fromAminoMsg(object: _109.QueryDenomTraceRequestAminoMsg): _109.QueryDenomTraceRequest;
                    toAminoMsg(message: _109.QueryDenomTraceRequest): _109.QueryDenomTraceRequestAminoMsg;
                    fromProtoMsg(message: _109.QueryDenomTraceRequestProtoMsg): _109.QueryDenomTraceRequest;
                    toProto(message: _109.QueryDenomTraceRequest): Uint8Array;
                    toProtoMsg(message: _109.QueryDenomTraceRequest): _109.QueryDenomTraceRequestProtoMsg;
                };
                QueryDenomTraceResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _109.QueryDenomTraceResponse;
                    isSDK(o: any): o is _109.QueryDenomTraceResponseSDKType;
                    isAmino(o: any): o is _109.QueryDenomTraceResponseAmino;
                    encode(message: _109.QueryDenomTraceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.QueryDenomTraceResponse;
                    fromJSON(object: any): _109.QueryDenomTraceResponse;
                    toJSON(message: _109.QueryDenomTraceResponse): unknown;
                    fromPartial(object: {
                        denomTrace?: {
                            path?: string;
                            baseDenom?: string;
                        };
                    }): _109.QueryDenomTraceResponse;
                    fromSDK(object: _109.QueryDenomTraceResponseSDKType): _109.QueryDenomTraceResponse;
                    toSDK(message: _109.QueryDenomTraceResponse): _109.QueryDenomTraceResponseSDKType;
                    fromAmino(object: _109.QueryDenomTraceResponseAmino): _109.QueryDenomTraceResponse;
                    toAmino(message: _109.QueryDenomTraceResponse): _109.QueryDenomTraceResponseAmino;
                    fromAminoMsg(object: _109.QueryDenomTraceResponseAminoMsg): _109.QueryDenomTraceResponse;
                    toAminoMsg(message: _109.QueryDenomTraceResponse): _109.QueryDenomTraceResponseAminoMsg;
                    fromProtoMsg(message: _109.QueryDenomTraceResponseProtoMsg): _109.QueryDenomTraceResponse;
                    toProto(message: _109.QueryDenomTraceResponse): Uint8Array;
                    toProtoMsg(message: _109.QueryDenomTraceResponse): _109.QueryDenomTraceResponseProtoMsg;
                };
                QueryDenomTracesRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _109.QueryDenomTracesRequest;
                    isSDK(o: any): o is _109.QueryDenomTracesRequestSDKType;
                    isAmino(o: any): o is _109.QueryDenomTracesRequestAmino;
                    encode(message: _109.QueryDenomTracesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.QueryDenomTracesRequest;
                    fromJSON(object: any): _109.QueryDenomTracesRequest;
                    toJSON(message: _109.QueryDenomTracesRequest): unknown;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: bigint;
                            limit?: bigint;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _109.QueryDenomTracesRequest;
                    fromSDK(object: _109.QueryDenomTracesRequestSDKType): _109.QueryDenomTracesRequest;
                    toSDK(message: _109.QueryDenomTracesRequest): _109.QueryDenomTracesRequestSDKType;
                    fromAmino(object: _109.QueryDenomTracesRequestAmino): _109.QueryDenomTracesRequest;
                    toAmino(message: _109.QueryDenomTracesRequest): _109.QueryDenomTracesRequestAmino;
                    fromAminoMsg(object: _109.QueryDenomTracesRequestAminoMsg): _109.QueryDenomTracesRequest;
                    toAminoMsg(message: _109.QueryDenomTracesRequest): _109.QueryDenomTracesRequestAminoMsg;
                    fromProtoMsg(message: _109.QueryDenomTracesRequestProtoMsg): _109.QueryDenomTracesRequest;
                    toProto(message: _109.QueryDenomTracesRequest): Uint8Array;
                    toProtoMsg(message: _109.QueryDenomTracesRequest): _109.QueryDenomTracesRequestProtoMsg;
                };
                QueryDenomTracesResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _109.QueryDenomTracesResponse;
                    isSDK(o: any): o is _109.QueryDenomTracesResponseSDKType;
                    isAmino(o: any): o is _109.QueryDenomTracesResponseAmino;
                    encode(message: _109.QueryDenomTracesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.QueryDenomTracesResponse;
                    fromJSON(object: any): _109.QueryDenomTracesResponse;
                    toJSON(message: _109.QueryDenomTracesResponse): unknown;
                    fromPartial(object: {
                        denomTraces?: {
                            path?: string;
                            baseDenom?: string;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: bigint;
                        };
                    }): _109.QueryDenomTracesResponse;
                    fromSDK(object: _109.QueryDenomTracesResponseSDKType): _109.QueryDenomTracesResponse;
                    toSDK(message: _109.QueryDenomTracesResponse): _109.QueryDenomTracesResponseSDKType;
                    fromAmino(object: _109.QueryDenomTracesResponseAmino): _109.QueryDenomTracesResponse;
                    toAmino(message: _109.QueryDenomTracesResponse): _109.QueryDenomTracesResponseAmino;
                    fromAminoMsg(object: _109.QueryDenomTracesResponseAminoMsg): _109.QueryDenomTracesResponse;
                    toAminoMsg(message: _109.QueryDenomTracesResponse): _109.QueryDenomTracesResponseAminoMsg;
                    fromProtoMsg(message: _109.QueryDenomTracesResponseProtoMsg): _109.QueryDenomTracesResponse;
                    toProto(message: _109.QueryDenomTracesResponse): Uint8Array;
                    toProtoMsg(message: _109.QueryDenomTracesResponse): _109.QueryDenomTracesResponseProtoMsg;
                };
                QueryParamsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _109.QueryParamsRequest;
                    isSDK(o: any): o is _109.QueryParamsRequestSDKType;
                    isAmino(o: any): o is _109.QueryParamsRequestAmino;
                    encode(_: _109.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.QueryParamsRequest;
                    fromJSON(_: any): _109.QueryParamsRequest;
                    toJSON(_: _109.QueryParamsRequest): unknown;
                    fromPartial(_: {}): _109.QueryParamsRequest;
                    fromSDK(_: _109.QueryParamsRequestSDKType): _109.QueryParamsRequest;
                    toSDK(_: _109.QueryParamsRequest): _109.QueryParamsRequestSDKType;
                    fromAmino(_: _109.QueryParamsRequestAmino): _109.QueryParamsRequest;
                    toAmino(_: _109.QueryParamsRequest): _109.QueryParamsRequestAmino;
                    fromAminoMsg(object: _109.QueryParamsRequestAminoMsg): _109.QueryParamsRequest;
                    toAminoMsg(message: _109.QueryParamsRequest): _109.QueryParamsRequestAminoMsg;
                    fromProtoMsg(message: _109.QueryParamsRequestProtoMsg): _109.QueryParamsRequest;
                    toProto(message: _109.QueryParamsRequest): Uint8Array;
                    toProtoMsg(message: _109.QueryParamsRequest): _109.QueryParamsRequestProtoMsg;
                };
                QueryParamsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _109.QueryParamsResponse;
                    isSDK(o: any): o is _109.QueryParamsResponseSDKType;
                    isAmino(o: any): o is _109.QueryParamsResponseAmino;
                    encode(message: _109.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _109.QueryParamsResponse;
                    fromJSON(object: any): _109.QueryParamsResponse;
                    toJSON(message: _109.QueryParamsResponse): unknown;
                    fromPartial(object: {
                        params?: {
                            sendEnabled?: boolean;
                            receiveEnabled?: boolean;
                        };
                    }): _109.QueryParamsResponse;
                    fromSDK(object: _109.QueryParamsResponseSDKType): _109.QueryParamsResponse;
                    toSDK(message: _109.QueryParamsResponse): _109.QueryParamsResponseSDKType;
                    fromAmino(object: _109.QueryParamsResponseAmino): _109.QueryParamsResponse;
                    toAmino(message: _109.QueryParamsResponse): _109.QueryParamsResponseAmino;
                    fromAminoMsg(object: _109.QueryParamsResponseAminoMsg): _109.QueryParamsResponse;
                    toAminoMsg(message: _109.QueryParamsResponse): _109.QueryParamsResponseAminoMsg;
                    fromProtoMsg(message: _109.QueryParamsResponseProtoMsg): _109.QueryParamsResponse;
                    toProto(message: _109.QueryParamsResponse): Uint8Array;
                    toProtoMsg(message: _109.QueryParamsResponse): _109.QueryParamsResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _108.GenesisState;
                    isSDK(o: any): o is _108.GenesisStateSDKType;
                    isAmino(o: any): o is _108.GenesisStateAmino;
                    encode(message: _108.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _108.GenesisState;
                    fromJSON(object: any): _108.GenesisState;
                    toJSON(message: _108.GenesisState): unknown;
                    fromPartial(object: {
                        portId?: string;
                        denomTraces?: {
                            path?: string;
                            baseDenom?: string;
                        }[];
                        params?: {
                            sendEnabled?: boolean;
                            receiveEnabled?: boolean;
                        };
                    }): _108.GenesisState;
                    fromSDK(object: _108.GenesisStateSDKType): _108.GenesisState;
                    toSDK(message: _108.GenesisState): _108.GenesisStateSDKType;
                    fromAmino(object: _108.GenesisStateAmino): _108.GenesisState;
                    toAmino(message: _108.GenesisState): _108.GenesisStateAmino;
                    fromAminoMsg(object: _108.GenesisStateAminoMsg): _108.GenesisState;
                    toAminoMsg(message: _108.GenesisState): _108.GenesisStateAminoMsg;
                    fromProtoMsg(message: _108.GenesisStateProtoMsg): _108.GenesisState;
                    toProto(message: _108.GenesisState): Uint8Array;
                    toProtoMsg(message: _108.GenesisState): _108.GenesisStateProtoMsg;
                };
            };
            const v2: {
                FungibleTokenPacketData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _112.FungibleTokenPacketData;
                    isSDK(o: any): o is _112.FungibleTokenPacketDataSDKType;
                    isAmino(o: any): o is _112.FungibleTokenPacketDataAmino;
                    encode(message: _112.FungibleTokenPacketData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _112.FungibleTokenPacketData;
                    fromJSON(object: any): _112.FungibleTokenPacketData;
                    toJSON(message: _112.FungibleTokenPacketData): unknown;
                    fromPartial(object: {
                        denom?: string;
                        amount?: string;
                        sender?: string;
                        receiver?: string;
                    }): _112.FungibleTokenPacketData;
                    fromSDK(object: _112.FungibleTokenPacketDataSDKType): _112.FungibleTokenPacketData;
                    toSDK(message: _112.FungibleTokenPacketData): _112.FungibleTokenPacketDataSDKType;
                    fromAmino(object: _112.FungibleTokenPacketDataAmino): _112.FungibleTokenPacketData;
                    toAmino(message: _112.FungibleTokenPacketData): _112.FungibleTokenPacketDataAmino;
                    fromAminoMsg(object: _112.FungibleTokenPacketDataAminoMsg): _112.FungibleTokenPacketData;
                    toAminoMsg(message: _112.FungibleTokenPacketData): _112.FungibleTokenPacketDataAminoMsg;
                    fromProtoMsg(message: _112.FungibleTokenPacketDataProtoMsg): _112.FungibleTokenPacketData;
                    toProto(message: _112.FungibleTokenPacketData): Uint8Array;
                    toProtoMsg(message: _112.FungibleTokenPacketData): _112.FungibleTokenPacketDataProtoMsg;
                };
            };
        }
    }
    namespace core {
        namespace channel {
            const v1: {
                MsgClientImpl: typeof _268.MsgClientImpl;
                createClientImpl: (rpc: import("..").TxRpc) => _268.MsgClientImpl;
                QueryClientImpl: typeof _263.QueryClientImpl;
                createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                    useChannel: <TData = _115.QueryChannelResponse>({ request, options }: _263.UseChannelQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
                    useChannels: <TData_1 = _115.QueryChannelsResponse>({ request, options }: _263.UseChannelsQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
                    useConnectionChannels: <TData_2 = _115.QueryConnectionChannelsResponse>({ request, options }: _263.UseConnectionChannelsQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
                    useChannelClientState: <TData_3 = _115.QueryChannelClientStateResponse>({ request, options }: _263.UseChannelClientStateQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
                    useChannelConsensusState: <TData_4 = _115.QueryChannelConsensusStateResponse>({ request, options }: _263.UseChannelConsensusStateQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
                    usePacketCommitment: <TData_5 = _115.QueryPacketCommitmentResponse>({ request, options }: _263.UsePacketCommitmentQuery<TData_5>) => import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
                    usePacketCommitments: <TData_6 = _115.QueryPacketCommitmentsResponse>({ request, options }: _263.UsePacketCommitmentsQuery<TData_6>) => import("@tanstack/react-query").UseQueryResult<TData_6, Error>;
                    usePacketReceipt: <TData_7 = _115.QueryPacketReceiptResponse>({ request, options }: _263.UsePacketReceiptQuery<TData_7>) => import("@tanstack/react-query").UseQueryResult<TData_7, Error>;
                    usePacketAcknowledgement: <TData_8 = _115.QueryPacketAcknowledgementResponse>({ request, options }: _263.UsePacketAcknowledgementQuery<TData_8>) => import("@tanstack/react-query").UseQueryResult<TData_8, Error>;
                    usePacketAcknowledgements: <TData_9 = _115.QueryPacketAcknowledgementsResponse>({ request, options }: _263.UsePacketAcknowledgementsQuery<TData_9>) => import("@tanstack/react-query").UseQueryResult<TData_9, Error>;
                    useUnreceivedPackets: <TData_10 = _115.QueryUnreceivedPacketsResponse>({ request, options }: _263.UseUnreceivedPacketsQuery<TData_10>) => import("@tanstack/react-query").UseQueryResult<TData_10, Error>;
                    useUnreceivedAcks: <TData_11 = _115.QueryUnreceivedAcksResponse>({ request, options }: _263.UseUnreceivedAcksQuery<TData_11>) => import("@tanstack/react-query").UseQueryResult<TData_11, Error>;
                    useNextSequenceReceive: <TData_12 = _115.QueryNextSequenceReceiveResponse>({ request, options }: _263.UseNextSequenceReceiveQuery<TData_12>) => import("@tanstack/react-query").UseQueryResult<TData_12, Error>;
                };
                createRpcQueryMobxStores: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                    QueryChannelStore: {
                        new (): {
                            store: import("..").QueryStore<_115.QueryChannelRequest, _115.QueryChannelResponse>;
                            channel(request: _115.QueryChannelRequest): import("..").MobxResponse<_115.QueryChannelResponse>;
                        };
                    };
                    QueryChannelsStore: {
                        new (): {
                            store: import("..").QueryStore<_115.QueryChannelsRequest, _115.QueryChannelsResponse>;
                            channels(request: _115.QueryChannelsRequest): import("..").MobxResponse<_115.QueryChannelsResponse>;
                        };
                    };
                    QueryConnectionChannelsStore: {
                        new (): {
                            store: import("..").QueryStore<_115.QueryConnectionChannelsRequest, _115.QueryConnectionChannelsResponse>;
                            connectionChannels(request: _115.QueryConnectionChannelsRequest): import("..").MobxResponse<_115.QueryConnectionChannelsResponse>;
                        };
                    };
                    QueryChannelClientStateStore: {
                        new (): {
                            store: import("..").QueryStore<_115.QueryChannelClientStateRequest, _115.QueryChannelClientStateResponse>;
                            channelClientState(request: _115.QueryChannelClientStateRequest): import("..").MobxResponse<_115.QueryChannelClientStateResponse>;
                        };
                    };
                    QueryChannelConsensusStateStore: {
                        new (): {
                            store: import("..").QueryStore<_115.QueryChannelConsensusStateRequest, _115.QueryChannelConsensusStateResponse>;
                            channelConsensusState(request: _115.QueryChannelConsensusStateRequest): import("..").MobxResponse<_115.QueryChannelConsensusStateResponse>;
                        };
                    };
                    QueryPacketCommitmentStore: {
                        new (): {
                            store: import("..").QueryStore<_115.QueryPacketCommitmentRequest, _115.QueryPacketCommitmentResponse>;
                            packetCommitment(request: _115.QueryPacketCommitmentRequest): import("..").MobxResponse<_115.QueryPacketCommitmentResponse>;
                        };
                    };
                    QueryPacketCommitmentsStore: {
                        new (): {
                            store: import("..").QueryStore<_115.QueryPacketCommitmentsRequest, _115.QueryPacketCommitmentsResponse>;
                            packetCommitments(request: _115.QueryPacketCommitmentsRequest): import("..").MobxResponse<_115.QueryPacketCommitmentsResponse>;
                        };
                    };
                    QueryPacketReceiptStore: {
                        new (): {
                            store: import("..").QueryStore<_115.QueryPacketReceiptRequest, _115.QueryPacketReceiptResponse>;
                            packetReceipt(request: _115.QueryPacketReceiptRequest): import("..").MobxResponse<_115.QueryPacketReceiptResponse>;
                        };
                    };
                    QueryPacketAcknowledgementStore: {
                        new (): {
                            store: import("..").QueryStore<_115.QueryPacketAcknowledgementRequest, _115.QueryPacketAcknowledgementResponse>;
                            packetAcknowledgement(request: _115.QueryPacketAcknowledgementRequest): import("..").MobxResponse<_115.QueryPacketAcknowledgementResponse>;
                        };
                    };
                    QueryPacketAcknowledgementsStore: {
                        new (): {
                            store: import("..").QueryStore<_115.QueryPacketAcknowledgementsRequest, _115.QueryPacketAcknowledgementsResponse>;
                            packetAcknowledgements(request: _115.QueryPacketAcknowledgementsRequest): import("..").MobxResponse<_115.QueryPacketAcknowledgementsResponse>;
                        };
                    };
                    QueryUnreceivedPacketsStore: {
                        new (): {
                            store: import("..").QueryStore<_115.QueryUnreceivedPacketsRequest, _115.QueryUnreceivedPacketsResponse>;
                            unreceivedPackets(request: _115.QueryUnreceivedPacketsRequest): import("..").MobxResponse<_115.QueryUnreceivedPacketsResponse>;
                        };
                    };
                    QueryUnreceivedAcksStore: {
                        new (): {
                            store: import("..").QueryStore<_115.QueryUnreceivedAcksRequest, _115.QueryUnreceivedAcksResponse>;
                            unreceivedAcks(request: _115.QueryUnreceivedAcksRequest): import("..").MobxResponse<_115.QueryUnreceivedAcksResponse>;
                        };
                    };
                    QueryNextSequenceReceiveStore: {
                        new (): {
                            store: import("..").QueryStore<_115.QueryNextSequenceReceiveRequest, _115.QueryNextSequenceReceiveResponse>;
                            nextSequenceReceive(request: _115.QueryNextSequenceReceiveRequest): import("..").MobxResponse<_115.QueryNextSequenceReceiveResponse>;
                        };
                    };
                };
                registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        channelOpenInit(value: _116.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenTry(value: _116.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenAck(value: _116.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelOpenConfirm(value: _116.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseInit(value: _116.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        channelCloseConfirm(value: _116.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        recvPacket(value: _116.MsgRecvPacket): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeout(value: _116.MsgTimeout): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        timeoutOnClose(value: _116.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        acknowledgement(value: _116.MsgAcknowledgement): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        channelOpenInit(value: _116.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _116.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _116.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _116.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _116.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _116.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _116.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _116.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _116.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _116.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _116.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _116.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _116.MsgRecvPacket): {
                            typeUrl: string;
                            value: _116.MsgRecvPacket;
                        };
                        timeout(value: _116.MsgTimeout): {
                            typeUrl: string;
                            value: _116.MsgTimeout;
                        };
                        timeoutOnClose(value: _116.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _116.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _116.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _116.MsgAcknowledgement;
                        };
                    };
                    toJSON: {
                        channelOpenInit(value: _116.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenTry(value: _116.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenAck(value: _116.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelOpenConfirm(value: _116.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseInit(value: _116.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        channelCloseConfirm(value: _116.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                        recvPacket(value: _116.MsgRecvPacket): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeout(value: _116.MsgTimeout): {
                            typeUrl: string;
                            value: unknown;
                        };
                        timeoutOnClose(value: _116.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: unknown;
                        };
                        acknowledgement(value: _116.MsgAcknowledgement): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        channelOpenInit(value: any): {
                            typeUrl: string;
                            value: _116.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: any): {
                            typeUrl: string;
                            value: _116.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: any): {
                            typeUrl: string;
                            value: _116.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _116.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: any): {
                            typeUrl: string;
                            value: _116.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: any): {
                            typeUrl: string;
                            value: _116.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: any): {
                            typeUrl: string;
                            value: _116.MsgRecvPacket;
                        };
                        timeout(value: any): {
                            typeUrl: string;
                            value: _116.MsgTimeout;
                        };
                        timeoutOnClose(value: any): {
                            typeUrl: string;
                            value: _116.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: any): {
                            typeUrl: string;
                            value: _116.MsgAcknowledgement;
                        };
                    };
                    fromPartial: {
                        channelOpenInit(value: _116.MsgChannelOpenInit): {
                            typeUrl: string;
                            value: _116.MsgChannelOpenInit;
                        };
                        channelOpenTry(value: _116.MsgChannelOpenTry): {
                            typeUrl: string;
                            value: _116.MsgChannelOpenTry;
                        };
                        channelOpenAck(value: _116.MsgChannelOpenAck): {
                            typeUrl: string;
                            value: _116.MsgChannelOpenAck;
                        };
                        channelOpenConfirm(value: _116.MsgChannelOpenConfirm): {
                            typeUrl: string;
                            value: _116.MsgChannelOpenConfirm;
                        };
                        channelCloseInit(value: _116.MsgChannelCloseInit): {
                            typeUrl: string;
                            value: _116.MsgChannelCloseInit;
                        };
                        channelCloseConfirm(value: _116.MsgChannelCloseConfirm): {
                            typeUrl: string;
                            value: _116.MsgChannelCloseConfirm;
                        };
                        recvPacket(value: _116.MsgRecvPacket): {
                            typeUrl: string;
                            value: _116.MsgRecvPacket;
                        };
                        timeout(value: _116.MsgTimeout): {
                            typeUrl: string;
                            value: _116.MsgTimeout;
                        };
                        timeoutOnClose(value: _116.MsgTimeoutOnClose): {
                            typeUrl: string;
                            value: _116.MsgTimeoutOnClose;
                        };
                        acknowledgement(value: _116.MsgAcknowledgement): {
                            typeUrl: string;
                            value: _116.MsgAcknowledgement;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.channel.v1.MsgChannelOpenInit": {
                        aminoType: string;
                        toAmino: (message: _116.MsgChannelOpenInit) => _116.MsgChannelOpenInitAmino;
                        fromAmino: (object: _116.MsgChannelOpenInitAmino) => _116.MsgChannelOpenInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenTry": {
                        aminoType: string;
                        toAmino: (message: _116.MsgChannelOpenTry) => _116.MsgChannelOpenTryAmino;
                        fromAmino: (object: _116.MsgChannelOpenTryAmino) => _116.MsgChannelOpenTry;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenAck": {
                        aminoType: string;
                        toAmino: (message: _116.MsgChannelOpenAck) => _116.MsgChannelOpenAckAmino;
                        fromAmino: (object: _116.MsgChannelOpenAckAmino) => _116.MsgChannelOpenAck;
                    };
                    "/ibc.core.channel.v1.MsgChannelOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _116.MsgChannelOpenConfirm) => _116.MsgChannelOpenConfirmAmino;
                        fromAmino: (object: _116.MsgChannelOpenConfirmAmino) => _116.MsgChannelOpenConfirm;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseInit": {
                        aminoType: string;
                        toAmino: (message: _116.MsgChannelCloseInit) => _116.MsgChannelCloseInitAmino;
                        fromAmino: (object: _116.MsgChannelCloseInitAmino) => _116.MsgChannelCloseInit;
                    };
                    "/ibc.core.channel.v1.MsgChannelCloseConfirm": {
                        aminoType: string;
                        toAmino: (message: _116.MsgChannelCloseConfirm) => _116.MsgChannelCloseConfirmAmino;
                        fromAmino: (object: _116.MsgChannelCloseConfirmAmino) => _116.MsgChannelCloseConfirm;
                    };
                    "/ibc.core.channel.v1.MsgRecvPacket": {
                        aminoType: string;
                        toAmino: (message: _116.MsgRecvPacket) => _116.MsgRecvPacketAmino;
                        fromAmino: (object: _116.MsgRecvPacketAmino) => _116.MsgRecvPacket;
                    };
                    "/ibc.core.channel.v1.MsgTimeout": {
                        aminoType: string;
                        toAmino: (message: _116.MsgTimeout) => _116.MsgTimeoutAmino;
                        fromAmino: (object: _116.MsgTimeoutAmino) => _116.MsgTimeout;
                    };
                    "/ibc.core.channel.v1.MsgTimeoutOnClose": {
                        aminoType: string;
                        toAmino: (message: _116.MsgTimeoutOnClose) => _116.MsgTimeoutOnCloseAmino;
                        fromAmino: (object: _116.MsgTimeoutOnCloseAmino) => _116.MsgTimeoutOnClose;
                    };
                    "/ibc.core.channel.v1.MsgAcknowledgement": {
                        aminoType: string;
                        toAmino: (message: _116.MsgAcknowledgement) => _116.MsgAcknowledgementAmino;
                        fromAmino: (object: _116.MsgAcknowledgementAmino) => _116.MsgAcknowledgement;
                    };
                };
                MsgChannelOpenInit: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _116.MsgChannelOpenInit;
                    isSDK(o: any): o is _116.MsgChannelOpenInitSDKType;
                    isAmino(o: any): o is _116.MsgChannelOpenInitAmino;
                    encode(message: _116.MsgChannelOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.MsgChannelOpenInit;
                    fromJSON(object: any): _116.MsgChannelOpenInit;
                    toJSON(message: _116.MsgChannelOpenInit): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channel?: {
                            state?: _113.State;
                            ordering?: _113.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                        signer?: string;
                    }): _116.MsgChannelOpenInit;
                    fromSDK(object: _116.MsgChannelOpenInitSDKType): _116.MsgChannelOpenInit;
                    toSDK(message: _116.MsgChannelOpenInit): _116.MsgChannelOpenInitSDKType;
                    fromAmino(object: _116.MsgChannelOpenInitAmino): _116.MsgChannelOpenInit;
                    toAmino(message: _116.MsgChannelOpenInit): _116.MsgChannelOpenInitAmino;
                    fromAminoMsg(object: _116.MsgChannelOpenInitAminoMsg): _116.MsgChannelOpenInit;
                    toAminoMsg(message: _116.MsgChannelOpenInit): _116.MsgChannelOpenInitAminoMsg;
                    fromProtoMsg(message: _116.MsgChannelOpenInitProtoMsg): _116.MsgChannelOpenInit;
                    toProto(message: _116.MsgChannelOpenInit): Uint8Array;
                    toProtoMsg(message: _116.MsgChannelOpenInit): _116.MsgChannelOpenInitProtoMsg;
                };
                MsgChannelOpenInitResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _116.MsgChannelOpenInitResponse;
                    isSDK(o: any): o is _116.MsgChannelOpenInitResponseSDKType;
                    isAmino(o: any): o is _116.MsgChannelOpenInitResponseAmino;
                    encode(_: _116.MsgChannelOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.MsgChannelOpenInitResponse;
                    fromJSON(_: any): _116.MsgChannelOpenInitResponse;
                    toJSON(_: _116.MsgChannelOpenInitResponse): unknown;
                    fromPartial(_: {}): _116.MsgChannelOpenInitResponse;
                    fromSDK(_: _116.MsgChannelOpenInitResponseSDKType): _116.MsgChannelOpenInitResponse;
                    toSDK(_: _116.MsgChannelOpenInitResponse): _116.MsgChannelOpenInitResponseSDKType;
                    fromAmino(_: _116.MsgChannelOpenInitResponseAmino): _116.MsgChannelOpenInitResponse;
                    toAmino(_: _116.MsgChannelOpenInitResponse): _116.MsgChannelOpenInitResponseAmino;
                    fromAminoMsg(object: _116.MsgChannelOpenInitResponseAminoMsg): _116.MsgChannelOpenInitResponse;
                    toAminoMsg(message: _116.MsgChannelOpenInitResponse): _116.MsgChannelOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _116.MsgChannelOpenInitResponseProtoMsg): _116.MsgChannelOpenInitResponse;
                    toProto(message: _116.MsgChannelOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _116.MsgChannelOpenInitResponse): _116.MsgChannelOpenInitResponseProtoMsg;
                };
                MsgChannelOpenTry: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _116.MsgChannelOpenTry;
                    isSDK(o: any): o is _116.MsgChannelOpenTrySDKType;
                    isAmino(o: any): o is _116.MsgChannelOpenTryAmino;
                    encode(message: _116.MsgChannelOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.MsgChannelOpenTry;
                    fromJSON(object: any): _116.MsgChannelOpenTry;
                    toJSON(message: _116.MsgChannelOpenTry): unknown;
                    fromPartial(object: {
                        portId?: string;
                        previousChannelId?: string;
                        channel?: {
                            state?: _113.State;
                            ordering?: _113.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                        counterpartyVersion?: string;
                        proofInit?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                        signer?: string;
                    }): _116.MsgChannelOpenTry;
                    fromSDK(object: _116.MsgChannelOpenTrySDKType): _116.MsgChannelOpenTry;
                    toSDK(message: _116.MsgChannelOpenTry): _116.MsgChannelOpenTrySDKType;
                    fromAmino(object: _116.MsgChannelOpenTryAmino): _116.MsgChannelOpenTry;
                    toAmino(message: _116.MsgChannelOpenTry): _116.MsgChannelOpenTryAmino;
                    fromAminoMsg(object: _116.MsgChannelOpenTryAminoMsg): _116.MsgChannelOpenTry;
                    toAminoMsg(message: _116.MsgChannelOpenTry): _116.MsgChannelOpenTryAminoMsg;
                    fromProtoMsg(message: _116.MsgChannelOpenTryProtoMsg): _116.MsgChannelOpenTry;
                    toProto(message: _116.MsgChannelOpenTry): Uint8Array;
                    toProtoMsg(message: _116.MsgChannelOpenTry): _116.MsgChannelOpenTryProtoMsg;
                };
                MsgChannelOpenTryResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _116.MsgChannelOpenTryResponse;
                    isSDK(o: any): o is _116.MsgChannelOpenTryResponseSDKType;
                    isAmino(o: any): o is _116.MsgChannelOpenTryResponseAmino;
                    encode(_: _116.MsgChannelOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.MsgChannelOpenTryResponse;
                    fromJSON(_: any): _116.MsgChannelOpenTryResponse;
                    toJSON(_: _116.MsgChannelOpenTryResponse): unknown;
                    fromPartial(_: {}): _116.MsgChannelOpenTryResponse;
                    fromSDK(_: _116.MsgChannelOpenTryResponseSDKType): _116.MsgChannelOpenTryResponse;
                    toSDK(_: _116.MsgChannelOpenTryResponse): _116.MsgChannelOpenTryResponseSDKType;
                    fromAmino(_: _116.MsgChannelOpenTryResponseAmino): _116.MsgChannelOpenTryResponse;
                    toAmino(_: _116.MsgChannelOpenTryResponse): _116.MsgChannelOpenTryResponseAmino;
                    fromAminoMsg(object: _116.MsgChannelOpenTryResponseAminoMsg): _116.MsgChannelOpenTryResponse;
                    toAminoMsg(message: _116.MsgChannelOpenTryResponse): _116.MsgChannelOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _116.MsgChannelOpenTryResponseProtoMsg): _116.MsgChannelOpenTryResponse;
                    toProto(message: _116.MsgChannelOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _116.MsgChannelOpenTryResponse): _116.MsgChannelOpenTryResponseProtoMsg;
                };
                MsgChannelOpenAck: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _116.MsgChannelOpenAck;
                    isSDK(o: any): o is _116.MsgChannelOpenAckSDKType;
                    isAmino(o: any): o is _116.MsgChannelOpenAckAmino;
                    encode(message: _116.MsgChannelOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.MsgChannelOpenAck;
                    fromJSON(object: any): _116.MsgChannelOpenAck;
                    toJSON(message: _116.MsgChannelOpenAck): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        counterpartyChannelId?: string;
                        counterpartyVersion?: string;
                        proofTry?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                        signer?: string;
                    }): _116.MsgChannelOpenAck;
                    fromSDK(object: _116.MsgChannelOpenAckSDKType): _116.MsgChannelOpenAck;
                    toSDK(message: _116.MsgChannelOpenAck): _116.MsgChannelOpenAckSDKType;
                    fromAmino(object: _116.MsgChannelOpenAckAmino): _116.MsgChannelOpenAck;
                    toAmino(message: _116.MsgChannelOpenAck): _116.MsgChannelOpenAckAmino;
                    fromAminoMsg(object: _116.MsgChannelOpenAckAminoMsg): _116.MsgChannelOpenAck;
                    toAminoMsg(message: _116.MsgChannelOpenAck): _116.MsgChannelOpenAckAminoMsg;
                    fromProtoMsg(message: _116.MsgChannelOpenAckProtoMsg): _116.MsgChannelOpenAck;
                    toProto(message: _116.MsgChannelOpenAck): Uint8Array;
                    toProtoMsg(message: _116.MsgChannelOpenAck): _116.MsgChannelOpenAckProtoMsg;
                };
                MsgChannelOpenAckResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _116.MsgChannelOpenAckResponse;
                    isSDK(o: any): o is _116.MsgChannelOpenAckResponseSDKType;
                    isAmino(o: any): o is _116.MsgChannelOpenAckResponseAmino;
                    encode(_: _116.MsgChannelOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.MsgChannelOpenAckResponse;
                    fromJSON(_: any): _116.MsgChannelOpenAckResponse;
                    toJSON(_: _116.MsgChannelOpenAckResponse): unknown;
                    fromPartial(_: {}): _116.MsgChannelOpenAckResponse;
                    fromSDK(_: _116.MsgChannelOpenAckResponseSDKType): _116.MsgChannelOpenAckResponse;
                    toSDK(_: _116.MsgChannelOpenAckResponse): _116.MsgChannelOpenAckResponseSDKType;
                    fromAmino(_: _116.MsgChannelOpenAckResponseAmino): _116.MsgChannelOpenAckResponse;
                    toAmino(_: _116.MsgChannelOpenAckResponse): _116.MsgChannelOpenAckResponseAmino;
                    fromAminoMsg(object: _116.MsgChannelOpenAckResponseAminoMsg): _116.MsgChannelOpenAckResponse;
                    toAminoMsg(message: _116.MsgChannelOpenAckResponse): _116.MsgChannelOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _116.MsgChannelOpenAckResponseProtoMsg): _116.MsgChannelOpenAckResponse;
                    toProto(message: _116.MsgChannelOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _116.MsgChannelOpenAckResponse): _116.MsgChannelOpenAckResponseProtoMsg;
                };
                MsgChannelOpenConfirm: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _116.MsgChannelOpenConfirm;
                    isSDK(o: any): o is _116.MsgChannelOpenConfirmSDKType;
                    isAmino(o: any): o is _116.MsgChannelOpenConfirmAmino;
                    encode(message: _116.MsgChannelOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.MsgChannelOpenConfirm;
                    fromJSON(object: any): _116.MsgChannelOpenConfirm;
                    toJSON(message: _116.MsgChannelOpenConfirm): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        proofAck?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                        signer?: string;
                    }): _116.MsgChannelOpenConfirm;
                    fromSDK(object: _116.MsgChannelOpenConfirmSDKType): _116.MsgChannelOpenConfirm;
                    toSDK(message: _116.MsgChannelOpenConfirm): _116.MsgChannelOpenConfirmSDKType;
                    fromAmino(object: _116.MsgChannelOpenConfirmAmino): _116.MsgChannelOpenConfirm;
                    toAmino(message: _116.MsgChannelOpenConfirm): _116.MsgChannelOpenConfirmAmino;
                    fromAminoMsg(object: _116.MsgChannelOpenConfirmAminoMsg): _116.MsgChannelOpenConfirm;
                    toAminoMsg(message: _116.MsgChannelOpenConfirm): _116.MsgChannelOpenConfirmAminoMsg;
                    fromProtoMsg(message: _116.MsgChannelOpenConfirmProtoMsg): _116.MsgChannelOpenConfirm;
                    toProto(message: _116.MsgChannelOpenConfirm): Uint8Array;
                    toProtoMsg(message: _116.MsgChannelOpenConfirm): _116.MsgChannelOpenConfirmProtoMsg;
                };
                MsgChannelOpenConfirmResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _116.MsgChannelOpenConfirmResponse;
                    isSDK(o: any): o is _116.MsgChannelOpenConfirmResponseSDKType;
                    isAmino(o: any): o is _116.MsgChannelOpenConfirmResponseAmino;
                    encode(_: _116.MsgChannelOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.MsgChannelOpenConfirmResponse;
                    fromJSON(_: any): _116.MsgChannelOpenConfirmResponse;
                    toJSON(_: _116.MsgChannelOpenConfirmResponse): unknown;
                    fromPartial(_: {}): _116.MsgChannelOpenConfirmResponse;
                    fromSDK(_: _116.MsgChannelOpenConfirmResponseSDKType): _116.MsgChannelOpenConfirmResponse;
                    toSDK(_: _116.MsgChannelOpenConfirmResponse): _116.MsgChannelOpenConfirmResponseSDKType;
                    fromAmino(_: _116.MsgChannelOpenConfirmResponseAmino): _116.MsgChannelOpenConfirmResponse;
                    toAmino(_: _116.MsgChannelOpenConfirmResponse): _116.MsgChannelOpenConfirmResponseAmino;
                    fromAminoMsg(object: _116.MsgChannelOpenConfirmResponseAminoMsg): _116.MsgChannelOpenConfirmResponse;
                    toAminoMsg(message: _116.MsgChannelOpenConfirmResponse): _116.MsgChannelOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _116.MsgChannelOpenConfirmResponseProtoMsg): _116.MsgChannelOpenConfirmResponse;
                    toProto(message: _116.MsgChannelOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _116.MsgChannelOpenConfirmResponse): _116.MsgChannelOpenConfirmResponseProtoMsg;
                };
                MsgChannelCloseInit: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _116.MsgChannelCloseInit;
                    isSDK(o: any): o is _116.MsgChannelCloseInitSDKType;
                    isAmino(o: any): o is _116.MsgChannelCloseInitAmino;
                    encode(message: _116.MsgChannelCloseInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.MsgChannelCloseInit;
                    fromJSON(object: any): _116.MsgChannelCloseInit;
                    toJSON(message: _116.MsgChannelCloseInit): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        signer?: string;
                    }): _116.MsgChannelCloseInit;
                    fromSDK(object: _116.MsgChannelCloseInitSDKType): _116.MsgChannelCloseInit;
                    toSDK(message: _116.MsgChannelCloseInit): _116.MsgChannelCloseInitSDKType;
                    fromAmino(object: _116.MsgChannelCloseInitAmino): _116.MsgChannelCloseInit;
                    toAmino(message: _116.MsgChannelCloseInit): _116.MsgChannelCloseInitAmino;
                    fromAminoMsg(object: _116.MsgChannelCloseInitAminoMsg): _116.MsgChannelCloseInit;
                    toAminoMsg(message: _116.MsgChannelCloseInit): _116.MsgChannelCloseInitAminoMsg;
                    fromProtoMsg(message: _116.MsgChannelCloseInitProtoMsg): _116.MsgChannelCloseInit;
                    toProto(message: _116.MsgChannelCloseInit): Uint8Array;
                    toProtoMsg(message: _116.MsgChannelCloseInit): _116.MsgChannelCloseInitProtoMsg;
                };
                MsgChannelCloseInitResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _116.MsgChannelCloseInitResponse;
                    isSDK(o: any): o is _116.MsgChannelCloseInitResponseSDKType;
                    isAmino(o: any): o is _116.MsgChannelCloseInitResponseAmino;
                    encode(_: _116.MsgChannelCloseInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.MsgChannelCloseInitResponse;
                    fromJSON(_: any): _116.MsgChannelCloseInitResponse;
                    toJSON(_: _116.MsgChannelCloseInitResponse): unknown;
                    fromPartial(_: {}): _116.MsgChannelCloseInitResponse;
                    fromSDK(_: _116.MsgChannelCloseInitResponseSDKType): _116.MsgChannelCloseInitResponse;
                    toSDK(_: _116.MsgChannelCloseInitResponse): _116.MsgChannelCloseInitResponseSDKType;
                    fromAmino(_: _116.MsgChannelCloseInitResponseAmino): _116.MsgChannelCloseInitResponse;
                    toAmino(_: _116.MsgChannelCloseInitResponse): _116.MsgChannelCloseInitResponseAmino;
                    fromAminoMsg(object: _116.MsgChannelCloseInitResponseAminoMsg): _116.MsgChannelCloseInitResponse;
                    toAminoMsg(message: _116.MsgChannelCloseInitResponse): _116.MsgChannelCloseInitResponseAminoMsg;
                    fromProtoMsg(message: _116.MsgChannelCloseInitResponseProtoMsg): _116.MsgChannelCloseInitResponse;
                    toProto(message: _116.MsgChannelCloseInitResponse): Uint8Array;
                    toProtoMsg(message: _116.MsgChannelCloseInitResponse): _116.MsgChannelCloseInitResponseProtoMsg;
                };
                MsgChannelCloseConfirm: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _116.MsgChannelCloseConfirm;
                    isSDK(o: any): o is _116.MsgChannelCloseConfirmSDKType;
                    isAmino(o: any): o is _116.MsgChannelCloseConfirmAmino;
                    encode(message: _116.MsgChannelCloseConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.MsgChannelCloseConfirm;
                    fromJSON(object: any): _116.MsgChannelCloseConfirm;
                    toJSON(message: _116.MsgChannelCloseConfirm): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        proofInit?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                        signer?: string;
                    }): _116.MsgChannelCloseConfirm;
                    fromSDK(object: _116.MsgChannelCloseConfirmSDKType): _116.MsgChannelCloseConfirm;
                    toSDK(message: _116.MsgChannelCloseConfirm): _116.MsgChannelCloseConfirmSDKType;
                    fromAmino(object: _116.MsgChannelCloseConfirmAmino): _116.MsgChannelCloseConfirm;
                    toAmino(message: _116.MsgChannelCloseConfirm): _116.MsgChannelCloseConfirmAmino;
                    fromAminoMsg(object: _116.MsgChannelCloseConfirmAminoMsg): _116.MsgChannelCloseConfirm;
                    toAminoMsg(message: _116.MsgChannelCloseConfirm): _116.MsgChannelCloseConfirmAminoMsg;
                    fromProtoMsg(message: _116.MsgChannelCloseConfirmProtoMsg): _116.MsgChannelCloseConfirm;
                    toProto(message: _116.MsgChannelCloseConfirm): Uint8Array;
                    toProtoMsg(message: _116.MsgChannelCloseConfirm): _116.MsgChannelCloseConfirmProtoMsg;
                };
                MsgChannelCloseConfirmResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _116.MsgChannelCloseConfirmResponse;
                    isSDK(o: any): o is _116.MsgChannelCloseConfirmResponseSDKType;
                    isAmino(o: any): o is _116.MsgChannelCloseConfirmResponseAmino;
                    encode(_: _116.MsgChannelCloseConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.MsgChannelCloseConfirmResponse;
                    fromJSON(_: any): _116.MsgChannelCloseConfirmResponse;
                    toJSON(_: _116.MsgChannelCloseConfirmResponse): unknown;
                    fromPartial(_: {}): _116.MsgChannelCloseConfirmResponse;
                    fromSDK(_: _116.MsgChannelCloseConfirmResponseSDKType): _116.MsgChannelCloseConfirmResponse;
                    toSDK(_: _116.MsgChannelCloseConfirmResponse): _116.MsgChannelCloseConfirmResponseSDKType;
                    fromAmino(_: _116.MsgChannelCloseConfirmResponseAmino): _116.MsgChannelCloseConfirmResponse;
                    toAmino(_: _116.MsgChannelCloseConfirmResponse): _116.MsgChannelCloseConfirmResponseAmino;
                    fromAminoMsg(object: _116.MsgChannelCloseConfirmResponseAminoMsg): _116.MsgChannelCloseConfirmResponse;
                    toAminoMsg(message: _116.MsgChannelCloseConfirmResponse): _116.MsgChannelCloseConfirmResponseAminoMsg;
                    fromProtoMsg(message: _116.MsgChannelCloseConfirmResponseProtoMsg): _116.MsgChannelCloseConfirmResponse;
                    toProto(message: _116.MsgChannelCloseConfirmResponse): Uint8Array;
                    toProtoMsg(message: _116.MsgChannelCloseConfirmResponse): _116.MsgChannelCloseConfirmResponseProtoMsg;
                };
                MsgRecvPacket: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _116.MsgRecvPacket;
                    isSDK(o: any): o is _116.MsgRecvPacketSDKType;
                    isAmino(o: any): o is _116.MsgRecvPacketAmino;
                    encode(message: _116.MsgRecvPacket, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.MsgRecvPacket;
                    fromJSON(object: any): _116.MsgRecvPacket;
                    toJSON(message: _116.MsgRecvPacket): unknown;
                    fromPartial(object: {
                        packet?: {
                            sequence?: bigint;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: bigint;
                                revisionHeight?: bigint;
                            };
                            timeoutTimestamp?: bigint;
                        };
                        proofCommitment?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                        signer?: string;
                    }): _116.MsgRecvPacket;
                    fromSDK(object: _116.MsgRecvPacketSDKType): _116.MsgRecvPacket;
                    toSDK(message: _116.MsgRecvPacket): _116.MsgRecvPacketSDKType;
                    fromAmino(object: _116.MsgRecvPacketAmino): _116.MsgRecvPacket;
                    toAmino(message: _116.MsgRecvPacket): _116.MsgRecvPacketAmino;
                    fromAminoMsg(object: _116.MsgRecvPacketAminoMsg): _116.MsgRecvPacket;
                    toAminoMsg(message: _116.MsgRecvPacket): _116.MsgRecvPacketAminoMsg;
                    fromProtoMsg(message: _116.MsgRecvPacketProtoMsg): _116.MsgRecvPacket;
                    toProto(message: _116.MsgRecvPacket): Uint8Array;
                    toProtoMsg(message: _116.MsgRecvPacket): _116.MsgRecvPacketProtoMsg;
                };
                MsgRecvPacketResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _116.MsgRecvPacketResponse;
                    isSDK(o: any): o is _116.MsgRecvPacketResponseSDKType;
                    isAmino(o: any): o is _116.MsgRecvPacketResponseAmino;
                    encode(_: _116.MsgRecvPacketResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.MsgRecvPacketResponse;
                    fromJSON(_: any): _116.MsgRecvPacketResponse;
                    toJSON(_: _116.MsgRecvPacketResponse): unknown;
                    fromPartial(_: {}): _116.MsgRecvPacketResponse;
                    fromSDK(_: _116.MsgRecvPacketResponseSDKType): _116.MsgRecvPacketResponse;
                    toSDK(_: _116.MsgRecvPacketResponse): _116.MsgRecvPacketResponseSDKType;
                    fromAmino(_: _116.MsgRecvPacketResponseAmino): _116.MsgRecvPacketResponse;
                    toAmino(_: _116.MsgRecvPacketResponse): _116.MsgRecvPacketResponseAmino;
                    fromAminoMsg(object: _116.MsgRecvPacketResponseAminoMsg): _116.MsgRecvPacketResponse;
                    toAminoMsg(message: _116.MsgRecvPacketResponse): _116.MsgRecvPacketResponseAminoMsg;
                    fromProtoMsg(message: _116.MsgRecvPacketResponseProtoMsg): _116.MsgRecvPacketResponse;
                    toProto(message: _116.MsgRecvPacketResponse): Uint8Array;
                    toProtoMsg(message: _116.MsgRecvPacketResponse): _116.MsgRecvPacketResponseProtoMsg;
                };
                MsgTimeout: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _116.MsgTimeout;
                    isSDK(o: any): o is _116.MsgTimeoutSDKType;
                    isAmino(o: any): o is _116.MsgTimeoutAmino;
                    encode(message: _116.MsgTimeout, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.MsgTimeout;
                    fromJSON(object: any): _116.MsgTimeout;
                    toJSON(message: _116.MsgTimeout): unknown;
                    fromPartial(object: {
                        packet?: {
                            sequence?: bigint;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: bigint;
                                revisionHeight?: bigint;
                            };
                            timeoutTimestamp?: bigint;
                        };
                        proofUnreceived?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                        nextSequenceRecv?: bigint;
                        signer?: string;
                    }): _116.MsgTimeout;
                    fromSDK(object: _116.MsgTimeoutSDKType): _116.MsgTimeout;
                    toSDK(message: _116.MsgTimeout): _116.MsgTimeoutSDKType;
                    fromAmino(object: _116.MsgTimeoutAmino): _116.MsgTimeout;
                    toAmino(message: _116.MsgTimeout): _116.MsgTimeoutAmino;
                    fromAminoMsg(object: _116.MsgTimeoutAminoMsg): _116.MsgTimeout;
                    toAminoMsg(message: _116.MsgTimeout): _116.MsgTimeoutAminoMsg;
                    fromProtoMsg(message: _116.MsgTimeoutProtoMsg): _116.MsgTimeout;
                    toProto(message: _116.MsgTimeout): Uint8Array;
                    toProtoMsg(message: _116.MsgTimeout): _116.MsgTimeoutProtoMsg;
                };
                MsgTimeoutResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _116.MsgTimeoutResponse;
                    isSDK(o: any): o is _116.MsgTimeoutResponseSDKType;
                    isAmino(o: any): o is _116.MsgTimeoutResponseAmino;
                    encode(_: _116.MsgTimeoutResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.MsgTimeoutResponse;
                    fromJSON(_: any): _116.MsgTimeoutResponse;
                    toJSON(_: _116.MsgTimeoutResponse): unknown;
                    fromPartial(_: {}): _116.MsgTimeoutResponse;
                    fromSDK(_: _116.MsgTimeoutResponseSDKType): _116.MsgTimeoutResponse;
                    toSDK(_: _116.MsgTimeoutResponse): _116.MsgTimeoutResponseSDKType;
                    fromAmino(_: _116.MsgTimeoutResponseAmino): _116.MsgTimeoutResponse;
                    toAmino(_: _116.MsgTimeoutResponse): _116.MsgTimeoutResponseAmino;
                    fromAminoMsg(object: _116.MsgTimeoutResponseAminoMsg): _116.MsgTimeoutResponse;
                    toAminoMsg(message: _116.MsgTimeoutResponse): _116.MsgTimeoutResponseAminoMsg;
                    fromProtoMsg(message: _116.MsgTimeoutResponseProtoMsg): _116.MsgTimeoutResponse;
                    toProto(message: _116.MsgTimeoutResponse): Uint8Array;
                    toProtoMsg(message: _116.MsgTimeoutResponse): _116.MsgTimeoutResponseProtoMsg;
                };
                MsgTimeoutOnClose: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _116.MsgTimeoutOnClose;
                    isSDK(o: any): o is _116.MsgTimeoutOnCloseSDKType;
                    isAmino(o: any): o is _116.MsgTimeoutOnCloseAmino;
                    encode(message: _116.MsgTimeoutOnClose, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.MsgTimeoutOnClose;
                    fromJSON(object: any): _116.MsgTimeoutOnClose;
                    toJSON(message: _116.MsgTimeoutOnClose): unknown;
                    fromPartial(object: {
                        packet?: {
                            sequence?: bigint;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: bigint;
                                revisionHeight?: bigint;
                            };
                            timeoutTimestamp?: bigint;
                        };
                        proofUnreceived?: Uint8Array;
                        proofClose?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                        nextSequenceRecv?: bigint;
                        signer?: string;
                    }): _116.MsgTimeoutOnClose;
                    fromSDK(object: _116.MsgTimeoutOnCloseSDKType): _116.MsgTimeoutOnClose;
                    toSDK(message: _116.MsgTimeoutOnClose): _116.MsgTimeoutOnCloseSDKType;
                    fromAmino(object: _116.MsgTimeoutOnCloseAmino): _116.MsgTimeoutOnClose;
                    toAmino(message: _116.MsgTimeoutOnClose): _116.MsgTimeoutOnCloseAmino;
                    fromAminoMsg(object: _116.MsgTimeoutOnCloseAminoMsg): _116.MsgTimeoutOnClose;
                    toAminoMsg(message: _116.MsgTimeoutOnClose): _116.MsgTimeoutOnCloseAminoMsg;
                    fromProtoMsg(message: _116.MsgTimeoutOnCloseProtoMsg): _116.MsgTimeoutOnClose;
                    toProto(message: _116.MsgTimeoutOnClose): Uint8Array;
                    toProtoMsg(message: _116.MsgTimeoutOnClose): _116.MsgTimeoutOnCloseProtoMsg;
                };
                MsgTimeoutOnCloseResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _116.MsgTimeoutOnCloseResponse;
                    isSDK(o: any): o is _116.MsgTimeoutOnCloseResponseSDKType;
                    isAmino(o: any): o is _116.MsgTimeoutOnCloseResponseAmino;
                    encode(_: _116.MsgTimeoutOnCloseResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.MsgTimeoutOnCloseResponse;
                    fromJSON(_: any): _116.MsgTimeoutOnCloseResponse;
                    toJSON(_: _116.MsgTimeoutOnCloseResponse): unknown;
                    fromPartial(_: {}): _116.MsgTimeoutOnCloseResponse;
                    fromSDK(_: _116.MsgTimeoutOnCloseResponseSDKType): _116.MsgTimeoutOnCloseResponse;
                    toSDK(_: _116.MsgTimeoutOnCloseResponse): _116.MsgTimeoutOnCloseResponseSDKType;
                    fromAmino(_: _116.MsgTimeoutOnCloseResponseAmino): _116.MsgTimeoutOnCloseResponse;
                    toAmino(_: _116.MsgTimeoutOnCloseResponse): _116.MsgTimeoutOnCloseResponseAmino;
                    fromAminoMsg(object: _116.MsgTimeoutOnCloseResponseAminoMsg): _116.MsgTimeoutOnCloseResponse;
                    toAminoMsg(message: _116.MsgTimeoutOnCloseResponse): _116.MsgTimeoutOnCloseResponseAminoMsg;
                    fromProtoMsg(message: _116.MsgTimeoutOnCloseResponseProtoMsg): _116.MsgTimeoutOnCloseResponse;
                    toProto(message: _116.MsgTimeoutOnCloseResponse): Uint8Array;
                    toProtoMsg(message: _116.MsgTimeoutOnCloseResponse): _116.MsgTimeoutOnCloseResponseProtoMsg;
                };
                MsgAcknowledgement: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _116.MsgAcknowledgement;
                    isSDK(o: any): o is _116.MsgAcknowledgementSDKType;
                    isAmino(o: any): o is _116.MsgAcknowledgementAmino;
                    encode(message: _116.MsgAcknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.MsgAcknowledgement;
                    fromJSON(object: any): _116.MsgAcknowledgement;
                    toJSON(message: _116.MsgAcknowledgement): unknown;
                    fromPartial(object: {
                        packet?: {
                            sequence?: bigint;
                            sourcePort?: string;
                            sourceChannel?: string;
                            destinationPort?: string;
                            destinationChannel?: string;
                            data?: Uint8Array;
                            timeoutHeight?: {
                                revisionNumber?: bigint;
                                revisionHeight?: bigint;
                            };
                            timeoutTimestamp?: bigint;
                        };
                        acknowledgement?: Uint8Array;
                        proofAcked?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                        signer?: string;
                    }): _116.MsgAcknowledgement;
                    fromSDK(object: _116.MsgAcknowledgementSDKType): _116.MsgAcknowledgement;
                    toSDK(message: _116.MsgAcknowledgement): _116.MsgAcknowledgementSDKType;
                    fromAmino(object: _116.MsgAcknowledgementAmino): _116.MsgAcknowledgement;
                    toAmino(message: _116.MsgAcknowledgement): _116.MsgAcknowledgementAmino;
                    fromAminoMsg(object: _116.MsgAcknowledgementAminoMsg): _116.MsgAcknowledgement;
                    toAminoMsg(message: _116.MsgAcknowledgement): _116.MsgAcknowledgementAminoMsg;
                    fromProtoMsg(message: _116.MsgAcknowledgementProtoMsg): _116.MsgAcknowledgement;
                    toProto(message: _116.MsgAcknowledgement): Uint8Array;
                    toProtoMsg(message: _116.MsgAcknowledgement): _116.MsgAcknowledgementProtoMsg;
                };
                MsgAcknowledgementResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _116.MsgAcknowledgementResponse;
                    isSDK(o: any): o is _116.MsgAcknowledgementResponseSDKType;
                    isAmino(o: any): o is _116.MsgAcknowledgementResponseAmino;
                    encode(_: _116.MsgAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _116.MsgAcknowledgementResponse;
                    fromJSON(_: any): _116.MsgAcknowledgementResponse;
                    toJSON(_: _116.MsgAcknowledgementResponse): unknown;
                    fromPartial(_: {}): _116.MsgAcknowledgementResponse;
                    fromSDK(_: _116.MsgAcknowledgementResponseSDKType): _116.MsgAcknowledgementResponse;
                    toSDK(_: _116.MsgAcknowledgementResponse): _116.MsgAcknowledgementResponseSDKType;
                    fromAmino(_: _116.MsgAcknowledgementResponseAmino): _116.MsgAcknowledgementResponse;
                    toAmino(_: _116.MsgAcknowledgementResponse): _116.MsgAcknowledgementResponseAmino;
                    fromAminoMsg(object: _116.MsgAcknowledgementResponseAminoMsg): _116.MsgAcknowledgementResponse;
                    toAminoMsg(message: _116.MsgAcknowledgementResponse): _116.MsgAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _116.MsgAcknowledgementResponseProtoMsg): _116.MsgAcknowledgementResponse;
                    toProto(message: _116.MsgAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _116.MsgAcknowledgementResponse): _116.MsgAcknowledgementResponseProtoMsg;
                };
                QueryChannelRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _115.QueryChannelRequest;
                    isSDK(o: any): o is _115.QueryChannelRequestSDKType;
                    isAmino(o: any): o is _115.QueryChannelRequestAmino;
                    encode(message: _115.QueryChannelRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.QueryChannelRequest;
                    fromJSON(object: any): _115.QueryChannelRequest;
                    toJSON(message: _115.QueryChannelRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _115.QueryChannelRequest;
                    fromSDK(object: _115.QueryChannelRequestSDKType): _115.QueryChannelRequest;
                    toSDK(message: _115.QueryChannelRequest): _115.QueryChannelRequestSDKType;
                    fromAmino(object: _115.QueryChannelRequestAmino): _115.QueryChannelRequest;
                    toAmino(message: _115.QueryChannelRequest): _115.QueryChannelRequestAmino;
                    fromAminoMsg(object: _115.QueryChannelRequestAminoMsg): _115.QueryChannelRequest;
                    toAminoMsg(message: _115.QueryChannelRequest): _115.QueryChannelRequestAminoMsg;
                    fromProtoMsg(message: _115.QueryChannelRequestProtoMsg): _115.QueryChannelRequest;
                    toProto(message: _115.QueryChannelRequest): Uint8Array;
                    toProtoMsg(message: _115.QueryChannelRequest): _115.QueryChannelRequestProtoMsg;
                };
                QueryChannelResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _115.QueryChannelResponse;
                    isSDK(o: any): o is _115.QueryChannelResponseSDKType;
                    isAmino(o: any): o is _115.QueryChannelResponseAmino;
                    encode(message: _115.QueryChannelResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.QueryChannelResponse;
                    fromJSON(object: any): _115.QueryChannelResponse;
                    toJSON(message: _115.QueryChannelResponse): unknown;
                    fromPartial(object: {
                        channel?: {
                            state?: _113.State;
                            ordering?: _113.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _115.QueryChannelResponse;
                    fromSDK(object: _115.QueryChannelResponseSDKType): _115.QueryChannelResponse;
                    toSDK(message: _115.QueryChannelResponse): _115.QueryChannelResponseSDKType;
                    fromAmino(object: _115.QueryChannelResponseAmino): _115.QueryChannelResponse;
                    toAmino(message: _115.QueryChannelResponse): _115.QueryChannelResponseAmino;
                    fromAminoMsg(object: _115.QueryChannelResponseAminoMsg): _115.QueryChannelResponse;
                    toAminoMsg(message: _115.QueryChannelResponse): _115.QueryChannelResponseAminoMsg;
                    fromProtoMsg(message: _115.QueryChannelResponseProtoMsg): _115.QueryChannelResponse;
                    toProto(message: _115.QueryChannelResponse): Uint8Array;
                    toProtoMsg(message: _115.QueryChannelResponse): _115.QueryChannelResponseProtoMsg;
                };
                QueryChannelsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _115.QueryChannelsRequest;
                    isSDK(o: any): o is _115.QueryChannelsRequestSDKType;
                    isAmino(o: any): o is _115.QueryChannelsRequestAmino;
                    encode(message: _115.QueryChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.QueryChannelsRequest;
                    fromJSON(object: any): _115.QueryChannelsRequest;
                    toJSON(message: _115.QueryChannelsRequest): unknown;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: bigint;
                            limit?: bigint;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _115.QueryChannelsRequest;
                    fromSDK(object: _115.QueryChannelsRequestSDKType): _115.QueryChannelsRequest;
                    toSDK(message: _115.QueryChannelsRequest): _115.QueryChannelsRequestSDKType;
                    fromAmino(object: _115.QueryChannelsRequestAmino): _115.QueryChannelsRequest;
                    toAmino(message: _115.QueryChannelsRequest): _115.QueryChannelsRequestAmino;
                    fromAminoMsg(object: _115.QueryChannelsRequestAminoMsg): _115.QueryChannelsRequest;
                    toAminoMsg(message: _115.QueryChannelsRequest): _115.QueryChannelsRequestAminoMsg;
                    fromProtoMsg(message: _115.QueryChannelsRequestProtoMsg): _115.QueryChannelsRequest;
                    toProto(message: _115.QueryChannelsRequest): Uint8Array;
                    toProtoMsg(message: _115.QueryChannelsRequest): _115.QueryChannelsRequestProtoMsg;
                };
                QueryChannelsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _115.QueryChannelsResponse;
                    isSDK(o: any): o is _115.QueryChannelsResponseSDKType;
                    isAmino(o: any): o is _115.QueryChannelsResponseAmino;
                    encode(message: _115.QueryChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.QueryChannelsResponse;
                    fromJSON(object: any): _115.QueryChannelsResponse;
                    toJSON(message: _115.QueryChannelsResponse): unknown;
                    fromPartial(object: {
                        channels?: {
                            state?: _113.State;
                            ordering?: _113.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: bigint;
                        };
                        height?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _115.QueryChannelsResponse;
                    fromSDK(object: _115.QueryChannelsResponseSDKType): _115.QueryChannelsResponse;
                    toSDK(message: _115.QueryChannelsResponse): _115.QueryChannelsResponseSDKType;
                    fromAmino(object: _115.QueryChannelsResponseAmino): _115.QueryChannelsResponse;
                    toAmino(message: _115.QueryChannelsResponse): _115.QueryChannelsResponseAmino;
                    fromAminoMsg(object: _115.QueryChannelsResponseAminoMsg): _115.QueryChannelsResponse;
                    toAminoMsg(message: _115.QueryChannelsResponse): _115.QueryChannelsResponseAminoMsg;
                    fromProtoMsg(message: _115.QueryChannelsResponseProtoMsg): _115.QueryChannelsResponse;
                    toProto(message: _115.QueryChannelsResponse): Uint8Array;
                    toProtoMsg(message: _115.QueryChannelsResponse): _115.QueryChannelsResponseProtoMsg;
                };
                QueryConnectionChannelsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _115.QueryConnectionChannelsRequest;
                    isSDK(o: any): o is _115.QueryConnectionChannelsRequestSDKType;
                    isAmino(o: any): o is _115.QueryConnectionChannelsRequestAmino;
                    encode(message: _115.QueryConnectionChannelsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.QueryConnectionChannelsRequest;
                    fromJSON(object: any): _115.QueryConnectionChannelsRequest;
                    toJSON(message: _115.QueryConnectionChannelsRequest): unknown;
                    fromPartial(object: {
                        connection?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: bigint;
                            limit?: bigint;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _115.QueryConnectionChannelsRequest;
                    fromSDK(object: _115.QueryConnectionChannelsRequestSDKType): _115.QueryConnectionChannelsRequest;
                    toSDK(message: _115.QueryConnectionChannelsRequest): _115.QueryConnectionChannelsRequestSDKType;
                    fromAmino(object: _115.QueryConnectionChannelsRequestAmino): _115.QueryConnectionChannelsRequest;
                    toAmino(message: _115.QueryConnectionChannelsRequest): _115.QueryConnectionChannelsRequestAmino;
                    fromAminoMsg(object: _115.QueryConnectionChannelsRequestAminoMsg): _115.QueryConnectionChannelsRequest;
                    toAminoMsg(message: _115.QueryConnectionChannelsRequest): _115.QueryConnectionChannelsRequestAminoMsg;
                    fromProtoMsg(message: _115.QueryConnectionChannelsRequestProtoMsg): _115.QueryConnectionChannelsRequest;
                    toProto(message: _115.QueryConnectionChannelsRequest): Uint8Array;
                    toProtoMsg(message: _115.QueryConnectionChannelsRequest): _115.QueryConnectionChannelsRequestProtoMsg;
                };
                QueryConnectionChannelsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _115.QueryConnectionChannelsResponse;
                    isSDK(o: any): o is _115.QueryConnectionChannelsResponseSDKType;
                    isAmino(o: any): o is _115.QueryConnectionChannelsResponseAmino;
                    encode(message: _115.QueryConnectionChannelsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.QueryConnectionChannelsResponse;
                    fromJSON(object: any): _115.QueryConnectionChannelsResponse;
                    toJSON(message: _115.QueryConnectionChannelsResponse): unknown;
                    fromPartial(object: {
                        channels?: {
                            state?: _113.State;
                            ordering?: _113.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: bigint;
                        };
                        height?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _115.QueryConnectionChannelsResponse;
                    fromSDK(object: _115.QueryConnectionChannelsResponseSDKType): _115.QueryConnectionChannelsResponse;
                    toSDK(message: _115.QueryConnectionChannelsResponse): _115.QueryConnectionChannelsResponseSDKType;
                    fromAmino(object: _115.QueryConnectionChannelsResponseAmino): _115.QueryConnectionChannelsResponse;
                    toAmino(message: _115.QueryConnectionChannelsResponse): _115.QueryConnectionChannelsResponseAmino;
                    fromAminoMsg(object: _115.QueryConnectionChannelsResponseAminoMsg): _115.QueryConnectionChannelsResponse;
                    toAminoMsg(message: _115.QueryConnectionChannelsResponse): _115.QueryConnectionChannelsResponseAminoMsg;
                    fromProtoMsg(message: _115.QueryConnectionChannelsResponseProtoMsg): _115.QueryConnectionChannelsResponse;
                    toProto(message: _115.QueryConnectionChannelsResponse): Uint8Array;
                    toProtoMsg(message: _115.QueryConnectionChannelsResponse): _115.QueryConnectionChannelsResponseProtoMsg;
                };
                QueryChannelClientStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _115.QueryChannelClientStateRequest;
                    isSDK(o: any): o is _115.QueryChannelClientStateRequestSDKType;
                    isAmino(o: any): o is _115.QueryChannelClientStateRequestAmino;
                    encode(message: _115.QueryChannelClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.QueryChannelClientStateRequest;
                    fromJSON(object: any): _115.QueryChannelClientStateRequest;
                    toJSON(message: _115.QueryChannelClientStateRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _115.QueryChannelClientStateRequest;
                    fromSDK(object: _115.QueryChannelClientStateRequestSDKType): _115.QueryChannelClientStateRequest;
                    toSDK(message: _115.QueryChannelClientStateRequest): _115.QueryChannelClientStateRequestSDKType;
                    fromAmino(object: _115.QueryChannelClientStateRequestAmino): _115.QueryChannelClientStateRequest;
                    toAmino(message: _115.QueryChannelClientStateRequest): _115.QueryChannelClientStateRequestAmino;
                    fromAminoMsg(object: _115.QueryChannelClientStateRequestAminoMsg): _115.QueryChannelClientStateRequest;
                    toAminoMsg(message: _115.QueryChannelClientStateRequest): _115.QueryChannelClientStateRequestAminoMsg;
                    fromProtoMsg(message: _115.QueryChannelClientStateRequestProtoMsg): _115.QueryChannelClientStateRequest;
                    toProto(message: _115.QueryChannelClientStateRequest): Uint8Array;
                    toProtoMsg(message: _115.QueryChannelClientStateRequest): _115.QueryChannelClientStateRequestProtoMsg;
                };
                QueryChannelClientStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _115.QueryChannelClientStateResponse;
                    isSDK(o: any): o is _115.QueryChannelClientStateResponseSDKType;
                    isAmino(o: any): o is _115.QueryChannelClientStateResponseAmino;
                    encode(message: _115.QueryChannelClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.QueryChannelClientStateResponse;
                    fromJSON(object: any): _115.QueryChannelClientStateResponse;
                    toJSON(message: _115.QueryChannelClientStateResponse): unknown;
                    fromPartial(object: {
                        identifiedClientState?: {
                            clientId?: string;
                            clientState?: {
                                $typeUrl?: "/google.protobuf.Any";
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _115.QueryChannelClientStateResponse;
                    fromSDK(object: _115.QueryChannelClientStateResponseSDKType): _115.QueryChannelClientStateResponse;
                    toSDK(message: _115.QueryChannelClientStateResponse): _115.QueryChannelClientStateResponseSDKType;
                    fromAmino(object: _115.QueryChannelClientStateResponseAmino): _115.QueryChannelClientStateResponse;
                    toAmino(message: _115.QueryChannelClientStateResponse): _115.QueryChannelClientStateResponseAmino;
                    fromAminoMsg(object: _115.QueryChannelClientStateResponseAminoMsg): _115.QueryChannelClientStateResponse;
                    toAminoMsg(message: _115.QueryChannelClientStateResponse): _115.QueryChannelClientStateResponseAminoMsg;
                    fromProtoMsg(message: _115.QueryChannelClientStateResponseProtoMsg): _115.QueryChannelClientStateResponse;
                    toProto(message: _115.QueryChannelClientStateResponse): Uint8Array;
                    toProtoMsg(message: _115.QueryChannelClientStateResponse): _115.QueryChannelClientStateResponseProtoMsg;
                };
                QueryChannelConsensusStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _115.QueryChannelConsensusStateRequest;
                    isSDK(o: any): o is _115.QueryChannelConsensusStateRequestSDKType;
                    isAmino(o: any): o is _115.QueryChannelConsensusStateRequestAmino;
                    encode(message: _115.QueryChannelConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.QueryChannelConsensusStateRequest;
                    fromJSON(object: any): _115.QueryChannelConsensusStateRequest;
                    toJSON(message: _115.QueryChannelConsensusStateRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        revisionNumber?: bigint;
                        revisionHeight?: bigint;
                    }): _115.QueryChannelConsensusStateRequest;
                    fromSDK(object: _115.QueryChannelConsensusStateRequestSDKType): _115.QueryChannelConsensusStateRequest;
                    toSDK(message: _115.QueryChannelConsensusStateRequest): _115.QueryChannelConsensusStateRequestSDKType;
                    fromAmino(object: _115.QueryChannelConsensusStateRequestAmino): _115.QueryChannelConsensusStateRequest;
                    toAmino(message: _115.QueryChannelConsensusStateRequest): _115.QueryChannelConsensusStateRequestAmino;
                    fromAminoMsg(object: _115.QueryChannelConsensusStateRequestAminoMsg): _115.QueryChannelConsensusStateRequest;
                    toAminoMsg(message: _115.QueryChannelConsensusStateRequest): _115.QueryChannelConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _115.QueryChannelConsensusStateRequestProtoMsg): _115.QueryChannelConsensusStateRequest;
                    toProto(message: _115.QueryChannelConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _115.QueryChannelConsensusStateRequest): _115.QueryChannelConsensusStateRequestProtoMsg;
                };
                QueryChannelConsensusStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _115.QueryChannelConsensusStateResponse;
                    isSDK(o: any): o is _115.QueryChannelConsensusStateResponseSDKType;
                    isAmino(o: any): o is _115.QueryChannelConsensusStateResponseAmino;
                    encode(message: _115.QueryChannelConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.QueryChannelConsensusStateResponse;
                    fromJSON(object: any): _115.QueryChannelConsensusStateResponse;
                    toJSON(message: _115.QueryChannelConsensusStateResponse): unknown;
                    fromPartial(object: {
                        consensusState?: {
                            $typeUrl?: "/google.protobuf.Any";
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        clientId?: string;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _115.QueryChannelConsensusStateResponse;
                    fromSDK(object: _115.QueryChannelConsensusStateResponseSDKType): _115.QueryChannelConsensusStateResponse;
                    toSDK(message: _115.QueryChannelConsensusStateResponse): _115.QueryChannelConsensusStateResponseSDKType;
                    fromAmino(object: _115.QueryChannelConsensusStateResponseAmino): _115.QueryChannelConsensusStateResponse;
                    toAmino(message: _115.QueryChannelConsensusStateResponse): _115.QueryChannelConsensusStateResponseAmino;
                    fromAminoMsg(object: _115.QueryChannelConsensusStateResponseAminoMsg): _115.QueryChannelConsensusStateResponse;
                    toAminoMsg(message: _115.QueryChannelConsensusStateResponse): _115.QueryChannelConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _115.QueryChannelConsensusStateResponseProtoMsg): _115.QueryChannelConsensusStateResponse;
                    toProto(message: _115.QueryChannelConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _115.QueryChannelConsensusStateResponse): _115.QueryChannelConsensusStateResponseProtoMsg;
                };
                QueryPacketCommitmentRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _115.QueryPacketCommitmentRequest;
                    isSDK(o: any): o is _115.QueryPacketCommitmentRequestSDKType;
                    isAmino(o: any): o is _115.QueryPacketCommitmentRequestAmino;
                    encode(message: _115.QueryPacketCommitmentRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.QueryPacketCommitmentRequest;
                    fromJSON(object: any): _115.QueryPacketCommitmentRequest;
                    toJSON(message: _115.QueryPacketCommitmentRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: bigint;
                    }): _115.QueryPacketCommitmentRequest;
                    fromSDK(object: _115.QueryPacketCommitmentRequestSDKType): _115.QueryPacketCommitmentRequest;
                    toSDK(message: _115.QueryPacketCommitmentRequest): _115.QueryPacketCommitmentRequestSDKType;
                    fromAmino(object: _115.QueryPacketCommitmentRequestAmino): _115.QueryPacketCommitmentRequest;
                    toAmino(message: _115.QueryPacketCommitmentRequest): _115.QueryPacketCommitmentRequestAmino;
                    fromAminoMsg(object: _115.QueryPacketCommitmentRequestAminoMsg): _115.QueryPacketCommitmentRequest;
                    toAminoMsg(message: _115.QueryPacketCommitmentRequest): _115.QueryPacketCommitmentRequestAminoMsg;
                    fromProtoMsg(message: _115.QueryPacketCommitmentRequestProtoMsg): _115.QueryPacketCommitmentRequest;
                    toProto(message: _115.QueryPacketCommitmentRequest): Uint8Array;
                    toProtoMsg(message: _115.QueryPacketCommitmentRequest): _115.QueryPacketCommitmentRequestProtoMsg;
                };
                QueryPacketCommitmentResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _115.QueryPacketCommitmentResponse;
                    isSDK(o: any): o is _115.QueryPacketCommitmentResponseSDKType;
                    isAmino(o: any): o is _115.QueryPacketCommitmentResponseAmino;
                    encode(message: _115.QueryPacketCommitmentResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.QueryPacketCommitmentResponse;
                    fromJSON(object: any): _115.QueryPacketCommitmentResponse;
                    toJSON(message: _115.QueryPacketCommitmentResponse): unknown;
                    fromPartial(object: {
                        commitment?: Uint8Array;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _115.QueryPacketCommitmentResponse;
                    fromSDK(object: _115.QueryPacketCommitmentResponseSDKType): _115.QueryPacketCommitmentResponse;
                    toSDK(message: _115.QueryPacketCommitmentResponse): _115.QueryPacketCommitmentResponseSDKType;
                    fromAmino(object: _115.QueryPacketCommitmentResponseAmino): _115.QueryPacketCommitmentResponse;
                    toAmino(message: _115.QueryPacketCommitmentResponse): _115.QueryPacketCommitmentResponseAmino;
                    fromAminoMsg(object: _115.QueryPacketCommitmentResponseAminoMsg): _115.QueryPacketCommitmentResponse;
                    toAminoMsg(message: _115.QueryPacketCommitmentResponse): _115.QueryPacketCommitmentResponseAminoMsg;
                    fromProtoMsg(message: _115.QueryPacketCommitmentResponseProtoMsg): _115.QueryPacketCommitmentResponse;
                    toProto(message: _115.QueryPacketCommitmentResponse): Uint8Array;
                    toProtoMsg(message: _115.QueryPacketCommitmentResponse): _115.QueryPacketCommitmentResponseProtoMsg;
                };
                QueryPacketCommitmentsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _115.QueryPacketCommitmentsRequest;
                    isSDK(o: any): o is _115.QueryPacketCommitmentsRequestSDKType;
                    isAmino(o: any): o is _115.QueryPacketCommitmentsRequestAmino;
                    encode(message: _115.QueryPacketCommitmentsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.QueryPacketCommitmentsRequest;
                    fromJSON(object: any): _115.QueryPacketCommitmentsRequest;
                    toJSON(message: _115.QueryPacketCommitmentsRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: bigint;
                            limit?: bigint;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _115.QueryPacketCommitmentsRequest;
                    fromSDK(object: _115.QueryPacketCommitmentsRequestSDKType): _115.QueryPacketCommitmentsRequest;
                    toSDK(message: _115.QueryPacketCommitmentsRequest): _115.QueryPacketCommitmentsRequestSDKType;
                    fromAmino(object: _115.QueryPacketCommitmentsRequestAmino): _115.QueryPacketCommitmentsRequest;
                    toAmino(message: _115.QueryPacketCommitmentsRequest): _115.QueryPacketCommitmentsRequestAmino;
                    fromAminoMsg(object: _115.QueryPacketCommitmentsRequestAminoMsg): _115.QueryPacketCommitmentsRequest;
                    toAminoMsg(message: _115.QueryPacketCommitmentsRequest): _115.QueryPacketCommitmentsRequestAminoMsg;
                    fromProtoMsg(message: _115.QueryPacketCommitmentsRequestProtoMsg): _115.QueryPacketCommitmentsRequest;
                    toProto(message: _115.QueryPacketCommitmentsRequest): Uint8Array;
                    toProtoMsg(message: _115.QueryPacketCommitmentsRequest): _115.QueryPacketCommitmentsRequestProtoMsg;
                };
                QueryPacketCommitmentsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _115.QueryPacketCommitmentsResponse;
                    isSDK(o: any): o is _115.QueryPacketCommitmentsResponseSDKType;
                    isAmino(o: any): o is _115.QueryPacketCommitmentsResponseAmino;
                    encode(message: _115.QueryPacketCommitmentsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.QueryPacketCommitmentsResponse;
                    fromJSON(object: any): _115.QueryPacketCommitmentsResponse;
                    toJSON(message: _115.QueryPacketCommitmentsResponse): unknown;
                    fromPartial(object: {
                        commitments?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: bigint;
                            data?: Uint8Array;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: bigint;
                        };
                        height?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _115.QueryPacketCommitmentsResponse;
                    fromSDK(object: _115.QueryPacketCommitmentsResponseSDKType): _115.QueryPacketCommitmentsResponse;
                    toSDK(message: _115.QueryPacketCommitmentsResponse): _115.QueryPacketCommitmentsResponseSDKType;
                    fromAmino(object: _115.QueryPacketCommitmentsResponseAmino): _115.QueryPacketCommitmentsResponse;
                    toAmino(message: _115.QueryPacketCommitmentsResponse): _115.QueryPacketCommitmentsResponseAmino;
                    fromAminoMsg(object: _115.QueryPacketCommitmentsResponseAminoMsg): _115.QueryPacketCommitmentsResponse;
                    toAminoMsg(message: _115.QueryPacketCommitmentsResponse): _115.QueryPacketCommitmentsResponseAminoMsg;
                    fromProtoMsg(message: _115.QueryPacketCommitmentsResponseProtoMsg): _115.QueryPacketCommitmentsResponse;
                    toProto(message: _115.QueryPacketCommitmentsResponse): Uint8Array;
                    toProtoMsg(message: _115.QueryPacketCommitmentsResponse): _115.QueryPacketCommitmentsResponseProtoMsg;
                };
                QueryPacketReceiptRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _115.QueryPacketReceiptRequest;
                    isSDK(o: any): o is _115.QueryPacketReceiptRequestSDKType;
                    isAmino(o: any): o is _115.QueryPacketReceiptRequestAmino;
                    encode(message: _115.QueryPacketReceiptRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.QueryPacketReceiptRequest;
                    fromJSON(object: any): _115.QueryPacketReceiptRequest;
                    toJSON(message: _115.QueryPacketReceiptRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: bigint;
                    }): _115.QueryPacketReceiptRequest;
                    fromSDK(object: _115.QueryPacketReceiptRequestSDKType): _115.QueryPacketReceiptRequest;
                    toSDK(message: _115.QueryPacketReceiptRequest): _115.QueryPacketReceiptRequestSDKType;
                    fromAmino(object: _115.QueryPacketReceiptRequestAmino): _115.QueryPacketReceiptRequest;
                    toAmino(message: _115.QueryPacketReceiptRequest): _115.QueryPacketReceiptRequestAmino;
                    fromAminoMsg(object: _115.QueryPacketReceiptRequestAminoMsg): _115.QueryPacketReceiptRequest;
                    toAminoMsg(message: _115.QueryPacketReceiptRequest): _115.QueryPacketReceiptRequestAminoMsg;
                    fromProtoMsg(message: _115.QueryPacketReceiptRequestProtoMsg): _115.QueryPacketReceiptRequest;
                    toProto(message: _115.QueryPacketReceiptRequest): Uint8Array;
                    toProtoMsg(message: _115.QueryPacketReceiptRequest): _115.QueryPacketReceiptRequestProtoMsg;
                };
                QueryPacketReceiptResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _115.QueryPacketReceiptResponse;
                    isSDK(o: any): o is _115.QueryPacketReceiptResponseSDKType;
                    isAmino(o: any): o is _115.QueryPacketReceiptResponseAmino;
                    encode(message: _115.QueryPacketReceiptResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.QueryPacketReceiptResponse;
                    fromJSON(object: any): _115.QueryPacketReceiptResponse;
                    toJSON(message: _115.QueryPacketReceiptResponse): unknown;
                    fromPartial(object: {
                        received?: boolean;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _115.QueryPacketReceiptResponse;
                    fromSDK(object: _115.QueryPacketReceiptResponseSDKType): _115.QueryPacketReceiptResponse;
                    toSDK(message: _115.QueryPacketReceiptResponse): _115.QueryPacketReceiptResponseSDKType;
                    fromAmino(object: _115.QueryPacketReceiptResponseAmino): _115.QueryPacketReceiptResponse;
                    toAmino(message: _115.QueryPacketReceiptResponse): _115.QueryPacketReceiptResponseAmino;
                    fromAminoMsg(object: _115.QueryPacketReceiptResponseAminoMsg): _115.QueryPacketReceiptResponse;
                    toAminoMsg(message: _115.QueryPacketReceiptResponse): _115.QueryPacketReceiptResponseAminoMsg;
                    fromProtoMsg(message: _115.QueryPacketReceiptResponseProtoMsg): _115.QueryPacketReceiptResponse;
                    toProto(message: _115.QueryPacketReceiptResponse): Uint8Array;
                    toProtoMsg(message: _115.QueryPacketReceiptResponse): _115.QueryPacketReceiptResponseProtoMsg;
                };
                QueryPacketAcknowledgementRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _115.QueryPacketAcknowledgementRequest;
                    isSDK(o: any): o is _115.QueryPacketAcknowledgementRequestSDKType;
                    isAmino(o: any): o is _115.QueryPacketAcknowledgementRequestAmino;
                    encode(message: _115.QueryPacketAcknowledgementRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.QueryPacketAcknowledgementRequest;
                    fromJSON(object: any): _115.QueryPacketAcknowledgementRequest;
                    toJSON(message: _115.QueryPacketAcknowledgementRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: bigint;
                    }): _115.QueryPacketAcknowledgementRequest;
                    fromSDK(object: _115.QueryPacketAcknowledgementRequestSDKType): _115.QueryPacketAcknowledgementRequest;
                    toSDK(message: _115.QueryPacketAcknowledgementRequest): _115.QueryPacketAcknowledgementRequestSDKType;
                    fromAmino(object: _115.QueryPacketAcknowledgementRequestAmino): _115.QueryPacketAcknowledgementRequest;
                    toAmino(message: _115.QueryPacketAcknowledgementRequest): _115.QueryPacketAcknowledgementRequestAmino;
                    fromAminoMsg(object: _115.QueryPacketAcknowledgementRequestAminoMsg): _115.QueryPacketAcknowledgementRequest;
                    toAminoMsg(message: _115.QueryPacketAcknowledgementRequest): _115.QueryPacketAcknowledgementRequestAminoMsg;
                    fromProtoMsg(message: _115.QueryPacketAcknowledgementRequestProtoMsg): _115.QueryPacketAcknowledgementRequest;
                    toProto(message: _115.QueryPacketAcknowledgementRequest): Uint8Array;
                    toProtoMsg(message: _115.QueryPacketAcknowledgementRequest): _115.QueryPacketAcknowledgementRequestProtoMsg;
                };
                QueryPacketAcknowledgementResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _115.QueryPacketAcknowledgementResponse;
                    isSDK(o: any): o is _115.QueryPacketAcknowledgementResponseSDKType;
                    isAmino(o: any): o is _115.QueryPacketAcknowledgementResponseAmino;
                    encode(message: _115.QueryPacketAcknowledgementResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.QueryPacketAcknowledgementResponse;
                    fromJSON(object: any): _115.QueryPacketAcknowledgementResponse;
                    toJSON(message: _115.QueryPacketAcknowledgementResponse): unknown;
                    fromPartial(object: {
                        acknowledgement?: Uint8Array;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _115.QueryPacketAcknowledgementResponse;
                    fromSDK(object: _115.QueryPacketAcknowledgementResponseSDKType): _115.QueryPacketAcknowledgementResponse;
                    toSDK(message: _115.QueryPacketAcknowledgementResponse): _115.QueryPacketAcknowledgementResponseSDKType;
                    fromAmino(object: _115.QueryPacketAcknowledgementResponseAmino): _115.QueryPacketAcknowledgementResponse;
                    toAmino(message: _115.QueryPacketAcknowledgementResponse): _115.QueryPacketAcknowledgementResponseAmino;
                    fromAminoMsg(object: _115.QueryPacketAcknowledgementResponseAminoMsg): _115.QueryPacketAcknowledgementResponse;
                    toAminoMsg(message: _115.QueryPacketAcknowledgementResponse): _115.QueryPacketAcknowledgementResponseAminoMsg;
                    fromProtoMsg(message: _115.QueryPacketAcknowledgementResponseProtoMsg): _115.QueryPacketAcknowledgementResponse;
                    toProto(message: _115.QueryPacketAcknowledgementResponse): Uint8Array;
                    toProtoMsg(message: _115.QueryPacketAcknowledgementResponse): _115.QueryPacketAcknowledgementResponseProtoMsg;
                };
                QueryPacketAcknowledgementsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _115.QueryPacketAcknowledgementsRequest;
                    isSDK(o: any): o is _115.QueryPacketAcknowledgementsRequestSDKType;
                    isAmino(o: any): o is _115.QueryPacketAcknowledgementsRequestAmino;
                    encode(message: _115.QueryPacketAcknowledgementsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.QueryPacketAcknowledgementsRequest;
                    fromJSON(object: any): _115.QueryPacketAcknowledgementsRequest;
                    toJSON(message: _115.QueryPacketAcknowledgementsRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: bigint;
                            limit?: bigint;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                        packetCommitmentSequences?: bigint[];
                    }): _115.QueryPacketAcknowledgementsRequest;
                    fromSDK(object: _115.QueryPacketAcknowledgementsRequestSDKType): _115.QueryPacketAcknowledgementsRequest;
                    toSDK(message: _115.QueryPacketAcknowledgementsRequest): _115.QueryPacketAcknowledgementsRequestSDKType;
                    fromAmino(object: _115.QueryPacketAcknowledgementsRequestAmino): _115.QueryPacketAcknowledgementsRequest;
                    toAmino(message: _115.QueryPacketAcknowledgementsRequest): _115.QueryPacketAcknowledgementsRequestAmino;
                    fromAminoMsg(object: _115.QueryPacketAcknowledgementsRequestAminoMsg): _115.QueryPacketAcknowledgementsRequest;
                    toAminoMsg(message: _115.QueryPacketAcknowledgementsRequest): _115.QueryPacketAcknowledgementsRequestAminoMsg;
                    fromProtoMsg(message: _115.QueryPacketAcknowledgementsRequestProtoMsg): _115.QueryPacketAcknowledgementsRequest;
                    toProto(message: _115.QueryPacketAcknowledgementsRequest): Uint8Array;
                    toProtoMsg(message: _115.QueryPacketAcknowledgementsRequest): _115.QueryPacketAcknowledgementsRequestProtoMsg;
                };
                QueryPacketAcknowledgementsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _115.QueryPacketAcknowledgementsResponse;
                    isSDK(o: any): o is _115.QueryPacketAcknowledgementsResponseSDKType;
                    isAmino(o: any): o is _115.QueryPacketAcknowledgementsResponseAmino;
                    encode(message: _115.QueryPacketAcknowledgementsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.QueryPacketAcknowledgementsResponse;
                    fromJSON(object: any): _115.QueryPacketAcknowledgementsResponse;
                    toJSON(message: _115.QueryPacketAcknowledgementsResponse): unknown;
                    fromPartial(object: {
                        acknowledgements?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: bigint;
                            data?: Uint8Array;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: bigint;
                        };
                        height?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _115.QueryPacketAcknowledgementsResponse;
                    fromSDK(object: _115.QueryPacketAcknowledgementsResponseSDKType): _115.QueryPacketAcknowledgementsResponse;
                    toSDK(message: _115.QueryPacketAcknowledgementsResponse): _115.QueryPacketAcknowledgementsResponseSDKType;
                    fromAmino(object: _115.QueryPacketAcknowledgementsResponseAmino): _115.QueryPacketAcknowledgementsResponse;
                    toAmino(message: _115.QueryPacketAcknowledgementsResponse): _115.QueryPacketAcknowledgementsResponseAmino;
                    fromAminoMsg(object: _115.QueryPacketAcknowledgementsResponseAminoMsg): _115.QueryPacketAcknowledgementsResponse;
                    toAminoMsg(message: _115.QueryPacketAcknowledgementsResponse): _115.QueryPacketAcknowledgementsResponseAminoMsg;
                    fromProtoMsg(message: _115.QueryPacketAcknowledgementsResponseProtoMsg): _115.QueryPacketAcknowledgementsResponse;
                    toProto(message: _115.QueryPacketAcknowledgementsResponse): Uint8Array;
                    toProtoMsg(message: _115.QueryPacketAcknowledgementsResponse): _115.QueryPacketAcknowledgementsResponseProtoMsg;
                };
                QueryUnreceivedPacketsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _115.QueryUnreceivedPacketsRequest;
                    isSDK(o: any): o is _115.QueryUnreceivedPacketsRequestSDKType;
                    isAmino(o: any): o is _115.QueryUnreceivedPacketsRequestAmino;
                    encode(message: _115.QueryUnreceivedPacketsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.QueryUnreceivedPacketsRequest;
                    fromJSON(object: any): _115.QueryUnreceivedPacketsRequest;
                    toJSON(message: _115.QueryUnreceivedPacketsRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        packetCommitmentSequences?: bigint[];
                    }): _115.QueryUnreceivedPacketsRequest;
                    fromSDK(object: _115.QueryUnreceivedPacketsRequestSDKType): _115.QueryUnreceivedPacketsRequest;
                    toSDK(message: _115.QueryUnreceivedPacketsRequest): _115.QueryUnreceivedPacketsRequestSDKType;
                    fromAmino(object: _115.QueryUnreceivedPacketsRequestAmino): _115.QueryUnreceivedPacketsRequest;
                    toAmino(message: _115.QueryUnreceivedPacketsRequest): _115.QueryUnreceivedPacketsRequestAmino;
                    fromAminoMsg(object: _115.QueryUnreceivedPacketsRequestAminoMsg): _115.QueryUnreceivedPacketsRequest;
                    toAminoMsg(message: _115.QueryUnreceivedPacketsRequest): _115.QueryUnreceivedPacketsRequestAminoMsg;
                    fromProtoMsg(message: _115.QueryUnreceivedPacketsRequestProtoMsg): _115.QueryUnreceivedPacketsRequest;
                    toProto(message: _115.QueryUnreceivedPacketsRequest): Uint8Array;
                    toProtoMsg(message: _115.QueryUnreceivedPacketsRequest): _115.QueryUnreceivedPacketsRequestProtoMsg;
                };
                QueryUnreceivedPacketsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _115.QueryUnreceivedPacketsResponse;
                    isSDK(o: any): o is _115.QueryUnreceivedPacketsResponseSDKType;
                    isAmino(o: any): o is _115.QueryUnreceivedPacketsResponseAmino;
                    encode(message: _115.QueryUnreceivedPacketsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.QueryUnreceivedPacketsResponse;
                    fromJSON(object: any): _115.QueryUnreceivedPacketsResponse;
                    toJSON(message: _115.QueryUnreceivedPacketsResponse): unknown;
                    fromPartial(object: {
                        sequences?: bigint[];
                        height?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _115.QueryUnreceivedPacketsResponse;
                    fromSDK(object: _115.QueryUnreceivedPacketsResponseSDKType): _115.QueryUnreceivedPacketsResponse;
                    toSDK(message: _115.QueryUnreceivedPacketsResponse): _115.QueryUnreceivedPacketsResponseSDKType;
                    fromAmino(object: _115.QueryUnreceivedPacketsResponseAmino): _115.QueryUnreceivedPacketsResponse;
                    toAmino(message: _115.QueryUnreceivedPacketsResponse): _115.QueryUnreceivedPacketsResponseAmino;
                    fromAminoMsg(object: _115.QueryUnreceivedPacketsResponseAminoMsg): _115.QueryUnreceivedPacketsResponse;
                    toAminoMsg(message: _115.QueryUnreceivedPacketsResponse): _115.QueryUnreceivedPacketsResponseAminoMsg;
                    fromProtoMsg(message: _115.QueryUnreceivedPacketsResponseProtoMsg): _115.QueryUnreceivedPacketsResponse;
                    toProto(message: _115.QueryUnreceivedPacketsResponse): Uint8Array;
                    toProtoMsg(message: _115.QueryUnreceivedPacketsResponse): _115.QueryUnreceivedPacketsResponseProtoMsg;
                };
                QueryUnreceivedAcksRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _115.QueryUnreceivedAcksRequest;
                    isSDK(o: any): o is _115.QueryUnreceivedAcksRequestSDKType;
                    isAmino(o: any): o is _115.QueryUnreceivedAcksRequestAmino;
                    encode(message: _115.QueryUnreceivedAcksRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.QueryUnreceivedAcksRequest;
                    fromJSON(object: any): _115.QueryUnreceivedAcksRequest;
                    toJSON(message: _115.QueryUnreceivedAcksRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        packetAckSequences?: bigint[];
                    }): _115.QueryUnreceivedAcksRequest;
                    fromSDK(object: _115.QueryUnreceivedAcksRequestSDKType): _115.QueryUnreceivedAcksRequest;
                    toSDK(message: _115.QueryUnreceivedAcksRequest): _115.QueryUnreceivedAcksRequestSDKType;
                    fromAmino(object: _115.QueryUnreceivedAcksRequestAmino): _115.QueryUnreceivedAcksRequest;
                    toAmino(message: _115.QueryUnreceivedAcksRequest): _115.QueryUnreceivedAcksRequestAmino;
                    fromAminoMsg(object: _115.QueryUnreceivedAcksRequestAminoMsg): _115.QueryUnreceivedAcksRequest;
                    toAminoMsg(message: _115.QueryUnreceivedAcksRequest): _115.QueryUnreceivedAcksRequestAminoMsg;
                    fromProtoMsg(message: _115.QueryUnreceivedAcksRequestProtoMsg): _115.QueryUnreceivedAcksRequest;
                    toProto(message: _115.QueryUnreceivedAcksRequest): Uint8Array;
                    toProtoMsg(message: _115.QueryUnreceivedAcksRequest): _115.QueryUnreceivedAcksRequestProtoMsg;
                };
                QueryUnreceivedAcksResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _115.QueryUnreceivedAcksResponse;
                    isSDK(o: any): o is _115.QueryUnreceivedAcksResponseSDKType;
                    isAmino(o: any): o is _115.QueryUnreceivedAcksResponseAmino;
                    encode(message: _115.QueryUnreceivedAcksResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.QueryUnreceivedAcksResponse;
                    fromJSON(object: any): _115.QueryUnreceivedAcksResponse;
                    toJSON(message: _115.QueryUnreceivedAcksResponse): unknown;
                    fromPartial(object: {
                        sequences?: bigint[];
                        height?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _115.QueryUnreceivedAcksResponse;
                    fromSDK(object: _115.QueryUnreceivedAcksResponseSDKType): _115.QueryUnreceivedAcksResponse;
                    toSDK(message: _115.QueryUnreceivedAcksResponse): _115.QueryUnreceivedAcksResponseSDKType;
                    fromAmino(object: _115.QueryUnreceivedAcksResponseAmino): _115.QueryUnreceivedAcksResponse;
                    toAmino(message: _115.QueryUnreceivedAcksResponse): _115.QueryUnreceivedAcksResponseAmino;
                    fromAminoMsg(object: _115.QueryUnreceivedAcksResponseAminoMsg): _115.QueryUnreceivedAcksResponse;
                    toAminoMsg(message: _115.QueryUnreceivedAcksResponse): _115.QueryUnreceivedAcksResponseAminoMsg;
                    fromProtoMsg(message: _115.QueryUnreceivedAcksResponseProtoMsg): _115.QueryUnreceivedAcksResponse;
                    toProto(message: _115.QueryUnreceivedAcksResponse): Uint8Array;
                    toProtoMsg(message: _115.QueryUnreceivedAcksResponse): _115.QueryUnreceivedAcksResponseProtoMsg;
                };
                QueryNextSequenceReceiveRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _115.QueryNextSequenceReceiveRequest;
                    isSDK(o: any): o is _115.QueryNextSequenceReceiveRequestSDKType;
                    isAmino(o: any): o is _115.QueryNextSequenceReceiveRequestAmino;
                    encode(message: _115.QueryNextSequenceReceiveRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.QueryNextSequenceReceiveRequest;
                    fromJSON(object: any): _115.QueryNextSequenceReceiveRequest;
                    toJSON(message: _115.QueryNextSequenceReceiveRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _115.QueryNextSequenceReceiveRequest;
                    fromSDK(object: _115.QueryNextSequenceReceiveRequestSDKType): _115.QueryNextSequenceReceiveRequest;
                    toSDK(message: _115.QueryNextSequenceReceiveRequest): _115.QueryNextSequenceReceiveRequestSDKType;
                    fromAmino(object: _115.QueryNextSequenceReceiveRequestAmino): _115.QueryNextSequenceReceiveRequest;
                    toAmino(message: _115.QueryNextSequenceReceiveRequest): _115.QueryNextSequenceReceiveRequestAmino;
                    fromAminoMsg(object: _115.QueryNextSequenceReceiveRequestAminoMsg): _115.QueryNextSequenceReceiveRequest;
                    toAminoMsg(message: _115.QueryNextSequenceReceiveRequest): _115.QueryNextSequenceReceiveRequestAminoMsg;
                    fromProtoMsg(message: _115.QueryNextSequenceReceiveRequestProtoMsg): _115.QueryNextSequenceReceiveRequest;
                    toProto(message: _115.QueryNextSequenceReceiveRequest): Uint8Array;
                    toProtoMsg(message: _115.QueryNextSequenceReceiveRequest): _115.QueryNextSequenceReceiveRequestProtoMsg;
                };
                QueryNextSequenceReceiveResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _115.QueryNextSequenceReceiveResponse;
                    isSDK(o: any): o is _115.QueryNextSequenceReceiveResponseSDKType;
                    isAmino(o: any): o is _115.QueryNextSequenceReceiveResponseAmino;
                    encode(message: _115.QueryNextSequenceReceiveResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _115.QueryNextSequenceReceiveResponse;
                    fromJSON(object: any): _115.QueryNextSequenceReceiveResponse;
                    toJSON(message: _115.QueryNextSequenceReceiveResponse): unknown;
                    fromPartial(object: {
                        nextSequenceReceive?: bigint;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _115.QueryNextSequenceReceiveResponse;
                    fromSDK(object: _115.QueryNextSequenceReceiveResponseSDKType): _115.QueryNextSequenceReceiveResponse;
                    toSDK(message: _115.QueryNextSequenceReceiveResponse): _115.QueryNextSequenceReceiveResponseSDKType;
                    fromAmino(object: _115.QueryNextSequenceReceiveResponseAmino): _115.QueryNextSequenceReceiveResponse;
                    toAmino(message: _115.QueryNextSequenceReceiveResponse): _115.QueryNextSequenceReceiveResponseAmino;
                    fromAminoMsg(object: _115.QueryNextSequenceReceiveResponseAminoMsg): _115.QueryNextSequenceReceiveResponse;
                    toAminoMsg(message: _115.QueryNextSequenceReceiveResponse): _115.QueryNextSequenceReceiveResponseAminoMsg;
                    fromProtoMsg(message: _115.QueryNextSequenceReceiveResponseProtoMsg): _115.QueryNextSequenceReceiveResponse;
                    toProto(message: _115.QueryNextSequenceReceiveResponse): Uint8Array;
                    toProtoMsg(message: _115.QueryNextSequenceReceiveResponse): _115.QueryNextSequenceReceiveResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _114.GenesisState;
                    isSDK(o: any): o is _114.GenesisStateSDKType;
                    isAmino(o: any): o is _114.GenesisStateAmino;
                    encode(message: _114.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.GenesisState;
                    fromJSON(object: any): _114.GenesisState;
                    toJSON(message: _114.GenesisState): unknown;
                    fromPartial(object: {
                        channels?: {
                            state?: _113.State;
                            ordering?: _113.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                            portId?: string;
                            channelId?: string;
                        }[];
                        acknowledgements?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: bigint;
                            data?: Uint8Array;
                        }[];
                        commitments?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: bigint;
                            data?: Uint8Array;
                        }[];
                        receipts?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: bigint;
                            data?: Uint8Array;
                        }[];
                        sendSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: bigint;
                        }[];
                        recvSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: bigint;
                        }[];
                        ackSequences?: {
                            portId?: string;
                            channelId?: string;
                            sequence?: bigint;
                        }[];
                        nextChannelSequence?: bigint;
                    }): _114.GenesisState;
                    fromSDK(object: _114.GenesisStateSDKType): _114.GenesisState;
                    toSDK(message: _114.GenesisState): _114.GenesisStateSDKType;
                    fromAmino(object: _114.GenesisStateAmino): _114.GenesisState;
                    toAmino(message: _114.GenesisState): _114.GenesisStateAmino;
                    fromAminoMsg(object: _114.GenesisStateAminoMsg): _114.GenesisState;
                    toAminoMsg(message: _114.GenesisState): _114.GenesisStateAminoMsg;
                    fromProtoMsg(message: _114.GenesisStateProtoMsg): _114.GenesisState;
                    toProto(message: _114.GenesisState): Uint8Array;
                    toProtoMsg(message: _114.GenesisState): _114.GenesisStateProtoMsg;
                };
                PacketSequence: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _114.PacketSequence;
                    isSDK(o: any): o is _114.PacketSequenceSDKType;
                    isAmino(o: any): o is _114.PacketSequenceAmino;
                    encode(message: _114.PacketSequence, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _114.PacketSequence;
                    fromJSON(object: any): _114.PacketSequence;
                    toJSON(message: _114.PacketSequence): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: bigint;
                    }): _114.PacketSequence;
                    fromSDK(object: _114.PacketSequenceSDKType): _114.PacketSequence;
                    toSDK(message: _114.PacketSequence): _114.PacketSequenceSDKType;
                    fromAmino(object: _114.PacketSequenceAmino): _114.PacketSequence;
                    toAmino(message: _114.PacketSequence): _114.PacketSequenceAmino;
                    fromAminoMsg(object: _114.PacketSequenceAminoMsg): _114.PacketSequence;
                    toAminoMsg(message: _114.PacketSequence): _114.PacketSequenceAminoMsg;
                    fromProtoMsg(message: _114.PacketSequenceProtoMsg): _114.PacketSequence;
                    toProto(message: _114.PacketSequence): Uint8Array;
                    toProtoMsg(message: _114.PacketSequence): _114.PacketSequenceProtoMsg;
                };
                stateFromJSON(object: any): _113.State;
                stateToJSON(object: _113.State): string;
                orderFromJSON(object: any): _113.Order;
                orderToJSON(object: _113.Order): string;
                State: typeof _113.State;
                StateSDKType: typeof _113.State;
                StateAmino: typeof _113.State;
                Order: typeof _113.Order;
                OrderSDKType: typeof _113.Order;
                OrderAmino: typeof _113.Order;
                Channel: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _113.Channel;
                    isSDK(o: any): o is _113.ChannelSDKType;
                    isAmino(o: any): o is _113.ChannelAmino;
                    encode(message: _113.Channel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.Channel;
                    fromJSON(object: any): _113.Channel;
                    toJSON(message: _113.Channel): unknown;
                    fromPartial(object: {
                        state?: _113.State;
                        ordering?: _113.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        };
                        connectionHops?: string[];
                        version?: string;
                    }): _113.Channel;
                    fromSDK(object: _113.ChannelSDKType): _113.Channel;
                    toSDK(message: _113.Channel): _113.ChannelSDKType;
                    fromAmino(object: _113.ChannelAmino): _113.Channel;
                    toAmino(message: _113.Channel): _113.ChannelAmino;
                    fromAminoMsg(object: _113.ChannelAminoMsg): _113.Channel;
                    toAminoMsg(message: _113.Channel): _113.ChannelAminoMsg;
                    fromProtoMsg(message: _113.ChannelProtoMsg): _113.Channel;
                    toProto(message: _113.Channel): Uint8Array;
                    toProtoMsg(message: _113.Channel): _113.ChannelProtoMsg;
                };
                IdentifiedChannel: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _113.IdentifiedChannel;
                    isSDK(o: any): o is _113.IdentifiedChannelSDKType;
                    isAmino(o: any): o is _113.IdentifiedChannelAmino;
                    encode(message: _113.IdentifiedChannel, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.IdentifiedChannel;
                    fromJSON(object: any): _113.IdentifiedChannel;
                    toJSON(message: _113.IdentifiedChannel): unknown;
                    fromPartial(object: {
                        state?: _113.State;
                        ordering?: _113.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        };
                        connectionHops?: string[];
                        version?: string;
                        portId?: string;
                        channelId?: string;
                    }): _113.IdentifiedChannel;
                    fromSDK(object: _113.IdentifiedChannelSDKType): _113.IdentifiedChannel;
                    toSDK(message: _113.IdentifiedChannel): _113.IdentifiedChannelSDKType;
                    fromAmino(object: _113.IdentifiedChannelAmino): _113.IdentifiedChannel;
                    toAmino(message: _113.IdentifiedChannel): _113.IdentifiedChannelAmino;
                    fromAminoMsg(object: _113.IdentifiedChannelAminoMsg): _113.IdentifiedChannel;
                    toAminoMsg(message: _113.IdentifiedChannel): _113.IdentifiedChannelAminoMsg;
                    fromProtoMsg(message: _113.IdentifiedChannelProtoMsg): _113.IdentifiedChannel;
                    toProto(message: _113.IdentifiedChannel): Uint8Array;
                    toProtoMsg(message: _113.IdentifiedChannel): _113.IdentifiedChannelProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _113.Counterparty;
                    isSDK(o: any): o is _113.CounterpartySDKType;
                    isAmino(o: any): o is _113.CounterpartyAmino;
                    encode(message: _113.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.Counterparty;
                    fromJSON(object: any): _113.Counterparty;
                    toJSON(message: _113.Counterparty): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                    }): _113.Counterparty;
                    fromSDK(object: _113.CounterpartySDKType): _113.Counterparty;
                    toSDK(message: _113.Counterparty): _113.CounterpartySDKType;
                    fromAmino(object: _113.CounterpartyAmino): _113.Counterparty;
                    toAmino(message: _113.Counterparty): _113.CounterpartyAmino;
                    fromAminoMsg(object: _113.CounterpartyAminoMsg): _113.Counterparty;
                    toAminoMsg(message: _113.Counterparty): _113.CounterpartyAminoMsg;
                    fromProtoMsg(message: _113.CounterpartyProtoMsg): _113.Counterparty;
                    toProto(message: _113.Counterparty): Uint8Array;
                    toProtoMsg(message: _113.Counterparty): _113.CounterpartyProtoMsg;
                };
                Packet: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _113.Packet;
                    isSDK(o: any): o is _113.PacketSDKType;
                    isAmino(o: any): o is _113.PacketAmino;
                    encode(message: _113.Packet, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.Packet;
                    fromJSON(object: any): _113.Packet;
                    toJSON(message: _113.Packet): unknown;
                    fromPartial(object: {
                        sequence?: bigint;
                        sourcePort?: string;
                        sourceChannel?: string;
                        destinationPort?: string;
                        destinationChannel?: string;
                        data?: Uint8Array;
                        timeoutHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                        timeoutTimestamp?: bigint;
                    }): _113.Packet;
                    fromSDK(object: _113.PacketSDKType): _113.Packet;
                    toSDK(message: _113.Packet): _113.PacketSDKType;
                    fromAmino(object: _113.PacketAmino): _113.Packet;
                    toAmino(message: _113.Packet): _113.PacketAmino;
                    fromAminoMsg(object: _113.PacketAminoMsg): _113.Packet;
                    toAminoMsg(message: _113.Packet): _113.PacketAminoMsg;
                    fromProtoMsg(message: _113.PacketProtoMsg): _113.Packet;
                    toProto(message: _113.Packet): Uint8Array;
                    toProtoMsg(message: _113.Packet): _113.PacketProtoMsg;
                };
                PacketState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _113.PacketState;
                    isSDK(o: any): o is _113.PacketStateSDKType;
                    isAmino(o: any): o is _113.PacketStateAmino;
                    encode(message: _113.PacketState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.PacketState;
                    fromJSON(object: any): _113.PacketState;
                    toJSON(message: _113.PacketState): unknown;
                    fromPartial(object: {
                        portId?: string;
                        channelId?: string;
                        sequence?: bigint;
                        data?: Uint8Array;
                    }): _113.PacketState;
                    fromSDK(object: _113.PacketStateSDKType): _113.PacketState;
                    toSDK(message: _113.PacketState): _113.PacketStateSDKType;
                    fromAmino(object: _113.PacketStateAmino): _113.PacketState;
                    toAmino(message: _113.PacketState): _113.PacketStateAmino;
                    fromAminoMsg(object: _113.PacketStateAminoMsg): _113.PacketState;
                    toAminoMsg(message: _113.PacketState): _113.PacketStateAminoMsg;
                    fromProtoMsg(message: _113.PacketStateProtoMsg): _113.PacketState;
                    toProto(message: _113.PacketState): Uint8Array;
                    toProtoMsg(message: _113.PacketState): _113.PacketStateProtoMsg;
                };
                Acknowledgement: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _113.Acknowledgement;
                    isSDK(o: any): o is _113.AcknowledgementSDKType;
                    isAmino(o: any): o is _113.AcknowledgementAmino;
                    encode(message: _113.Acknowledgement, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _113.Acknowledgement;
                    fromJSON(object: any): _113.Acknowledgement;
                    toJSON(message: _113.Acknowledgement): unknown;
                    fromPartial(object: {
                        result?: Uint8Array;
                        error?: string;
                    }): _113.Acknowledgement;
                    fromSDK(object: _113.AcknowledgementSDKType): _113.Acknowledgement;
                    toSDK(message: _113.Acknowledgement): _113.AcknowledgementSDKType;
                    fromAmino(object: _113.AcknowledgementAmino): _113.Acknowledgement;
                    toAmino(message: _113.Acknowledgement): _113.AcknowledgementAmino;
                    fromAminoMsg(object: _113.AcknowledgementAminoMsg): _113.Acknowledgement;
                    toAminoMsg(message: _113.Acknowledgement): _113.AcknowledgementAminoMsg;
                    fromProtoMsg(message: _113.AcknowledgementProtoMsg): _113.Acknowledgement;
                    toProto(message: _113.Acknowledgement): Uint8Array;
                    toProtoMsg(message: _113.Acknowledgement): _113.AcknowledgementProtoMsg;
                };
            };
        }
        namespace client {
            const v1: {
                MsgClientImpl: typeof _269.MsgClientImpl;
                createClientImpl: (rpc: import("..").TxRpc) => _269.MsgClientImpl;
                QueryClientImpl: typeof _264.QueryClientImpl;
                createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                    useClientState: <TData = _119.QueryClientStateResponse>({ request, options }: _264.UseClientStateQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
                    useClientStates: <TData_1 = _119.QueryClientStatesResponse>({ request, options }: _264.UseClientStatesQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
                    useConsensusState: <TData_2 = _119.QueryConsensusStateResponse>({ request, options }: _264.UseConsensusStateQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
                    useConsensusStates: <TData_3 = _119.QueryConsensusStatesResponse>({ request, options }: _264.UseConsensusStatesQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
                    useClientStatus: <TData_4 = _119.QueryClientStatusResponse>({ request, options }: _264.UseClientStatusQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
                    useClientParams: <TData_5 = _119.QueryClientParamsResponse>({ request, options }: _264.UseClientParamsQuery<TData_5>) => import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
                    useUpgradedClientState: <TData_6 = _119.QueryUpgradedClientStateResponse>({ request, options }: _264.UseUpgradedClientStateQuery<TData_6>) => import("@tanstack/react-query").UseQueryResult<TData_6, Error>;
                    useUpgradedConsensusState: <TData_7 = _119.QueryUpgradedConsensusStateResponse>({ request, options }: _264.UseUpgradedConsensusStateQuery<TData_7>) => import("@tanstack/react-query").UseQueryResult<TData_7, Error>;
                };
                createRpcQueryMobxStores: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                    QueryClientStateStore: {
                        new (): {
                            store: import("..").QueryStore<_119.QueryClientStateRequest, _119.QueryClientStateResponse>;
                            clientState(request: _119.QueryClientStateRequest): import("..").MobxResponse<_119.QueryClientStateResponse>;
                        };
                    };
                    QueryClientStatesStore: {
                        new (): {
                            store: import("..").QueryStore<_119.QueryClientStatesRequest, _119.QueryClientStatesResponse>;
                            clientStates(request: _119.QueryClientStatesRequest): import("..").MobxResponse<_119.QueryClientStatesResponse>;
                        };
                    };
                    QueryConsensusStateStore: {
                        new (): {
                            store: import("..").QueryStore<_119.QueryConsensusStateRequest, _119.QueryConsensusStateResponse>;
                            consensusState(request: _119.QueryConsensusStateRequest): import("..").MobxResponse<_119.QueryConsensusStateResponse>;
                        };
                    };
                    QueryConsensusStatesStore: {
                        new (): {
                            store: import("..").QueryStore<_119.QueryConsensusStatesRequest, _119.QueryConsensusStatesResponse>;
                            consensusStates(request: _119.QueryConsensusStatesRequest): import("..").MobxResponse<_119.QueryConsensusStatesResponse>;
                        };
                    };
                    QueryClientStatusStore: {
                        new (): {
                            store: import("..").QueryStore<_119.QueryClientStatusRequest, _119.QueryClientStatusResponse>;
                            clientStatus(request: _119.QueryClientStatusRequest): import("..").MobxResponse<_119.QueryClientStatusResponse>;
                        };
                    };
                    QueryClientParamsStore: {
                        new (): {
                            store: import("..").QueryStore<_119.QueryClientParamsRequest, _119.QueryClientParamsResponse>;
                            clientParams(request: _119.QueryClientParamsRequest): import("..").MobxResponse<_119.QueryClientParamsResponse>;
                        };
                    };
                    QueryUpgradedClientStateStore: {
                        new (): {
                            store: import("..").QueryStore<_119.QueryUpgradedClientStateRequest, _119.QueryUpgradedClientStateResponse>;
                            upgradedClientState(request: _119.QueryUpgradedClientStateRequest): import("..").MobxResponse<_119.QueryUpgradedClientStateResponse>;
                        };
                    };
                    QueryUpgradedConsensusStateStore: {
                        new (): {
                            store: import("..").QueryStore<_119.QueryUpgradedConsensusStateRequest, _119.QueryUpgradedConsensusStateResponse>;
                            upgradedConsensusState(request: _119.QueryUpgradedConsensusStateRequest): import("..").MobxResponse<_119.QueryUpgradedConsensusStateResponse>;
                        };
                    };
                };
                registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        createClient(value: _120.MsgCreateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        updateClient(value: _120.MsgUpdateClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        upgradeClient(value: _120.MsgUpgradeClient): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        submitMisbehaviour(value: _120.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        createClient(value: _120.MsgCreateClient): {
                            typeUrl: string;
                            value: _120.MsgCreateClient;
                        };
                        updateClient(value: _120.MsgUpdateClient): {
                            typeUrl: string;
                            value: _120.MsgUpdateClient;
                        };
                        upgradeClient(value: _120.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _120.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _120.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _120.MsgSubmitMisbehaviour;
                        };
                    };
                    toJSON: {
                        createClient(value: _120.MsgCreateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        updateClient(value: _120.MsgUpdateClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        upgradeClient(value: _120.MsgUpgradeClient): {
                            typeUrl: string;
                            value: unknown;
                        };
                        submitMisbehaviour(value: _120.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        createClient(value: any): {
                            typeUrl: string;
                            value: _120.MsgCreateClient;
                        };
                        updateClient(value: any): {
                            typeUrl: string;
                            value: _120.MsgUpdateClient;
                        };
                        upgradeClient(value: any): {
                            typeUrl: string;
                            value: _120.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: any): {
                            typeUrl: string;
                            value: _120.MsgSubmitMisbehaviour;
                        };
                    };
                    fromPartial: {
                        createClient(value: _120.MsgCreateClient): {
                            typeUrl: string;
                            value: _120.MsgCreateClient;
                        };
                        updateClient(value: _120.MsgUpdateClient): {
                            typeUrl: string;
                            value: _120.MsgUpdateClient;
                        };
                        upgradeClient(value: _120.MsgUpgradeClient): {
                            typeUrl: string;
                            value: _120.MsgUpgradeClient;
                        };
                        submitMisbehaviour(value: _120.MsgSubmitMisbehaviour): {
                            typeUrl: string;
                            value: _120.MsgSubmitMisbehaviour;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.client.v1.MsgCreateClient": {
                        aminoType: string;
                        toAmino: (message: _120.MsgCreateClient) => _120.MsgCreateClientAmino;
                        fromAmino: (object: _120.MsgCreateClientAmino) => _120.MsgCreateClient;
                    };
                    "/ibc.core.client.v1.MsgUpdateClient": {
                        aminoType: string;
                        toAmino: (message: _120.MsgUpdateClient) => _120.MsgUpdateClientAmino;
                        fromAmino: (object: _120.MsgUpdateClientAmino) => _120.MsgUpdateClient;
                    };
                    "/ibc.core.client.v1.MsgUpgradeClient": {
                        aminoType: string;
                        toAmino: (message: _120.MsgUpgradeClient) => _120.MsgUpgradeClientAmino;
                        fromAmino: (object: _120.MsgUpgradeClientAmino) => _120.MsgUpgradeClient;
                    };
                    "/ibc.core.client.v1.MsgSubmitMisbehaviour": {
                        aminoType: string;
                        toAmino: (message: _120.MsgSubmitMisbehaviour) => _120.MsgSubmitMisbehaviourAmino;
                        fromAmino: (object: _120.MsgSubmitMisbehaviourAmino) => _120.MsgSubmitMisbehaviour;
                    };
                };
                MsgCreateClient: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _120.MsgCreateClient;
                    isSDK(o: any): o is _120.MsgCreateClientSDKType;
                    isAmino(o: any): o is _120.MsgCreateClientAmino;
                    encode(message: _120.MsgCreateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.MsgCreateClient;
                    fromJSON(object: any): _120.MsgCreateClient;
                    toJSON(message: _120.MsgCreateClient): unknown;
                    fromPartial(object: {
                        clientState?: {
                            $typeUrl?: "/google.protobuf.Any";
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        consensusState?: {
                            $typeUrl?: "/google.protobuf.Any";
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    }): _120.MsgCreateClient;
                    fromSDK(object: _120.MsgCreateClientSDKType): _120.MsgCreateClient;
                    toSDK(message: _120.MsgCreateClient): _120.MsgCreateClientSDKType;
                    fromAmino(object: _120.MsgCreateClientAmino): _120.MsgCreateClient;
                    toAmino(message: _120.MsgCreateClient): _120.MsgCreateClientAmino;
                    fromAminoMsg(object: _120.MsgCreateClientAminoMsg): _120.MsgCreateClient;
                    toAminoMsg(message: _120.MsgCreateClient): _120.MsgCreateClientAminoMsg;
                    fromProtoMsg(message: _120.MsgCreateClientProtoMsg): _120.MsgCreateClient;
                    toProto(message: _120.MsgCreateClient): Uint8Array;
                    toProtoMsg(message: _120.MsgCreateClient): _120.MsgCreateClientProtoMsg;
                };
                MsgCreateClientResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _120.MsgCreateClientResponse;
                    isSDK(o: any): o is _120.MsgCreateClientResponseSDKType;
                    isAmino(o: any): o is _120.MsgCreateClientResponseAmino;
                    encode(_: _120.MsgCreateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.MsgCreateClientResponse;
                    fromJSON(_: any): _120.MsgCreateClientResponse;
                    toJSON(_: _120.MsgCreateClientResponse): unknown;
                    fromPartial(_: {}): _120.MsgCreateClientResponse;
                    fromSDK(_: _120.MsgCreateClientResponseSDKType): _120.MsgCreateClientResponse;
                    toSDK(_: _120.MsgCreateClientResponse): _120.MsgCreateClientResponseSDKType;
                    fromAmino(_: _120.MsgCreateClientResponseAmino): _120.MsgCreateClientResponse;
                    toAmino(_: _120.MsgCreateClientResponse): _120.MsgCreateClientResponseAmino;
                    fromAminoMsg(object: _120.MsgCreateClientResponseAminoMsg): _120.MsgCreateClientResponse;
                    toAminoMsg(message: _120.MsgCreateClientResponse): _120.MsgCreateClientResponseAminoMsg;
                    fromProtoMsg(message: _120.MsgCreateClientResponseProtoMsg): _120.MsgCreateClientResponse;
                    toProto(message: _120.MsgCreateClientResponse): Uint8Array;
                    toProtoMsg(message: _120.MsgCreateClientResponse): _120.MsgCreateClientResponseProtoMsg;
                };
                MsgUpdateClient: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _120.MsgUpdateClient;
                    isSDK(o: any): o is _120.MsgUpdateClientSDKType;
                    isAmino(o: any): o is _120.MsgUpdateClientAmino;
                    encode(message: _120.MsgUpdateClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.MsgUpdateClient;
                    fromJSON(object: any): _120.MsgUpdateClient;
                    toJSON(message: _120.MsgUpdateClient): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        header?: {
                            $typeUrl?: "/google.protobuf.Any";
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    }): _120.MsgUpdateClient;
                    fromSDK(object: _120.MsgUpdateClientSDKType): _120.MsgUpdateClient;
                    toSDK(message: _120.MsgUpdateClient): _120.MsgUpdateClientSDKType;
                    fromAmino(object: _120.MsgUpdateClientAmino): _120.MsgUpdateClient;
                    toAmino(message: _120.MsgUpdateClient): _120.MsgUpdateClientAmino;
                    fromAminoMsg(object: _120.MsgUpdateClientAminoMsg): _120.MsgUpdateClient;
                    toAminoMsg(message: _120.MsgUpdateClient): _120.MsgUpdateClientAminoMsg;
                    fromProtoMsg(message: _120.MsgUpdateClientProtoMsg): _120.MsgUpdateClient;
                    toProto(message: _120.MsgUpdateClient): Uint8Array;
                    toProtoMsg(message: _120.MsgUpdateClient): _120.MsgUpdateClientProtoMsg;
                };
                MsgUpdateClientResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _120.MsgUpdateClientResponse;
                    isSDK(o: any): o is _120.MsgUpdateClientResponseSDKType;
                    isAmino(o: any): o is _120.MsgUpdateClientResponseAmino;
                    encode(_: _120.MsgUpdateClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.MsgUpdateClientResponse;
                    fromJSON(_: any): _120.MsgUpdateClientResponse;
                    toJSON(_: _120.MsgUpdateClientResponse): unknown;
                    fromPartial(_: {}): _120.MsgUpdateClientResponse;
                    fromSDK(_: _120.MsgUpdateClientResponseSDKType): _120.MsgUpdateClientResponse;
                    toSDK(_: _120.MsgUpdateClientResponse): _120.MsgUpdateClientResponseSDKType;
                    fromAmino(_: _120.MsgUpdateClientResponseAmino): _120.MsgUpdateClientResponse;
                    toAmino(_: _120.MsgUpdateClientResponse): _120.MsgUpdateClientResponseAmino;
                    fromAminoMsg(object: _120.MsgUpdateClientResponseAminoMsg): _120.MsgUpdateClientResponse;
                    toAminoMsg(message: _120.MsgUpdateClientResponse): _120.MsgUpdateClientResponseAminoMsg;
                    fromProtoMsg(message: _120.MsgUpdateClientResponseProtoMsg): _120.MsgUpdateClientResponse;
                    toProto(message: _120.MsgUpdateClientResponse): Uint8Array;
                    toProtoMsg(message: _120.MsgUpdateClientResponse): _120.MsgUpdateClientResponseProtoMsg;
                };
                MsgUpgradeClient: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _120.MsgUpgradeClient;
                    isSDK(o: any): o is _120.MsgUpgradeClientSDKType;
                    isAmino(o: any): o is _120.MsgUpgradeClientAmino;
                    encode(message: _120.MsgUpgradeClient, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.MsgUpgradeClient;
                    fromJSON(object: any): _120.MsgUpgradeClient;
                    toJSON(message: _120.MsgUpgradeClient): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        clientState?: {
                            $typeUrl?: "/google.protobuf.Any";
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        consensusState?: {
                            $typeUrl?: "/google.protobuf.Any";
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proofUpgradeClient?: Uint8Array;
                        proofUpgradeConsensusState?: Uint8Array;
                        signer?: string;
                    }): _120.MsgUpgradeClient;
                    fromSDK(object: _120.MsgUpgradeClientSDKType): _120.MsgUpgradeClient;
                    toSDK(message: _120.MsgUpgradeClient): _120.MsgUpgradeClientSDKType;
                    fromAmino(object: _120.MsgUpgradeClientAmino): _120.MsgUpgradeClient;
                    toAmino(message: _120.MsgUpgradeClient): _120.MsgUpgradeClientAmino;
                    fromAminoMsg(object: _120.MsgUpgradeClientAminoMsg): _120.MsgUpgradeClient;
                    toAminoMsg(message: _120.MsgUpgradeClient): _120.MsgUpgradeClientAminoMsg;
                    fromProtoMsg(message: _120.MsgUpgradeClientProtoMsg): _120.MsgUpgradeClient;
                    toProto(message: _120.MsgUpgradeClient): Uint8Array;
                    toProtoMsg(message: _120.MsgUpgradeClient): _120.MsgUpgradeClientProtoMsg;
                };
                MsgUpgradeClientResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _120.MsgUpgradeClientResponse;
                    isSDK(o: any): o is _120.MsgUpgradeClientResponseSDKType;
                    isAmino(o: any): o is _120.MsgUpgradeClientResponseAmino;
                    encode(_: _120.MsgUpgradeClientResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.MsgUpgradeClientResponse;
                    fromJSON(_: any): _120.MsgUpgradeClientResponse;
                    toJSON(_: _120.MsgUpgradeClientResponse): unknown;
                    fromPartial(_: {}): _120.MsgUpgradeClientResponse;
                    fromSDK(_: _120.MsgUpgradeClientResponseSDKType): _120.MsgUpgradeClientResponse;
                    toSDK(_: _120.MsgUpgradeClientResponse): _120.MsgUpgradeClientResponseSDKType;
                    fromAmino(_: _120.MsgUpgradeClientResponseAmino): _120.MsgUpgradeClientResponse;
                    toAmino(_: _120.MsgUpgradeClientResponse): _120.MsgUpgradeClientResponseAmino;
                    fromAminoMsg(object: _120.MsgUpgradeClientResponseAminoMsg): _120.MsgUpgradeClientResponse;
                    toAminoMsg(message: _120.MsgUpgradeClientResponse): _120.MsgUpgradeClientResponseAminoMsg;
                    fromProtoMsg(message: _120.MsgUpgradeClientResponseProtoMsg): _120.MsgUpgradeClientResponse;
                    toProto(message: _120.MsgUpgradeClientResponse): Uint8Array;
                    toProtoMsg(message: _120.MsgUpgradeClientResponse): _120.MsgUpgradeClientResponseProtoMsg;
                };
                MsgSubmitMisbehaviour: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _120.MsgSubmitMisbehaviour;
                    isSDK(o: any): o is _120.MsgSubmitMisbehaviourSDKType;
                    isAmino(o: any): o is _120.MsgSubmitMisbehaviourAmino;
                    encode(message: _120.MsgSubmitMisbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.MsgSubmitMisbehaviour;
                    fromJSON(object: any): _120.MsgSubmitMisbehaviour;
                    toJSON(message: _120.MsgSubmitMisbehaviour): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        misbehaviour?: {
                            $typeUrl?: "/google.protobuf.Any";
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        signer?: string;
                    }): _120.MsgSubmitMisbehaviour;
                    fromSDK(object: _120.MsgSubmitMisbehaviourSDKType): _120.MsgSubmitMisbehaviour;
                    toSDK(message: _120.MsgSubmitMisbehaviour): _120.MsgSubmitMisbehaviourSDKType;
                    fromAmino(object: _120.MsgSubmitMisbehaviourAmino): _120.MsgSubmitMisbehaviour;
                    toAmino(message: _120.MsgSubmitMisbehaviour): _120.MsgSubmitMisbehaviourAmino;
                    fromAminoMsg(object: _120.MsgSubmitMisbehaviourAminoMsg): _120.MsgSubmitMisbehaviour;
                    toAminoMsg(message: _120.MsgSubmitMisbehaviour): _120.MsgSubmitMisbehaviourAminoMsg;
                    fromProtoMsg(message: _120.MsgSubmitMisbehaviourProtoMsg): _120.MsgSubmitMisbehaviour;
                    toProto(message: _120.MsgSubmitMisbehaviour): Uint8Array;
                    toProtoMsg(message: _120.MsgSubmitMisbehaviour): _120.MsgSubmitMisbehaviourProtoMsg;
                };
                MsgSubmitMisbehaviourResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _120.MsgSubmitMisbehaviourResponse;
                    isSDK(o: any): o is _120.MsgSubmitMisbehaviourResponseSDKType;
                    isAmino(o: any): o is _120.MsgSubmitMisbehaviourResponseAmino;
                    encode(_: _120.MsgSubmitMisbehaviourResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _120.MsgSubmitMisbehaviourResponse;
                    fromJSON(_: any): _120.MsgSubmitMisbehaviourResponse;
                    toJSON(_: _120.MsgSubmitMisbehaviourResponse): unknown;
                    fromPartial(_: {}): _120.MsgSubmitMisbehaviourResponse;
                    fromSDK(_: _120.MsgSubmitMisbehaviourResponseSDKType): _120.MsgSubmitMisbehaviourResponse;
                    toSDK(_: _120.MsgSubmitMisbehaviourResponse): _120.MsgSubmitMisbehaviourResponseSDKType;
                    fromAmino(_: _120.MsgSubmitMisbehaviourResponseAmino): _120.MsgSubmitMisbehaviourResponse;
                    toAmino(_: _120.MsgSubmitMisbehaviourResponse): _120.MsgSubmitMisbehaviourResponseAmino;
                    fromAminoMsg(object: _120.MsgSubmitMisbehaviourResponseAminoMsg): _120.MsgSubmitMisbehaviourResponse;
                    toAminoMsg(message: _120.MsgSubmitMisbehaviourResponse): _120.MsgSubmitMisbehaviourResponseAminoMsg;
                    fromProtoMsg(message: _120.MsgSubmitMisbehaviourResponseProtoMsg): _120.MsgSubmitMisbehaviourResponse;
                    toProto(message: _120.MsgSubmitMisbehaviourResponse): Uint8Array;
                    toProtoMsg(message: _120.MsgSubmitMisbehaviourResponse): _120.MsgSubmitMisbehaviourResponseProtoMsg;
                };
                QueryClientStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _119.QueryClientStateRequest;
                    isSDK(o: any): o is _119.QueryClientStateRequestSDKType;
                    isAmino(o: any): o is _119.QueryClientStateRequestAmino;
                    encode(message: _119.QueryClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.QueryClientStateRequest;
                    fromJSON(object: any): _119.QueryClientStateRequest;
                    toJSON(message: _119.QueryClientStateRequest): unknown;
                    fromPartial(object: {
                        clientId?: string;
                    }): _119.QueryClientStateRequest;
                    fromSDK(object: _119.QueryClientStateRequestSDKType): _119.QueryClientStateRequest;
                    toSDK(message: _119.QueryClientStateRequest): _119.QueryClientStateRequestSDKType;
                    fromAmino(object: _119.QueryClientStateRequestAmino): _119.QueryClientStateRequest;
                    toAmino(message: _119.QueryClientStateRequest): _119.QueryClientStateRequestAmino;
                    fromAminoMsg(object: _119.QueryClientStateRequestAminoMsg): _119.QueryClientStateRequest;
                    toAminoMsg(message: _119.QueryClientStateRequest): _119.QueryClientStateRequestAminoMsg;
                    fromProtoMsg(message: _119.QueryClientStateRequestProtoMsg): _119.QueryClientStateRequest;
                    toProto(message: _119.QueryClientStateRequest): Uint8Array;
                    toProtoMsg(message: _119.QueryClientStateRequest): _119.QueryClientStateRequestProtoMsg;
                };
                QueryClientStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _119.QueryClientStateResponse;
                    isSDK(o: any): o is _119.QueryClientStateResponseSDKType;
                    isAmino(o: any): o is _119.QueryClientStateResponseAmino;
                    encode(message: _119.QueryClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.QueryClientStateResponse;
                    fromJSON(object: any): _119.QueryClientStateResponse;
                    toJSON(message: _119.QueryClientStateResponse): unknown;
                    fromPartial(object: {
                        clientState?: {
                            $typeUrl?: "/google.protobuf.Any";
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _119.QueryClientStateResponse;
                    fromSDK(object: _119.QueryClientStateResponseSDKType): _119.QueryClientStateResponse;
                    toSDK(message: _119.QueryClientStateResponse): _119.QueryClientStateResponseSDKType;
                    fromAmino(object: _119.QueryClientStateResponseAmino): _119.QueryClientStateResponse;
                    toAmino(message: _119.QueryClientStateResponse): _119.QueryClientStateResponseAmino;
                    fromAminoMsg(object: _119.QueryClientStateResponseAminoMsg): _119.QueryClientStateResponse;
                    toAminoMsg(message: _119.QueryClientStateResponse): _119.QueryClientStateResponseAminoMsg;
                    fromProtoMsg(message: _119.QueryClientStateResponseProtoMsg): _119.QueryClientStateResponse;
                    toProto(message: _119.QueryClientStateResponse): Uint8Array;
                    toProtoMsg(message: _119.QueryClientStateResponse): _119.QueryClientStateResponseProtoMsg;
                };
                QueryClientStatesRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _119.QueryClientStatesRequest;
                    isSDK(o: any): o is _119.QueryClientStatesRequestSDKType;
                    isAmino(o: any): o is _119.QueryClientStatesRequestAmino;
                    encode(message: _119.QueryClientStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.QueryClientStatesRequest;
                    fromJSON(object: any): _119.QueryClientStatesRequest;
                    toJSON(message: _119.QueryClientStatesRequest): unknown;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: bigint;
                            limit?: bigint;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _119.QueryClientStatesRequest;
                    fromSDK(object: _119.QueryClientStatesRequestSDKType): _119.QueryClientStatesRequest;
                    toSDK(message: _119.QueryClientStatesRequest): _119.QueryClientStatesRequestSDKType;
                    fromAmino(object: _119.QueryClientStatesRequestAmino): _119.QueryClientStatesRequest;
                    toAmino(message: _119.QueryClientStatesRequest): _119.QueryClientStatesRequestAmino;
                    fromAminoMsg(object: _119.QueryClientStatesRequestAminoMsg): _119.QueryClientStatesRequest;
                    toAminoMsg(message: _119.QueryClientStatesRequest): _119.QueryClientStatesRequestAminoMsg;
                    fromProtoMsg(message: _119.QueryClientStatesRequestProtoMsg): _119.QueryClientStatesRequest;
                    toProto(message: _119.QueryClientStatesRequest): Uint8Array;
                    toProtoMsg(message: _119.QueryClientStatesRequest): _119.QueryClientStatesRequestProtoMsg;
                };
                QueryClientStatesResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _119.QueryClientStatesResponse;
                    isSDK(o: any): o is _119.QueryClientStatesResponseSDKType;
                    isAmino(o: any): o is _119.QueryClientStatesResponseAmino;
                    encode(message: _119.QueryClientStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.QueryClientStatesResponse;
                    fromJSON(object: any): _119.QueryClientStatesResponse;
                    toJSON(message: _119.QueryClientStatesResponse): unknown;
                    fromPartial(object: {
                        clientStates?: {
                            clientId?: string;
                            clientState?: {
                                $typeUrl?: "/google.protobuf.Any";
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: bigint;
                        };
                    }): _119.QueryClientStatesResponse;
                    fromSDK(object: _119.QueryClientStatesResponseSDKType): _119.QueryClientStatesResponse;
                    toSDK(message: _119.QueryClientStatesResponse): _119.QueryClientStatesResponseSDKType;
                    fromAmino(object: _119.QueryClientStatesResponseAmino): _119.QueryClientStatesResponse;
                    toAmino(message: _119.QueryClientStatesResponse): _119.QueryClientStatesResponseAmino;
                    fromAminoMsg(object: _119.QueryClientStatesResponseAminoMsg): _119.QueryClientStatesResponse;
                    toAminoMsg(message: _119.QueryClientStatesResponse): _119.QueryClientStatesResponseAminoMsg;
                    fromProtoMsg(message: _119.QueryClientStatesResponseProtoMsg): _119.QueryClientStatesResponse;
                    toProto(message: _119.QueryClientStatesResponse): Uint8Array;
                    toProtoMsg(message: _119.QueryClientStatesResponse): _119.QueryClientStatesResponseProtoMsg;
                };
                QueryConsensusStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _119.QueryConsensusStateRequest;
                    isSDK(o: any): o is _119.QueryConsensusStateRequestSDKType;
                    isAmino(o: any): o is _119.QueryConsensusStateRequestAmino;
                    encode(message: _119.QueryConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.QueryConsensusStateRequest;
                    fromJSON(object: any): _119.QueryConsensusStateRequest;
                    toJSON(message: _119.QueryConsensusStateRequest): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        revisionNumber?: bigint;
                        revisionHeight?: bigint;
                        latestHeight?: boolean;
                    }): _119.QueryConsensusStateRequest;
                    fromSDK(object: _119.QueryConsensusStateRequestSDKType): _119.QueryConsensusStateRequest;
                    toSDK(message: _119.QueryConsensusStateRequest): _119.QueryConsensusStateRequestSDKType;
                    fromAmino(object: _119.QueryConsensusStateRequestAmino): _119.QueryConsensusStateRequest;
                    toAmino(message: _119.QueryConsensusStateRequest): _119.QueryConsensusStateRequestAmino;
                    fromAminoMsg(object: _119.QueryConsensusStateRequestAminoMsg): _119.QueryConsensusStateRequest;
                    toAminoMsg(message: _119.QueryConsensusStateRequest): _119.QueryConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _119.QueryConsensusStateRequestProtoMsg): _119.QueryConsensusStateRequest;
                    toProto(message: _119.QueryConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _119.QueryConsensusStateRequest): _119.QueryConsensusStateRequestProtoMsg;
                };
                QueryConsensusStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _119.QueryConsensusStateResponse;
                    isSDK(o: any): o is _119.QueryConsensusStateResponseSDKType;
                    isAmino(o: any): o is _119.QueryConsensusStateResponseAmino;
                    encode(message: _119.QueryConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.QueryConsensusStateResponse;
                    fromJSON(object: any): _119.QueryConsensusStateResponse;
                    toJSON(message: _119.QueryConsensusStateResponse): unknown;
                    fromPartial(object: {
                        consensusState?: {
                            $typeUrl?: "/google.protobuf.Any";
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _119.QueryConsensusStateResponse;
                    fromSDK(object: _119.QueryConsensusStateResponseSDKType): _119.QueryConsensusStateResponse;
                    toSDK(message: _119.QueryConsensusStateResponse): _119.QueryConsensusStateResponseSDKType;
                    fromAmino(object: _119.QueryConsensusStateResponseAmino): _119.QueryConsensusStateResponse;
                    toAmino(message: _119.QueryConsensusStateResponse): _119.QueryConsensusStateResponseAmino;
                    fromAminoMsg(object: _119.QueryConsensusStateResponseAminoMsg): _119.QueryConsensusStateResponse;
                    toAminoMsg(message: _119.QueryConsensusStateResponse): _119.QueryConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _119.QueryConsensusStateResponseProtoMsg): _119.QueryConsensusStateResponse;
                    toProto(message: _119.QueryConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _119.QueryConsensusStateResponse): _119.QueryConsensusStateResponseProtoMsg;
                };
                QueryConsensusStatesRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _119.QueryConsensusStatesRequest;
                    isSDK(o: any): o is _119.QueryConsensusStatesRequestSDKType;
                    isAmino(o: any): o is _119.QueryConsensusStatesRequestAmino;
                    encode(message: _119.QueryConsensusStatesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.QueryConsensusStatesRequest;
                    fromJSON(object: any): _119.QueryConsensusStatesRequest;
                    toJSON(message: _119.QueryConsensusStatesRequest): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        pagination?: {
                            key?: Uint8Array;
                            offset?: bigint;
                            limit?: bigint;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _119.QueryConsensusStatesRequest;
                    fromSDK(object: _119.QueryConsensusStatesRequestSDKType): _119.QueryConsensusStatesRequest;
                    toSDK(message: _119.QueryConsensusStatesRequest): _119.QueryConsensusStatesRequestSDKType;
                    fromAmino(object: _119.QueryConsensusStatesRequestAmino): _119.QueryConsensusStatesRequest;
                    toAmino(message: _119.QueryConsensusStatesRequest): _119.QueryConsensusStatesRequestAmino;
                    fromAminoMsg(object: _119.QueryConsensusStatesRequestAminoMsg): _119.QueryConsensusStatesRequest;
                    toAminoMsg(message: _119.QueryConsensusStatesRequest): _119.QueryConsensusStatesRequestAminoMsg;
                    fromProtoMsg(message: _119.QueryConsensusStatesRequestProtoMsg): _119.QueryConsensusStatesRequest;
                    toProto(message: _119.QueryConsensusStatesRequest): Uint8Array;
                    toProtoMsg(message: _119.QueryConsensusStatesRequest): _119.QueryConsensusStatesRequestProtoMsg;
                };
                QueryConsensusStatesResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _119.QueryConsensusStatesResponse;
                    isSDK(o: any): o is _119.QueryConsensusStatesResponseSDKType;
                    isAmino(o: any): o is _119.QueryConsensusStatesResponseAmino;
                    encode(message: _119.QueryConsensusStatesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.QueryConsensusStatesResponse;
                    fromJSON(object: any): _119.QueryConsensusStatesResponse;
                    toJSON(message: _119.QueryConsensusStatesResponse): unknown;
                    fromPartial(object: {
                        consensusStates?: {
                            height?: {
                                revisionNumber?: bigint;
                                revisionHeight?: bigint;
                            };
                            consensusState?: {
                                $typeUrl?: "/google.protobuf.Any";
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: bigint;
                        };
                    }): _119.QueryConsensusStatesResponse;
                    fromSDK(object: _119.QueryConsensusStatesResponseSDKType): _119.QueryConsensusStatesResponse;
                    toSDK(message: _119.QueryConsensusStatesResponse): _119.QueryConsensusStatesResponseSDKType;
                    fromAmino(object: _119.QueryConsensusStatesResponseAmino): _119.QueryConsensusStatesResponse;
                    toAmino(message: _119.QueryConsensusStatesResponse): _119.QueryConsensusStatesResponseAmino;
                    fromAminoMsg(object: _119.QueryConsensusStatesResponseAminoMsg): _119.QueryConsensusStatesResponse;
                    toAminoMsg(message: _119.QueryConsensusStatesResponse): _119.QueryConsensusStatesResponseAminoMsg;
                    fromProtoMsg(message: _119.QueryConsensusStatesResponseProtoMsg): _119.QueryConsensusStatesResponse;
                    toProto(message: _119.QueryConsensusStatesResponse): Uint8Array;
                    toProtoMsg(message: _119.QueryConsensusStatesResponse): _119.QueryConsensusStatesResponseProtoMsg;
                };
                QueryClientStatusRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _119.QueryClientStatusRequest;
                    isSDK(o: any): o is _119.QueryClientStatusRequestSDKType;
                    isAmino(o: any): o is _119.QueryClientStatusRequestAmino;
                    encode(message: _119.QueryClientStatusRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.QueryClientStatusRequest;
                    fromJSON(object: any): _119.QueryClientStatusRequest;
                    toJSON(message: _119.QueryClientStatusRequest): unknown;
                    fromPartial(object: {
                        clientId?: string;
                    }): _119.QueryClientStatusRequest;
                    fromSDK(object: _119.QueryClientStatusRequestSDKType): _119.QueryClientStatusRequest;
                    toSDK(message: _119.QueryClientStatusRequest): _119.QueryClientStatusRequestSDKType;
                    fromAmino(object: _119.QueryClientStatusRequestAmino): _119.QueryClientStatusRequest;
                    toAmino(message: _119.QueryClientStatusRequest): _119.QueryClientStatusRequestAmino;
                    fromAminoMsg(object: _119.QueryClientStatusRequestAminoMsg): _119.QueryClientStatusRequest;
                    toAminoMsg(message: _119.QueryClientStatusRequest): _119.QueryClientStatusRequestAminoMsg;
                    fromProtoMsg(message: _119.QueryClientStatusRequestProtoMsg): _119.QueryClientStatusRequest;
                    toProto(message: _119.QueryClientStatusRequest): Uint8Array;
                    toProtoMsg(message: _119.QueryClientStatusRequest): _119.QueryClientStatusRequestProtoMsg;
                };
                QueryClientStatusResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _119.QueryClientStatusResponse;
                    isSDK(o: any): o is _119.QueryClientStatusResponseSDKType;
                    isAmino(o: any): o is _119.QueryClientStatusResponseAmino;
                    encode(message: _119.QueryClientStatusResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.QueryClientStatusResponse;
                    fromJSON(object: any): _119.QueryClientStatusResponse;
                    toJSON(message: _119.QueryClientStatusResponse): unknown;
                    fromPartial(object: {
                        status?: string;
                    }): _119.QueryClientStatusResponse;
                    fromSDK(object: _119.QueryClientStatusResponseSDKType): _119.QueryClientStatusResponse;
                    toSDK(message: _119.QueryClientStatusResponse): _119.QueryClientStatusResponseSDKType;
                    fromAmino(object: _119.QueryClientStatusResponseAmino): _119.QueryClientStatusResponse;
                    toAmino(message: _119.QueryClientStatusResponse): _119.QueryClientStatusResponseAmino;
                    fromAminoMsg(object: _119.QueryClientStatusResponseAminoMsg): _119.QueryClientStatusResponse;
                    toAminoMsg(message: _119.QueryClientStatusResponse): _119.QueryClientStatusResponseAminoMsg;
                    fromProtoMsg(message: _119.QueryClientStatusResponseProtoMsg): _119.QueryClientStatusResponse;
                    toProto(message: _119.QueryClientStatusResponse): Uint8Array;
                    toProtoMsg(message: _119.QueryClientStatusResponse): _119.QueryClientStatusResponseProtoMsg;
                };
                QueryClientParamsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _119.QueryClientParamsRequest;
                    isSDK(o: any): o is _119.QueryClientParamsRequestSDKType;
                    isAmino(o: any): o is _119.QueryClientParamsRequestAmino;
                    encode(_: _119.QueryClientParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.QueryClientParamsRequest;
                    fromJSON(_: any): _119.QueryClientParamsRequest;
                    toJSON(_: _119.QueryClientParamsRequest): unknown;
                    fromPartial(_: {}): _119.QueryClientParamsRequest;
                    fromSDK(_: _119.QueryClientParamsRequestSDKType): _119.QueryClientParamsRequest;
                    toSDK(_: _119.QueryClientParamsRequest): _119.QueryClientParamsRequestSDKType;
                    fromAmino(_: _119.QueryClientParamsRequestAmino): _119.QueryClientParamsRequest;
                    toAmino(_: _119.QueryClientParamsRequest): _119.QueryClientParamsRequestAmino;
                    fromAminoMsg(object: _119.QueryClientParamsRequestAminoMsg): _119.QueryClientParamsRequest;
                    toAminoMsg(message: _119.QueryClientParamsRequest): _119.QueryClientParamsRequestAminoMsg;
                    fromProtoMsg(message: _119.QueryClientParamsRequestProtoMsg): _119.QueryClientParamsRequest;
                    toProto(message: _119.QueryClientParamsRequest): Uint8Array;
                    toProtoMsg(message: _119.QueryClientParamsRequest): _119.QueryClientParamsRequestProtoMsg;
                };
                QueryClientParamsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _119.QueryClientParamsResponse;
                    isSDK(o: any): o is _119.QueryClientParamsResponseSDKType;
                    isAmino(o: any): o is _119.QueryClientParamsResponseAmino;
                    encode(message: _119.QueryClientParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.QueryClientParamsResponse;
                    fromJSON(object: any): _119.QueryClientParamsResponse;
                    toJSON(message: _119.QueryClientParamsResponse): unknown;
                    fromPartial(object: {
                        params?: {
                            allowedClients?: string[];
                        };
                    }): _119.QueryClientParamsResponse;
                    fromSDK(object: _119.QueryClientParamsResponseSDKType): _119.QueryClientParamsResponse;
                    toSDK(message: _119.QueryClientParamsResponse): _119.QueryClientParamsResponseSDKType;
                    fromAmino(object: _119.QueryClientParamsResponseAmino): _119.QueryClientParamsResponse;
                    toAmino(message: _119.QueryClientParamsResponse): _119.QueryClientParamsResponseAmino;
                    fromAminoMsg(object: _119.QueryClientParamsResponseAminoMsg): _119.QueryClientParamsResponse;
                    toAminoMsg(message: _119.QueryClientParamsResponse): _119.QueryClientParamsResponseAminoMsg;
                    fromProtoMsg(message: _119.QueryClientParamsResponseProtoMsg): _119.QueryClientParamsResponse;
                    toProto(message: _119.QueryClientParamsResponse): Uint8Array;
                    toProtoMsg(message: _119.QueryClientParamsResponse): _119.QueryClientParamsResponseProtoMsg;
                };
                QueryUpgradedClientStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _119.QueryUpgradedClientStateRequest;
                    isSDK(o: any): o is _119.QueryUpgradedClientStateRequestSDKType;
                    isAmino(o: any): o is _119.QueryUpgradedClientStateRequestAmino;
                    encode(_: _119.QueryUpgradedClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.QueryUpgradedClientStateRequest;
                    fromJSON(_: any): _119.QueryUpgradedClientStateRequest;
                    toJSON(_: _119.QueryUpgradedClientStateRequest): unknown;
                    fromPartial(_: {}): _119.QueryUpgradedClientStateRequest;
                    fromSDK(_: _119.QueryUpgradedClientStateRequestSDKType): _119.QueryUpgradedClientStateRequest;
                    toSDK(_: _119.QueryUpgradedClientStateRequest): _119.QueryUpgradedClientStateRequestSDKType;
                    fromAmino(_: _119.QueryUpgradedClientStateRequestAmino): _119.QueryUpgradedClientStateRequest;
                    toAmino(_: _119.QueryUpgradedClientStateRequest): _119.QueryUpgradedClientStateRequestAmino;
                    fromAminoMsg(object: _119.QueryUpgradedClientStateRequestAminoMsg): _119.QueryUpgradedClientStateRequest;
                    toAminoMsg(message: _119.QueryUpgradedClientStateRequest): _119.QueryUpgradedClientStateRequestAminoMsg;
                    fromProtoMsg(message: _119.QueryUpgradedClientStateRequestProtoMsg): _119.QueryUpgradedClientStateRequest;
                    toProto(message: _119.QueryUpgradedClientStateRequest): Uint8Array;
                    toProtoMsg(message: _119.QueryUpgradedClientStateRequest): _119.QueryUpgradedClientStateRequestProtoMsg;
                };
                QueryUpgradedClientStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _119.QueryUpgradedClientStateResponse;
                    isSDK(o: any): o is _119.QueryUpgradedClientStateResponseSDKType;
                    isAmino(o: any): o is _119.QueryUpgradedClientStateResponseAmino;
                    encode(message: _119.QueryUpgradedClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.QueryUpgradedClientStateResponse;
                    fromJSON(object: any): _119.QueryUpgradedClientStateResponse;
                    toJSON(message: _119.QueryUpgradedClientStateResponse): unknown;
                    fromPartial(object: {
                        upgradedClientState?: {
                            $typeUrl?: "/google.protobuf.Any";
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _119.QueryUpgradedClientStateResponse;
                    fromSDK(object: _119.QueryUpgradedClientStateResponseSDKType): _119.QueryUpgradedClientStateResponse;
                    toSDK(message: _119.QueryUpgradedClientStateResponse): _119.QueryUpgradedClientStateResponseSDKType;
                    fromAmino(object: _119.QueryUpgradedClientStateResponseAmino): _119.QueryUpgradedClientStateResponse;
                    toAmino(message: _119.QueryUpgradedClientStateResponse): _119.QueryUpgradedClientStateResponseAmino;
                    fromAminoMsg(object: _119.QueryUpgradedClientStateResponseAminoMsg): _119.QueryUpgradedClientStateResponse;
                    toAminoMsg(message: _119.QueryUpgradedClientStateResponse): _119.QueryUpgradedClientStateResponseAminoMsg;
                    fromProtoMsg(message: _119.QueryUpgradedClientStateResponseProtoMsg): _119.QueryUpgradedClientStateResponse;
                    toProto(message: _119.QueryUpgradedClientStateResponse): Uint8Array;
                    toProtoMsg(message: _119.QueryUpgradedClientStateResponse): _119.QueryUpgradedClientStateResponseProtoMsg;
                };
                QueryUpgradedConsensusStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _119.QueryUpgradedConsensusStateRequest;
                    isSDK(o: any): o is _119.QueryUpgradedConsensusStateRequestSDKType;
                    isAmino(o: any): o is _119.QueryUpgradedConsensusStateRequestAmino;
                    encode(_: _119.QueryUpgradedConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.QueryUpgradedConsensusStateRequest;
                    fromJSON(_: any): _119.QueryUpgradedConsensusStateRequest;
                    toJSON(_: _119.QueryUpgradedConsensusStateRequest): unknown;
                    fromPartial(_: {}): _119.QueryUpgradedConsensusStateRequest;
                    fromSDK(_: _119.QueryUpgradedConsensusStateRequestSDKType): _119.QueryUpgradedConsensusStateRequest;
                    toSDK(_: _119.QueryUpgradedConsensusStateRequest): _119.QueryUpgradedConsensusStateRequestSDKType;
                    fromAmino(_: _119.QueryUpgradedConsensusStateRequestAmino): _119.QueryUpgradedConsensusStateRequest;
                    toAmino(_: _119.QueryUpgradedConsensusStateRequest): _119.QueryUpgradedConsensusStateRequestAmino;
                    fromAminoMsg(object: _119.QueryUpgradedConsensusStateRequestAminoMsg): _119.QueryUpgradedConsensusStateRequest;
                    toAminoMsg(message: _119.QueryUpgradedConsensusStateRequest): _119.QueryUpgradedConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _119.QueryUpgradedConsensusStateRequestProtoMsg): _119.QueryUpgradedConsensusStateRequest;
                    toProto(message: _119.QueryUpgradedConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _119.QueryUpgradedConsensusStateRequest): _119.QueryUpgradedConsensusStateRequestProtoMsg;
                };
                QueryUpgradedConsensusStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _119.QueryUpgradedConsensusStateResponse;
                    isSDK(o: any): o is _119.QueryUpgradedConsensusStateResponseSDKType;
                    isAmino(o: any): o is _119.QueryUpgradedConsensusStateResponseAmino;
                    encode(message: _119.QueryUpgradedConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _119.QueryUpgradedConsensusStateResponse;
                    fromJSON(object: any): _119.QueryUpgradedConsensusStateResponse;
                    toJSON(message: _119.QueryUpgradedConsensusStateResponse): unknown;
                    fromPartial(object: {
                        upgradedConsensusState?: {
                            $typeUrl?: "/google.protobuf.Any";
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _119.QueryUpgradedConsensusStateResponse;
                    fromSDK(object: _119.QueryUpgradedConsensusStateResponseSDKType): _119.QueryUpgradedConsensusStateResponse;
                    toSDK(message: _119.QueryUpgradedConsensusStateResponse): _119.QueryUpgradedConsensusStateResponseSDKType;
                    fromAmino(object: _119.QueryUpgradedConsensusStateResponseAmino): _119.QueryUpgradedConsensusStateResponse;
                    toAmino(message: _119.QueryUpgradedConsensusStateResponse): _119.QueryUpgradedConsensusStateResponseAmino;
                    fromAminoMsg(object: _119.QueryUpgradedConsensusStateResponseAminoMsg): _119.QueryUpgradedConsensusStateResponse;
                    toAminoMsg(message: _119.QueryUpgradedConsensusStateResponse): _119.QueryUpgradedConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _119.QueryUpgradedConsensusStateResponseProtoMsg): _119.QueryUpgradedConsensusStateResponse;
                    toProto(message: _119.QueryUpgradedConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _119.QueryUpgradedConsensusStateResponse): _119.QueryUpgradedConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _118.GenesisState;
                    isSDK(o: any): o is _118.GenesisStateSDKType;
                    isAmino(o: any): o is _118.GenesisStateAmino;
                    encode(message: _118.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _118.GenesisState;
                    fromJSON(object: any): _118.GenesisState;
                    toJSON(message: _118.GenesisState): unknown;
                    fromPartial(object: {
                        clients?: {
                            clientId?: string;
                            clientState?: {
                                $typeUrl?: "/google.protobuf.Any";
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                        clientsConsensus?: {
                            clientId?: string;
                            consensusStates?: {
                                height?: {
                                    revisionNumber?: bigint;
                                    revisionHeight?: bigint;
                                };
                                consensusState?: {
                                    $typeUrl?: "/google.protobuf.Any";
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            }[];
                        }[];
                        clientsMetadata?: {
                            clientId?: string;
                            clientMetadata?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                            }[];
                        }[];
                        params?: {
                            allowedClients?: string[];
                        };
                        createLocalhost?: boolean;
                        nextClientSequence?: bigint;
                    }): _118.GenesisState;
                    fromSDK(object: _118.GenesisStateSDKType): _118.GenesisState;
                    toSDK(message: _118.GenesisState): _118.GenesisStateSDKType;
                    fromAmino(object: _118.GenesisStateAmino): _118.GenesisState;
                    toAmino(message: _118.GenesisState): _118.GenesisStateAmino;
                    fromAminoMsg(object: _118.GenesisStateAminoMsg): _118.GenesisState;
                    toAminoMsg(message: _118.GenesisState): _118.GenesisStateAminoMsg;
                    fromProtoMsg(message: _118.GenesisStateProtoMsg): _118.GenesisState;
                    toProto(message: _118.GenesisState): Uint8Array;
                    toProtoMsg(message: _118.GenesisState): _118.GenesisStateProtoMsg;
                };
                GenesisMetadata: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _118.GenesisMetadata;
                    isSDK(o: any): o is _118.GenesisMetadataSDKType;
                    isAmino(o: any): o is _118.GenesisMetadataAmino;
                    encode(message: _118.GenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _118.GenesisMetadata;
                    fromJSON(object: any): _118.GenesisMetadata;
                    toJSON(message: _118.GenesisMetadata): unknown;
                    fromPartial(object: {
                        key?: Uint8Array;
                        value?: Uint8Array;
                    }): _118.GenesisMetadata;
                    fromSDK(object: _118.GenesisMetadataSDKType): _118.GenesisMetadata;
                    toSDK(message: _118.GenesisMetadata): _118.GenesisMetadataSDKType;
                    fromAmino(object: _118.GenesisMetadataAmino): _118.GenesisMetadata;
                    toAmino(message: _118.GenesisMetadata): _118.GenesisMetadataAmino;
                    fromAminoMsg(object: _118.GenesisMetadataAminoMsg): _118.GenesisMetadata;
                    toAminoMsg(message: _118.GenesisMetadata): _118.GenesisMetadataAminoMsg;
                    fromProtoMsg(message: _118.GenesisMetadataProtoMsg): _118.GenesisMetadata;
                    toProto(message: _118.GenesisMetadata): Uint8Array;
                    toProtoMsg(message: _118.GenesisMetadata): _118.GenesisMetadataProtoMsg;
                };
                IdentifiedGenesisMetadata: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _118.IdentifiedGenesisMetadata;
                    isSDK(o: any): o is _118.IdentifiedGenesisMetadataSDKType;
                    isAmino(o: any): o is _118.IdentifiedGenesisMetadataAmino;
                    encode(message: _118.IdentifiedGenesisMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _118.IdentifiedGenesisMetadata;
                    fromJSON(object: any): _118.IdentifiedGenesisMetadata;
                    toJSON(message: _118.IdentifiedGenesisMetadata): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        clientMetadata?: {
                            key?: Uint8Array;
                            value?: Uint8Array;
                        }[];
                    }): _118.IdentifiedGenesisMetadata;
                    fromSDK(object: _118.IdentifiedGenesisMetadataSDKType): _118.IdentifiedGenesisMetadata;
                    toSDK(message: _118.IdentifiedGenesisMetadata): _118.IdentifiedGenesisMetadataSDKType;
                    fromAmino(object: _118.IdentifiedGenesisMetadataAmino): _118.IdentifiedGenesisMetadata;
                    toAmino(message: _118.IdentifiedGenesisMetadata): _118.IdentifiedGenesisMetadataAmino;
                    fromAminoMsg(object: _118.IdentifiedGenesisMetadataAminoMsg): _118.IdentifiedGenesisMetadata;
                    toAminoMsg(message: _118.IdentifiedGenesisMetadata): _118.IdentifiedGenesisMetadataAminoMsg;
                    fromProtoMsg(message: _118.IdentifiedGenesisMetadataProtoMsg): _118.IdentifiedGenesisMetadata;
                    toProto(message: _118.IdentifiedGenesisMetadata): Uint8Array;
                    toProtoMsg(message: _118.IdentifiedGenesisMetadata): _118.IdentifiedGenesisMetadataProtoMsg;
                };
                IdentifiedClientState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _117.IdentifiedClientState;
                    isSDK(o: any): o is _117.IdentifiedClientStateSDKType;
                    isAmino(o: any): o is _117.IdentifiedClientStateAmino;
                    encode(message: _117.IdentifiedClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _117.IdentifiedClientState;
                    fromJSON(object: any): _117.IdentifiedClientState;
                    toJSON(message: _117.IdentifiedClientState): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        clientState?: {
                            $typeUrl?: "/google.protobuf.Any";
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _117.IdentifiedClientState;
                    fromSDK(object: _117.IdentifiedClientStateSDKType): _117.IdentifiedClientState;
                    toSDK(message: _117.IdentifiedClientState): _117.IdentifiedClientStateSDKType;
                    fromAmino(object: _117.IdentifiedClientStateAmino): _117.IdentifiedClientState;
                    toAmino(message: _117.IdentifiedClientState): _117.IdentifiedClientStateAmino;
                    fromAminoMsg(object: _117.IdentifiedClientStateAminoMsg): _117.IdentifiedClientState;
                    toAminoMsg(message: _117.IdentifiedClientState): _117.IdentifiedClientStateAminoMsg;
                    fromProtoMsg(message: _117.IdentifiedClientStateProtoMsg): _117.IdentifiedClientState;
                    toProto(message: _117.IdentifiedClientState): Uint8Array;
                    toProtoMsg(message: _117.IdentifiedClientState): _117.IdentifiedClientStateProtoMsg;
                };
                ConsensusStateWithHeight: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _117.ConsensusStateWithHeight;
                    isSDK(o: any): o is _117.ConsensusStateWithHeightSDKType;
                    isAmino(o: any): o is _117.ConsensusStateWithHeightAmino;
                    encode(message: _117.ConsensusStateWithHeight, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _117.ConsensusStateWithHeight;
                    fromJSON(object: any): _117.ConsensusStateWithHeight;
                    toJSON(message: _117.ConsensusStateWithHeight): unknown;
                    fromPartial(object: {
                        height?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                        consensusState?: {
                            $typeUrl?: "/google.protobuf.Any";
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _117.ConsensusStateWithHeight;
                    fromSDK(object: _117.ConsensusStateWithHeightSDKType): _117.ConsensusStateWithHeight;
                    toSDK(message: _117.ConsensusStateWithHeight): _117.ConsensusStateWithHeightSDKType;
                    fromAmino(object: _117.ConsensusStateWithHeightAmino): _117.ConsensusStateWithHeight;
                    toAmino(message: _117.ConsensusStateWithHeight): _117.ConsensusStateWithHeightAmino;
                    fromAminoMsg(object: _117.ConsensusStateWithHeightAminoMsg): _117.ConsensusStateWithHeight;
                    toAminoMsg(message: _117.ConsensusStateWithHeight): _117.ConsensusStateWithHeightAminoMsg;
                    fromProtoMsg(message: _117.ConsensusStateWithHeightProtoMsg): _117.ConsensusStateWithHeight;
                    toProto(message: _117.ConsensusStateWithHeight): Uint8Array;
                    toProtoMsg(message: _117.ConsensusStateWithHeight): _117.ConsensusStateWithHeightProtoMsg;
                };
                ClientConsensusStates: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _117.ClientConsensusStates;
                    isSDK(o: any): o is _117.ClientConsensusStatesSDKType;
                    isAmino(o: any): o is _117.ClientConsensusStatesAmino;
                    encode(message: _117.ClientConsensusStates, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _117.ClientConsensusStates;
                    fromJSON(object: any): _117.ClientConsensusStates;
                    toJSON(message: _117.ClientConsensusStates): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        consensusStates?: {
                            height?: {
                                revisionNumber?: bigint;
                                revisionHeight?: bigint;
                            };
                            consensusState?: {
                                $typeUrl?: "/google.protobuf.Any";
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        }[];
                    }): _117.ClientConsensusStates;
                    fromSDK(object: _117.ClientConsensusStatesSDKType): _117.ClientConsensusStates;
                    toSDK(message: _117.ClientConsensusStates): _117.ClientConsensusStatesSDKType;
                    fromAmino(object: _117.ClientConsensusStatesAmino): _117.ClientConsensusStates;
                    toAmino(message: _117.ClientConsensusStates): _117.ClientConsensusStatesAmino;
                    fromAminoMsg(object: _117.ClientConsensusStatesAminoMsg): _117.ClientConsensusStates;
                    toAminoMsg(message: _117.ClientConsensusStates): _117.ClientConsensusStatesAminoMsg;
                    fromProtoMsg(message: _117.ClientConsensusStatesProtoMsg): _117.ClientConsensusStates;
                    toProto(message: _117.ClientConsensusStates): Uint8Array;
                    toProtoMsg(message: _117.ClientConsensusStates): _117.ClientConsensusStatesProtoMsg;
                };
                ClientUpdateProposal: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _117.ClientUpdateProposal;
                    isSDK(o: any): o is _117.ClientUpdateProposalSDKType;
                    isAmino(o: any): o is _117.ClientUpdateProposalAmino;
                    encode(message: _117.ClientUpdateProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _117.ClientUpdateProposal;
                    fromJSON(object: any): _117.ClientUpdateProposal;
                    toJSON(message: _117.ClientUpdateProposal): unknown;
                    fromPartial(object: {
                        $typeUrl?: "/ibc.core.client.v1.ClientUpdateProposal";
                        title?: string;
                        description?: string;
                        subjectClientId?: string;
                        substituteClientId?: string;
                    }): _117.ClientUpdateProposal;
                    fromSDK(object: _117.ClientUpdateProposalSDKType): _117.ClientUpdateProposal;
                    toSDK(message: _117.ClientUpdateProposal): _117.ClientUpdateProposalSDKType;
                    fromAmino(object: _117.ClientUpdateProposalAmino): _117.ClientUpdateProposal;
                    toAmino(message: _117.ClientUpdateProposal): _117.ClientUpdateProposalAmino;
                    fromAminoMsg(object: _117.ClientUpdateProposalAminoMsg): _117.ClientUpdateProposal;
                    toAminoMsg(message: _117.ClientUpdateProposal): _117.ClientUpdateProposalAminoMsg;
                    fromProtoMsg(message: _117.ClientUpdateProposalProtoMsg): _117.ClientUpdateProposal;
                    toProto(message: _117.ClientUpdateProposal): Uint8Array;
                    toProtoMsg(message: _117.ClientUpdateProposal): _117.ClientUpdateProposalProtoMsg;
                };
                UpgradeProposal: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _117.UpgradeProposal;
                    isSDK(o: any): o is _117.UpgradeProposalSDKType;
                    isAmino(o: any): o is _117.UpgradeProposalAmino;
                    encode(message: _117.UpgradeProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _117.UpgradeProposal;
                    fromJSON(object: any): _117.UpgradeProposal;
                    toJSON(message: _117.UpgradeProposal): unknown;
                    fromPartial(object: {
                        $typeUrl?: "/ibc.core.client.v1.UpgradeProposal";
                        title?: string;
                        description?: string;
                        plan?: {
                            name?: string;
                            time?: Date;
                            height?: bigint;
                            info?: string;
                            upgradedClientState?: {
                                $typeUrl?: "/google.protobuf.Any";
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        upgradedClientState?: {
                            $typeUrl?: "/google.protobuf.Any";
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _117.UpgradeProposal;
                    fromSDK(object: _117.UpgradeProposalSDKType): _117.UpgradeProposal;
                    toSDK(message: _117.UpgradeProposal): _117.UpgradeProposalSDKType;
                    fromAmino(object: _117.UpgradeProposalAmino): _117.UpgradeProposal;
                    toAmino(message: _117.UpgradeProposal): _117.UpgradeProposalAmino;
                    fromAminoMsg(object: _117.UpgradeProposalAminoMsg): _117.UpgradeProposal;
                    toAminoMsg(message: _117.UpgradeProposal): _117.UpgradeProposalAminoMsg;
                    fromProtoMsg(message: _117.UpgradeProposalProtoMsg): _117.UpgradeProposal;
                    toProto(message: _117.UpgradeProposal): Uint8Array;
                    toProtoMsg(message: _117.UpgradeProposal): _117.UpgradeProposalProtoMsg;
                };
                Height: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _117.Height;
                    isSDK(o: any): o is _117.HeightSDKType;
                    isAmino(o: any): o is _117.HeightAmino;
                    encode(message: _117.Height, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _117.Height;
                    fromJSON(object: any): _117.Height;
                    toJSON(message: _117.Height): unknown;
                    fromPartial(object: {
                        revisionNumber?: bigint;
                        revisionHeight?: bigint;
                    }): _117.Height;
                    fromSDK(object: _117.HeightSDKType): _117.Height;
                    toSDK(message: _117.Height): _117.HeightSDKType;
                    fromAmino(object: _117.HeightAmino): _117.Height;
                    toAmino(message: _117.Height): _117.HeightAmino;
                    fromAminoMsg(object: _117.HeightAminoMsg): _117.Height;
                    toAminoMsg(message: _117.Height): _117.HeightAminoMsg;
                    fromProtoMsg(message: _117.HeightProtoMsg): _117.Height;
                    toProto(message: _117.Height): Uint8Array;
                    toProtoMsg(message: _117.Height): _117.HeightProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _117.Params;
                    isSDK(o: any): o is _117.ParamsSDKType;
                    isAmino(o: any): o is _117.ParamsAmino;
                    encode(message: _117.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _117.Params;
                    fromJSON(object: any): _117.Params;
                    toJSON(message: _117.Params): unknown;
                    fromPartial(object: {
                        allowedClients?: string[];
                    }): _117.Params;
                    fromSDK(object: _117.ParamsSDKType): _117.Params;
                    toSDK(message: _117.Params): _117.ParamsSDKType;
                    fromAmino(object: _117.ParamsAmino): _117.Params;
                    toAmino(message: _117.Params): _117.ParamsAmino;
                    fromAminoMsg(object: _117.ParamsAminoMsg): _117.Params;
                    toAminoMsg(message: _117.Params): _117.ParamsAminoMsg;
                    fromProtoMsg(message: _117.ParamsProtoMsg): _117.Params;
                    toProto(message: _117.Params): Uint8Array;
                    toProtoMsg(message: _117.Params): _117.ParamsProtoMsg;
                };
            };
        }
        namespace commitment {
            const v1: {
                MerkleRoot: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _121.MerkleRoot;
                    isSDK(o: any): o is _121.MerkleRootSDKType;
                    isAmino(o: any): o is _121.MerkleRootAmino;
                    encode(message: _121.MerkleRoot, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _121.MerkleRoot;
                    fromJSON(object: any): _121.MerkleRoot;
                    toJSON(message: _121.MerkleRoot): unknown;
                    fromPartial(object: {
                        hash?: Uint8Array;
                    }): _121.MerkleRoot;
                    fromSDK(object: _121.MerkleRootSDKType): _121.MerkleRoot;
                    toSDK(message: _121.MerkleRoot): _121.MerkleRootSDKType;
                    fromAmino(object: _121.MerkleRootAmino): _121.MerkleRoot;
                    toAmino(message: _121.MerkleRoot): _121.MerkleRootAmino;
                    fromAminoMsg(object: _121.MerkleRootAminoMsg): _121.MerkleRoot;
                    toAminoMsg(message: _121.MerkleRoot): _121.MerkleRootAminoMsg;
                    fromProtoMsg(message: _121.MerkleRootProtoMsg): _121.MerkleRoot;
                    toProto(message: _121.MerkleRoot): Uint8Array;
                    toProtoMsg(message: _121.MerkleRoot): _121.MerkleRootProtoMsg;
                };
                MerklePrefix: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _121.MerklePrefix;
                    isSDK(o: any): o is _121.MerklePrefixSDKType;
                    isAmino(o: any): o is _121.MerklePrefixAmino;
                    encode(message: _121.MerklePrefix, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _121.MerklePrefix;
                    fromJSON(object: any): _121.MerklePrefix;
                    toJSON(message: _121.MerklePrefix): unknown;
                    fromPartial(object: {
                        keyPrefix?: Uint8Array;
                    }): _121.MerklePrefix;
                    fromSDK(object: _121.MerklePrefixSDKType): _121.MerklePrefix;
                    toSDK(message: _121.MerklePrefix): _121.MerklePrefixSDKType;
                    fromAmino(object: _121.MerklePrefixAmino): _121.MerklePrefix;
                    toAmino(message: _121.MerklePrefix): _121.MerklePrefixAmino;
                    fromAminoMsg(object: _121.MerklePrefixAminoMsg): _121.MerklePrefix;
                    toAminoMsg(message: _121.MerklePrefix): _121.MerklePrefixAminoMsg;
                    fromProtoMsg(message: _121.MerklePrefixProtoMsg): _121.MerklePrefix;
                    toProto(message: _121.MerklePrefix): Uint8Array;
                    toProtoMsg(message: _121.MerklePrefix): _121.MerklePrefixProtoMsg;
                };
                MerklePath: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _121.MerklePath;
                    isSDK(o: any): o is _121.MerklePathSDKType;
                    isAmino(o: any): o is _121.MerklePathAmino;
                    encode(message: _121.MerklePath, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _121.MerklePath;
                    fromJSON(object: any): _121.MerklePath;
                    toJSON(message: _121.MerklePath): unknown;
                    fromPartial(object: {
                        keyPath?: string[];
                    }): _121.MerklePath;
                    fromSDK(object: _121.MerklePathSDKType): _121.MerklePath;
                    toSDK(message: _121.MerklePath): _121.MerklePathSDKType;
                    fromAmino(object: _121.MerklePathAmino): _121.MerklePath;
                    toAmino(message: _121.MerklePath): _121.MerklePathAmino;
                    fromAminoMsg(object: _121.MerklePathAminoMsg): _121.MerklePath;
                    toAminoMsg(message: _121.MerklePath): _121.MerklePathAminoMsg;
                    fromProtoMsg(message: _121.MerklePathProtoMsg): _121.MerklePath;
                    toProto(message: _121.MerklePath): Uint8Array;
                    toProtoMsg(message: _121.MerklePath): _121.MerklePathProtoMsg;
                };
                MerkleProof: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _121.MerkleProof;
                    isSDK(o: any): o is _121.MerkleProofSDKType;
                    isAmino(o: any): o is _121.MerkleProofAmino;
                    encode(message: _121.MerkleProof, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _121.MerkleProof;
                    fromJSON(object: any): _121.MerkleProof;
                    toJSON(message: _121.MerkleProof): unknown;
                    fromPartial(object: {
                        proofs?: {
                            exist?: {
                                key?: Uint8Array;
                                value?: Uint8Array;
                                leaf?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prehashKey?: import("../confio/proofs").HashOp;
                                    prehashValue?: import("../confio/proofs").HashOp;
                                    length?: import("../confio/proofs").LengthOp;
                                    prefix?: Uint8Array;
                                };
                                path?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                            nonexist?: {
                                key?: Uint8Array;
                                left?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                                right?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                    leaf?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prehashKey?: import("../confio/proofs").HashOp;
                                        prehashValue?: import("../confio/proofs").HashOp;
                                        length?: import("../confio/proofs").LengthOp;
                                        prefix?: Uint8Array;
                                    };
                                    path?: {
                                        hash?: import("../confio/proofs").HashOp;
                                        prefix?: Uint8Array;
                                        suffix?: Uint8Array;
                                    }[];
                                };
                            };
                            batch?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prefix?: Uint8Array;
                                            suffix?: Uint8Array;
                                        }[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prefix?: Uint8Array;
                                                suffix?: Uint8Array;
                                            }[];
                                        };
                                    };
                                }[];
                            };
                            compressed?: {
                                entries?: {
                                    exist?: {
                                        key?: Uint8Array;
                                        value?: Uint8Array;
                                        leaf?: {
                                            hash?: import("../confio/proofs").HashOp;
                                            prehashKey?: import("../confio/proofs").HashOp;
                                            prehashValue?: import("../confio/proofs").HashOp;
                                            length?: import("../confio/proofs").LengthOp;
                                            prefix?: Uint8Array;
                                        };
                                        path?: number[];
                                    };
                                    nonexist?: {
                                        key?: Uint8Array;
                                        left?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                        right?: {
                                            key?: Uint8Array;
                                            value?: Uint8Array;
                                            leaf?: {
                                                hash?: import("../confio/proofs").HashOp;
                                                prehashKey?: import("../confio/proofs").HashOp;
                                                prehashValue?: import("../confio/proofs").HashOp;
                                                length?: import("../confio/proofs").LengthOp;
                                                prefix?: Uint8Array;
                                            };
                                            path?: number[];
                                        };
                                    };
                                }[];
                                lookupInners?: {
                                    hash?: import("../confio/proofs").HashOp;
                                    prefix?: Uint8Array;
                                    suffix?: Uint8Array;
                                }[];
                            };
                        }[];
                    }): _121.MerkleProof;
                    fromSDK(object: _121.MerkleProofSDKType): _121.MerkleProof;
                    toSDK(message: _121.MerkleProof): _121.MerkleProofSDKType;
                    fromAmino(object: _121.MerkleProofAmino): _121.MerkleProof;
                    toAmino(message: _121.MerkleProof): _121.MerkleProofAmino;
                    fromAminoMsg(object: _121.MerkleProofAminoMsg): _121.MerkleProof;
                    toAminoMsg(message: _121.MerkleProof): _121.MerkleProofAminoMsg;
                    fromProtoMsg(message: _121.MerkleProofProtoMsg): _121.MerkleProof;
                    toProto(message: _121.MerkleProof): Uint8Array;
                    toProtoMsg(message: _121.MerkleProof): _121.MerkleProofProtoMsg;
                };
            };
        }
        namespace connection {
            const v1: {
                MsgClientImpl: typeof _270.MsgClientImpl;
                createClientImpl: (rpc: import("..").TxRpc) => _270.MsgClientImpl;
                QueryClientImpl: typeof _265.QueryClientImpl;
                createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                    useConnection: <TData = _124.QueryConnectionResponse>({ request, options }: _265.UseConnectionQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
                    useConnections: <TData_1 = _124.QueryConnectionsResponse>({ request, options }: _265.UseConnectionsQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
                    useClientConnections: <TData_2 = _124.QueryClientConnectionsResponse>({ request, options }: _265.UseClientConnectionsQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
                    useConnectionClientState: <TData_3 = _124.QueryConnectionClientStateResponse>({ request, options }: _265.UseConnectionClientStateQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
                    useConnectionConsensusState: <TData_4 = _124.QueryConnectionConsensusStateResponse>({ request, options }: _265.UseConnectionConsensusStateQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
                };
                createRpcQueryMobxStores: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                    QueryConnectionStore: {
                        new (): {
                            store: import("..").QueryStore<_124.QueryConnectionRequest, _124.QueryConnectionResponse>;
                            connection(request: _124.QueryConnectionRequest): import("..").MobxResponse<_124.QueryConnectionResponse>;
                        };
                    };
                    QueryConnectionsStore: {
                        new (): {
                            store: import("..").QueryStore<_124.QueryConnectionsRequest, _124.QueryConnectionsResponse>;
                            connections(request: _124.QueryConnectionsRequest): import("..").MobxResponse<_124.QueryConnectionsResponse>;
                        };
                    };
                    QueryClientConnectionsStore: {
                        new (): {
                            store: import("..").QueryStore<_124.QueryClientConnectionsRequest, _124.QueryClientConnectionsResponse>;
                            clientConnections(request: _124.QueryClientConnectionsRequest): import("..").MobxResponse<_124.QueryClientConnectionsResponse>;
                        };
                    };
                    QueryConnectionClientStateStore: {
                        new (): {
                            store: import("..").QueryStore<_124.QueryConnectionClientStateRequest, _124.QueryConnectionClientStateResponse>;
                            connectionClientState(request: _124.QueryConnectionClientStateRequest): import("..").MobxResponse<_124.QueryConnectionClientStateResponse>;
                        };
                    };
                    QueryConnectionConsensusStateStore: {
                        new (): {
                            store: import("..").QueryStore<_124.QueryConnectionConsensusStateRequest, _124.QueryConnectionConsensusStateResponse>;
                            connectionConsensusState(request: _124.QueryConnectionConsensusStateRequest): import("..").MobxResponse<_124.QueryConnectionConsensusStateResponse>;
                        };
                    };
                };
                registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
                load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                MessageComposer: {
                    encoded: {
                        connectionOpenInit(value: _125.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenTry(value: _125.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenAck(value: _125.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                        connectionOpenConfirm(value: _125.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: Uint8Array;
                        };
                    };
                    withTypeUrl: {
                        connectionOpenInit(value: _125.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _125.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _125.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _125.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _125.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _125.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _125.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _125.MsgConnectionOpenConfirm;
                        };
                    };
                    toJSON: {
                        connectionOpenInit(value: _125.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenTry(value: _125.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenAck(value: _125.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: unknown;
                        };
                        connectionOpenConfirm(value: _125.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: unknown;
                        };
                    };
                    fromJSON: {
                        connectionOpenInit(value: any): {
                            typeUrl: string;
                            value: _125.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: any): {
                            typeUrl: string;
                            value: _125.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: any): {
                            typeUrl: string;
                            value: _125.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: any): {
                            typeUrl: string;
                            value: _125.MsgConnectionOpenConfirm;
                        };
                    };
                    fromPartial: {
                        connectionOpenInit(value: _125.MsgConnectionOpenInit): {
                            typeUrl: string;
                            value: _125.MsgConnectionOpenInit;
                        };
                        connectionOpenTry(value: _125.MsgConnectionOpenTry): {
                            typeUrl: string;
                            value: _125.MsgConnectionOpenTry;
                        };
                        connectionOpenAck(value: _125.MsgConnectionOpenAck): {
                            typeUrl: string;
                            value: _125.MsgConnectionOpenAck;
                        };
                        connectionOpenConfirm(value: _125.MsgConnectionOpenConfirm): {
                            typeUrl: string;
                            value: _125.MsgConnectionOpenConfirm;
                        };
                    };
                };
                AminoConverter: {
                    "/ibc.core.connection.v1.MsgConnectionOpenInit": {
                        aminoType: string;
                        toAmino: (message: _125.MsgConnectionOpenInit) => _125.MsgConnectionOpenInitAmino;
                        fromAmino: (object: _125.MsgConnectionOpenInitAmino) => _125.MsgConnectionOpenInit;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenTry": {
                        aminoType: string;
                        toAmino: (message: _125.MsgConnectionOpenTry) => _125.MsgConnectionOpenTryAmino;
                        fromAmino: (object: _125.MsgConnectionOpenTryAmino) => _125.MsgConnectionOpenTry;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenAck": {
                        aminoType: string;
                        toAmino: (message: _125.MsgConnectionOpenAck) => _125.MsgConnectionOpenAckAmino;
                        fromAmino: (object: _125.MsgConnectionOpenAckAmino) => _125.MsgConnectionOpenAck;
                    };
                    "/ibc.core.connection.v1.MsgConnectionOpenConfirm": {
                        aminoType: string;
                        toAmino: (message: _125.MsgConnectionOpenConfirm) => _125.MsgConnectionOpenConfirmAmino;
                        fromAmino: (object: _125.MsgConnectionOpenConfirmAmino) => _125.MsgConnectionOpenConfirm;
                    };
                };
                MsgConnectionOpenInit: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _125.MsgConnectionOpenInit;
                    isSDK(o: any): o is _125.MsgConnectionOpenInitSDKType;
                    isAmino(o: any): o is _125.MsgConnectionOpenInitAmino;
                    encode(message: _125.MsgConnectionOpenInit, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _125.MsgConnectionOpenInit;
                    fromJSON(object: any): _125.MsgConnectionOpenInit;
                    toJSON(message: _125.MsgConnectionOpenInit): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        version?: {
                            identifier?: string;
                            features?: string[];
                        };
                        delayPeriod?: bigint;
                        signer?: string;
                    }): _125.MsgConnectionOpenInit;
                    fromSDK(object: _125.MsgConnectionOpenInitSDKType): _125.MsgConnectionOpenInit;
                    toSDK(message: _125.MsgConnectionOpenInit): _125.MsgConnectionOpenInitSDKType;
                    fromAmino(object: _125.MsgConnectionOpenInitAmino): _125.MsgConnectionOpenInit;
                    toAmino(message: _125.MsgConnectionOpenInit): _125.MsgConnectionOpenInitAmino;
                    fromAminoMsg(object: _125.MsgConnectionOpenInitAminoMsg): _125.MsgConnectionOpenInit;
                    toAminoMsg(message: _125.MsgConnectionOpenInit): _125.MsgConnectionOpenInitAminoMsg;
                    fromProtoMsg(message: _125.MsgConnectionOpenInitProtoMsg): _125.MsgConnectionOpenInit;
                    toProto(message: _125.MsgConnectionOpenInit): Uint8Array;
                    toProtoMsg(message: _125.MsgConnectionOpenInit): _125.MsgConnectionOpenInitProtoMsg;
                };
                MsgConnectionOpenInitResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _125.MsgConnectionOpenInitResponse;
                    isSDK(o: any): o is _125.MsgConnectionOpenInitResponseSDKType;
                    isAmino(o: any): o is _125.MsgConnectionOpenInitResponseAmino;
                    encode(_: _125.MsgConnectionOpenInitResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _125.MsgConnectionOpenInitResponse;
                    fromJSON(_: any): _125.MsgConnectionOpenInitResponse;
                    toJSON(_: _125.MsgConnectionOpenInitResponse): unknown;
                    fromPartial(_: {}): _125.MsgConnectionOpenInitResponse;
                    fromSDK(_: _125.MsgConnectionOpenInitResponseSDKType): _125.MsgConnectionOpenInitResponse;
                    toSDK(_: _125.MsgConnectionOpenInitResponse): _125.MsgConnectionOpenInitResponseSDKType;
                    fromAmino(_: _125.MsgConnectionOpenInitResponseAmino): _125.MsgConnectionOpenInitResponse;
                    toAmino(_: _125.MsgConnectionOpenInitResponse): _125.MsgConnectionOpenInitResponseAmino;
                    fromAminoMsg(object: _125.MsgConnectionOpenInitResponseAminoMsg): _125.MsgConnectionOpenInitResponse;
                    toAminoMsg(message: _125.MsgConnectionOpenInitResponse): _125.MsgConnectionOpenInitResponseAminoMsg;
                    fromProtoMsg(message: _125.MsgConnectionOpenInitResponseProtoMsg): _125.MsgConnectionOpenInitResponse;
                    toProto(message: _125.MsgConnectionOpenInitResponse): Uint8Array;
                    toProtoMsg(message: _125.MsgConnectionOpenInitResponse): _125.MsgConnectionOpenInitResponseProtoMsg;
                };
                MsgConnectionOpenTry: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _125.MsgConnectionOpenTry;
                    isSDK(o: any): o is _125.MsgConnectionOpenTrySDKType;
                    isAmino(o: any): o is _125.MsgConnectionOpenTryAmino;
                    encode(message: _125.MsgConnectionOpenTry, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _125.MsgConnectionOpenTry;
                    fromJSON(object: any): _125.MsgConnectionOpenTry;
                    toJSON(message: _125.MsgConnectionOpenTry): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        previousConnectionId?: string;
                        clientState?: {
                            $typeUrl?: "/google.protobuf.Any";
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        delayPeriod?: bigint;
                        counterpartyVersions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                        proofInit?: Uint8Array;
                        proofClient?: Uint8Array;
                        proofConsensus?: Uint8Array;
                        consensusHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                        signer?: string;
                    }): _125.MsgConnectionOpenTry;
                    fromSDK(object: _125.MsgConnectionOpenTrySDKType): _125.MsgConnectionOpenTry;
                    toSDK(message: _125.MsgConnectionOpenTry): _125.MsgConnectionOpenTrySDKType;
                    fromAmino(object: _125.MsgConnectionOpenTryAmino): _125.MsgConnectionOpenTry;
                    toAmino(message: _125.MsgConnectionOpenTry): _125.MsgConnectionOpenTryAmino;
                    fromAminoMsg(object: _125.MsgConnectionOpenTryAminoMsg): _125.MsgConnectionOpenTry;
                    toAminoMsg(message: _125.MsgConnectionOpenTry): _125.MsgConnectionOpenTryAminoMsg;
                    fromProtoMsg(message: _125.MsgConnectionOpenTryProtoMsg): _125.MsgConnectionOpenTry;
                    toProto(message: _125.MsgConnectionOpenTry): Uint8Array;
                    toProtoMsg(message: _125.MsgConnectionOpenTry): _125.MsgConnectionOpenTryProtoMsg;
                };
                MsgConnectionOpenTryResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _125.MsgConnectionOpenTryResponse;
                    isSDK(o: any): o is _125.MsgConnectionOpenTryResponseSDKType;
                    isAmino(o: any): o is _125.MsgConnectionOpenTryResponseAmino;
                    encode(_: _125.MsgConnectionOpenTryResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _125.MsgConnectionOpenTryResponse;
                    fromJSON(_: any): _125.MsgConnectionOpenTryResponse;
                    toJSON(_: _125.MsgConnectionOpenTryResponse): unknown;
                    fromPartial(_: {}): _125.MsgConnectionOpenTryResponse;
                    fromSDK(_: _125.MsgConnectionOpenTryResponseSDKType): _125.MsgConnectionOpenTryResponse;
                    toSDK(_: _125.MsgConnectionOpenTryResponse): _125.MsgConnectionOpenTryResponseSDKType;
                    fromAmino(_: _125.MsgConnectionOpenTryResponseAmino): _125.MsgConnectionOpenTryResponse;
                    toAmino(_: _125.MsgConnectionOpenTryResponse): _125.MsgConnectionOpenTryResponseAmino;
                    fromAminoMsg(object: _125.MsgConnectionOpenTryResponseAminoMsg): _125.MsgConnectionOpenTryResponse;
                    toAminoMsg(message: _125.MsgConnectionOpenTryResponse): _125.MsgConnectionOpenTryResponseAminoMsg;
                    fromProtoMsg(message: _125.MsgConnectionOpenTryResponseProtoMsg): _125.MsgConnectionOpenTryResponse;
                    toProto(message: _125.MsgConnectionOpenTryResponse): Uint8Array;
                    toProtoMsg(message: _125.MsgConnectionOpenTryResponse): _125.MsgConnectionOpenTryResponseProtoMsg;
                };
                MsgConnectionOpenAck: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _125.MsgConnectionOpenAck;
                    isSDK(o: any): o is _125.MsgConnectionOpenAckSDKType;
                    isAmino(o: any): o is _125.MsgConnectionOpenAckAmino;
                    encode(message: _125.MsgConnectionOpenAck, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _125.MsgConnectionOpenAck;
                    fromJSON(object: any): _125.MsgConnectionOpenAck;
                    toJSON(message: _125.MsgConnectionOpenAck): unknown;
                    fromPartial(object: {
                        connectionId?: string;
                        counterpartyConnectionId?: string;
                        version?: {
                            identifier?: string;
                            features?: string[];
                        };
                        clientState?: {
                            $typeUrl?: "/google.protobuf.Any";
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                        proofTry?: Uint8Array;
                        proofClient?: Uint8Array;
                        proofConsensus?: Uint8Array;
                        consensusHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                        signer?: string;
                    }): _125.MsgConnectionOpenAck;
                    fromSDK(object: _125.MsgConnectionOpenAckSDKType): _125.MsgConnectionOpenAck;
                    toSDK(message: _125.MsgConnectionOpenAck): _125.MsgConnectionOpenAckSDKType;
                    fromAmino(object: _125.MsgConnectionOpenAckAmino): _125.MsgConnectionOpenAck;
                    toAmino(message: _125.MsgConnectionOpenAck): _125.MsgConnectionOpenAckAmino;
                    fromAminoMsg(object: _125.MsgConnectionOpenAckAminoMsg): _125.MsgConnectionOpenAck;
                    toAminoMsg(message: _125.MsgConnectionOpenAck): _125.MsgConnectionOpenAckAminoMsg;
                    fromProtoMsg(message: _125.MsgConnectionOpenAckProtoMsg): _125.MsgConnectionOpenAck;
                    toProto(message: _125.MsgConnectionOpenAck): Uint8Array;
                    toProtoMsg(message: _125.MsgConnectionOpenAck): _125.MsgConnectionOpenAckProtoMsg;
                };
                MsgConnectionOpenAckResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _125.MsgConnectionOpenAckResponse;
                    isSDK(o: any): o is _125.MsgConnectionOpenAckResponseSDKType;
                    isAmino(o: any): o is _125.MsgConnectionOpenAckResponseAmino;
                    encode(_: _125.MsgConnectionOpenAckResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _125.MsgConnectionOpenAckResponse;
                    fromJSON(_: any): _125.MsgConnectionOpenAckResponse;
                    toJSON(_: _125.MsgConnectionOpenAckResponse): unknown;
                    fromPartial(_: {}): _125.MsgConnectionOpenAckResponse;
                    fromSDK(_: _125.MsgConnectionOpenAckResponseSDKType): _125.MsgConnectionOpenAckResponse;
                    toSDK(_: _125.MsgConnectionOpenAckResponse): _125.MsgConnectionOpenAckResponseSDKType;
                    fromAmino(_: _125.MsgConnectionOpenAckResponseAmino): _125.MsgConnectionOpenAckResponse;
                    toAmino(_: _125.MsgConnectionOpenAckResponse): _125.MsgConnectionOpenAckResponseAmino;
                    fromAminoMsg(object: _125.MsgConnectionOpenAckResponseAminoMsg): _125.MsgConnectionOpenAckResponse;
                    toAminoMsg(message: _125.MsgConnectionOpenAckResponse): _125.MsgConnectionOpenAckResponseAminoMsg;
                    fromProtoMsg(message: _125.MsgConnectionOpenAckResponseProtoMsg): _125.MsgConnectionOpenAckResponse;
                    toProto(message: _125.MsgConnectionOpenAckResponse): Uint8Array;
                    toProtoMsg(message: _125.MsgConnectionOpenAckResponse): _125.MsgConnectionOpenAckResponseProtoMsg;
                };
                MsgConnectionOpenConfirm: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _125.MsgConnectionOpenConfirm;
                    isSDK(o: any): o is _125.MsgConnectionOpenConfirmSDKType;
                    isAmino(o: any): o is _125.MsgConnectionOpenConfirmAmino;
                    encode(message: _125.MsgConnectionOpenConfirm, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _125.MsgConnectionOpenConfirm;
                    fromJSON(object: any): _125.MsgConnectionOpenConfirm;
                    toJSON(message: _125.MsgConnectionOpenConfirm): unknown;
                    fromPartial(object: {
                        connectionId?: string;
                        proofAck?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                        signer?: string;
                    }): _125.MsgConnectionOpenConfirm;
                    fromSDK(object: _125.MsgConnectionOpenConfirmSDKType): _125.MsgConnectionOpenConfirm;
                    toSDK(message: _125.MsgConnectionOpenConfirm): _125.MsgConnectionOpenConfirmSDKType;
                    fromAmino(object: _125.MsgConnectionOpenConfirmAmino): _125.MsgConnectionOpenConfirm;
                    toAmino(message: _125.MsgConnectionOpenConfirm): _125.MsgConnectionOpenConfirmAmino;
                    fromAminoMsg(object: _125.MsgConnectionOpenConfirmAminoMsg): _125.MsgConnectionOpenConfirm;
                    toAminoMsg(message: _125.MsgConnectionOpenConfirm): _125.MsgConnectionOpenConfirmAminoMsg;
                    fromProtoMsg(message: _125.MsgConnectionOpenConfirmProtoMsg): _125.MsgConnectionOpenConfirm;
                    toProto(message: _125.MsgConnectionOpenConfirm): Uint8Array;
                    toProtoMsg(message: _125.MsgConnectionOpenConfirm): _125.MsgConnectionOpenConfirmProtoMsg;
                };
                MsgConnectionOpenConfirmResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _125.MsgConnectionOpenConfirmResponse;
                    isSDK(o: any): o is _125.MsgConnectionOpenConfirmResponseSDKType;
                    isAmino(o: any): o is _125.MsgConnectionOpenConfirmResponseAmino;
                    encode(_: _125.MsgConnectionOpenConfirmResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _125.MsgConnectionOpenConfirmResponse;
                    fromJSON(_: any): _125.MsgConnectionOpenConfirmResponse;
                    toJSON(_: _125.MsgConnectionOpenConfirmResponse): unknown;
                    fromPartial(_: {}): _125.MsgConnectionOpenConfirmResponse;
                    fromSDK(_: _125.MsgConnectionOpenConfirmResponseSDKType): _125.MsgConnectionOpenConfirmResponse;
                    toSDK(_: _125.MsgConnectionOpenConfirmResponse): _125.MsgConnectionOpenConfirmResponseSDKType;
                    fromAmino(_: _125.MsgConnectionOpenConfirmResponseAmino): _125.MsgConnectionOpenConfirmResponse;
                    toAmino(_: _125.MsgConnectionOpenConfirmResponse): _125.MsgConnectionOpenConfirmResponseAmino;
                    fromAminoMsg(object: _125.MsgConnectionOpenConfirmResponseAminoMsg): _125.MsgConnectionOpenConfirmResponse;
                    toAminoMsg(message: _125.MsgConnectionOpenConfirmResponse): _125.MsgConnectionOpenConfirmResponseAminoMsg;
                    fromProtoMsg(message: _125.MsgConnectionOpenConfirmResponseProtoMsg): _125.MsgConnectionOpenConfirmResponse;
                    toProto(message: _125.MsgConnectionOpenConfirmResponse): Uint8Array;
                    toProtoMsg(message: _125.MsgConnectionOpenConfirmResponse): _125.MsgConnectionOpenConfirmResponseProtoMsg;
                };
                QueryConnectionRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _124.QueryConnectionRequest;
                    isSDK(o: any): o is _124.QueryConnectionRequestSDKType;
                    isAmino(o: any): o is _124.QueryConnectionRequestAmino;
                    encode(message: _124.QueryConnectionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.QueryConnectionRequest;
                    fromJSON(object: any): _124.QueryConnectionRequest;
                    toJSON(message: _124.QueryConnectionRequest): unknown;
                    fromPartial(object: {
                        connectionId?: string;
                    }): _124.QueryConnectionRequest;
                    fromSDK(object: _124.QueryConnectionRequestSDKType): _124.QueryConnectionRequest;
                    toSDK(message: _124.QueryConnectionRequest): _124.QueryConnectionRequestSDKType;
                    fromAmino(object: _124.QueryConnectionRequestAmino): _124.QueryConnectionRequest;
                    toAmino(message: _124.QueryConnectionRequest): _124.QueryConnectionRequestAmino;
                    fromAminoMsg(object: _124.QueryConnectionRequestAminoMsg): _124.QueryConnectionRequest;
                    toAminoMsg(message: _124.QueryConnectionRequest): _124.QueryConnectionRequestAminoMsg;
                    fromProtoMsg(message: _124.QueryConnectionRequestProtoMsg): _124.QueryConnectionRequest;
                    toProto(message: _124.QueryConnectionRequest): Uint8Array;
                    toProtoMsg(message: _124.QueryConnectionRequest): _124.QueryConnectionRequestProtoMsg;
                };
                QueryConnectionResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _124.QueryConnectionResponse;
                    isSDK(o: any): o is _124.QueryConnectionResponseSDKType;
                    isAmino(o: any): o is _124.QueryConnectionResponseAmino;
                    encode(message: _124.QueryConnectionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.QueryConnectionResponse;
                    fromJSON(object: any): _124.QueryConnectionResponse;
                    toJSON(message: _124.QueryConnectionResponse): unknown;
                    fromPartial(object: {
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _122.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: bigint;
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _124.QueryConnectionResponse;
                    fromSDK(object: _124.QueryConnectionResponseSDKType): _124.QueryConnectionResponse;
                    toSDK(message: _124.QueryConnectionResponse): _124.QueryConnectionResponseSDKType;
                    fromAmino(object: _124.QueryConnectionResponseAmino): _124.QueryConnectionResponse;
                    toAmino(message: _124.QueryConnectionResponse): _124.QueryConnectionResponseAmino;
                    fromAminoMsg(object: _124.QueryConnectionResponseAminoMsg): _124.QueryConnectionResponse;
                    toAminoMsg(message: _124.QueryConnectionResponse): _124.QueryConnectionResponseAminoMsg;
                    fromProtoMsg(message: _124.QueryConnectionResponseProtoMsg): _124.QueryConnectionResponse;
                    toProto(message: _124.QueryConnectionResponse): Uint8Array;
                    toProtoMsg(message: _124.QueryConnectionResponse): _124.QueryConnectionResponseProtoMsg;
                };
                QueryConnectionsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _124.QueryConnectionsRequest;
                    isSDK(o: any): o is _124.QueryConnectionsRequestSDKType;
                    isAmino(o: any): o is _124.QueryConnectionsRequestAmino;
                    encode(message: _124.QueryConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.QueryConnectionsRequest;
                    fromJSON(object: any): _124.QueryConnectionsRequest;
                    toJSON(message: _124.QueryConnectionsRequest): unknown;
                    fromPartial(object: {
                        pagination?: {
                            key?: Uint8Array;
                            offset?: bigint;
                            limit?: bigint;
                            countTotal?: boolean;
                            reverse?: boolean;
                        };
                    }): _124.QueryConnectionsRequest;
                    fromSDK(object: _124.QueryConnectionsRequestSDKType): _124.QueryConnectionsRequest;
                    toSDK(message: _124.QueryConnectionsRequest): _124.QueryConnectionsRequestSDKType;
                    fromAmino(object: _124.QueryConnectionsRequestAmino): _124.QueryConnectionsRequest;
                    toAmino(message: _124.QueryConnectionsRequest): _124.QueryConnectionsRequestAmino;
                    fromAminoMsg(object: _124.QueryConnectionsRequestAminoMsg): _124.QueryConnectionsRequest;
                    toAminoMsg(message: _124.QueryConnectionsRequest): _124.QueryConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _124.QueryConnectionsRequestProtoMsg): _124.QueryConnectionsRequest;
                    toProto(message: _124.QueryConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _124.QueryConnectionsRequest): _124.QueryConnectionsRequestProtoMsg;
                };
                QueryConnectionsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _124.QueryConnectionsResponse;
                    isSDK(o: any): o is _124.QueryConnectionsResponseSDKType;
                    isAmino(o: any): o is _124.QueryConnectionsResponseAmino;
                    encode(message: _124.QueryConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.QueryConnectionsResponse;
                    fromJSON(object: any): _124.QueryConnectionsResponse;
                    toJSON(message: _124.QueryConnectionsResponse): unknown;
                    fromPartial(object: {
                        connections?: {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _122.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: bigint;
                        }[];
                        pagination?: {
                            nextKey?: Uint8Array;
                            total?: bigint;
                        };
                        height?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _124.QueryConnectionsResponse;
                    fromSDK(object: _124.QueryConnectionsResponseSDKType): _124.QueryConnectionsResponse;
                    toSDK(message: _124.QueryConnectionsResponse): _124.QueryConnectionsResponseSDKType;
                    fromAmino(object: _124.QueryConnectionsResponseAmino): _124.QueryConnectionsResponse;
                    toAmino(message: _124.QueryConnectionsResponse): _124.QueryConnectionsResponseAmino;
                    fromAminoMsg(object: _124.QueryConnectionsResponseAminoMsg): _124.QueryConnectionsResponse;
                    toAminoMsg(message: _124.QueryConnectionsResponse): _124.QueryConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _124.QueryConnectionsResponseProtoMsg): _124.QueryConnectionsResponse;
                    toProto(message: _124.QueryConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _124.QueryConnectionsResponse): _124.QueryConnectionsResponseProtoMsg;
                };
                QueryClientConnectionsRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _124.QueryClientConnectionsRequest;
                    isSDK(o: any): o is _124.QueryClientConnectionsRequestSDKType;
                    isAmino(o: any): o is _124.QueryClientConnectionsRequestAmino;
                    encode(message: _124.QueryClientConnectionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.QueryClientConnectionsRequest;
                    fromJSON(object: any): _124.QueryClientConnectionsRequest;
                    toJSON(message: _124.QueryClientConnectionsRequest): unknown;
                    fromPartial(object: {
                        clientId?: string;
                    }): _124.QueryClientConnectionsRequest;
                    fromSDK(object: _124.QueryClientConnectionsRequestSDKType): _124.QueryClientConnectionsRequest;
                    toSDK(message: _124.QueryClientConnectionsRequest): _124.QueryClientConnectionsRequestSDKType;
                    fromAmino(object: _124.QueryClientConnectionsRequestAmino): _124.QueryClientConnectionsRequest;
                    toAmino(message: _124.QueryClientConnectionsRequest): _124.QueryClientConnectionsRequestAmino;
                    fromAminoMsg(object: _124.QueryClientConnectionsRequestAminoMsg): _124.QueryClientConnectionsRequest;
                    toAminoMsg(message: _124.QueryClientConnectionsRequest): _124.QueryClientConnectionsRequestAminoMsg;
                    fromProtoMsg(message: _124.QueryClientConnectionsRequestProtoMsg): _124.QueryClientConnectionsRequest;
                    toProto(message: _124.QueryClientConnectionsRequest): Uint8Array;
                    toProtoMsg(message: _124.QueryClientConnectionsRequest): _124.QueryClientConnectionsRequestProtoMsg;
                };
                QueryClientConnectionsResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _124.QueryClientConnectionsResponse;
                    isSDK(o: any): o is _124.QueryClientConnectionsResponseSDKType;
                    isAmino(o: any): o is _124.QueryClientConnectionsResponseAmino;
                    encode(message: _124.QueryClientConnectionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.QueryClientConnectionsResponse;
                    fromJSON(object: any): _124.QueryClientConnectionsResponse;
                    toJSON(message: _124.QueryClientConnectionsResponse): unknown;
                    fromPartial(object: {
                        connectionPaths?: string[];
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _124.QueryClientConnectionsResponse;
                    fromSDK(object: _124.QueryClientConnectionsResponseSDKType): _124.QueryClientConnectionsResponse;
                    toSDK(message: _124.QueryClientConnectionsResponse): _124.QueryClientConnectionsResponseSDKType;
                    fromAmino(object: _124.QueryClientConnectionsResponseAmino): _124.QueryClientConnectionsResponse;
                    toAmino(message: _124.QueryClientConnectionsResponse): _124.QueryClientConnectionsResponseAmino;
                    fromAminoMsg(object: _124.QueryClientConnectionsResponseAminoMsg): _124.QueryClientConnectionsResponse;
                    toAminoMsg(message: _124.QueryClientConnectionsResponse): _124.QueryClientConnectionsResponseAminoMsg;
                    fromProtoMsg(message: _124.QueryClientConnectionsResponseProtoMsg): _124.QueryClientConnectionsResponse;
                    toProto(message: _124.QueryClientConnectionsResponse): Uint8Array;
                    toProtoMsg(message: _124.QueryClientConnectionsResponse): _124.QueryClientConnectionsResponseProtoMsg;
                };
                QueryConnectionClientStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _124.QueryConnectionClientStateRequest;
                    isSDK(o: any): o is _124.QueryConnectionClientStateRequestSDKType;
                    isAmino(o: any): o is _124.QueryConnectionClientStateRequestAmino;
                    encode(message: _124.QueryConnectionClientStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.QueryConnectionClientStateRequest;
                    fromJSON(object: any): _124.QueryConnectionClientStateRequest;
                    toJSON(message: _124.QueryConnectionClientStateRequest): unknown;
                    fromPartial(object: {
                        connectionId?: string;
                    }): _124.QueryConnectionClientStateRequest;
                    fromSDK(object: _124.QueryConnectionClientStateRequestSDKType): _124.QueryConnectionClientStateRequest;
                    toSDK(message: _124.QueryConnectionClientStateRequest): _124.QueryConnectionClientStateRequestSDKType;
                    fromAmino(object: _124.QueryConnectionClientStateRequestAmino): _124.QueryConnectionClientStateRequest;
                    toAmino(message: _124.QueryConnectionClientStateRequest): _124.QueryConnectionClientStateRequestAmino;
                    fromAminoMsg(object: _124.QueryConnectionClientStateRequestAminoMsg): _124.QueryConnectionClientStateRequest;
                    toAminoMsg(message: _124.QueryConnectionClientStateRequest): _124.QueryConnectionClientStateRequestAminoMsg;
                    fromProtoMsg(message: _124.QueryConnectionClientStateRequestProtoMsg): _124.QueryConnectionClientStateRequest;
                    toProto(message: _124.QueryConnectionClientStateRequest): Uint8Array;
                    toProtoMsg(message: _124.QueryConnectionClientStateRequest): _124.QueryConnectionClientStateRequestProtoMsg;
                };
                QueryConnectionClientStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _124.QueryConnectionClientStateResponse;
                    isSDK(o: any): o is _124.QueryConnectionClientStateResponseSDKType;
                    isAmino(o: any): o is _124.QueryConnectionClientStateResponseAmino;
                    encode(message: _124.QueryConnectionClientStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.QueryConnectionClientStateResponse;
                    fromJSON(object: any): _124.QueryConnectionClientStateResponse;
                    toJSON(message: _124.QueryConnectionClientStateResponse): unknown;
                    fromPartial(object: {
                        identifiedClientState?: {
                            clientId?: string;
                            clientState?: {
                                $typeUrl?: "/google.protobuf.Any";
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                        };
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _124.QueryConnectionClientStateResponse;
                    fromSDK(object: _124.QueryConnectionClientStateResponseSDKType): _124.QueryConnectionClientStateResponse;
                    toSDK(message: _124.QueryConnectionClientStateResponse): _124.QueryConnectionClientStateResponseSDKType;
                    fromAmino(object: _124.QueryConnectionClientStateResponseAmino): _124.QueryConnectionClientStateResponse;
                    toAmino(message: _124.QueryConnectionClientStateResponse): _124.QueryConnectionClientStateResponseAmino;
                    fromAminoMsg(object: _124.QueryConnectionClientStateResponseAminoMsg): _124.QueryConnectionClientStateResponse;
                    toAminoMsg(message: _124.QueryConnectionClientStateResponse): _124.QueryConnectionClientStateResponseAminoMsg;
                    fromProtoMsg(message: _124.QueryConnectionClientStateResponseProtoMsg): _124.QueryConnectionClientStateResponse;
                    toProto(message: _124.QueryConnectionClientStateResponse): Uint8Array;
                    toProtoMsg(message: _124.QueryConnectionClientStateResponse): _124.QueryConnectionClientStateResponseProtoMsg;
                };
                QueryConnectionConsensusStateRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _124.QueryConnectionConsensusStateRequest;
                    isSDK(o: any): o is _124.QueryConnectionConsensusStateRequestSDKType;
                    isAmino(o: any): o is _124.QueryConnectionConsensusStateRequestAmino;
                    encode(message: _124.QueryConnectionConsensusStateRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.QueryConnectionConsensusStateRequest;
                    fromJSON(object: any): _124.QueryConnectionConsensusStateRequest;
                    toJSON(message: _124.QueryConnectionConsensusStateRequest): unknown;
                    fromPartial(object: {
                        connectionId?: string;
                        revisionNumber?: bigint;
                        revisionHeight?: bigint;
                    }): _124.QueryConnectionConsensusStateRequest;
                    fromSDK(object: _124.QueryConnectionConsensusStateRequestSDKType): _124.QueryConnectionConsensusStateRequest;
                    toSDK(message: _124.QueryConnectionConsensusStateRequest): _124.QueryConnectionConsensusStateRequestSDKType;
                    fromAmino(object: _124.QueryConnectionConsensusStateRequestAmino): _124.QueryConnectionConsensusStateRequest;
                    toAmino(message: _124.QueryConnectionConsensusStateRequest): _124.QueryConnectionConsensusStateRequestAmino;
                    fromAminoMsg(object: _124.QueryConnectionConsensusStateRequestAminoMsg): _124.QueryConnectionConsensusStateRequest;
                    toAminoMsg(message: _124.QueryConnectionConsensusStateRequest): _124.QueryConnectionConsensusStateRequestAminoMsg;
                    fromProtoMsg(message: _124.QueryConnectionConsensusStateRequestProtoMsg): _124.QueryConnectionConsensusStateRequest;
                    toProto(message: _124.QueryConnectionConsensusStateRequest): Uint8Array;
                    toProtoMsg(message: _124.QueryConnectionConsensusStateRequest): _124.QueryConnectionConsensusStateRequestProtoMsg;
                };
                QueryConnectionConsensusStateResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _124.QueryConnectionConsensusStateResponse;
                    isSDK(o: any): o is _124.QueryConnectionConsensusStateResponseSDKType;
                    isAmino(o: any): o is _124.QueryConnectionConsensusStateResponseAmino;
                    encode(message: _124.QueryConnectionConsensusStateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _124.QueryConnectionConsensusStateResponse;
                    fromJSON(object: any): _124.QueryConnectionConsensusStateResponse;
                    toJSON(message: _124.QueryConnectionConsensusStateResponse): unknown;
                    fromPartial(object: {
                        consensusState?: {
                            $typeUrl?: "/google.protobuf.Any";
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        clientId?: string;
                        proof?: Uint8Array;
                        proofHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _124.QueryConnectionConsensusStateResponse;
                    fromSDK(object: _124.QueryConnectionConsensusStateResponseSDKType): _124.QueryConnectionConsensusStateResponse;
                    toSDK(message: _124.QueryConnectionConsensusStateResponse): _124.QueryConnectionConsensusStateResponseSDKType;
                    fromAmino(object: _124.QueryConnectionConsensusStateResponseAmino): _124.QueryConnectionConsensusStateResponse;
                    toAmino(message: _124.QueryConnectionConsensusStateResponse): _124.QueryConnectionConsensusStateResponseAmino;
                    fromAminoMsg(object: _124.QueryConnectionConsensusStateResponseAminoMsg): _124.QueryConnectionConsensusStateResponse;
                    toAminoMsg(message: _124.QueryConnectionConsensusStateResponse): _124.QueryConnectionConsensusStateResponseAminoMsg;
                    fromProtoMsg(message: _124.QueryConnectionConsensusStateResponseProtoMsg): _124.QueryConnectionConsensusStateResponse;
                    toProto(message: _124.QueryConnectionConsensusStateResponse): Uint8Array;
                    toProtoMsg(message: _124.QueryConnectionConsensusStateResponse): _124.QueryConnectionConsensusStateResponseProtoMsg;
                };
                GenesisState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _123.GenesisState;
                    isSDK(o: any): o is _123.GenesisStateSDKType;
                    isAmino(o: any): o is _123.GenesisStateAmino;
                    encode(message: _123.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _123.GenesisState;
                    fromJSON(object: any): _123.GenesisState;
                    toJSON(message: _123.GenesisState): unknown;
                    fromPartial(object: {
                        connections?: {
                            id?: string;
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _122.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: bigint;
                        }[];
                        clientConnectionPaths?: {
                            clientId?: string;
                            paths?: string[];
                        }[];
                        nextConnectionSequence?: bigint;
                        params?: {
                            maxExpectedTimePerBlock?: bigint;
                        };
                    }): _123.GenesisState;
                    fromSDK(object: _123.GenesisStateSDKType): _123.GenesisState;
                    toSDK(message: _123.GenesisState): _123.GenesisStateSDKType;
                    fromAmino(object: _123.GenesisStateAmino): _123.GenesisState;
                    toAmino(message: _123.GenesisState): _123.GenesisStateAmino;
                    fromAminoMsg(object: _123.GenesisStateAminoMsg): _123.GenesisState;
                    toAminoMsg(message: _123.GenesisState): _123.GenesisStateAminoMsg;
                    fromProtoMsg(message: _123.GenesisStateProtoMsg): _123.GenesisState;
                    toProto(message: _123.GenesisState): Uint8Array;
                    toProtoMsg(message: _123.GenesisState): _123.GenesisStateProtoMsg;
                };
                stateFromJSON(object: any): _122.State;
                stateToJSON(object: _122.State): string;
                State: typeof _122.State;
                StateSDKType: typeof _122.State;
                StateAmino: typeof _122.State;
                ConnectionEnd: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _122.ConnectionEnd;
                    isSDK(o: any): o is _122.ConnectionEndSDKType;
                    isAmino(o: any): o is _122.ConnectionEndAmino;
                    encode(message: _122.ConnectionEnd, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _122.ConnectionEnd;
                    fromJSON(object: any): _122.ConnectionEnd;
                    toJSON(message: _122.ConnectionEnd): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        versions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        state?: _122.State;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        delayPeriod?: bigint;
                    }): _122.ConnectionEnd;
                    fromSDK(object: _122.ConnectionEndSDKType): _122.ConnectionEnd;
                    toSDK(message: _122.ConnectionEnd): _122.ConnectionEndSDKType;
                    fromAmino(object: _122.ConnectionEndAmino): _122.ConnectionEnd;
                    toAmino(message: _122.ConnectionEnd): _122.ConnectionEndAmino;
                    fromAminoMsg(object: _122.ConnectionEndAminoMsg): _122.ConnectionEnd;
                    toAminoMsg(message: _122.ConnectionEnd): _122.ConnectionEndAminoMsg;
                    fromProtoMsg(message: _122.ConnectionEndProtoMsg): _122.ConnectionEnd;
                    toProto(message: _122.ConnectionEnd): Uint8Array;
                    toProtoMsg(message: _122.ConnectionEnd): _122.ConnectionEndProtoMsg;
                };
                IdentifiedConnection: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _122.IdentifiedConnection;
                    isSDK(o: any): o is _122.IdentifiedConnectionSDKType;
                    isAmino(o: any): o is _122.IdentifiedConnectionAmino;
                    encode(message: _122.IdentifiedConnection, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _122.IdentifiedConnection;
                    fromJSON(object: any): _122.IdentifiedConnection;
                    toJSON(message: _122.IdentifiedConnection): unknown;
                    fromPartial(object: {
                        id?: string;
                        clientId?: string;
                        versions?: {
                            identifier?: string;
                            features?: string[];
                        }[];
                        state?: _122.State;
                        counterparty?: {
                            clientId?: string;
                            connectionId?: string;
                            prefix?: {
                                keyPrefix?: Uint8Array;
                            };
                        };
                        delayPeriod?: bigint;
                    }): _122.IdentifiedConnection;
                    fromSDK(object: _122.IdentifiedConnectionSDKType): _122.IdentifiedConnection;
                    toSDK(message: _122.IdentifiedConnection): _122.IdentifiedConnectionSDKType;
                    fromAmino(object: _122.IdentifiedConnectionAmino): _122.IdentifiedConnection;
                    toAmino(message: _122.IdentifiedConnection): _122.IdentifiedConnectionAmino;
                    fromAminoMsg(object: _122.IdentifiedConnectionAminoMsg): _122.IdentifiedConnection;
                    toAminoMsg(message: _122.IdentifiedConnection): _122.IdentifiedConnectionAminoMsg;
                    fromProtoMsg(message: _122.IdentifiedConnectionProtoMsg): _122.IdentifiedConnection;
                    toProto(message: _122.IdentifiedConnection): Uint8Array;
                    toProtoMsg(message: _122.IdentifiedConnection): _122.IdentifiedConnectionProtoMsg;
                };
                Counterparty: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _122.Counterparty;
                    isSDK(o: any): o is _122.CounterpartySDKType;
                    isAmino(o: any): o is _122.CounterpartyAmino;
                    encode(message: _122.Counterparty, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _122.Counterparty;
                    fromJSON(object: any): _122.Counterparty;
                    toJSON(message: _122.Counterparty): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        connectionId?: string;
                        prefix?: {
                            keyPrefix?: Uint8Array;
                        };
                    }): _122.Counterparty;
                    fromSDK(object: _122.CounterpartySDKType): _122.Counterparty;
                    toSDK(message: _122.Counterparty): _122.CounterpartySDKType;
                    fromAmino(object: _122.CounterpartyAmino): _122.Counterparty;
                    toAmino(message: _122.Counterparty): _122.CounterpartyAmino;
                    fromAminoMsg(object: _122.CounterpartyAminoMsg): _122.Counterparty;
                    toAminoMsg(message: _122.Counterparty): _122.CounterpartyAminoMsg;
                    fromProtoMsg(message: _122.CounterpartyProtoMsg): _122.Counterparty;
                    toProto(message: _122.Counterparty): Uint8Array;
                    toProtoMsg(message: _122.Counterparty): _122.CounterpartyProtoMsg;
                };
                ClientPaths: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _122.ClientPaths;
                    isSDK(o: any): o is _122.ClientPathsSDKType;
                    isAmino(o: any): o is _122.ClientPathsAmino;
                    encode(message: _122.ClientPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _122.ClientPaths;
                    fromJSON(object: any): _122.ClientPaths;
                    toJSON(message: _122.ClientPaths): unknown;
                    fromPartial(object: {
                        paths?: string[];
                    }): _122.ClientPaths;
                    fromSDK(object: _122.ClientPathsSDKType): _122.ClientPaths;
                    toSDK(message: _122.ClientPaths): _122.ClientPathsSDKType;
                    fromAmino(object: _122.ClientPathsAmino): _122.ClientPaths;
                    toAmino(message: _122.ClientPaths): _122.ClientPathsAmino;
                    fromAminoMsg(object: _122.ClientPathsAminoMsg): _122.ClientPaths;
                    toAminoMsg(message: _122.ClientPaths): _122.ClientPathsAminoMsg;
                    fromProtoMsg(message: _122.ClientPathsProtoMsg): _122.ClientPaths;
                    toProto(message: _122.ClientPaths): Uint8Array;
                    toProtoMsg(message: _122.ClientPaths): _122.ClientPathsProtoMsg;
                };
                ConnectionPaths: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _122.ConnectionPaths;
                    isSDK(o: any): o is _122.ConnectionPathsSDKType;
                    isAmino(o: any): o is _122.ConnectionPathsAmino;
                    encode(message: _122.ConnectionPaths, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _122.ConnectionPaths;
                    fromJSON(object: any): _122.ConnectionPaths;
                    toJSON(message: _122.ConnectionPaths): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        paths?: string[];
                    }): _122.ConnectionPaths;
                    fromSDK(object: _122.ConnectionPathsSDKType): _122.ConnectionPaths;
                    toSDK(message: _122.ConnectionPaths): _122.ConnectionPathsSDKType;
                    fromAmino(object: _122.ConnectionPathsAmino): _122.ConnectionPaths;
                    toAmino(message: _122.ConnectionPaths): _122.ConnectionPathsAmino;
                    fromAminoMsg(object: _122.ConnectionPathsAminoMsg): _122.ConnectionPaths;
                    toAminoMsg(message: _122.ConnectionPaths): _122.ConnectionPathsAminoMsg;
                    fromProtoMsg(message: _122.ConnectionPathsProtoMsg): _122.ConnectionPaths;
                    toProto(message: _122.ConnectionPaths): Uint8Array;
                    toProtoMsg(message: _122.ConnectionPaths): _122.ConnectionPathsProtoMsg;
                };
                Version: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _122.Version;
                    isSDK(o: any): o is _122.VersionSDKType;
                    isAmino(o: any): o is _122.VersionAmino;
                    encode(message: _122.Version, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _122.Version;
                    fromJSON(object: any): _122.Version;
                    toJSON(message: _122.Version): unknown;
                    fromPartial(object: {
                        identifier?: string;
                        features?: string[];
                    }): _122.Version;
                    fromSDK(object: _122.VersionSDKType): _122.Version;
                    toSDK(message: _122.Version): _122.VersionSDKType;
                    fromAmino(object: _122.VersionAmino): _122.Version;
                    toAmino(message: _122.Version): _122.VersionAmino;
                    fromAminoMsg(object: _122.VersionAminoMsg): _122.Version;
                    toAminoMsg(message: _122.Version): _122.VersionAminoMsg;
                    fromProtoMsg(message: _122.VersionProtoMsg): _122.Version;
                    toProto(message: _122.Version): Uint8Array;
                    toProtoMsg(message: _122.Version): _122.VersionProtoMsg;
                };
                Params: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _122.Params;
                    isSDK(o: any): o is _122.ParamsSDKType;
                    isAmino(o: any): o is _122.ParamsAmino;
                    encode(message: _122.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _122.Params;
                    fromJSON(object: any): _122.Params;
                    toJSON(message: _122.Params): unknown;
                    fromPartial(object: {
                        maxExpectedTimePerBlock?: bigint;
                    }): _122.Params;
                    fromSDK(object: _122.ParamsSDKType): _122.Params;
                    toSDK(message: _122.Params): _122.ParamsSDKType;
                    fromAmino(object: _122.ParamsAmino): _122.Params;
                    toAmino(message: _122.Params): _122.ParamsAmino;
                    fromAminoMsg(object: _122.ParamsAminoMsg): _122.Params;
                    toAminoMsg(message: _122.Params): _122.ParamsAminoMsg;
                    fromProtoMsg(message: _122.ParamsProtoMsg): _122.Params;
                    toProto(message: _122.Params): Uint8Array;
                    toProtoMsg(message: _122.Params): _122.ParamsProtoMsg;
                };
            };
        }
        namespace port {
            const v1: {
                QueryClientImpl: typeof _266.QueryClientImpl;
                createClientImpl: (rpc: import("..").TxRpc) => _266.QueryClientImpl;
                createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                    useAppVersion: <TData = _126.QueryAppVersionResponse>({ request, options }: _266.UseAppVersionQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
                };
                createRpcQueryMobxStores: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                    QueryAppVersionStore: {
                        new (): {
                            store: import("..").QueryStore<_126.QueryAppVersionRequest, _126.QueryAppVersionResponse>;
                            appVersion(request: _126.QueryAppVersionRequest): import("..").MobxResponse<_126.QueryAppVersionResponse>;
                        };
                    };
                };
                QueryAppVersionRequest: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _126.QueryAppVersionRequest;
                    isSDK(o: any): o is _126.QueryAppVersionRequestSDKType;
                    isAmino(o: any): o is _126.QueryAppVersionRequestAmino;
                    encode(message: _126.QueryAppVersionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.QueryAppVersionRequest;
                    fromJSON(object: any): _126.QueryAppVersionRequest;
                    toJSON(message: _126.QueryAppVersionRequest): unknown;
                    fromPartial(object: {
                        portId?: string;
                        connectionId?: string;
                        ordering?: _113.Order;
                        counterparty?: {
                            portId?: string;
                            channelId?: string;
                        };
                        proposedVersion?: string;
                    }): _126.QueryAppVersionRequest;
                    fromSDK(object: _126.QueryAppVersionRequestSDKType): _126.QueryAppVersionRequest;
                    toSDK(message: _126.QueryAppVersionRequest): _126.QueryAppVersionRequestSDKType;
                    fromAmino(object: _126.QueryAppVersionRequestAmino): _126.QueryAppVersionRequest;
                    toAmino(message: _126.QueryAppVersionRequest): _126.QueryAppVersionRequestAmino;
                    fromAminoMsg(object: _126.QueryAppVersionRequestAminoMsg): _126.QueryAppVersionRequest;
                    toAminoMsg(message: _126.QueryAppVersionRequest): _126.QueryAppVersionRequestAminoMsg;
                    fromProtoMsg(message: _126.QueryAppVersionRequestProtoMsg): _126.QueryAppVersionRequest;
                    toProto(message: _126.QueryAppVersionRequest): Uint8Array;
                    toProtoMsg(message: _126.QueryAppVersionRequest): _126.QueryAppVersionRequestProtoMsg;
                };
                QueryAppVersionResponse: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _126.QueryAppVersionResponse;
                    isSDK(o: any): o is _126.QueryAppVersionResponseSDKType;
                    isAmino(o: any): o is _126.QueryAppVersionResponseAmino;
                    encode(message: _126.QueryAppVersionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _126.QueryAppVersionResponse;
                    fromJSON(object: any): _126.QueryAppVersionResponse;
                    toJSON(message: _126.QueryAppVersionResponse): unknown;
                    fromPartial(object: {
                        portId?: string;
                        version?: string;
                    }): _126.QueryAppVersionResponse;
                    fromSDK(object: _126.QueryAppVersionResponseSDKType): _126.QueryAppVersionResponse;
                    toSDK(message: _126.QueryAppVersionResponse): _126.QueryAppVersionResponseSDKType;
                    fromAmino(object: _126.QueryAppVersionResponseAmino): _126.QueryAppVersionResponse;
                    toAmino(message: _126.QueryAppVersionResponse): _126.QueryAppVersionResponseAmino;
                    fromAminoMsg(object: _126.QueryAppVersionResponseAminoMsg): _126.QueryAppVersionResponse;
                    toAminoMsg(message: _126.QueryAppVersionResponse): _126.QueryAppVersionResponseAminoMsg;
                    fromProtoMsg(message: _126.QueryAppVersionResponseProtoMsg): _126.QueryAppVersionResponse;
                    toProto(message: _126.QueryAppVersionResponse): Uint8Array;
                    toProtoMsg(message: _126.QueryAppVersionResponse): _126.QueryAppVersionResponseProtoMsg;
                };
            };
        }
        namespace types {
            const v1: {
                GenesisState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _127.GenesisState;
                    isSDK(o: any): o is _127.GenesisStateSDKType;
                    isAmino(o: any): o is _127.GenesisStateAmino;
                    encode(message: _127.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _127.GenesisState;
                    fromJSON(object: any): _127.GenesisState;
                    toJSON(message: _127.GenesisState): unknown;
                    fromPartial(object: {
                        clientGenesis?: {
                            clients?: {
                                clientId?: string;
                                clientState?: {
                                    $typeUrl?: "/google.protobuf.Any";
                                    typeUrl?: string;
                                    value?: Uint8Array;
                                };
                            }[];
                            clientsConsensus?: {
                                clientId?: string;
                                consensusStates?: {
                                    height?: {
                                        revisionNumber?: bigint;
                                        revisionHeight?: bigint;
                                    };
                                    consensusState?: {
                                        $typeUrl?: "/google.protobuf.Any";
                                        typeUrl?: string;
                                        value?: Uint8Array;
                                    };
                                }[];
                            }[];
                            clientsMetadata?: {
                                clientId?: string;
                                clientMetadata?: {
                                    key?: Uint8Array;
                                    value?: Uint8Array;
                                }[];
                            }[];
                            params?: {
                                allowedClients?: string[];
                            };
                            createLocalhost?: boolean;
                            nextClientSequence?: bigint;
                        };
                        connectionGenesis?: {
                            connections?: {
                                id?: string;
                                clientId?: string;
                                versions?: {
                                    identifier?: string;
                                    features?: string[];
                                }[];
                                state?: _122.State;
                                counterparty?: {
                                    clientId?: string;
                                    connectionId?: string;
                                    prefix?: {
                                        keyPrefix?: Uint8Array;
                                    };
                                };
                                delayPeriod?: bigint;
                            }[];
                            clientConnectionPaths?: {
                                clientId?: string;
                                paths?: string[];
                            }[];
                            nextConnectionSequence?: bigint;
                            params?: {
                                maxExpectedTimePerBlock?: bigint;
                            };
                        };
                        channelGenesis?: {
                            channels?: {
                                state?: _113.State;
                                ordering?: _113.Order;
                                counterparty?: {
                                    portId?: string;
                                    channelId?: string;
                                };
                                connectionHops?: string[];
                                version?: string;
                                portId?: string;
                                channelId?: string;
                            }[];
                            acknowledgements?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: bigint;
                                data?: Uint8Array;
                            }[];
                            commitments?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: bigint;
                                data?: Uint8Array;
                            }[];
                            receipts?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: bigint;
                                data?: Uint8Array;
                            }[];
                            sendSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: bigint;
                            }[];
                            recvSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: bigint;
                            }[];
                            ackSequences?: {
                                portId?: string;
                                channelId?: string;
                                sequence?: bigint;
                            }[];
                            nextChannelSequence?: bigint;
                        };
                    }): _127.GenesisState;
                    fromSDK(object: _127.GenesisStateSDKType): _127.GenesisState;
                    toSDK(message: _127.GenesisState): _127.GenesisStateSDKType;
                    fromAmino(object: _127.GenesisStateAmino): _127.GenesisState;
                    toAmino(message: _127.GenesisState): _127.GenesisStateAmino;
                    fromAminoMsg(object: _127.GenesisStateAminoMsg): _127.GenesisState;
                    toAminoMsg(message: _127.GenesisState): _127.GenesisStateAminoMsg;
                    fromProtoMsg(message: _127.GenesisStateProtoMsg): _127.GenesisState;
                    toProto(message: _127.GenesisState): Uint8Array;
                    toProtoMsg(message: _127.GenesisState): _127.GenesisStateProtoMsg;
                };
            };
        }
    }
    namespace lightclients {
        namespace localhost {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _128.ClientState;
                    isSDK(o: any): o is _128.ClientStateSDKType;
                    isAmino(o: any): o is _128.ClientStateAmino;
                    encode(message: _128.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _128.ClientState;
                    fromJSON(object: any): _128.ClientState;
                    toJSON(message: _128.ClientState): unknown;
                    fromPartial(object: {
                        chainId?: string;
                        height?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                    }): _128.ClientState;
                    fromSDK(object: _128.ClientStateSDKType): _128.ClientState;
                    toSDK(message: _128.ClientState): _128.ClientStateSDKType;
                    fromAmino(object: _128.ClientStateAmino): _128.ClientState;
                    toAmino(message: _128.ClientState): _128.ClientStateAmino;
                    fromAminoMsg(object: _128.ClientStateAminoMsg): _128.ClientState;
                    toAminoMsg(message: _128.ClientState): _128.ClientStateAminoMsg;
                    fromProtoMsg(message: _128.ClientStateProtoMsg): _128.ClientState;
                    toProto(message: _128.ClientState): Uint8Array;
                    toProtoMsg(message: _128.ClientState): _128.ClientStateProtoMsg;
                };
            };
        }
        namespace solomachine {
            const v1: {
                dataTypeFromJSON(object: any): _129.DataType;
                dataTypeToJSON(object: _129.DataType): string;
                DataType: typeof _129.DataType;
                DataTypeSDKType: typeof _129.DataType;
                DataTypeAmino: typeof _129.DataType;
                ClientState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _129.ClientState;
                    isSDK(o: any): o is _129.ClientStateSDKType;
                    isAmino(o: any): o is _129.ClientStateAmino;
                    encode(message: _129.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.ClientState;
                    fromJSON(object: any): _129.ClientState;
                    toJSON(message: _129.ClientState): unknown;
                    fromPartial(object: {
                        sequence?: bigint;
                        frozenSequence?: bigint;
                        consensusState?: {
                            publicKey?: {
                                $typeUrl?: "/google.protobuf.Any";
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            diversifier?: string;
                            timestamp?: bigint;
                        };
                        allowUpdateAfterProposal?: boolean;
                    }): _129.ClientState;
                    fromSDK(object: _129.ClientStateSDKType): _129.ClientState;
                    toSDK(message: _129.ClientState): _129.ClientStateSDKType;
                    fromAmino(object: _129.ClientStateAmino): _129.ClientState;
                    toAmino(message: _129.ClientState): _129.ClientStateAmino;
                    fromAminoMsg(object: _129.ClientStateAminoMsg): _129.ClientState;
                    toAminoMsg(message: _129.ClientState): _129.ClientStateAminoMsg;
                    fromProtoMsg(message: _129.ClientStateProtoMsg): _129.ClientState;
                    toProto(message: _129.ClientState): Uint8Array;
                    toProtoMsg(message: _129.ClientState): _129.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _129.ConsensusState;
                    isSDK(o: any): o is _129.ConsensusStateSDKType;
                    isAmino(o: any): o is _129.ConsensusStateAmino;
                    encode(message: _129.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.ConsensusState;
                    fromJSON(object: any): _129.ConsensusState;
                    toJSON(message: _129.ConsensusState): unknown;
                    fromPartial(object: {
                        publicKey?: {
                            $typeUrl?: "/google.protobuf.Any";
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        diversifier?: string;
                        timestamp?: bigint;
                    }): _129.ConsensusState;
                    fromSDK(object: _129.ConsensusStateSDKType): _129.ConsensusState;
                    toSDK(message: _129.ConsensusState): _129.ConsensusStateSDKType;
                    fromAmino(object: _129.ConsensusStateAmino): _129.ConsensusState;
                    toAmino(message: _129.ConsensusState): _129.ConsensusStateAmino;
                    fromAminoMsg(object: _129.ConsensusStateAminoMsg): _129.ConsensusState;
                    toAminoMsg(message: _129.ConsensusState): _129.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _129.ConsensusStateProtoMsg): _129.ConsensusState;
                    toProto(message: _129.ConsensusState): Uint8Array;
                    toProtoMsg(message: _129.ConsensusState): _129.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _129.Header;
                    isSDK(o: any): o is _129.HeaderSDKType;
                    isAmino(o: any): o is _129.HeaderAmino;
                    encode(message: _129.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.Header;
                    fromJSON(object: any): _129.Header;
                    toJSON(message: _129.Header): unknown;
                    fromPartial(object: {
                        sequence?: bigint;
                        timestamp?: bigint;
                        signature?: Uint8Array;
                        newPublicKey?: {
                            $typeUrl?: "/google.protobuf.Any";
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _129.Header;
                    fromSDK(object: _129.HeaderSDKType): _129.Header;
                    toSDK(message: _129.Header): _129.HeaderSDKType;
                    fromAmino(object: _129.HeaderAmino): _129.Header;
                    toAmino(message: _129.Header): _129.HeaderAmino;
                    fromAminoMsg(object: _129.HeaderAminoMsg): _129.Header;
                    toAminoMsg(message: _129.Header): _129.HeaderAminoMsg;
                    fromProtoMsg(message: _129.HeaderProtoMsg): _129.Header;
                    toProto(message: _129.Header): Uint8Array;
                    toProtoMsg(message: _129.Header): _129.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _129.Misbehaviour;
                    isSDK(o: any): o is _129.MisbehaviourSDKType;
                    isAmino(o: any): o is _129.MisbehaviourAmino;
                    encode(message: _129.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.Misbehaviour;
                    fromJSON(object: any): _129.Misbehaviour;
                    toJSON(message: _129.Misbehaviour): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        sequence?: bigint;
                        signatureOne?: {
                            signature?: Uint8Array;
                            dataType?: _129.DataType;
                            data?: Uint8Array;
                            timestamp?: bigint;
                        };
                        signatureTwo?: {
                            signature?: Uint8Array;
                            dataType?: _129.DataType;
                            data?: Uint8Array;
                            timestamp?: bigint;
                        };
                    }): _129.Misbehaviour;
                    fromSDK(object: _129.MisbehaviourSDKType): _129.Misbehaviour;
                    toSDK(message: _129.Misbehaviour): _129.MisbehaviourSDKType;
                    fromAmino(object: _129.MisbehaviourAmino): _129.Misbehaviour;
                    toAmino(message: _129.Misbehaviour): _129.MisbehaviourAmino;
                    fromAminoMsg(object: _129.MisbehaviourAminoMsg): _129.Misbehaviour;
                    toAminoMsg(message: _129.Misbehaviour): _129.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _129.MisbehaviourProtoMsg): _129.Misbehaviour;
                    toProto(message: _129.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _129.Misbehaviour): _129.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _129.SignatureAndData;
                    isSDK(o: any): o is _129.SignatureAndDataSDKType;
                    isAmino(o: any): o is _129.SignatureAndDataAmino;
                    encode(message: _129.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.SignatureAndData;
                    fromJSON(object: any): _129.SignatureAndData;
                    toJSON(message: _129.SignatureAndData): unknown;
                    fromPartial(object: {
                        signature?: Uint8Array;
                        dataType?: _129.DataType;
                        data?: Uint8Array;
                        timestamp?: bigint;
                    }): _129.SignatureAndData;
                    fromSDK(object: _129.SignatureAndDataSDKType): _129.SignatureAndData;
                    toSDK(message: _129.SignatureAndData): _129.SignatureAndDataSDKType;
                    fromAmino(object: _129.SignatureAndDataAmino): _129.SignatureAndData;
                    toAmino(message: _129.SignatureAndData): _129.SignatureAndDataAmino;
                    fromAminoMsg(object: _129.SignatureAndDataAminoMsg): _129.SignatureAndData;
                    toAminoMsg(message: _129.SignatureAndData): _129.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _129.SignatureAndDataProtoMsg): _129.SignatureAndData;
                    toProto(message: _129.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _129.SignatureAndData): _129.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _129.TimestampedSignatureData;
                    isSDK(o: any): o is _129.TimestampedSignatureDataSDKType;
                    isAmino(o: any): o is _129.TimestampedSignatureDataAmino;
                    encode(message: _129.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.TimestampedSignatureData;
                    fromJSON(object: any): _129.TimestampedSignatureData;
                    toJSON(message: _129.TimestampedSignatureData): unknown;
                    fromPartial(object: {
                        signatureData?: Uint8Array;
                        timestamp?: bigint;
                    }): _129.TimestampedSignatureData;
                    fromSDK(object: _129.TimestampedSignatureDataSDKType): _129.TimestampedSignatureData;
                    toSDK(message: _129.TimestampedSignatureData): _129.TimestampedSignatureDataSDKType;
                    fromAmino(object: _129.TimestampedSignatureDataAmino): _129.TimestampedSignatureData;
                    toAmino(message: _129.TimestampedSignatureData): _129.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _129.TimestampedSignatureDataAminoMsg): _129.TimestampedSignatureData;
                    toAminoMsg(message: _129.TimestampedSignatureData): _129.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _129.TimestampedSignatureDataProtoMsg): _129.TimestampedSignatureData;
                    toProto(message: _129.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _129.TimestampedSignatureData): _129.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _129.SignBytes;
                    isSDK(o: any): o is _129.SignBytesSDKType;
                    isAmino(o: any): o is _129.SignBytesAmino;
                    encode(message: _129.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.SignBytes;
                    fromJSON(object: any): _129.SignBytes;
                    toJSON(message: _129.SignBytes): unknown;
                    fromPartial(object: {
                        sequence?: bigint;
                        timestamp?: bigint;
                        diversifier?: string;
                        dataType?: _129.DataType;
                        data?: Uint8Array;
                    }): _129.SignBytes;
                    fromSDK(object: _129.SignBytesSDKType): _129.SignBytes;
                    toSDK(message: _129.SignBytes): _129.SignBytesSDKType;
                    fromAmino(object: _129.SignBytesAmino): _129.SignBytes;
                    toAmino(message: _129.SignBytes): _129.SignBytesAmino;
                    fromAminoMsg(object: _129.SignBytesAminoMsg): _129.SignBytes;
                    toAminoMsg(message: _129.SignBytes): _129.SignBytesAminoMsg;
                    fromProtoMsg(message: _129.SignBytesProtoMsg): _129.SignBytes;
                    toProto(message: _129.SignBytes): Uint8Array;
                    toProtoMsg(message: _129.SignBytes): _129.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _129.HeaderData;
                    isSDK(o: any): o is _129.HeaderDataSDKType;
                    isAmino(o: any): o is _129.HeaderDataAmino;
                    encode(message: _129.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.HeaderData;
                    fromJSON(object: any): _129.HeaderData;
                    toJSON(message: _129.HeaderData): unknown;
                    fromPartial(object: {
                        newPubKey?: {
                            $typeUrl?: "/google.protobuf.Any";
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _129.HeaderData;
                    fromSDK(object: _129.HeaderDataSDKType): _129.HeaderData;
                    toSDK(message: _129.HeaderData): _129.HeaderDataSDKType;
                    fromAmino(object: _129.HeaderDataAmino): _129.HeaderData;
                    toAmino(message: _129.HeaderData): _129.HeaderDataAmino;
                    fromAminoMsg(object: _129.HeaderDataAminoMsg): _129.HeaderData;
                    toAminoMsg(message: _129.HeaderData): _129.HeaderDataAminoMsg;
                    fromProtoMsg(message: _129.HeaderDataProtoMsg): _129.HeaderData;
                    toProto(message: _129.HeaderData): Uint8Array;
                    toProtoMsg(message: _129.HeaderData): _129.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _129.ClientStateData;
                    isSDK(o: any): o is _129.ClientStateDataSDKType;
                    isAmino(o: any): o is _129.ClientStateDataAmino;
                    encode(message: _129.ClientStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.ClientStateData;
                    fromJSON(object: any): _129.ClientStateData;
                    toJSON(message: _129.ClientStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        clientState?: {
                            $typeUrl?: "/google.protobuf.Any";
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _129.ClientStateData;
                    fromSDK(object: _129.ClientStateDataSDKType): _129.ClientStateData;
                    toSDK(message: _129.ClientStateData): _129.ClientStateDataSDKType;
                    fromAmino(object: _129.ClientStateDataAmino): _129.ClientStateData;
                    toAmino(message: _129.ClientStateData): _129.ClientStateDataAmino;
                    fromAminoMsg(object: _129.ClientStateDataAminoMsg): _129.ClientStateData;
                    toAminoMsg(message: _129.ClientStateData): _129.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _129.ClientStateDataProtoMsg): _129.ClientStateData;
                    toProto(message: _129.ClientStateData): Uint8Array;
                    toProtoMsg(message: _129.ClientStateData): _129.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _129.ConsensusStateData;
                    isSDK(o: any): o is _129.ConsensusStateDataSDKType;
                    isAmino(o: any): o is _129.ConsensusStateDataAmino;
                    encode(message: _129.ConsensusStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.ConsensusStateData;
                    fromJSON(object: any): _129.ConsensusStateData;
                    toJSON(message: _129.ConsensusStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        consensusState?: {
                            $typeUrl?: "/google.protobuf.Any";
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _129.ConsensusStateData;
                    fromSDK(object: _129.ConsensusStateDataSDKType): _129.ConsensusStateData;
                    toSDK(message: _129.ConsensusStateData): _129.ConsensusStateDataSDKType;
                    fromAmino(object: _129.ConsensusStateDataAmino): _129.ConsensusStateData;
                    toAmino(message: _129.ConsensusStateData): _129.ConsensusStateDataAmino;
                    fromAminoMsg(object: _129.ConsensusStateDataAminoMsg): _129.ConsensusStateData;
                    toAminoMsg(message: _129.ConsensusStateData): _129.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _129.ConsensusStateDataProtoMsg): _129.ConsensusStateData;
                    toProto(message: _129.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _129.ConsensusStateData): _129.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _129.ConnectionStateData;
                    isSDK(o: any): o is _129.ConnectionStateDataSDKType;
                    isAmino(o: any): o is _129.ConnectionStateDataAmino;
                    encode(message: _129.ConnectionStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.ConnectionStateData;
                    fromJSON(object: any): _129.ConnectionStateData;
                    toJSON(message: _129.ConnectionStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _122.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: bigint;
                        };
                    }): _129.ConnectionStateData;
                    fromSDK(object: _129.ConnectionStateDataSDKType): _129.ConnectionStateData;
                    toSDK(message: _129.ConnectionStateData): _129.ConnectionStateDataSDKType;
                    fromAmino(object: _129.ConnectionStateDataAmino): _129.ConnectionStateData;
                    toAmino(message: _129.ConnectionStateData): _129.ConnectionStateDataAmino;
                    fromAminoMsg(object: _129.ConnectionStateDataAminoMsg): _129.ConnectionStateData;
                    toAminoMsg(message: _129.ConnectionStateData): _129.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _129.ConnectionStateDataProtoMsg): _129.ConnectionStateData;
                    toProto(message: _129.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _129.ConnectionStateData): _129.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _129.ChannelStateData;
                    isSDK(o: any): o is _129.ChannelStateDataSDKType;
                    isAmino(o: any): o is _129.ChannelStateDataAmino;
                    encode(message: _129.ChannelStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.ChannelStateData;
                    fromJSON(object: any): _129.ChannelStateData;
                    toJSON(message: _129.ChannelStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        channel?: {
                            state?: _113.State;
                            ordering?: _113.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                    }): _129.ChannelStateData;
                    fromSDK(object: _129.ChannelStateDataSDKType): _129.ChannelStateData;
                    toSDK(message: _129.ChannelStateData): _129.ChannelStateDataSDKType;
                    fromAmino(object: _129.ChannelStateDataAmino): _129.ChannelStateData;
                    toAmino(message: _129.ChannelStateData): _129.ChannelStateDataAmino;
                    fromAminoMsg(object: _129.ChannelStateDataAminoMsg): _129.ChannelStateData;
                    toAminoMsg(message: _129.ChannelStateData): _129.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _129.ChannelStateDataProtoMsg): _129.ChannelStateData;
                    toProto(message: _129.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _129.ChannelStateData): _129.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _129.PacketCommitmentData;
                    isSDK(o: any): o is _129.PacketCommitmentDataSDKType;
                    isAmino(o: any): o is _129.PacketCommitmentDataAmino;
                    encode(message: _129.PacketCommitmentData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.PacketCommitmentData;
                    fromJSON(object: any): _129.PacketCommitmentData;
                    toJSON(message: _129.PacketCommitmentData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        commitment?: Uint8Array;
                    }): _129.PacketCommitmentData;
                    fromSDK(object: _129.PacketCommitmentDataSDKType): _129.PacketCommitmentData;
                    toSDK(message: _129.PacketCommitmentData): _129.PacketCommitmentDataSDKType;
                    fromAmino(object: _129.PacketCommitmentDataAmino): _129.PacketCommitmentData;
                    toAmino(message: _129.PacketCommitmentData): _129.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _129.PacketCommitmentDataAminoMsg): _129.PacketCommitmentData;
                    toAminoMsg(message: _129.PacketCommitmentData): _129.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _129.PacketCommitmentDataProtoMsg): _129.PacketCommitmentData;
                    toProto(message: _129.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _129.PacketCommitmentData): _129.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _129.PacketAcknowledgementData;
                    isSDK(o: any): o is _129.PacketAcknowledgementDataSDKType;
                    isAmino(o: any): o is _129.PacketAcknowledgementDataAmino;
                    encode(message: _129.PacketAcknowledgementData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.PacketAcknowledgementData;
                    fromJSON(object: any): _129.PacketAcknowledgementData;
                    toJSON(message: _129.PacketAcknowledgementData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        acknowledgement?: Uint8Array;
                    }): _129.PacketAcknowledgementData;
                    fromSDK(object: _129.PacketAcknowledgementDataSDKType): _129.PacketAcknowledgementData;
                    toSDK(message: _129.PacketAcknowledgementData): _129.PacketAcknowledgementDataSDKType;
                    fromAmino(object: _129.PacketAcknowledgementDataAmino): _129.PacketAcknowledgementData;
                    toAmino(message: _129.PacketAcknowledgementData): _129.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _129.PacketAcknowledgementDataAminoMsg): _129.PacketAcknowledgementData;
                    toAminoMsg(message: _129.PacketAcknowledgementData): _129.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _129.PacketAcknowledgementDataProtoMsg): _129.PacketAcknowledgementData;
                    toProto(message: _129.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _129.PacketAcknowledgementData): _129.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _129.PacketReceiptAbsenceData;
                    isSDK(o: any): o is _129.PacketReceiptAbsenceDataSDKType;
                    isAmino(o: any): o is _129.PacketReceiptAbsenceDataAmino;
                    encode(message: _129.PacketReceiptAbsenceData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.PacketReceiptAbsenceData;
                    fromJSON(object: any): _129.PacketReceiptAbsenceData;
                    toJSON(message: _129.PacketReceiptAbsenceData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                    }): _129.PacketReceiptAbsenceData;
                    fromSDK(object: _129.PacketReceiptAbsenceDataSDKType): _129.PacketReceiptAbsenceData;
                    toSDK(message: _129.PacketReceiptAbsenceData): _129.PacketReceiptAbsenceDataSDKType;
                    fromAmino(object: _129.PacketReceiptAbsenceDataAmino): _129.PacketReceiptAbsenceData;
                    toAmino(message: _129.PacketReceiptAbsenceData): _129.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _129.PacketReceiptAbsenceDataAminoMsg): _129.PacketReceiptAbsenceData;
                    toAminoMsg(message: _129.PacketReceiptAbsenceData): _129.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _129.PacketReceiptAbsenceDataProtoMsg): _129.PacketReceiptAbsenceData;
                    toProto(message: _129.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _129.PacketReceiptAbsenceData): _129.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _129.NextSequenceRecvData;
                    isSDK(o: any): o is _129.NextSequenceRecvDataSDKType;
                    isAmino(o: any): o is _129.NextSequenceRecvDataAmino;
                    encode(message: _129.NextSequenceRecvData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _129.NextSequenceRecvData;
                    fromJSON(object: any): _129.NextSequenceRecvData;
                    toJSON(message: _129.NextSequenceRecvData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        nextSeqRecv?: bigint;
                    }): _129.NextSequenceRecvData;
                    fromSDK(object: _129.NextSequenceRecvDataSDKType): _129.NextSequenceRecvData;
                    toSDK(message: _129.NextSequenceRecvData): _129.NextSequenceRecvDataSDKType;
                    fromAmino(object: _129.NextSequenceRecvDataAmino): _129.NextSequenceRecvData;
                    toAmino(message: _129.NextSequenceRecvData): _129.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _129.NextSequenceRecvDataAminoMsg): _129.NextSequenceRecvData;
                    toAminoMsg(message: _129.NextSequenceRecvData): _129.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _129.NextSequenceRecvDataProtoMsg): _129.NextSequenceRecvData;
                    toProto(message: _129.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _129.NextSequenceRecvData): _129.NextSequenceRecvDataProtoMsg;
                };
            };
            const v2: {
                dataTypeFromJSON(object: any): _130.DataType;
                dataTypeToJSON(object: _130.DataType): string;
                DataType: typeof _130.DataType;
                DataTypeSDKType: typeof _130.DataType;
                DataTypeAmino: typeof _130.DataType;
                ClientState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _130.ClientState;
                    isSDK(o: any): o is _130.ClientStateSDKType;
                    isAmino(o: any): o is _130.ClientStateAmino;
                    encode(message: _130.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _130.ClientState;
                    fromJSON(object: any): _130.ClientState;
                    toJSON(message: _130.ClientState): unknown;
                    fromPartial(object: {
                        sequence?: bigint;
                        isFrozen?: boolean;
                        consensusState?: {
                            publicKey?: {
                                $typeUrl?: "/google.protobuf.Any";
                                typeUrl?: string;
                                value?: Uint8Array;
                            };
                            diversifier?: string;
                            timestamp?: bigint;
                        };
                        allowUpdateAfterProposal?: boolean;
                    }): _130.ClientState;
                    fromSDK(object: _130.ClientStateSDKType): _130.ClientState;
                    toSDK(message: _130.ClientState): _130.ClientStateSDKType;
                    fromAmino(object: _130.ClientStateAmino): _130.ClientState;
                    toAmino(message: _130.ClientState): _130.ClientStateAmino;
                    fromAminoMsg(object: _130.ClientStateAminoMsg): _130.ClientState;
                    toAminoMsg(message: _130.ClientState): _130.ClientStateAminoMsg;
                    fromProtoMsg(message: _130.ClientStateProtoMsg): _130.ClientState;
                    toProto(message: _130.ClientState): Uint8Array;
                    toProtoMsg(message: _130.ClientState): _130.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _130.ConsensusState;
                    isSDK(o: any): o is _130.ConsensusStateSDKType;
                    isAmino(o: any): o is _130.ConsensusStateAmino;
                    encode(message: _130.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _130.ConsensusState;
                    fromJSON(object: any): _130.ConsensusState;
                    toJSON(message: _130.ConsensusState): unknown;
                    fromPartial(object: {
                        publicKey?: {
                            $typeUrl?: "/google.protobuf.Any";
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        diversifier?: string;
                        timestamp?: bigint;
                    }): _130.ConsensusState;
                    fromSDK(object: _130.ConsensusStateSDKType): _130.ConsensusState;
                    toSDK(message: _130.ConsensusState): _130.ConsensusStateSDKType;
                    fromAmino(object: _130.ConsensusStateAmino): _130.ConsensusState;
                    toAmino(message: _130.ConsensusState): _130.ConsensusStateAmino;
                    fromAminoMsg(object: _130.ConsensusStateAminoMsg): _130.ConsensusState;
                    toAminoMsg(message: _130.ConsensusState): _130.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _130.ConsensusStateProtoMsg): _130.ConsensusState;
                    toProto(message: _130.ConsensusState): Uint8Array;
                    toProtoMsg(message: _130.ConsensusState): _130.ConsensusStateProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _130.Header;
                    isSDK(o: any): o is _130.HeaderSDKType;
                    isAmino(o: any): o is _130.HeaderAmino;
                    encode(message: _130.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _130.Header;
                    fromJSON(object: any): _130.Header;
                    toJSON(message: _130.Header): unknown;
                    fromPartial(object: {
                        sequence?: bigint;
                        timestamp?: bigint;
                        signature?: Uint8Array;
                        newPublicKey?: {
                            $typeUrl?: "/google.protobuf.Any";
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _130.Header;
                    fromSDK(object: _130.HeaderSDKType): _130.Header;
                    toSDK(message: _130.Header): _130.HeaderSDKType;
                    fromAmino(object: _130.HeaderAmino): _130.Header;
                    toAmino(message: _130.Header): _130.HeaderAmino;
                    fromAminoMsg(object: _130.HeaderAminoMsg): _130.Header;
                    toAminoMsg(message: _130.Header): _130.HeaderAminoMsg;
                    fromProtoMsg(message: _130.HeaderProtoMsg): _130.Header;
                    toProto(message: _130.Header): Uint8Array;
                    toProtoMsg(message: _130.Header): _130.HeaderProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _130.Misbehaviour;
                    isSDK(o: any): o is _130.MisbehaviourSDKType;
                    isAmino(o: any): o is _130.MisbehaviourAmino;
                    encode(message: _130.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _130.Misbehaviour;
                    fromJSON(object: any): _130.Misbehaviour;
                    toJSON(message: _130.Misbehaviour): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        sequence?: bigint;
                        signatureOne?: {
                            signature?: Uint8Array;
                            dataType?: _130.DataType;
                            data?: Uint8Array;
                            timestamp?: bigint;
                        };
                        signatureTwo?: {
                            signature?: Uint8Array;
                            dataType?: _130.DataType;
                            data?: Uint8Array;
                            timestamp?: bigint;
                        };
                    }): _130.Misbehaviour;
                    fromSDK(object: _130.MisbehaviourSDKType): _130.Misbehaviour;
                    toSDK(message: _130.Misbehaviour): _130.MisbehaviourSDKType;
                    fromAmino(object: _130.MisbehaviourAmino): _130.Misbehaviour;
                    toAmino(message: _130.Misbehaviour): _130.MisbehaviourAmino;
                    fromAminoMsg(object: _130.MisbehaviourAminoMsg): _130.Misbehaviour;
                    toAminoMsg(message: _130.Misbehaviour): _130.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _130.MisbehaviourProtoMsg): _130.Misbehaviour;
                    toProto(message: _130.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _130.Misbehaviour): _130.MisbehaviourProtoMsg;
                };
                SignatureAndData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _130.SignatureAndData;
                    isSDK(o: any): o is _130.SignatureAndDataSDKType;
                    isAmino(o: any): o is _130.SignatureAndDataAmino;
                    encode(message: _130.SignatureAndData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _130.SignatureAndData;
                    fromJSON(object: any): _130.SignatureAndData;
                    toJSON(message: _130.SignatureAndData): unknown;
                    fromPartial(object: {
                        signature?: Uint8Array;
                        dataType?: _130.DataType;
                        data?: Uint8Array;
                        timestamp?: bigint;
                    }): _130.SignatureAndData;
                    fromSDK(object: _130.SignatureAndDataSDKType): _130.SignatureAndData;
                    toSDK(message: _130.SignatureAndData): _130.SignatureAndDataSDKType;
                    fromAmino(object: _130.SignatureAndDataAmino): _130.SignatureAndData;
                    toAmino(message: _130.SignatureAndData): _130.SignatureAndDataAmino;
                    fromAminoMsg(object: _130.SignatureAndDataAminoMsg): _130.SignatureAndData;
                    toAminoMsg(message: _130.SignatureAndData): _130.SignatureAndDataAminoMsg;
                    fromProtoMsg(message: _130.SignatureAndDataProtoMsg): _130.SignatureAndData;
                    toProto(message: _130.SignatureAndData): Uint8Array;
                    toProtoMsg(message: _130.SignatureAndData): _130.SignatureAndDataProtoMsg;
                };
                TimestampedSignatureData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _130.TimestampedSignatureData;
                    isSDK(o: any): o is _130.TimestampedSignatureDataSDKType;
                    isAmino(o: any): o is _130.TimestampedSignatureDataAmino;
                    encode(message: _130.TimestampedSignatureData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _130.TimestampedSignatureData;
                    fromJSON(object: any): _130.TimestampedSignatureData;
                    toJSON(message: _130.TimestampedSignatureData): unknown;
                    fromPartial(object: {
                        signatureData?: Uint8Array;
                        timestamp?: bigint;
                    }): _130.TimestampedSignatureData;
                    fromSDK(object: _130.TimestampedSignatureDataSDKType): _130.TimestampedSignatureData;
                    toSDK(message: _130.TimestampedSignatureData): _130.TimestampedSignatureDataSDKType;
                    fromAmino(object: _130.TimestampedSignatureDataAmino): _130.TimestampedSignatureData;
                    toAmino(message: _130.TimestampedSignatureData): _130.TimestampedSignatureDataAmino;
                    fromAminoMsg(object: _130.TimestampedSignatureDataAminoMsg): _130.TimestampedSignatureData;
                    toAminoMsg(message: _130.TimestampedSignatureData): _130.TimestampedSignatureDataAminoMsg;
                    fromProtoMsg(message: _130.TimestampedSignatureDataProtoMsg): _130.TimestampedSignatureData;
                    toProto(message: _130.TimestampedSignatureData): Uint8Array;
                    toProtoMsg(message: _130.TimestampedSignatureData): _130.TimestampedSignatureDataProtoMsg;
                };
                SignBytes: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _130.SignBytes;
                    isSDK(o: any): o is _130.SignBytesSDKType;
                    isAmino(o: any): o is _130.SignBytesAmino;
                    encode(message: _130.SignBytes, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _130.SignBytes;
                    fromJSON(object: any): _130.SignBytes;
                    toJSON(message: _130.SignBytes): unknown;
                    fromPartial(object: {
                        sequence?: bigint;
                        timestamp?: bigint;
                        diversifier?: string;
                        dataType?: _130.DataType;
                        data?: Uint8Array;
                    }): _130.SignBytes;
                    fromSDK(object: _130.SignBytesSDKType): _130.SignBytes;
                    toSDK(message: _130.SignBytes): _130.SignBytesSDKType;
                    fromAmino(object: _130.SignBytesAmino): _130.SignBytes;
                    toAmino(message: _130.SignBytes): _130.SignBytesAmino;
                    fromAminoMsg(object: _130.SignBytesAminoMsg): _130.SignBytes;
                    toAminoMsg(message: _130.SignBytes): _130.SignBytesAminoMsg;
                    fromProtoMsg(message: _130.SignBytesProtoMsg): _130.SignBytes;
                    toProto(message: _130.SignBytes): Uint8Array;
                    toProtoMsg(message: _130.SignBytes): _130.SignBytesProtoMsg;
                };
                HeaderData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _130.HeaderData;
                    isSDK(o: any): o is _130.HeaderDataSDKType;
                    isAmino(o: any): o is _130.HeaderDataAmino;
                    encode(message: _130.HeaderData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _130.HeaderData;
                    fromJSON(object: any): _130.HeaderData;
                    toJSON(message: _130.HeaderData): unknown;
                    fromPartial(object: {
                        newPubKey?: {
                            $typeUrl?: "/google.protobuf.Any";
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                        newDiversifier?: string;
                    }): _130.HeaderData;
                    fromSDK(object: _130.HeaderDataSDKType): _130.HeaderData;
                    toSDK(message: _130.HeaderData): _130.HeaderDataSDKType;
                    fromAmino(object: _130.HeaderDataAmino): _130.HeaderData;
                    toAmino(message: _130.HeaderData): _130.HeaderDataAmino;
                    fromAminoMsg(object: _130.HeaderDataAminoMsg): _130.HeaderData;
                    toAminoMsg(message: _130.HeaderData): _130.HeaderDataAminoMsg;
                    fromProtoMsg(message: _130.HeaderDataProtoMsg): _130.HeaderData;
                    toProto(message: _130.HeaderData): Uint8Array;
                    toProtoMsg(message: _130.HeaderData): _130.HeaderDataProtoMsg;
                };
                ClientStateData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _130.ClientStateData;
                    isSDK(o: any): o is _130.ClientStateDataSDKType;
                    isAmino(o: any): o is _130.ClientStateDataAmino;
                    encode(message: _130.ClientStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _130.ClientStateData;
                    fromJSON(object: any): _130.ClientStateData;
                    toJSON(message: _130.ClientStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        clientState?: {
                            $typeUrl?: "/google.protobuf.Any";
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _130.ClientStateData;
                    fromSDK(object: _130.ClientStateDataSDKType): _130.ClientStateData;
                    toSDK(message: _130.ClientStateData): _130.ClientStateDataSDKType;
                    fromAmino(object: _130.ClientStateDataAmino): _130.ClientStateData;
                    toAmino(message: _130.ClientStateData): _130.ClientStateDataAmino;
                    fromAminoMsg(object: _130.ClientStateDataAminoMsg): _130.ClientStateData;
                    toAminoMsg(message: _130.ClientStateData): _130.ClientStateDataAminoMsg;
                    fromProtoMsg(message: _130.ClientStateDataProtoMsg): _130.ClientStateData;
                    toProto(message: _130.ClientStateData): Uint8Array;
                    toProtoMsg(message: _130.ClientStateData): _130.ClientStateDataProtoMsg;
                };
                ConsensusStateData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _130.ConsensusStateData;
                    isSDK(o: any): o is _130.ConsensusStateDataSDKType;
                    isAmino(o: any): o is _130.ConsensusStateDataAmino;
                    encode(message: _130.ConsensusStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _130.ConsensusStateData;
                    fromJSON(object: any): _130.ConsensusStateData;
                    toJSON(message: _130.ConsensusStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        consensusState?: {
                            $typeUrl?: "/google.protobuf.Any";
                            typeUrl?: string;
                            value?: Uint8Array;
                        };
                    }): _130.ConsensusStateData;
                    fromSDK(object: _130.ConsensusStateDataSDKType): _130.ConsensusStateData;
                    toSDK(message: _130.ConsensusStateData): _130.ConsensusStateDataSDKType;
                    fromAmino(object: _130.ConsensusStateDataAmino): _130.ConsensusStateData;
                    toAmino(message: _130.ConsensusStateData): _130.ConsensusStateDataAmino;
                    fromAminoMsg(object: _130.ConsensusStateDataAminoMsg): _130.ConsensusStateData;
                    toAminoMsg(message: _130.ConsensusStateData): _130.ConsensusStateDataAminoMsg;
                    fromProtoMsg(message: _130.ConsensusStateDataProtoMsg): _130.ConsensusStateData;
                    toProto(message: _130.ConsensusStateData): Uint8Array;
                    toProtoMsg(message: _130.ConsensusStateData): _130.ConsensusStateDataProtoMsg;
                };
                ConnectionStateData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _130.ConnectionStateData;
                    isSDK(o: any): o is _130.ConnectionStateDataSDKType;
                    isAmino(o: any): o is _130.ConnectionStateDataAmino;
                    encode(message: _130.ConnectionStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _130.ConnectionStateData;
                    fromJSON(object: any): _130.ConnectionStateData;
                    toJSON(message: _130.ConnectionStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        connection?: {
                            clientId?: string;
                            versions?: {
                                identifier?: string;
                                features?: string[];
                            }[];
                            state?: _122.State;
                            counterparty?: {
                                clientId?: string;
                                connectionId?: string;
                                prefix?: {
                                    keyPrefix?: Uint8Array;
                                };
                            };
                            delayPeriod?: bigint;
                        };
                    }): _130.ConnectionStateData;
                    fromSDK(object: _130.ConnectionStateDataSDKType): _130.ConnectionStateData;
                    toSDK(message: _130.ConnectionStateData): _130.ConnectionStateDataSDKType;
                    fromAmino(object: _130.ConnectionStateDataAmino): _130.ConnectionStateData;
                    toAmino(message: _130.ConnectionStateData): _130.ConnectionStateDataAmino;
                    fromAminoMsg(object: _130.ConnectionStateDataAminoMsg): _130.ConnectionStateData;
                    toAminoMsg(message: _130.ConnectionStateData): _130.ConnectionStateDataAminoMsg;
                    fromProtoMsg(message: _130.ConnectionStateDataProtoMsg): _130.ConnectionStateData;
                    toProto(message: _130.ConnectionStateData): Uint8Array;
                    toProtoMsg(message: _130.ConnectionStateData): _130.ConnectionStateDataProtoMsg;
                };
                ChannelStateData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _130.ChannelStateData;
                    isSDK(o: any): o is _130.ChannelStateDataSDKType;
                    isAmino(o: any): o is _130.ChannelStateDataAmino;
                    encode(message: _130.ChannelStateData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _130.ChannelStateData;
                    fromJSON(object: any): _130.ChannelStateData;
                    toJSON(message: _130.ChannelStateData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        channel?: {
                            state?: _113.State;
                            ordering?: _113.Order;
                            counterparty?: {
                                portId?: string;
                                channelId?: string;
                            };
                            connectionHops?: string[];
                            version?: string;
                        };
                    }): _130.ChannelStateData;
                    fromSDK(object: _130.ChannelStateDataSDKType): _130.ChannelStateData;
                    toSDK(message: _130.ChannelStateData): _130.ChannelStateDataSDKType;
                    fromAmino(object: _130.ChannelStateDataAmino): _130.ChannelStateData;
                    toAmino(message: _130.ChannelStateData): _130.ChannelStateDataAmino;
                    fromAminoMsg(object: _130.ChannelStateDataAminoMsg): _130.ChannelStateData;
                    toAminoMsg(message: _130.ChannelStateData): _130.ChannelStateDataAminoMsg;
                    fromProtoMsg(message: _130.ChannelStateDataProtoMsg): _130.ChannelStateData;
                    toProto(message: _130.ChannelStateData): Uint8Array;
                    toProtoMsg(message: _130.ChannelStateData): _130.ChannelStateDataProtoMsg;
                };
                PacketCommitmentData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _130.PacketCommitmentData;
                    isSDK(o: any): o is _130.PacketCommitmentDataSDKType;
                    isAmino(o: any): o is _130.PacketCommitmentDataAmino;
                    encode(message: _130.PacketCommitmentData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _130.PacketCommitmentData;
                    fromJSON(object: any): _130.PacketCommitmentData;
                    toJSON(message: _130.PacketCommitmentData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        commitment?: Uint8Array;
                    }): _130.PacketCommitmentData;
                    fromSDK(object: _130.PacketCommitmentDataSDKType): _130.PacketCommitmentData;
                    toSDK(message: _130.PacketCommitmentData): _130.PacketCommitmentDataSDKType;
                    fromAmino(object: _130.PacketCommitmentDataAmino): _130.PacketCommitmentData;
                    toAmino(message: _130.PacketCommitmentData): _130.PacketCommitmentDataAmino;
                    fromAminoMsg(object: _130.PacketCommitmentDataAminoMsg): _130.PacketCommitmentData;
                    toAminoMsg(message: _130.PacketCommitmentData): _130.PacketCommitmentDataAminoMsg;
                    fromProtoMsg(message: _130.PacketCommitmentDataProtoMsg): _130.PacketCommitmentData;
                    toProto(message: _130.PacketCommitmentData): Uint8Array;
                    toProtoMsg(message: _130.PacketCommitmentData): _130.PacketCommitmentDataProtoMsg;
                };
                PacketAcknowledgementData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _130.PacketAcknowledgementData;
                    isSDK(o: any): o is _130.PacketAcknowledgementDataSDKType;
                    isAmino(o: any): o is _130.PacketAcknowledgementDataAmino;
                    encode(message: _130.PacketAcknowledgementData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _130.PacketAcknowledgementData;
                    fromJSON(object: any): _130.PacketAcknowledgementData;
                    toJSON(message: _130.PacketAcknowledgementData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        acknowledgement?: Uint8Array;
                    }): _130.PacketAcknowledgementData;
                    fromSDK(object: _130.PacketAcknowledgementDataSDKType): _130.PacketAcknowledgementData;
                    toSDK(message: _130.PacketAcknowledgementData): _130.PacketAcknowledgementDataSDKType;
                    fromAmino(object: _130.PacketAcknowledgementDataAmino): _130.PacketAcknowledgementData;
                    toAmino(message: _130.PacketAcknowledgementData): _130.PacketAcknowledgementDataAmino;
                    fromAminoMsg(object: _130.PacketAcknowledgementDataAminoMsg): _130.PacketAcknowledgementData;
                    toAminoMsg(message: _130.PacketAcknowledgementData): _130.PacketAcknowledgementDataAminoMsg;
                    fromProtoMsg(message: _130.PacketAcknowledgementDataProtoMsg): _130.PacketAcknowledgementData;
                    toProto(message: _130.PacketAcknowledgementData): Uint8Array;
                    toProtoMsg(message: _130.PacketAcknowledgementData): _130.PacketAcknowledgementDataProtoMsg;
                };
                PacketReceiptAbsenceData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _130.PacketReceiptAbsenceData;
                    isSDK(o: any): o is _130.PacketReceiptAbsenceDataSDKType;
                    isAmino(o: any): o is _130.PacketReceiptAbsenceDataAmino;
                    encode(message: _130.PacketReceiptAbsenceData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _130.PacketReceiptAbsenceData;
                    fromJSON(object: any): _130.PacketReceiptAbsenceData;
                    toJSON(message: _130.PacketReceiptAbsenceData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                    }): _130.PacketReceiptAbsenceData;
                    fromSDK(object: _130.PacketReceiptAbsenceDataSDKType): _130.PacketReceiptAbsenceData;
                    toSDK(message: _130.PacketReceiptAbsenceData): _130.PacketReceiptAbsenceDataSDKType;
                    fromAmino(object: _130.PacketReceiptAbsenceDataAmino): _130.PacketReceiptAbsenceData;
                    toAmino(message: _130.PacketReceiptAbsenceData): _130.PacketReceiptAbsenceDataAmino;
                    fromAminoMsg(object: _130.PacketReceiptAbsenceDataAminoMsg): _130.PacketReceiptAbsenceData;
                    toAminoMsg(message: _130.PacketReceiptAbsenceData): _130.PacketReceiptAbsenceDataAminoMsg;
                    fromProtoMsg(message: _130.PacketReceiptAbsenceDataProtoMsg): _130.PacketReceiptAbsenceData;
                    toProto(message: _130.PacketReceiptAbsenceData): Uint8Array;
                    toProtoMsg(message: _130.PacketReceiptAbsenceData): _130.PacketReceiptAbsenceDataProtoMsg;
                };
                NextSequenceRecvData: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _130.NextSequenceRecvData;
                    isSDK(o: any): o is _130.NextSequenceRecvDataSDKType;
                    isAmino(o: any): o is _130.NextSequenceRecvDataAmino;
                    encode(message: _130.NextSequenceRecvData, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _130.NextSequenceRecvData;
                    fromJSON(object: any): _130.NextSequenceRecvData;
                    toJSON(message: _130.NextSequenceRecvData): unknown;
                    fromPartial(object: {
                        path?: Uint8Array;
                        nextSeqRecv?: bigint;
                    }): _130.NextSequenceRecvData;
                    fromSDK(object: _130.NextSequenceRecvDataSDKType): _130.NextSequenceRecvData;
                    toSDK(message: _130.NextSequenceRecvData): _130.NextSequenceRecvDataSDKType;
                    fromAmino(object: _130.NextSequenceRecvDataAmino): _130.NextSequenceRecvData;
                    toAmino(message: _130.NextSequenceRecvData): _130.NextSequenceRecvDataAmino;
                    fromAminoMsg(object: _130.NextSequenceRecvDataAminoMsg): _130.NextSequenceRecvData;
                    toAminoMsg(message: _130.NextSequenceRecvData): _130.NextSequenceRecvDataAminoMsg;
                    fromProtoMsg(message: _130.NextSequenceRecvDataProtoMsg): _130.NextSequenceRecvData;
                    toProto(message: _130.NextSequenceRecvData): Uint8Array;
                    toProtoMsg(message: _130.NextSequenceRecvData): _130.NextSequenceRecvDataProtoMsg;
                };
            };
        }
        namespace tendermint {
            const v1: {
                ClientState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _131.ClientState;
                    isSDK(o: any): o is _131.ClientStateSDKType;
                    isAmino(o: any): o is _131.ClientStateAmino;
                    encode(message: _131.ClientState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.ClientState;
                    fromJSON(object: any): _131.ClientState;
                    toJSON(message: _131.ClientState): unknown;
                    fromPartial(object: {
                        chainId?: string;
                        trustLevel?: {
                            numerator?: bigint;
                            denominator?: bigint;
                        };
                        trustingPeriod?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        unbondingPeriod?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        maxClockDrift?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        frozenHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                        latestHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                        proofSpecs?: {
                            leafSpec?: {
                                hash?: import("../confio/proofs").HashOp;
                                prehashKey?: import("../confio/proofs").HashOp;
                                prehashValue?: import("../confio/proofs").HashOp;
                                length?: import("../confio/proofs").LengthOp;
                                prefix?: Uint8Array;
                            };
                            innerSpec?: {
                                childOrder?: number[];
                                childSize?: number;
                                minPrefixLength?: number;
                                maxPrefixLength?: number;
                                emptyChild?: Uint8Array;
                                hash?: import("../confio/proofs").HashOp;
                            };
                            maxDepth?: number;
                            minDepth?: number;
                        }[];
                        upgradePath?: string[];
                        allowUpdateAfterExpiry?: boolean;
                        allowUpdateAfterMisbehaviour?: boolean;
                    }): _131.ClientState;
                    fromSDK(object: _131.ClientStateSDKType): _131.ClientState;
                    toSDK(message: _131.ClientState): _131.ClientStateSDKType;
                    fromAmino(object: _131.ClientStateAmino): _131.ClientState;
                    toAmino(message: _131.ClientState): _131.ClientStateAmino;
                    fromAminoMsg(object: _131.ClientStateAminoMsg): _131.ClientState;
                    toAminoMsg(message: _131.ClientState): _131.ClientStateAminoMsg;
                    fromProtoMsg(message: _131.ClientStateProtoMsg): _131.ClientState;
                    toProto(message: _131.ClientState): Uint8Array;
                    toProtoMsg(message: _131.ClientState): _131.ClientStateProtoMsg;
                };
                ConsensusState: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _131.ConsensusState;
                    isSDK(o: any): o is _131.ConsensusStateSDKType;
                    isAmino(o: any): o is _131.ConsensusStateAmino;
                    encode(message: _131.ConsensusState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.ConsensusState;
                    fromJSON(object: any): _131.ConsensusState;
                    toJSON(message: _131.ConsensusState): unknown;
                    fromPartial(object: {
                        timestamp?: Date;
                        root?: {
                            hash?: Uint8Array;
                        };
                        nextValidatorsHash?: Uint8Array;
                    }): _131.ConsensusState;
                    fromSDK(object: _131.ConsensusStateSDKType): _131.ConsensusState;
                    toSDK(message: _131.ConsensusState): _131.ConsensusStateSDKType;
                    fromAmino(object: _131.ConsensusStateAmino): _131.ConsensusState;
                    toAmino(message: _131.ConsensusState): _131.ConsensusStateAmino;
                    fromAminoMsg(object: _131.ConsensusStateAminoMsg): _131.ConsensusState;
                    toAminoMsg(message: _131.ConsensusState): _131.ConsensusStateAminoMsg;
                    fromProtoMsg(message: _131.ConsensusStateProtoMsg): _131.ConsensusState;
                    toProto(message: _131.ConsensusState): Uint8Array;
                    toProtoMsg(message: _131.ConsensusState): _131.ConsensusStateProtoMsg;
                };
                Misbehaviour: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _131.Misbehaviour;
                    isSDK(o: any): o is _131.MisbehaviourSDKType;
                    isAmino(o: any): o is _131.MisbehaviourAmino;
                    encode(message: _131.Misbehaviour, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.Misbehaviour;
                    fromJSON(object: any): _131.Misbehaviour;
                    toJSON(message: _131.Misbehaviour): unknown;
                    fromPartial(object: {
                        clientId?: string;
                        header1?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: bigint;
                                        app?: bigint;
                                    };
                                    chainId?: string;
                                    height?: bigint;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: bigint;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: bigint;
                                    proposerPriority?: bigint;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: bigint;
                                    proposerPriority?: bigint;
                                };
                                totalVotingPower?: bigint;
                            };
                            trustedHeight?: {
                                revisionNumber?: bigint;
                                revisionHeight?: bigint;
                            };
                            trustedValidators?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: bigint;
                                    proposerPriority?: bigint;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: bigint;
                                    proposerPriority?: bigint;
                                };
                                totalVotingPower?: bigint;
                            };
                        };
                        header2?: {
                            signedHeader?: {
                                header?: {
                                    version?: {
                                        block?: bigint;
                                        app?: bigint;
                                    };
                                    chainId?: string;
                                    height?: bigint;
                                    time?: Date;
                                    lastBlockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    lastCommitHash?: Uint8Array;
                                    dataHash?: Uint8Array;
                                    validatorsHash?: Uint8Array;
                                    nextValidatorsHash?: Uint8Array;
                                    consensusHash?: Uint8Array;
                                    appHash?: Uint8Array;
                                    lastResultsHash?: Uint8Array;
                                    evidenceHash?: Uint8Array;
                                    proposerAddress?: Uint8Array;
                                };
                                commit?: {
                                    height?: bigint;
                                    round?: number;
                                    blockId?: {
                                        hash?: Uint8Array;
                                        partSetHeader?: {
                                            total?: number;
                                            hash?: Uint8Array;
                                        };
                                    };
                                    signatures?: {
                                        blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                        validatorAddress?: Uint8Array;
                                        timestamp?: Date;
                                        signature?: Uint8Array;
                                    }[];
                                };
                            };
                            validatorSet?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: bigint;
                                    proposerPriority?: bigint;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: bigint;
                                    proposerPriority?: bigint;
                                };
                                totalVotingPower?: bigint;
                            };
                            trustedHeight?: {
                                revisionNumber?: bigint;
                                revisionHeight?: bigint;
                            };
                            trustedValidators?: {
                                validators?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: bigint;
                                    proposerPriority?: bigint;
                                }[];
                                proposer?: {
                                    address?: Uint8Array;
                                    pubKey?: {
                                        ed25519?: Uint8Array;
                                        secp256k1?: Uint8Array;
                                    };
                                    votingPower?: bigint;
                                    proposerPriority?: bigint;
                                };
                                totalVotingPower?: bigint;
                            };
                        };
                    }): _131.Misbehaviour;
                    fromSDK(object: _131.MisbehaviourSDKType): _131.Misbehaviour;
                    toSDK(message: _131.Misbehaviour): _131.MisbehaviourSDKType;
                    fromAmino(object: _131.MisbehaviourAmino): _131.Misbehaviour;
                    toAmino(message: _131.Misbehaviour): _131.MisbehaviourAmino;
                    fromAminoMsg(object: _131.MisbehaviourAminoMsg): _131.Misbehaviour;
                    toAminoMsg(message: _131.Misbehaviour): _131.MisbehaviourAminoMsg;
                    fromProtoMsg(message: _131.MisbehaviourProtoMsg): _131.Misbehaviour;
                    toProto(message: _131.Misbehaviour): Uint8Array;
                    toProtoMsg(message: _131.Misbehaviour): _131.MisbehaviourProtoMsg;
                };
                Header: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _131.Header;
                    isSDK(o: any): o is _131.HeaderSDKType;
                    isAmino(o: any): o is _131.HeaderAmino;
                    encode(message: _131.Header, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.Header;
                    fromJSON(object: any): _131.Header;
                    toJSON(message: _131.Header): unknown;
                    fromPartial(object: {
                        signedHeader?: {
                            header?: {
                                version?: {
                                    block?: bigint;
                                    app?: bigint;
                                };
                                chainId?: string;
                                height?: bigint;
                                time?: Date;
                                lastBlockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                lastCommitHash?: Uint8Array;
                                dataHash?: Uint8Array;
                                validatorsHash?: Uint8Array;
                                nextValidatorsHash?: Uint8Array;
                                consensusHash?: Uint8Array;
                                appHash?: Uint8Array;
                                lastResultsHash?: Uint8Array;
                                evidenceHash?: Uint8Array;
                                proposerAddress?: Uint8Array;
                            };
                            commit?: {
                                height?: bigint;
                                round?: number;
                                blockId?: {
                                    hash?: Uint8Array;
                                    partSetHeader?: {
                                        total?: number;
                                        hash?: Uint8Array;
                                    };
                                };
                                signatures?: {
                                    blockIdFlag?: import("../tendermint/types/types").BlockIDFlag;
                                    validatorAddress?: Uint8Array;
                                    timestamp?: Date;
                                    signature?: Uint8Array;
                                }[];
                            };
                        };
                        validatorSet?: {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: bigint;
                                proposerPriority?: bigint;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: bigint;
                                proposerPriority?: bigint;
                            };
                            totalVotingPower?: bigint;
                        };
                        trustedHeight?: {
                            revisionNumber?: bigint;
                            revisionHeight?: bigint;
                        };
                        trustedValidators?: {
                            validators?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: bigint;
                                proposerPriority?: bigint;
                            }[];
                            proposer?: {
                                address?: Uint8Array;
                                pubKey?: {
                                    ed25519?: Uint8Array;
                                    secp256k1?: Uint8Array;
                                };
                                votingPower?: bigint;
                                proposerPriority?: bigint;
                            };
                            totalVotingPower?: bigint;
                        };
                    }): _131.Header;
                    fromSDK(object: _131.HeaderSDKType): _131.Header;
                    toSDK(message: _131.Header): _131.HeaderSDKType;
                    fromAmino(object: _131.HeaderAmino): _131.Header;
                    toAmino(message: _131.Header): _131.HeaderAmino;
                    fromAminoMsg(object: _131.HeaderAminoMsg): _131.Header;
                    toAminoMsg(message: _131.Header): _131.HeaderAminoMsg;
                    fromProtoMsg(message: _131.HeaderProtoMsg): _131.Header;
                    toProto(message: _131.Header): Uint8Array;
                    toProtoMsg(message: _131.Header): _131.HeaderProtoMsg;
                };
                Fraction: {
                    typeUrl: string;
                    aminoType: string;
                    is(o: any): o is _131.Fraction;
                    isSDK(o: any): o is _131.FractionSDKType;
                    isAmino(o: any): o is _131.FractionAmino;
                    encode(message: _131.Fraction, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                    decode(input: Uint8Array | import("..").BinaryReader, length?: number): _131.Fraction;
                    fromJSON(object: any): _131.Fraction;
                    toJSON(message: _131.Fraction): unknown;
                    fromPartial(object: {
                        numerator?: bigint;
                        denominator?: bigint;
                    }): _131.Fraction;
                    fromSDK(object: _131.FractionSDKType): _131.Fraction;
                    toSDK(message: _131.Fraction): _131.FractionSDKType;
                    fromAmino(object: _131.FractionAmino): _131.Fraction;
                    toAmino(message: _131.Fraction): _131.FractionAmino;
                    fromAminoMsg(object: _131.FractionAminoMsg): _131.Fraction;
                    toAminoMsg(message: _131.Fraction): _131.FractionAminoMsg;
                    fromProtoMsg(message: _131.FractionProtoMsg): _131.Fraction;
                    toProto(message: _131.Fraction): Uint8Array;
                    toProtoMsg(message: _131.Fraction): _131.FractionProtoMsg;
                };
            };
        }
    }
    const ClientFactory: {
        createRPCMsgClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                crisis: {
                    v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                vesting: {
                    v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            ibc: {
                applications: {
                    transfer: {
                        v1: _267.MsgClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _268.MsgClientImpl;
                    };
                    client: {
                        v1: _269.MsgClientImpl;
                    };
                    connection: {
                        v1: _270.MsgClientImpl;
                    };
                };
            };
        }>;
        createRPCQueryClient: ({ rpc }: {
            rpc: import("../helpers").Rpc;
        }) => Promise<{
            cosmos: {
                app: {
                    v1alpha1: import("../cosmos/app/v1alpha1/query.rpc.Query").QueryClientImpl;
                };
                auth: {
                    v1beta1: import("../cosmos/auth/v1beta1/query.rpc.Query").QueryClientImpl;
                };
                authz: {
                    v1beta1: import("../cosmos/authz/v1beta1/query.rpc.Query").QueryClientImpl;
                };
                bank: {
                    v1beta1: import("../cosmos/bank/v1beta1/query.rpc.Query").QueryClientImpl;
                };
                base: {
                    tendermint: {
                        v1beta1: import("../cosmos/base/tendermint/v1beta1/query.rpc.Service").ServiceClientImpl;
                    };
                };
                distribution: {
                    v1beta1: import("../cosmos/distribution/v1beta1/query.rpc.Query").QueryClientImpl;
                };
                evidence: {
                    v1beta1: import("../cosmos/evidence/v1beta1/query.rpc.Query").QueryClientImpl;
                };
                feegrant: {
                    v1beta1: import("../cosmos/feegrant/v1beta1/query.rpc.Query").QueryClientImpl;
                };
                gov: {
                    v1: import("../cosmos/gov/v1/query.rpc.Query").QueryClientImpl;
                    v1beta1: import("../cosmos/gov/v1beta1/query.rpc.Query").QueryClientImpl;
                };
                group: {
                    v1: import("../cosmos/group/v1/query.rpc.Query").QueryClientImpl;
                };
                mint: {
                    v1beta1: import("../cosmos/mint/v1beta1/query.rpc.Query").QueryClientImpl;
                };
                nft: {
                    v1beta1: import("../cosmos/nft/v1beta1/query.rpc.Query").QueryClientImpl;
                };
                params: {
                    v1beta1: import("../cosmos/params/v1beta1/query.rpc.Query").QueryClientImpl;
                };
                slashing: {
                    v1beta1: import("../cosmos/slashing/v1beta1/query.rpc.Query").QueryClientImpl;
                };
                staking: {
                    v1beta1: import("../cosmos/staking/v1beta1/query.rpc.Query").QueryClientImpl;
                };
                tx: {
                    v1beta1: import("../cosmos/tx/v1beta1/service.rpc.Service").ServiceClientImpl;
                };
                upgrade: {
                    v1beta1: import("../cosmos/upgrade/v1beta1/query.rpc.Query").QueryClientImpl;
                };
            };
            ibc: {
                applications: {
                    transfer: {
                        v1: _262.QueryClientImpl;
                    };
                };
                core: {
                    channel: {
                        v1: _263.QueryClientImpl;
                    };
                    client: {
                        v1: _264.QueryClientImpl;
                    };
                    connection: {
                        v1: _265.QueryClientImpl;
                    };
                    port: {
                        v1: _266.QueryClientImpl;
                    };
                };
            };
        }>;
    };
}
