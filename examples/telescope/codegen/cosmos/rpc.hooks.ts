import React from 'react'

import { Tendermint34Client, HttpEndpoint } from "@cosmjs/tendermint-rpc";
// We can't use async imports
import { createRpcQueryHooks as createHooks } from './bank/v1beta1/query.rpc.react-query'

export const createRPCQueryHooks = ({
    rpcEndpoint
}: {
    rpcEndpoint: string | HttpEndpoint;
}) => {
    return {
        cosmos: {
            bank: {
                v1beta1: createHooks(rpcEndpoint)
            }
        }
    };
};
