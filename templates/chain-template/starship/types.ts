export interface StarshipConfig {
  registry: {
    ports: {
      rest: number;
    };
  };
  chains: Array<{
    id: string;
    name: string;
    ports: {
      rpc: number;
      rest: number;
      faucet: number;
    };
  }>;
  relayers: Array<{
    chains: [string, string];
  }>;
}
