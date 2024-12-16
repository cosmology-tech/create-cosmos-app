import { Downtime, DowntimeSDKType } from "./downtime_duration";
import { Duration, DurationSDKType } from "../../../google/protobuf/duration";
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { VueQueryParams } from "../../../vue-query";
import { ComputedRef, computed, Ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { RecoveredSinceDowntimeOfLengthRequest, RecoveredSinceDowntimeOfLengthRequestSDKType, RecoveredSinceDowntimeOfLengthResponse, RecoveredSinceDowntimeOfLengthResponseSDKType, ReactiveRecoveredSinceDowntimeOfLengthRequest } from "./query";
export interface Query {
  recoveredSinceDowntimeOfLength(request: RecoveredSinceDowntimeOfLengthRequest): Promise<RecoveredSinceDowntimeOfLengthResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.recoveredSinceDowntimeOfLength = this.recoveredSinceDowntimeOfLength.bind(this);
  }
  recoveredSinceDowntimeOfLength(request: RecoveredSinceDowntimeOfLengthRequest): Promise<RecoveredSinceDowntimeOfLengthResponse> {
    const data = RecoveredSinceDowntimeOfLengthRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.downtimedetector.v1beta1.Query", "RecoveredSinceDowntimeOfLength", data);
    return promise.then(data => RecoveredSinceDowntimeOfLengthResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    recoveredSinceDowntimeOfLength(request: RecoveredSinceDowntimeOfLengthRequest): Promise<RecoveredSinceDowntimeOfLengthResponse> {
      return queryService.recoveredSinceDowntimeOfLength(request);
    }
  };
};
export interface UseRecoveredSinceDowntimeOfLengthQuery<TData> extends VueQueryParams<RecoveredSinceDowntimeOfLengthResponse, TData> {
  request: ReactiveRecoveredSinceDowntimeOfLengthRequest;
}
export const useQueryService = (rpc: Ref<ProtobufRpcClient | undefined>): ComputedRef<QueryClientImpl | undefined> => {
  const _queryClients = new WeakMap();
  return computed(() => {
    if (rpc.value) {
      if (_queryClients.has(rpc.value)) {
        return _queryClients.get(rpc.value);
      }
      const queryService = new QueryClientImpl(rpc.value);
      _queryClients.set(rpc.value, queryService);
      return queryService;
    }
  });
};
export const createRpcQueryHooks = (rpc: Ref<ProtobufRpcClient | undefined>) => {
  const queryService = useQueryService(rpc);
  const useRecoveredSinceDowntimeOfLength = <TData = RecoveredSinceDowntimeOfLengthResponse,>({
    request,
    options
  }: UseRecoveredSinceDowntimeOfLengthQuery<TData>) => {
    const queryKey = ["recoveredSinceDowntimeOfLengthQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<RecoveredSinceDowntimeOfLengthResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.recoveredSinceDowntimeOfLength(params);
      },
      ...options
    });
  };
  return {
    useRecoveredSinceDowntimeOfLength
  };
};