import { calcPoolAprs as _calcPoolAprs } from '@osmonauts/math';
import { CalcPoolAprsParams } from './types';

export const calcPoolAprs = ({
  activeGauges,
  pool,
  prices,
  superfluidPools,
  aprSuperfluid,
  lockupDurations,
  volume7d,
  swapFee,
  assets,
  lockup = '14',
  includeNonPerpetual = true,
}: CalcPoolAprsParams) => {
  return _calcPoolAprs({
    activeGauges,
    pool,
    assets,
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
