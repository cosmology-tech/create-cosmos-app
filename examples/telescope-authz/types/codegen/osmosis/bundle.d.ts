import * as _132 from "./claim/v1beta1/claim";
import * as _133 from "./claim/v1beta1/genesis";
import * as _134 from "./claim/v1beta1/params";
import * as _135 from "./claim/v1beta1/query";
import * as _136 from "./epochs/genesis";
import * as _137 from "./epochs/query";
import * as _138 from "./gamm/pool-models/balancer/tx/tx";
import * as _139 from "./gamm/pool-models/stableswap/stableswap_pool";
import * as _140 from "./gamm/pool-models/stableswap/tx";
import * as _141 from "./gamm/v2/query";
import * as _142 from "./ibc-rate-limit/v1beta1/params";
import * as _143 from "./ibc-rate-limit/v1beta1/query";
import * as _144 from "./incentives/gauge";
import * as _145 from "./incentives/genesis";
import * as _146 from "./incentives/params";
import * as _147 from "./incentives/query";
import * as _148 from "./incentives/tx";
import * as _149 from "./lockup/genesis";
import * as _150 from "./lockup/lock";
import * as _151 from "./lockup/params";
import * as _152 from "./lockup/query";
import * as _153 from "./lockup/tx";
import * as _154 from "./mint/v1beta1/genesis";
import * as _155 from "./mint/v1beta1/mint";
import * as _156 from "./mint/v1beta1/query";
import * as _157 from "./pool-incentives/v1beta1/genesis";
import * as _158 from "./pool-incentives/v1beta1/gov";
import * as _159 from "./pool-incentives/v1beta1/incentives";
import * as _160 from "./pool-incentives/v1beta1/query";
import * as _161 from "./sumtree/v1beta1/tree";
import * as _162 from "./superfluid/genesis";
import * as _163 from "./superfluid/params";
import * as _164 from "./superfluid/query";
import * as _165 from "./superfluid/superfluid";
import * as _166 from "./superfluid/tx";
import * as _167 from "./tokenfactory/v1beta1/authorityMetadata";
import * as _168 from "./tokenfactory/v1beta1/genesis";
import * as _169 from "./tokenfactory/v1beta1/params";
import * as _170 from "./tokenfactory/v1beta1/query";
import * as _171 from "./tokenfactory/v1beta1/tx";
import * as _172 from "./twap/v1beta1/genesis";
import * as _173 from "./twap/v1beta1/query";
import * as _174 from "./twap/v1beta1/twap_record";
import * as _175 from "./txfees/v1beta1/feetoken";
import * as _176 from "./txfees/v1beta1/genesis";
import * as _177 from "./txfees/v1beta1/gov";
import * as _178 from "./txfees/v1beta1/query";
import * as _284 from "./claim/v1beta1/query.rpc.Query";
import * as _285 from "./epochs/query.rpc.Query";
import * as _286 from "./gamm/v2/query.rpc.Query";
import * as _287 from "./ibc-rate-limit/v1beta1/query.rpc.Query";
import * as _288 from "./incentives/query.rpc.Query";
import * as _289 from "./lockup/query.rpc.Query";
import * as _290 from "./mint/v1beta1/query.rpc.Query";
import * as _291 from "./pool-incentives/v1beta1/query.rpc.Query";
import * as _292 from "./superfluid/query.rpc.Query";
import * as _293 from "./tokenfactory/v1beta1/query.rpc.Query";
import * as _294 from "./twap/v1beta1/query.rpc.Query";
import * as _295 from "./txfees/v1beta1/query.rpc.Query";
import * as _296 from "./gamm/pool-models/balancer/tx/tx.rpc.msg";
import * as _297 from "./gamm/pool-models/stableswap/tx.rpc.msg";
import * as _298 from "./incentives/tx.rpc.msg";
import * as _299 from "./lockup/tx.rpc.msg";
import * as _300 from "./superfluid/tx.rpc.msg";
import * as _301 from "./tokenfactory/v1beta1/tx.rpc.msg";
export declare namespace osmosis {
    namespace claim {
        const v1beta1: {
            QueryClientImpl: typeof _284.QueryClientImpl;
            createClientImpl: (rpc: import("..").TxRpc) => _284.QueryClientImpl;
            createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                useModuleAccountBalance: <TData = _135.QueryModuleAccountBalanceResponse>({ request, options }: _284.UseModuleAccountBalanceQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
                useParams: <TData_1 = _135.QueryParamsResponse>({ request, options }: _284.UseParamsQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
                useClaimRecord: <TData_2 = _135.QueryClaimRecordResponse>({ request, options }: _284.UseClaimRecordQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
                useClaimableForAction: <TData_3 = _135.QueryClaimableForActionResponse>({ request, options }: _284.UseClaimableForActionQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
                useTotalClaimable: <TData_4 = _135.QueryTotalClaimableResponse>({ request, options }: _284.UseTotalClaimableQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
            };
            createRpcQueryMobxStores: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                QueryModuleAccountBalanceStore: {
                    new (): {
                        store: import("..").QueryStore<_135.QueryModuleAccountBalanceRequest, _135.QueryModuleAccountBalanceResponse>;
                        moduleAccountBalance(request: _135.QueryModuleAccountBalanceRequest): import("..").MobxResponse<_135.QueryModuleAccountBalanceResponse>;
                    };
                };
                QueryParamsStore: {
                    new (): {
                        store: import("..").QueryStore<_135.QueryParamsRequest, _135.QueryParamsResponse>;
                        params(request: _135.QueryParamsRequest): import("..").MobxResponse<_135.QueryParamsResponse>;
                    };
                };
                QueryClaimRecordStore: {
                    new (): {
                        store: import("..").QueryStore<_135.QueryClaimRecordRequest, _135.QueryClaimRecordResponse>;
                        claimRecord(request: _135.QueryClaimRecordRequest): import("..").MobxResponse<_135.QueryClaimRecordResponse>;
                    };
                };
                QueryClaimableForActionStore: {
                    new (): {
                        store: import("..").QueryStore<_135.QueryClaimableForActionRequest, _135.QueryClaimableForActionResponse>;
                        claimableForAction(request: _135.QueryClaimableForActionRequest): import("..").MobxResponse<_135.QueryClaimableForActionResponse>;
                    };
                };
                QueryTotalClaimableStore: {
                    new (): {
                        store: import("..").QueryStore<_135.QueryTotalClaimableRequest, _135.QueryTotalClaimableResponse>;
                        totalClaimable(request: _135.QueryTotalClaimableRequest): import("..").MobxResponse<_135.QueryTotalClaimableResponse>;
                    };
                };
            };
            QueryModuleAccountBalanceRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _135.QueryModuleAccountBalanceRequest;
                isSDK(o: any): o is _135.QueryModuleAccountBalanceRequestSDKType;
                isAmino(o: any): o is _135.QueryModuleAccountBalanceRequestAmino;
                encode(_: _135.QueryModuleAccountBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.QueryModuleAccountBalanceRequest;
                fromJSON(_: any): _135.QueryModuleAccountBalanceRequest;
                toJSON(_: _135.QueryModuleAccountBalanceRequest): unknown;
                fromPartial(_: {}): _135.QueryModuleAccountBalanceRequest;
                fromSDK(_: _135.QueryModuleAccountBalanceRequestSDKType): _135.QueryModuleAccountBalanceRequest;
                toSDK(_: _135.QueryModuleAccountBalanceRequest): _135.QueryModuleAccountBalanceRequestSDKType;
                fromAmino(_: _135.QueryModuleAccountBalanceRequestAmino): _135.QueryModuleAccountBalanceRequest;
                toAmino(_: _135.QueryModuleAccountBalanceRequest): _135.QueryModuleAccountBalanceRequestAmino;
                fromAminoMsg(object: _135.QueryModuleAccountBalanceRequestAminoMsg): _135.QueryModuleAccountBalanceRequest;
                toAminoMsg(message: _135.QueryModuleAccountBalanceRequest): _135.QueryModuleAccountBalanceRequestAminoMsg;
                fromProtoMsg(message: _135.QueryModuleAccountBalanceRequestProtoMsg): _135.QueryModuleAccountBalanceRequest;
                toProto(message: _135.QueryModuleAccountBalanceRequest): Uint8Array;
                toProtoMsg(message: _135.QueryModuleAccountBalanceRequest): _135.QueryModuleAccountBalanceRequestProtoMsg;
            };
            QueryModuleAccountBalanceResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _135.QueryModuleAccountBalanceResponse;
                isSDK(o: any): o is _135.QueryModuleAccountBalanceResponseSDKType;
                isAmino(o: any): o is _135.QueryModuleAccountBalanceResponseAmino;
                encode(message: _135.QueryModuleAccountBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.QueryModuleAccountBalanceResponse;
                fromJSON(object: any): _135.QueryModuleAccountBalanceResponse;
                toJSON(message: _135.QueryModuleAccountBalanceResponse): unknown;
                fromPartial(object: {
                    moduleAccountBalance?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _135.QueryModuleAccountBalanceResponse;
                fromSDK(object: _135.QueryModuleAccountBalanceResponseSDKType): _135.QueryModuleAccountBalanceResponse;
                toSDK(message: _135.QueryModuleAccountBalanceResponse): _135.QueryModuleAccountBalanceResponseSDKType;
                fromAmino(object: _135.QueryModuleAccountBalanceResponseAmino): _135.QueryModuleAccountBalanceResponse;
                toAmino(message: _135.QueryModuleAccountBalanceResponse): _135.QueryModuleAccountBalanceResponseAmino;
                fromAminoMsg(object: _135.QueryModuleAccountBalanceResponseAminoMsg): _135.QueryModuleAccountBalanceResponse;
                toAminoMsg(message: _135.QueryModuleAccountBalanceResponse): _135.QueryModuleAccountBalanceResponseAminoMsg;
                fromProtoMsg(message: _135.QueryModuleAccountBalanceResponseProtoMsg): _135.QueryModuleAccountBalanceResponse;
                toProto(message: _135.QueryModuleAccountBalanceResponse): Uint8Array;
                toProtoMsg(message: _135.QueryModuleAccountBalanceResponse): _135.QueryModuleAccountBalanceResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _135.QueryParamsRequest;
                isSDK(o: any): o is _135.QueryParamsRequestSDKType;
                isAmino(o: any): o is _135.QueryParamsRequestAmino;
                encode(_: _135.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.QueryParamsRequest;
                fromJSON(_: any): _135.QueryParamsRequest;
                toJSON(_: _135.QueryParamsRequest): unknown;
                fromPartial(_: {}): _135.QueryParamsRequest;
                fromSDK(_: _135.QueryParamsRequestSDKType): _135.QueryParamsRequest;
                toSDK(_: _135.QueryParamsRequest): _135.QueryParamsRequestSDKType;
                fromAmino(_: _135.QueryParamsRequestAmino): _135.QueryParamsRequest;
                toAmino(_: _135.QueryParamsRequest): _135.QueryParamsRequestAmino;
                fromAminoMsg(object: _135.QueryParamsRequestAminoMsg): _135.QueryParamsRequest;
                toAminoMsg(message: _135.QueryParamsRequest): _135.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _135.QueryParamsRequestProtoMsg): _135.QueryParamsRequest;
                toProto(message: _135.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _135.QueryParamsRequest): _135.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _135.QueryParamsResponse;
                isSDK(o: any): o is _135.QueryParamsResponseSDKType;
                isAmino(o: any): o is _135.QueryParamsResponseAmino;
                encode(message: _135.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.QueryParamsResponse;
                fromJSON(object: any): _135.QueryParamsResponse;
                toJSON(message: _135.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        airdropStartTime?: Date;
                        durationUntilDecay?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        durationOfDecay?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        claimDenom?: string;
                    };
                }): _135.QueryParamsResponse;
                fromSDK(object: _135.QueryParamsResponseSDKType): _135.QueryParamsResponse;
                toSDK(message: _135.QueryParamsResponse): _135.QueryParamsResponseSDKType;
                fromAmino(object: _135.QueryParamsResponseAmino): _135.QueryParamsResponse;
                toAmino(message: _135.QueryParamsResponse): _135.QueryParamsResponseAmino;
                fromAminoMsg(object: _135.QueryParamsResponseAminoMsg): _135.QueryParamsResponse;
                toAminoMsg(message: _135.QueryParamsResponse): _135.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _135.QueryParamsResponseProtoMsg): _135.QueryParamsResponse;
                toProto(message: _135.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _135.QueryParamsResponse): _135.QueryParamsResponseProtoMsg;
            };
            QueryClaimRecordRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _135.QueryClaimRecordRequest;
                isSDK(o: any): o is _135.QueryClaimRecordRequestSDKType;
                isAmino(o: any): o is _135.QueryClaimRecordRequestAmino;
                encode(message: _135.QueryClaimRecordRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.QueryClaimRecordRequest;
                fromJSON(object: any): _135.QueryClaimRecordRequest;
                toJSON(message: _135.QueryClaimRecordRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _135.QueryClaimRecordRequest;
                fromSDK(object: _135.QueryClaimRecordRequestSDKType): _135.QueryClaimRecordRequest;
                toSDK(message: _135.QueryClaimRecordRequest): _135.QueryClaimRecordRequestSDKType;
                fromAmino(object: _135.QueryClaimRecordRequestAmino): _135.QueryClaimRecordRequest;
                toAmino(message: _135.QueryClaimRecordRequest): _135.QueryClaimRecordRequestAmino;
                fromAminoMsg(object: _135.QueryClaimRecordRequestAminoMsg): _135.QueryClaimRecordRequest;
                toAminoMsg(message: _135.QueryClaimRecordRequest): _135.QueryClaimRecordRequestAminoMsg;
                fromProtoMsg(message: _135.QueryClaimRecordRequestProtoMsg): _135.QueryClaimRecordRequest;
                toProto(message: _135.QueryClaimRecordRequest): Uint8Array;
                toProtoMsg(message: _135.QueryClaimRecordRequest): _135.QueryClaimRecordRequestProtoMsg;
            };
            QueryClaimRecordResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _135.QueryClaimRecordResponse;
                isSDK(o: any): o is _135.QueryClaimRecordResponseSDKType;
                isAmino(o: any): o is _135.QueryClaimRecordResponseAmino;
                encode(message: _135.QueryClaimRecordResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.QueryClaimRecordResponse;
                fromJSON(object: any): _135.QueryClaimRecordResponse;
                toJSON(message: _135.QueryClaimRecordResponse): unknown;
                fromPartial(object: {
                    claimRecord?: {
                        address?: string;
                        initialClaimableAmount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        actionCompleted?: boolean[];
                    };
                }): _135.QueryClaimRecordResponse;
                fromSDK(object: _135.QueryClaimRecordResponseSDKType): _135.QueryClaimRecordResponse;
                toSDK(message: _135.QueryClaimRecordResponse): _135.QueryClaimRecordResponseSDKType;
                fromAmino(object: _135.QueryClaimRecordResponseAmino): _135.QueryClaimRecordResponse;
                toAmino(message: _135.QueryClaimRecordResponse): _135.QueryClaimRecordResponseAmino;
                fromAminoMsg(object: _135.QueryClaimRecordResponseAminoMsg): _135.QueryClaimRecordResponse;
                toAminoMsg(message: _135.QueryClaimRecordResponse): _135.QueryClaimRecordResponseAminoMsg;
                fromProtoMsg(message: _135.QueryClaimRecordResponseProtoMsg): _135.QueryClaimRecordResponse;
                toProto(message: _135.QueryClaimRecordResponse): Uint8Array;
                toProtoMsg(message: _135.QueryClaimRecordResponse): _135.QueryClaimRecordResponseProtoMsg;
            };
            QueryClaimableForActionRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _135.QueryClaimableForActionRequest;
                isSDK(o: any): o is _135.QueryClaimableForActionRequestSDKType;
                isAmino(o: any): o is _135.QueryClaimableForActionRequestAmino;
                encode(message: _135.QueryClaimableForActionRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.QueryClaimableForActionRequest;
                fromJSON(object: any): _135.QueryClaimableForActionRequest;
                toJSON(message: _135.QueryClaimableForActionRequest): unknown;
                fromPartial(object: {
                    address?: string;
                    action?: _132.Action;
                }): _135.QueryClaimableForActionRequest;
                fromSDK(object: _135.QueryClaimableForActionRequestSDKType): _135.QueryClaimableForActionRequest;
                toSDK(message: _135.QueryClaimableForActionRequest): _135.QueryClaimableForActionRequestSDKType;
                fromAmino(object: _135.QueryClaimableForActionRequestAmino): _135.QueryClaimableForActionRequest;
                toAmino(message: _135.QueryClaimableForActionRequest): _135.QueryClaimableForActionRequestAmino;
                fromAminoMsg(object: _135.QueryClaimableForActionRequestAminoMsg): _135.QueryClaimableForActionRequest;
                toAminoMsg(message: _135.QueryClaimableForActionRequest): _135.QueryClaimableForActionRequestAminoMsg;
                fromProtoMsg(message: _135.QueryClaimableForActionRequestProtoMsg): _135.QueryClaimableForActionRequest;
                toProto(message: _135.QueryClaimableForActionRequest): Uint8Array;
                toProtoMsg(message: _135.QueryClaimableForActionRequest): _135.QueryClaimableForActionRequestProtoMsg;
            };
            QueryClaimableForActionResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _135.QueryClaimableForActionResponse;
                isSDK(o: any): o is _135.QueryClaimableForActionResponseSDKType;
                isAmino(o: any): o is _135.QueryClaimableForActionResponseAmino;
                encode(message: _135.QueryClaimableForActionResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.QueryClaimableForActionResponse;
                fromJSON(object: any): _135.QueryClaimableForActionResponse;
                toJSON(message: _135.QueryClaimableForActionResponse): unknown;
                fromPartial(object: {
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _135.QueryClaimableForActionResponse;
                fromSDK(object: _135.QueryClaimableForActionResponseSDKType): _135.QueryClaimableForActionResponse;
                toSDK(message: _135.QueryClaimableForActionResponse): _135.QueryClaimableForActionResponseSDKType;
                fromAmino(object: _135.QueryClaimableForActionResponseAmino): _135.QueryClaimableForActionResponse;
                toAmino(message: _135.QueryClaimableForActionResponse): _135.QueryClaimableForActionResponseAmino;
                fromAminoMsg(object: _135.QueryClaimableForActionResponseAminoMsg): _135.QueryClaimableForActionResponse;
                toAminoMsg(message: _135.QueryClaimableForActionResponse): _135.QueryClaimableForActionResponseAminoMsg;
                fromProtoMsg(message: _135.QueryClaimableForActionResponseProtoMsg): _135.QueryClaimableForActionResponse;
                toProto(message: _135.QueryClaimableForActionResponse): Uint8Array;
                toProtoMsg(message: _135.QueryClaimableForActionResponse): _135.QueryClaimableForActionResponseProtoMsg;
            };
            QueryTotalClaimableRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _135.QueryTotalClaimableRequest;
                isSDK(o: any): o is _135.QueryTotalClaimableRequestSDKType;
                isAmino(o: any): o is _135.QueryTotalClaimableRequestAmino;
                encode(message: _135.QueryTotalClaimableRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.QueryTotalClaimableRequest;
                fromJSON(object: any): _135.QueryTotalClaimableRequest;
                toJSON(message: _135.QueryTotalClaimableRequest): unknown;
                fromPartial(object: {
                    address?: string;
                }): _135.QueryTotalClaimableRequest;
                fromSDK(object: _135.QueryTotalClaimableRequestSDKType): _135.QueryTotalClaimableRequest;
                toSDK(message: _135.QueryTotalClaimableRequest): _135.QueryTotalClaimableRequestSDKType;
                fromAmino(object: _135.QueryTotalClaimableRequestAmino): _135.QueryTotalClaimableRequest;
                toAmino(message: _135.QueryTotalClaimableRequest): _135.QueryTotalClaimableRequestAmino;
                fromAminoMsg(object: _135.QueryTotalClaimableRequestAminoMsg): _135.QueryTotalClaimableRequest;
                toAminoMsg(message: _135.QueryTotalClaimableRequest): _135.QueryTotalClaimableRequestAminoMsg;
                fromProtoMsg(message: _135.QueryTotalClaimableRequestProtoMsg): _135.QueryTotalClaimableRequest;
                toProto(message: _135.QueryTotalClaimableRequest): Uint8Array;
                toProtoMsg(message: _135.QueryTotalClaimableRequest): _135.QueryTotalClaimableRequestProtoMsg;
            };
            QueryTotalClaimableResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _135.QueryTotalClaimableResponse;
                isSDK(o: any): o is _135.QueryTotalClaimableResponseSDKType;
                isAmino(o: any): o is _135.QueryTotalClaimableResponseAmino;
                encode(message: _135.QueryTotalClaimableResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _135.QueryTotalClaimableResponse;
                fromJSON(object: any): _135.QueryTotalClaimableResponse;
                toJSON(message: _135.QueryTotalClaimableResponse): unknown;
                fromPartial(object: {
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _135.QueryTotalClaimableResponse;
                fromSDK(object: _135.QueryTotalClaimableResponseSDKType): _135.QueryTotalClaimableResponse;
                toSDK(message: _135.QueryTotalClaimableResponse): _135.QueryTotalClaimableResponseSDKType;
                fromAmino(object: _135.QueryTotalClaimableResponseAmino): _135.QueryTotalClaimableResponse;
                toAmino(message: _135.QueryTotalClaimableResponse): _135.QueryTotalClaimableResponseAmino;
                fromAminoMsg(object: _135.QueryTotalClaimableResponseAminoMsg): _135.QueryTotalClaimableResponse;
                toAminoMsg(message: _135.QueryTotalClaimableResponse): _135.QueryTotalClaimableResponseAminoMsg;
                fromProtoMsg(message: _135.QueryTotalClaimableResponseProtoMsg): _135.QueryTotalClaimableResponse;
                toProto(message: _135.QueryTotalClaimableResponse): Uint8Array;
                toProtoMsg(message: _135.QueryTotalClaimableResponse): _135.QueryTotalClaimableResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _134.Params;
                isSDK(o: any): o is _134.ParamsSDKType;
                isAmino(o: any): o is _134.ParamsAmino;
                encode(message: _134.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _134.Params;
                fromJSON(object: any): _134.Params;
                toJSON(message: _134.Params): unknown;
                fromPartial(object: {
                    airdropStartTime?: Date;
                    durationUntilDecay?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    durationOfDecay?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    claimDenom?: string;
                }): _134.Params;
                fromSDK(object: _134.ParamsSDKType): _134.Params;
                toSDK(message: _134.Params): _134.ParamsSDKType;
                fromAmino(object: _134.ParamsAmino): _134.Params;
                toAmino(message: _134.Params): _134.ParamsAmino;
                fromAminoMsg(object: _134.ParamsAminoMsg): _134.Params;
                toAminoMsg(message: _134.Params): _134.ParamsAminoMsg;
                fromProtoMsg(message: _134.ParamsProtoMsg): _134.Params;
                toProto(message: _134.Params): Uint8Array;
                toProtoMsg(message: _134.Params): _134.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _133.GenesisState;
                isSDK(o: any): o is _133.GenesisStateSDKType;
                isAmino(o: any): o is _133.GenesisStateAmino;
                encode(message: _133.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _133.GenesisState;
                fromJSON(object: any): _133.GenesisState;
                toJSON(message: _133.GenesisState): unknown;
                fromPartial(object: {
                    moduleAccountBalance?: {
                        denom?: string;
                        amount?: string;
                    };
                    params?: {
                        airdropStartTime?: Date;
                        durationUntilDecay?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        durationOfDecay?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        claimDenom?: string;
                    };
                    claimRecords?: {
                        address?: string;
                        initialClaimableAmount?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        actionCompleted?: boolean[];
                    }[];
                }): _133.GenesisState;
                fromSDK(object: _133.GenesisStateSDKType): _133.GenesisState;
                toSDK(message: _133.GenesisState): _133.GenesisStateSDKType;
                fromAmino(object: _133.GenesisStateAmino): _133.GenesisState;
                toAmino(message: _133.GenesisState): _133.GenesisStateAmino;
                fromAminoMsg(object: _133.GenesisStateAminoMsg): _133.GenesisState;
                toAminoMsg(message: _133.GenesisState): _133.GenesisStateAminoMsg;
                fromProtoMsg(message: _133.GenesisStateProtoMsg): _133.GenesisState;
                toProto(message: _133.GenesisState): Uint8Array;
                toProtoMsg(message: _133.GenesisState): _133.GenesisStateProtoMsg;
            };
            actionFromJSON(object: any): _132.Action;
            actionToJSON(object: _132.Action): string;
            Action: typeof _132.Action;
            ActionSDKType: typeof _132.Action;
            ActionAmino: typeof _132.Action;
            ClaimRecord: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _132.ClaimRecord;
                isSDK(o: any): o is _132.ClaimRecordSDKType;
                isAmino(o: any): o is _132.ClaimRecordAmino;
                encode(message: _132.ClaimRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _132.ClaimRecord;
                fromJSON(object: any): _132.ClaimRecord;
                toJSON(message: _132.ClaimRecord): unknown;
                fromPartial(object: {
                    address?: string;
                    initialClaimableAmount?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    actionCompleted?: boolean[];
                }): _132.ClaimRecord;
                fromSDK(object: _132.ClaimRecordSDKType): _132.ClaimRecord;
                toSDK(message: _132.ClaimRecord): _132.ClaimRecordSDKType;
                fromAmino(object: _132.ClaimRecordAmino): _132.ClaimRecord;
                toAmino(message: _132.ClaimRecord): _132.ClaimRecordAmino;
                fromAminoMsg(object: _132.ClaimRecordAminoMsg): _132.ClaimRecord;
                toAminoMsg(message: _132.ClaimRecord): _132.ClaimRecordAminoMsg;
                fromProtoMsg(message: _132.ClaimRecordProtoMsg): _132.ClaimRecord;
                toProto(message: _132.ClaimRecord): Uint8Array;
                toProtoMsg(message: _132.ClaimRecord): _132.ClaimRecordProtoMsg;
            };
        };
    }
    namespace epochs {
        const v1beta1: {
            QueryClientImpl: typeof _285.QueryClientImpl;
            createClientImpl: (rpc: import("..").TxRpc) => _285.QueryClientImpl;
            createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                useEpochInfos: <TData = _137.QueryEpochsInfoResponse>({ request, options }: _285.UseEpochInfosQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
                useCurrentEpoch: <TData_1 = _137.QueryCurrentEpochResponse>({ request, options }: _285.UseCurrentEpochQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
            };
            createRpcQueryMobxStores: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                QueryEpochInfosStore: {
                    new (): {
                        store: import("..").QueryStore<_137.QueryEpochsInfoRequest, _137.QueryEpochsInfoResponse>;
                        epochInfos(request: _137.QueryEpochsInfoRequest): import("..").MobxResponse<_137.QueryEpochsInfoResponse>;
                    };
                };
                QueryCurrentEpochStore: {
                    new (): {
                        store: import("..").QueryStore<_137.QueryCurrentEpochRequest, _137.QueryCurrentEpochResponse>;
                        currentEpoch(request: _137.QueryCurrentEpochRequest): import("..").MobxResponse<_137.QueryCurrentEpochResponse>;
                    };
                };
            };
            QueryEpochsInfoRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _137.QueryEpochsInfoRequest;
                isSDK(o: any): o is _137.QueryEpochsInfoRequestSDKType;
                isAmino(o: any): o is _137.QueryEpochsInfoRequestAmino;
                encode(_: _137.QueryEpochsInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryEpochsInfoRequest;
                fromJSON(_: any): _137.QueryEpochsInfoRequest;
                toJSON(_: _137.QueryEpochsInfoRequest): unknown;
                fromPartial(_: {}): _137.QueryEpochsInfoRequest;
                fromSDK(_: _137.QueryEpochsInfoRequestSDKType): _137.QueryEpochsInfoRequest;
                toSDK(_: _137.QueryEpochsInfoRequest): _137.QueryEpochsInfoRequestSDKType;
                fromAmino(_: _137.QueryEpochsInfoRequestAmino): _137.QueryEpochsInfoRequest;
                toAmino(_: _137.QueryEpochsInfoRequest): _137.QueryEpochsInfoRequestAmino;
                fromAminoMsg(object: _137.QueryEpochsInfoRequestAminoMsg): _137.QueryEpochsInfoRequest;
                toAminoMsg(message: _137.QueryEpochsInfoRequest): _137.QueryEpochsInfoRequestAminoMsg;
                fromProtoMsg(message: _137.QueryEpochsInfoRequestProtoMsg): _137.QueryEpochsInfoRequest;
                toProto(message: _137.QueryEpochsInfoRequest): Uint8Array;
                toProtoMsg(message: _137.QueryEpochsInfoRequest): _137.QueryEpochsInfoRequestProtoMsg;
            };
            QueryEpochsInfoResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _137.QueryEpochsInfoResponse;
                isSDK(o: any): o is _137.QueryEpochsInfoResponseSDKType;
                isAmino(o: any): o is _137.QueryEpochsInfoResponseAmino;
                encode(message: _137.QueryEpochsInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryEpochsInfoResponse;
                fromJSON(object: any): _137.QueryEpochsInfoResponse;
                toJSON(message: _137.QueryEpochsInfoResponse): unknown;
                fromPartial(object: {
                    epochs?: {
                        identifier?: string;
                        startTime?: Date;
                        duration?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        currentEpoch?: bigint;
                        currentEpochStartTime?: Date;
                        epochCountingStarted?: boolean;
                        currentEpochStartHeight?: bigint;
                    }[];
                }): _137.QueryEpochsInfoResponse;
                fromSDK(object: _137.QueryEpochsInfoResponseSDKType): _137.QueryEpochsInfoResponse;
                toSDK(message: _137.QueryEpochsInfoResponse): _137.QueryEpochsInfoResponseSDKType;
                fromAmino(object: _137.QueryEpochsInfoResponseAmino): _137.QueryEpochsInfoResponse;
                toAmino(message: _137.QueryEpochsInfoResponse): _137.QueryEpochsInfoResponseAmino;
                fromAminoMsg(object: _137.QueryEpochsInfoResponseAminoMsg): _137.QueryEpochsInfoResponse;
                toAminoMsg(message: _137.QueryEpochsInfoResponse): _137.QueryEpochsInfoResponseAminoMsg;
                fromProtoMsg(message: _137.QueryEpochsInfoResponseProtoMsg): _137.QueryEpochsInfoResponse;
                toProto(message: _137.QueryEpochsInfoResponse): Uint8Array;
                toProtoMsg(message: _137.QueryEpochsInfoResponse): _137.QueryEpochsInfoResponseProtoMsg;
            };
            QueryCurrentEpochRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _137.QueryCurrentEpochRequest;
                isSDK(o: any): o is _137.QueryCurrentEpochRequestSDKType;
                isAmino(o: any): o is _137.QueryCurrentEpochRequestAmino;
                encode(message: _137.QueryCurrentEpochRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryCurrentEpochRequest;
                fromJSON(object: any): _137.QueryCurrentEpochRequest;
                toJSON(message: _137.QueryCurrentEpochRequest): unknown;
                fromPartial(object: {
                    identifier?: string;
                }): _137.QueryCurrentEpochRequest;
                fromSDK(object: _137.QueryCurrentEpochRequestSDKType): _137.QueryCurrentEpochRequest;
                toSDK(message: _137.QueryCurrentEpochRequest): _137.QueryCurrentEpochRequestSDKType;
                fromAmino(object: _137.QueryCurrentEpochRequestAmino): _137.QueryCurrentEpochRequest;
                toAmino(message: _137.QueryCurrentEpochRequest): _137.QueryCurrentEpochRequestAmino;
                fromAminoMsg(object: _137.QueryCurrentEpochRequestAminoMsg): _137.QueryCurrentEpochRequest;
                toAminoMsg(message: _137.QueryCurrentEpochRequest): _137.QueryCurrentEpochRequestAminoMsg;
                fromProtoMsg(message: _137.QueryCurrentEpochRequestProtoMsg): _137.QueryCurrentEpochRequest;
                toProto(message: _137.QueryCurrentEpochRequest): Uint8Array;
                toProtoMsg(message: _137.QueryCurrentEpochRequest): _137.QueryCurrentEpochRequestProtoMsg;
            };
            QueryCurrentEpochResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _137.QueryCurrentEpochResponse;
                isSDK(o: any): o is _137.QueryCurrentEpochResponseSDKType;
                isAmino(o: any): o is _137.QueryCurrentEpochResponseAmino;
                encode(message: _137.QueryCurrentEpochResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _137.QueryCurrentEpochResponse;
                fromJSON(object: any): _137.QueryCurrentEpochResponse;
                toJSON(message: _137.QueryCurrentEpochResponse): unknown;
                fromPartial(object: {
                    currentEpoch?: bigint;
                }): _137.QueryCurrentEpochResponse;
                fromSDK(object: _137.QueryCurrentEpochResponseSDKType): _137.QueryCurrentEpochResponse;
                toSDK(message: _137.QueryCurrentEpochResponse): _137.QueryCurrentEpochResponseSDKType;
                fromAmino(object: _137.QueryCurrentEpochResponseAmino): _137.QueryCurrentEpochResponse;
                toAmino(message: _137.QueryCurrentEpochResponse): _137.QueryCurrentEpochResponseAmino;
                fromAminoMsg(object: _137.QueryCurrentEpochResponseAminoMsg): _137.QueryCurrentEpochResponse;
                toAminoMsg(message: _137.QueryCurrentEpochResponse): _137.QueryCurrentEpochResponseAminoMsg;
                fromProtoMsg(message: _137.QueryCurrentEpochResponseProtoMsg): _137.QueryCurrentEpochResponse;
                toProto(message: _137.QueryCurrentEpochResponse): Uint8Array;
                toProtoMsg(message: _137.QueryCurrentEpochResponse): _137.QueryCurrentEpochResponseProtoMsg;
            };
            EpochInfo: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _136.EpochInfo;
                isSDK(o: any): o is _136.EpochInfoSDKType;
                isAmino(o: any): o is _136.EpochInfoAmino;
                encode(message: _136.EpochInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.EpochInfo;
                fromJSON(object: any): _136.EpochInfo;
                toJSON(message: _136.EpochInfo): unknown;
                fromPartial(object: {
                    identifier?: string;
                    startTime?: Date;
                    duration?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    currentEpoch?: bigint;
                    currentEpochStartTime?: Date;
                    epochCountingStarted?: boolean;
                    currentEpochStartHeight?: bigint;
                }): _136.EpochInfo;
                fromSDK(object: _136.EpochInfoSDKType): _136.EpochInfo;
                toSDK(message: _136.EpochInfo): _136.EpochInfoSDKType;
                fromAmino(object: _136.EpochInfoAmino): _136.EpochInfo;
                toAmino(message: _136.EpochInfo): _136.EpochInfoAmino;
                fromAminoMsg(object: _136.EpochInfoAminoMsg): _136.EpochInfo;
                toAminoMsg(message: _136.EpochInfo): _136.EpochInfoAminoMsg;
                fromProtoMsg(message: _136.EpochInfoProtoMsg): _136.EpochInfo;
                toProto(message: _136.EpochInfo): Uint8Array;
                toProtoMsg(message: _136.EpochInfo): _136.EpochInfoProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _136.GenesisState;
                isSDK(o: any): o is _136.GenesisStateSDKType;
                isAmino(o: any): o is _136.GenesisStateAmino;
                encode(message: _136.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _136.GenesisState;
                fromJSON(object: any): _136.GenesisState;
                toJSON(message: _136.GenesisState): unknown;
                fromPartial(object: {
                    epochs?: {
                        identifier?: string;
                        startTime?: Date;
                        duration?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        currentEpoch?: bigint;
                        currentEpochStartTime?: Date;
                        epochCountingStarted?: boolean;
                        currentEpochStartHeight?: bigint;
                    }[];
                }): _136.GenesisState;
                fromSDK(object: _136.GenesisStateSDKType): _136.GenesisState;
                toSDK(message: _136.GenesisState): _136.GenesisStateSDKType;
                fromAmino(object: _136.GenesisStateAmino): _136.GenesisState;
                toAmino(message: _136.GenesisState): _136.GenesisStateAmino;
                fromAminoMsg(object: _136.GenesisStateAminoMsg): _136.GenesisState;
                toAminoMsg(message: _136.GenesisState): _136.GenesisStateAminoMsg;
                fromProtoMsg(message: _136.GenesisStateProtoMsg): _136.GenesisState;
                toProto(message: _136.GenesisState): Uint8Array;
                toProtoMsg(message: _136.GenesisState): _136.GenesisStateProtoMsg;
            };
        };
    }
    namespace gamm {
        namespace poolmodels {
            namespace balancer {
                const v1beta1: {
                    MsgClientImpl: typeof _296.MsgClientImpl;
                    createClientImpl: (rpc: import("..").TxRpc) => _296.MsgClientImpl;
                    registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            createBalancerPool(value: _138.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            createBalancerPool(value: _138.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: _138.MsgCreateBalancerPool;
                            };
                        };
                        toJSON: {
                            createBalancerPool(value: _138.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            createBalancerPool(value: any): {
                                typeUrl: string;
                                value: _138.MsgCreateBalancerPool;
                            };
                        };
                        fromPartial: {
                            createBalancerPool(value: _138.MsgCreateBalancerPool): {
                                typeUrl: string;
                                value: _138.MsgCreateBalancerPool;
                            };
                        };
                    };
                    AminoConverter: {
                        "/osmosis.gamm.poolmodels.balancer.v1beta1.MsgCreateBalancerPool": {
                            aminoType: string;
                            toAmino: (message: _138.MsgCreateBalancerPool) => _138.MsgCreateBalancerPoolAmino;
                            fromAmino: (object: _138.MsgCreateBalancerPoolAmino) => _138.MsgCreateBalancerPool;
                        };
                    };
                    MsgCreateBalancerPool: {
                        typeUrl: string;
                        aminoType: string;
                        is(o: any): o is _138.MsgCreateBalancerPool;
                        isSDK(o: any): o is _138.MsgCreateBalancerPoolSDKType;
                        isAmino(o: any): o is _138.MsgCreateBalancerPoolAmino;
                        encode(message: _138.MsgCreateBalancerPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.MsgCreateBalancerPool;
                        fromJSON(object: any): _138.MsgCreateBalancerPool;
                        toJSON(message: _138.MsgCreateBalancerPool): unknown;
                        fromPartial(object: {
                            sender?: string;
                            poolParams?: {
                                swapFee?: string;
                                exitFee?: string;
                                smoothWeightChangeParams?: {
                                    startTime?: Date;
                                    duration?: {
                                        seconds?: bigint;
                                        nanos?: number;
                                    };
                                    initialPoolWeights?: {
                                        token?: {
                                            denom?: string;
                                            amount?: string;
                                        };
                                        weight?: string;
                                    }[];
                                    targetPoolWeights?: {
                                        token?: {
                                            denom?: string;
                                            amount?: string;
                                        };
                                        weight?: string;
                                    }[];
                                };
                            };
                            poolAssets?: {
                                token?: {
                                    denom?: string;
                                    amount?: string;
                                };
                                weight?: string;
                            }[];
                            futurePoolGovernor?: string;
                        }): _138.MsgCreateBalancerPool;
                        fromSDK(object: _138.MsgCreateBalancerPoolSDKType): _138.MsgCreateBalancerPool;
                        toSDK(message: _138.MsgCreateBalancerPool): _138.MsgCreateBalancerPoolSDKType;
                        fromAmino(object: _138.MsgCreateBalancerPoolAmino): _138.MsgCreateBalancerPool;
                        toAmino(message: _138.MsgCreateBalancerPool): _138.MsgCreateBalancerPoolAmino;
                        fromAminoMsg(object: _138.MsgCreateBalancerPoolAminoMsg): _138.MsgCreateBalancerPool;
                        toAminoMsg(message: _138.MsgCreateBalancerPool): _138.MsgCreateBalancerPoolAminoMsg;
                        fromProtoMsg(message: _138.MsgCreateBalancerPoolProtoMsg): _138.MsgCreateBalancerPool;
                        toProto(message: _138.MsgCreateBalancerPool): Uint8Array;
                        toProtoMsg(message: _138.MsgCreateBalancerPool): _138.MsgCreateBalancerPoolProtoMsg;
                    };
                    MsgCreateBalancerPoolResponse: {
                        typeUrl: string;
                        aminoType: string;
                        is(o: any): o is _138.MsgCreateBalancerPoolResponse;
                        isSDK(o: any): o is _138.MsgCreateBalancerPoolResponseSDKType;
                        isAmino(o: any): o is _138.MsgCreateBalancerPoolResponseAmino;
                        encode(message: _138.MsgCreateBalancerPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _138.MsgCreateBalancerPoolResponse;
                        fromJSON(object: any): _138.MsgCreateBalancerPoolResponse;
                        toJSON(message: _138.MsgCreateBalancerPoolResponse): unknown;
                        fromPartial(object: {
                            poolId?: bigint;
                        }): _138.MsgCreateBalancerPoolResponse;
                        fromSDK(object: _138.MsgCreateBalancerPoolResponseSDKType): _138.MsgCreateBalancerPoolResponse;
                        toSDK(message: _138.MsgCreateBalancerPoolResponse): _138.MsgCreateBalancerPoolResponseSDKType;
                        fromAmino(object: _138.MsgCreateBalancerPoolResponseAmino): _138.MsgCreateBalancerPoolResponse;
                        toAmino(message: _138.MsgCreateBalancerPoolResponse): _138.MsgCreateBalancerPoolResponseAmino;
                        fromAminoMsg(object: _138.MsgCreateBalancerPoolResponseAminoMsg): _138.MsgCreateBalancerPoolResponse;
                        toAminoMsg(message: _138.MsgCreateBalancerPoolResponse): _138.MsgCreateBalancerPoolResponseAminoMsg;
                        fromProtoMsg(message: _138.MsgCreateBalancerPoolResponseProtoMsg): _138.MsgCreateBalancerPoolResponse;
                        toProto(message: _138.MsgCreateBalancerPoolResponse): Uint8Array;
                        toProtoMsg(message: _138.MsgCreateBalancerPoolResponse): _138.MsgCreateBalancerPoolResponseProtoMsg;
                    };
                };
            }
            namespace stableswap {
                const v1beta1: {
                    MsgClientImpl: typeof _297.MsgClientImpl;
                    createClientImpl: (rpc: import("..").TxRpc) => _297.MsgClientImpl;
                    registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
                    load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
                    MessageComposer: {
                        encoded: {
                            createStableswapPool(value: _140.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                            stableSwapAdjustScalingFactors(value: _140.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: Uint8Array;
                            };
                        };
                        withTypeUrl: {
                            createStableswapPool(value: _140.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: _140.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: _140.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: _140.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                        toJSON: {
                            createStableswapPool(value: _140.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: unknown;
                            };
                            stableSwapAdjustScalingFactors(value: _140.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: unknown;
                            };
                        };
                        fromJSON: {
                            createStableswapPool(value: any): {
                                typeUrl: string;
                                value: _140.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: any): {
                                typeUrl: string;
                                value: _140.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                        fromPartial: {
                            createStableswapPool(value: _140.MsgCreateStableswapPool): {
                                typeUrl: string;
                                value: _140.MsgCreateStableswapPool;
                            };
                            stableSwapAdjustScalingFactors(value: _140.MsgStableSwapAdjustScalingFactors): {
                                typeUrl: string;
                                value: _140.MsgStableSwapAdjustScalingFactors;
                            };
                        };
                    };
                    AminoConverter: {
                        "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgCreateStableswapPool": {
                            aminoType: string;
                            toAmino: (message: _140.MsgCreateStableswapPool) => _140.MsgCreateStableswapPoolAmino;
                            fromAmino: (object: _140.MsgCreateStableswapPoolAmino) => _140.MsgCreateStableswapPool;
                        };
                        "/osmosis.gamm.poolmodels.stableswap.v1beta1.MsgStableSwapAdjustScalingFactors": {
                            aminoType: string;
                            toAmino: (message: _140.MsgStableSwapAdjustScalingFactors) => _140.MsgStableSwapAdjustScalingFactorsAmino;
                            fromAmino: (object: _140.MsgStableSwapAdjustScalingFactorsAmino) => _140.MsgStableSwapAdjustScalingFactors;
                        };
                    };
                    MsgCreateStableswapPool: {
                        typeUrl: string;
                        aminoType: string;
                        is(o: any): o is _140.MsgCreateStableswapPool;
                        isSDK(o: any): o is _140.MsgCreateStableswapPoolSDKType;
                        isAmino(o: any): o is _140.MsgCreateStableswapPoolAmino;
                        encode(message: _140.MsgCreateStableswapPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.MsgCreateStableswapPool;
                        fromJSON(object: any): _140.MsgCreateStableswapPool;
                        toJSON(message: _140.MsgCreateStableswapPool): unknown;
                        fromPartial(object: {
                            sender?: string;
                            poolParams?: {
                                swapFee?: string;
                                exitFee?: string;
                            };
                            initialPoolLiquidity?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            scalingFactors?: bigint[];
                            futurePoolGovernor?: string;
                            scalingFactorController?: string;
                        }): _140.MsgCreateStableswapPool;
                        fromSDK(object: _140.MsgCreateStableswapPoolSDKType): _140.MsgCreateStableswapPool;
                        toSDK(message: _140.MsgCreateStableswapPool): _140.MsgCreateStableswapPoolSDKType;
                        fromAmino(object: _140.MsgCreateStableswapPoolAmino): _140.MsgCreateStableswapPool;
                        toAmino(message: _140.MsgCreateStableswapPool): _140.MsgCreateStableswapPoolAmino;
                        fromAminoMsg(object: _140.MsgCreateStableswapPoolAminoMsg): _140.MsgCreateStableswapPool;
                        toAminoMsg(message: _140.MsgCreateStableswapPool): _140.MsgCreateStableswapPoolAminoMsg;
                        fromProtoMsg(message: _140.MsgCreateStableswapPoolProtoMsg): _140.MsgCreateStableswapPool;
                        toProto(message: _140.MsgCreateStableswapPool): Uint8Array;
                        toProtoMsg(message: _140.MsgCreateStableswapPool): _140.MsgCreateStableswapPoolProtoMsg;
                    };
                    MsgCreateStableswapPoolResponse: {
                        typeUrl: string;
                        aminoType: string;
                        is(o: any): o is _140.MsgCreateStableswapPoolResponse;
                        isSDK(o: any): o is _140.MsgCreateStableswapPoolResponseSDKType;
                        isAmino(o: any): o is _140.MsgCreateStableswapPoolResponseAmino;
                        encode(message: _140.MsgCreateStableswapPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.MsgCreateStableswapPoolResponse;
                        fromJSON(object: any): _140.MsgCreateStableswapPoolResponse;
                        toJSON(message: _140.MsgCreateStableswapPoolResponse): unknown;
                        fromPartial(object: {
                            poolId?: bigint;
                        }): _140.MsgCreateStableswapPoolResponse;
                        fromSDK(object: _140.MsgCreateStableswapPoolResponseSDKType): _140.MsgCreateStableswapPoolResponse;
                        toSDK(message: _140.MsgCreateStableswapPoolResponse): _140.MsgCreateStableswapPoolResponseSDKType;
                        fromAmino(object: _140.MsgCreateStableswapPoolResponseAmino): _140.MsgCreateStableswapPoolResponse;
                        toAmino(message: _140.MsgCreateStableswapPoolResponse): _140.MsgCreateStableswapPoolResponseAmino;
                        fromAminoMsg(object: _140.MsgCreateStableswapPoolResponseAminoMsg): _140.MsgCreateStableswapPoolResponse;
                        toAminoMsg(message: _140.MsgCreateStableswapPoolResponse): _140.MsgCreateStableswapPoolResponseAminoMsg;
                        fromProtoMsg(message: _140.MsgCreateStableswapPoolResponseProtoMsg): _140.MsgCreateStableswapPoolResponse;
                        toProto(message: _140.MsgCreateStableswapPoolResponse): Uint8Array;
                        toProtoMsg(message: _140.MsgCreateStableswapPoolResponse): _140.MsgCreateStableswapPoolResponseProtoMsg;
                    };
                    MsgStableSwapAdjustScalingFactors: {
                        typeUrl: string;
                        aminoType: string;
                        is(o: any): o is _140.MsgStableSwapAdjustScalingFactors;
                        isSDK(o: any): o is _140.MsgStableSwapAdjustScalingFactorsSDKType;
                        isAmino(o: any): o is _140.MsgStableSwapAdjustScalingFactorsAmino;
                        encode(message: _140.MsgStableSwapAdjustScalingFactors, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.MsgStableSwapAdjustScalingFactors;
                        fromJSON(object: any): _140.MsgStableSwapAdjustScalingFactors;
                        toJSON(message: _140.MsgStableSwapAdjustScalingFactors): unknown;
                        fromPartial(object: {
                            sender?: string;
                            poolId?: bigint;
                            scalingFactors?: bigint[];
                        }): _140.MsgStableSwapAdjustScalingFactors;
                        fromSDK(object: _140.MsgStableSwapAdjustScalingFactorsSDKType): _140.MsgStableSwapAdjustScalingFactors;
                        toSDK(message: _140.MsgStableSwapAdjustScalingFactors): _140.MsgStableSwapAdjustScalingFactorsSDKType;
                        fromAmino(object: _140.MsgStableSwapAdjustScalingFactorsAmino): _140.MsgStableSwapAdjustScalingFactors;
                        toAmino(message: _140.MsgStableSwapAdjustScalingFactors): _140.MsgStableSwapAdjustScalingFactorsAmino;
                        fromAminoMsg(object: _140.MsgStableSwapAdjustScalingFactorsAminoMsg): _140.MsgStableSwapAdjustScalingFactors;
                        toAminoMsg(message: _140.MsgStableSwapAdjustScalingFactors): _140.MsgStableSwapAdjustScalingFactorsAminoMsg;
                        fromProtoMsg(message: _140.MsgStableSwapAdjustScalingFactorsProtoMsg): _140.MsgStableSwapAdjustScalingFactors;
                        toProto(message: _140.MsgStableSwapAdjustScalingFactors): Uint8Array;
                        toProtoMsg(message: _140.MsgStableSwapAdjustScalingFactors): _140.MsgStableSwapAdjustScalingFactorsProtoMsg;
                    };
                    MsgStableSwapAdjustScalingFactorsResponse: {
                        typeUrl: string;
                        aminoType: string;
                        is(o: any): o is _140.MsgStableSwapAdjustScalingFactorsResponse;
                        isSDK(o: any): o is _140.MsgStableSwapAdjustScalingFactorsResponseSDKType;
                        isAmino(o: any): o is _140.MsgStableSwapAdjustScalingFactorsResponseAmino;
                        encode(_: _140.MsgStableSwapAdjustScalingFactorsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _140.MsgStableSwapAdjustScalingFactorsResponse;
                        fromJSON(_: any): _140.MsgStableSwapAdjustScalingFactorsResponse;
                        toJSON(_: _140.MsgStableSwapAdjustScalingFactorsResponse): unknown;
                        fromPartial(_: {}): _140.MsgStableSwapAdjustScalingFactorsResponse;
                        fromSDK(_: _140.MsgStableSwapAdjustScalingFactorsResponseSDKType): _140.MsgStableSwapAdjustScalingFactorsResponse;
                        toSDK(_: _140.MsgStableSwapAdjustScalingFactorsResponse): _140.MsgStableSwapAdjustScalingFactorsResponseSDKType;
                        fromAmino(_: _140.MsgStableSwapAdjustScalingFactorsResponseAmino): _140.MsgStableSwapAdjustScalingFactorsResponse;
                        toAmino(_: _140.MsgStableSwapAdjustScalingFactorsResponse): _140.MsgStableSwapAdjustScalingFactorsResponseAmino;
                        fromAminoMsg(object: _140.MsgStableSwapAdjustScalingFactorsResponseAminoMsg): _140.MsgStableSwapAdjustScalingFactorsResponse;
                        toAminoMsg(message: _140.MsgStableSwapAdjustScalingFactorsResponse): _140.MsgStableSwapAdjustScalingFactorsResponseAminoMsg;
                        fromProtoMsg(message: _140.MsgStableSwapAdjustScalingFactorsResponseProtoMsg): _140.MsgStableSwapAdjustScalingFactorsResponse;
                        toProto(message: _140.MsgStableSwapAdjustScalingFactorsResponse): Uint8Array;
                        toProtoMsg(message: _140.MsgStableSwapAdjustScalingFactorsResponse): _140.MsgStableSwapAdjustScalingFactorsResponseProtoMsg;
                    };
                    PoolParams: {
                        typeUrl: string;
                        aminoType: string;
                        is(o: any): o is _139.PoolParams;
                        isSDK(o: any): o is _139.PoolParamsSDKType;
                        isAmino(o: any): o is _139.PoolParamsAmino;
                        encode(message: _139.PoolParams, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.PoolParams;
                        fromJSON(object: any): _139.PoolParams;
                        toJSON(message: _139.PoolParams): unknown;
                        fromPartial(object: {
                            swapFee?: string;
                            exitFee?: string;
                        }): _139.PoolParams;
                        fromSDK(object: _139.PoolParamsSDKType): _139.PoolParams;
                        toSDK(message: _139.PoolParams): _139.PoolParamsSDKType;
                        fromAmino(object: _139.PoolParamsAmino): _139.PoolParams;
                        toAmino(message: _139.PoolParams): _139.PoolParamsAmino;
                        fromAminoMsg(object: _139.PoolParamsAminoMsg): _139.PoolParams;
                        toAminoMsg(message: _139.PoolParams): _139.PoolParamsAminoMsg;
                        fromProtoMsg(message: _139.PoolParamsProtoMsg): _139.PoolParams;
                        toProto(message: _139.PoolParams): Uint8Array;
                        toProtoMsg(message: _139.PoolParams): _139.PoolParamsProtoMsg;
                    };
                    Pool: {
                        typeUrl: string;
                        aminoType: string;
                        is(o: any): o is _139.Pool;
                        isSDK(o: any): o is _139.PoolSDKType;
                        isAmino(o: any): o is _139.PoolAmino;
                        encode(message: _139.Pool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                        decode(input: Uint8Array | import("..").BinaryReader, length?: number): _139.Pool;
                        fromJSON(object: any): _139.Pool;
                        toJSON(message: _139.Pool): unknown;
                        fromPartial(object: {
                            $typeUrl?: "/osmosis.gamm.poolmodels.stableswap.v1beta1.Pool";
                            address?: string;
                            id?: bigint;
                            poolParams?: {
                                swapFee?: string;
                                exitFee?: string;
                            };
                            futurePoolGovernor?: string;
                            totalShares?: {
                                denom?: string;
                                amount?: string;
                            };
                            poolLiquidity?: {
                                denom?: string;
                                amount?: string;
                            }[];
                            scalingFactors?: bigint[];
                            scalingFactorController?: string;
                        }): _139.Pool;
                        fromSDK(object: _139.PoolSDKType): _139.Pool;
                        toSDK(message: _139.Pool): _139.PoolSDKType;
                        fromAmino(object: _139.PoolAmino): _139.Pool;
                        toAmino(message: _139.Pool): _139.PoolAmino;
                        fromAminoMsg(object: _139.PoolAminoMsg): _139.Pool;
                        toAminoMsg(message: _139.Pool): _139.PoolAminoMsg;
                        fromProtoMsg(message: _139.PoolProtoMsg): _139.Pool;
                        toProto(message: _139.Pool): Uint8Array;
                        toProtoMsg(message: _139.Pool): _139.PoolProtoMsg;
                    };
                };
            }
        }
        const v2: {
            QueryClientImpl: typeof _286.QueryClientImpl;
            createClientImpl: (rpc: import("..").TxRpc) => _286.QueryClientImpl;
            createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                useSpotPrice: <TData = _141.QuerySpotPriceResponse>({ request, options }: _286.UseSpotPriceQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
            };
            createRpcQueryMobxStores: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                QuerySpotPriceStore: {
                    new (): {
                        store: import("..").QueryStore<_141.QuerySpotPriceRequest, _141.QuerySpotPriceResponse>;
                        spotPrice(request: _141.QuerySpotPriceRequest): import("..").MobxResponse<_141.QuerySpotPriceResponse>;
                    };
                };
            };
            QuerySpotPriceRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _141.QuerySpotPriceRequest;
                isSDK(o: any): o is _141.QuerySpotPriceRequestSDKType;
                isAmino(o: any): o is _141.QuerySpotPriceRequestAmino;
                encode(message: _141.QuerySpotPriceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.QuerySpotPriceRequest;
                fromJSON(object: any): _141.QuerySpotPriceRequest;
                toJSON(message: _141.QuerySpotPriceRequest): unknown;
                fromPartial(object: {
                    poolId?: bigint;
                    baseAssetDenom?: string;
                    quoteAssetDenom?: string;
                }): _141.QuerySpotPriceRequest;
                fromSDK(object: _141.QuerySpotPriceRequestSDKType): _141.QuerySpotPriceRequest;
                toSDK(message: _141.QuerySpotPriceRequest): _141.QuerySpotPriceRequestSDKType;
                fromAmino(object: _141.QuerySpotPriceRequestAmino): _141.QuerySpotPriceRequest;
                toAmino(message: _141.QuerySpotPriceRequest): _141.QuerySpotPriceRequestAmino;
                fromAminoMsg(object: _141.QuerySpotPriceRequestAminoMsg): _141.QuerySpotPriceRequest;
                toAminoMsg(message: _141.QuerySpotPriceRequest): _141.QuerySpotPriceRequestAminoMsg;
                fromProtoMsg(message: _141.QuerySpotPriceRequestProtoMsg): _141.QuerySpotPriceRequest;
                toProto(message: _141.QuerySpotPriceRequest): Uint8Array;
                toProtoMsg(message: _141.QuerySpotPriceRequest): _141.QuerySpotPriceRequestProtoMsg;
            };
            QuerySpotPriceResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _141.QuerySpotPriceResponse;
                isSDK(o: any): o is _141.QuerySpotPriceResponseSDKType;
                isAmino(o: any): o is _141.QuerySpotPriceResponseAmino;
                encode(message: _141.QuerySpotPriceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _141.QuerySpotPriceResponse;
                fromJSON(object: any): _141.QuerySpotPriceResponse;
                toJSON(message: _141.QuerySpotPriceResponse): unknown;
                fromPartial(object: {
                    spotPrice?: string;
                }): _141.QuerySpotPriceResponse;
                fromSDK(object: _141.QuerySpotPriceResponseSDKType): _141.QuerySpotPriceResponse;
                toSDK(message: _141.QuerySpotPriceResponse): _141.QuerySpotPriceResponseSDKType;
                fromAmino(object: _141.QuerySpotPriceResponseAmino): _141.QuerySpotPriceResponse;
                toAmino(message: _141.QuerySpotPriceResponse): _141.QuerySpotPriceResponseAmino;
                fromAminoMsg(object: _141.QuerySpotPriceResponseAminoMsg): _141.QuerySpotPriceResponse;
                toAminoMsg(message: _141.QuerySpotPriceResponse): _141.QuerySpotPriceResponseAminoMsg;
                fromProtoMsg(message: _141.QuerySpotPriceResponseProtoMsg): _141.QuerySpotPriceResponse;
                toProto(message: _141.QuerySpotPriceResponse): Uint8Array;
                toProtoMsg(message: _141.QuerySpotPriceResponse): _141.QuerySpotPriceResponseProtoMsg;
            };
        };
        const v1beta1: {
            AminoConverter: {
                "/osmosis.gamm.v1beta1.MsgJoinPool": {
                    aminoType: string;
                    toAmino: (message: import("./gamm/v1beta1/tx").MsgJoinPool) => import("./gamm/v1beta1/tx").MsgJoinPoolAmino;
                    fromAmino: (object: import("./gamm/v1beta1/tx").MsgJoinPoolAmino) => import("./gamm/v1beta1/tx").MsgJoinPool;
                };
                "/osmosis.gamm.v1beta1.MsgExitPool": {
                    aminoType: string;
                    toAmino: (message: import("./gamm/v1beta1/tx").MsgExitPool) => import("./gamm/v1beta1/tx").MsgExitPoolAmino;
                    fromAmino: (object: import("./gamm/v1beta1/tx").MsgExitPoolAmino) => import("./gamm/v1beta1/tx").MsgExitPool;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountIn": {
                    aminoType: string;
                    toAmino: (message: import("./gamm/v1beta1/tx").MsgSwapExactAmountIn) => import("./gamm/v1beta1/tx").MsgSwapExactAmountInAmino;
                    fromAmino: (object: import("./gamm/v1beta1/tx").MsgSwapExactAmountInAmino) => import("./gamm/v1beta1/tx").MsgSwapExactAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgSwapExactAmountOut": {
                    aminoType: string;
                    toAmino: (message: import("./gamm/v1beta1/tx").MsgSwapExactAmountOut) => import("./gamm/v1beta1/tx").MsgSwapExactAmountOutAmino;
                    fromAmino: (object: import("./gamm/v1beta1/tx").MsgSwapExactAmountOutAmino) => import("./gamm/v1beta1/tx").MsgSwapExactAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapExternAmountIn": {
                    aminoType: string;
                    toAmino: (message: import("./gamm/v1beta1/tx").MsgJoinSwapExternAmountIn) => import("./gamm/v1beta1/tx").MsgJoinSwapExternAmountInAmino;
                    fromAmino: (object: import("./gamm/v1beta1/tx").MsgJoinSwapExternAmountInAmino) => import("./gamm/v1beta1/tx").MsgJoinSwapExternAmountIn;
                };
                "/osmosis.gamm.v1beta1.MsgJoinSwapShareAmountOut": {
                    aminoType: string;
                    toAmino: (message: import("./gamm/v1beta1/tx").MsgJoinSwapShareAmountOut) => import("./gamm/v1beta1/tx").MsgJoinSwapShareAmountOutAmino;
                    fromAmino: (object: import("./gamm/v1beta1/tx").MsgJoinSwapShareAmountOutAmino) => import("./gamm/v1beta1/tx").MsgJoinSwapShareAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapExternAmountOut": {
                    aminoType: string;
                    toAmino: (message: import("./gamm/v1beta1/tx").MsgExitSwapExternAmountOut) => import("./gamm/v1beta1/tx").MsgExitSwapExternAmountOutAmino;
                    fromAmino: (object: import("./gamm/v1beta1/tx").MsgExitSwapExternAmountOutAmino) => import("./gamm/v1beta1/tx").MsgExitSwapExternAmountOut;
                };
                "/osmosis.gamm.v1beta1.MsgExitSwapShareAmountIn": {
                    aminoType: string;
                    toAmino: (message: import("./gamm/v1beta1/tx").MsgExitSwapShareAmountIn) => import("./gamm/v1beta1/tx").MsgExitSwapShareAmountInAmino;
                    fromAmino: (object: import("./gamm/v1beta1/tx").MsgExitSwapShareAmountInAmino) => import("./gamm/v1beta1/tx").MsgExitSwapShareAmountIn;
                };
            };
        };
    }
    namespace ibcratelimit {
        const v1beta1: {
            QueryClientImpl: typeof _287.QueryClientImpl;
            createClientImpl: (rpc: import("..").TxRpc) => _287.QueryClientImpl;
            createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                useParams: <TData = _143.QueryParamsResponse>({ request, options }: _287.UseParamsQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
            };
            createRpcQueryMobxStores: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                QueryParamsStore: {
                    new (): {
                        store: import("..").QueryStore<_143.QueryParamsRequest, _143.QueryParamsResponse>;
                        params(request: _143.QueryParamsRequest): import("..").MobxResponse<_143.QueryParamsResponse>;
                    };
                };
            };
            QueryParamsRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _143.QueryParamsRequest;
                isSDK(o: any): o is _143.QueryParamsRequestSDKType;
                isAmino(o: any): o is _143.QueryParamsRequestAmino;
                encode(_: _143.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.QueryParamsRequest;
                fromJSON(_: any): _143.QueryParamsRequest;
                toJSON(_: _143.QueryParamsRequest): unknown;
                fromPartial(_: {}): _143.QueryParamsRequest;
                fromSDK(_: _143.QueryParamsRequestSDKType): _143.QueryParamsRequest;
                toSDK(_: _143.QueryParamsRequest): _143.QueryParamsRequestSDKType;
                fromAmino(_: _143.QueryParamsRequestAmino): _143.QueryParamsRequest;
                toAmino(_: _143.QueryParamsRequest): _143.QueryParamsRequestAmino;
                fromAminoMsg(object: _143.QueryParamsRequestAminoMsg): _143.QueryParamsRequest;
                toAminoMsg(message: _143.QueryParamsRequest): _143.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _143.QueryParamsRequestProtoMsg): _143.QueryParamsRequest;
                toProto(message: _143.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _143.QueryParamsRequest): _143.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _143.QueryParamsResponse;
                isSDK(o: any): o is _143.QueryParamsResponseSDKType;
                isAmino(o: any): o is _143.QueryParamsResponseAmino;
                encode(message: _143.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _143.QueryParamsResponse;
                fromJSON(object: any): _143.QueryParamsResponse;
                toJSON(message: _143.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        contractAddress?: string;
                    };
                }): _143.QueryParamsResponse;
                fromSDK(object: _143.QueryParamsResponseSDKType): _143.QueryParamsResponse;
                toSDK(message: _143.QueryParamsResponse): _143.QueryParamsResponseSDKType;
                fromAmino(object: _143.QueryParamsResponseAmino): _143.QueryParamsResponse;
                toAmino(message: _143.QueryParamsResponse): _143.QueryParamsResponseAmino;
                fromAminoMsg(object: _143.QueryParamsResponseAminoMsg): _143.QueryParamsResponse;
                toAminoMsg(message: _143.QueryParamsResponse): _143.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _143.QueryParamsResponseProtoMsg): _143.QueryParamsResponse;
                toProto(message: _143.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _143.QueryParamsResponse): _143.QueryParamsResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _142.Params;
                isSDK(o: any): o is _142.ParamsSDKType;
                isAmino(o: any): o is _142.ParamsAmino;
                encode(message: _142.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _142.Params;
                fromJSON(object: any): _142.Params;
                toJSON(message: _142.Params): unknown;
                fromPartial(object: {
                    contractAddress?: string;
                }): _142.Params;
                fromSDK(object: _142.ParamsSDKType): _142.Params;
                toSDK(message: _142.Params): _142.ParamsSDKType;
                fromAmino(object: _142.ParamsAmino): _142.Params;
                toAmino(message: _142.Params): _142.ParamsAmino;
                fromAminoMsg(object: _142.ParamsAminoMsg): _142.Params;
                toAminoMsg(message: _142.Params): _142.ParamsAminoMsg;
                fromProtoMsg(message: _142.ParamsProtoMsg): _142.Params;
                toProto(message: _142.Params): Uint8Array;
                toProtoMsg(message: _142.Params): _142.ParamsProtoMsg;
            };
        };
    }
    const incentives: {
        MsgClientImpl: typeof _298.MsgClientImpl;
        createClientImpl: (rpc: import("..").TxRpc) => _298.MsgClientImpl;
        QueryClientImpl: typeof _288.QueryClientImpl;
        createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
            useModuleToDistributeCoins: <TData = _147.ModuleToDistributeCoinsResponse>({ request, options }: _288.UseModuleToDistributeCoinsQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
            useGaugeByID: <TData_1 = _147.GaugeByIDResponse>({ request, options }: _288.UseGaugeByIDQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
            useGauges: <TData_2 = _147.GaugesResponse>({ request, options }: _288.UseGaugesQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
            useActiveGauges: <TData_3 = _147.ActiveGaugesResponse>({ request, options }: _288.UseActiveGaugesQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
            useActiveGaugesPerDenom: <TData_4 = _147.ActiveGaugesPerDenomResponse>({ request, options }: _288.UseActiveGaugesPerDenomQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
            useUpcomingGauges: <TData_5 = _147.UpcomingGaugesResponse>({ request, options }: _288.UseUpcomingGaugesQuery<TData_5>) => import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
            useUpcomingGaugesPerDenom: <TData_6 = _147.UpcomingGaugesPerDenomResponse>({ request, options }: _288.UseUpcomingGaugesPerDenomQuery<TData_6>) => import("@tanstack/react-query").UseQueryResult<TData_6, Error>;
            useRewardsEst: <TData_7 = _147.RewardsEstResponse>({ request, options }: _288.UseRewardsEstQuery<TData_7>) => import("@tanstack/react-query").UseQueryResult<TData_7, Error>;
            useLockableDurations: <TData_8 = _147.QueryLockableDurationsResponse>({ request, options }: _288.UseLockableDurationsQuery<TData_8>) => import("@tanstack/react-query").UseQueryResult<TData_8, Error>;
        };
        createRpcQueryMobxStores: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
            QueryModuleToDistributeCoinsStore: {
                new (): {
                    store: import("..").QueryStore<_147.ModuleToDistributeCoinsRequest, _147.ModuleToDistributeCoinsResponse>;
                    moduleToDistributeCoins(request: _147.ModuleToDistributeCoinsRequest): import("..").MobxResponse<_147.ModuleToDistributeCoinsResponse>;
                };
            };
            QueryGaugeByIDStore: {
                new (): {
                    store: import("..").QueryStore<_147.GaugeByIDRequest, _147.GaugeByIDResponse>;
                    gaugeByID(request: _147.GaugeByIDRequest): import("..").MobxResponse<_147.GaugeByIDResponse>;
                };
            };
            QueryGaugesStore: {
                new (): {
                    store: import("..").QueryStore<_147.GaugesRequest, _147.GaugesResponse>;
                    gauges(request: _147.GaugesRequest): import("..").MobxResponse<_147.GaugesResponse>;
                };
            };
            QueryActiveGaugesStore: {
                new (): {
                    store: import("..").QueryStore<_147.ActiveGaugesRequest, _147.ActiveGaugesResponse>;
                    activeGauges(request: _147.ActiveGaugesRequest): import("..").MobxResponse<_147.ActiveGaugesResponse>;
                };
            };
            QueryActiveGaugesPerDenomStore: {
                new (): {
                    store: import("..").QueryStore<_147.ActiveGaugesPerDenomRequest, _147.ActiveGaugesPerDenomResponse>;
                    activeGaugesPerDenom(request: _147.ActiveGaugesPerDenomRequest): import("..").MobxResponse<_147.ActiveGaugesPerDenomResponse>;
                };
            };
            QueryUpcomingGaugesStore: {
                new (): {
                    store: import("..").QueryStore<_147.UpcomingGaugesRequest, _147.UpcomingGaugesResponse>;
                    upcomingGauges(request: _147.UpcomingGaugesRequest): import("..").MobxResponse<_147.UpcomingGaugesResponse>;
                };
            };
            QueryUpcomingGaugesPerDenomStore: {
                new (): {
                    store: import("..").QueryStore<_147.UpcomingGaugesPerDenomRequest, _147.UpcomingGaugesPerDenomResponse>;
                    upcomingGaugesPerDenom(request: _147.UpcomingGaugesPerDenomRequest): import("..").MobxResponse<_147.UpcomingGaugesPerDenomResponse>;
                };
            };
            QueryRewardsEstStore: {
                new (): {
                    store: import("..").QueryStore<_147.RewardsEstRequest, _147.RewardsEstResponse>;
                    rewardsEst(request: _147.RewardsEstRequest): import("..").MobxResponse<_147.RewardsEstResponse>;
                };
            };
            QueryLockableDurationsStore: {
                new (): {
                    store: import("..").QueryStore<_147.QueryLockableDurationsRequest, _147.QueryLockableDurationsResponse>;
                    lockableDurations(request: _147.QueryLockableDurationsRequest): import("..").MobxResponse<_147.QueryLockableDurationsResponse>;
                };
            };
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                createGauge(value: _148.MsgCreateGauge): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                addToGauge(value: _148.MsgAddToGauge): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                createGauge(value: _148.MsgCreateGauge): {
                    typeUrl: string;
                    value: _148.MsgCreateGauge;
                };
                addToGauge(value: _148.MsgAddToGauge): {
                    typeUrl: string;
                    value: _148.MsgAddToGauge;
                };
            };
            toJSON: {
                createGauge(value: _148.MsgCreateGauge): {
                    typeUrl: string;
                    value: unknown;
                };
                addToGauge(value: _148.MsgAddToGauge): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                createGauge(value: any): {
                    typeUrl: string;
                    value: _148.MsgCreateGauge;
                };
                addToGauge(value: any): {
                    typeUrl: string;
                    value: _148.MsgAddToGauge;
                };
            };
            fromPartial: {
                createGauge(value: _148.MsgCreateGauge): {
                    typeUrl: string;
                    value: _148.MsgCreateGauge;
                };
                addToGauge(value: _148.MsgAddToGauge): {
                    typeUrl: string;
                    value: _148.MsgAddToGauge;
                };
            };
        };
        AminoConverter: {
            "/osmosis.incentives.MsgCreateGauge": {
                aminoType: string;
                toAmino: (message: _148.MsgCreateGauge) => _148.MsgCreateGaugeAmino;
                fromAmino: (object: _148.MsgCreateGaugeAmino) => _148.MsgCreateGauge;
            };
            "/osmosis.incentives.MsgAddToGauge": {
                aminoType: string;
                toAmino: (message: _148.MsgAddToGauge) => _148.MsgAddToGaugeAmino;
                fromAmino: (object: _148.MsgAddToGaugeAmino) => _148.MsgAddToGauge;
            };
        };
        MsgCreateGauge: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _148.MsgCreateGauge;
            isSDK(o: any): o is _148.MsgCreateGaugeSDKType;
            isAmino(o: any): o is _148.MsgCreateGaugeAmino;
            encode(message: _148.MsgCreateGauge, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.MsgCreateGauge;
            fromJSON(object: any): _148.MsgCreateGauge;
            toJSON(message: _148.MsgCreateGauge): unknown;
            fromPartial(object: {
                isPerpetual?: boolean;
                owner?: string;
                distributeTo?: {
                    lockQueryType?: _150.LockQueryType;
                    denom?: string;
                    duration?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    timestamp?: Date;
                };
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
                startTime?: Date;
                numEpochsPaidOver?: bigint;
            }): _148.MsgCreateGauge;
            fromSDK(object: _148.MsgCreateGaugeSDKType): _148.MsgCreateGauge;
            toSDK(message: _148.MsgCreateGauge): _148.MsgCreateGaugeSDKType;
            fromAmino(object: _148.MsgCreateGaugeAmino): _148.MsgCreateGauge;
            toAmino(message: _148.MsgCreateGauge): _148.MsgCreateGaugeAmino;
            fromAminoMsg(object: _148.MsgCreateGaugeAminoMsg): _148.MsgCreateGauge;
            toAminoMsg(message: _148.MsgCreateGauge): _148.MsgCreateGaugeAminoMsg;
            fromProtoMsg(message: _148.MsgCreateGaugeProtoMsg): _148.MsgCreateGauge;
            toProto(message: _148.MsgCreateGauge): Uint8Array;
            toProtoMsg(message: _148.MsgCreateGauge): _148.MsgCreateGaugeProtoMsg;
        };
        MsgCreateGaugeResponse: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _148.MsgCreateGaugeResponse;
            isSDK(o: any): o is _148.MsgCreateGaugeResponseSDKType;
            isAmino(o: any): o is _148.MsgCreateGaugeResponseAmino;
            encode(_: _148.MsgCreateGaugeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.MsgCreateGaugeResponse;
            fromJSON(_: any): _148.MsgCreateGaugeResponse;
            toJSON(_: _148.MsgCreateGaugeResponse): unknown;
            fromPartial(_: {}): _148.MsgCreateGaugeResponse;
            fromSDK(_: _148.MsgCreateGaugeResponseSDKType): _148.MsgCreateGaugeResponse;
            toSDK(_: _148.MsgCreateGaugeResponse): _148.MsgCreateGaugeResponseSDKType;
            fromAmino(_: _148.MsgCreateGaugeResponseAmino): _148.MsgCreateGaugeResponse;
            toAmino(_: _148.MsgCreateGaugeResponse): _148.MsgCreateGaugeResponseAmino;
            fromAminoMsg(object: _148.MsgCreateGaugeResponseAminoMsg): _148.MsgCreateGaugeResponse;
            toAminoMsg(message: _148.MsgCreateGaugeResponse): _148.MsgCreateGaugeResponseAminoMsg;
            fromProtoMsg(message: _148.MsgCreateGaugeResponseProtoMsg): _148.MsgCreateGaugeResponse;
            toProto(message: _148.MsgCreateGaugeResponse): Uint8Array;
            toProtoMsg(message: _148.MsgCreateGaugeResponse): _148.MsgCreateGaugeResponseProtoMsg;
        };
        MsgAddToGauge: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _148.MsgAddToGauge;
            isSDK(o: any): o is _148.MsgAddToGaugeSDKType;
            isAmino(o: any): o is _148.MsgAddToGaugeAmino;
            encode(message: _148.MsgAddToGauge, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.MsgAddToGauge;
            fromJSON(object: any): _148.MsgAddToGauge;
            toJSON(message: _148.MsgAddToGauge): unknown;
            fromPartial(object: {
                owner?: string;
                gaugeId?: bigint;
                rewards?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _148.MsgAddToGauge;
            fromSDK(object: _148.MsgAddToGaugeSDKType): _148.MsgAddToGauge;
            toSDK(message: _148.MsgAddToGauge): _148.MsgAddToGaugeSDKType;
            fromAmino(object: _148.MsgAddToGaugeAmino): _148.MsgAddToGauge;
            toAmino(message: _148.MsgAddToGauge): _148.MsgAddToGaugeAmino;
            fromAminoMsg(object: _148.MsgAddToGaugeAminoMsg): _148.MsgAddToGauge;
            toAminoMsg(message: _148.MsgAddToGauge): _148.MsgAddToGaugeAminoMsg;
            fromProtoMsg(message: _148.MsgAddToGaugeProtoMsg): _148.MsgAddToGauge;
            toProto(message: _148.MsgAddToGauge): Uint8Array;
            toProtoMsg(message: _148.MsgAddToGauge): _148.MsgAddToGaugeProtoMsg;
        };
        MsgAddToGaugeResponse: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _148.MsgAddToGaugeResponse;
            isSDK(o: any): o is _148.MsgAddToGaugeResponseSDKType;
            isAmino(o: any): o is _148.MsgAddToGaugeResponseAmino;
            encode(_: _148.MsgAddToGaugeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _148.MsgAddToGaugeResponse;
            fromJSON(_: any): _148.MsgAddToGaugeResponse;
            toJSON(_: _148.MsgAddToGaugeResponse): unknown;
            fromPartial(_: {}): _148.MsgAddToGaugeResponse;
            fromSDK(_: _148.MsgAddToGaugeResponseSDKType): _148.MsgAddToGaugeResponse;
            toSDK(_: _148.MsgAddToGaugeResponse): _148.MsgAddToGaugeResponseSDKType;
            fromAmino(_: _148.MsgAddToGaugeResponseAmino): _148.MsgAddToGaugeResponse;
            toAmino(_: _148.MsgAddToGaugeResponse): _148.MsgAddToGaugeResponseAmino;
            fromAminoMsg(object: _148.MsgAddToGaugeResponseAminoMsg): _148.MsgAddToGaugeResponse;
            toAminoMsg(message: _148.MsgAddToGaugeResponse): _148.MsgAddToGaugeResponseAminoMsg;
            fromProtoMsg(message: _148.MsgAddToGaugeResponseProtoMsg): _148.MsgAddToGaugeResponse;
            toProto(message: _148.MsgAddToGaugeResponse): Uint8Array;
            toProtoMsg(message: _148.MsgAddToGaugeResponse): _148.MsgAddToGaugeResponseProtoMsg;
        };
        ModuleToDistributeCoinsRequest: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _147.ModuleToDistributeCoinsRequest;
            isSDK(o: any): o is _147.ModuleToDistributeCoinsRequestSDKType;
            isAmino(o: any): o is _147.ModuleToDistributeCoinsRequestAmino;
            encode(_: _147.ModuleToDistributeCoinsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.ModuleToDistributeCoinsRequest;
            fromJSON(_: any): _147.ModuleToDistributeCoinsRequest;
            toJSON(_: _147.ModuleToDistributeCoinsRequest): unknown;
            fromPartial(_: {}): _147.ModuleToDistributeCoinsRequest;
            fromSDK(_: _147.ModuleToDistributeCoinsRequestSDKType): _147.ModuleToDistributeCoinsRequest;
            toSDK(_: _147.ModuleToDistributeCoinsRequest): _147.ModuleToDistributeCoinsRequestSDKType;
            fromAmino(_: _147.ModuleToDistributeCoinsRequestAmino): _147.ModuleToDistributeCoinsRequest;
            toAmino(_: _147.ModuleToDistributeCoinsRequest): _147.ModuleToDistributeCoinsRequestAmino;
            fromAminoMsg(object: _147.ModuleToDistributeCoinsRequestAminoMsg): _147.ModuleToDistributeCoinsRequest;
            toAminoMsg(message: _147.ModuleToDistributeCoinsRequest): _147.ModuleToDistributeCoinsRequestAminoMsg;
            fromProtoMsg(message: _147.ModuleToDistributeCoinsRequestProtoMsg): _147.ModuleToDistributeCoinsRequest;
            toProto(message: _147.ModuleToDistributeCoinsRequest): Uint8Array;
            toProtoMsg(message: _147.ModuleToDistributeCoinsRequest): _147.ModuleToDistributeCoinsRequestProtoMsg;
        };
        ModuleToDistributeCoinsResponse: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _147.ModuleToDistributeCoinsResponse;
            isSDK(o: any): o is _147.ModuleToDistributeCoinsResponseSDKType;
            isAmino(o: any): o is _147.ModuleToDistributeCoinsResponseAmino;
            encode(message: _147.ModuleToDistributeCoinsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.ModuleToDistributeCoinsResponse;
            fromJSON(object: any): _147.ModuleToDistributeCoinsResponse;
            toJSON(message: _147.ModuleToDistributeCoinsResponse): unknown;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _147.ModuleToDistributeCoinsResponse;
            fromSDK(object: _147.ModuleToDistributeCoinsResponseSDKType): _147.ModuleToDistributeCoinsResponse;
            toSDK(message: _147.ModuleToDistributeCoinsResponse): _147.ModuleToDistributeCoinsResponseSDKType;
            fromAmino(object: _147.ModuleToDistributeCoinsResponseAmino): _147.ModuleToDistributeCoinsResponse;
            toAmino(message: _147.ModuleToDistributeCoinsResponse): _147.ModuleToDistributeCoinsResponseAmino;
            fromAminoMsg(object: _147.ModuleToDistributeCoinsResponseAminoMsg): _147.ModuleToDistributeCoinsResponse;
            toAminoMsg(message: _147.ModuleToDistributeCoinsResponse): _147.ModuleToDistributeCoinsResponseAminoMsg;
            fromProtoMsg(message: _147.ModuleToDistributeCoinsResponseProtoMsg): _147.ModuleToDistributeCoinsResponse;
            toProto(message: _147.ModuleToDistributeCoinsResponse): Uint8Array;
            toProtoMsg(message: _147.ModuleToDistributeCoinsResponse): _147.ModuleToDistributeCoinsResponseProtoMsg;
        };
        GaugeByIDRequest: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _147.GaugeByIDRequest;
            isSDK(o: any): o is _147.GaugeByIDRequestSDKType;
            isAmino(o: any): o is _147.GaugeByIDRequestAmino;
            encode(message: _147.GaugeByIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.GaugeByIDRequest;
            fromJSON(object: any): _147.GaugeByIDRequest;
            toJSON(message: _147.GaugeByIDRequest): unknown;
            fromPartial(object: {
                id?: bigint;
            }): _147.GaugeByIDRequest;
            fromSDK(object: _147.GaugeByIDRequestSDKType): _147.GaugeByIDRequest;
            toSDK(message: _147.GaugeByIDRequest): _147.GaugeByIDRequestSDKType;
            fromAmino(object: _147.GaugeByIDRequestAmino): _147.GaugeByIDRequest;
            toAmino(message: _147.GaugeByIDRequest): _147.GaugeByIDRequestAmino;
            fromAminoMsg(object: _147.GaugeByIDRequestAminoMsg): _147.GaugeByIDRequest;
            toAminoMsg(message: _147.GaugeByIDRequest): _147.GaugeByIDRequestAminoMsg;
            fromProtoMsg(message: _147.GaugeByIDRequestProtoMsg): _147.GaugeByIDRequest;
            toProto(message: _147.GaugeByIDRequest): Uint8Array;
            toProtoMsg(message: _147.GaugeByIDRequest): _147.GaugeByIDRequestProtoMsg;
        };
        GaugeByIDResponse: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _147.GaugeByIDResponse;
            isSDK(o: any): o is _147.GaugeByIDResponseSDKType;
            isAmino(o: any): o is _147.GaugeByIDResponseAmino;
            encode(message: _147.GaugeByIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.GaugeByIDResponse;
            fromJSON(object: any): _147.GaugeByIDResponse;
            toJSON(message: _147.GaugeByIDResponse): unknown;
            fromPartial(object: {
                gauge?: {
                    id?: bigint;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _150.LockQueryType;
                        denom?: string;
                        duration?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        timestamp?: Date;
                    };
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    startTime?: Date;
                    numEpochsPaidOver?: bigint;
                    filledEpochs?: bigint;
                    distributedCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                };
            }): _147.GaugeByIDResponse;
            fromSDK(object: _147.GaugeByIDResponseSDKType): _147.GaugeByIDResponse;
            toSDK(message: _147.GaugeByIDResponse): _147.GaugeByIDResponseSDKType;
            fromAmino(object: _147.GaugeByIDResponseAmino): _147.GaugeByIDResponse;
            toAmino(message: _147.GaugeByIDResponse): _147.GaugeByIDResponseAmino;
            fromAminoMsg(object: _147.GaugeByIDResponseAminoMsg): _147.GaugeByIDResponse;
            toAminoMsg(message: _147.GaugeByIDResponse): _147.GaugeByIDResponseAminoMsg;
            fromProtoMsg(message: _147.GaugeByIDResponseProtoMsg): _147.GaugeByIDResponse;
            toProto(message: _147.GaugeByIDResponse): Uint8Array;
            toProtoMsg(message: _147.GaugeByIDResponse): _147.GaugeByIDResponseProtoMsg;
        };
        GaugesRequest: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _147.GaugesRequest;
            isSDK(o: any): o is _147.GaugesRequestSDKType;
            isAmino(o: any): o is _147.GaugesRequestAmino;
            encode(message: _147.GaugesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.GaugesRequest;
            fromJSON(object: any): _147.GaugesRequest;
            toJSON(message: _147.GaugesRequest): unknown;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: bigint;
                    limit?: bigint;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _147.GaugesRequest;
            fromSDK(object: _147.GaugesRequestSDKType): _147.GaugesRequest;
            toSDK(message: _147.GaugesRequest): _147.GaugesRequestSDKType;
            fromAmino(object: _147.GaugesRequestAmino): _147.GaugesRequest;
            toAmino(message: _147.GaugesRequest): _147.GaugesRequestAmino;
            fromAminoMsg(object: _147.GaugesRequestAminoMsg): _147.GaugesRequest;
            toAminoMsg(message: _147.GaugesRequest): _147.GaugesRequestAminoMsg;
            fromProtoMsg(message: _147.GaugesRequestProtoMsg): _147.GaugesRequest;
            toProto(message: _147.GaugesRequest): Uint8Array;
            toProtoMsg(message: _147.GaugesRequest): _147.GaugesRequestProtoMsg;
        };
        GaugesResponse: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _147.GaugesResponse;
            isSDK(o: any): o is _147.GaugesResponseSDKType;
            isAmino(o: any): o is _147.GaugesResponseAmino;
            encode(message: _147.GaugesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.GaugesResponse;
            fromJSON(object: any): _147.GaugesResponse;
            toJSON(message: _147.GaugesResponse): unknown;
            fromPartial(object: {
                data?: {
                    id?: bigint;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _150.LockQueryType;
                        denom?: string;
                        duration?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        timestamp?: Date;
                    };
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    startTime?: Date;
                    numEpochsPaidOver?: bigint;
                    filledEpochs?: bigint;
                    distributedCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
                pagination?: {
                    nextKey?: Uint8Array;
                    total?: bigint;
                };
            }): _147.GaugesResponse;
            fromSDK(object: _147.GaugesResponseSDKType): _147.GaugesResponse;
            toSDK(message: _147.GaugesResponse): _147.GaugesResponseSDKType;
            fromAmino(object: _147.GaugesResponseAmino): _147.GaugesResponse;
            toAmino(message: _147.GaugesResponse): _147.GaugesResponseAmino;
            fromAminoMsg(object: _147.GaugesResponseAminoMsg): _147.GaugesResponse;
            toAminoMsg(message: _147.GaugesResponse): _147.GaugesResponseAminoMsg;
            fromProtoMsg(message: _147.GaugesResponseProtoMsg): _147.GaugesResponse;
            toProto(message: _147.GaugesResponse): Uint8Array;
            toProtoMsg(message: _147.GaugesResponse): _147.GaugesResponseProtoMsg;
        };
        ActiveGaugesRequest: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _147.ActiveGaugesRequest;
            isSDK(o: any): o is _147.ActiveGaugesRequestSDKType;
            isAmino(o: any): o is _147.ActiveGaugesRequestAmino;
            encode(message: _147.ActiveGaugesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.ActiveGaugesRequest;
            fromJSON(object: any): _147.ActiveGaugesRequest;
            toJSON(message: _147.ActiveGaugesRequest): unknown;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: bigint;
                    limit?: bigint;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _147.ActiveGaugesRequest;
            fromSDK(object: _147.ActiveGaugesRequestSDKType): _147.ActiveGaugesRequest;
            toSDK(message: _147.ActiveGaugesRequest): _147.ActiveGaugesRequestSDKType;
            fromAmino(object: _147.ActiveGaugesRequestAmino): _147.ActiveGaugesRequest;
            toAmino(message: _147.ActiveGaugesRequest): _147.ActiveGaugesRequestAmino;
            fromAminoMsg(object: _147.ActiveGaugesRequestAminoMsg): _147.ActiveGaugesRequest;
            toAminoMsg(message: _147.ActiveGaugesRequest): _147.ActiveGaugesRequestAminoMsg;
            fromProtoMsg(message: _147.ActiveGaugesRequestProtoMsg): _147.ActiveGaugesRequest;
            toProto(message: _147.ActiveGaugesRequest): Uint8Array;
            toProtoMsg(message: _147.ActiveGaugesRequest): _147.ActiveGaugesRequestProtoMsg;
        };
        ActiveGaugesResponse: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _147.ActiveGaugesResponse;
            isSDK(o: any): o is _147.ActiveGaugesResponseSDKType;
            isAmino(o: any): o is _147.ActiveGaugesResponseAmino;
            encode(message: _147.ActiveGaugesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.ActiveGaugesResponse;
            fromJSON(object: any): _147.ActiveGaugesResponse;
            toJSON(message: _147.ActiveGaugesResponse): unknown;
            fromPartial(object: {
                data?: {
                    id?: bigint;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _150.LockQueryType;
                        denom?: string;
                        duration?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        timestamp?: Date;
                    };
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    startTime?: Date;
                    numEpochsPaidOver?: bigint;
                    filledEpochs?: bigint;
                    distributedCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
                pagination?: {
                    nextKey?: Uint8Array;
                    total?: bigint;
                };
            }): _147.ActiveGaugesResponse;
            fromSDK(object: _147.ActiveGaugesResponseSDKType): _147.ActiveGaugesResponse;
            toSDK(message: _147.ActiveGaugesResponse): _147.ActiveGaugesResponseSDKType;
            fromAmino(object: _147.ActiveGaugesResponseAmino): _147.ActiveGaugesResponse;
            toAmino(message: _147.ActiveGaugesResponse): _147.ActiveGaugesResponseAmino;
            fromAminoMsg(object: _147.ActiveGaugesResponseAminoMsg): _147.ActiveGaugesResponse;
            toAminoMsg(message: _147.ActiveGaugesResponse): _147.ActiveGaugesResponseAminoMsg;
            fromProtoMsg(message: _147.ActiveGaugesResponseProtoMsg): _147.ActiveGaugesResponse;
            toProto(message: _147.ActiveGaugesResponse): Uint8Array;
            toProtoMsg(message: _147.ActiveGaugesResponse): _147.ActiveGaugesResponseProtoMsg;
        };
        ActiveGaugesPerDenomRequest: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _147.ActiveGaugesPerDenomRequest;
            isSDK(o: any): o is _147.ActiveGaugesPerDenomRequestSDKType;
            isAmino(o: any): o is _147.ActiveGaugesPerDenomRequestAmino;
            encode(message: _147.ActiveGaugesPerDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.ActiveGaugesPerDenomRequest;
            fromJSON(object: any): _147.ActiveGaugesPerDenomRequest;
            toJSON(message: _147.ActiveGaugesPerDenomRequest): unknown;
            fromPartial(object: {
                denom?: string;
                pagination?: {
                    key?: Uint8Array;
                    offset?: bigint;
                    limit?: bigint;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _147.ActiveGaugesPerDenomRequest;
            fromSDK(object: _147.ActiveGaugesPerDenomRequestSDKType): _147.ActiveGaugesPerDenomRequest;
            toSDK(message: _147.ActiveGaugesPerDenomRequest): _147.ActiveGaugesPerDenomRequestSDKType;
            fromAmino(object: _147.ActiveGaugesPerDenomRequestAmino): _147.ActiveGaugesPerDenomRequest;
            toAmino(message: _147.ActiveGaugesPerDenomRequest): _147.ActiveGaugesPerDenomRequestAmino;
            fromAminoMsg(object: _147.ActiveGaugesPerDenomRequestAminoMsg): _147.ActiveGaugesPerDenomRequest;
            toAminoMsg(message: _147.ActiveGaugesPerDenomRequest): _147.ActiveGaugesPerDenomRequestAminoMsg;
            fromProtoMsg(message: _147.ActiveGaugesPerDenomRequestProtoMsg): _147.ActiveGaugesPerDenomRequest;
            toProto(message: _147.ActiveGaugesPerDenomRequest): Uint8Array;
            toProtoMsg(message: _147.ActiveGaugesPerDenomRequest): _147.ActiveGaugesPerDenomRequestProtoMsg;
        };
        ActiveGaugesPerDenomResponse: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _147.ActiveGaugesPerDenomResponse;
            isSDK(o: any): o is _147.ActiveGaugesPerDenomResponseSDKType;
            isAmino(o: any): o is _147.ActiveGaugesPerDenomResponseAmino;
            encode(message: _147.ActiveGaugesPerDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.ActiveGaugesPerDenomResponse;
            fromJSON(object: any): _147.ActiveGaugesPerDenomResponse;
            toJSON(message: _147.ActiveGaugesPerDenomResponse): unknown;
            fromPartial(object: {
                data?: {
                    id?: bigint;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _150.LockQueryType;
                        denom?: string;
                        duration?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        timestamp?: Date;
                    };
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    startTime?: Date;
                    numEpochsPaidOver?: bigint;
                    filledEpochs?: bigint;
                    distributedCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
                pagination?: {
                    nextKey?: Uint8Array;
                    total?: bigint;
                };
            }): _147.ActiveGaugesPerDenomResponse;
            fromSDK(object: _147.ActiveGaugesPerDenomResponseSDKType): _147.ActiveGaugesPerDenomResponse;
            toSDK(message: _147.ActiveGaugesPerDenomResponse): _147.ActiveGaugesPerDenomResponseSDKType;
            fromAmino(object: _147.ActiveGaugesPerDenomResponseAmino): _147.ActiveGaugesPerDenomResponse;
            toAmino(message: _147.ActiveGaugesPerDenomResponse): _147.ActiveGaugesPerDenomResponseAmino;
            fromAminoMsg(object: _147.ActiveGaugesPerDenomResponseAminoMsg): _147.ActiveGaugesPerDenomResponse;
            toAminoMsg(message: _147.ActiveGaugesPerDenomResponse): _147.ActiveGaugesPerDenomResponseAminoMsg;
            fromProtoMsg(message: _147.ActiveGaugesPerDenomResponseProtoMsg): _147.ActiveGaugesPerDenomResponse;
            toProto(message: _147.ActiveGaugesPerDenomResponse): Uint8Array;
            toProtoMsg(message: _147.ActiveGaugesPerDenomResponse): _147.ActiveGaugesPerDenomResponseProtoMsg;
        };
        UpcomingGaugesRequest: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _147.UpcomingGaugesRequest;
            isSDK(o: any): o is _147.UpcomingGaugesRequestSDKType;
            isAmino(o: any): o is _147.UpcomingGaugesRequestAmino;
            encode(message: _147.UpcomingGaugesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.UpcomingGaugesRequest;
            fromJSON(object: any): _147.UpcomingGaugesRequest;
            toJSON(message: _147.UpcomingGaugesRequest): unknown;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: bigint;
                    limit?: bigint;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _147.UpcomingGaugesRequest;
            fromSDK(object: _147.UpcomingGaugesRequestSDKType): _147.UpcomingGaugesRequest;
            toSDK(message: _147.UpcomingGaugesRequest): _147.UpcomingGaugesRequestSDKType;
            fromAmino(object: _147.UpcomingGaugesRequestAmino): _147.UpcomingGaugesRequest;
            toAmino(message: _147.UpcomingGaugesRequest): _147.UpcomingGaugesRequestAmino;
            fromAminoMsg(object: _147.UpcomingGaugesRequestAminoMsg): _147.UpcomingGaugesRequest;
            toAminoMsg(message: _147.UpcomingGaugesRequest): _147.UpcomingGaugesRequestAminoMsg;
            fromProtoMsg(message: _147.UpcomingGaugesRequestProtoMsg): _147.UpcomingGaugesRequest;
            toProto(message: _147.UpcomingGaugesRequest): Uint8Array;
            toProtoMsg(message: _147.UpcomingGaugesRequest): _147.UpcomingGaugesRequestProtoMsg;
        };
        UpcomingGaugesResponse: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _147.UpcomingGaugesResponse;
            isSDK(o: any): o is _147.UpcomingGaugesResponseSDKType;
            isAmino(o: any): o is _147.UpcomingGaugesResponseAmino;
            encode(message: _147.UpcomingGaugesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.UpcomingGaugesResponse;
            fromJSON(object: any): _147.UpcomingGaugesResponse;
            toJSON(message: _147.UpcomingGaugesResponse): unknown;
            fromPartial(object: {
                data?: {
                    id?: bigint;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _150.LockQueryType;
                        denom?: string;
                        duration?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        timestamp?: Date;
                    };
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    startTime?: Date;
                    numEpochsPaidOver?: bigint;
                    filledEpochs?: bigint;
                    distributedCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
                pagination?: {
                    nextKey?: Uint8Array;
                    total?: bigint;
                };
            }): _147.UpcomingGaugesResponse;
            fromSDK(object: _147.UpcomingGaugesResponseSDKType): _147.UpcomingGaugesResponse;
            toSDK(message: _147.UpcomingGaugesResponse): _147.UpcomingGaugesResponseSDKType;
            fromAmino(object: _147.UpcomingGaugesResponseAmino): _147.UpcomingGaugesResponse;
            toAmino(message: _147.UpcomingGaugesResponse): _147.UpcomingGaugesResponseAmino;
            fromAminoMsg(object: _147.UpcomingGaugesResponseAminoMsg): _147.UpcomingGaugesResponse;
            toAminoMsg(message: _147.UpcomingGaugesResponse): _147.UpcomingGaugesResponseAminoMsg;
            fromProtoMsg(message: _147.UpcomingGaugesResponseProtoMsg): _147.UpcomingGaugesResponse;
            toProto(message: _147.UpcomingGaugesResponse): Uint8Array;
            toProtoMsg(message: _147.UpcomingGaugesResponse): _147.UpcomingGaugesResponseProtoMsg;
        };
        UpcomingGaugesPerDenomRequest: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _147.UpcomingGaugesPerDenomRequest;
            isSDK(o: any): o is _147.UpcomingGaugesPerDenomRequestSDKType;
            isAmino(o: any): o is _147.UpcomingGaugesPerDenomRequestAmino;
            encode(message: _147.UpcomingGaugesPerDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.UpcomingGaugesPerDenomRequest;
            fromJSON(object: any): _147.UpcomingGaugesPerDenomRequest;
            toJSON(message: _147.UpcomingGaugesPerDenomRequest): unknown;
            fromPartial(object: {
                denom?: string;
                pagination?: {
                    key?: Uint8Array;
                    offset?: bigint;
                    limit?: bigint;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _147.UpcomingGaugesPerDenomRequest;
            fromSDK(object: _147.UpcomingGaugesPerDenomRequestSDKType): _147.UpcomingGaugesPerDenomRequest;
            toSDK(message: _147.UpcomingGaugesPerDenomRequest): _147.UpcomingGaugesPerDenomRequestSDKType;
            fromAmino(object: _147.UpcomingGaugesPerDenomRequestAmino): _147.UpcomingGaugesPerDenomRequest;
            toAmino(message: _147.UpcomingGaugesPerDenomRequest): _147.UpcomingGaugesPerDenomRequestAmino;
            fromAminoMsg(object: _147.UpcomingGaugesPerDenomRequestAminoMsg): _147.UpcomingGaugesPerDenomRequest;
            toAminoMsg(message: _147.UpcomingGaugesPerDenomRequest): _147.UpcomingGaugesPerDenomRequestAminoMsg;
            fromProtoMsg(message: _147.UpcomingGaugesPerDenomRequestProtoMsg): _147.UpcomingGaugesPerDenomRequest;
            toProto(message: _147.UpcomingGaugesPerDenomRequest): Uint8Array;
            toProtoMsg(message: _147.UpcomingGaugesPerDenomRequest): _147.UpcomingGaugesPerDenomRequestProtoMsg;
        };
        UpcomingGaugesPerDenomResponse: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _147.UpcomingGaugesPerDenomResponse;
            isSDK(o: any): o is _147.UpcomingGaugesPerDenomResponseSDKType;
            isAmino(o: any): o is _147.UpcomingGaugesPerDenomResponseAmino;
            encode(message: _147.UpcomingGaugesPerDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.UpcomingGaugesPerDenomResponse;
            fromJSON(object: any): _147.UpcomingGaugesPerDenomResponse;
            toJSON(message: _147.UpcomingGaugesPerDenomResponse): unknown;
            fromPartial(object: {
                upcomingGauges?: {
                    id?: bigint;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _150.LockQueryType;
                        denom?: string;
                        duration?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        timestamp?: Date;
                    };
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    startTime?: Date;
                    numEpochsPaidOver?: bigint;
                    filledEpochs?: bigint;
                    distributedCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
                pagination?: {
                    nextKey?: Uint8Array;
                    total?: bigint;
                };
            }): _147.UpcomingGaugesPerDenomResponse;
            fromSDK(object: _147.UpcomingGaugesPerDenomResponseSDKType): _147.UpcomingGaugesPerDenomResponse;
            toSDK(message: _147.UpcomingGaugesPerDenomResponse): _147.UpcomingGaugesPerDenomResponseSDKType;
            fromAmino(object: _147.UpcomingGaugesPerDenomResponseAmino): _147.UpcomingGaugesPerDenomResponse;
            toAmino(message: _147.UpcomingGaugesPerDenomResponse): _147.UpcomingGaugesPerDenomResponseAmino;
            fromAminoMsg(object: _147.UpcomingGaugesPerDenomResponseAminoMsg): _147.UpcomingGaugesPerDenomResponse;
            toAminoMsg(message: _147.UpcomingGaugesPerDenomResponse): _147.UpcomingGaugesPerDenomResponseAminoMsg;
            fromProtoMsg(message: _147.UpcomingGaugesPerDenomResponseProtoMsg): _147.UpcomingGaugesPerDenomResponse;
            toProto(message: _147.UpcomingGaugesPerDenomResponse): Uint8Array;
            toProtoMsg(message: _147.UpcomingGaugesPerDenomResponse): _147.UpcomingGaugesPerDenomResponseProtoMsg;
        };
        RewardsEstRequest: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _147.RewardsEstRequest;
            isSDK(o: any): o is _147.RewardsEstRequestSDKType;
            isAmino(o: any): o is _147.RewardsEstRequestAmino;
            encode(message: _147.RewardsEstRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.RewardsEstRequest;
            fromJSON(object: any): _147.RewardsEstRequest;
            toJSON(message: _147.RewardsEstRequest): unknown;
            fromPartial(object: {
                owner?: string;
                lockIds?: bigint[];
                endEpoch?: bigint;
            }): _147.RewardsEstRequest;
            fromSDK(object: _147.RewardsEstRequestSDKType): _147.RewardsEstRequest;
            toSDK(message: _147.RewardsEstRequest): _147.RewardsEstRequestSDKType;
            fromAmino(object: _147.RewardsEstRequestAmino): _147.RewardsEstRequest;
            toAmino(message: _147.RewardsEstRequest): _147.RewardsEstRequestAmino;
            fromAminoMsg(object: _147.RewardsEstRequestAminoMsg): _147.RewardsEstRequest;
            toAminoMsg(message: _147.RewardsEstRequest): _147.RewardsEstRequestAminoMsg;
            fromProtoMsg(message: _147.RewardsEstRequestProtoMsg): _147.RewardsEstRequest;
            toProto(message: _147.RewardsEstRequest): Uint8Array;
            toProtoMsg(message: _147.RewardsEstRequest): _147.RewardsEstRequestProtoMsg;
        };
        RewardsEstResponse: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _147.RewardsEstResponse;
            isSDK(o: any): o is _147.RewardsEstResponseSDKType;
            isAmino(o: any): o is _147.RewardsEstResponseAmino;
            encode(message: _147.RewardsEstResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.RewardsEstResponse;
            fromJSON(object: any): _147.RewardsEstResponse;
            toJSON(message: _147.RewardsEstResponse): unknown;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _147.RewardsEstResponse;
            fromSDK(object: _147.RewardsEstResponseSDKType): _147.RewardsEstResponse;
            toSDK(message: _147.RewardsEstResponse): _147.RewardsEstResponseSDKType;
            fromAmino(object: _147.RewardsEstResponseAmino): _147.RewardsEstResponse;
            toAmino(message: _147.RewardsEstResponse): _147.RewardsEstResponseAmino;
            fromAminoMsg(object: _147.RewardsEstResponseAminoMsg): _147.RewardsEstResponse;
            toAminoMsg(message: _147.RewardsEstResponse): _147.RewardsEstResponseAminoMsg;
            fromProtoMsg(message: _147.RewardsEstResponseProtoMsg): _147.RewardsEstResponse;
            toProto(message: _147.RewardsEstResponse): Uint8Array;
            toProtoMsg(message: _147.RewardsEstResponse): _147.RewardsEstResponseProtoMsg;
        };
        QueryLockableDurationsRequest: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _147.QueryLockableDurationsRequest;
            isSDK(o: any): o is _147.QueryLockableDurationsRequestSDKType;
            isAmino(o: any): o is _147.QueryLockableDurationsRequestAmino;
            encode(_: _147.QueryLockableDurationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.QueryLockableDurationsRequest;
            fromJSON(_: any): _147.QueryLockableDurationsRequest;
            toJSON(_: _147.QueryLockableDurationsRequest): unknown;
            fromPartial(_: {}): _147.QueryLockableDurationsRequest;
            fromSDK(_: _147.QueryLockableDurationsRequestSDKType): _147.QueryLockableDurationsRequest;
            toSDK(_: _147.QueryLockableDurationsRequest): _147.QueryLockableDurationsRequestSDKType;
            fromAmino(_: _147.QueryLockableDurationsRequestAmino): _147.QueryLockableDurationsRequest;
            toAmino(_: _147.QueryLockableDurationsRequest): _147.QueryLockableDurationsRequestAmino;
            fromAminoMsg(object: _147.QueryLockableDurationsRequestAminoMsg): _147.QueryLockableDurationsRequest;
            toAminoMsg(message: _147.QueryLockableDurationsRequest): _147.QueryLockableDurationsRequestAminoMsg;
            fromProtoMsg(message: _147.QueryLockableDurationsRequestProtoMsg): _147.QueryLockableDurationsRequest;
            toProto(message: _147.QueryLockableDurationsRequest): Uint8Array;
            toProtoMsg(message: _147.QueryLockableDurationsRequest): _147.QueryLockableDurationsRequestProtoMsg;
        };
        QueryLockableDurationsResponse: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _147.QueryLockableDurationsResponse;
            isSDK(o: any): o is _147.QueryLockableDurationsResponseSDKType;
            isAmino(o: any): o is _147.QueryLockableDurationsResponseAmino;
            encode(message: _147.QueryLockableDurationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _147.QueryLockableDurationsResponse;
            fromJSON(object: any): _147.QueryLockableDurationsResponse;
            toJSON(message: _147.QueryLockableDurationsResponse): unknown;
            fromPartial(object: {
                lockableDurations?: {
                    seconds?: bigint;
                    nanos?: number;
                }[];
            }): _147.QueryLockableDurationsResponse;
            fromSDK(object: _147.QueryLockableDurationsResponseSDKType): _147.QueryLockableDurationsResponse;
            toSDK(message: _147.QueryLockableDurationsResponse): _147.QueryLockableDurationsResponseSDKType;
            fromAmino(object: _147.QueryLockableDurationsResponseAmino): _147.QueryLockableDurationsResponse;
            toAmino(message: _147.QueryLockableDurationsResponse): _147.QueryLockableDurationsResponseAmino;
            fromAminoMsg(object: _147.QueryLockableDurationsResponseAminoMsg): _147.QueryLockableDurationsResponse;
            toAminoMsg(message: _147.QueryLockableDurationsResponse): _147.QueryLockableDurationsResponseAminoMsg;
            fromProtoMsg(message: _147.QueryLockableDurationsResponseProtoMsg): _147.QueryLockableDurationsResponse;
            toProto(message: _147.QueryLockableDurationsResponse): Uint8Array;
            toProtoMsg(message: _147.QueryLockableDurationsResponse): _147.QueryLockableDurationsResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _146.Params;
            isSDK(o: any): o is _146.ParamsSDKType;
            isAmino(o: any): o is _146.ParamsAmino;
            encode(message: _146.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _146.Params;
            fromJSON(object: any): _146.Params;
            toJSON(message: _146.Params): unknown;
            fromPartial(object: {
                distrEpochIdentifier?: string;
            }): _146.Params;
            fromSDK(object: _146.ParamsSDKType): _146.Params;
            toSDK(message: _146.Params): _146.ParamsSDKType;
            fromAmino(object: _146.ParamsAmino): _146.Params;
            toAmino(message: _146.Params): _146.ParamsAmino;
            fromAminoMsg(object: _146.ParamsAminoMsg): _146.Params;
            toAminoMsg(message: _146.Params): _146.ParamsAminoMsg;
            fromProtoMsg(message: _146.ParamsProtoMsg): _146.Params;
            toProto(message: _146.Params): Uint8Array;
            toProtoMsg(message: _146.Params): _146.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _145.GenesisState;
            isSDK(o: any): o is _145.GenesisStateSDKType;
            isAmino(o: any): o is _145.GenesisStateAmino;
            encode(message: _145.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _145.GenesisState;
            fromJSON(object: any): _145.GenesisState;
            toJSON(message: _145.GenesisState): unknown;
            fromPartial(object: {
                params?: {
                    distrEpochIdentifier?: string;
                };
                gauges?: {
                    id?: bigint;
                    isPerpetual?: boolean;
                    distributeTo?: {
                        lockQueryType?: _150.LockQueryType;
                        denom?: string;
                        duration?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        timestamp?: Date;
                    };
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                    startTime?: Date;
                    numEpochsPaidOver?: bigint;
                    filledEpochs?: bigint;
                    distributedCoins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
                lockableDurations?: {
                    seconds?: bigint;
                    nanos?: number;
                }[];
                lastGaugeId?: bigint;
            }): _145.GenesisState;
            fromSDK(object: _145.GenesisStateSDKType): _145.GenesisState;
            toSDK(message: _145.GenesisState): _145.GenesisStateSDKType;
            fromAmino(object: _145.GenesisStateAmino): _145.GenesisState;
            toAmino(message: _145.GenesisState): _145.GenesisStateAmino;
            fromAminoMsg(object: _145.GenesisStateAminoMsg): _145.GenesisState;
            toAminoMsg(message: _145.GenesisState): _145.GenesisStateAminoMsg;
            fromProtoMsg(message: _145.GenesisStateProtoMsg): _145.GenesisState;
            toProto(message: _145.GenesisState): Uint8Array;
            toProtoMsg(message: _145.GenesisState): _145.GenesisStateProtoMsg;
        };
        Gauge: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _144.Gauge;
            isSDK(o: any): o is _144.GaugeSDKType;
            isAmino(o: any): o is _144.GaugeAmino;
            encode(message: _144.Gauge, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.Gauge;
            fromJSON(object: any): _144.Gauge;
            toJSON(message: _144.Gauge): unknown;
            fromPartial(object: {
                id?: bigint;
                isPerpetual?: boolean;
                distributeTo?: {
                    lockQueryType?: _150.LockQueryType;
                    denom?: string;
                    duration?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    timestamp?: Date;
                };
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
                startTime?: Date;
                numEpochsPaidOver?: bigint;
                filledEpochs?: bigint;
                distributedCoins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _144.Gauge;
            fromSDK(object: _144.GaugeSDKType): _144.Gauge;
            toSDK(message: _144.Gauge): _144.GaugeSDKType;
            fromAmino(object: _144.GaugeAmino): _144.Gauge;
            toAmino(message: _144.Gauge): _144.GaugeAmino;
            fromAminoMsg(object: _144.GaugeAminoMsg): _144.Gauge;
            toAminoMsg(message: _144.Gauge): _144.GaugeAminoMsg;
            fromProtoMsg(message: _144.GaugeProtoMsg): _144.Gauge;
            toProto(message: _144.Gauge): Uint8Array;
            toProtoMsg(message: _144.Gauge): _144.GaugeProtoMsg;
        };
        LockableDurationsInfo: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _144.LockableDurationsInfo;
            isSDK(o: any): o is _144.LockableDurationsInfoSDKType;
            isAmino(o: any): o is _144.LockableDurationsInfoAmino;
            encode(message: _144.LockableDurationsInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _144.LockableDurationsInfo;
            fromJSON(object: any): _144.LockableDurationsInfo;
            toJSON(message: _144.LockableDurationsInfo): unknown;
            fromPartial(object: {
                lockableDurations?: {
                    seconds?: bigint;
                    nanos?: number;
                }[];
            }): _144.LockableDurationsInfo;
            fromSDK(object: _144.LockableDurationsInfoSDKType): _144.LockableDurationsInfo;
            toSDK(message: _144.LockableDurationsInfo): _144.LockableDurationsInfoSDKType;
            fromAmino(object: _144.LockableDurationsInfoAmino): _144.LockableDurationsInfo;
            toAmino(message: _144.LockableDurationsInfo): _144.LockableDurationsInfoAmino;
            fromAminoMsg(object: _144.LockableDurationsInfoAminoMsg): _144.LockableDurationsInfo;
            toAminoMsg(message: _144.LockableDurationsInfo): _144.LockableDurationsInfoAminoMsg;
            fromProtoMsg(message: _144.LockableDurationsInfoProtoMsg): _144.LockableDurationsInfo;
            toProto(message: _144.LockableDurationsInfo): Uint8Array;
            toProtoMsg(message: _144.LockableDurationsInfo): _144.LockableDurationsInfoProtoMsg;
        };
    };
    const lockup: {
        MsgClientImpl: typeof _299.MsgClientImpl;
        createClientImpl: (rpc: import("..").TxRpc) => _299.MsgClientImpl;
        QueryClientImpl: typeof _289.QueryClientImpl;
        createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
            useModuleBalance: <TData = _152.ModuleBalanceResponse>({ request, options }: _289.UseModuleBalanceQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
            useModuleLockedAmount: <TData_1 = _152.ModuleLockedAmountResponse>({ request, options }: _289.UseModuleLockedAmountQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
            useAccountUnlockableCoins: <TData_2 = _152.AccountUnlockableCoinsResponse>({ request, options }: _289.UseAccountUnlockableCoinsQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
            useAccountUnlockingCoins: <TData_3 = _152.AccountUnlockingCoinsResponse>({ request, options }: _289.UseAccountUnlockingCoinsQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
            useAccountLockedCoins: <TData_4 = _152.AccountLockedCoinsResponse>({ request, options }: _289.UseAccountLockedCoinsQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
            useAccountLockedPastTime: <TData_5 = _152.AccountLockedPastTimeResponse>({ request, options }: _289.UseAccountLockedPastTimeQuery<TData_5>) => import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
            useAccountLockedPastTimeNotUnlockingOnly: <TData_6 = _152.AccountLockedPastTimeNotUnlockingOnlyResponse>({ request, options }: _289.UseAccountLockedPastTimeNotUnlockingOnlyQuery<TData_6>) => import("@tanstack/react-query").UseQueryResult<TData_6, Error>;
            useAccountUnlockedBeforeTime: <TData_7 = _152.AccountUnlockedBeforeTimeResponse>({ request, options }: _289.UseAccountUnlockedBeforeTimeQuery<TData_7>) => import("@tanstack/react-query").UseQueryResult<TData_7, Error>;
            useAccountLockedPastTimeDenom: <TData_8 = _152.AccountLockedPastTimeDenomResponse>({ request, options }: _289.UseAccountLockedPastTimeDenomQuery<TData_8>) => import("@tanstack/react-query").UseQueryResult<TData_8, Error>;
            useLockedDenom: <TData_9 = _152.LockedDenomResponse>({ request, options }: _289.UseLockedDenomQuery<TData_9>) => import("@tanstack/react-query").UseQueryResult<TData_9, Error>;
            useLockedByID: <TData_10 = _152.LockedResponse>({ request, options }: _289.UseLockedByIDQuery<TData_10>) => import("@tanstack/react-query").UseQueryResult<TData_10, Error>;
            useSyntheticLockupsByLockupID: <TData_11 = _152.SyntheticLockupsByLockupIDResponse>({ request, options }: _289.UseSyntheticLockupsByLockupIDQuery<TData_11>) => import("@tanstack/react-query").UseQueryResult<TData_11, Error>;
            useAccountLockedLongerDuration: <TData_12 = _152.AccountLockedLongerDurationResponse>({ request, options }: _289.UseAccountLockedLongerDurationQuery<TData_12>) => import("@tanstack/react-query").UseQueryResult<TData_12, Error>;
            useAccountLockedDuration: <TData_13 = _152.AccountLockedDurationResponse>({ request, options }: _289.UseAccountLockedDurationQuery<TData_13>) => import("@tanstack/react-query").UseQueryResult<TData_13, Error>;
            useAccountLockedLongerDurationNotUnlockingOnly: <TData_14 = _152.AccountLockedLongerDurationNotUnlockingOnlyResponse>({ request, options }: _289.UseAccountLockedLongerDurationNotUnlockingOnlyQuery<TData_14>) => import("@tanstack/react-query").UseQueryResult<TData_14, Error>;
            useAccountLockedLongerDurationDenom: <TData_15 = _152.AccountLockedLongerDurationDenomResponse>({ request, options }: _289.UseAccountLockedLongerDurationDenomQuery<TData_15>) => import("@tanstack/react-query").UseQueryResult<TData_15, Error>;
            useParams: <TData_16 = _152.QueryParamsResponse>({ request, options }: _289.UseParamsQuery<TData_16>) => import("@tanstack/react-query").UseQueryResult<TData_16, Error>;
        };
        createRpcQueryMobxStores: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
            QueryModuleBalanceStore: {
                new (): {
                    store: import("..").QueryStore<_152.ModuleBalanceRequest, _152.ModuleBalanceResponse>;
                    moduleBalance(request: _152.ModuleBalanceRequest): import("..").MobxResponse<_152.ModuleBalanceResponse>;
                };
            };
            QueryModuleLockedAmountStore: {
                new (): {
                    store: import("..").QueryStore<_152.ModuleLockedAmountRequest, _152.ModuleLockedAmountResponse>;
                    moduleLockedAmount(request: _152.ModuleLockedAmountRequest): import("..").MobxResponse<_152.ModuleLockedAmountResponse>;
                };
            };
            QueryAccountUnlockableCoinsStore: {
                new (): {
                    store: import("..").QueryStore<_152.AccountUnlockableCoinsRequest, _152.AccountUnlockableCoinsResponse>;
                    accountUnlockableCoins(request: _152.AccountUnlockableCoinsRequest): import("..").MobxResponse<_152.AccountUnlockableCoinsResponse>;
                };
            };
            QueryAccountUnlockingCoinsStore: {
                new (): {
                    store: import("..").QueryStore<_152.AccountUnlockingCoinsRequest, _152.AccountUnlockingCoinsResponse>;
                    accountUnlockingCoins(request: _152.AccountUnlockingCoinsRequest): import("..").MobxResponse<_152.AccountUnlockingCoinsResponse>;
                };
            };
            QueryAccountLockedCoinsStore: {
                new (): {
                    store: import("..").QueryStore<_152.AccountLockedCoinsRequest, _152.AccountLockedCoinsResponse>;
                    accountLockedCoins(request: _152.AccountLockedCoinsRequest): import("..").MobxResponse<_152.AccountLockedCoinsResponse>;
                };
            };
            QueryAccountLockedPastTimeStore: {
                new (): {
                    store: import("..").QueryStore<_152.AccountLockedPastTimeRequest, _152.AccountLockedPastTimeResponse>;
                    accountLockedPastTime(request: _152.AccountLockedPastTimeRequest): import("..").MobxResponse<_152.AccountLockedPastTimeResponse>;
                };
            };
            QueryAccountLockedPastTimeNotUnlockingOnlyStore: {
                new (): {
                    store: import("..").QueryStore<_152.AccountLockedPastTimeNotUnlockingOnlyRequest, _152.AccountLockedPastTimeNotUnlockingOnlyResponse>;
                    accountLockedPastTimeNotUnlockingOnly(request: _152.AccountLockedPastTimeNotUnlockingOnlyRequest): import("..").MobxResponse<_152.AccountLockedPastTimeNotUnlockingOnlyResponse>;
                };
            };
            QueryAccountUnlockedBeforeTimeStore: {
                new (): {
                    store: import("..").QueryStore<_152.AccountUnlockedBeforeTimeRequest, _152.AccountUnlockedBeforeTimeResponse>;
                    accountUnlockedBeforeTime(request: _152.AccountUnlockedBeforeTimeRequest): import("..").MobxResponse<_152.AccountUnlockedBeforeTimeResponse>;
                };
            };
            QueryAccountLockedPastTimeDenomStore: {
                new (): {
                    store: import("..").QueryStore<_152.AccountLockedPastTimeDenomRequest, _152.AccountLockedPastTimeDenomResponse>;
                    accountLockedPastTimeDenom(request: _152.AccountLockedPastTimeDenomRequest): import("..").MobxResponse<_152.AccountLockedPastTimeDenomResponse>;
                };
            };
            QueryLockedDenomStore: {
                new (): {
                    store: import("..").QueryStore<_152.LockedDenomRequest, _152.LockedDenomResponse>;
                    lockedDenom(request: _152.LockedDenomRequest): import("..").MobxResponse<_152.LockedDenomResponse>;
                };
            };
            QueryLockedByIDStore: {
                new (): {
                    store: import("..").QueryStore<_152.LockedRequest, _152.LockedResponse>;
                    lockedByID(request: _152.LockedRequest): import("..").MobxResponse<_152.LockedResponse>;
                };
            };
            QuerySyntheticLockupsByLockupIDStore: {
                new (): {
                    store: import("..").QueryStore<_152.SyntheticLockupsByLockupIDRequest, _152.SyntheticLockupsByLockupIDResponse>;
                    syntheticLockupsByLockupID(request: _152.SyntheticLockupsByLockupIDRequest): import("..").MobxResponse<_152.SyntheticLockupsByLockupIDResponse>;
                };
            };
            QueryAccountLockedLongerDurationStore: {
                new (): {
                    store: import("..").QueryStore<_152.AccountLockedLongerDurationRequest, _152.AccountLockedLongerDurationResponse>;
                    accountLockedLongerDuration(request: _152.AccountLockedLongerDurationRequest): import("..").MobxResponse<_152.AccountLockedLongerDurationResponse>;
                };
            };
            QueryAccountLockedDurationStore: {
                new (): {
                    store: import("..").QueryStore<_152.AccountLockedDurationRequest, _152.AccountLockedDurationResponse>;
                    accountLockedDuration(request: _152.AccountLockedDurationRequest): import("..").MobxResponse<_152.AccountLockedDurationResponse>;
                };
            };
            QueryAccountLockedLongerDurationNotUnlockingOnlyStore: {
                new (): {
                    store: import("..").QueryStore<_152.AccountLockedLongerDurationNotUnlockingOnlyRequest, _152.AccountLockedLongerDurationNotUnlockingOnlyResponse>;
                    accountLockedLongerDurationNotUnlockingOnly(request: _152.AccountLockedLongerDurationNotUnlockingOnlyRequest): import("..").MobxResponse<_152.AccountLockedLongerDurationNotUnlockingOnlyResponse>;
                };
            };
            QueryAccountLockedLongerDurationDenomStore: {
                new (): {
                    store: import("..").QueryStore<_152.AccountLockedLongerDurationDenomRequest, _152.AccountLockedLongerDurationDenomResponse>;
                    accountLockedLongerDurationDenom(request: _152.AccountLockedLongerDurationDenomRequest): import("..").MobxResponse<_152.AccountLockedLongerDurationDenomResponse>;
                };
            };
            QueryParamsStore: {
                new (): {
                    store: import("..").QueryStore<_152.QueryParamsRequest, _152.QueryParamsResponse>;
                    params(request: _152.QueryParamsRequest): import("..").MobxResponse<_152.QueryParamsResponse>;
                };
            };
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                lockTokens(value: _153.MsgLockTokens): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                beginUnlockingAll(value: _153.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                beginUnlocking(value: _153.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                extendLockup(value: _153.MsgExtendLockup): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                forceUnlock(value: _153.MsgForceUnlock): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                lockTokens(value: _153.MsgLockTokens): {
                    typeUrl: string;
                    value: _153.MsgLockTokens;
                };
                beginUnlockingAll(value: _153.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _153.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _153.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _153.MsgBeginUnlocking;
                };
                extendLockup(value: _153.MsgExtendLockup): {
                    typeUrl: string;
                    value: _153.MsgExtendLockup;
                };
                forceUnlock(value: _153.MsgForceUnlock): {
                    typeUrl: string;
                    value: _153.MsgForceUnlock;
                };
            };
            toJSON: {
                lockTokens(value: _153.MsgLockTokens): {
                    typeUrl: string;
                    value: unknown;
                };
                beginUnlockingAll(value: _153.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: unknown;
                };
                beginUnlocking(value: _153.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: unknown;
                };
                extendLockup(value: _153.MsgExtendLockup): {
                    typeUrl: string;
                    value: unknown;
                };
                forceUnlock(value: _153.MsgForceUnlock): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                lockTokens(value: any): {
                    typeUrl: string;
                    value: _153.MsgLockTokens;
                };
                beginUnlockingAll(value: any): {
                    typeUrl: string;
                    value: _153.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: any): {
                    typeUrl: string;
                    value: _153.MsgBeginUnlocking;
                };
                extendLockup(value: any): {
                    typeUrl: string;
                    value: _153.MsgExtendLockup;
                };
                forceUnlock(value: any): {
                    typeUrl: string;
                    value: _153.MsgForceUnlock;
                };
            };
            fromPartial: {
                lockTokens(value: _153.MsgLockTokens): {
                    typeUrl: string;
                    value: _153.MsgLockTokens;
                };
                beginUnlockingAll(value: _153.MsgBeginUnlockingAll): {
                    typeUrl: string;
                    value: _153.MsgBeginUnlockingAll;
                };
                beginUnlocking(value: _153.MsgBeginUnlocking): {
                    typeUrl: string;
                    value: _153.MsgBeginUnlocking;
                };
                extendLockup(value: _153.MsgExtendLockup): {
                    typeUrl: string;
                    value: _153.MsgExtendLockup;
                };
                forceUnlock(value: _153.MsgForceUnlock): {
                    typeUrl: string;
                    value: _153.MsgForceUnlock;
                };
            };
        };
        AminoConverter: {
            "/osmosis.lockup.MsgLockTokens": {
                aminoType: string;
                toAmino: (message: _153.MsgLockTokens) => _153.MsgLockTokensAmino;
                fromAmino: (object: _153.MsgLockTokensAmino) => _153.MsgLockTokens;
            };
            "/osmosis.lockup.MsgBeginUnlockingAll": {
                aminoType: string;
                toAmino: (message: _153.MsgBeginUnlockingAll) => _153.MsgBeginUnlockingAllAmino;
                fromAmino: (object: _153.MsgBeginUnlockingAllAmino) => _153.MsgBeginUnlockingAll;
            };
            "/osmosis.lockup.MsgBeginUnlocking": {
                aminoType: string;
                toAmino: (message: _153.MsgBeginUnlocking) => _153.MsgBeginUnlockingAmino;
                fromAmino: (object: _153.MsgBeginUnlockingAmino) => _153.MsgBeginUnlocking;
            };
            "/osmosis.lockup.MsgExtendLockup": {
                aminoType: string;
                toAmino: (message: _153.MsgExtendLockup) => _153.MsgExtendLockupAmino;
                fromAmino: (object: _153.MsgExtendLockupAmino) => _153.MsgExtendLockup;
            };
            "/osmosis.lockup.MsgForceUnlock": {
                aminoType: string;
                toAmino: (message: _153.MsgForceUnlock) => _153.MsgForceUnlockAmino;
                fromAmino: (object: _153.MsgForceUnlockAmino) => _153.MsgForceUnlock;
            };
        };
        MsgLockTokens: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _153.MsgLockTokens;
            isSDK(o: any): o is _153.MsgLockTokensSDKType;
            isAmino(o: any): o is _153.MsgLockTokensAmino;
            encode(message: _153.MsgLockTokens, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.MsgLockTokens;
            fromJSON(object: any): _153.MsgLockTokens;
            toJSON(message: _153.MsgLockTokens): unknown;
            fromPartial(object: {
                owner?: string;
                duration?: {
                    seconds?: bigint;
                    nanos?: number;
                };
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _153.MsgLockTokens;
            fromSDK(object: _153.MsgLockTokensSDKType): _153.MsgLockTokens;
            toSDK(message: _153.MsgLockTokens): _153.MsgLockTokensSDKType;
            fromAmino(object: _153.MsgLockTokensAmino): _153.MsgLockTokens;
            toAmino(message: _153.MsgLockTokens): _153.MsgLockTokensAmino;
            fromAminoMsg(object: _153.MsgLockTokensAminoMsg): _153.MsgLockTokens;
            toAminoMsg(message: _153.MsgLockTokens): _153.MsgLockTokensAminoMsg;
            fromProtoMsg(message: _153.MsgLockTokensProtoMsg): _153.MsgLockTokens;
            toProto(message: _153.MsgLockTokens): Uint8Array;
            toProtoMsg(message: _153.MsgLockTokens): _153.MsgLockTokensProtoMsg;
        };
        MsgLockTokensResponse: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _153.MsgLockTokensResponse;
            isSDK(o: any): o is _153.MsgLockTokensResponseSDKType;
            isAmino(o: any): o is _153.MsgLockTokensResponseAmino;
            encode(message: _153.MsgLockTokensResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.MsgLockTokensResponse;
            fromJSON(object: any): _153.MsgLockTokensResponse;
            toJSON(message: _153.MsgLockTokensResponse): unknown;
            fromPartial(object: {
                ID?: bigint;
            }): _153.MsgLockTokensResponse;
            fromSDK(object: _153.MsgLockTokensResponseSDKType): _153.MsgLockTokensResponse;
            toSDK(message: _153.MsgLockTokensResponse): _153.MsgLockTokensResponseSDKType;
            fromAmino(object: _153.MsgLockTokensResponseAmino): _153.MsgLockTokensResponse;
            toAmino(message: _153.MsgLockTokensResponse): _153.MsgLockTokensResponseAmino;
            fromAminoMsg(object: _153.MsgLockTokensResponseAminoMsg): _153.MsgLockTokensResponse;
            toAminoMsg(message: _153.MsgLockTokensResponse): _153.MsgLockTokensResponseAminoMsg;
            fromProtoMsg(message: _153.MsgLockTokensResponseProtoMsg): _153.MsgLockTokensResponse;
            toProto(message: _153.MsgLockTokensResponse): Uint8Array;
            toProtoMsg(message: _153.MsgLockTokensResponse): _153.MsgLockTokensResponseProtoMsg;
        };
        MsgBeginUnlockingAll: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _153.MsgBeginUnlockingAll;
            isSDK(o: any): o is _153.MsgBeginUnlockingAllSDKType;
            isAmino(o: any): o is _153.MsgBeginUnlockingAllAmino;
            encode(message: _153.MsgBeginUnlockingAll, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.MsgBeginUnlockingAll;
            fromJSON(object: any): _153.MsgBeginUnlockingAll;
            toJSON(message: _153.MsgBeginUnlockingAll): unknown;
            fromPartial(object: {
                owner?: string;
            }): _153.MsgBeginUnlockingAll;
            fromSDK(object: _153.MsgBeginUnlockingAllSDKType): _153.MsgBeginUnlockingAll;
            toSDK(message: _153.MsgBeginUnlockingAll): _153.MsgBeginUnlockingAllSDKType;
            fromAmino(object: _153.MsgBeginUnlockingAllAmino): _153.MsgBeginUnlockingAll;
            toAmino(message: _153.MsgBeginUnlockingAll): _153.MsgBeginUnlockingAllAmino;
            fromAminoMsg(object: _153.MsgBeginUnlockingAllAminoMsg): _153.MsgBeginUnlockingAll;
            toAminoMsg(message: _153.MsgBeginUnlockingAll): _153.MsgBeginUnlockingAllAminoMsg;
            fromProtoMsg(message: _153.MsgBeginUnlockingAllProtoMsg): _153.MsgBeginUnlockingAll;
            toProto(message: _153.MsgBeginUnlockingAll): Uint8Array;
            toProtoMsg(message: _153.MsgBeginUnlockingAll): _153.MsgBeginUnlockingAllProtoMsg;
        };
        MsgBeginUnlockingAllResponse: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _153.MsgBeginUnlockingAllResponse;
            isSDK(o: any): o is _153.MsgBeginUnlockingAllResponseSDKType;
            isAmino(o: any): o is _153.MsgBeginUnlockingAllResponseAmino;
            encode(message: _153.MsgBeginUnlockingAllResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.MsgBeginUnlockingAllResponse;
            fromJSON(object: any): _153.MsgBeginUnlockingAllResponse;
            toJSON(message: _153.MsgBeginUnlockingAllResponse): unknown;
            fromPartial(object: {
                unlocks?: {
                    ID?: bigint;
                    owner?: string;
                    duration?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
            }): _153.MsgBeginUnlockingAllResponse;
            fromSDK(object: _153.MsgBeginUnlockingAllResponseSDKType): _153.MsgBeginUnlockingAllResponse;
            toSDK(message: _153.MsgBeginUnlockingAllResponse): _153.MsgBeginUnlockingAllResponseSDKType;
            fromAmino(object: _153.MsgBeginUnlockingAllResponseAmino): _153.MsgBeginUnlockingAllResponse;
            toAmino(message: _153.MsgBeginUnlockingAllResponse): _153.MsgBeginUnlockingAllResponseAmino;
            fromAminoMsg(object: _153.MsgBeginUnlockingAllResponseAminoMsg): _153.MsgBeginUnlockingAllResponse;
            toAminoMsg(message: _153.MsgBeginUnlockingAllResponse): _153.MsgBeginUnlockingAllResponseAminoMsg;
            fromProtoMsg(message: _153.MsgBeginUnlockingAllResponseProtoMsg): _153.MsgBeginUnlockingAllResponse;
            toProto(message: _153.MsgBeginUnlockingAllResponse): Uint8Array;
            toProtoMsg(message: _153.MsgBeginUnlockingAllResponse): _153.MsgBeginUnlockingAllResponseProtoMsg;
        };
        MsgBeginUnlocking: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _153.MsgBeginUnlocking;
            isSDK(o: any): o is _153.MsgBeginUnlockingSDKType;
            isAmino(o: any): o is _153.MsgBeginUnlockingAmino;
            encode(message: _153.MsgBeginUnlocking, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.MsgBeginUnlocking;
            fromJSON(object: any): _153.MsgBeginUnlocking;
            toJSON(message: _153.MsgBeginUnlocking): unknown;
            fromPartial(object: {
                owner?: string;
                ID?: bigint;
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _153.MsgBeginUnlocking;
            fromSDK(object: _153.MsgBeginUnlockingSDKType): _153.MsgBeginUnlocking;
            toSDK(message: _153.MsgBeginUnlocking): _153.MsgBeginUnlockingSDKType;
            fromAmino(object: _153.MsgBeginUnlockingAmino): _153.MsgBeginUnlocking;
            toAmino(message: _153.MsgBeginUnlocking): _153.MsgBeginUnlockingAmino;
            fromAminoMsg(object: _153.MsgBeginUnlockingAminoMsg): _153.MsgBeginUnlocking;
            toAminoMsg(message: _153.MsgBeginUnlocking): _153.MsgBeginUnlockingAminoMsg;
            fromProtoMsg(message: _153.MsgBeginUnlockingProtoMsg): _153.MsgBeginUnlocking;
            toProto(message: _153.MsgBeginUnlocking): Uint8Array;
            toProtoMsg(message: _153.MsgBeginUnlocking): _153.MsgBeginUnlockingProtoMsg;
        };
        MsgBeginUnlockingResponse: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _153.MsgBeginUnlockingResponse;
            isSDK(o: any): o is _153.MsgBeginUnlockingResponseSDKType;
            isAmino(o: any): o is _153.MsgBeginUnlockingResponseAmino;
            encode(message: _153.MsgBeginUnlockingResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.MsgBeginUnlockingResponse;
            fromJSON(object: any): _153.MsgBeginUnlockingResponse;
            toJSON(message: _153.MsgBeginUnlockingResponse): unknown;
            fromPartial(object: {
                success?: boolean;
            }): _153.MsgBeginUnlockingResponse;
            fromSDK(object: _153.MsgBeginUnlockingResponseSDKType): _153.MsgBeginUnlockingResponse;
            toSDK(message: _153.MsgBeginUnlockingResponse): _153.MsgBeginUnlockingResponseSDKType;
            fromAmino(object: _153.MsgBeginUnlockingResponseAmino): _153.MsgBeginUnlockingResponse;
            toAmino(message: _153.MsgBeginUnlockingResponse): _153.MsgBeginUnlockingResponseAmino;
            fromAminoMsg(object: _153.MsgBeginUnlockingResponseAminoMsg): _153.MsgBeginUnlockingResponse;
            toAminoMsg(message: _153.MsgBeginUnlockingResponse): _153.MsgBeginUnlockingResponseAminoMsg;
            fromProtoMsg(message: _153.MsgBeginUnlockingResponseProtoMsg): _153.MsgBeginUnlockingResponse;
            toProto(message: _153.MsgBeginUnlockingResponse): Uint8Array;
            toProtoMsg(message: _153.MsgBeginUnlockingResponse): _153.MsgBeginUnlockingResponseProtoMsg;
        };
        MsgExtendLockup: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _153.MsgExtendLockup;
            isSDK(o: any): o is _153.MsgExtendLockupSDKType;
            isAmino(o: any): o is _153.MsgExtendLockupAmino;
            encode(message: _153.MsgExtendLockup, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.MsgExtendLockup;
            fromJSON(object: any): _153.MsgExtendLockup;
            toJSON(message: _153.MsgExtendLockup): unknown;
            fromPartial(object: {
                owner?: string;
                ID?: bigint;
                duration?: {
                    seconds?: bigint;
                    nanos?: number;
                };
            }): _153.MsgExtendLockup;
            fromSDK(object: _153.MsgExtendLockupSDKType): _153.MsgExtendLockup;
            toSDK(message: _153.MsgExtendLockup): _153.MsgExtendLockupSDKType;
            fromAmino(object: _153.MsgExtendLockupAmino): _153.MsgExtendLockup;
            toAmino(message: _153.MsgExtendLockup): _153.MsgExtendLockupAmino;
            fromAminoMsg(object: _153.MsgExtendLockupAminoMsg): _153.MsgExtendLockup;
            toAminoMsg(message: _153.MsgExtendLockup): _153.MsgExtendLockupAminoMsg;
            fromProtoMsg(message: _153.MsgExtendLockupProtoMsg): _153.MsgExtendLockup;
            toProto(message: _153.MsgExtendLockup): Uint8Array;
            toProtoMsg(message: _153.MsgExtendLockup): _153.MsgExtendLockupProtoMsg;
        };
        MsgExtendLockupResponse: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _153.MsgExtendLockupResponse;
            isSDK(o: any): o is _153.MsgExtendLockupResponseSDKType;
            isAmino(o: any): o is _153.MsgExtendLockupResponseAmino;
            encode(message: _153.MsgExtendLockupResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.MsgExtendLockupResponse;
            fromJSON(object: any): _153.MsgExtendLockupResponse;
            toJSON(message: _153.MsgExtendLockupResponse): unknown;
            fromPartial(object: {
                success?: boolean;
            }): _153.MsgExtendLockupResponse;
            fromSDK(object: _153.MsgExtendLockupResponseSDKType): _153.MsgExtendLockupResponse;
            toSDK(message: _153.MsgExtendLockupResponse): _153.MsgExtendLockupResponseSDKType;
            fromAmino(object: _153.MsgExtendLockupResponseAmino): _153.MsgExtendLockupResponse;
            toAmino(message: _153.MsgExtendLockupResponse): _153.MsgExtendLockupResponseAmino;
            fromAminoMsg(object: _153.MsgExtendLockupResponseAminoMsg): _153.MsgExtendLockupResponse;
            toAminoMsg(message: _153.MsgExtendLockupResponse): _153.MsgExtendLockupResponseAminoMsg;
            fromProtoMsg(message: _153.MsgExtendLockupResponseProtoMsg): _153.MsgExtendLockupResponse;
            toProto(message: _153.MsgExtendLockupResponse): Uint8Array;
            toProtoMsg(message: _153.MsgExtendLockupResponse): _153.MsgExtendLockupResponseProtoMsg;
        };
        MsgForceUnlock: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _153.MsgForceUnlock;
            isSDK(o: any): o is _153.MsgForceUnlockSDKType;
            isAmino(o: any): o is _153.MsgForceUnlockAmino;
            encode(message: _153.MsgForceUnlock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.MsgForceUnlock;
            fromJSON(object: any): _153.MsgForceUnlock;
            toJSON(message: _153.MsgForceUnlock): unknown;
            fromPartial(object: {
                owner?: string;
                ID?: bigint;
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _153.MsgForceUnlock;
            fromSDK(object: _153.MsgForceUnlockSDKType): _153.MsgForceUnlock;
            toSDK(message: _153.MsgForceUnlock): _153.MsgForceUnlockSDKType;
            fromAmino(object: _153.MsgForceUnlockAmino): _153.MsgForceUnlock;
            toAmino(message: _153.MsgForceUnlock): _153.MsgForceUnlockAmino;
            fromAminoMsg(object: _153.MsgForceUnlockAminoMsg): _153.MsgForceUnlock;
            toAminoMsg(message: _153.MsgForceUnlock): _153.MsgForceUnlockAminoMsg;
            fromProtoMsg(message: _153.MsgForceUnlockProtoMsg): _153.MsgForceUnlock;
            toProto(message: _153.MsgForceUnlock): Uint8Array;
            toProtoMsg(message: _153.MsgForceUnlock): _153.MsgForceUnlockProtoMsg;
        };
        MsgForceUnlockResponse: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _153.MsgForceUnlockResponse;
            isSDK(o: any): o is _153.MsgForceUnlockResponseSDKType;
            isAmino(o: any): o is _153.MsgForceUnlockResponseAmino;
            encode(message: _153.MsgForceUnlockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _153.MsgForceUnlockResponse;
            fromJSON(object: any): _153.MsgForceUnlockResponse;
            toJSON(message: _153.MsgForceUnlockResponse): unknown;
            fromPartial(object: {
                success?: boolean;
            }): _153.MsgForceUnlockResponse;
            fromSDK(object: _153.MsgForceUnlockResponseSDKType): _153.MsgForceUnlockResponse;
            toSDK(message: _153.MsgForceUnlockResponse): _153.MsgForceUnlockResponseSDKType;
            fromAmino(object: _153.MsgForceUnlockResponseAmino): _153.MsgForceUnlockResponse;
            toAmino(message: _153.MsgForceUnlockResponse): _153.MsgForceUnlockResponseAmino;
            fromAminoMsg(object: _153.MsgForceUnlockResponseAminoMsg): _153.MsgForceUnlockResponse;
            toAminoMsg(message: _153.MsgForceUnlockResponse): _153.MsgForceUnlockResponseAminoMsg;
            fromProtoMsg(message: _153.MsgForceUnlockResponseProtoMsg): _153.MsgForceUnlockResponse;
            toProto(message: _153.MsgForceUnlockResponse): Uint8Array;
            toProtoMsg(message: _153.MsgForceUnlockResponse): _153.MsgForceUnlockResponseProtoMsg;
        };
        ModuleBalanceRequest: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _152.ModuleBalanceRequest;
            isSDK(o: any): o is _152.ModuleBalanceRequestSDKType;
            isAmino(o: any): o is _152.ModuleBalanceRequestAmino;
            encode(_: _152.ModuleBalanceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.ModuleBalanceRequest;
            fromJSON(_: any): _152.ModuleBalanceRequest;
            toJSON(_: _152.ModuleBalanceRequest): unknown;
            fromPartial(_: {}): _152.ModuleBalanceRequest;
            fromSDK(_: _152.ModuleBalanceRequestSDKType): _152.ModuleBalanceRequest;
            toSDK(_: _152.ModuleBalanceRequest): _152.ModuleBalanceRequestSDKType;
            fromAmino(_: _152.ModuleBalanceRequestAmino): _152.ModuleBalanceRequest;
            toAmino(_: _152.ModuleBalanceRequest): _152.ModuleBalanceRequestAmino;
            fromAminoMsg(object: _152.ModuleBalanceRequestAminoMsg): _152.ModuleBalanceRequest;
            toAminoMsg(message: _152.ModuleBalanceRequest): _152.ModuleBalanceRequestAminoMsg;
            fromProtoMsg(message: _152.ModuleBalanceRequestProtoMsg): _152.ModuleBalanceRequest;
            toProto(message: _152.ModuleBalanceRequest): Uint8Array;
            toProtoMsg(message: _152.ModuleBalanceRequest): _152.ModuleBalanceRequestProtoMsg;
        };
        ModuleBalanceResponse: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _152.ModuleBalanceResponse;
            isSDK(o: any): o is _152.ModuleBalanceResponseSDKType;
            isAmino(o: any): o is _152.ModuleBalanceResponseAmino;
            encode(message: _152.ModuleBalanceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.ModuleBalanceResponse;
            fromJSON(object: any): _152.ModuleBalanceResponse;
            toJSON(message: _152.ModuleBalanceResponse): unknown;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _152.ModuleBalanceResponse;
            fromSDK(object: _152.ModuleBalanceResponseSDKType): _152.ModuleBalanceResponse;
            toSDK(message: _152.ModuleBalanceResponse): _152.ModuleBalanceResponseSDKType;
            fromAmino(object: _152.ModuleBalanceResponseAmino): _152.ModuleBalanceResponse;
            toAmino(message: _152.ModuleBalanceResponse): _152.ModuleBalanceResponseAmino;
            fromAminoMsg(object: _152.ModuleBalanceResponseAminoMsg): _152.ModuleBalanceResponse;
            toAminoMsg(message: _152.ModuleBalanceResponse): _152.ModuleBalanceResponseAminoMsg;
            fromProtoMsg(message: _152.ModuleBalanceResponseProtoMsg): _152.ModuleBalanceResponse;
            toProto(message: _152.ModuleBalanceResponse): Uint8Array;
            toProtoMsg(message: _152.ModuleBalanceResponse): _152.ModuleBalanceResponseProtoMsg;
        };
        ModuleLockedAmountRequest: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _152.ModuleLockedAmountRequest;
            isSDK(o: any): o is _152.ModuleLockedAmountRequestSDKType;
            isAmino(o: any): o is _152.ModuleLockedAmountRequestAmino;
            encode(_: _152.ModuleLockedAmountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.ModuleLockedAmountRequest;
            fromJSON(_: any): _152.ModuleLockedAmountRequest;
            toJSON(_: _152.ModuleLockedAmountRequest): unknown;
            fromPartial(_: {}): _152.ModuleLockedAmountRequest;
            fromSDK(_: _152.ModuleLockedAmountRequestSDKType): _152.ModuleLockedAmountRequest;
            toSDK(_: _152.ModuleLockedAmountRequest): _152.ModuleLockedAmountRequestSDKType;
            fromAmino(_: _152.ModuleLockedAmountRequestAmino): _152.ModuleLockedAmountRequest;
            toAmino(_: _152.ModuleLockedAmountRequest): _152.ModuleLockedAmountRequestAmino;
            fromAminoMsg(object: _152.ModuleLockedAmountRequestAminoMsg): _152.ModuleLockedAmountRequest;
            toAminoMsg(message: _152.ModuleLockedAmountRequest): _152.ModuleLockedAmountRequestAminoMsg;
            fromProtoMsg(message: _152.ModuleLockedAmountRequestProtoMsg): _152.ModuleLockedAmountRequest;
            toProto(message: _152.ModuleLockedAmountRequest): Uint8Array;
            toProtoMsg(message: _152.ModuleLockedAmountRequest): _152.ModuleLockedAmountRequestProtoMsg;
        };
        ModuleLockedAmountResponse: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _152.ModuleLockedAmountResponse;
            isSDK(o: any): o is _152.ModuleLockedAmountResponseSDKType;
            isAmino(o: any): o is _152.ModuleLockedAmountResponseAmino;
            encode(message: _152.ModuleLockedAmountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.ModuleLockedAmountResponse;
            fromJSON(object: any): _152.ModuleLockedAmountResponse;
            toJSON(message: _152.ModuleLockedAmountResponse): unknown;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _152.ModuleLockedAmountResponse;
            fromSDK(object: _152.ModuleLockedAmountResponseSDKType): _152.ModuleLockedAmountResponse;
            toSDK(message: _152.ModuleLockedAmountResponse): _152.ModuleLockedAmountResponseSDKType;
            fromAmino(object: _152.ModuleLockedAmountResponseAmino): _152.ModuleLockedAmountResponse;
            toAmino(message: _152.ModuleLockedAmountResponse): _152.ModuleLockedAmountResponseAmino;
            fromAminoMsg(object: _152.ModuleLockedAmountResponseAminoMsg): _152.ModuleLockedAmountResponse;
            toAminoMsg(message: _152.ModuleLockedAmountResponse): _152.ModuleLockedAmountResponseAminoMsg;
            fromProtoMsg(message: _152.ModuleLockedAmountResponseProtoMsg): _152.ModuleLockedAmountResponse;
            toProto(message: _152.ModuleLockedAmountResponse): Uint8Array;
            toProtoMsg(message: _152.ModuleLockedAmountResponse): _152.ModuleLockedAmountResponseProtoMsg;
        };
        AccountUnlockableCoinsRequest: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _152.AccountUnlockableCoinsRequest;
            isSDK(o: any): o is _152.AccountUnlockableCoinsRequestSDKType;
            isAmino(o: any): o is _152.AccountUnlockableCoinsRequestAmino;
            encode(message: _152.AccountUnlockableCoinsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.AccountUnlockableCoinsRequest;
            fromJSON(object: any): _152.AccountUnlockableCoinsRequest;
            toJSON(message: _152.AccountUnlockableCoinsRequest): unknown;
            fromPartial(object: {
                owner?: string;
            }): _152.AccountUnlockableCoinsRequest;
            fromSDK(object: _152.AccountUnlockableCoinsRequestSDKType): _152.AccountUnlockableCoinsRequest;
            toSDK(message: _152.AccountUnlockableCoinsRequest): _152.AccountUnlockableCoinsRequestSDKType;
            fromAmino(object: _152.AccountUnlockableCoinsRequestAmino): _152.AccountUnlockableCoinsRequest;
            toAmino(message: _152.AccountUnlockableCoinsRequest): _152.AccountUnlockableCoinsRequestAmino;
            fromAminoMsg(object: _152.AccountUnlockableCoinsRequestAminoMsg): _152.AccountUnlockableCoinsRequest;
            toAminoMsg(message: _152.AccountUnlockableCoinsRequest): _152.AccountUnlockableCoinsRequestAminoMsg;
            fromProtoMsg(message: _152.AccountUnlockableCoinsRequestProtoMsg): _152.AccountUnlockableCoinsRequest;
            toProto(message: _152.AccountUnlockableCoinsRequest): Uint8Array;
            toProtoMsg(message: _152.AccountUnlockableCoinsRequest): _152.AccountUnlockableCoinsRequestProtoMsg;
        };
        AccountUnlockableCoinsResponse: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _152.AccountUnlockableCoinsResponse;
            isSDK(o: any): o is _152.AccountUnlockableCoinsResponseSDKType;
            isAmino(o: any): o is _152.AccountUnlockableCoinsResponseAmino;
            encode(message: _152.AccountUnlockableCoinsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.AccountUnlockableCoinsResponse;
            fromJSON(object: any): _152.AccountUnlockableCoinsResponse;
            toJSON(message: _152.AccountUnlockableCoinsResponse): unknown;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _152.AccountUnlockableCoinsResponse;
            fromSDK(object: _152.AccountUnlockableCoinsResponseSDKType): _152.AccountUnlockableCoinsResponse;
            toSDK(message: _152.AccountUnlockableCoinsResponse): _152.AccountUnlockableCoinsResponseSDKType;
            fromAmino(object: _152.AccountUnlockableCoinsResponseAmino): _152.AccountUnlockableCoinsResponse;
            toAmino(message: _152.AccountUnlockableCoinsResponse): _152.AccountUnlockableCoinsResponseAmino;
            fromAminoMsg(object: _152.AccountUnlockableCoinsResponseAminoMsg): _152.AccountUnlockableCoinsResponse;
            toAminoMsg(message: _152.AccountUnlockableCoinsResponse): _152.AccountUnlockableCoinsResponseAminoMsg;
            fromProtoMsg(message: _152.AccountUnlockableCoinsResponseProtoMsg): _152.AccountUnlockableCoinsResponse;
            toProto(message: _152.AccountUnlockableCoinsResponse): Uint8Array;
            toProtoMsg(message: _152.AccountUnlockableCoinsResponse): _152.AccountUnlockableCoinsResponseProtoMsg;
        };
        AccountUnlockingCoinsRequest: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _152.AccountUnlockingCoinsRequest;
            isSDK(o: any): o is _152.AccountUnlockingCoinsRequestSDKType;
            isAmino(o: any): o is _152.AccountUnlockingCoinsRequestAmino;
            encode(message: _152.AccountUnlockingCoinsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.AccountUnlockingCoinsRequest;
            fromJSON(object: any): _152.AccountUnlockingCoinsRequest;
            toJSON(message: _152.AccountUnlockingCoinsRequest): unknown;
            fromPartial(object: {
                owner?: string;
            }): _152.AccountUnlockingCoinsRequest;
            fromSDK(object: _152.AccountUnlockingCoinsRequestSDKType): _152.AccountUnlockingCoinsRequest;
            toSDK(message: _152.AccountUnlockingCoinsRequest): _152.AccountUnlockingCoinsRequestSDKType;
            fromAmino(object: _152.AccountUnlockingCoinsRequestAmino): _152.AccountUnlockingCoinsRequest;
            toAmino(message: _152.AccountUnlockingCoinsRequest): _152.AccountUnlockingCoinsRequestAmino;
            fromAminoMsg(object: _152.AccountUnlockingCoinsRequestAminoMsg): _152.AccountUnlockingCoinsRequest;
            toAminoMsg(message: _152.AccountUnlockingCoinsRequest): _152.AccountUnlockingCoinsRequestAminoMsg;
            fromProtoMsg(message: _152.AccountUnlockingCoinsRequestProtoMsg): _152.AccountUnlockingCoinsRequest;
            toProto(message: _152.AccountUnlockingCoinsRequest): Uint8Array;
            toProtoMsg(message: _152.AccountUnlockingCoinsRequest): _152.AccountUnlockingCoinsRequestProtoMsg;
        };
        AccountUnlockingCoinsResponse: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _152.AccountUnlockingCoinsResponse;
            isSDK(o: any): o is _152.AccountUnlockingCoinsResponseSDKType;
            isAmino(o: any): o is _152.AccountUnlockingCoinsResponseAmino;
            encode(message: _152.AccountUnlockingCoinsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.AccountUnlockingCoinsResponse;
            fromJSON(object: any): _152.AccountUnlockingCoinsResponse;
            toJSON(message: _152.AccountUnlockingCoinsResponse): unknown;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _152.AccountUnlockingCoinsResponse;
            fromSDK(object: _152.AccountUnlockingCoinsResponseSDKType): _152.AccountUnlockingCoinsResponse;
            toSDK(message: _152.AccountUnlockingCoinsResponse): _152.AccountUnlockingCoinsResponseSDKType;
            fromAmino(object: _152.AccountUnlockingCoinsResponseAmino): _152.AccountUnlockingCoinsResponse;
            toAmino(message: _152.AccountUnlockingCoinsResponse): _152.AccountUnlockingCoinsResponseAmino;
            fromAminoMsg(object: _152.AccountUnlockingCoinsResponseAminoMsg): _152.AccountUnlockingCoinsResponse;
            toAminoMsg(message: _152.AccountUnlockingCoinsResponse): _152.AccountUnlockingCoinsResponseAminoMsg;
            fromProtoMsg(message: _152.AccountUnlockingCoinsResponseProtoMsg): _152.AccountUnlockingCoinsResponse;
            toProto(message: _152.AccountUnlockingCoinsResponse): Uint8Array;
            toProtoMsg(message: _152.AccountUnlockingCoinsResponse): _152.AccountUnlockingCoinsResponseProtoMsg;
        };
        AccountLockedCoinsRequest: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _152.AccountLockedCoinsRequest;
            isSDK(o: any): o is _152.AccountLockedCoinsRequestSDKType;
            isAmino(o: any): o is _152.AccountLockedCoinsRequestAmino;
            encode(message: _152.AccountLockedCoinsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.AccountLockedCoinsRequest;
            fromJSON(object: any): _152.AccountLockedCoinsRequest;
            toJSON(message: _152.AccountLockedCoinsRequest): unknown;
            fromPartial(object: {
                owner?: string;
            }): _152.AccountLockedCoinsRequest;
            fromSDK(object: _152.AccountLockedCoinsRequestSDKType): _152.AccountLockedCoinsRequest;
            toSDK(message: _152.AccountLockedCoinsRequest): _152.AccountLockedCoinsRequestSDKType;
            fromAmino(object: _152.AccountLockedCoinsRequestAmino): _152.AccountLockedCoinsRequest;
            toAmino(message: _152.AccountLockedCoinsRequest): _152.AccountLockedCoinsRequestAmino;
            fromAminoMsg(object: _152.AccountLockedCoinsRequestAminoMsg): _152.AccountLockedCoinsRequest;
            toAminoMsg(message: _152.AccountLockedCoinsRequest): _152.AccountLockedCoinsRequestAminoMsg;
            fromProtoMsg(message: _152.AccountLockedCoinsRequestProtoMsg): _152.AccountLockedCoinsRequest;
            toProto(message: _152.AccountLockedCoinsRequest): Uint8Array;
            toProtoMsg(message: _152.AccountLockedCoinsRequest): _152.AccountLockedCoinsRequestProtoMsg;
        };
        AccountLockedCoinsResponse: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _152.AccountLockedCoinsResponse;
            isSDK(o: any): o is _152.AccountLockedCoinsResponseSDKType;
            isAmino(o: any): o is _152.AccountLockedCoinsResponseAmino;
            encode(message: _152.AccountLockedCoinsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.AccountLockedCoinsResponse;
            fromJSON(object: any): _152.AccountLockedCoinsResponse;
            toJSON(message: _152.AccountLockedCoinsResponse): unknown;
            fromPartial(object: {
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _152.AccountLockedCoinsResponse;
            fromSDK(object: _152.AccountLockedCoinsResponseSDKType): _152.AccountLockedCoinsResponse;
            toSDK(message: _152.AccountLockedCoinsResponse): _152.AccountLockedCoinsResponseSDKType;
            fromAmino(object: _152.AccountLockedCoinsResponseAmino): _152.AccountLockedCoinsResponse;
            toAmino(message: _152.AccountLockedCoinsResponse): _152.AccountLockedCoinsResponseAmino;
            fromAminoMsg(object: _152.AccountLockedCoinsResponseAminoMsg): _152.AccountLockedCoinsResponse;
            toAminoMsg(message: _152.AccountLockedCoinsResponse): _152.AccountLockedCoinsResponseAminoMsg;
            fromProtoMsg(message: _152.AccountLockedCoinsResponseProtoMsg): _152.AccountLockedCoinsResponse;
            toProto(message: _152.AccountLockedCoinsResponse): Uint8Array;
            toProtoMsg(message: _152.AccountLockedCoinsResponse): _152.AccountLockedCoinsResponseProtoMsg;
        };
        AccountLockedPastTimeRequest: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _152.AccountLockedPastTimeRequest;
            isSDK(o: any): o is _152.AccountLockedPastTimeRequestSDKType;
            isAmino(o: any): o is _152.AccountLockedPastTimeRequestAmino;
            encode(message: _152.AccountLockedPastTimeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.AccountLockedPastTimeRequest;
            fromJSON(object: any): _152.AccountLockedPastTimeRequest;
            toJSON(message: _152.AccountLockedPastTimeRequest): unknown;
            fromPartial(object: {
                owner?: string;
                timestamp?: Date;
            }): _152.AccountLockedPastTimeRequest;
            fromSDK(object: _152.AccountLockedPastTimeRequestSDKType): _152.AccountLockedPastTimeRequest;
            toSDK(message: _152.AccountLockedPastTimeRequest): _152.AccountLockedPastTimeRequestSDKType;
            fromAmino(object: _152.AccountLockedPastTimeRequestAmino): _152.AccountLockedPastTimeRequest;
            toAmino(message: _152.AccountLockedPastTimeRequest): _152.AccountLockedPastTimeRequestAmino;
            fromAminoMsg(object: _152.AccountLockedPastTimeRequestAminoMsg): _152.AccountLockedPastTimeRequest;
            toAminoMsg(message: _152.AccountLockedPastTimeRequest): _152.AccountLockedPastTimeRequestAminoMsg;
            fromProtoMsg(message: _152.AccountLockedPastTimeRequestProtoMsg): _152.AccountLockedPastTimeRequest;
            toProto(message: _152.AccountLockedPastTimeRequest): Uint8Array;
            toProtoMsg(message: _152.AccountLockedPastTimeRequest): _152.AccountLockedPastTimeRequestProtoMsg;
        };
        AccountLockedPastTimeResponse: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _152.AccountLockedPastTimeResponse;
            isSDK(o: any): o is _152.AccountLockedPastTimeResponseSDKType;
            isAmino(o: any): o is _152.AccountLockedPastTimeResponseAmino;
            encode(message: _152.AccountLockedPastTimeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.AccountLockedPastTimeResponse;
            fromJSON(object: any): _152.AccountLockedPastTimeResponse;
            toJSON(message: _152.AccountLockedPastTimeResponse): unknown;
            fromPartial(object: {
                locks?: {
                    ID?: bigint;
                    owner?: string;
                    duration?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
            }): _152.AccountLockedPastTimeResponse;
            fromSDK(object: _152.AccountLockedPastTimeResponseSDKType): _152.AccountLockedPastTimeResponse;
            toSDK(message: _152.AccountLockedPastTimeResponse): _152.AccountLockedPastTimeResponseSDKType;
            fromAmino(object: _152.AccountLockedPastTimeResponseAmino): _152.AccountLockedPastTimeResponse;
            toAmino(message: _152.AccountLockedPastTimeResponse): _152.AccountLockedPastTimeResponseAmino;
            fromAminoMsg(object: _152.AccountLockedPastTimeResponseAminoMsg): _152.AccountLockedPastTimeResponse;
            toAminoMsg(message: _152.AccountLockedPastTimeResponse): _152.AccountLockedPastTimeResponseAminoMsg;
            fromProtoMsg(message: _152.AccountLockedPastTimeResponseProtoMsg): _152.AccountLockedPastTimeResponse;
            toProto(message: _152.AccountLockedPastTimeResponse): Uint8Array;
            toProtoMsg(message: _152.AccountLockedPastTimeResponse): _152.AccountLockedPastTimeResponseProtoMsg;
        };
        AccountLockedPastTimeNotUnlockingOnlyRequest: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _152.AccountLockedPastTimeNotUnlockingOnlyRequest;
            isSDK(o: any): o is _152.AccountLockedPastTimeNotUnlockingOnlyRequestSDKType;
            isAmino(o: any): o is _152.AccountLockedPastTimeNotUnlockingOnlyRequestAmino;
            encode(message: _152.AccountLockedPastTimeNotUnlockingOnlyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.AccountLockedPastTimeNotUnlockingOnlyRequest;
            fromJSON(object: any): _152.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toJSON(message: _152.AccountLockedPastTimeNotUnlockingOnlyRequest): unknown;
            fromPartial(object: {
                owner?: string;
                timestamp?: Date;
            }): _152.AccountLockedPastTimeNotUnlockingOnlyRequest;
            fromSDK(object: _152.AccountLockedPastTimeNotUnlockingOnlyRequestSDKType): _152.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toSDK(message: _152.AccountLockedPastTimeNotUnlockingOnlyRequest): _152.AccountLockedPastTimeNotUnlockingOnlyRequestSDKType;
            fromAmino(object: _152.AccountLockedPastTimeNotUnlockingOnlyRequestAmino): _152.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toAmino(message: _152.AccountLockedPastTimeNotUnlockingOnlyRequest): _152.AccountLockedPastTimeNotUnlockingOnlyRequestAmino;
            fromAminoMsg(object: _152.AccountLockedPastTimeNotUnlockingOnlyRequestAminoMsg): _152.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toAminoMsg(message: _152.AccountLockedPastTimeNotUnlockingOnlyRequest): _152.AccountLockedPastTimeNotUnlockingOnlyRequestAminoMsg;
            fromProtoMsg(message: _152.AccountLockedPastTimeNotUnlockingOnlyRequestProtoMsg): _152.AccountLockedPastTimeNotUnlockingOnlyRequest;
            toProto(message: _152.AccountLockedPastTimeNotUnlockingOnlyRequest): Uint8Array;
            toProtoMsg(message: _152.AccountLockedPastTimeNotUnlockingOnlyRequest): _152.AccountLockedPastTimeNotUnlockingOnlyRequestProtoMsg;
        };
        AccountLockedPastTimeNotUnlockingOnlyResponse: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _152.AccountLockedPastTimeNotUnlockingOnlyResponse;
            isSDK(o: any): o is _152.AccountLockedPastTimeNotUnlockingOnlyResponseSDKType;
            isAmino(o: any): o is _152.AccountLockedPastTimeNotUnlockingOnlyResponseAmino;
            encode(message: _152.AccountLockedPastTimeNotUnlockingOnlyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.AccountLockedPastTimeNotUnlockingOnlyResponse;
            fromJSON(object: any): _152.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toJSON(message: _152.AccountLockedPastTimeNotUnlockingOnlyResponse): unknown;
            fromPartial(object: {
                locks?: {
                    ID?: bigint;
                    owner?: string;
                    duration?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
            }): _152.AccountLockedPastTimeNotUnlockingOnlyResponse;
            fromSDK(object: _152.AccountLockedPastTimeNotUnlockingOnlyResponseSDKType): _152.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toSDK(message: _152.AccountLockedPastTimeNotUnlockingOnlyResponse): _152.AccountLockedPastTimeNotUnlockingOnlyResponseSDKType;
            fromAmino(object: _152.AccountLockedPastTimeNotUnlockingOnlyResponseAmino): _152.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toAmino(message: _152.AccountLockedPastTimeNotUnlockingOnlyResponse): _152.AccountLockedPastTimeNotUnlockingOnlyResponseAmino;
            fromAminoMsg(object: _152.AccountLockedPastTimeNotUnlockingOnlyResponseAminoMsg): _152.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toAminoMsg(message: _152.AccountLockedPastTimeNotUnlockingOnlyResponse): _152.AccountLockedPastTimeNotUnlockingOnlyResponseAminoMsg;
            fromProtoMsg(message: _152.AccountLockedPastTimeNotUnlockingOnlyResponseProtoMsg): _152.AccountLockedPastTimeNotUnlockingOnlyResponse;
            toProto(message: _152.AccountLockedPastTimeNotUnlockingOnlyResponse): Uint8Array;
            toProtoMsg(message: _152.AccountLockedPastTimeNotUnlockingOnlyResponse): _152.AccountLockedPastTimeNotUnlockingOnlyResponseProtoMsg;
        };
        AccountUnlockedBeforeTimeRequest: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _152.AccountUnlockedBeforeTimeRequest;
            isSDK(o: any): o is _152.AccountUnlockedBeforeTimeRequestSDKType;
            isAmino(o: any): o is _152.AccountUnlockedBeforeTimeRequestAmino;
            encode(message: _152.AccountUnlockedBeforeTimeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.AccountUnlockedBeforeTimeRequest;
            fromJSON(object: any): _152.AccountUnlockedBeforeTimeRequest;
            toJSON(message: _152.AccountUnlockedBeforeTimeRequest): unknown;
            fromPartial(object: {
                owner?: string;
                timestamp?: Date;
            }): _152.AccountUnlockedBeforeTimeRequest;
            fromSDK(object: _152.AccountUnlockedBeforeTimeRequestSDKType): _152.AccountUnlockedBeforeTimeRequest;
            toSDK(message: _152.AccountUnlockedBeforeTimeRequest): _152.AccountUnlockedBeforeTimeRequestSDKType;
            fromAmino(object: _152.AccountUnlockedBeforeTimeRequestAmino): _152.AccountUnlockedBeforeTimeRequest;
            toAmino(message: _152.AccountUnlockedBeforeTimeRequest): _152.AccountUnlockedBeforeTimeRequestAmino;
            fromAminoMsg(object: _152.AccountUnlockedBeforeTimeRequestAminoMsg): _152.AccountUnlockedBeforeTimeRequest;
            toAminoMsg(message: _152.AccountUnlockedBeforeTimeRequest): _152.AccountUnlockedBeforeTimeRequestAminoMsg;
            fromProtoMsg(message: _152.AccountUnlockedBeforeTimeRequestProtoMsg): _152.AccountUnlockedBeforeTimeRequest;
            toProto(message: _152.AccountUnlockedBeforeTimeRequest): Uint8Array;
            toProtoMsg(message: _152.AccountUnlockedBeforeTimeRequest): _152.AccountUnlockedBeforeTimeRequestProtoMsg;
        };
        AccountUnlockedBeforeTimeResponse: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _152.AccountUnlockedBeforeTimeResponse;
            isSDK(o: any): o is _152.AccountUnlockedBeforeTimeResponseSDKType;
            isAmino(o: any): o is _152.AccountUnlockedBeforeTimeResponseAmino;
            encode(message: _152.AccountUnlockedBeforeTimeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.AccountUnlockedBeforeTimeResponse;
            fromJSON(object: any): _152.AccountUnlockedBeforeTimeResponse;
            toJSON(message: _152.AccountUnlockedBeforeTimeResponse): unknown;
            fromPartial(object: {
                locks?: {
                    ID?: bigint;
                    owner?: string;
                    duration?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
            }): _152.AccountUnlockedBeforeTimeResponse;
            fromSDK(object: _152.AccountUnlockedBeforeTimeResponseSDKType): _152.AccountUnlockedBeforeTimeResponse;
            toSDK(message: _152.AccountUnlockedBeforeTimeResponse): _152.AccountUnlockedBeforeTimeResponseSDKType;
            fromAmino(object: _152.AccountUnlockedBeforeTimeResponseAmino): _152.AccountUnlockedBeforeTimeResponse;
            toAmino(message: _152.AccountUnlockedBeforeTimeResponse): _152.AccountUnlockedBeforeTimeResponseAmino;
            fromAminoMsg(object: _152.AccountUnlockedBeforeTimeResponseAminoMsg): _152.AccountUnlockedBeforeTimeResponse;
            toAminoMsg(message: _152.AccountUnlockedBeforeTimeResponse): _152.AccountUnlockedBeforeTimeResponseAminoMsg;
            fromProtoMsg(message: _152.AccountUnlockedBeforeTimeResponseProtoMsg): _152.AccountUnlockedBeforeTimeResponse;
            toProto(message: _152.AccountUnlockedBeforeTimeResponse): Uint8Array;
            toProtoMsg(message: _152.AccountUnlockedBeforeTimeResponse): _152.AccountUnlockedBeforeTimeResponseProtoMsg;
        };
        AccountLockedPastTimeDenomRequest: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _152.AccountLockedPastTimeDenomRequest;
            isSDK(o: any): o is _152.AccountLockedPastTimeDenomRequestSDKType;
            isAmino(o: any): o is _152.AccountLockedPastTimeDenomRequestAmino;
            encode(message: _152.AccountLockedPastTimeDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.AccountLockedPastTimeDenomRequest;
            fromJSON(object: any): _152.AccountLockedPastTimeDenomRequest;
            toJSON(message: _152.AccountLockedPastTimeDenomRequest): unknown;
            fromPartial(object: {
                owner?: string;
                timestamp?: Date;
                denom?: string;
            }): _152.AccountLockedPastTimeDenomRequest;
            fromSDK(object: _152.AccountLockedPastTimeDenomRequestSDKType): _152.AccountLockedPastTimeDenomRequest;
            toSDK(message: _152.AccountLockedPastTimeDenomRequest): _152.AccountLockedPastTimeDenomRequestSDKType;
            fromAmino(object: _152.AccountLockedPastTimeDenomRequestAmino): _152.AccountLockedPastTimeDenomRequest;
            toAmino(message: _152.AccountLockedPastTimeDenomRequest): _152.AccountLockedPastTimeDenomRequestAmino;
            fromAminoMsg(object: _152.AccountLockedPastTimeDenomRequestAminoMsg): _152.AccountLockedPastTimeDenomRequest;
            toAminoMsg(message: _152.AccountLockedPastTimeDenomRequest): _152.AccountLockedPastTimeDenomRequestAminoMsg;
            fromProtoMsg(message: _152.AccountLockedPastTimeDenomRequestProtoMsg): _152.AccountLockedPastTimeDenomRequest;
            toProto(message: _152.AccountLockedPastTimeDenomRequest): Uint8Array;
            toProtoMsg(message: _152.AccountLockedPastTimeDenomRequest): _152.AccountLockedPastTimeDenomRequestProtoMsg;
        };
        AccountLockedPastTimeDenomResponse: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _152.AccountLockedPastTimeDenomResponse;
            isSDK(o: any): o is _152.AccountLockedPastTimeDenomResponseSDKType;
            isAmino(o: any): o is _152.AccountLockedPastTimeDenomResponseAmino;
            encode(message: _152.AccountLockedPastTimeDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.AccountLockedPastTimeDenomResponse;
            fromJSON(object: any): _152.AccountLockedPastTimeDenomResponse;
            toJSON(message: _152.AccountLockedPastTimeDenomResponse): unknown;
            fromPartial(object: {
                locks?: {
                    ID?: bigint;
                    owner?: string;
                    duration?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
            }): _152.AccountLockedPastTimeDenomResponse;
            fromSDK(object: _152.AccountLockedPastTimeDenomResponseSDKType): _152.AccountLockedPastTimeDenomResponse;
            toSDK(message: _152.AccountLockedPastTimeDenomResponse): _152.AccountLockedPastTimeDenomResponseSDKType;
            fromAmino(object: _152.AccountLockedPastTimeDenomResponseAmino): _152.AccountLockedPastTimeDenomResponse;
            toAmino(message: _152.AccountLockedPastTimeDenomResponse): _152.AccountLockedPastTimeDenomResponseAmino;
            fromAminoMsg(object: _152.AccountLockedPastTimeDenomResponseAminoMsg): _152.AccountLockedPastTimeDenomResponse;
            toAminoMsg(message: _152.AccountLockedPastTimeDenomResponse): _152.AccountLockedPastTimeDenomResponseAminoMsg;
            fromProtoMsg(message: _152.AccountLockedPastTimeDenomResponseProtoMsg): _152.AccountLockedPastTimeDenomResponse;
            toProto(message: _152.AccountLockedPastTimeDenomResponse): Uint8Array;
            toProtoMsg(message: _152.AccountLockedPastTimeDenomResponse): _152.AccountLockedPastTimeDenomResponseProtoMsg;
        };
        LockedDenomRequest: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _152.LockedDenomRequest;
            isSDK(o: any): o is _152.LockedDenomRequestSDKType;
            isAmino(o: any): o is _152.LockedDenomRequestAmino;
            encode(message: _152.LockedDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.LockedDenomRequest;
            fromJSON(object: any): _152.LockedDenomRequest;
            toJSON(message: _152.LockedDenomRequest): unknown;
            fromPartial(object: {
                denom?: string;
                duration?: {
                    seconds?: bigint;
                    nanos?: number;
                };
            }): _152.LockedDenomRequest;
            fromSDK(object: _152.LockedDenomRequestSDKType): _152.LockedDenomRequest;
            toSDK(message: _152.LockedDenomRequest): _152.LockedDenomRequestSDKType;
            fromAmino(object: _152.LockedDenomRequestAmino): _152.LockedDenomRequest;
            toAmino(message: _152.LockedDenomRequest): _152.LockedDenomRequestAmino;
            fromAminoMsg(object: _152.LockedDenomRequestAminoMsg): _152.LockedDenomRequest;
            toAminoMsg(message: _152.LockedDenomRequest): _152.LockedDenomRequestAminoMsg;
            fromProtoMsg(message: _152.LockedDenomRequestProtoMsg): _152.LockedDenomRequest;
            toProto(message: _152.LockedDenomRequest): Uint8Array;
            toProtoMsg(message: _152.LockedDenomRequest): _152.LockedDenomRequestProtoMsg;
        };
        LockedDenomResponse: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _152.LockedDenomResponse;
            isSDK(o: any): o is _152.LockedDenomResponseSDKType;
            isAmino(o: any): o is _152.LockedDenomResponseAmino;
            encode(message: _152.LockedDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.LockedDenomResponse;
            fromJSON(object: any): _152.LockedDenomResponse;
            toJSON(message: _152.LockedDenomResponse): unknown;
            fromPartial(object: {
                amount?: string;
            }): _152.LockedDenomResponse;
            fromSDK(object: _152.LockedDenomResponseSDKType): _152.LockedDenomResponse;
            toSDK(message: _152.LockedDenomResponse): _152.LockedDenomResponseSDKType;
            fromAmino(object: _152.LockedDenomResponseAmino): _152.LockedDenomResponse;
            toAmino(message: _152.LockedDenomResponse): _152.LockedDenomResponseAmino;
            fromAminoMsg(object: _152.LockedDenomResponseAminoMsg): _152.LockedDenomResponse;
            toAminoMsg(message: _152.LockedDenomResponse): _152.LockedDenomResponseAminoMsg;
            fromProtoMsg(message: _152.LockedDenomResponseProtoMsg): _152.LockedDenomResponse;
            toProto(message: _152.LockedDenomResponse): Uint8Array;
            toProtoMsg(message: _152.LockedDenomResponse): _152.LockedDenomResponseProtoMsg;
        };
        LockedRequest: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _152.LockedRequest;
            isSDK(o: any): o is _152.LockedRequestSDKType;
            isAmino(o: any): o is _152.LockedRequestAmino;
            encode(message: _152.LockedRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.LockedRequest;
            fromJSON(object: any): _152.LockedRequest;
            toJSON(message: _152.LockedRequest): unknown;
            fromPartial(object: {
                lockId?: bigint;
            }): _152.LockedRequest;
            fromSDK(object: _152.LockedRequestSDKType): _152.LockedRequest;
            toSDK(message: _152.LockedRequest): _152.LockedRequestSDKType;
            fromAmino(object: _152.LockedRequestAmino): _152.LockedRequest;
            toAmino(message: _152.LockedRequest): _152.LockedRequestAmino;
            fromAminoMsg(object: _152.LockedRequestAminoMsg): _152.LockedRequest;
            toAminoMsg(message: _152.LockedRequest): _152.LockedRequestAminoMsg;
            fromProtoMsg(message: _152.LockedRequestProtoMsg): _152.LockedRequest;
            toProto(message: _152.LockedRequest): Uint8Array;
            toProtoMsg(message: _152.LockedRequest): _152.LockedRequestProtoMsg;
        };
        LockedResponse: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _152.LockedResponse;
            isSDK(o: any): o is _152.LockedResponseSDKType;
            isAmino(o: any): o is _152.LockedResponseAmino;
            encode(message: _152.LockedResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.LockedResponse;
            fromJSON(object: any): _152.LockedResponse;
            toJSON(message: _152.LockedResponse): unknown;
            fromPartial(object: {
                lock?: {
                    ID?: bigint;
                    owner?: string;
                    duration?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                };
            }): _152.LockedResponse;
            fromSDK(object: _152.LockedResponseSDKType): _152.LockedResponse;
            toSDK(message: _152.LockedResponse): _152.LockedResponseSDKType;
            fromAmino(object: _152.LockedResponseAmino): _152.LockedResponse;
            toAmino(message: _152.LockedResponse): _152.LockedResponseAmino;
            fromAminoMsg(object: _152.LockedResponseAminoMsg): _152.LockedResponse;
            toAminoMsg(message: _152.LockedResponse): _152.LockedResponseAminoMsg;
            fromProtoMsg(message: _152.LockedResponseProtoMsg): _152.LockedResponse;
            toProto(message: _152.LockedResponse): Uint8Array;
            toProtoMsg(message: _152.LockedResponse): _152.LockedResponseProtoMsg;
        };
        SyntheticLockupsByLockupIDRequest: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _152.SyntheticLockupsByLockupIDRequest;
            isSDK(o: any): o is _152.SyntheticLockupsByLockupIDRequestSDKType;
            isAmino(o: any): o is _152.SyntheticLockupsByLockupIDRequestAmino;
            encode(message: _152.SyntheticLockupsByLockupIDRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.SyntheticLockupsByLockupIDRequest;
            fromJSON(object: any): _152.SyntheticLockupsByLockupIDRequest;
            toJSON(message: _152.SyntheticLockupsByLockupIDRequest): unknown;
            fromPartial(object: {
                lockId?: bigint;
            }): _152.SyntheticLockupsByLockupIDRequest;
            fromSDK(object: _152.SyntheticLockupsByLockupIDRequestSDKType): _152.SyntheticLockupsByLockupIDRequest;
            toSDK(message: _152.SyntheticLockupsByLockupIDRequest): _152.SyntheticLockupsByLockupIDRequestSDKType;
            fromAmino(object: _152.SyntheticLockupsByLockupIDRequestAmino): _152.SyntheticLockupsByLockupIDRequest;
            toAmino(message: _152.SyntheticLockupsByLockupIDRequest): _152.SyntheticLockupsByLockupIDRequestAmino;
            fromAminoMsg(object: _152.SyntheticLockupsByLockupIDRequestAminoMsg): _152.SyntheticLockupsByLockupIDRequest;
            toAminoMsg(message: _152.SyntheticLockupsByLockupIDRequest): _152.SyntheticLockupsByLockupIDRequestAminoMsg;
            fromProtoMsg(message: _152.SyntheticLockupsByLockupIDRequestProtoMsg): _152.SyntheticLockupsByLockupIDRequest;
            toProto(message: _152.SyntheticLockupsByLockupIDRequest): Uint8Array;
            toProtoMsg(message: _152.SyntheticLockupsByLockupIDRequest): _152.SyntheticLockupsByLockupIDRequestProtoMsg;
        };
        SyntheticLockupsByLockupIDResponse: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _152.SyntheticLockupsByLockupIDResponse;
            isSDK(o: any): o is _152.SyntheticLockupsByLockupIDResponseSDKType;
            isAmino(o: any): o is _152.SyntheticLockupsByLockupIDResponseAmino;
            encode(message: _152.SyntheticLockupsByLockupIDResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.SyntheticLockupsByLockupIDResponse;
            fromJSON(object: any): _152.SyntheticLockupsByLockupIDResponse;
            toJSON(message: _152.SyntheticLockupsByLockupIDResponse): unknown;
            fromPartial(object: {
                syntheticLocks?: {
                    underlyingLockId?: bigint;
                    synthDenom?: string;
                    endTime?: Date;
                    duration?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                }[];
            }): _152.SyntheticLockupsByLockupIDResponse;
            fromSDK(object: _152.SyntheticLockupsByLockupIDResponseSDKType): _152.SyntheticLockupsByLockupIDResponse;
            toSDK(message: _152.SyntheticLockupsByLockupIDResponse): _152.SyntheticLockupsByLockupIDResponseSDKType;
            fromAmino(object: _152.SyntheticLockupsByLockupIDResponseAmino): _152.SyntheticLockupsByLockupIDResponse;
            toAmino(message: _152.SyntheticLockupsByLockupIDResponse): _152.SyntheticLockupsByLockupIDResponseAmino;
            fromAminoMsg(object: _152.SyntheticLockupsByLockupIDResponseAminoMsg): _152.SyntheticLockupsByLockupIDResponse;
            toAminoMsg(message: _152.SyntheticLockupsByLockupIDResponse): _152.SyntheticLockupsByLockupIDResponseAminoMsg;
            fromProtoMsg(message: _152.SyntheticLockupsByLockupIDResponseProtoMsg): _152.SyntheticLockupsByLockupIDResponse;
            toProto(message: _152.SyntheticLockupsByLockupIDResponse): Uint8Array;
            toProtoMsg(message: _152.SyntheticLockupsByLockupIDResponse): _152.SyntheticLockupsByLockupIDResponseProtoMsg;
        };
        AccountLockedLongerDurationRequest: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _152.AccountLockedLongerDurationRequest;
            isSDK(o: any): o is _152.AccountLockedLongerDurationRequestSDKType;
            isAmino(o: any): o is _152.AccountLockedLongerDurationRequestAmino;
            encode(message: _152.AccountLockedLongerDurationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.AccountLockedLongerDurationRequest;
            fromJSON(object: any): _152.AccountLockedLongerDurationRequest;
            toJSON(message: _152.AccountLockedLongerDurationRequest): unknown;
            fromPartial(object: {
                owner?: string;
                duration?: {
                    seconds?: bigint;
                    nanos?: number;
                };
            }): _152.AccountLockedLongerDurationRequest;
            fromSDK(object: _152.AccountLockedLongerDurationRequestSDKType): _152.AccountLockedLongerDurationRequest;
            toSDK(message: _152.AccountLockedLongerDurationRequest): _152.AccountLockedLongerDurationRequestSDKType;
            fromAmino(object: _152.AccountLockedLongerDurationRequestAmino): _152.AccountLockedLongerDurationRequest;
            toAmino(message: _152.AccountLockedLongerDurationRequest): _152.AccountLockedLongerDurationRequestAmino;
            fromAminoMsg(object: _152.AccountLockedLongerDurationRequestAminoMsg): _152.AccountLockedLongerDurationRequest;
            toAminoMsg(message: _152.AccountLockedLongerDurationRequest): _152.AccountLockedLongerDurationRequestAminoMsg;
            fromProtoMsg(message: _152.AccountLockedLongerDurationRequestProtoMsg): _152.AccountLockedLongerDurationRequest;
            toProto(message: _152.AccountLockedLongerDurationRequest): Uint8Array;
            toProtoMsg(message: _152.AccountLockedLongerDurationRequest): _152.AccountLockedLongerDurationRequestProtoMsg;
        };
        AccountLockedLongerDurationResponse: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _152.AccountLockedLongerDurationResponse;
            isSDK(o: any): o is _152.AccountLockedLongerDurationResponseSDKType;
            isAmino(o: any): o is _152.AccountLockedLongerDurationResponseAmino;
            encode(message: _152.AccountLockedLongerDurationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.AccountLockedLongerDurationResponse;
            fromJSON(object: any): _152.AccountLockedLongerDurationResponse;
            toJSON(message: _152.AccountLockedLongerDurationResponse): unknown;
            fromPartial(object: {
                locks?: {
                    ID?: bigint;
                    owner?: string;
                    duration?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
            }): _152.AccountLockedLongerDurationResponse;
            fromSDK(object: _152.AccountLockedLongerDurationResponseSDKType): _152.AccountLockedLongerDurationResponse;
            toSDK(message: _152.AccountLockedLongerDurationResponse): _152.AccountLockedLongerDurationResponseSDKType;
            fromAmino(object: _152.AccountLockedLongerDurationResponseAmino): _152.AccountLockedLongerDurationResponse;
            toAmino(message: _152.AccountLockedLongerDurationResponse): _152.AccountLockedLongerDurationResponseAmino;
            fromAminoMsg(object: _152.AccountLockedLongerDurationResponseAminoMsg): _152.AccountLockedLongerDurationResponse;
            toAminoMsg(message: _152.AccountLockedLongerDurationResponse): _152.AccountLockedLongerDurationResponseAminoMsg;
            fromProtoMsg(message: _152.AccountLockedLongerDurationResponseProtoMsg): _152.AccountLockedLongerDurationResponse;
            toProto(message: _152.AccountLockedLongerDurationResponse): Uint8Array;
            toProtoMsg(message: _152.AccountLockedLongerDurationResponse): _152.AccountLockedLongerDurationResponseProtoMsg;
        };
        AccountLockedDurationRequest: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _152.AccountLockedDurationRequest;
            isSDK(o: any): o is _152.AccountLockedDurationRequestSDKType;
            isAmino(o: any): o is _152.AccountLockedDurationRequestAmino;
            encode(message: _152.AccountLockedDurationRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.AccountLockedDurationRequest;
            fromJSON(object: any): _152.AccountLockedDurationRequest;
            toJSON(message: _152.AccountLockedDurationRequest): unknown;
            fromPartial(object: {
                owner?: string;
                duration?: {
                    seconds?: bigint;
                    nanos?: number;
                };
            }): _152.AccountLockedDurationRequest;
            fromSDK(object: _152.AccountLockedDurationRequestSDKType): _152.AccountLockedDurationRequest;
            toSDK(message: _152.AccountLockedDurationRequest): _152.AccountLockedDurationRequestSDKType;
            fromAmino(object: _152.AccountLockedDurationRequestAmino): _152.AccountLockedDurationRequest;
            toAmino(message: _152.AccountLockedDurationRequest): _152.AccountLockedDurationRequestAmino;
            fromAminoMsg(object: _152.AccountLockedDurationRequestAminoMsg): _152.AccountLockedDurationRequest;
            toAminoMsg(message: _152.AccountLockedDurationRequest): _152.AccountLockedDurationRequestAminoMsg;
            fromProtoMsg(message: _152.AccountLockedDurationRequestProtoMsg): _152.AccountLockedDurationRequest;
            toProto(message: _152.AccountLockedDurationRequest): Uint8Array;
            toProtoMsg(message: _152.AccountLockedDurationRequest): _152.AccountLockedDurationRequestProtoMsg;
        };
        AccountLockedDurationResponse: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _152.AccountLockedDurationResponse;
            isSDK(o: any): o is _152.AccountLockedDurationResponseSDKType;
            isAmino(o: any): o is _152.AccountLockedDurationResponseAmino;
            encode(message: _152.AccountLockedDurationResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.AccountLockedDurationResponse;
            fromJSON(object: any): _152.AccountLockedDurationResponse;
            toJSON(message: _152.AccountLockedDurationResponse): unknown;
            fromPartial(object: {
                locks?: {
                    ID?: bigint;
                    owner?: string;
                    duration?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
            }): _152.AccountLockedDurationResponse;
            fromSDK(object: _152.AccountLockedDurationResponseSDKType): _152.AccountLockedDurationResponse;
            toSDK(message: _152.AccountLockedDurationResponse): _152.AccountLockedDurationResponseSDKType;
            fromAmino(object: _152.AccountLockedDurationResponseAmino): _152.AccountLockedDurationResponse;
            toAmino(message: _152.AccountLockedDurationResponse): _152.AccountLockedDurationResponseAmino;
            fromAminoMsg(object: _152.AccountLockedDurationResponseAminoMsg): _152.AccountLockedDurationResponse;
            toAminoMsg(message: _152.AccountLockedDurationResponse): _152.AccountLockedDurationResponseAminoMsg;
            fromProtoMsg(message: _152.AccountLockedDurationResponseProtoMsg): _152.AccountLockedDurationResponse;
            toProto(message: _152.AccountLockedDurationResponse): Uint8Array;
            toProtoMsg(message: _152.AccountLockedDurationResponse): _152.AccountLockedDurationResponseProtoMsg;
        };
        AccountLockedLongerDurationNotUnlockingOnlyRequest: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _152.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            isSDK(o: any): o is _152.AccountLockedLongerDurationNotUnlockingOnlyRequestSDKType;
            isAmino(o: any): o is _152.AccountLockedLongerDurationNotUnlockingOnlyRequestAmino;
            encode(message: _152.AccountLockedLongerDurationNotUnlockingOnlyRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            fromJSON(object: any): _152.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toJSON(message: _152.AccountLockedLongerDurationNotUnlockingOnlyRequest): unknown;
            fromPartial(object: {
                owner?: string;
                duration?: {
                    seconds?: bigint;
                    nanos?: number;
                };
            }): _152.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            fromSDK(object: _152.AccountLockedLongerDurationNotUnlockingOnlyRequestSDKType): _152.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toSDK(message: _152.AccountLockedLongerDurationNotUnlockingOnlyRequest): _152.AccountLockedLongerDurationNotUnlockingOnlyRequestSDKType;
            fromAmino(object: _152.AccountLockedLongerDurationNotUnlockingOnlyRequestAmino): _152.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toAmino(message: _152.AccountLockedLongerDurationNotUnlockingOnlyRequest): _152.AccountLockedLongerDurationNotUnlockingOnlyRequestAmino;
            fromAminoMsg(object: _152.AccountLockedLongerDurationNotUnlockingOnlyRequestAminoMsg): _152.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toAminoMsg(message: _152.AccountLockedLongerDurationNotUnlockingOnlyRequest): _152.AccountLockedLongerDurationNotUnlockingOnlyRequestAminoMsg;
            fromProtoMsg(message: _152.AccountLockedLongerDurationNotUnlockingOnlyRequestProtoMsg): _152.AccountLockedLongerDurationNotUnlockingOnlyRequest;
            toProto(message: _152.AccountLockedLongerDurationNotUnlockingOnlyRequest): Uint8Array;
            toProtoMsg(message: _152.AccountLockedLongerDurationNotUnlockingOnlyRequest): _152.AccountLockedLongerDurationNotUnlockingOnlyRequestProtoMsg;
        };
        AccountLockedLongerDurationNotUnlockingOnlyResponse: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _152.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            isSDK(o: any): o is _152.AccountLockedLongerDurationNotUnlockingOnlyResponseSDKType;
            isAmino(o: any): o is _152.AccountLockedLongerDurationNotUnlockingOnlyResponseAmino;
            encode(message: _152.AccountLockedLongerDurationNotUnlockingOnlyResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            fromJSON(object: any): _152.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toJSON(message: _152.AccountLockedLongerDurationNotUnlockingOnlyResponse): unknown;
            fromPartial(object: {
                locks?: {
                    ID?: bigint;
                    owner?: string;
                    duration?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
            }): _152.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            fromSDK(object: _152.AccountLockedLongerDurationNotUnlockingOnlyResponseSDKType): _152.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toSDK(message: _152.AccountLockedLongerDurationNotUnlockingOnlyResponse): _152.AccountLockedLongerDurationNotUnlockingOnlyResponseSDKType;
            fromAmino(object: _152.AccountLockedLongerDurationNotUnlockingOnlyResponseAmino): _152.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toAmino(message: _152.AccountLockedLongerDurationNotUnlockingOnlyResponse): _152.AccountLockedLongerDurationNotUnlockingOnlyResponseAmino;
            fromAminoMsg(object: _152.AccountLockedLongerDurationNotUnlockingOnlyResponseAminoMsg): _152.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toAminoMsg(message: _152.AccountLockedLongerDurationNotUnlockingOnlyResponse): _152.AccountLockedLongerDurationNotUnlockingOnlyResponseAminoMsg;
            fromProtoMsg(message: _152.AccountLockedLongerDurationNotUnlockingOnlyResponseProtoMsg): _152.AccountLockedLongerDurationNotUnlockingOnlyResponse;
            toProto(message: _152.AccountLockedLongerDurationNotUnlockingOnlyResponse): Uint8Array;
            toProtoMsg(message: _152.AccountLockedLongerDurationNotUnlockingOnlyResponse): _152.AccountLockedLongerDurationNotUnlockingOnlyResponseProtoMsg;
        };
        AccountLockedLongerDurationDenomRequest: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _152.AccountLockedLongerDurationDenomRequest;
            isSDK(o: any): o is _152.AccountLockedLongerDurationDenomRequestSDKType;
            isAmino(o: any): o is _152.AccountLockedLongerDurationDenomRequestAmino;
            encode(message: _152.AccountLockedLongerDurationDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.AccountLockedLongerDurationDenomRequest;
            fromJSON(object: any): _152.AccountLockedLongerDurationDenomRequest;
            toJSON(message: _152.AccountLockedLongerDurationDenomRequest): unknown;
            fromPartial(object: {
                owner?: string;
                duration?: {
                    seconds?: bigint;
                    nanos?: number;
                };
                denom?: string;
            }): _152.AccountLockedLongerDurationDenomRequest;
            fromSDK(object: _152.AccountLockedLongerDurationDenomRequestSDKType): _152.AccountLockedLongerDurationDenomRequest;
            toSDK(message: _152.AccountLockedLongerDurationDenomRequest): _152.AccountLockedLongerDurationDenomRequestSDKType;
            fromAmino(object: _152.AccountLockedLongerDurationDenomRequestAmino): _152.AccountLockedLongerDurationDenomRequest;
            toAmino(message: _152.AccountLockedLongerDurationDenomRequest): _152.AccountLockedLongerDurationDenomRequestAmino;
            fromAminoMsg(object: _152.AccountLockedLongerDurationDenomRequestAminoMsg): _152.AccountLockedLongerDurationDenomRequest;
            toAminoMsg(message: _152.AccountLockedLongerDurationDenomRequest): _152.AccountLockedLongerDurationDenomRequestAminoMsg;
            fromProtoMsg(message: _152.AccountLockedLongerDurationDenomRequestProtoMsg): _152.AccountLockedLongerDurationDenomRequest;
            toProto(message: _152.AccountLockedLongerDurationDenomRequest): Uint8Array;
            toProtoMsg(message: _152.AccountLockedLongerDurationDenomRequest): _152.AccountLockedLongerDurationDenomRequestProtoMsg;
        };
        AccountLockedLongerDurationDenomResponse: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _152.AccountLockedLongerDurationDenomResponse;
            isSDK(o: any): o is _152.AccountLockedLongerDurationDenomResponseSDKType;
            isAmino(o: any): o is _152.AccountLockedLongerDurationDenomResponseAmino;
            encode(message: _152.AccountLockedLongerDurationDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.AccountLockedLongerDurationDenomResponse;
            fromJSON(object: any): _152.AccountLockedLongerDurationDenomResponse;
            toJSON(message: _152.AccountLockedLongerDurationDenomResponse): unknown;
            fromPartial(object: {
                locks?: {
                    ID?: bigint;
                    owner?: string;
                    duration?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
            }): _152.AccountLockedLongerDurationDenomResponse;
            fromSDK(object: _152.AccountLockedLongerDurationDenomResponseSDKType): _152.AccountLockedLongerDurationDenomResponse;
            toSDK(message: _152.AccountLockedLongerDurationDenomResponse): _152.AccountLockedLongerDurationDenomResponseSDKType;
            fromAmino(object: _152.AccountLockedLongerDurationDenomResponseAmino): _152.AccountLockedLongerDurationDenomResponse;
            toAmino(message: _152.AccountLockedLongerDurationDenomResponse): _152.AccountLockedLongerDurationDenomResponseAmino;
            fromAminoMsg(object: _152.AccountLockedLongerDurationDenomResponseAminoMsg): _152.AccountLockedLongerDurationDenomResponse;
            toAminoMsg(message: _152.AccountLockedLongerDurationDenomResponse): _152.AccountLockedLongerDurationDenomResponseAminoMsg;
            fromProtoMsg(message: _152.AccountLockedLongerDurationDenomResponseProtoMsg): _152.AccountLockedLongerDurationDenomResponse;
            toProto(message: _152.AccountLockedLongerDurationDenomResponse): Uint8Array;
            toProtoMsg(message: _152.AccountLockedLongerDurationDenomResponse): _152.AccountLockedLongerDurationDenomResponseProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _152.QueryParamsRequest;
            isSDK(o: any): o is _152.QueryParamsRequestSDKType;
            isAmino(o: any): o is _152.QueryParamsRequestAmino;
            encode(_: _152.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.QueryParamsRequest;
            fromJSON(_: any): _152.QueryParamsRequest;
            toJSON(_: _152.QueryParamsRequest): unknown;
            fromPartial(_: {}): _152.QueryParamsRequest;
            fromSDK(_: _152.QueryParamsRequestSDKType): _152.QueryParamsRequest;
            toSDK(_: _152.QueryParamsRequest): _152.QueryParamsRequestSDKType;
            fromAmino(_: _152.QueryParamsRequestAmino): _152.QueryParamsRequest;
            toAmino(_: _152.QueryParamsRequest): _152.QueryParamsRequestAmino;
            fromAminoMsg(object: _152.QueryParamsRequestAminoMsg): _152.QueryParamsRequest;
            toAminoMsg(message: _152.QueryParamsRequest): _152.QueryParamsRequestAminoMsg;
            fromProtoMsg(message: _152.QueryParamsRequestProtoMsg): _152.QueryParamsRequest;
            toProto(message: _152.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _152.QueryParamsRequest): _152.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _152.QueryParamsResponse;
            isSDK(o: any): o is _152.QueryParamsResponseSDKType;
            isAmino(o: any): o is _152.QueryParamsResponseAmino;
            encode(message: _152.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _152.QueryParamsResponse;
            fromJSON(object: any): _152.QueryParamsResponse;
            toJSON(message: _152.QueryParamsResponse): unknown;
            fromPartial(object: {
                params?: {
                    forceUnlockAllowedAddresses?: string[];
                };
            }): _152.QueryParamsResponse;
            fromSDK(object: _152.QueryParamsResponseSDKType): _152.QueryParamsResponse;
            toSDK(message: _152.QueryParamsResponse): _152.QueryParamsResponseSDKType;
            fromAmino(object: _152.QueryParamsResponseAmino): _152.QueryParamsResponse;
            toAmino(message: _152.QueryParamsResponse): _152.QueryParamsResponseAmino;
            fromAminoMsg(object: _152.QueryParamsResponseAminoMsg): _152.QueryParamsResponse;
            toAminoMsg(message: _152.QueryParamsResponse): _152.QueryParamsResponseAminoMsg;
            fromProtoMsg(message: _152.QueryParamsResponseProtoMsg): _152.QueryParamsResponse;
            toProto(message: _152.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _152.QueryParamsResponse): _152.QueryParamsResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _151.Params;
            isSDK(o: any): o is _151.ParamsSDKType;
            isAmino(o: any): o is _151.ParamsAmino;
            encode(message: _151.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _151.Params;
            fromJSON(object: any): _151.Params;
            toJSON(message: _151.Params): unknown;
            fromPartial(object: {
                forceUnlockAllowedAddresses?: string[];
            }): _151.Params;
            fromSDK(object: _151.ParamsSDKType): _151.Params;
            toSDK(message: _151.Params): _151.ParamsSDKType;
            fromAmino(object: _151.ParamsAmino): _151.Params;
            toAmino(message: _151.Params): _151.ParamsAmino;
            fromAminoMsg(object: _151.ParamsAminoMsg): _151.Params;
            toAminoMsg(message: _151.Params): _151.ParamsAminoMsg;
            fromProtoMsg(message: _151.ParamsProtoMsg): _151.Params;
            toProto(message: _151.Params): Uint8Array;
            toProtoMsg(message: _151.Params): _151.ParamsProtoMsg;
        };
        lockQueryTypeFromJSON(object: any): _150.LockQueryType;
        lockQueryTypeToJSON(object: _150.LockQueryType): string;
        LockQueryType: typeof _150.LockQueryType;
        LockQueryTypeSDKType: typeof _150.LockQueryType;
        LockQueryTypeAmino: typeof _150.LockQueryType;
        PeriodLock: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _150.PeriodLock;
            isSDK(o: any): o is _150.PeriodLockSDKType;
            isAmino(o: any): o is _150.PeriodLockAmino;
            encode(message: _150.PeriodLock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.PeriodLock;
            fromJSON(object: any): _150.PeriodLock;
            toJSON(message: _150.PeriodLock): unknown;
            fromPartial(object: {
                ID?: bigint;
                owner?: string;
                duration?: {
                    seconds?: bigint;
                    nanos?: number;
                };
                endTime?: Date;
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _150.PeriodLock;
            fromSDK(object: _150.PeriodLockSDKType): _150.PeriodLock;
            toSDK(message: _150.PeriodLock): _150.PeriodLockSDKType;
            fromAmino(object: _150.PeriodLockAmino): _150.PeriodLock;
            toAmino(message: _150.PeriodLock): _150.PeriodLockAmino;
            fromAminoMsg(object: _150.PeriodLockAminoMsg): _150.PeriodLock;
            toAminoMsg(message: _150.PeriodLock): _150.PeriodLockAminoMsg;
            fromProtoMsg(message: _150.PeriodLockProtoMsg): _150.PeriodLock;
            toProto(message: _150.PeriodLock): Uint8Array;
            toProtoMsg(message: _150.PeriodLock): _150.PeriodLockProtoMsg;
        };
        QueryCondition: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _150.QueryCondition;
            isSDK(o: any): o is _150.QueryConditionSDKType;
            isAmino(o: any): o is _150.QueryConditionAmino;
            encode(message: _150.QueryCondition, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.QueryCondition;
            fromJSON(object: any): _150.QueryCondition;
            toJSON(message: _150.QueryCondition): unknown;
            fromPartial(object: {
                lockQueryType?: _150.LockQueryType;
                denom?: string;
                duration?: {
                    seconds?: bigint;
                    nanos?: number;
                };
                timestamp?: Date;
            }): _150.QueryCondition;
            fromSDK(object: _150.QueryConditionSDKType): _150.QueryCondition;
            toSDK(message: _150.QueryCondition): _150.QueryConditionSDKType;
            fromAmino(object: _150.QueryConditionAmino): _150.QueryCondition;
            toAmino(message: _150.QueryCondition): _150.QueryConditionAmino;
            fromAminoMsg(object: _150.QueryConditionAminoMsg): _150.QueryCondition;
            toAminoMsg(message: _150.QueryCondition): _150.QueryConditionAminoMsg;
            fromProtoMsg(message: _150.QueryConditionProtoMsg): _150.QueryCondition;
            toProto(message: _150.QueryCondition): Uint8Array;
            toProtoMsg(message: _150.QueryCondition): _150.QueryConditionProtoMsg;
        };
        SyntheticLock: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _150.SyntheticLock;
            isSDK(o: any): o is _150.SyntheticLockSDKType;
            isAmino(o: any): o is _150.SyntheticLockAmino;
            encode(message: _150.SyntheticLock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _150.SyntheticLock;
            fromJSON(object: any): _150.SyntheticLock;
            toJSON(message: _150.SyntheticLock): unknown;
            fromPartial(object: {
                underlyingLockId?: bigint;
                synthDenom?: string;
                endTime?: Date;
                duration?: {
                    seconds?: bigint;
                    nanos?: number;
                };
            }): _150.SyntheticLock;
            fromSDK(object: _150.SyntheticLockSDKType): _150.SyntheticLock;
            toSDK(message: _150.SyntheticLock): _150.SyntheticLockSDKType;
            fromAmino(object: _150.SyntheticLockAmino): _150.SyntheticLock;
            toAmino(message: _150.SyntheticLock): _150.SyntheticLockAmino;
            fromAminoMsg(object: _150.SyntheticLockAminoMsg): _150.SyntheticLock;
            toAminoMsg(message: _150.SyntheticLock): _150.SyntheticLockAminoMsg;
            fromProtoMsg(message: _150.SyntheticLockProtoMsg): _150.SyntheticLock;
            toProto(message: _150.SyntheticLock): Uint8Array;
            toProtoMsg(message: _150.SyntheticLock): _150.SyntheticLockProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _149.GenesisState;
            isSDK(o: any): o is _149.GenesisStateSDKType;
            isAmino(o: any): o is _149.GenesisStateAmino;
            encode(message: _149.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _149.GenesisState;
            fromJSON(object: any): _149.GenesisState;
            toJSON(message: _149.GenesisState): unknown;
            fromPartial(object: {
                lastLockId?: bigint;
                locks?: {
                    ID?: bigint;
                    owner?: string;
                    duration?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    endTime?: Date;
                    coins?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }[];
                syntheticLocks?: {
                    underlyingLockId?: bigint;
                    synthDenom?: string;
                    endTime?: Date;
                    duration?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                }[];
            }): _149.GenesisState;
            fromSDK(object: _149.GenesisStateSDKType): _149.GenesisState;
            toSDK(message: _149.GenesisState): _149.GenesisStateSDKType;
            fromAmino(object: _149.GenesisStateAmino): _149.GenesisState;
            toAmino(message: _149.GenesisState): _149.GenesisStateAmino;
            fromAminoMsg(object: _149.GenesisStateAminoMsg): _149.GenesisState;
            toAminoMsg(message: _149.GenesisState): _149.GenesisStateAminoMsg;
            fromProtoMsg(message: _149.GenesisStateProtoMsg): _149.GenesisState;
            toProto(message: _149.GenesisState): Uint8Array;
            toProtoMsg(message: _149.GenesisState): _149.GenesisStateProtoMsg;
        };
    };
    namespace mint {
        const v1beta1: {
            QueryClientImpl: typeof _290.QueryClientImpl;
            createClientImpl: (rpc: import("..").TxRpc) => _290.QueryClientImpl;
            createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                useParams: <TData = _156.QueryParamsResponse>({ request, options }: _290.UseParamsQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
                useEpochProvisions: <TData_1 = _156.QueryEpochProvisionsResponse>({ request, options }: _290.UseEpochProvisionsQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
            };
            createRpcQueryMobxStores: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                QueryParamsStore: {
                    new (): {
                        store: import("..").QueryStore<_156.QueryParamsRequest, _156.QueryParamsResponse>;
                        params(request: _156.QueryParamsRequest): import("..").MobxResponse<_156.QueryParamsResponse>;
                    };
                };
                QueryEpochProvisionsStore: {
                    new (): {
                        store: import("..").QueryStore<_156.QueryEpochProvisionsRequest, _156.QueryEpochProvisionsResponse>;
                        epochProvisions(request: _156.QueryEpochProvisionsRequest): import("..").MobxResponse<_156.QueryEpochProvisionsResponse>;
                    };
                };
            };
            QueryParamsRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _156.QueryParamsRequest;
                isSDK(o: any): o is _156.QueryParamsRequestSDKType;
                isAmino(o: any): o is _156.QueryParamsRequestAmino;
                encode(_: _156.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _156.QueryParamsRequest;
                fromJSON(_: any): _156.QueryParamsRequest;
                toJSON(_: _156.QueryParamsRequest): unknown;
                fromPartial(_: {}): _156.QueryParamsRequest;
                fromSDK(_: _156.QueryParamsRequestSDKType): _156.QueryParamsRequest;
                toSDK(_: _156.QueryParamsRequest): _156.QueryParamsRequestSDKType;
                fromAmino(_: _156.QueryParamsRequestAmino): _156.QueryParamsRequest;
                toAmino(_: _156.QueryParamsRequest): _156.QueryParamsRequestAmino;
                fromAminoMsg(object: _156.QueryParamsRequestAminoMsg): _156.QueryParamsRequest;
                toAminoMsg(message: _156.QueryParamsRequest): _156.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _156.QueryParamsRequestProtoMsg): _156.QueryParamsRequest;
                toProto(message: _156.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _156.QueryParamsRequest): _156.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _156.QueryParamsResponse;
                isSDK(o: any): o is _156.QueryParamsResponseSDKType;
                isAmino(o: any): o is _156.QueryParamsResponseAmino;
                encode(message: _156.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _156.QueryParamsResponse;
                fromJSON(object: any): _156.QueryParamsResponse;
                toJSON(message: _156.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        mintDenom?: string;
                        genesisEpochProvisions?: string;
                        epochIdentifier?: string;
                        reductionPeriodInEpochs?: bigint;
                        reductionFactor?: string;
                        distributionProportions?: {
                            staking?: string;
                            poolIncentives?: string;
                            developerRewards?: string;
                            communityPool?: string;
                        };
                        weightedDeveloperRewardsReceivers?: {
                            address?: string;
                            weight?: string;
                        }[];
                        mintingRewardsDistributionStartEpoch?: bigint;
                    };
                }): _156.QueryParamsResponse;
                fromSDK(object: _156.QueryParamsResponseSDKType): _156.QueryParamsResponse;
                toSDK(message: _156.QueryParamsResponse): _156.QueryParamsResponseSDKType;
                fromAmino(object: _156.QueryParamsResponseAmino): _156.QueryParamsResponse;
                toAmino(message: _156.QueryParamsResponse): _156.QueryParamsResponseAmino;
                fromAminoMsg(object: _156.QueryParamsResponseAminoMsg): _156.QueryParamsResponse;
                toAminoMsg(message: _156.QueryParamsResponse): _156.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _156.QueryParamsResponseProtoMsg): _156.QueryParamsResponse;
                toProto(message: _156.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _156.QueryParamsResponse): _156.QueryParamsResponseProtoMsg;
            };
            QueryEpochProvisionsRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _156.QueryEpochProvisionsRequest;
                isSDK(o: any): o is _156.QueryEpochProvisionsRequestSDKType;
                isAmino(o: any): o is _156.QueryEpochProvisionsRequestAmino;
                encode(_: _156.QueryEpochProvisionsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _156.QueryEpochProvisionsRequest;
                fromJSON(_: any): _156.QueryEpochProvisionsRequest;
                toJSON(_: _156.QueryEpochProvisionsRequest): unknown;
                fromPartial(_: {}): _156.QueryEpochProvisionsRequest;
                fromSDK(_: _156.QueryEpochProvisionsRequestSDKType): _156.QueryEpochProvisionsRequest;
                toSDK(_: _156.QueryEpochProvisionsRequest): _156.QueryEpochProvisionsRequestSDKType;
                fromAmino(_: _156.QueryEpochProvisionsRequestAmino): _156.QueryEpochProvisionsRequest;
                toAmino(_: _156.QueryEpochProvisionsRequest): _156.QueryEpochProvisionsRequestAmino;
                fromAminoMsg(object: _156.QueryEpochProvisionsRequestAminoMsg): _156.QueryEpochProvisionsRequest;
                toAminoMsg(message: _156.QueryEpochProvisionsRequest): _156.QueryEpochProvisionsRequestAminoMsg;
                fromProtoMsg(message: _156.QueryEpochProvisionsRequestProtoMsg): _156.QueryEpochProvisionsRequest;
                toProto(message: _156.QueryEpochProvisionsRequest): Uint8Array;
                toProtoMsg(message: _156.QueryEpochProvisionsRequest): _156.QueryEpochProvisionsRequestProtoMsg;
            };
            QueryEpochProvisionsResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _156.QueryEpochProvisionsResponse;
                isSDK(o: any): o is _156.QueryEpochProvisionsResponseSDKType;
                isAmino(o: any): o is _156.QueryEpochProvisionsResponseAmino;
                encode(message: _156.QueryEpochProvisionsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _156.QueryEpochProvisionsResponse;
                fromJSON(object: any): _156.QueryEpochProvisionsResponse;
                toJSON(message: _156.QueryEpochProvisionsResponse): unknown;
                fromPartial(object: {
                    epochProvisions?: Uint8Array;
                }): _156.QueryEpochProvisionsResponse;
                fromSDK(object: _156.QueryEpochProvisionsResponseSDKType): _156.QueryEpochProvisionsResponse;
                toSDK(message: _156.QueryEpochProvisionsResponse): _156.QueryEpochProvisionsResponseSDKType;
                fromAmino(object: _156.QueryEpochProvisionsResponseAmino): _156.QueryEpochProvisionsResponse;
                toAmino(message: _156.QueryEpochProvisionsResponse): _156.QueryEpochProvisionsResponseAmino;
                fromAminoMsg(object: _156.QueryEpochProvisionsResponseAminoMsg): _156.QueryEpochProvisionsResponse;
                toAminoMsg(message: _156.QueryEpochProvisionsResponse): _156.QueryEpochProvisionsResponseAminoMsg;
                fromProtoMsg(message: _156.QueryEpochProvisionsResponseProtoMsg): _156.QueryEpochProvisionsResponse;
                toProto(message: _156.QueryEpochProvisionsResponse): Uint8Array;
                toProtoMsg(message: _156.QueryEpochProvisionsResponse): _156.QueryEpochProvisionsResponseProtoMsg;
            };
            Minter: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _155.Minter;
                isSDK(o: any): o is _155.MinterSDKType;
                isAmino(o: any): o is _155.MinterAmino;
                encode(message: _155.Minter, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.Minter;
                fromJSON(object: any): _155.Minter;
                toJSON(message: _155.Minter): unknown;
                fromPartial(object: {
                    epochProvisions?: string;
                }): _155.Minter;
                fromSDK(object: _155.MinterSDKType): _155.Minter;
                toSDK(message: _155.Minter): _155.MinterSDKType;
                fromAmino(object: _155.MinterAmino): _155.Minter;
                toAmino(message: _155.Minter): _155.MinterAmino;
                fromAminoMsg(object: _155.MinterAminoMsg): _155.Minter;
                toAminoMsg(message: _155.Minter): _155.MinterAminoMsg;
                fromProtoMsg(message: _155.MinterProtoMsg): _155.Minter;
                toProto(message: _155.Minter): Uint8Array;
                toProtoMsg(message: _155.Minter): _155.MinterProtoMsg;
            };
            WeightedAddress: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _155.WeightedAddress;
                isSDK(o: any): o is _155.WeightedAddressSDKType;
                isAmino(o: any): o is _155.WeightedAddressAmino;
                encode(message: _155.WeightedAddress, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.WeightedAddress;
                fromJSON(object: any): _155.WeightedAddress;
                toJSON(message: _155.WeightedAddress): unknown;
                fromPartial(object: {
                    address?: string;
                    weight?: string;
                }): _155.WeightedAddress;
                fromSDK(object: _155.WeightedAddressSDKType): _155.WeightedAddress;
                toSDK(message: _155.WeightedAddress): _155.WeightedAddressSDKType;
                fromAmino(object: _155.WeightedAddressAmino): _155.WeightedAddress;
                toAmino(message: _155.WeightedAddress): _155.WeightedAddressAmino;
                fromAminoMsg(object: _155.WeightedAddressAminoMsg): _155.WeightedAddress;
                toAminoMsg(message: _155.WeightedAddress): _155.WeightedAddressAminoMsg;
                fromProtoMsg(message: _155.WeightedAddressProtoMsg): _155.WeightedAddress;
                toProto(message: _155.WeightedAddress): Uint8Array;
                toProtoMsg(message: _155.WeightedAddress): _155.WeightedAddressProtoMsg;
            };
            DistributionProportions: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _155.DistributionProportions;
                isSDK(o: any): o is _155.DistributionProportionsSDKType;
                isAmino(o: any): o is _155.DistributionProportionsAmino;
                encode(message: _155.DistributionProportions, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.DistributionProportions;
                fromJSON(object: any): _155.DistributionProportions;
                toJSON(message: _155.DistributionProportions): unknown;
                fromPartial(object: {
                    staking?: string;
                    poolIncentives?: string;
                    developerRewards?: string;
                    communityPool?: string;
                }): _155.DistributionProportions;
                fromSDK(object: _155.DistributionProportionsSDKType): _155.DistributionProportions;
                toSDK(message: _155.DistributionProportions): _155.DistributionProportionsSDKType;
                fromAmino(object: _155.DistributionProportionsAmino): _155.DistributionProportions;
                toAmino(message: _155.DistributionProportions): _155.DistributionProportionsAmino;
                fromAminoMsg(object: _155.DistributionProportionsAminoMsg): _155.DistributionProportions;
                toAminoMsg(message: _155.DistributionProportions): _155.DistributionProportionsAminoMsg;
                fromProtoMsg(message: _155.DistributionProportionsProtoMsg): _155.DistributionProportions;
                toProto(message: _155.DistributionProportions): Uint8Array;
                toProtoMsg(message: _155.DistributionProportions): _155.DistributionProportionsProtoMsg;
            };
            Params: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _155.Params;
                isSDK(o: any): o is _155.ParamsSDKType;
                isAmino(o: any): o is _155.ParamsAmino;
                encode(message: _155.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _155.Params;
                fromJSON(object: any): _155.Params;
                toJSON(message: _155.Params): unknown;
                fromPartial(object: {
                    mintDenom?: string;
                    genesisEpochProvisions?: string;
                    epochIdentifier?: string;
                    reductionPeriodInEpochs?: bigint;
                    reductionFactor?: string;
                    distributionProportions?: {
                        staking?: string;
                        poolIncentives?: string;
                        developerRewards?: string;
                        communityPool?: string;
                    };
                    weightedDeveloperRewardsReceivers?: {
                        address?: string;
                        weight?: string;
                    }[];
                    mintingRewardsDistributionStartEpoch?: bigint;
                }): _155.Params;
                fromSDK(object: _155.ParamsSDKType): _155.Params;
                toSDK(message: _155.Params): _155.ParamsSDKType;
                fromAmino(object: _155.ParamsAmino): _155.Params;
                toAmino(message: _155.Params): _155.ParamsAmino;
                fromAminoMsg(object: _155.ParamsAminoMsg): _155.Params;
                toAminoMsg(message: _155.Params): _155.ParamsAminoMsg;
                fromProtoMsg(message: _155.ParamsProtoMsg): _155.Params;
                toProto(message: _155.Params): Uint8Array;
                toProtoMsg(message: _155.Params): _155.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _154.GenesisState;
                isSDK(o: any): o is _154.GenesisStateSDKType;
                isAmino(o: any): o is _154.GenesisStateAmino;
                encode(message: _154.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _154.GenesisState;
                fromJSON(object: any): _154.GenesisState;
                toJSON(message: _154.GenesisState): unknown;
                fromPartial(object: {
                    minter?: {
                        epochProvisions?: string;
                    };
                    params?: {
                        mintDenom?: string;
                        genesisEpochProvisions?: string;
                        epochIdentifier?: string;
                        reductionPeriodInEpochs?: bigint;
                        reductionFactor?: string;
                        distributionProportions?: {
                            staking?: string;
                            poolIncentives?: string;
                            developerRewards?: string;
                            communityPool?: string;
                        };
                        weightedDeveloperRewardsReceivers?: {
                            address?: string;
                            weight?: string;
                        }[];
                        mintingRewardsDistributionStartEpoch?: bigint;
                    };
                    reductionStartedEpoch?: bigint;
                }): _154.GenesisState;
                fromSDK(object: _154.GenesisStateSDKType): _154.GenesisState;
                toSDK(message: _154.GenesisState): _154.GenesisStateSDKType;
                fromAmino(object: _154.GenesisStateAmino): _154.GenesisState;
                toAmino(message: _154.GenesisState): _154.GenesisStateAmino;
                fromAminoMsg(object: _154.GenesisStateAminoMsg): _154.GenesisState;
                toAminoMsg(message: _154.GenesisState): _154.GenesisStateAminoMsg;
                fromProtoMsg(message: _154.GenesisStateProtoMsg): _154.GenesisState;
                toProto(message: _154.GenesisState): Uint8Array;
                toProtoMsg(message: _154.GenesisState): _154.GenesisStateProtoMsg;
            };
        };
    }
    namespace poolincentives {
        const v1beta1: {
            QueryClientImpl: typeof _291.QueryClientImpl;
            createClientImpl: (rpc: import("..").TxRpc) => _291.QueryClientImpl;
            createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                useGaugeIds: <TData = _160.QueryGaugeIdsResponse>({ request, options }: _291.UseGaugeIdsQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
                useDistrInfo: <TData_1 = _160.QueryDistrInfoResponse>({ request, options }: _291.UseDistrInfoQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
                useParams: <TData_2 = _160.QueryParamsResponse>({ request, options }: _291.UseParamsQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
                useLockableDurations: <TData_3 = _160.QueryLockableDurationsResponse>({ request, options }: _291.UseLockableDurationsQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
                useIncentivizedPools: <TData_4 = _160.QueryIncentivizedPoolsResponse>({ request, options }: _291.UseIncentivizedPoolsQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
                useExternalIncentiveGauges: <TData_5 = _160.QueryExternalIncentiveGaugesResponse>({ request, options }: _291.UseExternalIncentiveGaugesQuery<TData_5>) => import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
            };
            createRpcQueryMobxStores: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                QueryGaugeIdsStore: {
                    new (): {
                        store: import("..").QueryStore<_160.QueryGaugeIdsRequest, _160.QueryGaugeIdsResponse>;
                        gaugeIds(request: _160.QueryGaugeIdsRequest): import("..").MobxResponse<_160.QueryGaugeIdsResponse>;
                    };
                };
                QueryDistrInfoStore: {
                    new (): {
                        store: import("..").QueryStore<_160.QueryDistrInfoRequest, _160.QueryDistrInfoResponse>;
                        distrInfo(request: _160.QueryDistrInfoRequest): import("..").MobxResponse<_160.QueryDistrInfoResponse>;
                    };
                };
                QueryParamsStore: {
                    new (): {
                        store: import("..").QueryStore<_160.QueryParamsRequest, _160.QueryParamsResponse>;
                        params(request: _160.QueryParamsRequest): import("..").MobxResponse<_160.QueryParamsResponse>;
                    };
                };
                QueryLockableDurationsStore: {
                    new (): {
                        store: import("..").QueryStore<_160.QueryLockableDurationsRequest, _160.QueryLockableDurationsResponse>;
                        lockableDurations(request: _160.QueryLockableDurationsRequest): import("..").MobxResponse<_160.QueryLockableDurationsResponse>;
                    };
                };
                QueryIncentivizedPoolsStore: {
                    new (): {
                        store: import("..").QueryStore<_160.QueryIncentivizedPoolsRequest, _160.QueryIncentivizedPoolsResponse>;
                        incentivizedPools(request: _160.QueryIncentivizedPoolsRequest): import("..").MobxResponse<_160.QueryIncentivizedPoolsResponse>;
                    };
                };
                QueryExternalIncentiveGaugesStore: {
                    new (): {
                        store: import("..").QueryStore<_160.QueryExternalIncentiveGaugesRequest, _160.QueryExternalIncentiveGaugesResponse>;
                        externalIncentiveGauges(request: _160.QueryExternalIncentiveGaugesRequest): import("..").MobxResponse<_160.QueryExternalIncentiveGaugesResponse>;
                    };
                };
            };
            QueryGaugeIdsRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _160.QueryGaugeIdsRequest;
                isSDK(o: any): o is _160.QueryGaugeIdsRequestSDKType;
                isAmino(o: any): o is _160.QueryGaugeIdsRequestAmino;
                encode(message: _160.QueryGaugeIdsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.QueryGaugeIdsRequest;
                fromJSON(object: any): _160.QueryGaugeIdsRequest;
                toJSON(message: _160.QueryGaugeIdsRequest): unknown;
                fromPartial(object: {
                    poolId?: bigint;
                }): _160.QueryGaugeIdsRequest;
                fromSDK(object: _160.QueryGaugeIdsRequestSDKType): _160.QueryGaugeIdsRequest;
                toSDK(message: _160.QueryGaugeIdsRequest): _160.QueryGaugeIdsRequestSDKType;
                fromAmino(object: _160.QueryGaugeIdsRequestAmino): _160.QueryGaugeIdsRequest;
                toAmino(message: _160.QueryGaugeIdsRequest): _160.QueryGaugeIdsRequestAmino;
                fromAminoMsg(object: _160.QueryGaugeIdsRequestAminoMsg): _160.QueryGaugeIdsRequest;
                toAminoMsg(message: _160.QueryGaugeIdsRequest): _160.QueryGaugeIdsRequestAminoMsg;
                fromProtoMsg(message: _160.QueryGaugeIdsRequestProtoMsg): _160.QueryGaugeIdsRequest;
                toProto(message: _160.QueryGaugeIdsRequest): Uint8Array;
                toProtoMsg(message: _160.QueryGaugeIdsRequest): _160.QueryGaugeIdsRequestProtoMsg;
            };
            QueryGaugeIdsResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _160.QueryGaugeIdsResponse;
                isSDK(o: any): o is _160.QueryGaugeIdsResponseSDKType;
                isAmino(o: any): o is _160.QueryGaugeIdsResponseAmino;
                encode(message: _160.QueryGaugeIdsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.QueryGaugeIdsResponse;
                fromJSON(object: any): _160.QueryGaugeIdsResponse;
                toJSON(message: _160.QueryGaugeIdsResponse): unknown;
                fromPartial(object: {
                    gaugeIdsWithDuration?: {
                        gaugeId?: bigint;
                        duration?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        gaugeIncentivePercentage?: string;
                    }[];
                }): _160.QueryGaugeIdsResponse;
                fromSDK(object: _160.QueryGaugeIdsResponseSDKType): _160.QueryGaugeIdsResponse;
                toSDK(message: _160.QueryGaugeIdsResponse): _160.QueryGaugeIdsResponseSDKType;
                fromAmino(object: _160.QueryGaugeIdsResponseAmino): _160.QueryGaugeIdsResponse;
                toAmino(message: _160.QueryGaugeIdsResponse): _160.QueryGaugeIdsResponseAmino;
                fromAminoMsg(object: _160.QueryGaugeIdsResponseAminoMsg): _160.QueryGaugeIdsResponse;
                toAminoMsg(message: _160.QueryGaugeIdsResponse): _160.QueryGaugeIdsResponseAminoMsg;
                fromProtoMsg(message: _160.QueryGaugeIdsResponseProtoMsg): _160.QueryGaugeIdsResponse;
                toProto(message: _160.QueryGaugeIdsResponse): Uint8Array;
                toProtoMsg(message: _160.QueryGaugeIdsResponse): _160.QueryGaugeIdsResponseProtoMsg;
            };
            QueryGaugeIdsResponse_GaugeIdWithDuration: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _160.QueryGaugeIdsResponse_GaugeIdWithDuration;
                isSDK(o: any): o is _160.QueryGaugeIdsResponse_GaugeIdWithDurationSDKType;
                isAmino(o: any): o is _160.QueryGaugeIdsResponse_GaugeIdWithDurationAmino;
                encode(message: _160.QueryGaugeIdsResponse_GaugeIdWithDuration, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.QueryGaugeIdsResponse_GaugeIdWithDuration;
                fromJSON(object: any): _160.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toJSON(message: _160.QueryGaugeIdsResponse_GaugeIdWithDuration): unknown;
                fromPartial(object: {
                    gaugeId?: bigint;
                    duration?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    gaugeIncentivePercentage?: string;
                }): _160.QueryGaugeIdsResponse_GaugeIdWithDuration;
                fromSDK(object: _160.QueryGaugeIdsResponse_GaugeIdWithDurationSDKType): _160.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toSDK(message: _160.QueryGaugeIdsResponse_GaugeIdWithDuration): _160.QueryGaugeIdsResponse_GaugeIdWithDurationSDKType;
                fromAmino(object: _160.QueryGaugeIdsResponse_GaugeIdWithDurationAmino): _160.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toAmino(message: _160.QueryGaugeIdsResponse_GaugeIdWithDuration): _160.QueryGaugeIdsResponse_GaugeIdWithDurationAmino;
                fromAminoMsg(object: _160.QueryGaugeIdsResponse_GaugeIdWithDurationAminoMsg): _160.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toAminoMsg(message: _160.QueryGaugeIdsResponse_GaugeIdWithDuration): _160.QueryGaugeIdsResponse_GaugeIdWithDurationAminoMsg;
                fromProtoMsg(message: _160.QueryGaugeIdsResponse_GaugeIdWithDurationProtoMsg): _160.QueryGaugeIdsResponse_GaugeIdWithDuration;
                toProto(message: _160.QueryGaugeIdsResponse_GaugeIdWithDuration): Uint8Array;
                toProtoMsg(message: _160.QueryGaugeIdsResponse_GaugeIdWithDuration): _160.QueryGaugeIdsResponse_GaugeIdWithDurationProtoMsg;
            };
            QueryDistrInfoRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _160.QueryDistrInfoRequest;
                isSDK(o: any): o is _160.QueryDistrInfoRequestSDKType;
                isAmino(o: any): o is _160.QueryDistrInfoRequestAmino;
                encode(_: _160.QueryDistrInfoRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.QueryDistrInfoRequest;
                fromJSON(_: any): _160.QueryDistrInfoRequest;
                toJSON(_: _160.QueryDistrInfoRequest): unknown;
                fromPartial(_: {}): _160.QueryDistrInfoRequest;
                fromSDK(_: _160.QueryDistrInfoRequestSDKType): _160.QueryDistrInfoRequest;
                toSDK(_: _160.QueryDistrInfoRequest): _160.QueryDistrInfoRequestSDKType;
                fromAmino(_: _160.QueryDistrInfoRequestAmino): _160.QueryDistrInfoRequest;
                toAmino(_: _160.QueryDistrInfoRequest): _160.QueryDistrInfoRequestAmino;
                fromAminoMsg(object: _160.QueryDistrInfoRequestAminoMsg): _160.QueryDistrInfoRequest;
                toAminoMsg(message: _160.QueryDistrInfoRequest): _160.QueryDistrInfoRequestAminoMsg;
                fromProtoMsg(message: _160.QueryDistrInfoRequestProtoMsg): _160.QueryDistrInfoRequest;
                toProto(message: _160.QueryDistrInfoRequest): Uint8Array;
                toProtoMsg(message: _160.QueryDistrInfoRequest): _160.QueryDistrInfoRequestProtoMsg;
            };
            QueryDistrInfoResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _160.QueryDistrInfoResponse;
                isSDK(o: any): o is _160.QueryDistrInfoResponseSDKType;
                isAmino(o: any): o is _160.QueryDistrInfoResponseAmino;
                encode(message: _160.QueryDistrInfoResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.QueryDistrInfoResponse;
                fromJSON(object: any): _160.QueryDistrInfoResponse;
                toJSON(message: _160.QueryDistrInfoResponse): unknown;
                fromPartial(object: {
                    distrInfo?: {
                        totalWeight?: string;
                        records?: {
                            gaugeId?: bigint;
                            weight?: string;
                        }[];
                    };
                }): _160.QueryDistrInfoResponse;
                fromSDK(object: _160.QueryDistrInfoResponseSDKType): _160.QueryDistrInfoResponse;
                toSDK(message: _160.QueryDistrInfoResponse): _160.QueryDistrInfoResponseSDKType;
                fromAmino(object: _160.QueryDistrInfoResponseAmino): _160.QueryDistrInfoResponse;
                toAmino(message: _160.QueryDistrInfoResponse): _160.QueryDistrInfoResponseAmino;
                fromAminoMsg(object: _160.QueryDistrInfoResponseAminoMsg): _160.QueryDistrInfoResponse;
                toAminoMsg(message: _160.QueryDistrInfoResponse): _160.QueryDistrInfoResponseAminoMsg;
                fromProtoMsg(message: _160.QueryDistrInfoResponseProtoMsg): _160.QueryDistrInfoResponse;
                toProto(message: _160.QueryDistrInfoResponse): Uint8Array;
                toProtoMsg(message: _160.QueryDistrInfoResponse): _160.QueryDistrInfoResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _160.QueryParamsRequest;
                isSDK(o: any): o is _160.QueryParamsRequestSDKType;
                isAmino(o: any): o is _160.QueryParamsRequestAmino;
                encode(_: _160.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.QueryParamsRequest;
                fromJSON(_: any): _160.QueryParamsRequest;
                toJSON(_: _160.QueryParamsRequest): unknown;
                fromPartial(_: {}): _160.QueryParamsRequest;
                fromSDK(_: _160.QueryParamsRequestSDKType): _160.QueryParamsRequest;
                toSDK(_: _160.QueryParamsRequest): _160.QueryParamsRequestSDKType;
                fromAmino(_: _160.QueryParamsRequestAmino): _160.QueryParamsRequest;
                toAmino(_: _160.QueryParamsRequest): _160.QueryParamsRequestAmino;
                fromAminoMsg(object: _160.QueryParamsRequestAminoMsg): _160.QueryParamsRequest;
                toAminoMsg(message: _160.QueryParamsRequest): _160.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _160.QueryParamsRequestProtoMsg): _160.QueryParamsRequest;
                toProto(message: _160.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _160.QueryParamsRequest): _160.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _160.QueryParamsResponse;
                isSDK(o: any): o is _160.QueryParamsResponseSDKType;
                isAmino(o: any): o is _160.QueryParamsResponseAmino;
                encode(message: _160.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.QueryParamsResponse;
                fromJSON(object: any): _160.QueryParamsResponse;
                toJSON(message: _160.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        mintedDenom?: string;
                    };
                }): _160.QueryParamsResponse;
                fromSDK(object: _160.QueryParamsResponseSDKType): _160.QueryParamsResponse;
                toSDK(message: _160.QueryParamsResponse): _160.QueryParamsResponseSDKType;
                fromAmino(object: _160.QueryParamsResponseAmino): _160.QueryParamsResponse;
                toAmino(message: _160.QueryParamsResponse): _160.QueryParamsResponseAmino;
                fromAminoMsg(object: _160.QueryParamsResponseAminoMsg): _160.QueryParamsResponse;
                toAminoMsg(message: _160.QueryParamsResponse): _160.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _160.QueryParamsResponseProtoMsg): _160.QueryParamsResponse;
                toProto(message: _160.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _160.QueryParamsResponse): _160.QueryParamsResponseProtoMsg;
            };
            QueryLockableDurationsRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _160.QueryLockableDurationsRequest;
                isSDK(o: any): o is _160.QueryLockableDurationsRequestSDKType;
                isAmino(o: any): o is _160.QueryLockableDurationsRequestAmino;
                encode(_: _160.QueryLockableDurationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.QueryLockableDurationsRequest;
                fromJSON(_: any): _160.QueryLockableDurationsRequest;
                toJSON(_: _160.QueryLockableDurationsRequest): unknown;
                fromPartial(_: {}): _160.QueryLockableDurationsRequest;
                fromSDK(_: _160.QueryLockableDurationsRequestSDKType): _160.QueryLockableDurationsRequest;
                toSDK(_: _160.QueryLockableDurationsRequest): _160.QueryLockableDurationsRequestSDKType;
                fromAmino(_: _160.QueryLockableDurationsRequestAmino): _160.QueryLockableDurationsRequest;
                toAmino(_: _160.QueryLockableDurationsRequest): _160.QueryLockableDurationsRequestAmino;
                fromAminoMsg(object: _160.QueryLockableDurationsRequestAminoMsg): _160.QueryLockableDurationsRequest;
                toAminoMsg(message: _160.QueryLockableDurationsRequest): _160.QueryLockableDurationsRequestAminoMsg;
                fromProtoMsg(message: _160.QueryLockableDurationsRequestProtoMsg): _160.QueryLockableDurationsRequest;
                toProto(message: _160.QueryLockableDurationsRequest): Uint8Array;
                toProtoMsg(message: _160.QueryLockableDurationsRequest): _160.QueryLockableDurationsRequestProtoMsg;
            };
            QueryLockableDurationsResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _160.QueryLockableDurationsResponse;
                isSDK(o: any): o is _160.QueryLockableDurationsResponseSDKType;
                isAmino(o: any): o is _160.QueryLockableDurationsResponseAmino;
                encode(message: _160.QueryLockableDurationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.QueryLockableDurationsResponse;
                fromJSON(object: any): _160.QueryLockableDurationsResponse;
                toJSON(message: _160.QueryLockableDurationsResponse): unknown;
                fromPartial(object: {
                    lockableDurations?: {
                        seconds?: bigint;
                        nanos?: number;
                    }[];
                }): _160.QueryLockableDurationsResponse;
                fromSDK(object: _160.QueryLockableDurationsResponseSDKType): _160.QueryLockableDurationsResponse;
                toSDK(message: _160.QueryLockableDurationsResponse): _160.QueryLockableDurationsResponseSDKType;
                fromAmino(object: _160.QueryLockableDurationsResponseAmino): _160.QueryLockableDurationsResponse;
                toAmino(message: _160.QueryLockableDurationsResponse): _160.QueryLockableDurationsResponseAmino;
                fromAminoMsg(object: _160.QueryLockableDurationsResponseAminoMsg): _160.QueryLockableDurationsResponse;
                toAminoMsg(message: _160.QueryLockableDurationsResponse): _160.QueryLockableDurationsResponseAminoMsg;
                fromProtoMsg(message: _160.QueryLockableDurationsResponseProtoMsg): _160.QueryLockableDurationsResponse;
                toProto(message: _160.QueryLockableDurationsResponse): Uint8Array;
                toProtoMsg(message: _160.QueryLockableDurationsResponse): _160.QueryLockableDurationsResponseProtoMsg;
            };
            QueryIncentivizedPoolsRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _160.QueryIncentivizedPoolsRequest;
                isSDK(o: any): o is _160.QueryIncentivizedPoolsRequestSDKType;
                isAmino(o: any): o is _160.QueryIncentivizedPoolsRequestAmino;
                encode(_: _160.QueryIncentivizedPoolsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.QueryIncentivizedPoolsRequest;
                fromJSON(_: any): _160.QueryIncentivizedPoolsRequest;
                toJSON(_: _160.QueryIncentivizedPoolsRequest): unknown;
                fromPartial(_: {}): _160.QueryIncentivizedPoolsRequest;
                fromSDK(_: _160.QueryIncentivizedPoolsRequestSDKType): _160.QueryIncentivizedPoolsRequest;
                toSDK(_: _160.QueryIncentivizedPoolsRequest): _160.QueryIncentivizedPoolsRequestSDKType;
                fromAmino(_: _160.QueryIncentivizedPoolsRequestAmino): _160.QueryIncentivizedPoolsRequest;
                toAmino(_: _160.QueryIncentivizedPoolsRequest): _160.QueryIncentivizedPoolsRequestAmino;
                fromAminoMsg(object: _160.QueryIncentivizedPoolsRequestAminoMsg): _160.QueryIncentivizedPoolsRequest;
                toAminoMsg(message: _160.QueryIncentivizedPoolsRequest): _160.QueryIncentivizedPoolsRequestAminoMsg;
                fromProtoMsg(message: _160.QueryIncentivizedPoolsRequestProtoMsg): _160.QueryIncentivizedPoolsRequest;
                toProto(message: _160.QueryIncentivizedPoolsRequest): Uint8Array;
                toProtoMsg(message: _160.QueryIncentivizedPoolsRequest): _160.QueryIncentivizedPoolsRequestProtoMsg;
            };
            IncentivizedPool: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _160.IncentivizedPool;
                isSDK(o: any): o is _160.IncentivizedPoolSDKType;
                isAmino(o: any): o is _160.IncentivizedPoolAmino;
                encode(message: _160.IncentivizedPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.IncentivizedPool;
                fromJSON(object: any): _160.IncentivizedPool;
                toJSON(message: _160.IncentivizedPool): unknown;
                fromPartial(object: {
                    poolId?: bigint;
                    lockableDuration?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                    gaugeId?: bigint;
                }): _160.IncentivizedPool;
                fromSDK(object: _160.IncentivizedPoolSDKType): _160.IncentivizedPool;
                toSDK(message: _160.IncentivizedPool): _160.IncentivizedPoolSDKType;
                fromAmino(object: _160.IncentivizedPoolAmino): _160.IncentivizedPool;
                toAmino(message: _160.IncentivizedPool): _160.IncentivizedPoolAmino;
                fromAminoMsg(object: _160.IncentivizedPoolAminoMsg): _160.IncentivizedPool;
                toAminoMsg(message: _160.IncentivizedPool): _160.IncentivizedPoolAminoMsg;
                fromProtoMsg(message: _160.IncentivizedPoolProtoMsg): _160.IncentivizedPool;
                toProto(message: _160.IncentivizedPool): Uint8Array;
                toProtoMsg(message: _160.IncentivizedPool): _160.IncentivizedPoolProtoMsg;
            };
            QueryIncentivizedPoolsResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _160.QueryIncentivizedPoolsResponse;
                isSDK(o: any): o is _160.QueryIncentivizedPoolsResponseSDKType;
                isAmino(o: any): o is _160.QueryIncentivizedPoolsResponseAmino;
                encode(message: _160.QueryIncentivizedPoolsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.QueryIncentivizedPoolsResponse;
                fromJSON(object: any): _160.QueryIncentivizedPoolsResponse;
                toJSON(message: _160.QueryIncentivizedPoolsResponse): unknown;
                fromPartial(object: {
                    incentivizedPools?: {
                        poolId?: bigint;
                        lockableDuration?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                        gaugeId?: bigint;
                    }[];
                }): _160.QueryIncentivizedPoolsResponse;
                fromSDK(object: _160.QueryIncentivizedPoolsResponseSDKType): _160.QueryIncentivizedPoolsResponse;
                toSDK(message: _160.QueryIncentivizedPoolsResponse): _160.QueryIncentivizedPoolsResponseSDKType;
                fromAmino(object: _160.QueryIncentivizedPoolsResponseAmino): _160.QueryIncentivizedPoolsResponse;
                toAmino(message: _160.QueryIncentivizedPoolsResponse): _160.QueryIncentivizedPoolsResponseAmino;
                fromAminoMsg(object: _160.QueryIncentivizedPoolsResponseAminoMsg): _160.QueryIncentivizedPoolsResponse;
                toAminoMsg(message: _160.QueryIncentivizedPoolsResponse): _160.QueryIncentivizedPoolsResponseAminoMsg;
                fromProtoMsg(message: _160.QueryIncentivizedPoolsResponseProtoMsg): _160.QueryIncentivizedPoolsResponse;
                toProto(message: _160.QueryIncentivizedPoolsResponse): Uint8Array;
                toProtoMsg(message: _160.QueryIncentivizedPoolsResponse): _160.QueryIncentivizedPoolsResponseProtoMsg;
            };
            QueryExternalIncentiveGaugesRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _160.QueryExternalIncentiveGaugesRequest;
                isSDK(o: any): o is _160.QueryExternalIncentiveGaugesRequestSDKType;
                isAmino(o: any): o is _160.QueryExternalIncentiveGaugesRequestAmino;
                encode(_: _160.QueryExternalIncentiveGaugesRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.QueryExternalIncentiveGaugesRequest;
                fromJSON(_: any): _160.QueryExternalIncentiveGaugesRequest;
                toJSON(_: _160.QueryExternalIncentiveGaugesRequest): unknown;
                fromPartial(_: {}): _160.QueryExternalIncentiveGaugesRequest;
                fromSDK(_: _160.QueryExternalIncentiveGaugesRequestSDKType): _160.QueryExternalIncentiveGaugesRequest;
                toSDK(_: _160.QueryExternalIncentiveGaugesRequest): _160.QueryExternalIncentiveGaugesRequestSDKType;
                fromAmino(_: _160.QueryExternalIncentiveGaugesRequestAmino): _160.QueryExternalIncentiveGaugesRequest;
                toAmino(_: _160.QueryExternalIncentiveGaugesRequest): _160.QueryExternalIncentiveGaugesRequestAmino;
                fromAminoMsg(object: _160.QueryExternalIncentiveGaugesRequestAminoMsg): _160.QueryExternalIncentiveGaugesRequest;
                toAminoMsg(message: _160.QueryExternalIncentiveGaugesRequest): _160.QueryExternalIncentiveGaugesRequestAminoMsg;
                fromProtoMsg(message: _160.QueryExternalIncentiveGaugesRequestProtoMsg): _160.QueryExternalIncentiveGaugesRequest;
                toProto(message: _160.QueryExternalIncentiveGaugesRequest): Uint8Array;
                toProtoMsg(message: _160.QueryExternalIncentiveGaugesRequest): _160.QueryExternalIncentiveGaugesRequestProtoMsg;
            };
            QueryExternalIncentiveGaugesResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _160.QueryExternalIncentiveGaugesResponse;
                isSDK(o: any): o is _160.QueryExternalIncentiveGaugesResponseSDKType;
                isAmino(o: any): o is _160.QueryExternalIncentiveGaugesResponseAmino;
                encode(message: _160.QueryExternalIncentiveGaugesResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _160.QueryExternalIncentiveGaugesResponse;
                fromJSON(object: any): _160.QueryExternalIncentiveGaugesResponse;
                toJSON(message: _160.QueryExternalIncentiveGaugesResponse): unknown;
                fromPartial(object: {
                    data?: {
                        id?: bigint;
                        isPerpetual?: boolean;
                        distributeTo?: {
                            lockQueryType?: _150.LockQueryType;
                            denom?: string;
                            duration?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                            timestamp?: Date;
                        };
                        coins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                        startTime?: Date;
                        numEpochsPaidOver?: bigint;
                        filledEpochs?: bigint;
                        distributedCoins?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    }[];
                }): _160.QueryExternalIncentiveGaugesResponse;
                fromSDK(object: _160.QueryExternalIncentiveGaugesResponseSDKType): _160.QueryExternalIncentiveGaugesResponse;
                toSDK(message: _160.QueryExternalIncentiveGaugesResponse): _160.QueryExternalIncentiveGaugesResponseSDKType;
                fromAmino(object: _160.QueryExternalIncentiveGaugesResponseAmino): _160.QueryExternalIncentiveGaugesResponse;
                toAmino(message: _160.QueryExternalIncentiveGaugesResponse): _160.QueryExternalIncentiveGaugesResponseAmino;
                fromAminoMsg(object: _160.QueryExternalIncentiveGaugesResponseAminoMsg): _160.QueryExternalIncentiveGaugesResponse;
                toAminoMsg(message: _160.QueryExternalIncentiveGaugesResponse): _160.QueryExternalIncentiveGaugesResponseAminoMsg;
                fromProtoMsg(message: _160.QueryExternalIncentiveGaugesResponseProtoMsg): _160.QueryExternalIncentiveGaugesResponse;
                toProto(message: _160.QueryExternalIncentiveGaugesResponse): Uint8Array;
                toProtoMsg(message: _160.QueryExternalIncentiveGaugesResponse): _160.QueryExternalIncentiveGaugesResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _159.Params;
                isSDK(o: any): o is _159.ParamsSDKType;
                isAmino(o: any): o is _159.ParamsAmino;
                encode(message: _159.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.Params;
                fromJSON(object: any): _159.Params;
                toJSON(message: _159.Params): unknown;
                fromPartial(object: {
                    mintedDenom?: string;
                }): _159.Params;
                fromSDK(object: _159.ParamsSDKType): _159.Params;
                toSDK(message: _159.Params): _159.ParamsSDKType;
                fromAmino(object: _159.ParamsAmino): _159.Params;
                toAmino(message: _159.Params): _159.ParamsAmino;
                fromAminoMsg(object: _159.ParamsAminoMsg): _159.Params;
                toAminoMsg(message: _159.Params): _159.ParamsAminoMsg;
                fromProtoMsg(message: _159.ParamsProtoMsg): _159.Params;
                toProto(message: _159.Params): Uint8Array;
                toProtoMsg(message: _159.Params): _159.ParamsProtoMsg;
            };
            LockableDurationsInfo: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _159.LockableDurationsInfo;
                isSDK(o: any): o is _159.LockableDurationsInfoSDKType;
                isAmino(o: any): o is _159.LockableDurationsInfoAmino;
                encode(message: _159.LockableDurationsInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.LockableDurationsInfo;
                fromJSON(object: any): _159.LockableDurationsInfo;
                toJSON(message: _159.LockableDurationsInfo): unknown;
                fromPartial(object: {
                    lockableDurations?: {
                        seconds?: bigint;
                        nanos?: number;
                    }[];
                }): _159.LockableDurationsInfo;
                fromSDK(object: _159.LockableDurationsInfoSDKType): _159.LockableDurationsInfo;
                toSDK(message: _159.LockableDurationsInfo): _159.LockableDurationsInfoSDKType;
                fromAmino(object: _159.LockableDurationsInfoAmino): _159.LockableDurationsInfo;
                toAmino(message: _159.LockableDurationsInfo): _159.LockableDurationsInfoAmino;
                fromAminoMsg(object: _159.LockableDurationsInfoAminoMsg): _159.LockableDurationsInfo;
                toAminoMsg(message: _159.LockableDurationsInfo): _159.LockableDurationsInfoAminoMsg;
                fromProtoMsg(message: _159.LockableDurationsInfoProtoMsg): _159.LockableDurationsInfo;
                toProto(message: _159.LockableDurationsInfo): Uint8Array;
                toProtoMsg(message: _159.LockableDurationsInfo): _159.LockableDurationsInfoProtoMsg;
            };
            DistrInfo: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _159.DistrInfo;
                isSDK(o: any): o is _159.DistrInfoSDKType;
                isAmino(o: any): o is _159.DistrInfoAmino;
                encode(message: _159.DistrInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.DistrInfo;
                fromJSON(object: any): _159.DistrInfo;
                toJSON(message: _159.DistrInfo): unknown;
                fromPartial(object: {
                    totalWeight?: string;
                    records?: {
                        gaugeId?: bigint;
                        weight?: string;
                    }[];
                }): _159.DistrInfo;
                fromSDK(object: _159.DistrInfoSDKType): _159.DistrInfo;
                toSDK(message: _159.DistrInfo): _159.DistrInfoSDKType;
                fromAmino(object: _159.DistrInfoAmino): _159.DistrInfo;
                toAmino(message: _159.DistrInfo): _159.DistrInfoAmino;
                fromAminoMsg(object: _159.DistrInfoAminoMsg): _159.DistrInfo;
                toAminoMsg(message: _159.DistrInfo): _159.DistrInfoAminoMsg;
                fromProtoMsg(message: _159.DistrInfoProtoMsg): _159.DistrInfo;
                toProto(message: _159.DistrInfo): Uint8Array;
                toProtoMsg(message: _159.DistrInfo): _159.DistrInfoProtoMsg;
            };
            DistrRecord: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _159.DistrRecord;
                isSDK(o: any): o is _159.DistrRecordSDKType;
                isAmino(o: any): o is _159.DistrRecordAmino;
                encode(message: _159.DistrRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.DistrRecord;
                fromJSON(object: any): _159.DistrRecord;
                toJSON(message: _159.DistrRecord): unknown;
                fromPartial(object: {
                    gaugeId?: bigint;
                    weight?: string;
                }): _159.DistrRecord;
                fromSDK(object: _159.DistrRecordSDKType): _159.DistrRecord;
                toSDK(message: _159.DistrRecord): _159.DistrRecordSDKType;
                fromAmino(object: _159.DistrRecordAmino): _159.DistrRecord;
                toAmino(message: _159.DistrRecord): _159.DistrRecordAmino;
                fromAminoMsg(object: _159.DistrRecordAminoMsg): _159.DistrRecord;
                toAminoMsg(message: _159.DistrRecord): _159.DistrRecordAminoMsg;
                fromProtoMsg(message: _159.DistrRecordProtoMsg): _159.DistrRecord;
                toProto(message: _159.DistrRecord): Uint8Array;
                toProtoMsg(message: _159.DistrRecord): _159.DistrRecordProtoMsg;
            };
            PoolToGauge: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _159.PoolToGauge;
                isSDK(o: any): o is _159.PoolToGaugeSDKType;
                isAmino(o: any): o is _159.PoolToGaugeAmino;
                encode(message: _159.PoolToGauge, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.PoolToGauge;
                fromJSON(object: any): _159.PoolToGauge;
                toJSON(message: _159.PoolToGauge): unknown;
                fromPartial(object: {
                    poolId?: bigint;
                    gaugeId?: bigint;
                    duration?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                }): _159.PoolToGauge;
                fromSDK(object: _159.PoolToGaugeSDKType): _159.PoolToGauge;
                toSDK(message: _159.PoolToGauge): _159.PoolToGaugeSDKType;
                fromAmino(object: _159.PoolToGaugeAmino): _159.PoolToGauge;
                toAmino(message: _159.PoolToGauge): _159.PoolToGaugeAmino;
                fromAminoMsg(object: _159.PoolToGaugeAminoMsg): _159.PoolToGauge;
                toAminoMsg(message: _159.PoolToGauge): _159.PoolToGaugeAminoMsg;
                fromProtoMsg(message: _159.PoolToGaugeProtoMsg): _159.PoolToGauge;
                toProto(message: _159.PoolToGauge): Uint8Array;
                toProtoMsg(message: _159.PoolToGauge): _159.PoolToGaugeProtoMsg;
            };
            PoolToGauges: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _159.PoolToGauges;
                isSDK(o: any): o is _159.PoolToGaugesSDKType;
                isAmino(o: any): o is _159.PoolToGaugesAmino;
                encode(message: _159.PoolToGauges, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _159.PoolToGauges;
                fromJSON(object: any): _159.PoolToGauges;
                toJSON(message: _159.PoolToGauges): unknown;
                fromPartial(object: {
                    poolToGauge?: {
                        poolId?: bigint;
                        gaugeId?: bigint;
                        duration?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                    }[];
                }): _159.PoolToGauges;
                fromSDK(object: _159.PoolToGaugesSDKType): _159.PoolToGauges;
                toSDK(message: _159.PoolToGauges): _159.PoolToGaugesSDKType;
                fromAmino(object: _159.PoolToGaugesAmino): _159.PoolToGauges;
                toAmino(message: _159.PoolToGauges): _159.PoolToGaugesAmino;
                fromAminoMsg(object: _159.PoolToGaugesAminoMsg): _159.PoolToGauges;
                toAminoMsg(message: _159.PoolToGauges): _159.PoolToGaugesAminoMsg;
                fromProtoMsg(message: _159.PoolToGaugesProtoMsg): _159.PoolToGauges;
                toProto(message: _159.PoolToGauges): Uint8Array;
                toProtoMsg(message: _159.PoolToGauges): _159.PoolToGaugesProtoMsg;
            };
            ReplacePoolIncentivesProposal: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _158.ReplacePoolIncentivesProposal;
                isSDK(o: any): o is _158.ReplacePoolIncentivesProposalSDKType;
                isAmino(o: any): o is _158.ReplacePoolIncentivesProposalAmino;
                encode(message: _158.ReplacePoolIncentivesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.ReplacePoolIncentivesProposal;
                fromJSON(object: any): _158.ReplacePoolIncentivesProposal;
                toJSON(message: _158.ReplacePoolIncentivesProposal): unknown;
                fromPartial(object: {
                    $typeUrl?: "/osmosis.poolincentives.v1beta1.ReplacePoolIncentivesProposal";
                    title?: string;
                    description?: string;
                    records?: {
                        gaugeId?: bigint;
                        weight?: string;
                    }[];
                }): _158.ReplacePoolIncentivesProposal;
                fromSDK(object: _158.ReplacePoolIncentivesProposalSDKType): _158.ReplacePoolIncentivesProposal;
                toSDK(message: _158.ReplacePoolIncentivesProposal): _158.ReplacePoolIncentivesProposalSDKType;
                fromAmino(object: _158.ReplacePoolIncentivesProposalAmino): _158.ReplacePoolIncentivesProposal;
                toAmino(message: _158.ReplacePoolIncentivesProposal): _158.ReplacePoolIncentivesProposalAmino;
                fromAminoMsg(object: _158.ReplacePoolIncentivesProposalAminoMsg): _158.ReplacePoolIncentivesProposal;
                toAminoMsg(message: _158.ReplacePoolIncentivesProposal): _158.ReplacePoolIncentivesProposalAminoMsg;
                fromProtoMsg(message: _158.ReplacePoolIncentivesProposalProtoMsg): _158.ReplacePoolIncentivesProposal;
                toProto(message: _158.ReplacePoolIncentivesProposal): Uint8Array;
                toProtoMsg(message: _158.ReplacePoolIncentivesProposal): _158.ReplacePoolIncentivesProposalProtoMsg;
            };
            UpdatePoolIncentivesProposal: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _158.UpdatePoolIncentivesProposal;
                isSDK(o: any): o is _158.UpdatePoolIncentivesProposalSDKType;
                isAmino(o: any): o is _158.UpdatePoolIncentivesProposalAmino;
                encode(message: _158.UpdatePoolIncentivesProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _158.UpdatePoolIncentivesProposal;
                fromJSON(object: any): _158.UpdatePoolIncentivesProposal;
                toJSON(message: _158.UpdatePoolIncentivesProposal): unknown;
                fromPartial(object: {
                    $typeUrl?: "/osmosis.poolincentives.v1beta1.UpdatePoolIncentivesProposal";
                    title?: string;
                    description?: string;
                    records?: {
                        gaugeId?: bigint;
                        weight?: string;
                    }[];
                }): _158.UpdatePoolIncentivesProposal;
                fromSDK(object: _158.UpdatePoolIncentivesProposalSDKType): _158.UpdatePoolIncentivesProposal;
                toSDK(message: _158.UpdatePoolIncentivesProposal): _158.UpdatePoolIncentivesProposalSDKType;
                fromAmino(object: _158.UpdatePoolIncentivesProposalAmino): _158.UpdatePoolIncentivesProposal;
                toAmino(message: _158.UpdatePoolIncentivesProposal): _158.UpdatePoolIncentivesProposalAmino;
                fromAminoMsg(object: _158.UpdatePoolIncentivesProposalAminoMsg): _158.UpdatePoolIncentivesProposal;
                toAminoMsg(message: _158.UpdatePoolIncentivesProposal): _158.UpdatePoolIncentivesProposalAminoMsg;
                fromProtoMsg(message: _158.UpdatePoolIncentivesProposalProtoMsg): _158.UpdatePoolIncentivesProposal;
                toProto(message: _158.UpdatePoolIncentivesProposal): Uint8Array;
                toProtoMsg(message: _158.UpdatePoolIncentivesProposal): _158.UpdatePoolIncentivesProposalProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _157.GenesisState;
                isSDK(o: any): o is _157.GenesisStateSDKType;
                isAmino(o: any): o is _157.GenesisStateAmino;
                encode(message: _157.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _157.GenesisState;
                fromJSON(object: any): _157.GenesisState;
                toJSON(message: _157.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        mintedDenom?: string;
                    };
                    lockableDurations?: {
                        seconds?: bigint;
                        nanos?: number;
                    }[];
                    distrInfo?: {
                        totalWeight?: string;
                        records?: {
                            gaugeId?: bigint;
                            weight?: string;
                        }[];
                    };
                    poolToGauges?: {
                        poolToGauge?: {
                            poolId?: bigint;
                            gaugeId?: bigint;
                            duration?: {
                                seconds?: bigint;
                                nanos?: number;
                            };
                        }[];
                    };
                }): _157.GenesisState;
                fromSDK(object: _157.GenesisStateSDKType): _157.GenesisState;
                toSDK(message: _157.GenesisState): _157.GenesisStateSDKType;
                fromAmino(object: _157.GenesisStateAmino): _157.GenesisState;
                toAmino(message: _157.GenesisState): _157.GenesisStateAmino;
                fromAminoMsg(object: _157.GenesisStateAminoMsg): _157.GenesisState;
                toAminoMsg(message: _157.GenesisState): _157.GenesisStateAminoMsg;
                fromProtoMsg(message: _157.GenesisStateProtoMsg): _157.GenesisState;
                toProto(message: _157.GenesisState): Uint8Array;
                toProtoMsg(message: _157.GenesisState): _157.GenesisStateProtoMsg;
            };
        };
    }
    namespace store {
        const v1beta1: {
            Node: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _161.Node;
                isSDK(o: any): o is _161.NodeSDKType;
                isAmino(o: any): o is _161.NodeAmino;
                encode(message: _161.Node, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.Node;
                fromJSON(object: any): _161.Node;
                toJSON(message: _161.Node): unknown;
                fromPartial(object: {
                    children?: {
                        index?: Uint8Array;
                        accumulation?: string;
                    }[];
                }): _161.Node;
                fromSDK(object: _161.NodeSDKType): _161.Node;
                toSDK(message: _161.Node): _161.NodeSDKType;
                fromAmino(object: _161.NodeAmino): _161.Node;
                toAmino(message: _161.Node): _161.NodeAmino;
                fromAminoMsg(object: _161.NodeAminoMsg): _161.Node;
                toAminoMsg(message: _161.Node): _161.NodeAminoMsg;
                fromProtoMsg(message: _161.NodeProtoMsg): _161.Node;
                toProto(message: _161.Node): Uint8Array;
                toProtoMsg(message: _161.Node): _161.NodeProtoMsg;
            };
            Child: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _161.Child;
                isSDK(o: any): o is _161.ChildSDKType;
                isAmino(o: any): o is _161.ChildAmino;
                encode(message: _161.Child, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.Child;
                fromJSON(object: any): _161.Child;
                toJSON(message: _161.Child): unknown;
                fromPartial(object: {
                    index?: Uint8Array;
                    accumulation?: string;
                }): _161.Child;
                fromSDK(object: _161.ChildSDKType): _161.Child;
                toSDK(message: _161.Child): _161.ChildSDKType;
                fromAmino(object: _161.ChildAmino): _161.Child;
                toAmino(message: _161.Child): _161.ChildAmino;
                fromAminoMsg(object: _161.ChildAminoMsg): _161.Child;
                toAminoMsg(message: _161.Child): _161.ChildAminoMsg;
                fromProtoMsg(message: _161.ChildProtoMsg): _161.Child;
                toProto(message: _161.Child): Uint8Array;
                toProtoMsg(message: _161.Child): _161.ChildProtoMsg;
            };
            Leaf: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _161.Leaf;
                isSDK(o: any): o is _161.LeafSDKType;
                isAmino(o: any): o is _161.LeafAmino;
                encode(message: _161.Leaf, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _161.Leaf;
                fromJSON(object: any): _161.Leaf;
                toJSON(message: _161.Leaf): unknown;
                fromPartial(object: {
                    leaf?: {
                        index?: Uint8Array;
                        accumulation?: string;
                    };
                }): _161.Leaf;
                fromSDK(object: _161.LeafSDKType): _161.Leaf;
                toSDK(message: _161.Leaf): _161.LeafSDKType;
                fromAmino(object: _161.LeafAmino): _161.Leaf;
                toAmino(message: _161.Leaf): _161.LeafAmino;
                fromAminoMsg(object: _161.LeafAminoMsg): _161.Leaf;
                toAminoMsg(message: _161.Leaf): _161.LeafAminoMsg;
                fromProtoMsg(message: _161.LeafProtoMsg): _161.Leaf;
                toProto(message: _161.Leaf): Uint8Array;
                toProtoMsg(message: _161.Leaf): _161.LeafProtoMsg;
            };
        };
    }
    const superfluid: {
        MsgClientImpl: typeof _300.MsgClientImpl;
        createClientImpl: (rpc: import("..").TxRpc) => _300.MsgClientImpl;
        QueryClientImpl: typeof _292.QueryClientImpl;
        createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
            useParams: <TData = _164.QueryParamsResponse>({ request, options }: _292.UseParamsQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
            useAssetType: <TData_1 = _164.AssetTypeResponse>({ request, options }: _292.UseAssetTypeQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
            useAllAssets: <TData_2 = _164.AllAssetsResponse>({ request, options }: _292.UseAllAssetsQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
            useAssetMultiplier: <TData_3 = _164.AssetMultiplierResponse>({ request, options }: _292.UseAssetMultiplierQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
            useAllIntermediaryAccounts: <TData_4 = _164.AllIntermediaryAccountsResponse>({ request, options }: _292.UseAllIntermediaryAccountsQuery<TData_4>) => import("@tanstack/react-query").UseQueryResult<TData_4, Error>;
            useConnectedIntermediaryAccount: <TData_5 = _164.ConnectedIntermediaryAccountResponse>({ request, options }: _292.UseConnectedIntermediaryAccountQuery<TData_5>) => import("@tanstack/react-query").UseQueryResult<TData_5, Error>;
            useTotalDelegationByValidatorForDenom: <TData_6 = _164.QueryTotalDelegationByValidatorForDenomResponse>({ request, options }: _292.UseTotalDelegationByValidatorForDenomQuery<TData_6>) => import("@tanstack/react-query").UseQueryResult<TData_6, Error>;
            useTotalSuperfluidDelegations: <TData_7 = _164.TotalSuperfluidDelegationsResponse>({ request, options }: _292.UseTotalSuperfluidDelegationsQuery<TData_7>) => import("@tanstack/react-query").UseQueryResult<TData_7, Error>;
            useSuperfluidDelegationAmount: <TData_8 = _164.SuperfluidDelegationAmountResponse>({ request, options }: _292.UseSuperfluidDelegationAmountQuery<TData_8>) => import("@tanstack/react-query").UseQueryResult<TData_8, Error>;
            useSuperfluidDelegationsByDelegator: <TData_9 = _164.SuperfluidDelegationsByDelegatorResponse>({ request, options }: _292.UseSuperfluidDelegationsByDelegatorQuery<TData_9>) => import("@tanstack/react-query").UseQueryResult<TData_9, Error>;
            useSuperfluidUndelegationsByDelegator: <TData_10 = _164.SuperfluidUndelegationsByDelegatorResponse>({ request, options }: _292.UseSuperfluidUndelegationsByDelegatorQuery<TData_10>) => import("@tanstack/react-query").UseQueryResult<TData_10, Error>;
            useSuperfluidDelegationsByValidatorDenom: <TData_11 = _164.SuperfluidDelegationsByValidatorDenomResponse>({ request, options }: _292.UseSuperfluidDelegationsByValidatorDenomQuery<TData_11>) => import("@tanstack/react-query").UseQueryResult<TData_11, Error>;
            useEstimateSuperfluidDelegatedAmountByValidatorDenom: <TData_12 = _164.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>({ request, options }: _292.UseEstimateSuperfluidDelegatedAmountByValidatorDenomQuery<TData_12>) => import("@tanstack/react-query").UseQueryResult<TData_12, Error>;
            useTotalDelegationByDelegator: <TData_13 = _164.QueryTotalDelegationByDelegatorResponse>({ request, options }: _292.UseTotalDelegationByDelegatorQuery<TData_13>) => import("@tanstack/react-query").UseQueryResult<TData_13, Error>;
            useUnpoolWhitelist: <TData_14 = _164.QueryUnpoolWhitelistResponse>({ request, options }: _292.UseUnpoolWhitelistQuery<TData_14>) => import("@tanstack/react-query").UseQueryResult<TData_14, Error>;
        };
        createRpcQueryMobxStores: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
            QueryParamsStore: {
                new (): {
                    store: import("..").QueryStore<_164.QueryParamsRequest, _164.QueryParamsResponse>;
                    params(request: _164.QueryParamsRequest): import("..").MobxResponse<_164.QueryParamsResponse>;
                };
            };
            QueryAssetTypeStore: {
                new (): {
                    store: import("..").QueryStore<_164.AssetTypeRequest, _164.AssetTypeResponse>;
                    assetType(request: _164.AssetTypeRequest): import("..").MobxResponse<_164.AssetTypeResponse>;
                };
            };
            QueryAllAssetsStore: {
                new (): {
                    store: import("..").QueryStore<_164.AllAssetsRequest, _164.AllAssetsResponse>;
                    allAssets(request: _164.AllAssetsRequest): import("..").MobxResponse<_164.AllAssetsResponse>;
                };
            };
            QueryAssetMultiplierStore: {
                new (): {
                    store: import("..").QueryStore<_164.AssetMultiplierRequest, _164.AssetMultiplierResponse>;
                    assetMultiplier(request: _164.AssetMultiplierRequest): import("..").MobxResponse<_164.AssetMultiplierResponse>;
                };
            };
            QueryAllIntermediaryAccountsStore: {
                new (): {
                    store: import("..").QueryStore<_164.AllIntermediaryAccountsRequest, _164.AllIntermediaryAccountsResponse>;
                    allIntermediaryAccounts(request: _164.AllIntermediaryAccountsRequest): import("..").MobxResponse<_164.AllIntermediaryAccountsResponse>;
                };
            };
            QueryConnectedIntermediaryAccountStore: {
                new (): {
                    store: import("..").QueryStore<_164.ConnectedIntermediaryAccountRequest, _164.ConnectedIntermediaryAccountResponse>;
                    connectedIntermediaryAccount(request: _164.ConnectedIntermediaryAccountRequest): import("..").MobxResponse<_164.ConnectedIntermediaryAccountResponse>;
                };
            };
            QueryTotalDelegationByValidatorForDenomStore: {
                new (): {
                    store: import("..").QueryStore<_164.QueryTotalDelegationByValidatorForDenomRequest, _164.QueryTotalDelegationByValidatorForDenomResponse>;
                    totalDelegationByValidatorForDenom(request: _164.QueryTotalDelegationByValidatorForDenomRequest): import("..").MobxResponse<_164.QueryTotalDelegationByValidatorForDenomResponse>;
                };
            };
            QueryTotalSuperfluidDelegationsStore: {
                new (): {
                    store: import("..").QueryStore<_164.TotalSuperfluidDelegationsRequest, _164.TotalSuperfluidDelegationsResponse>;
                    totalSuperfluidDelegations(request: _164.TotalSuperfluidDelegationsRequest): import("..").MobxResponse<_164.TotalSuperfluidDelegationsResponse>;
                };
            };
            QuerySuperfluidDelegationAmountStore: {
                new (): {
                    store: import("..").QueryStore<_164.SuperfluidDelegationAmountRequest, _164.SuperfluidDelegationAmountResponse>;
                    superfluidDelegationAmount(request: _164.SuperfluidDelegationAmountRequest): import("..").MobxResponse<_164.SuperfluidDelegationAmountResponse>;
                };
            };
            QuerySuperfluidDelegationsByDelegatorStore: {
                new (): {
                    store: import("..").QueryStore<_164.SuperfluidDelegationsByDelegatorRequest, _164.SuperfluidDelegationsByDelegatorResponse>;
                    superfluidDelegationsByDelegator(request: _164.SuperfluidDelegationsByDelegatorRequest): import("..").MobxResponse<_164.SuperfluidDelegationsByDelegatorResponse>;
                };
            };
            QuerySuperfluidUndelegationsByDelegatorStore: {
                new (): {
                    store: import("..").QueryStore<_164.SuperfluidUndelegationsByDelegatorRequest, _164.SuperfluidUndelegationsByDelegatorResponse>;
                    superfluidUndelegationsByDelegator(request: _164.SuperfluidUndelegationsByDelegatorRequest): import("..").MobxResponse<_164.SuperfluidUndelegationsByDelegatorResponse>;
                };
            };
            QuerySuperfluidDelegationsByValidatorDenomStore: {
                new (): {
                    store: import("..").QueryStore<_164.SuperfluidDelegationsByValidatorDenomRequest, _164.SuperfluidDelegationsByValidatorDenomResponse>;
                    superfluidDelegationsByValidatorDenom(request: _164.SuperfluidDelegationsByValidatorDenomRequest): import("..").MobxResponse<_164.SuperfluidDelegationsByValidatorDenomResponse>;
                };
            };
            QueryEstimateSuperfluidDelegatedAmountByValidatorDenomStore: {
                new (): {
                    store: import("..").QueryStore<_164.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, _164.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>;
                    estimateSuperfluidDelegatedAmountByValidatorDenom(request: _164.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): import("..").MobxResponse<_164.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse>;
                };
            };
            QueryTotalDelegationByDelegatorStore: {
                new (): {
                    store: import("..").QueryStore<_164.QueryTotalDelegationByDelegatorRequest, _164.QueryTotalDelegationByDelegatorResponse>;
                    totalDelegationByDelegator(request: _164.QueryTotalDelegationByDelegatorRequest): import("..").MobxResponse<_164.QueryTotalDelegationByDelegatorResponse>;
                };
            };
            QueryUnpoolWhitelistStore: {
                new (): {
                    store: import("..").QueryStore<_164.QueryUnpoolWhitelistRequest, _164.QueryUnpoolWhitelistResponse>;
                    unpoolWhitelist(request: _164.QueryUnpoolWhitelistRequest): import("..").MobxResponse<_164.QueryUnpoolWhitelistResponse>;
                };
            };
        };
        registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
        load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
        MessageComposer: {
            encoded: {
                superfluidDelegate(value: _166.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUndelegate(value: _166.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                superfluidUnbondLock(value: _166.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                lockAndSuperfluidDelegate(value: _166.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: Uint8Array;
                };
                unPoolWhitelistedPool(value: _166.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: Uint8Array;
                };
            };
            withTypeUrl: {
                superfluidDelegate(value: _166.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: _166.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: _166.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: _166.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: _166.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: _166.MsgSuperfluidUnbondLock;
                };
                lockAndSuperfluidDelegate(value: _166.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _166.MsgLockAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: _166.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: _166.MsgUnPoolWhitelistedPool;
                };
            };
            toJSON: {
                superfluidDelegate(value: _166.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: unknown;
                };
                superfluidUndelegate(value: _166.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: unknown;
                };
                superfluidUnbondLock(value: _166.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: unknown;
                };
                lockAndSuperfluidDelegate(value: _166.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: unknown;
                };
                unPoolWhitelistedPool(value: _166.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: unknown;
                };
            };
            fromJSON: {
                superfluidDelegate(value: any): {
                    typeUrl: string;
                    value: _166.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: any): {
                    typeUrl: string;
                    value: _166.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: any): {
                    typeUrl: string;
                    value: _166.MsgSuperfluidUnbondLock;
                };
                lockAndSuperfluidDelegate(value: any): {
                    typeUrl: string;
                    value: _166.MsgLockAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: any): {
                    typeUrl: string;
                    value: _166.MsgUnPoolWhitelistedPool;
                };
            };
            fromPartial: {
                superfluidDelegate(value: _166.MsgSuperfluidDelegate): {
                    typeUrl: string;
                    value: _166.MsgSuperfluidDelegate;
                };
                superfluidUndelegate(value: _166.MsgSuperfluidUndelegate): {
                    typeUrl: string;
                    value: _166.MsgSuperfluidUndelegate;
                };
                superfluidUnbondLock(value: _166.MsgSuperfluidUnbondLock): {
                    typeUrl: string;
                    value: _166.MsgSuperfluidUnbondLock;
                };
                lockAndSuperfluidDelegate(value: _166.MsgLockAndSuperfluidDelegate): {
                    typeUrl: string;
                    value: _166.MsgLockAndSuperfluidDelegate;
                };
                unPoolWhitelistedPool(value: _166.MsgUnPoolWhitelistedPool): {
                    typeUrl: string;
                    value: _166.MsgUnPoolWhitelistedPool;
                };
            };
        };
        AminoConverter: {
            "/osmosis.superfluid.MsgSuperfluidDelegate": {
                aminoType: string;
                toAmino: (message: _166.MsgSuperfluidDelegate) => _166.MsgSuperfluidDelegateAmino;
                fromAmino: (object: _166.MsgSuperfluidDelegateAmino) => _166.MsgSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUndelegate": {
                aminoType: string;
                toAmino: (message: _166.MsgSuperfluidUndelegate) => _166.MsgSuperfluidUndelegateAmino;
                fromAmino: (object: _166.MsgSuperfluidUndelegateAmino) => _166.MsgSuperfluidUndelegate;
            };
            "/osmosis.superfluid.MsgSuperfluidUnbondLock": {
                aminoType: string;
                toAmino: (message: _166.MsgSuperfluidUnbondLock) => _166.MsgSuperfluidUnbondLockAmino;
                fromAmino: (object: _166.MsgSuperfluidUnbondLockAmino) => _166.MsgSuperfluidUnbondLock;
            };
            "/osmosis.superfluid.MsgLockAndSuperfluidDelegate": {
                aminoType: string;
                toAmino: (message: _166.MsgLockAndSuperfluidDelegate) => _166.MsgLockAndSuperfluidDelegateAmino;
                fromAmino: (object: _166.MsgLockAndSuperfluidDelegateAmino) => _166.MsgLockAndSuperfluidDelegate;
            };
            "/osmosis.superfluid.MsgUnPoolWhitelistedPool": {
                aminoType: string;
                toAmino: (message: _166.MsgUnPoolWhitelistedPool) => _166.MsgUnPoolWhitelistedPoolAmino;
                fromAmino: (object: _166.MsgUnPoolWhitelistedPoolAmino) => _166.MsgUnPoolWhitelistedPool;
            };
        };
        MsgSuperfluidDelegate: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _166.MsgSuperfluidDelegate;
            isSDK(o: any): o is _166.MsgSuperfluidDelegateSDKType;
            isAmino(o: any): o is _166.MsgSuperfluidDelegateAmino;
            encode(message: _166.MsgSuperfluidDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.MsgSuperfluidDelegate;
            fromJSON(object: any): _166.MsgSuperfluidDelegate;
            toJSON(message: _166.MsgSuperfluidDelegate): unknown;
            fromPartial(object: {
                sender?: string;
                lockId?: bigint;
                valAddr?: string;
            }): _166.MsgSuperfluidDelegate;
            fromSDK(object: _166.MsgSuperfluidDelegateSDKType): _166.MsgSuperfluidDelegate;
            toSDK(message: _166.MsgSuperfluidDelegate): _166.MsgSuperfluidDelegateSDKType;
            fromAmino(object: _166.MsgSuperfluidDelegateAmino): _166.MsgSuperfluidDelegate;
            toAmino(message: _166.MsgSuperfluidDelegate): _166.MsgSuperfluidDelegateAmino;
            fromAminoMsg(object: _166.MsgSuperfluidDelegateAminoMsg): _166.MsgSuperfluidDelegate;
            toAminoMsg(message: _166.MsgSuperfluidDelegate): _166.MsgSuperfluidDelegateAminoMsg;
            fromProtoMsg(message: _166.MsgSuperfluidDelegateProtoMsg): _166.MsgSuperfluidDelegate;
            toProto(message: _166.MsgSuperfluidDelegate): Uint8Array;
            toProtoMsg(message: _166.MsgSuperfluidDelegate): _166.MsgSuperfluidDelegateProtoMsg;
        };
        MsgSuperfluidDelegateResponse: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _166.MsgSuperfluidDelegateResponse;
            isSDK(o: any): o is _166.MsgSuperfluidDelegateResponseSDKType;
            isAmino(o: any): o is _166.MsgSuperfluidDelegateResponseAmino;
            encode(_: _166.MsgSuperfluidDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.MsgSuperfluidDelegateResponse;
            fromJSON(_: any): _166.MsgSuperfluidDelegateResponse;
            toJSON(_: _166.MsgSuperfluidDelegateResponse): unknown;
            fromPartial(_: {}): _166.MsgSuperfluidDelegateResponse;
            fromSDK(_: _166.MsgSuperfluidDelegateResponseSDKType): _166.MsgSuperfluidDelegateResponse;
            toSDK(_: _166.MsgSuperfluidDelegateResponse): _166.MsgSuperfluidDelegateResponseSDKType;
            fromAmino(_: _166.MsgSuperfluidDelegateResponseAmino): _166.MsgSuperfluidDelegateResponse;
            toAmino(_: _166.MsgSuperfluidDelegateResponse): _166.MsgSuperfluidDelegateResponseAmino;
            fromAminoMsg(object: _166.MsgSuperfluidDelegateResponseAminoMsg): _166.MsgSuperfluidDelegateResponse;
            toAminoMsg(message: _166.MsgSuperfluidDelegateResponse): _166.MsgSuperfluidDelegateResponseAminoMsg;
            fromProtoMsg(message: _166.MsgSuperfluidDelegateResponseProtoMsg): _166.MsgSuperfluidDelegateResponse;
            toProto(message: _166.MsgSuperfluidDelegateResponse): Uint8Array;
            toProtoMsg(message: _166.MsgSuperfluidDelegateResponse): _166.MsgSuperfluidDelegateResponseProtoMsg;
        };
        MsgSuperfluidUndelegate: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _166.MsgSuperfluidUndelegate;
            isSDK(o: any): o is _166.MsgSuperfluidUndelegateSDKType;
            isAmino(o: any): o is _166.MsgSuperfluidUndelegateAmino;
            encode(message: _166.MsgSuperfluidUndelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.MsgSuperfluidUndelegate;
            fromJSON(object: any): _166.MsgSuperfluidUndelegate;
            toJSON(message: _166.MsgSuperfluidUndelegate): unknown;
            fromPartial(object: {
                sender?: string;
                lockId?: bigint;
            }): _166.MsgSuperfluidUndelegate;
            fromSDK(object: _166.MsgSuperfluidUndelegateSDKType): _166.MsgSuperfluidUndelegate;
            toSDK(message: _166.MsgSuperfluidUndelegate): _166.MsgSuperfluidUndelegateSDKType;
            fromAmino(object: _166.MsgSuperfluidUndelegateAmino): _166.MsgSuperfluidUndelegate;
            toAmino(message: _166.MsgSuperfluidUndelegate): _166.MsgSuperfluidUndelegateAmino;
            fromAminoMsg(object: _166.MsgSuperfluidUndelegateAminoMsg): _166.MsgSuperfluidUndelegate;
            toAminoMsg(message: _166.MsgSuperfluidUndelegate): _166.MsgSuperfluidUndelegateAminoMsg;
            fromProtoMsg(message: _166.MsgSuperfluidUndelegateProtoMsg): _166.MsgSuperfluidUndelegate;
            toProto(message: _166.MsgSuperfluidUndelegate): Uint8Array;
            toProtoMsg(message: _166.MsgSuperfluidUndelegate): _166.MsgSuperfluidUndelegateProtoMsg;
        };
        MsgSuperfluidUndelegateResponse: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _166.MsgSuperfluidUndelegateResponse;
            isSDK(o: any): o is _166.MsgSuperfluidUndelegateResponseSDKType;
            isAmino(o: any): o is _166.MsgSuperfluidUndelegateResponseAmino;
            encode(_: _166.MsgSuperfluidUndelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.MsgSuperfluidUndelegateResponse;
            fromJSON(_: any): _166.MsgSuperfluidUndelegateResponse;
            toJSON(_: _166.MsgSuperfluidUndelegateResponse): unknown;
            fromPartial(_: {}): _166.MsgSuperfluidUndelegateResponse;
            fromSDK(_: _166.MsgSuperfluidUndelegateResponseSDKType): _166.MsgSuperfluidUndelegateResponse;
            toSDK(_: _166.MsgSuperfluidUndelegateResponse): _166.MsgSuperfluidUndelegateResponseSDKType;
            fromAmino(_: _166.MsgSuperfluidUndelegateResponseAmino): _166.MsgSuperfluidUndelegateResponse;
            toAmino(_: _166.MsgSuperfluidUndelegateResponse): _166.MsgSuperfluidUndelegateResponseAmino;
            fromAminoMsg(object: _166.MsgSuperfluidUndelegateResponseAminoMsg): _166.MsgSuperfluidUndelegateResponse;
            toAminoMsg(message: _166.MsgSuperfluidUndelegateResponse): _166.MsgSuperfluidUndelegateResponseAminoMsg;
            fromProtoMsg(message: _166.MsgSuperfluidUndelegateResponseProtoMsg): _166.MsgSuperfluidUndelegateResponse;
            toProto(message: _166.MsgSuperfluidUndelegateResponse): Uint8Array;
            toProtoMsg(message: _166.MsgSuperfluidUndelegateResponse): _166.MsgSuperfluidUndelegateResponseProtoMsg;
        };
        MsgSuperfluidUnbondLock: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _166.MsgSuperfluidUnbondLock;
            isSDK(o: any): o is _166.MsgSuperfluidUnbondLockSDKType;
            isAmino(o: any): o is _166.MsgSuperfluidUnbondLockAmino;
            encode(message: _166.MsgSuperfluidUnbondLock, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.MsgSuperfluidUnbondLock;
            fromJSON(object: any): _166.MsgSuperfluidUnbondLock;
            toJSON(message: _166.MsgSuperfluidUnbondLock): unknown;
            fromPartial(object: {
                sender?: string;
                lockId?: bigint;
            }): _166.MsgSuperfluidUnbondLock;
            fromSDK(object: _166.MsgSuperfluidUnbondLockSDKType): _166.MsgSuperfluidUnbondLock;
            toSDK(message: _166.MsgSuperfluidUnbondLock): _166.MsgSuperfluidUnbondLockSDKType;
            fromAmino(object: _166.MsgSuperfluidUnbondLockAmino): _166.MsgSuperfluidUnbondLock;
            toAmino(message: _166.MsgSuperfluidUnbondLock): _166.MsgSuperfluidUnbondLockAmino;
            fromAminoMsg(object: _166.MsgSuperfluidUnbondLockAminoMsg): _166.MsgSuperfluidUnbondLock;
            toAminoMsg(message: _166.MsgSuperfluidUnbondLock): _166.MsgSuperfluidUnbondLockAminoMsg;
            fromProtoMsg(message: _166.MsgSuperfluidUnbondLockProtoMsg): _166.MsgSuperfluidUnbondLock;
            toProto(message: _166.MsgSuperfluidUnbondLock): Uint8Array;
            toProtoMsg(message: _166.MsgSuperfluidUnbondLock): _166.MsgSuperfluidUnbondLockProtoMsg;
        };
        MsgSuperfluidUnbondLockResponse: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _166.MsgSuperfluidUnbondLockResponse;
            isSDK(o: any): o is _166.MsgSuperfluidUnbondLockResponseSDKType;
            isAmino(o: any): o is _166.MsgSuperfluidUnbondLockResponseAmino;
            encode(_: _166.MsgSuperfluidUnbondLockResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.MsgSuperfluidUnbondLockResponse;
            fromJSON(_: any): _166.MsgSuperfluidUnbondLockResponse;
            toJSON(_: _166.MsgSuperfluidUnbondLockResponse): unknown;
            fromPartial(_: {}): _166.MsgSuperfluidUnbondLockResponse;
            fromSDK(_: _166.MsgSuperfluidUnbondLockResponseSDKType): _166.MsgSuperfluidUnbondLockResponse;
            toSDK(_: _166.MsgSuperfluidUnbondLockResponse): _166.MsgSuperfluidUnbondLockResponseSDKType;
            fromAmino(_: _166.MsgSuperfluidUnbondLockResponseAmino): _166.MsgSuperfluidUnbondLockResponse;
            toAmino(_: _166.MsgSuperfluidUnbondLockResponse): _166.MsgSuperfluidUnbondLockResponseAmino;
            fromAminoMsg(object: _166.MsgSuperfluidUnbondLockResponseAminoMsg): _166.MsgSuperfluidUnbondLockResponse;
            toAminoMsg(message: _166.MsgSuperfluidUnbondLockResponse): _166.MsgSuperfluidUnbondLockResponseAminoMsg;
            fromProtoMsg(message: _166.MsgSuperfluidUnbondLockResponseProtoMsg): _166.MsgSuperfluidUnbondLockResponse;
            toProto(message: _166.MsgSuperfluidUnbondLockResponse): Uint8Array;
            toProtoMsg(message: _166.MsgSuperfluidUnbondLockResponse): _166.MsgSuperfluidUnbondLockResponseProtoMsg;
        };
        MsgLockAndSuperfluidDelegate: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _166.MsgLockAndSuperfluidDelegate;
            isSDK(o: any): o is _166.MsgLockAndSuperfluidDelegateSDKType;
            isAmino(o: any): o is _166.MsgLockAndSuperfluidDelegateAmino;
            encode(message: _166.MsgLockAndSuperfluidDelegate, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.MsgLockAndSuperfluidDelegate;
            fromJSON(object: any): _166.MsgLockAndSuperfluidDelegate;
            toJSON(message: _166.MsgLockAndSuperfluidDelegate): unknown;
            fromPartial(object: {
                sender?: string;
                coins?: {
                    denom?: string;
                    amount?: string;
                }[];
                valAddr?: string;
            }): _166.MsgLockAndSuperfluidDelegate;
            fromSDK(object: _166.MsgLockAndSuperfluidDelegateSDKType): _166.MsgLockAndSuperfluidDelegate;
            toSDK(message: _166.MsgLockAndSuperfluidDelegate): _166.MsgLockAndSuperfluidDelegateSDKType;
            fromAmino(object: _166.MsgLockAndSuperfluidDelegateAmino): _166.MsgLockAndSuperfluidDelegate;
            toAmino(message: _166.MsgLockAndSuperfluidDelegate): _166.MsgLockAndSuperfluidDelegateAmino;
            fromAminoMsg(object: _166.MsgLockAndSuperfluidDelegateAminoMsg): _166.MsgLockAndSuperfluidDelegate;
            toAminoMsg(message: _166.MsgLockAndSuperfluidDelegate): _166.MsgLockAndSuperfluidDelegateAminoMsg;
            fromProtoMsg(message: _166.MsgLockAndSuperfluidDelegateProtoMsg): _166.MsgLockAndSuperfluidDelegate;
            toProto(message: _166.MsgLockAndSuperfluidDelegate): Uint8Array;
            toProtoMsg(message: _166.MsgLockAndSuperfluidDelegate): _166.MsgLockAndSuperfluidDelegateProtoMsg;
        };
        MsgLockAndSuperfluidDelegateResponse: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _166.MsgLockAndSuperfluidDelegateResponse;
            isSDK(o: any): o is _166.MsgLockAndSuperfluidDelegateResponseSDKType;
            isAmino(o: any): o is _166.MsgLockAndSuperfluidDelegateResponseAmino;
            encode(message: _166.MsgLockAndSuperfluidDelegateResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.MsgLockAndSuperfluidDelegateResponse;
            fromJSON(object: any): _166.MsgLockAndSuperfluidDelegateResponse;
            toJSON(message: _166.MsgLockAndSuperfluidDelegateResponse): unknown;
            fromPartial(object: {
                ID?: bigint;
            }): _166.MsgLockAndSuperfluidDelegateResponse;
            fromSDK(object: _166.MsgLockAndSuperfluidDelegateResponseSDKType): _166.MsgLockAndSuperfluidDelegateResponse;
            toSDK(message: _166.MsgLockAndSuperfluidDelegateResponse): _166.MsgLockAndSuperfluidDelegateResponseSDKType;
            fromAmino(object: _166.MsgLockAndSuperfluidDelegateResponseAmino): _166.MsgLockAndSuperfluidDelegateResponse;
            toAmino(message: _166.MsgLockAndSuperfluidDelegateResponse): _166.MsgLockAndSuperfluidDelegateResponseAmino;
            fromAminoMsg(object: _166.MsgLockAndSuperfluidDelegateResponseAminoMsg): _166.MsgLockAndSuperfluidDelegateResponse;
            toAminoMsg(message: _166.MsgLockAndSuperfluidDelegateResponse): _166.MsgLockAndSuperfluidDelegateResponseAminoMsg;
            fromProtoMsg(message: _166.MsgLockAndSuperfluidDelegateResponseProtoMsg): _166.MsgLockAndSuperfluidDelegateResponse;
            toProto(message: _166.MsgLockAndSuperfluidDelegateResponse): Uint8Array;
            toProtoMsg(message: _166.MsgLockAndSuperfluidDelegateResponse): _166.MsgLockAndSuperfluidDelegateResponseProtoMsg;
        };
        MsgUnPoolWhitelistedPool: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _166.MsgUnPoolWhitelistedPool;
            isSDK(o: any): o is _166.MsgUnPoolWhitelistedPoolSDKType;
            isAmino(o: any): o is _166.MsgUnPoolWhitelistedPoolAmino;
            encode(message: _166.MsgUnPoolWhitelistedPool, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.MsgUnPoolWhitelistedPool;
            fromJSON(object: any): _166.MsgUnPoolWhitelistedPool;
            toJSON(message: _166.MsgUnPoolWhitelistedPool): unknown;
            fromPartial(object: {
                sender?: string;
                poolId?: bigint;
            }): _166.MsgUnPoolWhitelistedPool;
            fromSDK(object: _166.MsgUnPoolWhitelistedPoolSDKType): _166.MsgUnPoolWhitelistedPool;
            toSDK(message: _166.MsgUnPoolWhitelistedPool): _166.MsgUnPoolWhitelistedPoolSDKType;
            fromAmino(object: _166.MsgUnPoolWhitelistedPoolAmino): _166.MsgUnPoolWhitelistedPool;
            toAmino(message: _166.MsgUnPoolWhitelistedPool): _166.MsgUnPoolWhitelistedPoolAmino;
            fromAminoMsg(object: _166.MsgUnPoolWhitelistedPoolAminoMsg): _166.MsgUnPoolWhitelistedPool;
            toAminoMsg(message: _166.MsgUnPoolWhitelistedPool): _166.MsgUnPoolWhitelistedPoolAminoMsg;
            fromProtoMsg(message: _166.MsgUnPoolWhitelistedPoolProtoMsg): _166.MsgUnPoolWhitelistedPool;
            toProto(message: _166.MsgUnPoolWhitelistedPool): Uint8Array;
            toProtoMsg(message: _166.MsgUnPoolWhitelistedPool): _166.MsgUnPoolWhitelistedPoolProtoMsg;
        };
        MsgUnPoolWhitelistedPoolResponse: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _166.MsgUnPoolWhitelistedPoolResponse;
            isSDK(o: any): o is _166.MsgUnPoolWhitelistedPoolResponseSDKType;
            isAmino(o: any): o is _166.MsgUnPoolWhitelistedPoolResponseAmino;
            encode(message: _166.MsgUnPoolWhitelistedPoolResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _166.MsgUnPoolWhitelistedPoolResponse;
            fromJSON(object: any): _166.MsgUnPoolWhitelistedPoolResponse;
            toJSON(message: _166.MsgUnPoolWhitelistedPoolResponse): unknown;
            fromPartial(object: {
                exitedLockIds?: bigint[];
            }): _166.MsgUnPoolWhitelistedPoolResponse;
            fromSDK(object: _166.MsgUnPoolWhitelistedPoolResponseSDKType): _166.MsgUnPoolWhitelistedPoolResponse;
            toSDK(message: _166.MsgUnPoolWhitelistedPoolResponse): _166.MsgUnPoolWhitelistedPoolResponseSDKType;
            fromAmino(object: _166.MsgUnPoolWhitelistedPoolResponseAmino): _166.MsgUnPoolWhitelistedPoolResponse;
            toAmino(message: _166.MsgUnPoolWhitelistedPoolResponse): _166.MsgUnPoolWhitelistedPoolResponseAmino;
            fromAminoMsg(object: _166.MsgUnPoolWhitelistedPoolResponseAminoMsg): _166.MsgUnPoolWhitelistedPoolResponse;
            toAminoMsg(message: _166.MsgUnPoolWhitelistedPoolResponse): _166.MsgUnPoolWhitelistedPoolResponseAminoMsg;
            fromProtoMsg(message: _166.MsgUnPoolWhitelistedPoolResponseProtoMsg): _166.MsgUnPoolWhitelistedPoolResponse;
            toProto(message: _166.MsgUnPoolWhitelistedPoolResponse): Uint8Array;
            toProtoMsg(message: _166.MsgUnPoolWhitelistedPoolResponse): _166.MsgUnPoolWhitelistedPoolResponseProtoMsg;
        };
        superfluidAssetTypeFromJSON(object: any): _165.SuperfluidAssetType;
        superfluidAssetTypeToJSON(object: _165.SuperfluidAssetType): string;
        SuperfluidAssetType: typeof _165.SuperfluidAssetType;
        SuperfluidAssetTypeSDKType: typeof _165.SuperfluidAssetType;
        SuperfluidAssetTypeAmino: typeof _165.SuperfluidAssetType;
        SuperfluidAsset: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _165.SuperfluidAsset;
            isSDK(o: any): o is _165.SuperfluidAssetSDKType;
            isAmino(o: any): o is _165.SuperfluidAssetAmino;
            encode(message: _165.SuperfluidAsset, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.SuperfluidAsset;
            fromJSON(object: any): _165.SuperfluidAsset;
            toJSON(message: _165.SuperfluidAsset): unknown;
            fromPartial(object: {
                denom?: string;
                assetType?: _165.SuperfluidAssetType;
            }): _165.SuperfluidAsset;
            fromSDK(object: _165.SuperfluidAssetSDKType): _165.SuperfluidAsset;
            toSDK(message: _165.SuperfluidAsset): _165.SuperfluidAssetSDKType;
            fromAmino(object: _165.SuperfluidAssetAmino): _165.SuperfluidAsset;
            toAmino(message: _165.SuperfluidAsset): _165.SuperfluidAssetAmino;
            fromAminoMsg(object: _165.SuperfluidAssetAminoMsg): _165.SuperfluidAsset;
            toAminoMsg(message: _165.SuperfluidAsset): _165.SuperfluidAssetAminoMsg;
            fromProtoMsg(message: _165.SuperfluidAssetProtoMsg): _165.SuperfluidAsset;
            toProto(message: _165.SuperfluidAsset): Uint8Array;
            toProtoMsg(message: _165.SuperfluidAsset): _165.SuperfluidAssetProtoMsg;
        };
        SuperfluidIntermediaryAccount: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _165.SuperfluidIntermediaryAccount;
            isSDK(o: any): o is _165.SuperfluidIntermediaryAccountSDKType;
            isAmino(o: any): o is _165.SuperfluidIntermediaryAccountAmino;
            encode(message: _165.SuperfluidIntermediaryAccount, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.SuperfluidIntermediaryAccount;
            fromJSON(object: any): _165.SuperfluidIntermediaryAccount;
            toJSON(message: _165.SuperfluidIntermediaryAccount): unknown;
            fromPartial(object: {
                denom?: string;
                valAddr?: string;
                gaugeId?: bigint;
            }): _165.SuperfluidIntermediaryAccount;
            fromSDK(object: _165.SuperfluidIntermediaryAccountSDKType): _165.SuperfluidIntermediaryAccount;
            toSDK(message: _165.SuperfluidIntermediaryAccount): _165.SuperfluidIntermediaryAccountSDKType;
            fromAmino(object: _165.SuperfluidIntermediaryAccountAmino): _165.SuperfluidIntermediaryAccount;
            toAmino(message: _165.SuperfluidIntermediaryAccount): _165.SuperfluidIntermediaryAccountAmino;
            fromAminoMsg(object: _165.SuperfluidIntermediaryAccountAminoMsg): _165.SuperfluidIntermediaryAccount;
            toAminoMsg(message: _165.SuperfluidIntermediaryAccount): _165.SuperfluidIntermediaryAccountAminoMsg;
            fromProtoMsg(message: _165.SuperfluidIntermediaryAccountProtoMsg): _165.SuperfluidIntermediaryAccount;
            toProto(message: _165.SuperfluidIntermediaryAccount): Uint8Array;
            toProtoMsg(message: _165.SuperfluidIntermediaryAccount): _165.SuperfluidIntermediaryAccountProtoMsg;
        };
        OsmoEquivalentMultiplierRecord: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _165.OsmoEquivalentMultiplierRecord;
            isSDK(o: any): o is _165.OsmoEquivalentMultiplierRecordSDKType;
            isAmino(o: any): o is _165.OsmoEquivalentMultiplierRecordAmino;
            encode(message: _165.OsmoEquivalentMultiplierRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.OsmoEquivalentMultiplierRecord;
            fromJSON(object: any): _165.OsmoEquivalentMultiplierRecord;
            toJSON(message: _165.OsmoEquivalentMultiplierRecord): unknown;
            fromPartial(object: {
                epochNumber?: bigint;
                denom?: string;
                multiplier?: string;
            }): _165.OsmoEquivalentMultiplierRecord;
            fromSDK(object: _165.OsmoEquivalentMultiplierRecordSDKType): _165.OsmoEquivalentMultiplierRecord;
            toSDK(message: _165.OsmoEquivalentMultiplierRecord): _165.OsmoEquivalentMultiplierRecordSDKType;
            fromAmino(object: _165.OsmoEquivalentMultiplierRecordAmino): _165.OsmoEquivalentMultiplierRecord;
            toAmino(message: _165.OsmoEquivalentMultiplierRecord): _165.OsmoEquivalentMultiplierRecordAmino;
            fromAminoMsg(object: _165.OsmoEquivalentMultiplierRecordAminoMsg): _165.OsmoEquivalentMultiplierRecord;
            toAminoMsg(message: _165.OsmoEquivalentMultiplierRecord): _165.OsmoEquivalentMultiplierRecordAminoMsg;
            fromProtoMsg(message: _165.OsmoEquivalentMultiplierRecordProtoMsg): _165.OsmoEquivalentMultiplierRecord;
            toProto(message: _165.OsmoEquivalentMultiplierRecord): Uint8Array;
            toProtoMsg(message: _165.OsmoEquivalentMultiplierRecord): _165.OsmoEquivalentMultiplierRecordProtoMsg;
        };
        SuperfluidDelegationRecord: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _165.SuperfluidDelegationRecord;
            isSDK(o: any): o is _165.SuperfluidDelegationRecordSDKType;
            isAmino(o: any): o is _165.SuperfluidDelegationRecordAmino;
            encode(message: _165.SuperfluidDelegationRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.SuperfluidDelegationRecord;
            fromJSON(object: any): _165.SuperfluidDelegationRecord;
            toJSON(message: _165.SuperfluidDelegationRecord): unknown;
            fromPartial(object: {
                delegatorAddress?: string;
                validatorAddress?: string;
                delegationAmount?: {
                    denom?: string;
                    amount?: string;
                };
                equivalentStakedAmount?: {
                    denom?: string;
                    amount?: string;
                };
            }): _165.SuperfluidDelegationRecord;
            fromSDK(object: _165.SuperfluidDelegationRecordSDKType): _165.SuperfluidDelegationRecord;
            toSDK(message: _165.SuperfluidDelegationRecord): _165.SuperfluidDelegationRecordSDKType;
            fromAmino(object: _165.SuperfluidDelegationRecordAmino): _165.SuperfluidDelegationRecord;
            toAmino(message: _165.SuperfluidDelegationRecord): _165.SuperfluidDelegationRecordAmino;
            fromAminoMsg(object: _165.SuperfluidDelegationRecordAminoMsg): _165.SuperfluidDelegationRecord;
            toAminoMsg(message: _165.SuperfluidDelegationRecord): _165.SuperfluidDelegationRecordAminoMsg;
            fromProtoMsg(message: _165.SuperfluidDelegationRecordProtoMsg): _165.SuperfluidDelegationRecord;
            toProto(message: _165.SuperfluidDelegationRecord): Uint8Array;
            toProtoMsg(message: _165.SuperfluidDelegationRecord): _165.SuperfluidDelegationRecordProtoMsg;
        };
        LockIdIntermediaryAccountConnection: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _165.LockIdIntermediaryAccountConnection;
            isSDK(o: any): o is _165.LockIdIntermediaryAccountConnectionSDKType;
            isAmino(o: any): o is _165.LockIdIntermediaryAccountConnectionAmino;
            encode(message: _165.LockIdIntermediaryAccountConnection, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.LockIdIntermediaryAccountConnection;
            fromJSON(object: any): _165.LockIdIntermediaryAccountConnection;
            toJSON(message: _165.LockIdIntermediaryAccountConnection): unknown;
            fromPartial(object: {
                lockId?: bigint;
                intermediaryAccount?: string;
            }): _165.LockIdIntermediaryAccountConnection;
            fromSDK(object: _165.LockIdIntermediaryAccountConnectionSDKType): _165.LockIdIntermediaryAccountConnection;
            toSDK(message: _165.LockIdIntermediaryAccountConnection): _165.LockIdIntermediaryAccountConnectionSDKType;
            fromAmino(object: _165.LockIdIntermediaryAccountConnectionAmino): _165.LockIdIntermediaryAccountConnection;
            toAmino(message: _165.LockIdIntermediaryAccountConnection): _165.LockIdIntermediaryAccountConnectionAmino;
            fromAminoMsg(object: _165.LockIdIntermediaryAccountConnectionAminoMsg): _165.LockIdIntermediaryAccountConnection;
            toAminoMsg(message: _165.LockIdIntermediaryAccountConnection): _165.LockIdIntermediaryAccountConnectionAminoMsg;
            fromProtoMsg(message: _165.LockIdIntermediaryAccountConnectionProtoMsg): _165.LockIdIntermediaryAccountConnection;
            toProto(message: _165.LockIdIntermediaryAccountConnection): Uint8Array;
            toProtoMsg(message: _165.LockIdIntermediaryAccountConnection): _165.LockIdIntermediaryAccountConnectionProtoMsg;
        };
        UnpoolWhitelistedPools: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _165.UnpoolWhitelistedPools;
            isSDK(o: any): o is _165.UnpoolWhitelistedPoolsSDKType;
            isAmino(o: any): o is _165.UnpoolWhitelistedPoolsAmino;
            encode(message: _165.UnpoolWhitelistedPools, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _165.UnpoolWhitelistedPools;
            fromJSON(object: any): _165.UnpoolWhitelistedPools;
            toJSON(message: _165.UnpoolWhitelistedPools): unknown;
            fromPartial(object: {
                ids?: bigint[];
            }): _165.UnpoolWhitelistedPools;
            fromSDK(object: _165.UnpoolWhitelistedPoolsSDKType): _165.UnpoolWhitelistedPools;
            toSDK(message: _165.UnpoolWhitelistedPools): _165.UnpoolWhitelistedPoolsSDKType;
            fromAmino(object: _165.UnpoolWhitelistedPoolsAmino): _165.UnpoolWhitelistedPools;
            toAmino(message: _165.UnpoolWhitelistedPools): _165.UnpoolWhitelistedPoolsAmino;
            fromAminoMsg(object: _165.UnpoolWhitelistedPoolsAminoMsg): _165.UnpoolWhitelistedPools;
            toAminoMsg(message: _165.UnpoolWhitelistedPools): _165.UnpoolWhitelistedPoolsAminoMsg;
            fromProtoMsg(message: _165.UnpoolWhitelistedPoolsProtoMsg): _165.UnpoolWhitelistedPools;
            toProto(message: _165.UnpoolWhitelistedPools): Uint8Array;
            toProtoMsg(message: _165.UnpoolWhitelistedPools): _165.UnpoolWhitelistedPoolsProtoMsg;
        };
        QueryParamsRequest: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _164.QueryParamsRequest;
            isSDK(o: any): o is _164.QueryParamsRequestSDKType;
            isAmino(o: any): o is _164.QueryParamsRequestAmino;
            encode(_: _164.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.QueryParamsRequest;
            fromJSON(_: any): _164.QueryParamsRequest;
            toJSON(_: _164.QueryParamsRequest): unknown;
            fromPartial(_: {}): _164.QueryParamsRequest;
            fromSDK(_: _164.QueryParamsRequestSDKType): _164.QueryParamsRequest;
            toSDK(_: _164.QueryParamsRequest): _164.QueryParamsRequestSDKType;
            fromAmino(_: _164.QueryParamsRequestAmino): _164.QueryParamsRequest;
            toAmino(_: _164.QueryParamsRequest): _164.QueryParamsRequestAmino;
            fromAminoMsg(object: _164.QueryParamsRequestAminoMsg): _164.QueryParamsRequest;
            toAminoMsg(message: _164.QueryParamsRequest): _164.QueryParamsRequestAminoMsg;
            fromProtoMsg(message: _164.QueryParamsRequestProtoMsg): _164.QueryParamsRequest;
            toProto(message: _164.QueryParamsRequest): Uint8Array;
            toProtoMsg(message: _164.QueryParamsRequest): _164.QueryParamsRequestProtoMsg;
        };
        QueryParamsResponse: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _164.QueryParamsResponse;
            isSDK(o: any): o is _164.QueryParamsResponseSDKType;
            isAmino(o: any): o is _164.QueryParamsResponseAmino;
            encode(message: _164.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.QueryParamsResponse;
            fromJSON(object: any): _164.QueryParamsResponse;
            toJSON(message: _164.QueryParamsResponse): unknown;
            fromPartial(object: {
                params?: {
                    minimumRiskFactor?: string;
                };
            }): _164.QueryParamsResponse;
            fromSDK(object: _164.QueryParamsResponseSDKType): _164.QueryParamsResponse;
            toSDK(message: _164.QueryParamsResponse): _164.QueryParamsResponseSDKType;
            fromAmino(object: _164.QueryParamsResponseAmino): _164.QueryParamsResponse;
            toAmino(message: _164.QueryParamsResponse): _164.QueryParamsResponseAmino;
            fromAminoMsg(object: _164.QueryParamsResponseAminoMsg): _164.QueryParamsResponse;
            toAminoMsg(message: _164.QueryParamsResponse): _164.QueryParamsResponseAminoMsg;
            fromProtoMsg(message: _164.QueryParamsResponseProtoMsg): _164.QueryParamsResponse;
            toProto(message: _164.QueryParamsResponse): Uint8Array;
            toProtoMsg(message: _164.QueryParamsResponse): _164.QueryParamsResponseProtoMsg;
        };
        AssetTypeRequest: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _164.AssetTypeRequest;
            isSDK(o: any): o is _164.AssetTypeRequestSDKType;
            isAmino(o: any): o is _164.AssetTypeRequestAmino;
            encode(message: _164.AssetTypeRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.AssetTypeRequest;
            fromJSON(object: any): _164.AssetTypeRequest;
            toJSON(message: _164.AssetTypeRequest): unknown;
            fromPartial(object: {
                denom?: string;
            }): _164.AssetTypeRequest;
            fromSDK(object: _164.AssetTypeRequestSDKType): _164.AssetTypeRequest;
            toSDK(message: _164.AssetTypeRequest): _164.AssetTypeRequestSDKType;
            fromAmino(object: _164.AssetTypeRequestAmino): _164.AssetTypeRequest;
            toAmino(message: _164.AssetTypeRequest): _164.AssetTypeRequestAmino;
            fromAminoMsg(object: _164.AssetTypeRequestAminoMsg): _164.AssetTypeRequest;
            toAminoMsg(message: _164.AssetTypeRequest): _164.AssetTypeRequestAminoMsg;
            fromProtoMsg(message: _164.AssetTypeRequestProtoMsg): _164.AssetTypeRequest;
            toProto(message: _164.AssetTypeRequest): Uint8Array;
            toProtoMsg(message: _164.AssetTypeRequest): _164.AssetTypeRequestProtoMsg;
        };
        AssetTypeResponse: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _164.AssetTypeResponse;
            isSDK(o: any): o is _164.AssetTypeResponseSDKType;
            isAmino(o: any): o is _164.AssetTypeResponseAmino;
            encode(message: _164.AssetTypeResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.AssetTypeResponse;
            fromJSON(object: any): _164.AssetTypeResponse;
            toJSON(message: _164.AssetTypeResponse): unknown;
            fromPartial(object: {
                assetType?: _165.SuperfluidAssetType;
            }): _164.AssetTypeResponse;
            fromSDK(object: _164.AssetTypeResponseSDKType): _164.AssetTypeResponse;
            toSDK(message: _164.AssetTypeResponse): _164.AssetTypeResponseSDKType;
            fromAmino(object: _164.AssetTypeResponseAmino): _164.AssetTypeResponse;
            toAmino(message: _164.AssetTypeResponse): _164.AssetTypeResponseAmino;
            fromAminoMsg(object: _164.AssetTypeResponseAminoMsg): _164.AssetTypeResponse;
            toAminoMsg(message: _164.AssetTypeResponse): _164.AssetTypeResponseAminoMsg;
            fromProtoMsg(message: _164.AssetTypeResponseProtoMsg): _164.AssetTypeResponse;
            toProto(message: _164.AssetTypeResponse): Uint8Array;
            toProtoMsg(message: _164.AssetTypeResponse): _164.AssetTypeResponseProtoMsg;
        };
        AllAssetsRequest: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _164.AllAssetsRequest;
            isSDK(o: any): o is _164.AllAssetsRequestSDKType;
            isAmino(o: any): o is _164.AllAssetsRequestAmino;
            encode(_: _164.AllAssetsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.AllAssetsRequest;
            fromJSON(_: any): _164.AllAssetsRequest;
            toJSON(_: _164.AllAssetsRequest): unknown;
            fromPartial(_: {}): _164.AllAssetsRequest;
            fromSDK(_: _164.AllAssetsRequestSDKType): _164.AllAssetsRequest;
            toSDK(_: _164.AllAssetsRequest): _164.AllAssetsRequestSDKType;
            fromAmino(_: _164.AllAssetsRequestAmino): _164.AllAssetsRequest;
            toAmino(_: _164.AllAssetsRequest): _164.AllAssetsRequestAmino;
            fromAminoMsg(object: _164.AllAssetsRequestAminoMsg): _164.AllAssetsRequest;
            toAminoMsg(message: _164.AllAssetsRequest): _164.AllAssetsRequestAminoMsg;
            fromProtoMsg(message: _164.AllAssetsRequestProtoMsg): _164.AllAssetsRequest;
            toProto(message: _164.AllAssetsRequest): Uint8Array;
            toProtoMsg(message: _164.AllAssetsRequest): _164.AllAssetsRequestProtoMsg;
        };
        AllAssetsResponse: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _164.AllAssetsResponse;
            isSDK(o: any): o is _164.AllAssetsResponseSDKType;
            isAmino(o: any): o is _164.AllAssetsResponseAmino;
            encode(message: _164.AllAssetsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.AllAssetsResponse;
            fromJSON(object: any): _164.AllAssetsResponse;
            toJSON(message: _164.AllAssetsResponse): unknown;
            fromPartial(object: {
                assets?: {
                    denom?: string;
                    assetType?: _165.SuperfluidAssetType;
                }[];
            }): _164.AllAssetsResponse;
            fromSDK(object: _164.AllAssetsResponseSDKType): _164.AllAssetsResponse;
            toSDK(message: _164.AllAssetsResponse): _164.AllAssetsResponseSDKType;
            fromAmino(object: _164.AllAssetsResponseAmino): _164.AllAssetsResponse;
            toAmino(message: _164.AllAssetsResponse): _164.AllAssetsResponseAmino;
            fromAminoMsg(object: _164.AllAssetsResponseAminoMsg): _164.AllAssetsResponse;
            toAminoMsg(message: _164.AllAssetsResponse): _164.AllAssetsResponseAminoMsg;
            fromProtoMsg(message: _164.AllAssetsResponseProtoMsg): _164.AllAssetsResponse;
            toProto(message: _164.AllAssetsResponse): Uint8Array;
            toProtoMsg(message: _164.AllAssetsResponse): _164.AllAssetsResponseProtoMsg;
        };
        AssetMultiplierRequest: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _164.AssetMultiplierRequest;
            isSDK(o: any): o is _164.AssetMultiplierRequestSDKType;
            isAmino(o: any): o is _164.AssetMultiplierRequestAmino;
            encode(message: _164.AssetMultiplierRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.AssetMultiplierRequest;
            fromJSON(object: any): _164.AssetMultiplierRequest;
            toJSON(message: _164.AssetMultiplierRequest): unknown;
            fromPartial(object: {
                denom?: string;
            }): _164.AssetMultiplierRequest;
            fromSDK(object: _164.AssetMultiplierRequestSDKType): _164.AssetMultiplierRequest;
            toSDK(message: _164.AssetMultiplierRequest): _164.AssetMultiplierRequestSDKType;
            fromAmino(object: _164.AssetMultiplierRequestAmino): _164.AssetMultiplierRequest;
            toAmino(message: _164.AssetMultiplierRequest): _164.AssetMultiplierRequestAmino;
            fromAminoMsg(object: _164.AssetMultiplierRequestAminoMsg): _164.AssetMultiplierRequest;
            toAminoMsg(message: _164.AssetMultiplierRequest): _164.AssetMultiplierRequestAminoMsg;
            fromProtoMsg(message: _164.AssetMultiplierRequestProtoMsg): _164.AssetMultiplierRequest;
            toProto(message: _164.AssetMultiplierRequest): Uint8Array;
            toProtoMsg(message: _164.AssetMultiplierRequest): _164.AssetMultiplierRequestProtoMsg;
        };
        AssetMultiplierResponse: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _164.AssetMultiplierResponse;
            isSDK(o: any): o is _164.AssetMultiplierResponseSDKType;
            isAmino(o: any): o is _164.AssetMultiplierResponseAmino;
            encode(message: _164.AssetMultiplierResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.AssetMultiplierResponse;
            fromJSON(object: any): _164.AssetMultiplierResponse;
            toJSON(message: _164.AssetMultiplierResponse): unknown;
            fromPartial(object: {
                osmoEquivalentMultiplier?: {
                    epochNumber?: bigint;
                    denom?: string;
                    multiplier?: string;
                };
            }): _164.AssetMultiplierResponse;
            fromSDK(object: _164.AssetMultiplierResponseSDKType): _164.AssetMultiplierResponse;
            toSDK(message: _164.AssetMultiplierResponse): _164.AssetMultiplierResponseSDKType;
            fromAmino(object: _164.AssetMultiplierResponseAmino): _164.AssetMultiplierResponse;
            toAmino(message: _164.AssetMultiplierResponse): _164.AssetMultiplierResponseAmino;
            fromAminoMsg(object: _164.AssetMultiplierResponseAminoMsg): _164.AssetMultiplierResponse;
            toAminoMsg(message: _164.AssetMultiplierResponse): _164.AssetMultiplierResponseAminoMsg;
            fromProtoMsg(message: _164.AssetMultiplierResponseProtoMsg): _164.AssetMultiplierResponse;
            toProto(message: _164.AssetMultiplierResponse): Uint8Array;
            toProtoMsg(message: _164.AssetMultiplierResponse): _164.AssetMultiplierResponseProtoMsg;
        };
        SuperfluidIntermediaryAccountInfo: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _164.SuperfluidIntermediaryAccountInfo;
            isSDK(o: any): o is _164.SuperfluidIntermediaryAccountInfoSDKType;
            isAmino(o: any): o is _164.SuperfluidIntermediaryAccountInfoAmino;
            encode(message: _164.SuperfluidIntermediaryAccountInfo, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.SuperfluidIntermediaryAccountInfo;
            fromJSON(object: any): _164.SuperfluidIntermediaryAccountInfo;
            toJSON(message: _164.SuperfluidIntermediaryAccountInfo): unknown;
            fromPartial(object: {
                denom?: string;
                valAddr?: string;
                gaugeId?: bigint;
                address?: string;
            }): _164.SuperfluidIntermediaryAccountInfo;
            fromSDK(object: _164.SuperfluidIntermediaryAccountInfoSDKType): _164.SuperfluidIntermediaryAccountInfo;
            toSDK(message: _164.SuperfluidIntermediaryAccountInfo): _164.SuperfluidIntermediaryAccountInfoSDKType;
            fromAmino(object: _164.SuperfluidIntermediaryAccountInfoAmino): _164.SuperfluidIntermediaryAccountInfo;
            toAmino(message: _164.SuperfluidIntermediaryAccountInfo): _164.SuperfluidIntermediaryAccountInfoAmino;
            fromAminoMsg(object: _164.SuperfluidIntermediaryAccountInfoAminoMsg): _164.SuperfluidIntermediaryAccountInfo;
            toAminoMsg(message: _164.SuperfluidIntermediaryAccountInfo): _164.SuperfluidIntermediaryAccountInfoAminoMsg;
            fromProtoMsg(message: _164.SuperfluidIntermediaryAccountInfoProtoMsg): _164.SuperfluidIntermediaryAccountInfo;
            toProto(message: _164.SuperfluidIntermediaryAccountInfo): Uint8Array;
            toProtoMsg(message: _164.SuperfluidIntermediaryAccountInfo): _164.SuperfluidIntermediaryAccountInfoProtoMsg;
        };
        AllIntermediaryAccountsRequest: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _164.AllIntermediaryAccountsRequest;
            isSDK(o: any): o is _164.AllIntermediaryAccountsRequestSDKType;
            isAmino(o: any): o is _164.AllIntermediaryAccountsRequestAmino;
            encode(message: _164.AllIntermediaryAccountsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.AllIntermediaryAccountsRequest;
            fromJSON(object: any): _164.AllIntermediaryAccountsRequest;
            toJSON(message: _164.AllIntermediaryAccountsRequest): unknown;
            fromPartial(object: {
                pagination?: {
                    key?: Uint8Array;
                    offset?: bigint;
                    limit?: bigint;
                    countTotal?: boolean;
                    reverse?: boolean;
                };
            }): _164.AllIntermediaryAccountsRequest;
            fromSDK(object: _164.AllIntermediaryAccountsRequestSDKType): _164.AllIntermediaryAccountsRequest;
            toSDK(message: _164.AllIntermediaryAccountsRequest): _164.AllIntermediaryAccountsRequestSDKType;
            fromAmino(object: _164.AllIntermediaryAccountsRequestAmino): _164.AllIntermediaryAccountsRequest;
            toAmino(message: _164.AllIntermediaryAccountsRequest): _164.AllIntermediaryAccountsRequestAmino;
            fromAminoMsg(object: _164.AllIntermediaryAccountsRequestAminoMsg): _164.AllIntermediaryAccountsRequest;
            toAminoMsg(message: _164.AllIntermediaryAccountsRequest): _164.AllIntermediaryAccountsRequestAminoMsg;
            fromProtoMsg(message: _164.AllIntermediaryAccountsRequestProtoMsg): _164.AllIntermediaryAccountsRequest;
            toProto(message: _164.AllIntermediaryAccountsRequest): Uint8Array;
            toProtoMsg(message: _164.AllIntermediaryAccountsRequest): _164.AllIntermediaryAccountsRequestProtoMsg;
        };
        AllIntermediaryAccountsResponse: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _164.AllIntermediaryAccountsResponse;
            isSDK(o: any): o is _164.AllIntermediaryAccountsResponseSDKType;
            isAmino(o: any): o is _164.AllIntermediaryAccountsResponseAmino;
            encode(message: _164.AllIntermediaryAccountsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.AllIntermediaryAccountsResponse;
            fromJSON(object: any): _164.AllIntermediaryAccountsResponse;
            toJSON(message: _164.AllIntermediaryAccountsResponse): unknown;
            fromPartial(object: {
                accounts?: {
                    denom?: string;
                    valAddr?: string;
                    gaugeId?: bigint;
                    address?: string;
                }[];
                pagination?: {
                    nextKey?: Uint8Array;
                    total?: bigint;
                };
            }): _164.AllIntermediaryAccountsResponse;
            fromSDK(object: _164.AllIntermediaryAccountsResponseSDKType): _164.AllIntermediaryAccountsResponse;
            toSDK(message: _164.AllIntermediaryAccountsResponse): _164.AllIntermediaryAccountsResponseSDKType;
            fromAmino(object: _164.AllIntermediaryAccountsResponseAmino): _164.AllIntermediaryAccountsResponse;
            toAmino(message: _164.AllIntermediaryAccountsResponse): _164.AllIntermediaryAccountsResponseAmino;
            fromAminoMsg(object: _164.AllIntermediaryAccountsResponseAminoMsg): _164.AllIntermediaryAccountsResponse;
            toAminoMsg(message: _164.AllIntermediaryAccountsResponse): _164.AllIntermediaryAccountsResponseAminoMsg;
            fromProtoMsg(message: _164.AllIntermediaryAccountsResponseProtoMsg): _164.AllIntermediaryAccountsResponse;
            toProto(message: _164.AllIntermediaryAccountsResponse): Uint8Array;
            toProtoMsg(message: _164.AllIntermediaryAccountsResponse): _164.AllIntermediaryAccountsResponseProtoMsg;
        };
        ConnectedIntermediaryAccountRequest: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _164.ConnectedIntermediaryAccountRequest;
            isSDK(o: any): o is _164.ConnectedIntermediaryAccountRequestSDKType;
            isAmino(o: any): o is _164.ConnectedIntermediaryAccountRequestAmino;
            encode(message: _164.ConnectedIntermediaryAccountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.ConnectedIntermediaryAccountRequest;
            fromJSON(object: any): _164.ConnectedIntermediaryAccountRequest;
            toJSON(message: _164.ConnectedIntermediaryAccountRequest): unknown;
            fromPartial(object: {
                lockId?: bigint;
            }): _164.ConnectedIntermediaryAccountRequest;
            fromSDK(object: _164.ConnectedIntermediaryAccountRequestSDKType): _164.ConnectedIntermediaryAccountRequest;
            toSDK(message: _164.ConnectedIntermediaryAccountRequest): _164.ConnectedIntermediaryAccountRequestSDKType;
            fromAmino(object: _164.ConnectedIntermediaryAccountRequestAmino): _164.ConnectedIntermediaryAccountRequest;
            toAmino(message: _164.ConnectedIntermediaryAccountRequest): _164.ConnectedIntermediaryAccountRequestAmino;
            fromAminoMsg(object: _164.ConnectedIntermediaryAccountRequestAminoMsg): _164.ConnectedIntermediaryAccountRequest;
            toAminoMsg(message: _164.ConnectedIntermediaryAccountRequest): _164.ConnectedIntermediaryAccountRequestAminoMsg;
            fromProtoMsg(message: _164.ConnectedIntermediaryAccountRequestProtoMsg): _164.ConnectedIntermediaryAccountRequest;
            toProto(message: _164.ConnectedIntermediaryAccountRequest): Uint8Array;
            toProtoMsg(message: _164.ConnectedIntermediaryAccountRequest): _164.ConnectedIntermediaryAccountRequestProtoMsg;
        };
        ConnectedIntermediaryAccountResponse: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _164.ConnectedIntermediaryAccountResponse;
            isSDK(o: any): o is _164.ConnectedIntermediaryAccountResponseSDKType;
            isAmino(o: any): o is _164.ConnectedIntermediaryAccountResponseAmino;
            encode(message: _164.ConnectedIntermediaryAccountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.ConnectedIntermediaryAccountResponse;
            fromJSON(object: any): _164.ConnectedIntermediaryAccountResponse;
            toJSON(message: _164.ConnectedIntermediaryAccountResponse): unknown;
            fromPartial(object: {
                account?: {
                    denom?: string;
                    valAddr?: string;
                    gaugeId?: bigint;
                    address?: string;
                };
            }): _164.ConnectedIntermediaryAccountResponse;
            fromSDK(object: _164.ConnectedIntermediaryAccountResponseSDKType): _164.ConnectedIntermediaryAccountResponse;
            toSDK(message: _164.ConnectedIntermediaryAccountResponse): _164.ConnectedIntermediaryAccountResponseSDKType;
            fromAmino(object: _164.ConnectedIntermediaryAccountResponseAmino): _164.ConnectedIntermediaryAccountResponse;
            toAmino(message: _164.ConnectedIntermediaryAccountResponse): _164.ConnectedIntermediaryAccountResponseAmino;
            fromAminoMsg(object: _164.ConnectedIntermediaryAccountResponseAminoMsg): _164.ConnectedIntermediaryAccountResponse;
            toAminoMsg(message: _164.ConnectedIntermediaryAccountResponse): _164.ConnectedIntermediaryAccountResponseAminoMsg;
            fromProtoMsg(message: _164.ConnectedIntermediaryAccountResponseProtoMsg): _164.ConnectedIntermediaryAccountResponse;
            toProto(message: _164.ConnectedIntermediaryAccountResponse): Uint8Array;
            toProtoMsg(message: _164.ConnectedIntermediaryAccountResponse): _164.ConnectedIntermediaryAccountResponseProtoMsg;
        };
        QueryTotalDelegationByValidatorForDenomRequest: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _164.QueryTotalDelegationByValidatorForDenomRequest;
            isSDK(o: any): o is _164.QueryTotalDelegationByValidatorForDenomRequestSDKType;
            isAmino(o: any): o is _164.QueryTotalDelegationByValidatorForDenomRequestAmino;
            encode(message: _164.QueryTotalDelegationByValidatorForDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.QueryTotalDelegationByValidatorForDenomRequest;
            fromJSON(object: any): _164.QueryTotalDelegationByValidatorForDenomRequest;
            toJSON(message: _164.QueryTotalDelegationByValidatorForDenomRequest): unknown;
            fromPartial(object: {
                denom?: string;
            }): _164.QueryTotalDelegationByValidatorForDenomRequest;
            fromSDK(object: _164.QueryTotalDelegationByValidatorForDenomRequestSDKType): _164.QueryTotalDelegationByValidatorForDenomRequest;
            toSDK(message: _164.QueryTotalDelegationByValidatorForDenomRequest): _164.QueryTotalDelegationByValidatorForDenomRequestSDKType;
            fromAmino(object: _164.QueryTotalDelegationByValidatorForDenomRequestAmino): _164.QueryTotalDelegationByValidatorForDenomRequest;
            toAmino(message: _164.QueryTotalDelegationByValidatorForDenomRequest): _164.QueryTotalDelegationByValidatorForDenomRequestAmino;
            fromAminoMsg(object: _164.QueryTotalDelegationByValidatorForDenomRequestAminoMsg): _164.QueryTotalDelegationByValidatorForDenomRequest;
            toAminoMsg(message: _164.QueryTotalDelegationByValidatorForDenomRequest): _164.QueryTotalDelegationByValidatorForDenomRequestAminoMsg;
            fromProtoMsg(message: _164.QueryTotalDelegationByValidatorForDenomRequestProtoMsg): _164.QueryTotalDelegationByValidatorForDenomRequest;
            toProto(message: _164.QueryTotalDelegationByValidatorForDenomRequest): Uint8Array;
            toProtoMsg(message: _164.QueryTotalDelegationByValidatorForDenomRequest): _164.QueryTotalDelegationByValidatorForDenomRequestProtoMsg;
        };
        QueryTotalDelegationByValidatorForDenomResponse: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _164.QueryTotalDelegationByValidatorForDenomResponse;
            isSDK(o: any): o is _164.QueryTotalDelegationByValidatorForDenomResponseSDKType;
            isAmino(o: any): o is _164.QueryTotalDelegationByValidatorForDenomResponseAmino;
            encode(message: _164.QueryTotalDelegationByValidatorForDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.QueryTotalDelegationByValidatorForDenomResponse;
            fromJSON(object: any): _164.QueryTotalDelegationByValidatorForDenomResponse;
            toJSON(message: _164.QueryTotalDelegationByValidatorForDenomResponse): unknown;
            fromPartial(object: {
                assets?: {
                    valAddr?: string;
                    amountSfsd?: string;
                    osmoEquivalent?: string;
                }[];
            }): _164.QueryTotalDelegationByValidatorForDenomResponse;
            fromSDK(object: _164.QueryTotalDelegationByValidatorForDenomResponseSDKType): _164.QueryTotalDelegationByValidatorForDenomResponse;
            toSDK(message: _164.QueryTotalDelegationByValidatorForDenomResponse): _164.QueryTotalDelegationByValidatorForDenomResponseSDKType;
            fromAmino(object: _164.QueryTotalDelegationByValidatorForDenomResponseAmino): _164.QueryTotalDelegationByValidatorForDenomResponse;
            toAmino(message: _164.QueryTotalDelegationByValidatorForDenomResponse): _164.QueryTotalDelegationByValidatorForDenomResponseAmino;
            fromAminoMsg(object: _164.QueryTotalDelegationByValidatorForDenomResponseAminoMsg): _164.QueryTotalDelegationByValidatorForDenomResponse;
            toAminoMsg(message: _164.QueryTotalDelegationByValidatorForDenomResponse): _164.QueryTotalDelegationByValidatorForDenomResponseAminoMsg;
            fromProtoMsg(message: _164.QueryTotalDelegationByValidatorForDenomResponseProtoMsg): _164.QueryTotalDelegationByValidatorForDenomResponse;
            toProto(message: _164.QueryTotalDelegationByValidatorForDenomResponse): Uint8Array;
            toProtoMsg(message: _164.QueryTotalDelegationByValidatorForDenomResponse): _164.QueryTotalDelegationByValidatorForDenomResponseProtoMsg;
        };
        Delegations: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _164.Delegations;
            isSDK(o: any): o is _164.DelegationsSDKType;
            isAmino(o: any): o is _164.DelegationsAmino;
            encode(message: _164.Delegations, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.Delegations;
            fromJSON(object: any): _164.Delegations;
            toJSON(message: _164.Delegations): unknown;
            fromPartial(object: {
                valAddr?: string;
                amountSfsd?: string;
                osmoEquivalent?: string;
            }): _164.Delegations;
            fromSDK(object: _164.DelegationsSDKType): _164.Delegations;
            toSDK(message: _164.Delegations): _164.DelegationsSDKType;
            fromAmino(object: _164.DelegationsAmino): _164.Delegations;
            toAmino(message: _164.Delegations): _164.DelegationsAmino;
            fromAminoMsg(object: _164.DelegationsAminoMsg): _164.Delegations;
            toAminoMsg(message: _164.Delegations): _164.DelegationsAminoMsg;
            fromProtoMsg(message: _164.DelegationsProtoMsg): _164.Delegations;
            toProto(message: _164.Delegations): Uint8Array;
            toProtoMsg(message: _164.Delegations): _164.DelegationsProtoMsg;
        };
        TotalSuperfluidDelegationsRequest: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _164.TotalSuperfluidDelegationsRequest;
            isSDK(o: any): o is _164.TotalSuperfluidDelegationsRequestSDKType;
            isAmino(o: any): o is _164.TotalSuperfluidDelegationsRequestAmino;
            encode(_: _164.TotalSuperfluidDelegationsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.TotalSuperfluidDelegationsRequest;
            fromJSON(_: any): _164.TotalSuperfluidDelegationsRequest;
            toJSON(_: _164.TotalSuperfluidDelegationsRequest): unknown;
            fromPartial(_: {}): _164.TotalSuperfluidDelegationsRequest;
            fromSDK(_: _164.TotalSuperfluidDelegationsRequestSDKType): _164.TotalSuperfluidDelegationsRequest;
            toSDK(_: _164.TotalSuperfluidDelegationsRequest): _164.TotalSuperfluidDelegationsRequestSDKType;
            fromAmino(_: _164.TotalSuperfluidDelegationsRequestAmino): _164.TotalSuperfluidDelegationsRequest;
            toAmino(_: _164.TotalSuperfluidDelegationsRequest): _164.TotalSuperfluidDelegationsRequestAmino;
            fromAminoMsg(object: _164.TotalSuperfluidDelegationsRequestAminoMsg): _164.TotalSuperfluidDelegationsRequest;
            toAminoMsg(message: _164.TotalSuperfluidDelegationsRequest): _164.TotalSuperfluidDelegationsRequestAminoMsg;
            fromProtoMsg(message: _164.TotalSuperfluidDelegationsRequestProtoMsg): _164.TotalSuperfluidDelegationsRequest;
            toProto(message: _164.TotalSuperfluidDelegationsRequest): Uint8Array;
            toProtoMsg(message: _164.TotalSuperfluidDelegationsRequest): _164.TotalSuperfluidDelegationsRequestProtoMsg;
        };
        TotalSuperfluidDelegationsResponse: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _164.TotalSuperfluidDelegationsResponse;
            isSDK(o: any): o is _164.TotalSuperfluidDelegationsResponseSDKType;
            isAmino(o: any): o is _164.TotalSuperfluidDelegationsResponseAmino;
            encode(message: _164.TotalSuperfluidDelegationsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.TotalSuperfluidDelegationsResponse;
            fromJSON(object: any): _164.TotalSuperfluidDelegationsResponse;
            toJSON(message: _164.TotalSuperfluidDelegationsResponse): unknown;
            fromPartial(object: {
                totalDelegations?: string;
            }): _164.TotalSuperfluidDelegationsResponse;
            fromSDK(object: _164.TotalSuperfluidDelegationsResponseSDKType): _164.TotalSuperfluidDelegationsResponse;
            toSDK(message: _164.TotalSuperfluidDelegationsResponse): _164.TotalSuperfluidDelegationsResponseSDKType;
            fromAmino(object: _164.TotalSuperfluidDelegationsResponseAmino): _164.TotalSuperfluidDelegationsResponse;
            toAmino(message: _164.TotalSuperfluidDelegationsResponse): _164.TotalSuperfluidDelegationsResponseAmino;
            fromAminoMsg(object: _164.TotalSuperfluidDelegationsResponseAminoMsg): _164.TotalSuperfluidDelegationsResponse;
            toAminoMsg(message: _164.TotalSuperfluidDelegationsResponse): _164.TotalSuperfluidDelegationsResponseAminoMsg;
            fromProtoMsg(message: _164.TotalSuperfluidDelegationsResponseProtoMsg): _164.TotalSuperfluidDelegationsResponse;
            toProto(message: _164.TotalSuperfluidDelegationsResponse): Uint8Array;
            toProtoMsg(message: _164.TotalSuperfluidDelegationsResponse): _164.TotalSuperfluidDelegationsResponseProtoMsg;
        };
        SuperfluidDelegationAmountRequest: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _164.SuperfluidDelegationAmountRequest;
            isSDK(o: any): o is _164.SuperfluidDelegationAmountRequestSDKType;
            isAmino(o: any): o is _164.SuperfluidDelegationAmountRequestAmino;
            encode(message: _164.SuperfluidDelegationAmountRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.SuperfluidDelegationAmountRequest;
            fromJSON(object: any): _164.SuperfluidDelegationAmountRequest;
            toJSON(message: _164.SuperfluidDelegationAmountRequest): unknown;
            fromPartial(object: {
                delegatorAddress?: string;
                validatorAddress?: string;
                denom?: string;
            }): _164.SuperfluidDelegationAmountRequest;
            fromSDK(object: _164.SuperfluidDelegationAmountRequestSDKType): _164.SuperfluidDelegationAmountRequest;
            toSDK(message: _164.SuperfluidDelegationAmountRequest): _164.SuperfluidDelegationAmountRequestSDKType;
            fromAmino(object: _164.SuperfluidDelegationAmountRequestAmino): _164.SuperfluidDelegationAmountRequest;
            toAmino(message: _164.SuperfluidDelegationAmountRequest): _164.SuperfluidDelegationAmountRequestAmino;
            fromAminoMsg(object: _164.SuperfluidDelegationAmountRequestAminoMsg): _164.SuperfluidDelegationAmountRequest;
            toAminoMsg(message: _164.SuperfluidDelegationAmountRequest): _164.SuperfluidDelegationAmountRequestAminoMsg;
            fromProtoMsg(message: _164.SuperfluidDelegationAmountRequestProtoMsg): _164.SuperfluidDelegationAmountRequest;
            toProto(message: _164.SuperfluidDelegationAmountRequest): Uint8Array;
            toProtoMsg(message: _164.SuperfluidDelegationAmountRequest): _164.SuperfluidDelegationAmountRequestProtoMsg;
        };
        SuperfluidDelegationAmountResponse: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _164.SuperfluidDelegationAmountResponse;
            isSDK(o: any): o is _164.SuperfluidDelegationAmountResponseSDKType;
            isAmino(o: any): o is _164.SuperfluidDelegationAmountResponseAmino;
            encode(message: _164.SuperfluidDelegationAmountResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.SuperfluidDelegationAmountResponse;
            fromJSON(object: any): _164.SuperfluidDelegationAmountResponse;
            toJSON(message: _164.SuperfluidDelegationAmountResponse): unknown;
            fromPartial(object: {
                amount?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _164.SuperfluidDelegationAmountResponse;
            fromSDK(object: _164.SuperfluidDelegationAmountResponseSDKType): _164.SuperfluidDelegationAmountResponse;
            toSDK(message: _164.SuperfluidDelegationAmountResponse): _164.SuperfluidDelegationAmountResponseSDKType;
            fromAmino(object: _164.SuperfluidDelegationAmountResponseAmino): _164.SuperfluidDelegationAmountResponse;
            toAmino(message: _164.SuperfluidDelegationAmountResponse): _164.SuperfluidDelegationAmountResponseAmino;
            fromAminoMsg(object: _164.SuperfluidDelegationAmountResponseAminoMsg): _164.SuperfluidDelegationAmountResponse;
            toAminoMsg(message: _164.SuperfluidDelegationAmountResponse): _164.SuperfluidDelegationAmountResponseAminoMsg;
            fromProtoMsg(message: _164.SuperfluidDelegationAmountResponseProtoMsg): _164.SuperfluidDelegationAmountResponse;
            toProto(message: _164.SuperfluidDelegationAmountResponse): Uint8Array;
            toProtoMsg(message: _164.SuperfluidDelegationAmountResponse): _164.SuperfluidDelegationAmountResponseProtoMsg;
        };
        SuperfluidDelegationsByDelegatorRequest: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _164.SuperfluidDelegationsByDelegatorRequest;
            isSDK(o: any): o is _164.SuperfluidDelegationsByDelegatorRequestSDKType;
            isAmino(o: any): o is _164.SuperfluidDelegationsByDelegatorRequestAmino;
            encode(message: _164.SuperfluidDelegationsByDelegatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.SuperfluidDelegationsByDelegatorRequest;
            fromJSON(object: any): _164.SuperfluidDelegationsByDelegatorRequest;
            toJSON(message: _164.SuperfluidDelegationsByDelegatorRequest): unknown;
            fromPartial(object: {
                delegatorAddress?: string;
            }): _164.SuperfluidDelegationsByDelegatorRequest;
            fromSDK(object: _164.SuperfluidDelegationsByDelegatorRequestSDKType): _164.SuperfluidDelegationsByDelegatorRequest;
            toSDK(message: _164.SuperfluidDelegationsByDelegatorRequest): _164.SuperfluidDelegationsByDelegatorRequestSDKType;
            fromAmino(object: _164.SuperfluidDelegationsByDelegatorRequestAmino): _164.SuperfluidDelegationsByDelegatorRequest;
            toAmino(message: _164.SuperfluidDelegationsByDelegatorRequest): _164.SuperfluidDelegationsByDelegatorRequestAmino;
            fromAminoMsg(object: _164.SuperfluidDelegationsByDelegatorRequestAminoMsg): _164.SuperfluidDelegationsByDelegatorRequest;
            toAminoMsg(message: _164.SuperfluidDelegationsByDelegatorRequest): _164.SuperfluidDelegationsByDelegatorRequestAminoMsg;
            fromProtoMsg(message: _164.SuperfluidDelegationsByDelegatorRequestProtoMsg): _164.SuperfluidDelegationsByDelegatorRequest;
            toProto(message: _164.SuperfluidDelegationsByDelegatorRequest): Uint8Array;
            toProtoMsg(message: _164.SuperfluidDelegationsByDelegatorRequest): _164.SuperfluidDelegationsByDelegatorRequestProtoMsg;
        };
        SuperfluidDelegationsByDelegatorResponse: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _164.SuperfluidDelegationsByDelegatorResponse;
            isSDK(o: any): o is _164.SuperfluidDelegationsByDelegatorResponseSDKType;
            isAmino(o: any): o is _164.SuperfluidDelegationsByDelegatorResponseAmino;
            encode(message: _164.SuperfluidDelegationsByDelegatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.SuperfluidDelegationsByDelegatorResponse;
            fromJSON(object: any): _164.SuperfluidDelegationsByDelegatorResponse;
            toJSON(message: _164.SuperfluidDelegationsByDelegatorResponse): unknown;
            fromPartial(object: {
                superfluidDelegationRecords?: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    delegationAmount?: {
                        denom?: string;
                        amount?: string;
                    };
                    equivalentStakedAmount?: {
                        denom?: string;
                        amount?: string;
                    };
                }[];
                totalDelegatedCoins?: {
                    denom?: string;
                    amount?: string;
                }[];
                totalEquivalentStakedAmount?: {
                    denom?: string;
                    amount?: string;
                };
            }): _164.SuperfluidDelegationsByDelegatorResponse;
            fromSDK(object: _164.SuperfluidDelegationsByDelegatorResponseSDKType): _164.SuperfluidDelegationsByDelegatorResponse;
            toSDK(message: _164.SuperfluidDelegationsByDelegatorResponse): _164.SuperfluidDelegationsByDelegatorResponseSDKType;
            fromAmino(object: _164.SuperfluidDelegationsByDelegatorResponseAmino): _164.SuperfluidDelegationsByDelegatorResponse;
            toAmino(message: _164.SuperfluidDelegationsByDelegatorResponse): _164.SuperfluidDelegationsByDelegatorResponseAmino;
            fromAminoMsg(object: _164.SuperfluidDelegationsByDelegatorResponseAminoMsg): _164.SuperfluidDelegationsByDelegatorResponse;
            toAminoMsg(message: _164.SuperfluidDelegationsByDelegatorResponse): _164.SuperfluidDelegationsByDelegatorResponseAminoMsg;
            fromProtoMsg(message: _164.SuperfluidDelegationsByDelegatorResponseProtoMsg): _164.SuperfluidDelegationsByDelegatorResponse;
            toProto(message: _164.SuperfluidDelegationsByDelegatorResponse): Uint8Array;
            toProtoMsg(message: _164.SuperfluidDelegationsByDelegatorResponse): _164.SuperfluidDelegationsByDelegatorResponseProtoMsg;
        };
        SuperfluidUndelegationsByDelegatorRequest: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _164.SuperfluidUndelegationsByDelegatorRequest;
            isSDK(o: any): o is _164.SuperfluidUndelegationsByDelegatorRequestSDKType;
            isAmino(o: any): o is _164.SuperfluidUndelegationsByDelegatorRequestAmino;
            encode(message: _164.SuperfluidUndelegationsByDelegatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.SuperfluidUndelegationsByDelegatorRequest;
            fromJSON(object: any): _164.SuperfluidUndelegationsByDelegatorRequest;
            toJSON(message: _164.SuperfluidUndelegationsByDelegatorRequest): unknown;
            fromPartial(object: {
                delegatorAddress?: string;
                denom?: string;
            }): _164.SuperfluidUndelegationsByDelegatorRequest;
            fromSDK(object: _164.SuperfluidUndelegationsByDelegatorRequestSDKType): _164.SuperfluidUndelegationsByDelegatorRequest;
            toSDK(message: _164.SuperfluidUndelegationsByDelegatorRequest): _164.SuperfluidUndelegationsByDelegatorRequestSDKType;
            fromAmino(object: _164.SuperfluidUndelegationsByDelegatorRequestAmino): _164.SuperfluidUndelegationsByDelegatorRequest;
            toAmino(message: _164.SuperfluidUndelegationsByDelegatorRequest): _164.SuperfluidUndelegationsByDelegatorRequestAmino;
            fromAminoMsg(object: _164.SuperfluidUndelegationsByDelegatorRequestAminoMsg): _164.SuperfluidUndelegationsByDelegatorRequest;
            toAminoMsg(message: _164.SuperfluidUndelegationsByDelegatorRequest): _164.SuperfluidUndelegationsByDelegatorRequestAminoMsg;
            fromProtoMsg(message: _164.SuperfluidUndelegationsByDelegatorRequestProtoMsg): _164.SuperfluidUndelegationsByDelegatorRequest;
            toProto(message: _164.SuperfluidUndelegationsByDelegatorRequest): Uint8Array;
            toProtoMsg(message: _164.SuperfluidUndelegationsByDelegatorRequest): _164.SuperfluidUndelegationsByDelegatorRequestProtoMsg;
        };
        SuperfluidUndelegationsByDelegatorResponse: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _164.SuperfluidUndelegationsByDelegatorResponse;
            isSDK(o: any): o is _164.SuperfluidUndelegationsByDelegatorResponseSDKType;
            isAmino(o: any): o is _164.SuperfluidUndelegationsByDelegatorResponseAmino;
            encode(message: _164.SuperfluidUndelegationsByDelegatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.SuperfluidUndelegationsByDelegatorResponse;
            fromJSON(object: any): _164.SuperfluidUndelegationsByDelegatorResponse;
            toJSON(message: _164.SuperfluidUndelegationsByDelegatorResponse): unknown;
            fromPartial(object: {
                superfluidDelegationRecords?: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    delegationAmount?: {
                        denom?: string;
                        amount?: string;
                    };
                    equivalentStakedAmount?: {
                        denom?: string;
                        amount?: string;
                    };
                }[];
                totalUndelegatedCoins?: {
                    denom?: string;
                    amount?: string;
                }[];
                syntheticLocks?: {
                    underlyingLockId?: bigint;
                    synthDenom?: string;
                    endTime?: Date;
                    duration?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                }[];
            }): _164.SuperfluidUndelegationsByDelegatorResponse;
            fromSDK(object: _164.SuperfluidUndelegationsByDelegatorResponseSDKType): _164.SuperfluidUndelegationsByDelegatorResponse;
            toSDK(message: _164.SuperfluidUndelegationsByDelegatorResponse): _164.SuperfluidUndelegationsByDelegatorResponseSDKType;
            fromAmino(object: _164.SuperfluidUndelegationsByDelegatorResponseAmino): _164.SuperfluidUndelegationsByDelegatorResponse;
            toAmino(message: _164.SuperfluidUndelegationsByDelegatorResponse): _164.SuperfluidUndelegationsByDelegatorResponseAmino;
            fromAminoMsg(object: _164.SuperfluidUndelegationsByDelegatorResponseAminoMsg): _164.SuperfluidUndelegationsByDelegatorResponse;
            toAminoMsg(message: _164.SuperfluidUndelegationsByDelegatorResponse): _164.SuperfluidUndelegationsByDelegatorResponseAminoMsg;
            fromProtoMsg(message: _164.SuperfluidUndelegationsByDelegatorResponseProtoMsg): _164.SuperfluidUndelegationsByDelegatorResponse;
            toProto(message: _164.SuperfluidUndelegationsByDelegatorResponse): Uint8Array;
            toProtoMsg(message: _164.SuperfluidUndelegationsByDelegatorResponse): _164.SuperfluidUndelegationsByDelegatorResponseProtoMsg;
        };
        SuperfluidDelegationsByValidatorDenomRequest: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _164.SuperfluidDelegationsByValidatorDenomRequest;
            isSDK(o: any): o is _164.SuperfluidDelegationsByValidatorDenomRequestSDKType;
            isAmino(o: any): o is _164.SuperfluidDelegationsByValidatorDenomRequestAmino;
            encode(message: _164.SuperfluidDelegationsByValidatorDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.SuperfluidDelegationsByValidatorDenomRequest;
            fromJSON(object: any): _164.SuperfluidDelegationsByValidatorDenomRequest;
            toJSON(message: _164.SuperfluidDelegationsByValidatorDenomRequest): unknown;
            fromPartial(object: {
                validatorAddress?: string;
                denom?: string;
            }): _164.SuperfluidDelegationsByValidatorDenomRequest;
            fromSDK(object: _164.SuperfluidDelegationsByValidatorDenomRequestSDKType): _164.SuperfluidDelegationsByValidatorDenomRequest;
            toSDK(message: _164.SuperfluidDelegationsByValidatorDenomRequest): _164.SuperfluidDelegationsByValidatorDenomRequestSDKType;
            fromAmino(object: _164.SuperfluidDelegationsByValidatorDenomRequestAmino): _164.SuperfluidDelegationsByValidatorDenomRequest;
            toAmino(message: _164.SuperfluidDelegationsByValidatorDenomRequest): _164.SuperfluidDelegationsByValidatorDenomRequestAmino;
            fromAminoMsg(object: _164.SuperfluidDelegationsByValidatorDenomRequestAminoMsg): _164.SuperfluidDelegationsByValidatorDenomRequest;
            toAminoMsg(message: _164.SuperfluidDelegationsByValidatorDenomRequest): _164.SuperfluidDelegationsByValidatorDenomRequestAminoMsg;
            fromProtoMsg(message: _164.SuperfluidDelegationsByValidatorDenomRequestProtoMsg): _164.SuperfluidDelegationsByValidatorDenomRequest;
            toProto(message: _164.SuperfluidDelegationsByValidatorDenomRequest): Uint8Array;
            toProtoMsg(message: _164.SuperfluidDelegationsByValidatorDenomRequest): _164.SuperfluidDelegationsByValidatorDenomRequestProtoMsg;
        };
        SuperfluidDelegationsByValidatorDenomResponse: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _164.SuperfluidDelegationsByValidatorDenomResponse;
            isSDK(o: any): o is _164.SuperfluidDelegationsByValidatorDenomResponseSDKType;
            isAmino(o: any): o is _164.SuperfluidDelegationsByValidatorDenomResponseAmino;
            encode(message: _164.SuperfluidDelegationsByValidatorDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.SuperfluidDelegationsByValidatorDenomResponse;
            fromJSON(object: any): _164.SuperfluidDelegationsByValidatorDenomResponse;
            toJSON(message: _164.SuperfluidDelegationsByValidatorDenomResponse): unknown;
            fromPartial(object: {
                superfluidDelegationRecords?: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    delegationAmount?: {
                        denom?: string;
                        amount?: string;
                    };
                    equivalentStakedAmount?: {
                        denom?: string;
                        amount?: string;
                    };
                }[];
            }): _164.SuperfluidDelegationsByValidatorDenomResponse;
            fromSDK(object: _164.SuperfluidDelegationsByValidatorDenomResponseSDKType): _164.SuperfluidDelegationsByValidatorDenomResponse;
            toSDK(message: _164.SuperfluidDelegationsByValidatorDenomResponse): _164.SuperfluidDelegationsByValidatorDenomResponseSDKType;
            fromAmino(object: _164.SuperfluidDelegationsByValidatorDenomResponseAmino): _164.SuperfluidDelegationsByValidatorDenomResponse;
            toAmino(message: _164.SuperfluidDelegationsByValidatorDenomResponse): _164.SuperfluidDelegationsByValidatorDenomResponseAmino;
            fromAminoMsg(object: _164.SuperfluidDelegationsByValidatorDenomResponseAminoMsg): _164.SuperfluidDelegationsByValidatorDenomResponse;
            toAminoMsg(message: _164.SuperfluidDelegationsByValidatorDenomResponse): _164.SuperfluidDelegationsByValidatorDenomResponseAminoMsg;
            fromProtoMsg(message: _164.SuperfluidDelegationsByValidatorDenomResponseProtoMsg): _164.SuperfluidDelegationsByValidatorDenomResponse;
            toProto(message: _164.SuperfluidDelegationsByValidatorDenomResponse): Uint8Array;
            toProtoMsg(message: _164.SuperfluidDelegationsByValidatorDenomResponse): _164.SuperfluidDelegationsByValidatorDenomResponseProtoMsg;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomRequest: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _164.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            isSDK(o: any): o is _164.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestSDKType;
            isAmino(o: any): o is _164.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAmino;
            encode(message: _164.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            fromJSON(object: any): _164.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toJSON(message: _164.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): unknown;
            fromPartial(object: {
                validatorAddress?: string;
                denom?: string;
            }): _164.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            fromSDK(object: _164.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestSDKType): _164.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toSDK(message: _164.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): _164.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestSDKType;
            fromAmino(object: _164.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAmino): _164.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toAmino(message: _164.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): _164.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAmino;
            fromAminoMsg(object: _164.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAminoMsg): _164.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toAminoMsg(message: _164.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): _164.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestAminoMsg;
            fromProtoMsg(message: _164.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestProtoMsg): _164.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest;
            toProto(message: _164.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): Uint8Array;
            toProtoMsg(message: _164.EstimateSuperfluidDelegatedAmountByValidatorDenomRequest): _164.EstimateSuperfluidDelegatedAmountByValidatorDenomRequestProtoMsg;
        };
        EstimateSuperfluidDelegatedAmountByValidatorDenomResponse: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _164.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            isSDK(o: any): o is _164.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseSDKType;
            isAmino(o: any): o is _164.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAmino;
            encode(message: _164.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            fromJSON(object: any): _164.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toJSON(message: _164.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): unknown;
            fromPartial(object: {
                totalDelegatedCoins?: {
                    denom?: string;
                    amount?: string;
                }[];
            }): _164.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            fromSDK(object: _164.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseSDKType): _164.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toSDK(message: _164.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): _164.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseSDKType;
            fromAmino(object: _164.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAmino): _164.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toAmino(message: _164.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): _164.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAmino;
            fromAminoMsg(object: _164.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAminoMsg): _164.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toAminoMsg(message: _164.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): _164.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseAminoMsg;
            fromProtoMsg(message: _164.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseProtoMsg): _164.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse;
            toProto(message: _164.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): Uint8Array;
            toProtoMsg(message: _164.EstimateSuperfluidDelegatedAmountByValidatorDenomResponse): _164.EstimateSuperfluidDelegatedAmountByValidatorDenomResponseProtoMsg;
        };
        QueryTotalDelegationByDelegatorRequest: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _164.QueryTotalDelegationByDelegatorRequest;
            isSDK(o: any): o is _164.QueryTotalDelegationByDelegatorRequestSDKType;
            isAmino(o: any): o is _164.QueryTotalDelegationByDelegatorRequestAmino;
            encode(message: _164.QueryTotalDelegationByDelegatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.QueryTotalDelegationByDelegatorRequest;
            fromJSON(object: any): _164.QueryTotalDelegationByDelegatorRequest;
            toJSON(message: _164.QueryTotalDelegationByDelegatorRequest): unknown;
            fromPartial(object: {
                delegatorAddress?: string;
            }): _164.QueryTotalDelegationByDelegatorRequest;
            fromSDK(object: _164.QueryTotalDelegationByDelegatorRequestSDKType): _164.QueryTotalDelegationByDelegatorRequest;
            toSDK(message: _164.QueryTotalDelegationByDelegatorRequest): _164.QueryTotalDelegationByDelegatorRequestSDKType;
            fromAmino(object: _164.QueryTotalDelegationByDelegatorRequestAmino): _164.QueryTotalDelegationByDelegatorRequest;
            toAmino(message: _164.QueryTotalDelegationByDelegatorRequest): _164.QueryTotalDelegationByDelegatorRequestAmino;
            fromAminoMsg(object: _164.QueryTotalDelegationByDelegatorRequestAminoMsg): _164.QueryTotalDelegationByDelegatorRequest;
            toAminoMsg(message: _164.QueryTotalDelegationByDelegatorRequest): _164.QueryTotalDelegationByDelegatorRequestAminoMsg;
            fromProtoMsg(message: _164.QueryTotalDelegationByDelegatorRequestProtoMsg): _164.QueryTotalDelegationByDelegatorRequest;
            toProto(message: _164.QueryTotalDelegationByDelegatorRequest): Uint8Array;
            toProtoMsg(message: _164.QueryTotalDelegationByDelegatorRequest): _164.QueryTotalDelegationByDelegatorRequestProtoMsg;
        };
        QueryTotalDelegationByDelegatorResponse: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _164.QueryTotalDelegationByDelegatorResponse;
            isSDK(o: any): o is _164.QueryTotalDelegationByDelegatorResponseSDKType;
            isAmino(o: any): o is _164.QueryTotalDelegationByDelegatorResponseAmino;
            encode(message: _164.QueryTotalDelegationByDelegatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.QueryTotalDelegationByDelegatorResponse;
            fromJSON(object: any): _164.QueryTotalDelegationByDelegatorResponse;
            toJSON(message: _164.QueryTotalDelegationByDelegatorResponse): unknown;
            fromPartial(object: {
                superfluidDelegationRecords?: {
                    delegatorAddress?: string;
                    validatorAddress?: string;
                    delegationAmount?: {
                        denom?: string;
                        amount?: string;
                    };
                    equivalentStakedAmount?: {
                        denom?: string;
                        amount?: string;
                    };
                }[];
                delegationResponse?: {
                    delegation?: {
                        delegatorAddress?: string;
                        validatorAddress?: string;
                        shares?: string;
                    };
                    balance?: {
                        denom?: string;
                        amount?: string;
                    };
                }[];
                totalDelegatedCoins?: {
                    denom?: string;
                    amount?: string;
                }[];
                totalEquivalentStakedAmount?: {
                    denom?: string;
                    amount?: string;
                };
            }): _164.QueryTotalDelegationByDelegatorResponse;
            fromSDK(object: _164.QueryTotalDelegationByDelegatorResponseSDKType): _164.QueryTotalDelegationByDelegatorResponse;
            toSDK(message: _164.QueryTotalDelegationByDelegatorResponse): _164.QueryTotalDelegationByDelegatorResponseSDKType;
            fromAmino(object: _164.QueryTotalDelegationByDelegatorResponseAmino): _164.QueryTotalDelegationByDelegatorResponse;
            toAmino(message: _164.QueryTotalDelegationByDelegatorResponse): _164.QueryTotalDelegationByDelegatorResponseAmino;
            fromAminoMsg(object: _164.QueryTotalDelegationByDelegatorResponseAminoMsg): _164.QueryTotalDelegationByDelegatorResponse;
            toAminoMsg(message: _164.QueryTotalDelegationByDelegatorResponse): _164.QueryTotalDelegationByDelegatorResponseAminoMsg;
            fromProtoMsg(message: _164.QueryTotalDelegationByDelegatorResponseProtoMsg): _164.QueryTotalDelegationByDelegatorResponse;
            toProto(message: _164.QueryTotalDelegationByDelegatorResponse): Uint8Array;
            toProtoMsg(message: _164.QueryTotalDelegationByDelegatorResponse): _164.QueryTotalDelegationByDelegatorResponseProtoMsg;
        };
        QueryUnpoolWhitelistRequest: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _164.QueryUnpoolWhitelistRequest;
            isSDK(o: any): o is _164.QueryUnpoolWhitelistRequestSDKType;
            isAmino(o: any): o is _164.QueryUnpoolWhitelistRequestAmino;
            encode(_: _164.QueryUnpoolWhitelistRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.QueryUnpoolWhitelistRequest;
            fromJSON(_: any): _164.QueryUnpoolWhitelistRequest;
            toJSON(_: _164.QueryUnpoolWhitelistRequest): unknown;
            fromPartial(_: {}): _164.QueryUnpoolWhitelistRequest;
            fromSDK(_: _164.QueryUnpoolWhitelistRequestSDKType): _164.QueryUnpoolWhitelistRequest;
            toSDK(_: _164.QueryUnpoolWhitelistRequest): _164.QueryUnpoolWhitelistRequestSDKType;
            fromAmino(_: _164.QueryUnpoolWhitelistRequestAmino): _164.QueryUnpoolWhitelistRequest;
            toAmino(_: _164.QueryUnpoolWhitelistRequest): _164.QueryUnpoolWhitelistRequestAmino;
            fromAminoMsg(object: _164.QueryUnpoolWhitelistRequestAminoMsg): _164.QueryUnpoolWhitelistRequest;
            toAminoMsg(message: _164.QueryUnpoolWhitelistRequest): _164.QueryUnpoolWhitelistRequestAminoMsg;
            fromProtoMsg(message: _164.QueryUnpoolWhitelistRequestProtoMsg): _164.QueryUnpoolWhitelistRequest;
            toProto(message: _164.QueryUnpoolWhitelistRequest): Uint8Array;
            toProtoMsg(message: _164.QueryUnpoolWhitelistRequest): _164.QueryUnpoolWhitelistRequestProtoMsg;
        };
        QueryUnpoolWhitelistResponse: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _164.QueryUnpoolWhitelistResponse;
            isSDK(o: any): o is _164.QueryUnpoolWhitelistResponseSDKType;
            isAmino(o: any): o is _164.QueryUnpoolWhitelistResponseAmino;
            encode(message: _164.QueryUnpoolWhitelistResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _164.QueryUnpoolWhitelistResponse;
            fromJSON(object: any): _164.QueryUnpoolWhitelistResponse;
            toJSON(message: _164.QueryUnpoolWhitelistResponse): unknown;
            fromPartial(object: {
                poolIds?: bigint[];
            }): _164.QueryUnpoolWhitelistResponse;
            fromSDK(object: _164.QueryUnpoolWhitelistResponseSDKType): _164.QueryUnpoolWhitelistResponse;
            toSDK(message: _164.QueryUnpoolWhitelistResponse): _164.QueryUnpoolWhitelistResponseSDKType;
            fromAmino(object: _164.QueryUnpoolWhitelistResponseAmino): _164.QueryUnpoolWhitelistResponse;
            toAmino(message: _164.QueryUnpoolWhitelistResponse): _164.QueryUnpoolWhitelistResponseAmino;
            fromAminoMsg(object: _164.QueryUnpoolWhitelistResponseAminoMsg): _164.QueryUnpoolWhitelistResponse;
            toAminoMsg(message: _164.QueryUnpoolWhitelistResponse): _164.QueryUnpoolWhitelistResponseAminoMsg;
            fromProtoMsg(message: _164.QueryUnpoolWhitelistResponseProtoMsg): _164.QueryUnpoolWhitelistResponse;
            toProto(message: _164.QueryUnpoolWhitelistResponse): Uint8Array;
            toProtoMsg(message: _164.QueryUnpoolWhitelistResponse): _164.QueryUnpoolWhitelistResponseProtoMsg;
        };
        Params: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _163.Params;
            isSDK(o: any): o is _163.ParamsSDKType;
            isAmino(o: any): o is _163.ParamsAmino;
            encode(message: _163.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _163.Params;
            fromJSON(object: any): _163.Params;
            toJSON(message: _163.Params): unknown;
            fromPartial(object: {
                minimumRiskFactor?: string;
            }): _163.Params;
            fromSDK(object: _163.ParamsSDKType): _163.Params;
            toSDK(message: _163.Params): _163.ParamsSDKType;
            fromAmino(object: _163.ParamsAmino): _163.Params;
            toAmino(message: _163.Params): _163.ParamsAmino;
            fromAminoMsg(object: _163.ParamsAminoMsg): _163.Params;
            toAminoMsg(message: _163.Params): _163.ParamsAminoMsg;
            fromProtoMsg(message: _163.ParamsProtoMsg): _163.Params;
            toProto(message: _163.Params): Uint8Array;
            toProtoMsg(message: _163.Params): _163.ParamsProtoMsg;
        };
        GenesisState: {
            typeUrl: string;
            aminoType: string;
            is(o: any): o is _162.GenesisState;
            isSDK(o: any): o is _162.GenesisStateSDKType;
            isAmino(o: any): o is _162.GenesisStateAmino;
            encode(message: _162.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
            decode(input: Uint8Array | import("..").BinaryReader, length?: number): _162.GenesisState;
            fromJSON(object: any): _162.GenesisState;
            toJSON(message: _162.GenesisState): unknown;
            fromPartial(object: {
                params?: {
                    minimumRiskFactor?: string;
                };
                superfluidAssets?: {
                    denom?: string;
                    assetType?: _165.SuperfluidAssetType;
                }[];
                osmoEquivalentMultipliers?: {
                    epochNumber?: bigint;
                    denom?: string;
                    multiplier?: string;
                }[];
                intermediaryAccounts?: {
                    denom?: string;
                    valAddr?: string;
                    gaugeId?: bigint;
                }[];
                intemediaryAccountConnections?: {
                    lockId?: bigint;
                    intermediaryAccount?: string;
                }[];
            }): _162.GenesisState;
            fromSDK(object: _162.GenesisStateSDKType): _162.GenesisState;
            toSDK(message: _162.GenesisState): _162.GenesisStateSDKType;
            fromAmino(object: _162.GenesisStateAmino): _162.GenesisState;
            toAmino(message: _162.GenesisState): _162.GenesisStateAmino;
            fromAminoMsg(object: _162.GenesisStateAminoMsg): _162.GenesisState;
            toAminoMsg(message: _162.GenesisState): _162.GenesisStateAminoMsg;
            fromProtoMsg(message: _162.GenesisStateProtoMsg): _162.GenesisState;
            toProto(message: _162.GenesisState): Uint8Array;
            toProtoMsg(message: _162.GenesisState): _162.GenesisStateProtoMsg;
        };
    };
    namespace tokenfactory {
        const v1beta1: {
            MsgClientImpl: typeof _301.MsgClientImpl;
            createClientImpl: (rpc: import("..").TxRpc) => _301.MsgClientImpl;
            QueryClientImpl: typeof _293.QueryClientImpl;
            createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                useParams: <TData = _170.QueryParamsResponse>({ request, options }: _293.UseParamsQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
                useDenomAuthorityMetadata: <TData_1 = _170.QueryDenomAuthorityMetadataResponse>({ request, options }: _293.UseDenomAuthorityMetadataQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
                useDenomsFromCreator: <TData_2 = _170.QueryDenomsFromCreatorResponse>({ request, options }: _293.UseDenomsFromCreatorQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
            };
            createRpcQueryMobxStores: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                QueryParamsStore: {
                    new (): {
                        store: import("..").QueryStore<_170.QueryParamsRequest, _170.QueryParamsResponse>;
                        params(request: _170.QueryParamsRequest): import("..").MobxResponse<_170.QueryParamsResponse>;
                    };
                };
                QueryDenomAuthorityMetadataStore: {
                    new (): {
                        store: import("..").QueryStore<_170.QueryDenomAuthorityMetadataRequest, _170.QueryDenomAuthorityMetadataResponse>;
                        denomAuthorityMetadata(request: _170.QueryDenomAuthorityMetadataRequest): import("..").MobxResponse<_170.QueryDenomAuthorityMetadataResponse>;
                    };
                };
                QueryDenomsFromCreatorStore: {
                    new (): {
                        store: import("..").QueryStore<_170.QueryDenomsFromCreatorRequest, _170.QueryDenomsFromCreatorResponse>;
                        denomsFromCreator(request: _170.QueryDenomsFromCreatorRequest): import("..").MobxResponse<_170.QueryDenomsFromCreatorResponse>;
                    };
                };
            };
            registry: readonly [string, import("..").TelescopeGeneratedType<any, any, any>][];
            load: (protoRegistry: import("@cosmjs/proto-signing").Registry) => void;
            MessageComposer: {
                encoded: {
                    createDenom(value: _171.MsgCreateDenom): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    mint(value: _171.MsgMint): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    burn(value: _171.MsgBurn): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    changeAdmin(value: _171.MsgChangeAdmin): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                    setDenomMetadata(value: _171.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: Uint8Array;
                    };
                };
                withTypeUrl: {
                    createDenom(value: _171.MsgCreateDenom): {
                        typeUrl: string;
                        value: _171.MsgCreateDenom;
                    };
                    mint(value: _171.MsgMint): {
                        typeUrl: string;
                        value: _171.MsgMint;
                    };
                    burn(value: _171.MsgBurn): {
                        typeUrl: string;
                        value: _171.MsgBurn;
                    };
                    changeAdmin(value: _171.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _171.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _171.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _171.MsgSetDenomMetadata;
                    };
                };
                toJSON: {
                    createDenom(value: _171.MsgCreateDenom): {
                        typeUrl: string;
                        value: unknown;
                    };
                    mint(value: _171.MsgMint): {
                        typeUrl: string;
                        value: unknown;
                    };
                    burn(value: _171.MsgBurn): {
                        typeUrl: string;
                        value: unknown;
                    };
                    changeAdmin(value: _171.MsgChangeAdmin): {
                        typeUrl: string;
                        value: unknown;
                    };
                    setDenomMetadata(value: _171.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: unknown;
                    };
                };
                fromJSON: {
                    createDenom(value: any): {
                        typeUrl: string;
                        value: _171.MsgCreateDenom;
                    };
                    mint(value: any): {
                        typeUrl: string;
                        value: _171.MsgMint;
                    };
                    burn(value: any): {
                        typeUrl: string;
                        value: _171.MsgBurn;
                    };
                    changeAdmin(value: any): {
                        typeUrl: string;
                        value: _171.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: any): {
                        typeUrl: string;
                        value: _171.MsgSetDenomMetadata;
                    };
                };
                fromPartial: {
                    createDenom(value: _171.MsgCreateDenom): {
                        typeUrl: string;
                        value: _171.MsgCreateDenom;
                    };
                    mint(value: _171.MsgMint): {
                        typeUrl: string;
                        value: _171.MsgMint;
                    };
                    burn(value: _171.MsgBurn): {
                        typeUrl: string;
                        value: _171.MsgBurn;
                    };
                    changeAdmin(value: _171.MsgChangeAdmin): {
                        typeUrl: string;
                        value: _171.MsgChangeAdmin;
                    };
                    setDenomMetadata(value: _171.MsgSetDenomMetadata): {
                        typeUrl: string;
                        value: _171.MsgSetDenomMetadata;
                    };
                };
            };
            AminoConverter: {
                "/osmosis.tokenfactory.v1beta1.MsgCreateDenom": {
                    aminoType: string;
                    toAmino: (message: _171.MsgCreateDenom) => _171.MsgCreateDenomAmino;
                    fromAmino: (object: _171.MsgCreateDenomAmino) => _171.MsgCreateDenom;
                };
                "/osmosis.tokenfactory.v1beta1.MsgMint": {
                    aminoType: string;
                    toAmino: (message: _171.MsgMint) => _171.MsgMintAmino;
                    fromAmino: (object: _171.MsgMintAmino) => _171.MsgMint;
                };
                "/osmosis.tokenfactory.v1beta1.MsgBurn": {
                    aminoType: string;
                    toAmino: (message: _171.MsgBurn) => _171.MsgBurnAmino;
                    fromAmino: (object: _171.MsgBurnAmino) => _171.MsgBurn;
                };
                "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin": {
                    aminoType: string;
                    toAmino: (message: _171.MsgChangeAdmin) => _171.MsgChangeAdminAmino;
                    fromAmino: (object: _171.MsgChangeAdminAmino) => _171.MsgChangeAdmin;
                };
                "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata": {
                    aminoType: string;
                    toAmino: (message: _171.MsgSetDenomMetadata) => _171.MsgSetDenomMetadataAmino;
                    fromAmino: (object: _171.MsgSetDenomMetadataAmino) => _171.MsgSetDenomMetadata;
                };
            };
            MsgCreateDenom: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _171.MsgCreateDenom;
                isSDK(o: any): o is _171.MsgCreateDenomSDKType;
                isAmino(o: any): o is _171.MsgCreateDenomAmino;
                encode(message: _171.MsgCreateDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.MsgCreateDenom;
                fromJSON(object: any): _171.MsgCreateDenom;
                toJSON(message: _171.MsgCreateDenom): unknown;
                fromPartial(object: {
                    sender?: string;
                    subdenom?: string;
                }): _171.MsgCreateDenom;
                fromSDK(object: _171.MsgCreateDenomSDKType): _171.MsgCreateDenom;
                toSDK(message: _171.MsgCreateDenom): _171.MsgCreateDenomSDKType;
                fromAmino(object: _171.MsgCreateDenomAmino): _171.MsgCreateDenom;
                toAmino(message: _171.MsgCreateDenom): _171.MsgCreateDenomAmino;
                fromAminoMsg(object: _171.MsgCreateDenomAminoMsg): _171.MsgCreateDenom;
                toAminoMsg(message: _171.MsgCreateDenom): _171.MsgCreateDenomAminoMsg;
                fromProtoMsg(message: _171.MsgCreateDenomProtoMsg): _171.MsgCreateDenom;
                toProto(message: _171.MsgCreateDenom): Uint8Array;
                toProtoMsg(message: _171.MsgCreateDenom): _171.MsgCreateDenomProtoMsg;
            };
            MsgCreateDenomResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _171.MsgCreateDenomResponse;
                isSDK(o: any): o is _171.MsgCreateDenomResponseSDKType;
                isAmino(o: any): o is _171.MsgCreateDenomResponseAmino;
                encode(message: _171.MsgCreateDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.MsgCreateDenomResponse;
                fromJSON(object: any): _171.MsgCreateDenomResponse;
                toJSON(message: _171.MsgCreateDenomResponse): unknown;
                fromPartial(object: {
                    newTokenDenom?: string;
                }): _171.MsgCreateDenomResponse;
                fromSDK(object: _171.MsgCreateDenomResponseSDKType): _171.MsgCreateDenomResponse;
                toSDK(message: _171.MsgCreateDenomResponse): _171.MsgCreateDenomResponseSDKType;
                fromAmino(object: _171.MsgCreateDenomResponseAmino): _171.MsgCreateDenomResponse;
                toAmino(message: _171.MsgCreateDenomResponse): _171.MsgCreateDenomResponseAmino;
                fromAminoMsg(object: _171.MsgCreateDenomResponseAminoMsg): _171.MsgCreateDenomResponse;
                toAminoMsg(message: _171.MsgCreateDenomResponse): _171.MsgCreateDenomResponseAminoMsg;
                fromProtoMsg(message: _171.MsgCreateDenomResponseProtoMsg): _171.MsgCreateDenomResponse;
                toProto(message: _171.MsgCreateDenomResponse): Uint8Array;
                toProtoMsg(message: _171.MsgCreateDenomResponse): _171.MsgCreateDenomResponseProtoMsg;
            };
            MsgMint: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _171.MsgMint;
                isSDK(o: any): o is _171.MsgMintSDKType;
                isAmino(o: any): o is _171.MsgMintAmino;
                encode(message: _171.MsgMint, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.MsgMint;
                fromJSON(object: any): _171.MsgMint;
                toJSON(message: _171.MsgMint): unknown;
                fromPartial(object: {
                    sender?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _171.MsgMint;
                fromSDK(object: _171.MsgMintSDKType): _171.MsgMint;
                toSDK(message: _171.MsgMint): _171.MsgMintSDKType;
                fromAmino(object: _171.MsgMintAmino): _171.MsgMint;
                toAmino(message: _171.MsgMint): _171.MsgMintAmino;
                fromAminoMsg(object: _171.MsgMintAminoMsg): _171.MsgMint;
                toAminoMsg(message: _171.MsgMint): _171.MsgMintAminoMsg;
                fromProtoMsg(message: _171.MsgMintProtoMsg): _171.MsgMint;
                toProto(message: _171.MsgMint): Uint8Array;
                toProtoMsg(message: _171.MsgMint): _171.MsgMintProtoMsg;
            };
            MsgMintResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _171.MsgMintResponse;
                isSDK(o: any): o is _171.MsgMintResponseSDKType;
                isAmino(o: any): o is _171.MsgMintResponseAmino;
                encode(_: _171.MsgMintResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.MsgMintResponse;
                fromJSON(_: any): _171.MsgMintResponse;
                toJSON(_: _171.MsgMintResponse): unknown;
                fromPartial(_: {}): _171.MsgMintResponse;
                fromSDK(_: _171.MsgMintResponseSDKType): _171.MsgMintResponse;
                toSDK(_: _171.MsgMintResponse): _171.MsgMintResponseSDKType;
                fromAmino(_: _171.MsgMintResponseAmino): _171.MsgMintResponse;
                toAmino(_: _171.MsgMintResponse): _171.MsgMintResponseAmino;
                fromAminoMsg(object: _171.MsgMintResponseAminoMsg): _171.MsgMintResponse;
                toAminoMsg(message: _171.MsgMintResponse): _171.MsgMintResponseAminoMsg;
                fromProtoMsg(message: _171.MsgMintResponseProtoMsg): _171.MsgMintResponse;
                toProto(message: _171.MsgMintResponse): Uint8Array;
                toProtoMsg(message: _171.MsgMintResponse): _171.MsgMintResponseProtoMsg;
            };
            MsgBurn: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _171.MsgBurn;
                isSDK(o: any): o is _171.MsgBurnSDKType;
                isAmino(o: any): o is _171.MsgBurnAmino;
                encode(message: _171.MsgBurn, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.MsgBurn;
                fromJSON(object: any): _171.MsgBurn;
                toJSON(message: _171.MsgBurn): unknown;
                fromPartial(object: {
                    sender?: string;
                    amount?: {
                        denom?: string;
                        amount?: string;
                    };
                }): _171.MsgBurn;
                fromSDK(object: _171.MsgBurnSDKType): _171.MsgBurn;
                toSDK(message: _171.MsgBurn): _171.MsgBurnSDKType;
                fromAmino(object: _171.MsgBurnAmino): _171.MsgBurn;
                toAmino(message: _171.MsgBurn): _171.MsgBurnAmino;
                fromAminoMsg(object: _171.MsgBurnAminoMsg): _171.MsgBurn;
                toAminoMsg(message: _171.MsgBurn): _171.MsgBurnAminoMsg;
                fromProtoMsg(message: _171.MsgBurnProtoMsg): _171.MsgBurn;
                toProto(message: _171.MsgBurn): Uint8Array;
                toProtoMsg(message: _171.MsgBurn): _171.MsgBurnProtoMsg;
            };
            MsgBurnResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _171.MsgBurnResponse;
                isSDK(o: any): o is _171.MsgBurnResponseSDKType;
                isAmino(o: any): o is _171.MsgBurnResponseAmino;
                encode(_: _171.MsgBurnResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.MsgBurnResponse;
                fromJSON(_: any): _171.MsgBurnResponse;
                toJSON(_: _171.MsgBurnResponse): unknown;
                fromPartial(_: {}): _171.MsgBurnResponse;
                fromSDK(_: _171.MsgBurnResponseSDKType): _171.MsgBurnResponse;
                toSDK(_: _171.MsgBurnResponse): _171.MsgBurnResponseSDKType;
                fromAmino(_: _171.MsgBurnResponseAmino): _171.MsgBurnResponse;
                toAmino(_: _171.MsgBurnResponse): _171.MsgBurnResponseAmino;
                fromAminoMsg(object: _171.MsgBurnResponseAminoMsg): _171.MsgBurnResponse;
                toAminoMsg(message: _171.MsgBurnResponse): _171.MsgBurnResponseAminoMsg;
                fromProtoMsg(message: _171.MsgBurnResponseProtoMsg): _171.MsgBurnResponse;
                toProto(message: _171.MsgBurnResponse): Uint8Array;
                toProtoMsg(message: _171.MsgBurnResponse): _171.MsgBurnResponseProtoMsg;
            };
            MsgChangeAdmin: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _171.MsgChangeAdmin;
                isSDK(o: any): o is _171.MsgChangeAdminSDKType;
                isAmino(o: any): o is _171.MsgChangeAdminAmino;
                encode(message: _171.MsgChangeAdmin, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.MsgChangeAdmin;
                fromJSON(object: any): _171.MsgChangeAdmin;
                toJSON(message: _171.MsgChangeAdmin): unknown;
                fromPartial(object: {
                    sender?: string;
                    denom?: string;
                    newAdmin?: string;
                }): _171.MsgChangeAdmin;
                fromSDK(object: _171.MsgChangeAdminSDKType): _171.MsgChangeAdmin;
                toSDK(message: _171.MsgChangeAdmin): _171.MsgChangeAdminSDKType;
                fromAmino(object: _171.MsgChangeAdminAmino): _171.MsgChangeAdmin;
                toAmino(message: _171.MsgChangeAdmin): _171.MsgChangeAdminAmino;
                fromAminoMsg(object: _171.MsgChangeAdminAminoMsg): _171.MsgChangeAdmin;
                toAminoMsg(message: _171.MsgChangeAdmin): _171.MsgChangeAdminAminoMsg;
                fromProtoMsg(message: _171.MsgChangeAdminProtoMsg): _171.MsgChangeAdmin;
                toProto(message: _171.MsgChangeAdmin): Uint8Array;
                toProtoMsg(message: _171.MsgChangeAdmin): _171.MsgChangeAdminProtoMsg;
            };
            MsgChangeAdminResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _171.MsgChangeAdminResponse;
                isSDK(o: any): o is _171.MsgChangeAdminResponseSDKType;
                isAmino(o: any): o is _171.MsgChangeAdminResponseAmino;
                encode(_: _171.MsgChangeAdminResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.MsgChangeAdminResponse;
                fromJSON(_: any): _171.MsgChangeAdminResponse;
                toJSON(_: _171.MsgChangeAdminResponse): unknown;
                fromPartial(_: {}): _171.MsgChangeAdminResponse;
                fromSDK(_: _171.MsgChangeAdminResponseSDKType): _171.MsgChangeAdminResponse;
                toSDK(_: _171.MsgChangeAdminResponse): _171.MsgChangeAdminResponseSDKType;
                fromAmino(_: _171.MsgChangeAdminResponseAmino): _171.MsgChangeAdminResponse;
                toAmino(_: _171.MsgChangeAdminResponse): _171.MsgChangeAdminResponseAmino;
                fromAminoMsg(object: _171.MsgChangeAdminResponseAminoMsg): _171.MsgChangeAdminResponse;
                toAminoMsg(message: _171.MsgChangeAdminResponse): _171.MsgChangeAdminResponseAminoMsg;
                fromProtoMsg(message: _171.MsgChangeAdminResponseProtoMsg): _171.MsgChangeAdminResponse;
                toProto(message: _171.MsgChangeAdminResponse): Uint8Array;
                toProtoMsg(message: _171.MsgChangeAdminResponse): _171.MsgChangeAdminResponseProtoMsg;
            };
            MsgSetDenomMetadata: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _171.MsgSetDenomMetadata;
                isSDK(o: any): o is _171.MsgSetDenomMetadataSDKType;
                isAmino(o: any): o is _171.MsgSetDenomMetadataAmino;
                encode(message: _171.MsgSetDenomMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.MsgSetDenomMetadata;
                fromJSON(object: any): _171.MsgSetDenomMetadata;
                toJSON(message: _171.MsgSetDenomMetadata): unknown;
                fromPartial(object: {
                    sender?: string;
                    metadata?: {
                        description?: string;
                        denomUnits?: {
                            denom?: string;
                            exponent?: number;
                            aliases?: string[];
                        }[];
                        base?: string;
                        display?: string;
                        name?: string;
                        symbol?: string;
                        uri?: string;
                        uriHash?: string;
                    };
                }): _171.MsgSetDenomMetadata;
                fromSDK(object: _171.MsgSetDenomMetadataSDKType): _171.MsgSetDenomMetadata;
                toSDK(message: _171.MsgSetDenomMetadata): _171.MsgSetDenomMetadataSDKType;
                fromAmino(object: _171.MsgSetDenomMetadataAmino): _171.MsgSetDenomMetadata;
                toAmino(message: _171.MsgSetDenomMetadata): _171.MsgSetDenomMetadataAmino;
                fromAminoMsg(object: _171.MsgSetDenomMetadataAminoMsg): _171.MsgSetDenomMetadata;
                toAminoMsg(message: _171.MsgSetDenomMetadata): _171.MsgSetDenomMetadataAminoMsg;
                fromProtoMsg(message: _171.MsgSetDenomMetadataProtoMsg): _171.MsgSetDenomMetadata;
                toProto(message: _171.MsgSetDenomMetadata): Uint8Array;
                toProtoMsg(message: _171.MsgSetDenomMetadata): _171.MsgSetDenomMetadataProtoMsg;
            };
            MsgSetDenomMetadataResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _171.MsgSetDenomMetadataResponse;
                isSDK(o: any): o is _171.MsgSetDenomMetadataResponseSDKType;
                isAmino(o: any): o is _171.MsgSetDenomMetadataResponseAmino;
                encode(_: _171.MsgSetDenomMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _171.MsgSetDenomMetadataResponse;
                fromJSON(_: any): _171.MsgSetDenomMetadataResponse;
                toJSON(_: _171.MsgSetDenomMetadataResponse): unknown;
                fromPartial(_: {}): _171.MsgSetDenomMetadataResponse;
                fromSDK(_: _171.MsgSetDenomMetadataResponseSDKType): _171.MsgSetDenomMetadataResponse;
                toSDK(_: _171.MsgSetDenomMetadataResponse): _171.MsgSetDenomMetadataResponseSDKType;
                fromAmino(_: _171.MsgSetDenomMetadataResponseAmino): _171.MsgSetDenomMetadataResponse;
                toAmino(_: _171.MsgSetDenomMetadataResponse): _171.MsgSetDenomMetadataResponseAmino;
                fromAminoMsg(object: _171.MsgSetDenomMetadataResponseAminoMsg): _171.MsgSetDenomMetadataResponse;
                toAminoMsg(message: _171.MsgSetDenomMetadataResponse): _171.MsgSetDenomMetadataResponseAminoMsg;
                fromProtoMsg(message: _171.MsgSetDenomMetadataResponseProtoMsg): _171.MsgSetDenomMetadataResponse;
                toProto(message: _171.MsgSetDenomMetadataResponse): Uint8Array;
                toProtoMsg(message: _171.MsgSetDenomMetadataResponse): _171.MsgSetDenomMetadataResponseProtoMsg;
            };
            QueryParamsRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _170.QueryParamsRequest;
                isSDK(o: any): o is _170.QueryParamsRequestSDKType;
                isAmino(o: any): o is _170.QueryParamsRequestAmino;
                encode(_: _170.QueryParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.QueryParamsRequest;
                fromJSON(_: any): _170.QueryParamsRequest;
                toJSON(_: _170.QueryParamsRequest): unknown;
                fromPartial(_: {}): _170.QueryParamsRequest;
                fromSDK(_: _170.QueryParamsRequestSDKType): _170.QueryParamsRequest;
                toSDK(_: _170.QueryParamsRequest): _170.QueryParamsRequestSDKType;
                fromAmino(_: _170.QueryParamsRequestAmino): _170.QueryParamsRequest;
                toAmino(_: _170.QueryParamsRequest): _170.QueryParamsRequestAmino;
                fromAminoMsg(object: _170.QueryParamsRequestAminoMsg): _170.QueryParamsRequest;
                toAminoMsg(message: _170.QueryParamsRequest): _170.QueryParamsRequestAminoMsg;
                fromProtoMsg(message: _170.QueryParamsRequestProtoMsg): _170.QueryParamsRequest;
                toProto(message: _170.QueryParamsRequest): Uint8Array;
                toProtoMsg(message: _170.QueryParamsRequest): _170.QueryParamsRequestProtoMsg;
            };
            QueryParamsResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _170.QueryParamsResponse;
                isSDK(o: any): o is _170.QueryParamsResponseSDKType;
                isAmino(o: any): o is _170.QueryParamsResponseAmino;
                encode(message: _170.QueryParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.QueryParamsResponse;
                fromJSON(object: any): _170.QueryParamsResponse;
                toJSON(message: _170.QueryParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        denomCreationFee?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                }): _170.QueryParamsResponse;
                fromSDK(object: _170.QueryParamsResponseSDKType): _170.QueryParamsResponse;
                toSDK(message: _170.QueryParamsResponse): _170.QueryParamsResponseSDKType;
                fromAmino(object: _170.QueryParamsResponseAmino): _170.QueryParamsResponse;
                toAmino(message: _170.QueryParamsResponse): _170.QueryParamsResponseAmino;
                fromAminoMsg(object: _170.QueryParamsResponseAminoMsg): _170.QueryParamsResponse;
                toAminoMsg(message: _170.QueryParamsResponse): _170.QueryParamsResponseAminoMsg;
                fromProtoMsg(message: _170.QueryParamsResponseProtoMsg): _170.QueryParamsResponse;
                toProto(message: _170.QueryParamsResponse): Uint8Array;
                toProtoMsg(message: _170.QueryParamsResponse): _170.QueryParamsResponseProtoMsg;
            };
            QueryDenomAuthorityMetadataRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _170.QueryDenomAuthorityMetadataRequest;
                isSDK(o: any): o is _170.QueryDenomAuthorityMetadataRequestSDKType;
                isAmino(o: any): o is _170.QueryDenomAuthorityMetadataRequestAmino;
                encode(message: _170.QueryDenomAuthorityMetadataRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.QueryDenomAuthorityMetadataRequest;
                fromJSON(object: any): _170.QueryDenomAuthorityMetadataRequest;
                toJSON(message: _170.QueryDenomAuthorityMetadataRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _170.QueryDenomAuthorityMetadataRequest;
                fromSDK(object: _170.QueryDenomAuthorityMetadataRequestSDKType): _170.QueryDenomAuthorityMetadataRequest;
                toSDK(message: _170.QueryDenomAuthorityMetadataRequest): _170.QueryDenomAuthorityMetadataRequestSDKType;
                fromAmino(object: _170.QueryDenomAuthorityMetadataRequestAmino): _170.QueryDenomAuthorityMetadataRequest;
                toAmino(message: _170.QueryDenomAuthorityMetadataRequest): _170.QueryDenomAuthorityMetadataRequestAmino;
                fromAminoMsg(object: _170.QueryDenomAuthorityMetadataRequestAminoMsg): _170.QueryDenomAuthorityMetadataRequest;
                toAminoMsg(message: _170.QueryDenomAuthorityMetadataRequest): _170.QueryDenomAuthorityMetadataRequestAminoMsg;
                fromProtoMsg(message: _170.QueryDenomAuthorityMetadataRequestProtoMsg): _170.QueryDenomAuthorityMetadataRequest;
                toProto(message: _170.QueryDenomAuthorityMetadataRequest): Uint8Array;
                toProtoMsg(message: _170.QueryDenomAuthorityMetadataRequest): _170.QueryDenomAuthorityMetadataRequestProtoMsg;
            };
            QueryDenomAuthorityMetadataResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _170.QueryDenomAuthorityMetadataResponse;
                isSDK(o: any): o is _170.QueryDenomAuthorityMetadataResponseSDKType;
                isAmino(o: any): o is _170.QueryDenomAuthorityMetadataResponseAmino;
                encode(message: _170.QueryDenomAuthorityMetadataResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.QueryDenomAuthorityMetadataResponse;
                fromJSON(object: any): _170.QueryDenomAuthorityMetadataResponse;
                toJSON(message: _170.QueryDenomAuthorityMetadataResponse): unknown;
                fromPartial(object: {
                    authorityMetadata?: {
                        admin?: string;
                    };
                }): _170.QueryDenomAuthorityMetadataResponse;
                fromSDK(object: _170.QueryDenomAuthorityMetadataResponseSDKType): _170.QueryDenomAuthorityMetadataResponse;
                toSDK(message: _170.QueryDenomAuthorityMetadataResponse): _170.QueryDenomAuthorityMetadataResponseSDKType;
                fromAmino(object: _170.QueryDenomAuthorityMetadataResponseAmino): _170.QueryDenomAuthorityMetadataResponse;
                toAmino(message: _170.QueryDenomAuthorityMetadataResponse): _170.QueryDenomAuthorityMetadataResponseAmino;
                fromAminoMsg(object: _170.QueryDenomAuthorityMetadataResponseAminoMsg): _170.QueryDenomAuthorityMetadataResponse;
                toAminoMsg(message: _170.QueryDenomAuthorityMetadataResponse): _170.QueryDenomAuthorityMetadataResponseAminoMsg;
                fromProtoMsg(message: _170.QueryDenomAuthorityMetadataResponseProtoMsg): _170.QueryDenomAuthorityMetadataResponse;
                toProto(message: _170.QueryDenomAuthorityMetadataResponse): Uint8Array;
                toProtoMsg(message: _170.QueryDenomAuthorityMetadataResponse): _170.QueryDenomAuthorityMetadataResponseProtoMsg;
            };
            QueryDenomsFromCreatorRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _170.QueryDenomsFromCreatorRequest;
                isSDK(o: any): o is _170.QueryDenomsFromCreatorRequestSDKType;
                isAmino(o: any): o is _170.QueryDenomsFromCreatorRequestAmino;
                encode(message: _170.QueryDenomsFromCreatorRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.QueryDenomsFromCreatorRequest;
                fromJSON(object: any): _170.QueryDenomsFromCreatorRequest;
                toJSON(message: _170.QueryDenomsFromCreatorRequest): unknown;
                fromPartial(object: {
                    creator?: string;
                }): _170.QueryDenomsFromCreatorRequest;
                fromSDK(object: _170.QueryDenomsFromCreatorRequestSDKType): _170.QueryDenomsFromCreatorRequest;
                toSDK(message: _170.QueryDenomsFromCreatorRequest): _170.QueryDenomsFromCreatorRequestSDKType;
                fromAmino(object: _170.QueryDenomsFromCreatorRequestAmino): _170.QueryDenomsFromCreatorRequest;
                toAmino(message: _170.QueryDenomsFromCreatorRequest): _170.QueryDenomsFromCreatorRequestAmino;
                fromAminoMsg(object: _170.QueryDenomsFromCreatorRequestAminoMsg): _170.QueryDenomsFromCreatorRequest;
                toAminoMsg(message: _170.QueryDenomsFromCreatorRequest): _170.QueryDenomsFromCreatorRequestAminoMsg;
                fromProtoMsg(message: _170.QueryDenomsFromCreatorRequestProtoMsg): _170.QueryDenomsFromCreatorRequest;
                toProto(message: _170.QueryDenomsFromCreatorRequest): Uint8Array;
                toProtoMsg(message: _170.QueryDenomsFromCreatorRequest): _170.QueryDenomsFromCreatorRequestProtoMsg;
            };
            QueryDenomsFromCreatorResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _170.QueryDenomsFromCreatorResponse;
                isSDK(o: any): o is _170.QueryDenomsFromCreatorResponseSDKType;
                isAmino(o: any): o is _170.QueryDenomsFromCreatorResponseAmino;
                encode(message: _170.QueryDenomsFromCreatorResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _170.QueryDenomsFromCreatorResponse;
                fromJSON(object: any): _170.QueryDenomsFromCreatorResponse;
                toJSON(message: _170.QueryDenomsFromCreatorResponse): unknown;
                fromPartial(object: {
                    denoms?: string[];
                }): _170.QueryDenomsFromCreatorResponse;
                fromSDK(object: _170.QueryDenomsFromCreatorResponseSDKType): _170.QueryDenomsFromCreatorResponse;
                toSDK(message: _170.QueryDenomsFromCreatorResponse): _170.QueryDenomsFromCreatorResponseSDKType;
                fromAmino(object: _170.QueryDenomsFromCreatorResponseAmino): _170.QueryDenomsFromCreatorResponse;
                toAmino(message: _170.QueryDenomsFromCreatorResponse): _170.QueryDenomsFromCreatorResponseAmino;
                fromAminoMsg(object: _170.QueryDenomsFromCreatorResponseAminoMsg): _170.QueryDenomsFromCreatorResponse;
                toAminoMsg(message: _170.QueryDenomsFromCreatorResponse): _170.QueryDenomsFromCreatorResponseAminoMsg;
                fromProtoMsg(message: _170.QueryDenomsFromCreatorResponseProtoMsg): _170.QueryDenomsFromCreatorResponse;
                toProto(message: _170.QueryDenomsFromCreatorResponse): Uint8Array;
                toProtoMsg(message: _170.QueryDenomsFromCreatorResponse): _170.QueryDenomsFromCreatorResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _169.Params;
                isSDK(o: any): o is _169.ParamsSDKType;
                isAmino(o: any): o is _169.ParamsAmino;
                encode(message: _169.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _169.Params;
                fromJSON(object: any): _169.Params;
                toJSON(message: _169.Params): unknown;
                fromPartial(object: {
                    denomCreationFee?: {
                        denom?: string;
                        amount?: string;
                    }[];
                }): _169.Params;
                fromSDK(object: _169.ParamsSDKType): _169.Params;
                toSDK(message: _169.Params): _169.ParamsSDKType;
                fromAmino(object: _169.ParamsAmino): _169.Params;
                toAmino(message: _169.Params): _169.ParamsAmino;
                fromAminoMsg(object: _169.ParamsAminoMsg): _169.Params;
                toAminoMsg(message: _169.Params): _169.ParamsAminoMsg;
                fromProtoMsg(message: _169.ParamsProtoMsg): _169.Params;
                toProto(message: _169.Params): Uint8Array;
                toProtoMsg(message: _169.Params): _169.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _168.GenesisState;
                isSDK(o: any): o is _168.GenesisStateSDKType;
                isAmino(o: any): o is _168.GenesisStateAmino;
                encode(message: _168.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _168.GenesisState;
                fromJSON(object: any): _168.GenesisState;
                toJSON(message: _168.GenesisState): unknown;
                fromPartial(object: {
                    params?: {
                        denomCreationFee?: {
                            denom?: string;
                            amount?: string;
                        }[];
                    };
                    factoryDenoms?: {
                        denom?: string;
                        authorityMetadata?: {
                            admin?: string;
                        };
                    }[];
                }): _168.GenesisState;
                fromSDK(object: _168.GenesisStateSDKType): _168.GenesisState;
                toSDK(message: _168.GenesisState): _168.GenesisStateSDKType;
                fromAmino(object: _168.GenesisStateAmino): _168.GenesisState;
                toAmino(message: _168.GenesisState): _168.GenesisStateAmino;
                fromAminoMsg(object: _168.GenesisStateAminoMsg): _168.GenesisState;
                toAminoMsg(message: _168.GenesisState): _168.GenesisStateAminoMsg;
                fromProtoMsg(message: _168.GenesisStateProtoMsg): _168.GenesisState;
                toProto(message: _168.GenesisState): Uint8Array;
                toProtoMsg(message: _168.GenesisState): _168.GenesisStateProtoMsg;
            };
            GenesisDenom: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _168.GenesisDenom;
                isSDK(o: any): o is _168.GenesisDenomSDKType;
                isAmino(o: any): o is _168.GenesisDenomAmino;
                encode(message: _168.GenesisDenom, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _168.GenesisDenom;
                fromJSON(object: any): _168.GenesisDenom;
                toJSON(message: _168.GenesisDenom): unknown;
                fromPartial(object: {
                    denom?: string;
                    authorityMetadata?: {
                        admin?: string;
                    };
                }): _168.GenesisDenom;
                fromSDK(object: _168.GenesisDenomSDKType): _168.GenesisDenom;
                toSDK(message: _168.GenesisDenom): _168.GenesisDenomSDKType;
                fromAmino(object: _168.GenesisDenomAmino): _168.GenesisDenom;
                toAmino(message: _168.GenesisDenom): _168.GenesisDenomAmino;
                fromAminoMsg(object: _168.GenesisDenomAminoMsg): _168.GenesisDenom;
                toAminoMsg(message: _168.GenesisDenom): _168.GenesisDenomAminoMsg;
                fromProtoMsg(message: _168.GenesisDenomProtoMsg): _168.GenesisDenom;
                toProto(message: _168.GenesisDenom): Uint8Array;
                toProtoMsg(message: _168.GenesisDenom): _168.GenesisDenomProtoMsg;
            };
            DenomAuthorityMetadata: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _167.DenomAuthorityMetadata;
                isSDK(o: any): o is _167.DenomAuthorityMetadataSDKType;
                isAmino(o: any): o is _167.DenomAuthorityMetadataAmino;
                encode(message: _167.DenomAuthorityMetadata, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _167.DenomAuthorityMetadata;
                fromJSON(object: any): _167.DenomAuthorityMetadata;
                toJSON(message: _167.DenomAuthorityMetadata): unknown;
                fromPartial(object: {
                    admin?: string;
                }): _167.DenomAuthorityMetadata;
                fromSDK(object: _167.DenomAuthorityMetadataSDKType): _167.DenomAuthorityMetadata;
                toSDK(message: _167.DenomAuthorityMetadata): _167.DenomAuthorityMetadataSDKType;
                fromAmino(object: _167.DenomAuthorityMetadataAmino): _167.DenomAuthorityMetadata;
                toAmino(message: _167.DenomAuthorityMetadata): _167.DenomAuthorityMetadataAmino;
                fromAminoMsg(object: _167.DenomAuthorityMetadataAminoMsg): _167.DenomAuthorityMetadata;
                toAminoMsg(message: _167.DenomAuthorityMetadata): _167.DenomAuthorityMetadataAminoMsg;
                fromProtoMsg(message: _167.DenomAuthorityMetadataProtoMsg): _167.DenomAuthorityMetadata;
                toProto(message: _167.DenomAuthorityMetadata): Uint8Array;
                toProtoMsg(message: _167.DenomAuthorityMetadata): _167.DenomAuthorityMetadataProtoMsg;
            };
        };
    }
    namespace twap {
        const v1beta1: {
            QueryClientImpl: typeof _294.QueryClientImpl;
            createClientImpl: (rpc: import("..").TxRpc) => _294.QueryClientImpl;
            createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                useParams: <TData = _173.ParamsResponse>({ request, options }: _294.UseParamsQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
                useArithmeticTwap: <TData_1 = _173.ArithmeticTwapResponse>({ request, options }: _294.UseArithmeticTwapQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
                useArithmeticTwapToNow: <TData_2 = _173.ArithmeticTwapToNowResponse>({ request, options }: _294.UseArithmeticTwapToNowQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
            };
            createRpcQueryMobxStores: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                QueryParamsStore: {
                    new (): {
                        store: import("..").QueryStore<_173.ParamsRequest, _173.ParamsResponse>;
                        params(request: _173.ParamsRequest): import("..").MobxResponse<_173.ParamsResponse>;
                    };
                };
                QueryArithmeticTwapStore: {
                    new (): {
                        store: import("..").QueryStore<_173.ArithmeticTwapRequest, _173.ArithmeticTwapResponse>;
                        arithmeticTwap(request: _173.ArithmeticTwapRequest): import("..").MobxResponse<_173.ArithmeticTwapResponse>;
                    };
                };
                QueryArithmeticTwapToNowStore: {
                    new (): {
                        store: import("..").QueryStore<_173.ArithmeticTwapToNowRequest, _173.ArithmeticTwapToNowResponse>;
                        arithmeticTwapToNow(request: _173.ArithmeticTwapToNowRequest): import("..").MobxResponse<_173.ArithmeticTwapToNowResponse>;
                    };
                };
            };
            TwapRecord: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _174.TwapRecord;
                isSDK(o: any): o is _174.TwapRecordSDKType;
                isAmino(o: any): o is _174.TwapRecordAmino;
                encode(message: _174.TwapRecord, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _174.TwapRecord;
                fromJSON(object: any): _174.TwapRecord;
                toJSON(message: _174.TwapRecord): unknown;
                fromPartial(object: {
                    poolId?: bigint;
                    asset0Denom?: string;
                    asset1Denom?: string;
                    height?: bigint;
                    time?: Date;
                    p0LastSpotPrice?: string;
                    p1LastSpotPrice?: string;
                    p0ArithmeticTwapAccumulator?: string;
                    p1ArithmeticTwapAccumulator?: string;
                    lastErrorTime?: Date;
                }): _174.TwapRecord;
                fromSDK(object: _174.TwapRecordSDKType): _174.TwapRecord;
                toSDK(message: _174.TwapRecord): _174.TwapRecordSDKType;
                fromAmino(object: _174.TwapRecordAmino): _174.TwapRecord;
                toAmino(message: _174.TwapRecord): _174.TwapRecordAmino;
                fromAminoMsg(object: _174.TwapRecordAminoMsg): _174.TwapRecord;
                toAminoMsg(message: _174.TwapRecord): _174.TwapRecordAminoMsg;
                fromProtoMsg(message: _174.TwapRecordProtoMsg): _174.TwapRecord;
                toProto(message: _174.TwapRecord): Uint8Array;
                toProtoMsg(message: _174.TwapRecord): _174.TwapRecordProtoMsg;
            };
            ArithmeticTwapRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _173.ArithmeticTwapRequest;
                isSDK(o: any): o is _173.ArithmeticTwapRequestSDKType;
                isAmino(o: any): o is _173.ArithmeticTwapRequestAmino;
                encode(message: _173.ArithmeticTwapRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.ArithmeticTwapRequest;
                fromJSON(object: any): _173.ArithmeticTwapRequest;
                toJSON(message: _173.ArithmeticTwapRequest): unknown;
                fromPartial(object: {
                    poolId?: bigint;
                    baseAsset?: string;
                    quoteAsset?: string;
                    startTime?: Date;
                    endTime?: Date;
                }): _173.ArithmeticTwapRequest;
                fromSDK(object: _173.ArithmeticTwapRequestSDKType): _173.ArithmeticTwapRequest;
                toSDK(message: _173.ArithmeticTwapRequest): _173.ArithmeticTwapRequestSDKType;
                fromAmino(object: _173.ArithmeticTwapRequestAmino): _173.ArithmeticTwapRequest;
                toAmino(message: _173.ArithmeticTwapRequest): _173.ArithmeticTwapRequestAmino;
                fromAminoMsg(object: _173.ArithmeticTwapRequestAminoMsg): _173.ArithmeticTwapRequest;
                toAminoMsg(message: _173.ArithmeticTwapRequest): _173.ArithmeticTwapRequestAminoMsg;
                fromProtoMsg(message: _173.ArithmeticTwapRequestProtoMsg): _173.ArithmeticTwapRequest;
                toProto(message: _173.ArithmeticTwapRequest): Uint8Array;
                toProtoMsg(message: _173.ArithmeticTwapRequest): _173.ArithmeticTwapRequestProtoMsg;
            };
            ArithmeticTwapResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _173.ArithmeticTwapResponse;
                isSDK(o: any): o is _173.ArithmeticTwapResponseSDKType;
                isAmino(o: any): o is _173.ArithmeticTwapResponseAmino;
                encode(message: _173.ArithmeticTwapResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.ArithmeticTwapResponse;
                fromJSON(object: any): _173.ArithmeticTwapResponse;
                toJSON(message: _173.ArithmeticTwapResponse): unknown;
                fromPartial(object: {
                    arithmeticTwap?: string;
                }): _173.ArithmeticTwapResponse;
                fromSDK(object: _173.ArithmeticTwapResponseSDKType): _173.ArithmeticTwapResponse;
                toSDK(message: _173.ArithmeticTwapResponse): _173.ArithmeticTwapResponseSDKType;
                fromAmino(object: _173.ArithmeticTwapResponseAmino): _173.ArithmeticTwapResponse;
                toAmino(message: _173.ArithmeticTwapResponse): _173.ArithmeticTwapResponseAmino;
                fromAminoMsg(object: _173.ArithmeticTwapResponseAminoMsg): _173.ArithmeticTwapResponse;
                toAminoMsg(message: _173.ArithmeticTwapResponse): _173.ArithmeticTwapResponseAminoMsg;
                fromProtoMsg(message: _173.ArithmeticTwapResponseProtoMsg): _173.ArithmeticTwapResponse;
                toProto(message: _173.ArithmeticTwapResponse): Uint8Array;
                toProtoMsg(message: _173.ArithmeticTwapResponse): _173.ArithmeticTwapResponseProtoMsg;
            };
            ArithmeticTwapToNowRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _173.ArithmeticTwapToNowRequest;
                isSDK(o: any): o is _173.ArithmeticTwapToNowRequestSDKType;
                isAmino(o: any): o is _173.ArithmeticTwapToNowRequestAmino;
                encode(message: _173.ArithmeticTwapToNowRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.ArithmeticTwapToNowRequest;
                fromJSON(object: any): _173.ArithmeticTwapToNowRequest;
                toJSON(message: _173.ArithmeticTwapToNowRequest): unknown;
                fromPartial(object: {
                    poolId?: bigint;
                    baseAsset?: string;
                    quoteAsset?: string;
                    startTime?: Date;
                }): _173.ArithmeticTwapToNowRequest;
                fromSDK(object: _173.ArithmeticTwapToNowRequestSDKType): _173.ArithmeticTwapToNowRequest;
                toSDK(message: _173.ArithmeticTwapToNowRequest): _173.ArithmeticTwapToNowRequestSDKType;
                fromAmino(object: _173.ArithmeticTwapToNowRequestAmino): _173.ArithmeticTwapToNowRequest;
                toAmino(message: _173.ArithmeticTwapToNowRequest): _173.ArithmeticTwapToNowRequestAmino;
                fromAminoMsg(object: _173.ArithmeticTwapToNowRequestAminoMsg): _173.ArithmeticTwapToNowRequest;
                toAminoMsg(message: _173.ArithmeticTwapToNowRequest): _173.ArithmeticTwapToNowRequestAminoMsg;
                fromProtoMsg(message: _173.ArithmeticTwapToNowRequestProtoMsg): _173.ArithmeticTwapToNowRequest;
                toProto(message: _173.ArithmeticTwapToNowRequest): Uint8Array;
                toProtoMsg(message: _173.ArithmeticTwapToNowRequest): _173.ArithmeticTwapToNowRequestProtoMsg;
            };
            ArithmeticTwapToNowResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _173.ArithmeticTwapToNowResponse;
                isSDK(o: any): o is _173.ArithmeticTwapToNowResponseSDKType;
                isAmino(o: any): o is _173.ArithmeticTwapToNowResponseAmino;
                encode(message: _173.ArithmeticTwapToNowResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.ArithmeticTwapToNowResponse;
                fromJSON(object: any): _173.ArithmeticTwapToNowResponse;
                toJSON(message: _173.ArithmeticTwapToNowResponse): unknown;
                fromPartial(object: {
                    arithmeticTwap?: string;
                }): _173.ArithmeticTwapToNowResponse;
                fromSDK(object: _173.ArithmeticTwapToNowResponseSDKType): _173.ArithmeticTwapToNowResponse;
                toSDK(message: _173.ArithmeticTwapToNowResponse): _173.ArithmeticTwapToNowResponseSDKType;
                fromAmino(object: _173.ArithmeticTwapToNowResponseAmino): _173.ArithmeticTwapToNowResponse;
                toAmino(message: _173.ArithmeticTwapToNowResponse): _173.ArithmeticTwapToNowResponseAmino;
                fromAminoMsg(object: _173.ArithmeticTwapToNowResponseAminoMsg): _173.ArithmeticTwapToNowResponse;
                toAminoMsg(message: _173.ArithmeticTwapToNowResponse): _173.ArithmeticTwapToNowResponseAminoMsg;
                fromProtoMsg(message: _173.ArithmeticTwapToNowResponseProtoMsg): _173.ArithmeticTwapToNowResponse;
                toProto(message: _173.ArithmeticTwapToNowResponse): Uint8Array;
                toProtoMsg(message: _173.ArithmeticTwapToNowResponse): _173.ArithmeticTwapToNowResponseProtoMsg;
            };
            ParamsRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _173.ParamsRequest;
                isSDK(o: any): o is _173.ParamsRequestSDKType;
                isAmino(o: any): o is _173.ParamsRequestAmino;
                encode(_: _173.ParamsRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.ParamsRequest;
                fromJSON(_: any): _173.ParamsRequest;
                toJSON(_: _173.ParamsRequest): unknown;
                fromPartial(_: {}): _173.ParamsRequest;
                fromSDK(_: _173.ParamsRequestSDKType): _173.ParamsRequest;
                toSDK(_: _173.ParamsRequest): _173.ParamsRequestSDKType;
                fromAmino(_: _173.ParamsRequestAmino): _173.ParamsRequest;
                toAmino(_: _173.ParamsRequest): _173.ParamsRequestAmino;
                fromAminoMsg(object: _173.ParamsRequestAminoMsg): _173.ParamsRequest;
                toAminoMsg(message: _173.ParamsRequest): _173.ParamsRequestAminoMsg;
                fromProtoMsg(message: _173.ParamsRequestProtoMsg): _173.ParamsRequest;
                toProto(message: _173.ParamsRequest): Uint8Array;
                toProtoMsg(message: _173.ParamsRequest): _173.ParamsRequestProtoMsg;
            };
            ParamsResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _173.ParamsResponse;
                isSDK(o: any): o is _173.ParamsResponseSDKType;
                isAmino(o: any): o is _173.ParamsResponseAmino;
                encode(message: _173.ParamsResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _173.ParamsResponse;
                fromJSON(object: any): _173.ParamsResponse;
                toJSON(message: _173.ParamsResponse): unknown;
                fromPartial(object: {
                    params?: {
                        pruneEpochIdentifier?: string;
                        recordHistoryKeepPeriod?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                    };
                }): _173.ParamsResponse;
                fromSDK(object: _173.ParamsResponseSDKType): _173.ParamsResponse;
                toSDK(message: _173.ParamsResponse): _173.ParamsResponseSDKType;
                fromAmino(object: _173.ParamsResponseAmino): _173.ParamsResponse;
                toAmino(message: _173.ParamsResponse): _173.ParamsResponseAmino;
                fromAminoMsg(object: _173.ParamsResponseAminoMsg): _173.ParamsResponse;
                toAminoMsg(message: _173.ParamsResponse): _173.ParamsResponseAminoMsg;
                fromProtoMsg(message: _173.ParamsResponseProtoMsg): _173.ParamsResponse;
                toProto(message: _173.ParamsResponse): Uint8Array;
                toProtoMsg(message: _173.ParamsResponse): _173.ParamsResponseProtoMsg;
            };
            Params: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _172.Params;
                isSDK(o: any): o is _172.ParamsSDKType;
                isAmino(o: any): o is _172.ParamsAmino;
                encode(message: _172.Params, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.Params;
                fromJSON(object: any): _172.Params;
                toJSON(message: _172.Params): unknown;
                fromPartial(object: {
                    pruneEpochIdentifier?: string;
                    recordHistoryKeepPeriod?: {
                        seconds?: bigint;
                        nanos?: number;
                    };
                }): _172.Params;
                fromSDK(object: _172.ParamsSDKType): _172.Params;
                toSDK(message: _172.Params): _172.ParamsSDKType;
                fromAmino(object: _172.ParamsAmino): _172.Params;
                toAmino(message: _172.Params): _172.ParamsAmino;
                fromAminoMsg(object: _172.ParamsAminoMsg): _172.Params;
                toAminoMsg(message: _172.Params): _172.ParamsAminoMsg;
                fromProtoMsg(message: _172.ParamsProtoMsg): _172.Params;
                toProto(message: _172.Params): Uint8Array;
                toProtoMsg(message: _172.Params): _172.ParamsProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _172.GenesisState;
                isSDK(o: any): o is _172.GenesisStateSDKType;
                isAmino(o: any): o is _172.GenesisStateAmino;
                encode(message: _172.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _172.GenesisState;
                fromJSON(object: any): _172.GenesisState;
                toJSON(message: _172.GenesisState): unknown;
                fromPartial(object: {
                    twaps?: {
                        poolId?: bigint;
                        asset0Denom?: string;
                        asset1Denom?: string;
                        height?: bigint;
                        time?: Date;
                        p0LastSpotPrice?: string;
                        p1LastSpotPrice?: string;
                        p0ArithmeticTwapAccumulator?: string;
                        p1ArithmeticTwapAccumulator?: string;
                        lastErrorTime?: Date;
                    }[];
                    params?: {
                        pruneEpochIdentifier?: string;
                        recordHistoryKeepPeriod?: {
                            seconds?: bigint;
                            nanos?: number;
                        };
                    };
                }): _172.GenesisState;
                fromSDK(object: _172.GenesisStateSDKType): _172.GenesisState;
                toSDK(message: _172.GenesisState): _172.GenesisStateSDKType;
                fromAmino(object: _172.GenesisStateAmino): _172.GenesisState;
                toAmino(message: _172.GenesisState): _172.GenesisStateAmino;
                fromAminoMsg(object: _172.GenesisStateAminoMsg): _172.GenesisState;
                toAminoMsg(message: _172.GenesisState): _172.GenesisStateAminoMsg;
                fromProtoMsg(message: _172.GenesisStateProtoMsg): _172.GenesisState;
                toProto(message: _172.GenesisState): Uint8Array;
                toProtoMsg(message: _172.GenesisState): _172.GenesisStateProtoMsg;
            };
        };
    }
    namespace txfees {
        const v1beta1: {
            QueryClientImpl: typeof _295.QueryClientImpl;
            createClientImpl: (rpc: import("..").TxRpc) => _295.QueryClientImpl;
            createRpcQueryHooks: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                useFeeTokens: <TData = _178.QueryFeeTokensResponse>({ request, options }: _295.UseFeeTokensQuery<TData>) => import("@tanstack/react-query").UseQueryResult<TData, Error>;
                useDenomSpotPrice: <TData_1 = _178.QueryDenomSpotPriceResponse>({ request, options }: _295.UseDenomSpotPriceQuery<TData_1>) => import("@tanstack/react-query").UseQueryResult<TData_1, Error>;
                useDenomPoolId: <TData_2 = _178.QueryDenomPoolIdResponse>({ request, options }: _295.UseDenomPoolIdQuery<TData_2>) => import("@tanstack/react-query").UseQueryResult<TData_2, Error>;
                useBaseDenom: <TData_3 = _178.QueryBaseDenomResponse>({ request, options }: _295.UseBaseDenomQuery<TData_3>) => import("@tanstack/react-query").UseQueryResult<TData_3, Error>;
            };
            createRpcQueryMobxStores: (rpc: import("@cosmjs/stargate").ProtobufRpcClient) => {
                QueryFeeTokensStore: {
                    new (): {
                        store: import("..").QueryStore<_178.QueryFeeTokensRequest, _178.QueryFeeTokensResponse>;
                        feeTokens(request: _178.QueryFeeTokensRequest): import("..").MobxResponse<_178.QueryFeeTokensResponse>;
                    };
                };
                QueryDenomSpotPriceStore: {
                    new (): {
                        store: import("..").QueryStore<_178.QueryDenomSpotPriceRequest, _178.QueryDenomSpotPriceResponse>;
                        denomSpotPrice(request: _178.QueryDenomSpotPriceRequest): import("..").MobxResponse<_178.QueryDenomSpotPriceResponse>;
                    };
                };
                QueryDenomPoolIdStore: {
                    new (): {
                        store: import("..").QueryStore<_178.QueryDenomPoolIdRequest, _178.QueryDenomPoolIdResponse>;
                        denomPoolId(request: _178.QueryDenomPoolIdRequest): import("..").MobxResponse<_178.QueryDenomPoolIdResponse>;
                    };
                };
                QueryBaseDenomStore: {
                    new (): {
                        store: import("..").QueryStore<_178.QueryBaseDenomRequest, _178.QueryBaseDenomResponse>;
                        baseDenom(request: _178.QueryBaseDenomRequest): import("..").MobxResponse<_178.QueryBaseDenomResponse>;
                    };
                };
            };
            QueryFeeTokensRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _178.QueryFeeTokensRequest;
                isSDK(o: any): o is _178.QueryFeeTokensRequestSDKType;
                isAmino(o: any): o is _178.QueryFeeTokensRequestAmino;
                encode(_: _178.QueryFeeTokensRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryFeeTokensRequest;
                fromJSON(_: any): _178.QueryFeeTokensRequest;
                toJSON(_: _178.QueryFeeTokensRequest): unknown;
                fromPartial(_: {}): _178.QueryFeeTokensRequest;
                fromSDK(_: _178.QueryFeeTokensRequestSDKType): _178.QueryFeeTokensRequest;
                toSDK(_: _178.QueryFeeTokensRequest): _178.QueryFeeTokensRequestSDKType;
                fromAmino(_: _178.QueryFeeTokensRequestAmino): _178.QueryFeeTokensRequest;
                toAmino(_: _178.QueryFeeTokensRequest): _178.QueryFeeTokensRequestAmino;
                fromAminoMsg(object: _178.QueryFeeTokensRequestAminoMsg): _178.QueryFeeTokensRequest;
                toAminoMsg(message: _178.QueryFeeTokensRequest): _178.QueryFeeTokensRequestAminoMsg;
                fromProtoMsg(message: _178.QueryFeeTokensRequestProtoMsg): _178.QueryFeeTokensRequest;
                toProto(message: _178.QueryFeeTokensRequest): Uint8Array;
                toProtoMsg(message: _178.QueryFeeTokensRequest): _178.QueryFeeTokensRequestProtoMsg;
            };
            QueryFeeTokensResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _178.QueryFeeTokensResponse;
                isSDK(o: any): o is _178.QueryFeeTokensResponseSDKType;
                isAmino(o: any): o is _178.QueryFeeTokensResponseAmino;
                encode(message: _178.QueryFeeTokensResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryFeeTokensResponse;
                fromJSON(object: any): _178.QueryFeeTokensResponse;
                toJSON(message: _178.QueryFeeTokensResponse): unknown;
                fromPartial(object: {
                    feeTokens?: {
                        denom?: string;
                        poolID?: bigint;
                    }[];
                }): _178.QueryFeeTokensResponse;
                fromSDK(object: _178.QueryFeeTokensResponseSDKType): _178.QueryFeeTokensResponse;
                toSDK(message: _178.QueryFeeTokensResponse): _178.QueryFeeTokensResponseSDKType;
                fromAmino(object: _178.QueryFeeTokensResponseAmino): _178.QueryFeeTokensResponse;
                toAmino(message: _178.QueryFeeTokensResponse): _178.QueryFeeTokensResponseAmino;
                fromAminoMsg(object: _178.QueryFeeTokensResponseAminoMsg): _178.QueryFeeTokensResponse;
                toAminoMsg(message: _178.QueryFeeTokensResponse): _178.QueryFeeTokensResponseAminoMsg;
                fromProtoMsg(message: _178.QueryFeeTokensResponseProtoMsg): _178.QueryFeeTokensResponse;
                toProto(message: _178.QueryFeeTokensResponse): Uint8Array;
                toProtoMsg(message: _178.QueryFeeTokensResponse): _178.QueryFeeTokensResponseProtoMsg;
            };
            QueryDenomSpotPriceRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _178.QueryDenomSpotPriceRequest;
                isSDK(o: any): o is _178.QueryDenomSpotPriceRequestSDKType;
                isAmino(o: any): o is _178.QueryDenomSpotPriceRequestAmino;
                encode(message: _178.QueryDenomSpotPriceRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryDenomSpotPriceRequest;
                fromJSON(object: any): _178.QueryDenomSpotPriceRequest;
                toJSON(message: _178.QueryDenomSpotPriceRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _178.QueryDenomSpotPriceRequest;
                fromSDK(object: _178.QueryDenomSpotPriceRequestSDKType): _178.QueryDenomSpotPriceRequest;
                toSDK(message: _178.QueryDenomSpotPriceRequest): _178.QueryDenomSpotPriceRequestSDKType;
                fromAmino(object: _178.QueryDenomSpotPriceRequestAmino): _178.QueryDenomSpotPriceRequest;
                toAmino(message: _178.QueryDenomSpotPriceRequest): _178.QueryDenomSpotPriceRequestAmino;
                fromAminoMsg(object: _178.QueryDenomSpotPriceRequestAminoMsg): _178.QueryDenomSpotPriceRequest;
                toAminoMsg(message: _178.QueryDenomSpotPriceRequest): _178.QueryDenomSpotPriceRequestAminoMsg;
                fromProtoMsg(message: _178.QueryDenomSpotPriceRequestProtoMsg): _178.QueryDenomSpotPriceRequest;
                toProto(message: _178.QueryDenomSpotPriceRequest): Uint8Array;
                toProtoMsg(message: _178.QueryDenomSpotPriceRequest): _178.QueryDenomSpotPriceRequestProtoMsg;
            };
            QueryDenomSpotPriceResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _178.QueryDenomSpotPriceResponse;
                isSDK(o: any): o is _178.QueryDenomSpotPriceResponseSDKType;
                isAmino(o: any): o is _178.QueryDenomSpotPriceResponseAmino;
                encode(message: _178.QueryDenomSpotPriceResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryDenomSpotPriceResponse;
                fromJSON(object: any): _178.QueryDenomSpotPriceResponse;
                toJSON(message: _178.QueryDenomSpotPriceResponse): unknown;
                fromPartial(object: {
                    poolID?: bigint;
                    spotPrice?: string;
                }): _178.QueryDenomSpotPriceResponse;
                fromSDK(object: _178.QueryDenomSpotPriceResponseSDKType): _178.QueryDenomSpotPriceResponse;
                toSDK(message: _178.QueryDenomSpotPriceResponse): _178.QueryDenomSpotPriceResponseSDKType;
                fromAmino(object: _178.QueryDenomSpotPriceResponseAmino): _178.QueryDenomSpotPriceResponse;
                toAmino(message: _178.QueryDenomSpotPriceResponse): _178.QueryDenomSpotPriceResponseAmino;
                fromAminoMsg(object: _178.QueryDenomSpotPriceResponseAminoMsg): _178.QueryDenomSpotPriceResponse;
                toAminoMsg(message: _178.QueryDenomSpotPriceResponse): _178.QueryDenomSpotPriceResponseAminoMsg;
                fromProtoMsg(message: _178.QueryDenomSpotPriceResponseProtoMsg): _178.QueryDenomSpotPriceResponse;
                toProto(message: _178.QueryDenomSpotPriceResponse): Uint8Array;
                toProtoMsg(message: _178.QueryDenomSpotPriceResponse): _178.QueryDenomSpotPriceResponseProtoMsg;
            };
            QueryDenomPoolIdRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _178.QueryDenomPoolIdRequest;
                isSDK(o: any): o is _178.QueryDenomPoolIdRequestSDKType;
                isAmino(o: any): o is _178.QueryDenomPoolIdRequestAmino;
                encode(message: _178.QueryDenomPoolIdRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryDenomPoolIdRequest;
                fromJSON(object: any): _178.QueryDenomPoolIdRequest;
                toJSON(message: _178.QueryDenomPoolIdRequest): unknown;
                fromPartial(object: {
                    denom?: string;
                }): _178.QueryDenomPoolIdRequest;
                fromSDK(object: _178.QueryDenomPoolIdRequestSDKType): _178.QueryDenomPoolIdRequest;
                toSDK(message: _178.QueryDenomPoolIdRequest): _178.QueryDenomPoolIdRequestSDKType;
                fromAmino(object: _178.QueryDenomPoolIdRequestAmino): _178.QueryDenomPoolIdRequest;
                toAmino(message: _178.QueryDenomPoolIdRequest): _178.QueryDenomPoolIdRequestAmino;
                fromAminoMsg(object: _178.QueryDenomPoolIdRequestAminoMsg): _178.QueryDenomPoolIdRequest;
                toAminoMsg(message: _178.QueryDenomPoolIdRequest): _178.QueryDenomPoolIdRequestAminoMsg;
                fromProtoMsg(message: _178.QueryDenomPoolIdRequestProtoMsg): _178.QueryDenomPoolIdRequest;
                toProto(message: _178.QueryDenomPoolIdRequest): Uint8Array;
                toProtoMsg(message: _178.QueryDenomPoolIdRequest): _178.QueryDenomPoolIdRequestProtoMsg;
            };
            QueryDenomPoolIdResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _178.QueryDenomPoolIdResponse;
                isSDK(o: any): o is _178.QueryDenomPoolIdResponseSDKType;
                isAmino(o: any): o is _178.QueryDenomPoolIdResponseAmino;
                encode(message: _178.QueryDenomPoolIdResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryDenomPoolIdResponse;
                fromJSON(object: any): _178.QueryDenomPoolIdResponse;
                toJSON(message: _178.QueryDenomPoolIdResponse): unknown;
                fromPartial(object: {
                    poolID?: bigint;
                }): _178.QueryDenomPoolIdResponse;
                fromSDK(object: _178.QueryDenomPoolIdResponseSDKType): _178.QueryDenomPoolIdResponse;
                toSDK(message: _178.QueryDenomPoolIdResponse): _178.QueryDenomPoolIdResponseSDKType;
                fromAmino(object: _178.QueryDenomPoolIdResponseAmino): _178.QueryDenomPoolIdResponse;
                toAmino(message: _178.QueryDenomPoolIdResponse): _178.QueryDenomPoolIdResponseAmino;
                fromAminoMsg(object: _178.QueryDenomPoolIdResponseAminoMsg): _178.QueryDenomPoolIdResponse;
                toAminoMsg(message: _178.QueryDenomPoolIdResponse): _178.QueryDenomPoolIdResponseAminoMsg;
                fromProtoMsg(message: _178.QueryDenomPoolIdResponseProtoMsg): _178.QueryDenomPoolIdResponse;
                toProto(message: _178.QueryDenomPoolIdResponse): Uint8Array;
                toProtoMsg(message: _178.QueryDenomPoolIdResponse): _178.QueryDenomPoolIdResponseProtoMsg;
            };
            QueryBaseDenomRequest: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _178.QueryBaseDenomRequest;
                isSDK(o: any): o is _178.QueryBaseDenomRequestSDKType;
                isAmino(o: any): o is _178.QueryBaseDenomRequestAmino;
                encode(_: _178.QueryBaseDenomRequest, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryBaseDenomRequest;
                fromJSON(_: any): _178.QueryBaseDenomRequest;
                toJSON(_: _178.QueryBaseDenomRequest): unknown;
                fromPartial(_: {}): _178.QueryBaseDenomRequest;
                fromSDK(_: _178.QueryBaseDenomRequestSDKType): _178.QueryBaseDenomRequest;
                toSDK(_: _178.QueryBaseDenomRequest): _178.QueryBaseDenomRequestSDKType;
                fromAmino(_: _178.QueryBaseDenomRequestAmino): _178.QueryBaseDenomRequest;
                toAmino(_: _178.QueryBaseDenomRequest): _178.QueryBaseDenomRequestAmino;
                fromAminoMsg(object: _178.QueryBaseDenomRequestAminoMsg): _178.QueryBaseDenomRequest;
                toAminoMsg(message: _178.QueryBaseDenomRequest): _178.QueryBaseDenomRequestAminoMsg;
                fromProtoMsg(message: _178.QueryBaseDenomRequestProtoMsg): _178.QueryBaseDenomRequest;
                toProto(message: _178.QueryBaseDenomRequest): Uint8Array;
                toProtoMsg(message: _178.QueryBaseDenomRequest): _178.QueryBaseDenomRequestProtoMsg;
            };
            QueryBaseDenomResponse: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _178.QueryBaseDenomResponse;
                isSDK(o: any): o is _178.QueryBaseDenomResponseSDKType;
                isAmino(o: any): o is _178.QueryBaseDenomResponseAmino;
                encode(message: _178.QueryBaseDenomResponse, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _178.QueryBaseDenomResponse;
                fromJSON(object: any): _178.QueryBaseDenomResponse;
                toJSON(message: _178.QueryBaseDenomResponse): unknown;
                fromPartial(object: {
                    baseDenom?: string;
                }): _178.QueryBaseDenomResponse;
                fromSDK(object: _178.QueryBaseDenomResponseSDKType): _178.QueryBaseDenomResponse;
                toSDK(message: _178.QueryBaseDenomResponse): _178.QueryBaseDenomResponseSDKType;
                fromAmino(object: _178.QueryBaseDenomResponseAmino): _178.QueryBaseDenomResponse;
                toAmino(message: _178.QueryBaseDenomResponse): _178.QueryBaseDenomResponseAmino;
                fromAminoMsg(object: _178.QueryBaseDenomResponseAminoMsg): _178.QueryBaseDenomResponse;
                toAminoMsg(message: _178.QueryBaseDenomResponse): _178.QueryBaseDenomResponseAminoMsg;
                fromProtoMsg(message: _178.QueryBaseDenomResponseProtoMsg): _178.QueryBaseDenomResponse;
                toProto(message: _178.QueryBaseDenomResponse): Uint8Array;
                toProtoMsg(message: _178.QueryBaseDenomResponse): _178.QueryBaseDenomResponseProtoMsg;
            };
            UpdateFeeTokenProposal: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _177.UpdateFeeTokenProposal;
                isSDK(o: any): o is _177.UpdateFeeTokenProposalSDKType;
                isAmino(o: any): o is _177.UpdateFeeTokenProposalAmino;
                encode(message: _177.UpdateFeeTokenProposal, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _177.UpdateFeeTokenProposal;
                fromJSON(object: any): _177.UpdateFeeTokenProposal;
                toJSON(message: _177.UpdateFeeTokenProposal): unknown;
                fromPartial(object: {
                    $typeUrl?: "/osmosis.txfees.v1beta1.UpdateFeeTokenProposal";
                    title?: string;
                    description?: string;
                    feetoken?: {
                        denom?: string;
                        poolID?: bigint;
                    };
                }): _177.UpdateFeeTokenProposal;
                fromSDK(object: _177.UpdateFeeTokenProposalSDKType): _177.UpdateFeeTokenProposal;
                toSDK(message: _177.UpdateFeeTokenProposal): _177.UpdateFeeTokenProposalSDKType;
                fromAmino(object: _177.UpdateFeeTokenProposalAmino): _177.UpdateFeeTokenProposal;
                toAmino(message: _177.UpdateFeeTokenProposal): _177.UpdateFeeTokenProposalAmino;
                fromAminoMsg(object: _177.UpdateFeeTokenProposalAminoMsg): _177.UpdateFeeTokenProposal;
                toAminoMsg(message: _177.UpdateFeeTokenProposal): _177.UpdateFeeTokenProposalAminoMsg;
                fromProtoMsg(message: _177.UpdateFeeTokenProposalProtoMsg): _177.UpdateFeeTokenProposal;
                toProto(message: _177.UpdateFeeTokenProposal): Uint8Array;
                toProtoMsg(message: _177.UpdateFeeTokenProposal): _177.UpdateFeeTokenProposalProtoMsg;
            };
            GenesisState: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _176.GenesisState;
                isSDK(o: any): o is _176.GenesisStateSDKType;
                isAmino(o: any): o is _176.GenesisStateAmino;
                encode(message: _176.GenesisState, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _176.GenesisState;
                fromJSON(object: any): _176.GenesisState;
                toJSON(message: _176.GenesisState): unknown;
                fromPartial(object: {
                    basedenom?: string;
                    feetokens?: {
                        denom?: string;
                        poolID?: bigint;
                    }[];
                }): _176.GenesisState;
                fromSDK(object: _176.GenesisStateSDKType): _176.GenesisState;
                toSDK(message: _176.GenesisState): _176.GenesisStateSDKType;
                fromAmino(object: _176.GenesisStateAmino): _176.GenesisState;
                toAmino(message: _176.GenesisState): _176.GenesisStateAmino;
                fromAminoMsg(object: _176.GenesisStateAminoMsg): _176.GenesisState;
                toAminoMsg(message: _176.GenesisState): _176.GenesisStateAminoMsg;
                fromProtoMsg(message: _176.GenesisStateProtoMsg): _176.GenesisState;
                toProto(message: _176.GenesisState): Uint8Array;
                toProtoMsg(message: _176.GenesisState): _176.GenesisStateProtoMsg;
            };
            FeeToken: {
                typeUrl: string;
                aminoType: string;
                is(o: any): o is _175.FeeToken;
                isSDK(o: any): o is _175.FeeTokenSDKType;
                isAmino(o: any): o is _175.FeeTokenAmino;
                encode(message: _175.FeeToken, writer?: import("..").BinaryWriter): import("..").BinaryWriter;
                decode(input: Uint8Array | import("..").BinaryReader, length?: number): _175.FeeToken;
                fromJSON(object: any): _175.FeeToken;
                toJSON(message: _175.FeeToken): unknown;
                fromPartial(object: {
                    denom?: string;
                    poolID?: bigint;
                }): _175.FeeToken;
                fromSDK(object: _175.FeeTokenSDKType): _175.FeeToken;
                toSDK(message: _175.FeeToken): _175.FeeTokenSDKType;
                fromAmino(object: _175.FeeTokenAmino): _175.FeeToken;
                toAmino(message: _175.FeeToken): _175.FeeTokenAmino;
                fromAminoMsg(object: _175.FeeTokenAminoMsg): _175.FeeToken;
                toAminoMsg(message: _175.FeeToken): _175.FeeTokenAminoMsg;
                fromProtoMsg(message: _175.FeeTokenProtoMsg): _175.FeeToken;
                toProto(message: _175.FeeToken): Uint8Array;
                toProtoMsg(message: _175.FeeToken): _175.FeeTokenProtoMsg;
            };
        };
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
            osmosis: {
                gamm: {
                    poolmodels: {
                        balancer: {
                            v1beta1: _296.MsgClientImpl;
                        };
                        stableswap: {
                            v1beta1: _297.MsgClientImpl;
                        };
                    };
                };
                incentives: _298.MsgClientImpl;
                lockup: _299.MsgClientImpl;
                superfluid: _300.MsgClientImpl;
                tokenfactory: {
                    v1beta1: _301.MsgClientImpl;
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
            osmosis: {
                claim: {
                    v1beta1: _284.QueryClientImpl;
                };
                epochs: {
                    v1beta1: _285.QueryClientImpl;
                };
                gamm: {
                    v2: _286.QueryClientImpl;
                };
                ibcratelimit: {
                    v1beta1: _287.QueryClientImpl;
                };
                incentives: _288.QueryClientImpl;
                lockup: _289.QueryClientImpl;
                mint: {
                    v1beta1: _290.QueryClientImpl;
                };
                poolincentives: {
                    v1beta1: _291.QueryClientImpl;
                };
                superfluid: _292.QueryClientImpl;
                tokenfactory: {
                    v1beta1: _293.QueryClientImpl;
                };
                twap: {
                    v1beta1: _294.QueryClientImpl;
                };
                txfees: {
                    v1beta1: _295.QueryClientImpl;
                };
            };
        }>;
    };
}
