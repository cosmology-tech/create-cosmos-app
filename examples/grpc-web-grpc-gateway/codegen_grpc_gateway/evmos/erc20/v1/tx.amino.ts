import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { MsgConvertCoin, MsgConvertCoinSDKType, MsgConvertERC20, MsgConvertERC20SDKType } from "./tx";
export const AminoConverter = {
  "/evmos.erc20.v1.MsgConvertCoin": {
    aminoType: "/evmos.erc20.v1.MsgConvertCoin",
    toAmino: MsgConvertCoin.toAmino,
    fromAmino: MsgConvertCoin.fromAmino
  },
  "/evmos.erc20.v1.MsgConvertERC20": {
    aminoType: "/evmos.erc20.v1.MsgConvertERC20",
    toAmino: MsgConvertERC20.toAmino,
    fromAmino: MsgConvertERC20.fromAmino
  }
};