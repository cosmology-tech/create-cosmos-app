import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as evmosErc20V1TxRegistry from "./erc20/v1/tx.registry";
import * as evmosFeesV1TxRegistry from "./fees/v1/tx.registry";
import * as evmosVestingV1TxRegistry from "./vesting/v1/tx.registry";
import * as evmosErc20V1TxAmino from "./erc20/v1/tx.amino";
import * as evmosFeesV1TxAmino from "./fees/v1/tx.amino";
import * as evmosVestingV1TxAmino from "./vesting/v1/tx.amino";
export const evmosAminoConverters = {
  ...evmosErc20V1TxAmino.AminoConverter,
  ...evmosFeesV1TxAmino.AminoConverter,
  ...evmosVestingV1TxAmino.AminoConverter
};
export const evmosProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...evmosErc20V1TxRegistry.registry, ...evmosFeesV1TxRegistry.registry, ...evmosVestingV1TxRegistry.registry];
export const getSigningEvmosClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...evmosProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...evmosAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningEvmosClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningEvmosClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};