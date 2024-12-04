import { PageRequest, PageRequestSDKType, PageResponse, PageResponseSDKType } from "../../query/v1beta1/pagination";
import { Any, AnySDKType } from "../../../../google/protobuf/any";
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
    this.getNodeInfo = this.getNodeInfo.bind(this);
    this.getSyncing = this.getSyncing.bind(this);
    this.getLatestBlock = this.getLatestBlock.bind(this);
    this.getBlockByHeight = this.getBlockByHeight.bind(this);
    this.getLatestValidatorSet = this.getLatestValidatorSet.bind(this);
    this.getValidatorSetByHeight = this.getValidatorSetByHeight.bind(this);
  }
  /* GetNodeInfo queries the current node info. */
  async getNodeInfo(_params: GetNodeInfoRequest = {}): Promise<GetNodeInfoResponseSDKType> {
    const endpoint = `cosmos/base/tendermint/v1beta1/node_info`;
    return GetNodeInfoResponse.fromSDKJSON(await this.req.get<GetNodeInfoResponseSDKType>(endpoint));
  }
  /* GetSyncing queries node syncing. */
  async getSyncing(_params: GetSyncingRequest = {}): Promise<GetSyncingResponseSDKType> {
    const endpoint = `cosmos/base/tendermint/v1beta1/syncing`;
    return GetSyncingResponse.fromSDKJSON(await this.req.get<GetSyncingResponseSDKType>(endpoint));
  }
  /* GetLatestBlock returns the latest block. */
  async getLatestBlock(_params: GetLatestBlockRequest = {}): Promise<GetLatestBlockResponseSDKType> {
    const endpoint = `cosmos/base/tendermint/v1beta1/blocks/latest`;
    return GetLatestBlockResponse.fromSDKJSON(await this.req.get<GetLatestBlockResponseSDKType>(endpoint));
  }
  /* GetBlockByHeight queries block for given height. */
  async getBlockByHeight(params: GetBlockByHeightRequest): Promise<GetBlockByHeightResponseSDKType> {
    const endpoint = `cosmos/base/tendermint/v1beta1/blocks/${params.height}`;
    return GetBlockByHeightResponse.fromSDKJSON(await this.req.get<GetBlockByHeightResponseSDKType>(endpoint));
  }
  /* GetLatestValidatorSet queries latest validator-set. */
  async getLatestValidatorSet(params: GetLatestValidatorSetRequest = {
    pagination: undefined
  }): Promise<GetLatestValidatorSetResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/base/tendermint/v1beta1/validatorsets/latest`;
    return GetLatestValidatorSetResponse.fromSDKJSON(await this.req.get<GetLatestValidatorSetResponseSDKType>(endpoint, options));
  }
  /* GetValidatorSetByHeight queries validator-set at a given height. */
  async getValidatorSetByHeight(params: GetValidatorSetByHeightRequest): Promise<GetValidatorSetByHeightResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `cosmos/base/tendermint/v1beta1/validatorsets/${params.height}`;
    return GetValidatorSetByHeightResponse.fromSDKJSON(await this.req.get<GetValidatorSetByHeightResponseSDKType>(endpoint, options));
  }
}