//@ts-nocheck
import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../query/v1beta1/pagination";
import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../../google/protobuf/any";
import { BlockID, BlockIDSDKType } from "../../../../tendermint/types/types";
import { Block, BlockSDKType } from "../../../../tendermint/types/block";
import { NodeInfo, NodeInfoSDKType } from "../../../../tendermint/p2p/types";
import { setPaginationParams } from "../../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { GetNodeInfoRequest, GetNodeInfoRequestSDKType, GetNodeInfoResponse, GetNodeInfoResponseSDKType, GetSyncingRequest, GetSyncingRequestSDKType, GetSyncingResponse, GetSyncingResponseSDKType, GetLatestBlockRequest, GetLatestBlockRequestSDKType, GetLatestBlockResponse, GetLatestBlockResponseSDKType, GetBlockByHeightRequest, GetBlockByHeightRequestSDKType, GetBlockByHeightResponse, GetBlockByHeightResponseSDKType, GetLatestValidatorSetRequest, GetLatestValidatorSetRequestSDKType, GetLatestValidatorSetResponse, GetLatestValidatorSetResponseSDKType, GetValidatorSetByHeightRequest, GetValidatorSetByHeightRequestSDKType, GetValidatorSetByHeightResponse, GetValidatorSetByHeightResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
  }
  /* GetNodeInfo queries the current node info. */
  getNodeInfo = async (_params: GetNodeInfoRequest = {}): Promise<GetNodeInfoResponseSDKType> => {
    const endpoint = `cosmos/base/tendermint/v1beta1/node_info`;
    return await this.req.get<GetNodeInfoResponseSDKType>(endpoint);
  };
  /* GetSyncing queries node syncing. */
  getSyncing = async (_params: GetSyncingRequest = {}): Promise<GetSyncingResponseSDKType> => {
    const endpoint = `cosmos/base/tendermint/v1beta1/syncing`;
    return await this.req.get<GetSyncingResponseSDKType>(endpoint);
  };
  /* GetLatestBlock returns the latest block. */
  getLatestBlock = async (_params: GetLatestBlockRequest = {}): Promise<GetLatestBlockResponseSDKType> => {
    const endpoint = `cosmos/base/tendermint/v1beta1/blocks/latest`;
    return await this.req.get<GetLatestBlockResponseSDKType>(endpoint);
  };
  /* GetBlockByHeight queries block for given height. */
  getBlockByHeight = async (params: GetBlockByHeightRequest): Promise<GetBlockByHeightResponseSDKType> => {
    const endpoint = `cosmos/base/tendermint/v1beta1/blocks/${params.height}`;
    return await this.req.get<GetBlockByHeightResponseSDKType>(endpoint);
  };
  /* GetLatestValidatorSet queries latest validator-set. */
  getLatestValidatorSet = async (params: GetLatestValidatorSetRequest = {
    pagination: PageRequest.fromPartial({})
  }): Promise<GetLatestValidatorSetResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/base/tendermint/v1beta1/validatorsets/latest`;
    return await this.req.get<GetLatestValidatorSetResponseSDKType>(endpoint, options);
  };
  /* GetValidatorSetByHeight queries validator-set at a given height. */
  getValidatorSetByHeight = async (params: GetValidatorSetByHeightRequest): Promise<GetValidatorSetByHeightResponseSDKType> => {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/base/tendermint/v1beta1/validatorsets/${params.height}`;
    return await this.req.get<GetValidatorSetByHeightResponseSDKType>(endpoint, options);
  };
}