// We can't use async imports
import { ProtobufRpcClient } from '@cosmjs/stargate';
import { createRpcQueryHooks as cosmosBankV1beta1Hooks } from './bank/v1beta1/query.rpc.react-query'

export const createRPCQueryHooks = ({
    rpc
}: {
    rpc: ProtobufRpcClient
}) => {
    return {
        cosmos: {
            bank: {
                v1beta1: cosmosBankV1beta1Hooks(rpc)
            }
        }
    };
};
