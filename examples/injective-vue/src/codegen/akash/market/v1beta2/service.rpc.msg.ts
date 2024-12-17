import { OrderID, OrderIDSDKType } from "./order";
import { DecCoin, DecCoinSDKType, Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BidID, BidIDSDKType, MsgCreateBid, MsgCreateBidSDKType, MsgCreateBidResponse, MsgCreateBidResponseSDKType, MsgCloseBid, MsgCloseBidSDKType, MsgCloseBidResponse, MsgCloseBidResponseSDKType } from "./bid";
import { LeaseID, LeaseIDSDKType, MsgWithdrawLease, MsgWithdrawLeaseSDKType, MsgWithdrawLeaseResponse, MsgWithdrawLeaseResponseSDKType, MsgCreateLease, MsgCreateLeaseSDKType, MsgCreateLeaseResponse, MsgCreateLeaseResponseSDKType, MsgCloseLease, MsgCloseLeaseSDKType, MsgCloseLeaseResponse, MsgCloseLeaseResponseSDKType } from "./lease";
import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
/** Msg defines the market Msg service */
export interface Msg {
  /** CreateBid defines a method to create a bid given proper inputs. */
  createBid(request: MsgCreateBid): Promise<MsgCreateBidResponse>;
  /** CloseBid defines a method to close a bid given proper inputs. */
  closeBid(request: MsgCloseBid): Promise<MsgCloseBidResponse>;
  /** WithdrawLease withdraws accrued funds from the lease payment */
  withdrawLease(request: MsgWithdrawLease): Promise<MsgWithdrawLeaseResponse>;
  /** CreateLease creates a new lease */
  createLease(request: MsgCreateLease): Promise<MsgCreateLeaseResponse>;
  /** CloseLease defines a method to close an order given proper inputs. */
  closeLease(request: MsgCloseLease): Promise<MsgCloseLeaseResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  /* CreateBid defines a method to create a bid given proper inputs. */
  createBid = async (request: MsgCreateBid): Promise<MsgCreateBidResponse> => {
    const data = MsgCreateBid.encode(request).finish();
    const promise = this.rpc.request("akash.market.v1beta2.Msg", "CreateBid", data);
    return promise.then(data => MsgCreateBidResponse.decode(new BinaryReader(data)));
  };
  /* CloseBid defines a method to close a bid given proper inputs. */
  closeBid = async (request: MsgCloseBid): Promise<MsgCloseBidResponse> => {
    const data = MsgCloseBid.encode(request).finish();
    const promise = this.rpc.request("akash.market.v1beta2.Msg", "CloseBid", data);
    return promise.then(data => MsgCloseBidResponse.decode(new BinaryReader(data)));
  };
  /* WithdrawLease withdraws accrued funds from the lease payment */
  withdrawLease = async (request: MsgWithdrawLease): Promise<MsgWithdrawLeaseResponse> => {
    const data = MsgWithdrawLease.encode(request).finish();
    const promise = this.rpc.request("akash.market.v1beta2.Msg", "WithdrawLease", data);
    return promise.then(data => MsgWithdrawLeaseResponse.decode(new BinaryReader(data)));
  };
  /* CreateLease creates a new lease */
  createLease = async (request: MsgCreateLease): Promise<MsgCreateLeaseResponse> => {
    const data = MsgCreateLease.encode(request).finish();
    const promise = this.rpc.request("akash.market.v1beta2.Msg", "CreateLease", data);
    return promise.then(data => MsgCreateLeaseResponse.decode(new BinaryReader(data)));
  };
  /* CloseLease defines a method to close an order given proper inputs. */
  closeLease = async (request: MsgCloseLease): Promise<MsgCloseLeaseResponse> => {
    const data = MsgCloseLease.encode(request).finish();
    const promise = this.rpc.request("akash.market.v1beta2.Msg", "CloseLease", data);
    return promise.then(data => MsgCloseLeaseResponse.decode(new BinaryReader(data)));
  };
}
export const createClientImpl = (rpc: Rpc) => {
  return new MsgClientImpl(rpc);
};