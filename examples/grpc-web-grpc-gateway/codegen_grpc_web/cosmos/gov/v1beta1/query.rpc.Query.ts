import { grpc } from "@improbable-eng/grpc-web";
import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { BrowserHeaders } from "browser-headers";
import { QueryProposalRequest, QueryProposalResponse, QueryProposalsRequest, QueryProposalsResponse, QueryVoteRequest, QueryVoteResponse, QueryVotesRequest, QueryVotesResponse, QueryParamsRequest, QueryParamsResponse, QueryDepositRequest, QueryDepositResponse, QueryDepositsRequest, QueryDepositsResponse, QueryTallyResultRequest, QueryTallyResultResponse } from "./query";
/** Query defines the gRPC querier service for gov module */
export interface Query {
  /** Proposal queries proposal details based on ProposalID. */
  proposal(request: DeepPartial<QueryProposalRequest>, metadata?: grpc.Metadata): Promise<QueryProposalResponse>;
  /** Proposals queries all proposals based on given status. */
  proposals(request: DeepPartial<QueryProposalsRequest>, metadata?: grpc.Metadata): Promise<QueryProposalsResponse>;
  /** Vote queries voted information based on proposalID, voterAddr. */
  vote(request: DeepPartial<QueryVoteRequest>, metadata?: grpc.Metadata): Promise<QueryVoteResponse>;
  /** Votes queries votes of a given proposal. */
  votes(request: DeepPartial<QueryVotesRequest>, metadata?: grpc.Metadata): Promise<QueryVotesResponse>;
  /** Params queries all parameters of the gov module. */
  params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse>;
  /** Deposit queries single deposit information based proposalID, depositAddr. */
  deposit(request: DeepPartial<QueryDepositRequest>, metadata?: grpc.Metadata): Promise<QueryDepositResponse>;
  /** Deposits queries all deposits of a single proposal. */
  deposits(request: DeepPartial<QueryDepositsRequest>, metadata?: grpc.Metadata): Promise<QueryDepositsResponse>;
  /** TallyResult queries the tally of a proposal vote. */
  tallyResult(request: DeepPartial<QueryTallyResultRequest>, metadata?: grpc.Metadata): Promise<QueryTallyResultResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.proposal = this.proposal.bind(this);
    this.proposals = this.proposals.bind(this);
    this.vote = this.vote.bind(this);
    this.votes = this.votes.bind(this);
    this.params = this.params.bind(this);
    this.deposit = this.deposit.bind(this);
    this.deposits = this.deposits.bind(this);
    this.tallyResult = this.tallyResult.bind(this);
  }
  proposal(request: DeepPartial<QueryProposalRequest>, metadata?: grpc.Metadata): Promise<QueryProposalResponse> {
    return this.rpc.unary(QueryProposalDesc, QueryProposalRequest.fromPartial(request), metadata);
  }
  proposals(request: DeepPartial<QueryProposalsRequest>, metadata?: grpc.Metadata): Promise<QueryProposalsResponse> {
    return this.rpc.unary(QueryProposalsDesc, QueryProposalsRequest.fromPartial(request), metadata);
  }
  vote(request: DeepPartial<QueryVoteRequest>, metadata?: grpc.Metadata): Promise<QueryVoteResponse> {
    return this.rpc.unary(QueryVoteDesc, QueryVoteRequest.fromPartial(request), metadata);
  }
  votes(request: DeepPartial<QueryVotesRequest>, metadata?: grpc.Metadata): Promise<QueryVotesResponse> {
    return this.rpc.unary(QueryVotesDesc, QueryVotesRequest.fromPartial(request), metadata);
  }
  params(request: DeepPartial<QueryParamsRequest>, metadata?: grpc.Metadata): Promise<QueryParamsResponse> {
    return this.rpc.unary(QueryParamsDesc, QueryParamsRequest.fromPartial(request), metadata);
  }
  deposit(request: DeepPartial<QueryDepositRequest>, metadata?: grpc.Metadata): Promise<QueryDepositResponse> {
    return this.rpc.unary(QueryDepositDesc, QueryDepositRequest.fromPartial(request), metadata);
  }
  deposits(request: DeepPartial<QueryDepositsRequest>, metadata?: grpc.Metadata): Promise<QueryDepositsResponse> {
    return this.rpc.unary(QueryDepositsDesc, QueryDepositsRequest.fromPartial(request), metadata);
  }
  tallyResult(request: DeepPartial<QueryTallyResultRequest>, metadata?: grpc.Metadata): Promise<QueryTallyResultResponse> {
    return this.rpc.unary(QueryTallyResultDesc, QueryTallyResultRequest.fromPartial(request), metadata);
  }
}
export const QueryDesc = {
  serviceName: "cosmos.gov.v1beta1.Query"
};
export const QueryProposalDesc: UnaryMethodDefinitionish = {
  methodName: "Proposal",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryProposalRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryProposalResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryProposalsDesc: UnaryMethodDefinitionish = {
  methodName: "Proposals",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryProposalsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryProposalsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryVoteDesc: UnaryMethodDefinitionish = {
  methodName: "Vote",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryVoteRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryVoteResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryVotesDesc: UnaryMethodDefinitionish = {
  methodName: "Votes",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryVotesRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryVotesResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryParamsDesc: UnaryMethodDefinitionish = {
  methodName: "Params",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryParamsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryParamsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryDepositDesc: UnaryMethodDefinitionish = {
  methodName: "Deposit",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryDepositRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryDepositResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryDepositsDesc: UnaryMethodDefinitionish = {
  methodName: "Deposits",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryDepositsRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryDepositsResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const QueryTallyResultDesc: UnaryMethodDefinitionish = {
  methodName: "TallyResult",
  service: QueryDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return QueryTallyResultRequest.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...QueryTallyResultResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(methodDesc: T, request: any, metadata: grpc.Metadata | undefined): Promise<any>;
}
export class GrpcWebImpl {
  host: string;
  options: {
    transport?: grpc.TransportFactory;
    debug?: boolean;
    metadata?: grpc.Metadata;
  };
  constructor(host: string, options: {
    transport?: grpc.TransportFactory;
    debug?: boolean;
    metadata?: grpc.Metadata;
  }) {
    this.host = host;
    this.options = options;
  }
  unary<T extends UnaryMethodDefinitionish>(methodDesc: T, _request: any, metadata: grpc.Metadata | undefined) {
    const request = {
      ..._request,
      ...methodDesc.requestType
    };
    const maybeCombinedMetadata = metadata && this.options.metadata ? new BrowserHeaders({
      ...this.options?.metadata.headersMap,
      ...metadata?.headersMap
    }) : metadata || this.options.metadata;
    return new Promise((resolve, reject) => {
      grpc.unary(methodDesc, {
        request,
        host: this.host,
        metadata: maybeCombinedMetadata,
        transport: this.options.transport,
        debug: this.options.debug,
        onEnd: function (response) {
          if (response.status === grpc.Code.OK) {
            resolve(response.message);
          } else {
            const err = (new Error(response.statusMessage) as any);
            err.code = response.status;
            err.metadata = response.trailers;
            reject(err);
          }
        }
      });
    });
  }
}