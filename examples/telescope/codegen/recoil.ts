import { ProtobufRpcClient } from "@cosmjs/stargate";
import * as _CosmosBankV1beta1Queryrpc from "./cosmos/bank/v1beta1/query.rpc.Query";
export const createRecoilSelectors = ({
    rpc
}: {
    rpc: ProtobufRpcClient | undefined;
}) => {
    return {
        cosmos: {
            bank: {
                v1beta1: _CosmosBankV1beta1Queryrpc.createRecoilSelectors(rpc)
            }
        }
    };
};

export const selectors = {
    cosmos: {
        bank: {
            v1beta1: _CosmosBankV1beta1Queryrpc
        }
    }
}