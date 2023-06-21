import React, { useEffect, useMemo, useRef, useState, useContext } from 'react';
import { Sg721Updatable, Marketplace, Whitelist } from 'context/contracts';
import {
  CosmWasmClient,
  SigningCosmWasmClient,
} from '@cosmjs/cosmwasm-stargate';

interface IContractsContext {
  sg721Updatable: Sg721Updatable;
  marketplace: Marketplace;
  whitelist: Whitelist;
}

interface ContractsConfig {
  address: string | undefined;
  getCosmWasmClient: () => Promise<CosmWasmClient>;
  getSigningCosmWasmClient: () => Promise<SigningCosmWasmClient>;
}

const ContractsContext = React.createContext<IContractsContext | null>(null);

export const ContractsProvider = ({
  children,
  contractsConfig,
}: {
  children: React.ReactNode;
  contractsConfig: ContractsConfig;
}) => {
  const [cosmWasmClient, setCosmWasmClient] = useState<CosmWasmClient>();
  const [signingCosmWasmClient, setSigningCosmWasmClient] =
    useState<SigningCosmWasmClient>();

  const { address, getCosmWasmClient, getSigningCosmWasmClient } =
    contractsConfig;

  const prevAddressRef = useRef<string | undefined>(address);

  const contracts: IContractsContext = useMemo(
    () => ({
      sg721Updatable: new Sg721Updatable({
        address,
        cosmWasmClient,
        signingCosmWasmClient,
      }),
      marketplace: new Marketplace({
        address,
        cosmWasmClient,
        signingCosmWasmClient,
      }),
      whitelist: new Whitelist({
        address,
        cosmWasmClient,
        signingCosmWasmClient,
      }),
    }),
    [address, cosmWasmClient, signingCosmWasmClient]
  );

  useEffect(() => {
    const connectSigningCwClient = async () => {
      if (address && prevAddressRef.current !== address) {
        const signingCosmWasmClient = await getSigningCosmWasmClient();
        setSigningCosmWasmClient(signingCosmWasmClient);
      } else if (!address) {
        setSigningCosmWasmClient(undefined);
      }
      prevAddressRef.current = address;
    };
    connectSigningCwClient();
  }, [address, getSigningCosmWasmClient]);

  useEffect(() => {
    const connectCosmWasmClient = async () => {
      const cosmWasmClient = await getCosmWasmClient();
      setCosmWasmClient(cosmWasmClient);
    };
    connectCosmWasmClient();
  }, [getCosmWasmClient]);

  return (
    <ContractsContext.Provider value={contracts}>
      {children}
    </ContractsContext.Provider>
  );
};

export const useContracts = () => {
  const contracts = useContext(ContractsContext);
  if (contracts === null) {
    throw new Error('useContracts must be used within a ContractsProvider');
  }
  return contracts;
};
