import { ValidatorPreference, ValidatorPreferenceSDKType } from "./state";
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient, ProtobufRpcClient } from "@cosmjs/stargate";
import { VueQueryParams } from "../../../vue-query";
import { ComputedRef, computed, Ref } from "vue";
import { useQuery } from "@tanstack/vue-query";
import { UserValidatorPreferencesRequest, UserValidatorPreferencesRequestSDKType, UserValidatorPreferencesResponse, UserValidatorPreferencesResponseSDKType, ReactiveUserValidatorPreferencesRequest } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** Returns the list of ValidatorPreferences for the user. */
  userValidatorPreferences(request: UserValidatorPreferencesRequest): Promise<UserValidatorPreferencesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.userValidatorPreferences = this.userValidatorPreferences.bind(this);
  }
  userValidatorPreferences(request: UserValidatorPreferencesRequest): Promise<UserValidatorPreferencesResponse> {
    const data = UserValidatorPreferencesRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.valsetpref.v1beta1.Query", "UserValidatorPreferences", data);
    return promise.then(data => UserValidatorPreferencesResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    userValidatorPreferences(request: UserValidatorPreferencesRequest): Promise<UserValidatorPreferencesResponse> {
      return queryService.userValidatorPreferences(request);
    }
  };
};
export interface UseUserValidatorPreferencesQuery<TData> extends VueQueryParams<UserValidatorPreferencesResponse, TData> {
  request: ReactiveUserValidatorPreferencesRequest;
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
  const useUserValidatorPreferences = <TData = UserValidatorPreferencesResponse,>({
    request,
    options
  }: UseUserValidatorPreferencesQuery<TData>) => {
    const queryKey = ["userValidatorPreferencesQuery", queryService];
    if (request) {
      Object.values(request).forEach((val: any) => {
        queryKey.push(val);
      });
    }
    return useQuery<UserValidatorPreferencesResponse, Error, TData>({
      queryKey,
      queryFn: () => {
        if (!queryService.value) throw new Error("Query Service not initialized");
        let params = ({} as any);
        if (request) {
          Object.entries(request).forEach(([key, val]) => {
            params[key] = val.value;
          });
        }
        return queryService.value.userValidatorPreferences(params);
      },
      ...options
    });
  };
  return {
    /** Returns the list of ValidatorPreferences for the user. */useUserValidatorPreferences
  };
};