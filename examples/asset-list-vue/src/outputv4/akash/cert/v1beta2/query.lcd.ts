import { CertificateFilter, CertificateFilterSDKType, Certificate, CertificateSDKType } from "./cert";
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryCertificatesRequest, QueryCertificatesRequestSDKType, QueryCertificatesResponse, QueryCertificatesResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* Certificates queries certificates */
  certificates = async (params: QueryCertificatesRequest): Promise<QueryCertificatesResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.filter !== "undefined") {
      options.params.filter = params.filter;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `akash/cert/v1beta2/certificates/list`;
    return QueryCertificatesResponse.fromSDKJSON(await this.req.get<QueryCertificatesResponseSDKType>(endpoint, options));
  };
}