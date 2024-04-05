//@ts-nocheck
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { ContractInfo, ContractInfoSDKType, ContractCodeHistoryEntry, ContractCodeHistoryEntrySDKType, Model, ModelSDKType } from "./types";
import { TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryContractInfoRequest, QueryContractInfoRequestSDKType, QueryContractInfoResponse, QueryContractInfoResponseSDKType, QueryContractHistoryRequest, QueryContractHistoryRequestSDKType, QueryContractHistoryResponse, QueryContractHistoryResponseSDKType, QueryContractsByCodeRequest, QueryContractsByCodeRequestSDKType, QueryContractsByCodeResponse, QueryContractsByCodeResponseSDKType, QueryAllContractStateRequest, QueryAllContractStateRequestSDKType, QueryAllContractStateResponse, QueryAllContractStateResponseSDKType, QueryRawContractStateRequest, QueryRawContractStateRequestSDKType, QueryRawContractStateResponse, QueryRawContractStateResponseSDKType, QuerySmartContractStateRequest, QuerySmartContractStateRequestSDKType, QuerySmartContractStateResponse, QuerySmartContractStateResponseSDKType, QueryCodeRequest, QueryCodeRequestSDKType, QueryCodeResponse, QueryCodeResponseSDKType, QueryCodesRequest, QueryCodesRequestSDKType, QueryCodesResponse, QueryCodesResponseSDKType, QueryPinnedCodesRequest, QueryPinnedCodesRequestSDKType, QueryPinnedCodesResponse, QueryPinnedCodesResponseSDKType } from "./query";
/** Query provides defines the gRPC querier service */
export interface Query {
  /** ContractInfo gets the contract meta data */
  contractInfo(request: QueryContractInfoRequest): Promise<QueryContractInfoResponse>;
  /** ContractHistory gets the contract code history */
  contractHistory(request: QueryContractHistoryRequest): Promise<QueryContractHistoryResponse>;
  /** ContractsByCode lists all smart contracts for a code id */
  contractsByCode(request: QueryContractsByCodeRequest): Promise<QueryContractsByCodeResponse>;
  /** AllContractState gets all raw store data for a single contract */
  allContractState(request: QueryAllContractStateRequest): Promise<QueryAllContractStateResponse>;
  /** RawContractState gets single key from the raw store data of a contract */
  rawContractState(request: QueryRawContractStateRequest): Promise<QueryRawContractStateResponse>;
  /** SmartContractState get smart query result from the contract */
  smartContractState(request: QuerySmartContractStateRequest): Promise<QuerySmartContractStateResponse>;
  /** Code gets the binary code and metadata for a singe wasm code */
  code(request: QueryCodeRequest): Promise<QueryCodeResponse>;
  /** Codes gets the metadata for all stored wasm codes */
  codes(request?: QueryCodesRequest): Promise<QueryCodesResponse>;
  /** PinnedCodes gets the pinned code ids */
  pinnedCodes(request?: QueryPinnedCodesRequest): Promise<QueryPinnedCodesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* ContractInfo gets the contract meta data */
  contractInfo = async (request: QueryContractInfoRequest): Promise<QueryContractInfoResponse> => {
    const data = QueryContractInfoRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "ContractInfo", data);
    return promise.then(data => QueryContractInfoResponse.decode(new BinaryReader(data)));
  };
  /* ContractHistory gets the contract code history */
  contractHistory = async (request: QueryContractHistoryRequest): Promise<QueryContractHistoryResponse> => {
    const data = QueryContractHistoryRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "ContractHistory", data);
    return promise.then(data => QueryContractHistoryResponse.decode(new BinaryReader(data)));
  };
  /* ContractsByCode lists all smart contracts for a code id */
  contractsByCode = async (request: QueryContractsByCodeRequest): Promise<QueryContractsByCodeResponse> => {
    const data = QueryContractsByCodeRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "ContractsByCode", data);
    return promise.then(data => QueryContractsByCodeResponse.decode(new BinaryReader(data)));
  };
  /* AllContractState gets all raw store data for a single contract */
  allContractState = async (request: QueryAllContractStateRequest): Promise<QueryAllContractStateResponse> => {
    const data = QueryAllContractStateRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "AllContractState", data);
    return promise.then(data => QueryAllContractStateResponse.decode(new BinaryReader(data)));
  };
  /* RawContractState gets single key from the raw store data of a contract */
  rawContractState = async (request: QueryRawContractStateRequest): Promise<QueryRawContractStateResponse> => {
    const data = QueryRawContractStateRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "RawContractState", data);
    return promise.then(data => QueryRawContractStateResponse.decode(new BinaryReader(data)));
  };
  /* SmartContractState get smart query result from the contract */
  smartContractState = async (request: QuerySmartContractStateRequest): Promise<QuerySmartContractStateResponse> => {
    const data = QuerySmartContractStateRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "SmartContractState", data);
    return promise.then(data => QuerySmartContractStateResponse.decode(new BinaryReader(data)));
  };
  /* Code gets the binary code and metadata for a singe wasm code */
  code = async (request: QueryCodeRequest): Promise<QueryCodeResponse> => {
    const data = QueryCodeRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "Code", data);
    return promise.then(data => QueryCodeResponse.decode(new BinaryReader(data)));
  };
  /* Codes gets the metadata for all stored wasm codes */
  codes = async (request: QueryCodesRequest = {
    pagination: PageRequest.fromPartial({})
  }): Promise<QueryCodesResponse> => {
    const data = QueryCodesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "Codes", data);
    return promise.then(data => QueryCodesResponse.decode(new BinaryReader(data)));
  };
  /* PinnedCodes gets the pinned code ids */
  pinnedCodes = async (request: QueryPinnedCodesRequest = {
    pagination: PageRequest.fromPartial({})
  }): Promise<QueryPinnedCodesResponse> => {
    const data = QueryPinnedCodesRequest.encode(request).finish();
    const promise = this.rpc.request("cosmwasm.wasm.v1.Query", "PinnedCodes", data);
    return promise.then(data => QueryPinnedCodesResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    contractInfo(request: QueryContractInfoRequest): Promise<QueryContractInfoResponse> {
      return queryService.contractInfo(request);
    },
    contractHistory(request: QueryContractHistoryRequest): Promise<QueryContractHistoryResponse> {
      return queryService.contractHistory(request);
    },
    contractsByCode(request: QueryContractsByCodeRequest): Promise<QueryContractsByCodeResponse> {
      return queryService.contractsByCode(request);
    },
    allContractState(request: QueryAllContractStateRequest): Promise<QueryAllContractStateResponse> {
      return queryService.allContractState(request);
    },
    rawContractState(request: QueryRawContractStateRequest): Promise<QueryRawContractStateResponse> {
      return queryService.rawContractState(request);
    },
    smartContractState(request: QuerySmartContractStateRequest): Promise<QuerySmartContractStateResponse> {
      return queryService.smartContractState(request);
    },
    code(request: QueryCodeRequest): Promise<QueryCodeResponse> {
      return queryService.code(request);
    },
    codes(request?: QueryCodesRequest): Promise<QueryCodesResponse> {
      return queryService.codes(request);
    },
    pinnedCodes(request?: QueryPinnedCodesRequest): Promise<QueryPinnedCodesResponse> {
      return queryService.pinnedCodes(request);
    }
  };
};