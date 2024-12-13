import { ProtobufRpcClient } from "@cosmjs/stargate";
import * as _AkashCertV1beta2Queryrpc from "./akash/cert/v1beta2/query.rpc.Query.js";
import * as _CosmosAuthV1beta1Queryrpc from "./cosmos/auth/v1beta1/query.rpc.Query.js";
import * as _CosmosBankV1beta1Queryrpc from "./cosmos/bank/v1beta1/query.rpc.Query.js";
import * as _CosmosNftV1beta1Queryrpc from "./cosmos/nft/v1beta1/query.rpc.Query.js";
import * as _OsmosisGammV1beta1Queryrpc from "./osmosis/gamm/v1beta1/query.rpc.Query.js";
import * as _OsmosisGammV2Queryrpc from "./osmosis/gamm/v2/query.rpc.Query.js";
export const createRpcQueryHooks = ({
  rpc
}: {
  rpc: ProtobufRpcClient | undefined;
}) => {
  return {
    akash: {
      cert: {
        v1beta2: _AkashCertV1beta2Queryrpc.createRpcQueryHooks(rpc)
      }
    },
    cosmos: {
      auth: {
        v1beta1: _CosmosAuthV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      bank: {
        v1beta1: _CosmosBankV1beta1Queryrpc.createRpcQueryHooks(rpc)
      },
      nft: {
        v1beta1: _CosmosNftV1beta1Queryrpc.createRpcQueryHooks(rpc)
      }
    },
    osmosis: {
      gamm: {
        v1beta1: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc),
        v2: _OsmosisGammV2Queryrpc.createRpcQueryHooks(rpc)
      }
    },
    /**
     * akash.cert.v1beta2.useCertificates
     * Certificates queries certificates
     */
    useCertificates: _AkashCertV1beta2Queryrpc.createRpcQueryHooks(rpc).useCertificates,
    /**
     * cosmos.auth.v1beta1.useAccounts
     * Accounts returns all the existing accounts
     * 
     * Since: cosmos-sdk 0.43
     */
    useAccounts: _CosmosAuthV1beta1Queryrpc.createRpcQueryHooks(rpc).useAccounts,
    /**
     * cosmos.auth.v1beta1.useAccount
     * Account returns account details based on address.
     */
    useAccount: _CosmosAuthV1beta1Queryrpc.createRpcQueryHooks(rpc).useAccount,
    /**
     * cosmos.auth.v1beta1.useParams
     * Params queries all parameters.
     */
    useParams: _CosmosAuthV1beta1Queryrpc.createRpcQueryHooks(rpc).useParams,
    /**
     * cosmos.auth.v1beta1.useModuleAccounts
     * ModuleAccounts returns all the existing module accounts.
     */
    useAuthModuleAccounts: _CosmosAuthV1beta1Queryrpc.createRpcQueryHooks(rpc).useModuleAccounts,
    /**
     * cosmos.auth.v1beta1.useBech32Prefix
     * Bech32 queries bech32Prefix
     */
    useBech32Prefix: _CosmosAuthV1beta1Queryrpc.createRpcQueryHooks(rpc).useBech32Prefix,
    /**
     * cosmos.auth.v1beta1.useAddressBytesToString
     * AddressBytesToString converts Account Address bytes to string
     */
    useAddressBytesToString: _CosmosAuthV1beta1Queryrpc.createRpcQueryHooks(rpc).useAddressBytesToString,
    /**
     * cosmos.auth.v1beta1.useAddressStringToBytes
     * AddressStringToBytes converts Address string to bytes
     */
    useAddressStringToBytes: _CosmosAuthV1beta1Queryrpc.createRpcQueryHooks(rpc).useAddressStringToBytes,
    /**
     * cosmos.bank.v1beta1.useBalance
     * Balance queries the balance of a single coin for a single account.
     */
    useBankBalance: _CosmosBankV1beta1Queryrpc.createRpcQueryHooks(rpc).useBalance,
    /**
     * cosmos.nft.v1beta1.useBalance
     * Balance queries the number of NFTs of a given class owned by the owner, same as balanceOf in ERC721
     */
    useNftBalance: _CosmosNftV1beta1Queryrpc.createRpcQueryHooks(rpc).useBalance,
    /**
     * osmosis.gamm.v1beta1.usePools
     * Pools
     */
    usePools: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).usePools,
    /**
     * osmosis.gamm.v1beta1.useNumPools
     * NumPools
     */
    useNumPools: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).useNumPools,
    /**
     * osmosis.gamm.v1beta1.useTotalLiquidity
     * TotalLiquidity
     */
    useTotalLiquidity: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).useTotalLiquidity,
    /**
     * osmosis.gamm.v1beta1.usePoolsWithFilter
     * PoolsWithFilter allows you to query specific pools with requested
     * parameters
     */
    usePoolsWithFilter: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).usePoolsWithFilter,
    /**
     * osmosis.gamm.v1beta1.usePool
     * Per Pool gRPC Endpoints
     */
    usePool: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).usePool,
    /**
     * osmosis.gamm.v1beta1.usePoolType
     * PoolType returns the type of the pool.
     * Returns "Balancer" as a string literal when the pool is a balancer pool.
     * Errors if the pool is failed to be type caseted.
     */
    usePoolType: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).usePoolType,
    /**
     * osmosis.gamm.v1beta1.useCalcJoinPoolNoSwapShares
     * Simulates joining pool without a swap. Returns the amount of shares you'd
     * get and tokens needed to provide
     */
    useCalcJoinPoolNoSwapShares: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).useCalcJoinPoolNoSwapShares,
    /**
     * osmosis.gamm.v1beta1.useCalcJoinPoolShares
     * CalcJoinPoolShares
     */
    useCalcJoinPoolShares: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).useCalcJoinPoolShares,
    /**
     * osmosis.gamm.v1beta1.useCalcExitPoolCoinsFromShares
     * CalcExitPoolCoinsFromShares
     */
    useCalcExitPoolCoinsFromShares: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).useCalcExitPoolCoinsFromShares,
    /**
     * osmosis.gamm.v1beta1.usePoolParams
     * PoolParams
     */
    usePoolParams: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).usePoolParams,
    /**
     * osmosis.gamm.v1beta1.useTotalPoolLiquidity
     * TotalPoolLiquidity
     */
    useTotalPoolLiquidity: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).useTotalPoolLiquidity,
    /**
     * osmosis.gamm.v1beta1.useTotalShares
     * TotalShares
     */
    useTotalShares: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).useTotalShares,
    /**
     * osmosis.gamm.v1beta1.useSpotPrice
     * SpotPrice defines a gRPC query handler that returns the spot price given
     * a base denomination and a quote denomination.
     */
    useSpotPrice: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).useSpotPrice,
    /**
     * osmosis.gamm.v1beta1.useEstimateSwapExactAmountIn
     * Estimate the swap.
     */
    useEstimateSwapExactAmountIn: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).useEstimateSwapExactAmountIn,
    /**
     * osmosis.gamm.v1beta1.useEstimateSwapExactAmountOut
     * EstimateSwapExactAmountOut
     */
    useEstimateSwapExactAmountOut: _OsmosisGammV1beta1Queryrpc.createRpcQueryHooks(rpc).useEstimateSwapExactAmountOut,
    /**
     * osmosis.gamm.v2.useSpotPrice
     * SpotPrice defines a gRPC query handler that returns the spot price given
     * a base denomination and a quote denomination.
     */
    useOsmosisGammV2SpotPrice: _OsmosisGammV2Queryrpc.createRpcQueryHooks(rpc).useSpotPrice
  };
};