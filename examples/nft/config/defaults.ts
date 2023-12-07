import { assets } from 'chain-registry';

export const CHAIN_NAME = 'stargaze';

export const STARGAZE_ADDRESS_LENGTH = 44;

export const STARGAZE_MARKETPLACE_CONTRACT =
  'stars1fvhcnyddukcqfnt7nlwv3thm5we22lyxyxylr9h77cvgkcn43xfsvgv0pl';

export const STARGAZE_GRAPHQL_ENDPOINT =
  'https://constellations-api.mainnet.stargaze-apis.com/graphql';

export const STARGATE_ASSETS = assets.find(
  (chain) => chain.chain_name === CHAIN_NAME
)!.assets;

export const STARGAZE_TOKEN = STARGATE_ASSETS.find(
  (asset) => asset.base === 'ustars'
)!;

export const STARGAZE_TOKEN_DENOM = STARGAZE_TOKEN.base;

export const STARGAZE_TOKEN_EXPONENT = STARGAZE_TOKEN.denom_units.find(
  (unit) => unit.denom === STARGAZE_TOKEN.display
)!.exponent;

export const STARGAZE_COINGECKO_ID = STARGAZE_TOKEN.coingecko_id || 'stargaze';
