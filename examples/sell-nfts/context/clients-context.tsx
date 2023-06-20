import React, { useEffect, useMemo, useRef, useState, useContext } from 'react';
import { Sg721Updatable, Marketplace, Whitelist } from 'context/clients';
import {
  CosmWasmClient,
  SigningCosmWasmClient,
} from '@cosmjs/cosmwasm-stargate';

interface IClientsContext {
  sg721Updatable: Sg721Updatable;
  marketplace: Marketplace;
  whitelist: Whitelist;
}

interface ClientConfig {
  address: string | undefined;
  getCosmWasmClient: () => Promise<CosmWasmClient>;
  getSigningCosmWasmClient: () => Promise<SigningCosmWasmClient>;
}

const ClientsContext = React.createContext<IClientsContext | null>(null);

export const ClientsProvider = ({
  children,
  clientConfig,
}: {
  children: React.ReactNode;
  clientConfig: ClientConfig;
}) => {
  const [cosmWasmClient, setCosmWasmClient] = useState<CosmWasmClient>();
  const [signingCosmWasmClient, setSigningCosmWasmClient] =
    useState<SigningCosmWasmClient>();

  const { address, getCosmWasmClient, getSigningCosmWasmClient } = clientConfig;

  const prevAddressRef = useRef<string | undefined>(address);

  const clients: IClientsContext = useMemo(
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
    <ClientsContext.Provider value={clients}>
      {children}
    </ClientsContext.Provider>
  );
};

export const useClients = () => {
  const clients = useContext(ClientsContext);
  if (clients === null) {
    throw new Error('useClients must be used within a ClientsProvider');
  }
  return clients;
};
