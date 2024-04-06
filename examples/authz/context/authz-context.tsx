// TODO fix type issues
// @ts-nocheck

import { createContext, useContext, useState } from 'react';
import { PrettyPermission } from '@/utils';

type AuthzProviderProps = { children: React.ReactNode };

type TAuthzContext = {
  permission: PrettyPermission | undefined;
  setPermission: (permission: PrettyPermission) => void;
  chainName: string | undefined;
  setChainName: (chainName: string | undefined) => void;
};

const AuthzContext = createContext<TAuthzContext | undefined>(undefined);

const AuthzProvider = ({ children }: AuthzProviderProps) => {
  const [permission, setPermission] = useState<PrettyPermission>();
  const [chainName, setChainName] = useState<string>();
  const value = { permission, setPermission, chainName, setChainName };

  return (
    <AuthzContext.Provider value={value}>{children}</AuthzContext.Provider>
  );
};

const useAuthzContext = () => {
  const context = useContext(AuthzContext);

  if (context === undefined) {
    throw new Error('useAuthzContext must be used within a AuthzProvider');
  }

  return context;
};

export { AuthzProvider, useAuthzContext };
