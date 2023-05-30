import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Metadata, MetadataSDKType } from "../../../cosmos/bank/v1beta1/bank";
import * as fm from "../../../grpc-gateway";
import { MsgCreateDenom, MsgCreateDenomSDKType, MsgCreateDenomResponse, MsgCreateDenomResponseSDKType, MsgMint, MsgMintSDKType, MsgMintResponse, MsgMintResponseSDKType, MsgBurn, MsgBurnSDKType, MsgBurnResponse, MsgBurnResponseSDKType, MsgChangeAdmin, MsgChangeAdminSDKType, MsgChangeAdminResponse, MsgChangeAdminResponseSDKType, MsgSetDenomMetadata, MsgSetDenomMetadataSDKType, MsgSetDenomMetadataResponse, MsgSetDenomMetadataResponseSDKType } from "./tx";
export class Msg {
  static createDenom(request: MsgCreateDenom, initRequest?: fm.InitReq): Promise<MsgCreateDenomResponse> {
    return fm.fetchReq(`/osmosis.tokenfactory.v1beta1/createDenom`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  static mint(request: MsgMint, initRequest?: fm.InitReq): Promise<MsgMintResponse> {
    return fm.fetchReq(`/osmosis.tokenfactory.v1beta1/mint`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  static burn(request: MsgBurn, initRequest?: fm.InitReq): Promise<MsgBurnResponse> {
    return fm.fetchReq(`/osmosis.tokenfactory.v1beta1/burn`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  static changeAdmin(request: MsgChangeAdmin, initRequest?: fm.InitReq): Promise<MsgChangeAdminResponse> {
    return fm.fetchReq(`/osmosis.tokenfactory.v1beta1/changeAdmin`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  static setDenomMetadata(request: MsgSetDenomMetadata, initRequest?: fm.InitReq): Promise<MsgSetDenomMetadataResponse> {
    return fm.fetchReq(`/osmosis.tokenfactory.v1beta1/setDenomMetadata`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}