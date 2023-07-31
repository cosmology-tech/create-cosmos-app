import { Asset } from '@chain-registry/types';
import { asset_list, assets } from '@chain-registry/osmosis';
import { calcPoolAprs as _calcPoolAprs } from '@osmonauts/math';

import { CalcPoolAprsParams } from './types';

const osmosisAssets: Asset[] = [
  ...assets.assets,
  ...asset_list.assets,
];

export const calcPoolAprs = ({
  activeGauges,
  pool,
  prices,
  superfluidPools,
  aprSuperfluid,
  lockupDurations,
  volume7d,
  swapFee,
  lockup = '14',
  includeNonPerpetual = true,
}: CalcPoolAprsParams) => {
  return _calcPoolAprs({
    activeGauges,
    pool,
    assets: osmosisAssets,
    prices,
    superfluidPools,
    aprSuperfluid,
    lockupDurations,
    volume7d,
    swapFee,
    lockup,
    includeNonPerpetual,
  });
};
