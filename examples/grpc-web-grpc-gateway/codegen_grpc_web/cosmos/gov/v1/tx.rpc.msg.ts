import { UnaryMethodDefinitionish } from "../../../grpc-web";
import { DeepPartial } from "../../../helpers";
import { grpc } from "@improbable-eng/grpc-web";
import { BrowserHeaders } from "browser-headers";
import { MsgSubmitProposal, MsgSubmitProposalResponse, MsgExecLegacyContent, MsgExecLegacyContentResponse, MsgVote, MsgVoteResponse, MsgVoteWeighted, MsgVoteWeightedResponse, MsgDeposit, MsgDepositResponse } from "./tx";
/** Msg defines the gov Msg service. */
export interface Msg {
  /** SubmitProposal defines a method to create new proposal given a content. */
  submitProposal(request: DeepPartial<MsgSubmitProposal>, metadata?: grpc.Metadata): Promise<MsgSubmitProposalResponse>;
  /**
   * ExecLegacyContent defines a Msg to be in included in a MsgSubmitProposal
   * to execute a legacy content-based proposal.
   */
  execLegacyContent(request: DeepPartial<MsgExecLegacyContent>, metadata?: grpc.Metadata): Promise<MsgExecLegacyContentResponse>;
  /** Vote defines a method to add a vote on a specific proposal. */
  vote(request: DeepPartial<MsgVote>, metadata?: grpc.Metadata): Promise<MsgVoteResponse>;
  /** VoteWeighted defines a method to add a weighted vote on a specific proposal. */
  voteWeighted(request: DeepPartial<MsgVoteWeighted>, metadata?: grpc.Metadata): Promise<MsgVoteWeightedResponse>;
  /** Deposit defines a method to add deposit on a specific proposal. */
  deposit(request: DeepPartial<MsgDeposit>, metadata?: grpc.Metadata): Promise<MsgDepositResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.submitProposal = this.submitProposal.bind(this);
    this.execLegacyContent = this.execLegacyContent.bind(this);
    this.vote = this.vote.bind(this);
    this.voteWeighted = this.voteWeighted.bind(this);
    this.deposit = this.deposit.bind(this);
  }
  submitProposal(request: DeepPartial<MsgSubmitProposal>, metadata?: grpc.Metadata): Promise<MsgSubmitProposalResponse> {
    return this.rpc.unary(MsgSubmitProposalDesc, MsgSubmitProposal.fromPartial(request), metadata);
  }
  execLegacyContent(request: DeepPartial<MsgExecLegacyContent>, metadata?: grpc.Metadata): Promise<MsgExecLegacyContentResponse> {
    return this.rpc.unary(MsgExecLegacyContentDesc, MsgExecLegacyContent.fromPartial(request), metadata);
  }
  vote(request: DeepPartial<MsgVote>, metadata?: grpc.Metadata): Promise<MsgVoteResponse> {
    return this.rpc.unary(MsgVoteDesc, MsgVote.fromPartial(request), metadata);
  }
  voteWeighted(request: DeepPartial<MsgVoteWeighted>, metadata?: grpc.Metadata): Promise<MsgVoteWeightedResponse> {
    return this.rpc.unary(MsgVoteWeightedDesc, MsgVoteWeighted.fromPartial(request), metadata);
  }
  deposit(request: DeepPartial<MsgDeposit>, metadata?: grpc.Metadata): Promise<MsgDepositResponse> {
    return this.rpc.unary(MsgDepositDesc, MsgDeposit.fromPartial(request), metadata);
  }
}
export const MsgDesc = {
  serviceName: "cosmos.gov.v1.Msg"
};
export const MsgSubmitProposalDesc: UnaryMethodDefinitionish = {
  methodName: "SubmitProposal",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgSubmitProposal.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgSubmitProposalResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgExecLegacyContentDesc: UnaryMethodDefinitionish = {
  methodName: "ExecLegacyContent",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgExecLegacyContent.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgExecLegacyContentResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgVoteDesc: UnaryMethodDefinitionish = {
  methodName: "Vote",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgVote.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgVoteResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgVoteWeightedDesc: UnaryMethodDefinitionish = {
  methodName: "VoteWeighted",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgVoteWeighted.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgVoteWeightedResponse.decode(data),
        toObject() {
          return this;
        }
      };
    }
  } as any)
};
export const MsgDepositDesc: UnaryMethodDefinitionish = {
  methodName: "Deposit",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: ({
    serializeBinary() {
      return MsgDeposit.encode(this).finish();
    }
  } as any),
  responseType: ({
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgDepositResponse.decode(data),
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