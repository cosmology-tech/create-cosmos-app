import { CertificateFilter, CertificateFilterSDKType, Certificate, CertificateSDKType } from "./cert";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryCertificatesRequest, QueryCertificatesRequestSDKType, QueryCertificatesResponse, QueryCertificatesResponseSDKType, ReactiveQueryCertificatesRequest } from "./query";
/** Query defines the gRPC querier service */
export interface Query {
  /** Certificates queries certificates */
  certificates(request: QueryCertificatesRequest): Promise<QueryCertificatesResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  /* Certificates queries certificates */
  certificates = async (request: QueryCertificatesRequest): Promise<QueryCertificatesResponse> => {
    const data = QueryCertificatesRequest.encode(request).finish();
    const promise = this.rpc.request("akash.cert.v1beta2.Query", "Certificates", data);
    return promise.then(data => QueryCertificatesResponse.decode(new BinaryReader(data)));
  };
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    certificates(request: QueryCertificatesRequest): Promise<QueryCertificatesResponse> {
      return queryService.certificates(request);
    }
  };
};