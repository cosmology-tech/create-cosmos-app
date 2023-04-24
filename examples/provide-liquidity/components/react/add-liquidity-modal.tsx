import React, { useEffect, useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  Box,
  Center,
  useMediaQuery,
  useColorModeValue,
} from '@chakra-ui/react';
import { Pool } from './provide-liquidity';
import { useChain } from '@cosmos-kit/react';
import { osmosis } from 'osmojs';
import { Coin } from 'osmojs/types/codegen/cosmos/base/v1beta1/coin';
import { chainName } from '../../config/defaults';
import { LargeButton } from './modal-components';
import {
  getSymbolForDenom,
  prettyPool,
  baseUnitsToDisplayUnits,
  getExponentByDenom,
  calcShareOutAmount,
  getOsmoDenomForSymbol,
  baseUnitsToDollarValue,
  convertDollarValueToCoins,
} from '../../utils';
import { PriceHash } from '../../utils/types';
import BigNumber from 'bignumber.js';
import { TransactionResult } from '../types';
import { coin, coins as aminoCoins } from '@cosmjs/amino';
import { useTransactionToast } from './hooks';
import { TokenInput } from './token-input';

type InputToken = {
  denom: string;
  inputAmount: string;
};

const DEFAULT_SLIPPAGE = 2.5;

export const calcAmountWithSlippage = (
  amount: string,
  slippage: number | string
) => {
  const remainingPercentage = new BigNumber(100).minus(slippage).div(100);
  return new BigNumber(amount)
    .multipliedBy(remainingPercentage)
    .decimalPlaces(0)
    .toString();
};

const { joinPool, joinSwapExternAmountIn } =
  osmosis.gamm.v1beta1.MessageComposer.withTypeUrl;

const AddLiquidityModal = ({
  isOpen,
  onClose,
  currentPool,
  balances,
  prices,
  updatePoolsData,
  closeDetailModal,
}: {
  isOpen: boolean;
  onClose: () => void;
  currentPool: Pool;
  balances: Coin[];
  prices: PriceHash;
  updatePoolsData: () => void;
  closeDetailModal: () => void;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [singleToken, setSingleToken] = useState<string | null>(null);
  const [inputTokens, setInputTokens] = useState<InputToken[]>(
    currentPool.poolAssets.map((asset) => ({
      denom: asset.token!.denom,
      inputAmount: '',
    }))
  );

  const { showToast } = useTransactionToast();
  const [isMobile] = useMediaQuery('(max-width: 480px)');

  useEffect(() => {
    setInputTokens(
      currentPool.poolAssets.map((asset) => ({
        denom: asset.token!.denom,
        inputAmount: '',
      }))
    );
  }, [currentPool]);

  const { getSigningStargateClient, address } = useChain(chainName);

  const poolName = currentPool?.poolAssets.map(({ token }) =>
    getSymbolForDenom(token!.denom)
  );

  const pool = prettyPool(currentPool);

  const currentInputTokens = singleToken
    ? [
        inputTokens.find(
          ({ denom }) => denom === getOsmoDenomForSymbol(singleToken)
        )!,
      ]
    : inputTokens;

  const hasEmptyAmount = currentInputTokens.some((t) => !t.inputAmount);

  const hasZeroAmount = currentInputTokens.some((t) =>
    new BigNumber(t.inputAmount).lte(0)
  );

  const hasInsufficientAmount = currentInputTokens.some((t) => {
    const balance = balances.find((b) => b.denom === t.denom)?.amount || 0;
    const symbol = getSymbolForDenom(t.denom);
    return new BigNumber(t.inputAmount).gt(
      baseUnitsToDisplayUnits(symbol, balance)
    );
  });

  const btnText = hasEmptyAmount
    ? 'Amount is empty'
    : hasInsufficientAmount
    ? 'Insufficient amount'
    : hasZeroAmount
    ? 'Amount is Zero'
    : 'Add liquidity';

  const closeModal = () => {
    setInputTokens(
      currentPool.poolAssets.map((asset) => ({
        denom: asset.token!.denom,
        inputAmount: '',
      }))
    );
    setIsLoading(false);
    setSingleToken(null);
    onClose();
  };

  const handleClick = async () => {
    setIsLoading(true);

    const stargateClient = await getSigningStargateClient();

    if (!stargateClient || !address) {
      console.error('stargateClient undefined or address undefined.');
      return;
    }

    const allCoins = inputTokens.map(({ denom, inputAmount }) => ({
      denom,
      amount: new BigNumber(inputAmount)
        .shiftedBy(getExponentByDenom(denom))
        .toString(),
    }));

    let msg = [];

    if (singleToken) {
      const inputCoin = allCoins.find(
        (coin) => coin.denom === getOsmoDenomForSymbol(singleToken)
      )!;
      const coinSymbol = getSymbolForDenom(inputCoin.denom);
      const inputValue = baseUnitsToDollarValue(
        prices,
        coinSymbol,
        inputCoin.amount
      );
      const coinsNeeded = convertDollarValueToCoins(inputValue, pool, prices);
      const shareOutAmount = calcShareOutAmount(pool, coinsNeeded);
      const joinSwapExternAmountInMsg = joinSwapExternAmountIn({
        poolId: currentPool.id,
        sender: address,
        tokenIn: inputCoin,
        shareOutMinAmount: calcAmountWithSlippage(
          shareOutAmount,
          DEFAULT_SLIPPAGE
        ),
      });
      msg.push(joinSwapExternAmountInMsg);
    } else {
      const shareOutAmount = calcShareOutAmount(pool, allCoins);
      const tokenInMaxs = allCoins.map((c: Coin) => {
        return coin(c.amount, c.denom);
      });
      const joinPoolMsg = joinPool({
        poolId: currentPool.id,
        sender: address,
        shareOutAmount: calcAmountWithSlippage(
          shareOutAmount,
          DEFAULT_SLIPPAGE
        ),
        tokenInMaxs,
      });
      msg.push(joinPoolMsg);
    }

    const fee = {
      amount: aminoCoins(0, 'uosmo'),
      gas: '240000',
    };

    try {
      const res = await stargateClient.signAndBroadcast(address, msg, fee);
      if (res?.code !== TransactionResult.Success) throw res;
      stargateClient.disconnect();
      setIsLoading(false);
      showToast(res.code);
      closeModal();
      closeDetailModal();
      updatePoolsData();
    } catch (error) {
      console.error(error);
      stargateClient.disconnect();
      setIsLoading(false);
      showToast(TransactionResult.Failed, error);
    }
  };

  const titleColor = useColorModeValue('#697584', '#A7B4C2');
  const statColor = useColorModeValue('#2C3137', '#EEF2F8');

  return (
    <Modal
      isOpen={isOpen}
      onClose={closeModal}
      isCentered
      size={isMobile ? 'sm' : { sm: 'sm', md: 'xl', lg: '3xl' }}
    >
      <ModalOverlay bg="blackAlpha.800" />
      <ModalContent bg={useColorModeValue('#FFF', '#2C3137')}>
        <ModalHeader>
          <Text fontWeight="600" fontSize="20px" color={statColor}>
            Add liquidity
          </Text>
          <Text fontWeight="400" fontSize="14px" color={titleColor}>
            {poolName?.join(' / ')}
          </Text>
        </ModalHeader>
        <ModalCloseButton color={titleColor} />
        <ModalBody>
          {pool.poolAssetsPretty.map((token, i) => (
            <Box
              key={token.symbol}
              mb={i === pool.poolAssetsPretty.length - 1 ? 0 : '36px'}
            >
              <TokenInput
                singleToken={singleToken}
                setSingleToken={setSingleToken}
                allTokens={pool.poolAssetsPretty}
                token={token}
                poolData={pool}
                balances={balances}
                prices={prices}
                inputTokens={inputTokens}
                setInputTokens={setInputTokens}
              />
            </Box>
          ))}
          <Center mt="44px" mb="24px">
            <LargeButton
              btnText={btnText}
              handleClick={handleClick}
              isLoading={isLoading}
              width="100%"
              disabled={
                hasEmptyAmount || hasInsufficientAmount || hasZeroAmount
              }
            />
          </Center>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AddLiquidityModal;
