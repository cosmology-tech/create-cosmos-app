/* eslint-disable */
import { OrderID, OrderIDSDKType } from "./order";
import { DecCoin, DecCoinSDKType, Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BidID, BidIDSDKType, MsgCreateBid, MsgCreateBidSDKType, MsgCloseBid, MsgCloseBidSDKType } from "./bid";
import { LeaseID, LeaseIDSDKType, MsgWithdrawLease, MsgWithdrawLeaseSDKType, MsgCreateLease, MsgCreateLeaseSDKType, MsgCloseLease, MsgCloseLeaseSDKType } from "./lease";
import { AminoMsg } from "@cosmjs/amino";
export interface MsgCreateBidAminoType extends AminoMsg {
  type: "akash/market/v1beta2/testonly-create-bid";
  value: {
    order: {
      owner: string;
      dseq: string;
      gseq: number;
      oseq: number;
    };
    provider: string;
    price: {
      denom: string;
      amount: string;
    };
    deposit: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgCloseBidAminoType extends AminoMsg {
  type: "akash/market/v1beta2/testonly-close-bid";
  value: {
    bid_id: {
      owner: string;
      dseq: string;
      gseq: number;
      oseq: number;
      provider: string;
    };
  };
}
export interface MsgWithdrawLeaseAminoType extends AminoMsg {
  type: "akash/market/v1beta2/testonly-withdraw-lease";
  value: {
    bid_id: {
      owner: string;
      dseq: string;
      gseq: number;
      oseq: number;
      provider: string;
    };
  };
}
export interface MsgCreateLeaseAminoType extends AminoMsg {
  type: "akash/market/v1beta2/testonly-create-lease";
  value: {
    bid_id: {
      owner: string;
      dseq: string;
      gseq: number;
      oseq: number;
      provider: string;
    };
  };
}
export interface MsgCloseLeaseAminoType extends AminoMsg {
  type: "akash/market/v1beta2/testonly-close-lease";
  value: {
    lease_id: {
      owner: string;
      dseq: string;
      gseq: number;
      oseq: number;
      provider: string;
    };
  };
}
export const AminoConverter = {
  "/akash.market.v1beta2.MsgCreateBid": {
    aminoType: "akash/market/v1beta2/testonly-create-bid",
    toAmino: ({
      order,
      provider,
      price,
      deposit
    }: MsgCreateBid): MsgCreateBidAminoType["value"] => {
      return {
        order: {
          owner: order.owner,
          dseq: order.dseq.toString(),
          gseq: order.gseq,
          oseq: order.oseq
        },
        provider,
        price: {
          denom: price.denom,
          amount: price.amount
        },
        deposit: {
          denom: deposit.denom,
          amount: deposit.amount
        }
      };
    },
    fromAmino: ({
      order,
      provider,
      price,
      deposit
    }: MsgCreateBidAminoType["value"]): MsgCreateBid => {
      return {
        order: {
          owner: order.owner,
          dseq: BigInt(order.dseq),
          gseq: order.gseq,
          oseq: order.oseq
        },
        provider,
        price: {
          denom: price.denom,
          amount: price.amount
        },
        deposit: {
          denom: deposit.denom,
          amount: deposit.amount
        }
      };
    }
  },
  "/akash.market.v1beta2.MsgCloseBid": {
    aminoType: "akash/market/v1beta2/testonly-close-bid",
    toAmino: ({
      bidId
    }: MsgCloseBid): MsgCloseBidAminoType["value"] => {
      return {
        bid_id: {
          owner: bidId.owner,
          dseq: bidId.dseq.toString(),
          gseq: bidId.gseq,
          oseq: bidId.oseq,
          provider: bidId.provider
        }
      };
    },
    fromAmino: ({
      bid_id
    }: MsgCloseBidAminoType["value"]): MsgCloseBid => {
      return {
        bidId: {
          owner: bid_id.owner,
          dseq: BigInt(bid_id.dseq),
          gseq: bid_id.gseq,
          oseq: bid_id.oseq,
          provider: bid_id.provider
        }
      };
    }
  },
  "/akash.market.v1beta2.MsgWithdrawLease": {
    aminoType: "akash/market/v1beta2/testonly-withdraw-lease",
    toAmino: ({
      bidId
    }: MsgWithdrawLease): MsgWithdrawLeaseAminoType["value"] => {
      return {
        bid_id: {
          owner: bidId.owner,
          dseq: bidId.dseq.toString(),
          gseq: bidId.gseq,
          oseq: bidId.oseq,
          provider: bidId.provider
        }
      };
    },
    fromAmino: ({
      bid_id
    }: MsgWithdrawLeaseAminoType["value"]): MsgWithdrawLease => {
      return {
        bidId: {
          owner: bid_id.owner,
          dseq: BigInt(bid_id.dseq),
          gseq: bid_id.gseq,
          oseq: bid_id.oseq,
          provider: bid_id.provider
        }
      };
    }
  },
  "/akash.market.v1beta2.MsgCreateLease": {
    aminoType: "akash/market/v1beta2/testonly-create-lease",
    toAmino: ({
      bidId
    }: MsgCreateLease): MsgCreateLeaseAminoType["value"] => {
      return {
        bid_id: {
          owner: bidId.owner,
          dseq: bidId.dseq.toString(),
          gseq: bidId.gseq,
          oseq: bidId.oseq,
          provider: bidId.provider
        }
      };
    },
    fromAmino: ({
      bid_id
    }: MsgCreateLeaseAminoType["value"]): MsgCreateLease => {
      return {
        bidId: {
          owner: bid_id.owner,
          dseq: BigInt(bid_id.dseq),
          gseq: bid_id.gseq,
          oseq: bid_id.oseq,
          provider: bid_id.provider
        }
      };
    }
  },
  "/akash.market.v1beta2.MsgCloseLease": {
    aminoType: "akash/market/v1beta2/testonly-close-lease",
    toAmino: ({
      leaseId
    }: MsgCloseLease): MsgCloseLeaseAminoType["value"] => {
      return {
        lease_id: {
          owner: leaseId.owner,
          dseq: leaseId.dseq.toString(),
          gseq: leaseId.gseq,
          oseq: leaseId.oseq,
          provider: leaseId.provider
        }
      };
    },
    fromAmino: ({
      lease_id
    }: MsgCloseLeaseAminoType["value"]): MsgCloseLease => {
      return {
        leaseId: {
          owner: lease_id.owner,
          dseq: BigInt(lease_id.dseq),
          gseq: lease_id.gseq,
          oseq: lease_id.oseq,
          provider: lease_id.provider
        }
      };
    }
  }
};