import { CalcPoolAprsParams } from './types';
import { Duration } from 'osmojs/types/codegen/google/protobuf/duration';
import {
  getSymbolForDenom,
  calcPoolLiquidity,
  getExponentByDenom,
  dollarValueToDenomUnits,
} from './pool';
import BigNumber from 'bignumber.js';

const DAYS_PER_YEAR = 365;
const YEARLY_PERCENT = DAYS_PER_YEAR * 100;

const convertLockup = (lockup: string, durations: Duration[]) => {
  switch (lockup) {
    case '1':
      return durations[0].seconds.low;
    case '7':
      return durations[1].seconds.low;
    case '14':
      return durations[2].seconds.low;
    default:
      return durations[2].seconds.low;
  }
};

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
  const hasAssetsPrices = pool.poolAssets.every((asset) =>
    Boolean(prices[asset.token!.denom])
  );
  if (!hasAssetsPrices) {
    for (const asset of pool.poolAssets) {
      if (!prices[asset.token!.denom]) {
        console.log('price not found:', asset.token!.denom);
      }
    }
    return { totalApr: '0' };
  }

  // superfluid staking apr
  const isSuperfluidPool = superfluidPools.some(
    (sfPool) => sfPool.denom === pool.totalShares.denom
  );
  const superfluidApr =
    isSuperfluidPool && lockup === '14' ? aprSuperfluid : null;

  const liquidity = calcPoolLiquidity(pool, prices);

  // gauge aprs
  const lockupDuration = convertLockup(lockup, lockupDurations);
  const gauges = activeGauges.filter((gauge) => {
    const isGaugeActive =
      gauge.coins.length > 0 &&
      !new BigNumber(gauge.coins[0].amount)
        .minus(gauge.distributedCoins[0].amount)
        .isLessThan(100);
    return (
      gauge.distributeTo.duration.seconds.low === lockupDuration &&
      (includeNonPerpetual || gauge.isPerpetual) &&
      isGaugeActive
    );
  });
  const gaugeAprs = gauges.map((gauge) => {
    const tokensRemaining = new BigNumber(gauge.coins[0].amount).minus(
      gauge.distributedCoins[0].amount
    );
    const symbol = getSymbolForDenom(gauge.coins[0].denom);
    const daysRemaining = gauge.isPerpetual
      ? null
      : gauge.numEpochsPaidOver.low - gauge.filledEpochs.low;

    const totalValue = tokensRemaining
      .shiftedBy(-getExponentByDenom(gauge.coins[0].denom))
      .multipliedBy(prices[gauge.coins[0].denom]);

    const distributedValuePerDay = totalValue
      .dividedBy(gauge.isPerpetual ? 1 : daysRemaining)
      .toString();

    const distributedCoinPerDay = {
      amount: dollarValueToDenomUnits(prices, symbol, distributedValuePerDay),
      denom: gauge.coins[0].denom,
    };

    const apr = totalValue
      .dividedBy(gauge.isPerpetual ? 1 : daysRemaining)
      .dividedBy(liquidity)
      .multipliedBy(YEARLY_PERCENT)
      .toString();

    return {
      apr,
      symbol,
      daysRemaining,
      distributedCoinPerDay,
      isPerpetual: gauge.isPerpetual,
    };
  });

  // fees apr
  // 7d avg trading vol * swap fee
  const swapFeeValuePerDay = new BigNumber(volume7d)
    .dividedBy(7)
    .multipliedBy(swapFee);
  const swapFeeApr = {
    swapFeeValuePerDay: swapFeeValuePerDay.toString(),
    apr: swapFeeValuePerDay
      .dividedBy(liquidity)
      .multipliedBy(YEARLY_PERCENT)
      .toString(),
  };

  // total apr
  const totalApr = [
    superfluidApr,
    swapFeeApr.apr,
    ...gaugeAprs.map(({ apr }) => apr),
  ]
    .filter(Boolean)
    .reduce((prev, cur) => prev.plus(cur), new BigNumber(0))
    .toString();

  return {
    totalApr,
    superfluidApr,
    gaugeAprs,
    swapFeeApr,
  };
};
