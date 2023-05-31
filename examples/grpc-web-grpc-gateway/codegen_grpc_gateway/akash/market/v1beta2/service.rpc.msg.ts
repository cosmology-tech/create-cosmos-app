import { OrderID, OrderIDSDKType } from "./order";
import { DecCoin, DecCoinSDKType, Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BidID, BidIDSDKType, MsgCreateBid, MsgCreateBidSDKType, MsgCreateBidResponse, MsgCreateBidResponseSDKType, MsgCloseBid, MsgCloseBidSDKType, MsgCloseBidResponse, MsgCloseBidResponseSDKType } from "./bid";
import { LeaseID, LeaseIDSDKType, MsgWithdrawLease, MsgWithdrawLeaseSDKType, MsgWithdrawLeaseResponse, MsgWithdrawLeaseResponseSDKType, MsgCreateLease, MsgCreateLeaseSDKType, MsgCreateLeaseResponse, MsgCreateLeaseResponseSDKType, MsgCloseLease, MsgCloseLeaseSDKType, MsgCloseLeaseResponse, MsgCloseLeaseResponseSDKType } from "./lease";
import * as fm from "../../../grpc-gateway";
export class Msg {
  /** CreateBid defines a method to create a bid given proper inputs. */
  static createBid(request: MsgCreateBid, initRequest?: fm.InitReq): Promise<MsgCreateBidResponse> {
    return fm.fetchReq(`/akash.market.v1beta2/createBid`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** CloseBid defines a method to close a bid given proper inputs. */
  static closeBid(request: MsgCloseBid, initRequest?: fm.InitReq): Promise<MsgCloseBidResponse> {
    return fm.fetchReq(`/akash.market.v1beta2/closeBid`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** WithdrawLease withdraws accrued funds from the lease payment */
  static withdrawLease(request: MsgWithdrawLease, initRequest?: fm.InitReq): Promise<MsgWithdrawLeaseResponse> {
    return fm.fetchReq(`/akash.market.v1beta2/withdrawLease`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** CreateLease creates a new lease */
  static createLease(request: MsgCreateLease, initRequest?: fm.InitReq): Promise<MsgCreateLeaseResponse> {
    return fm.fetchReq(`/akash.market.v1beta2/createLease`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
  /** CloseLease defines a method to close an order given proper inputs. */
  static closeLease(request: MsgCloseLease, initRequest?: fm.InitReq): Promise<MsgCloseLeaseResponse> {
    return fm.fetchReq(`/akash.market.v1beta2/closeLease`, {
      ...initRequest,
      method: "POST",
      body: JSON.stringify(request, fm.replacer)
    });
  }
}