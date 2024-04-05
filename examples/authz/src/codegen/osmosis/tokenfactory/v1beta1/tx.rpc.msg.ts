//@ts-nocheck
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Metadata, MetadataSDKType } from "../../../cosmos/bank/v1beta1/bank";
import { DeliverTxResponse, StdFee, TxRpc } from "../../../types";
import { BinaryReader } from "../../../binary";
import { MsgCreateDenom, MsgCreateDenomSDKType, MsgCreateDenomResponse, MsgCreateDenomResponseSDKType, MsgMint, MsgMintSDKType, MsgMintResponse, MsgMintResponseSDKType, MsgBurn, MsgBurnSDKType, MsgBurnResponse, MsgBurnResponseSDKType, MsgChangeAdmin, MsgChangeAdminSDKType, MsgChangeAdminResponse, MsgChangeAdminResponseSDKType, MsgSetDenomMetadata, MsgSetDenomMetadataSDKType, MsgSetDenomMetadataResponse, MsgSetDenomMetadataResponseSDKType } from "./tx";
/** Msg defines the tokefactory module's gRPC message service. */
export interface Msg {
  createDenom(signerAddress: string, message: MsgCreateDenom, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  mint(signerAddress: string, message: MsgMint, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  burn(signerAddress: string, message: MsgBurn, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  changeAdmin(signerAddress: string, message: MsgChangeAdmin, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
  setDenomMetadata(signerAddress: string, message: MsgSetDenomMetadata, fee: number | StdFee | "auto", memo?: string): Promise<DeliverTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: TxRpc;
  constructor(rpc: TxRpc) {
    this.rpc = rpc;
  }
  /* CreateDenom */
  createDenom = async (signerAddress: string, message: MsgCreateDenom, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgCreateDenom.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* Mint */
  mint = async (signerAddress: string, message: MsgMint, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgMint.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* Burn */
  burn = async (signerAddress: string, message: MsgBurn, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgBurn.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* ChangeAdmin */
  changeAdmin = async (signerAddress: string, message: MsgChangeAdmin, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgChangeAdmin.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
  /* SetDenomMetadata */
  setDenomMetadata = async (signerAddress: string, message: MsgSetDenomMetadata, fee: number | StdFee | "auto" = "auto", memo: string = ""): Promise<DeliverTxResponse> => {
    const data = [{
      typeUrl: MsgSetDenomMetadata.typeUrl,
      value: message
    }];
    return this.rpc.signAndBroadcast!(signerAddress, data, fee, memo);
  };
}
export const createClientImpl = (rpc: TxRpc) => {
  return new MsgClientImpl(rpc);
};