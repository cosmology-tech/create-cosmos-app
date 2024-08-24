const api = {
  baseUrl: 'http://127.0.0.1:8080',
  endpoints: {
    chain: '/chain_registry',
    assets: '/chain_registry_assets',
  },
};

export const SPAWN_API_BASE_URL = api.baseUrl;
export const SPAWN_CHAIN_URL = `${api.baseUrl}${api.endpoints.chain}`;
export const SPAWN_ASSETS_URL = `${api.baseUrl}${api.endpoints.assets}`;
