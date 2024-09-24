import { useState } from 'react';
import { cosmos } from 'interchain-query';
import { StdFee } from '@cosmjs/amino';
import { useChain } from '@cosmos-kit/react';
import { ChainName } from 'cosmos-kit';
import BigNumber from 'bignumber.js';
import {
  BasicModal,
  StakingDelegate,
  Box,
  Button,
  Callout,
  Text,
} from '@interchain-ui/react';

import {
  type ExtendedValidator as Validator,
  formatValidatorMetaInfo,
  getAssetLogoUrl,
  isGreaterThanZero,
  shiftDigits,
  calcDollarValue,
  getCoin,
  getExponent,
  toBaseAmount,
} from '@/utils';
import { Prices, UseDisclosureReturn, useTx } from '@/hooks';

const { delegate } = cosmos.staking.v1beta1.MessageComposer.fromPartial;

export type MaxAmountAndFee = {
  maxAmount: number;
  fee: StdFee;
};

export const DelegateModal = ({
  balance,
  updateData,
  unbondingDays,
  chainName,
  logoUrl,
  modalControl,
  selectedValidator,
  closeOuterModal,
  prices,
  modalTitle,
  showDescription = true,
}: {
  balance: string;
  updateData: () => void;
  unbondingDays: string;
  chainName: ChainName;
  modalControl: UseDisclosureReturn;
  selectedValidator: Validator;
  logoUrl: string;
  prices: Prices;
  closeOuterModal?: () => void;
  modalTitle?: string;
  showDescription?: boolean;
}) => {
  const { isOpen, onClose } = modalControl;
  const { address, estimateFee } = useChain(chainName);

  const [amount, setAmount] = useState<number | undefined>(0);
  const [isDelegating, setIsDelegating] = useState(false);
  const [isSimulating, setIsSimulating] = useState(false);
  const [maxAmountAndFee, setMaxAmountAndFee] = useState<MaxAmountAndFee>();

  const coin = getCoin(chainName);
  const exp = getExponent(chainName);
  const { tx } = useTx(chainName);

  const onModalClose = () => {
    onClose();
    setAmount(0);
    setIsDelegating(false);
    setIsSimulating(false);
  };

  const onDelegateClick = async () => {
    if (!address || !amount) return;

    setIsDelegating(true);

    const msg = delegate({
      delegatorAddress: address,
      validatorAddress: selectedValidator.address,
      amount: {
        amount: toBaseAmount(amount, exp), // shiftDigits(amount, exp),
        denom: coin.base,
      },
    });

    const isMaxAmountAndFeeExists =
      maxAmountAndFee &&
      new BigNumber(amount).isEqualTo(maxAmountAndFee.maxAmount);

    await tx([msg], {
      fee: isMaxAmountAndFeeExists ? maxAmountAndFee.fee : null,
      onSuccess: () => {
        setMaxAmountAndFee(undefined);
        closeOuterModal && closeOuterModal();
        updateData();
        onModalClose();
      },
    });

    setIsDelegating(false);
  };

  const handleMaxClick = async () => {
    if (!address) return;

    if (Number(balance) === 0) {
      setAmount(0);
      return;
    }

    setIsSimulating(true);

    const msg = delegate({
      delegatorAddress: address,
      validatorAddress: selectedValidator.address,
      amount: {
        amount: shiftDigits(balance, exp),
        denom: coin.base,
      },
    });

    try {
      const fee = await estimateFee([msg]);
      const feeAmount = new BigNumber(fee.amount[0].amount).shiftedBy(-exp);
      const balanceAfterFee = new BigNumber(balance)
        .minus(feeAmount)
        .toNumber();
      setMaxAmountAndFee({ fee, maxAmount: balanceAfterFee });
      setAmount(balanceAfterFee);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSimulating(false);
    }
  };

  const headerExtra = (
    <>
      {showDescription && selectedValidator.description && (
        <Text fontSize="$md">{selectedValidator.description}</Text>
      )}
      {unbondingDays && (
        <Callout
          title={`Staking will lock your funds for ${unbondingDays} days`}
          intent="error"
          iconName="errorWarningLine"
        >
          You will need to undelegate in order for your staked assets to be
          liquid again. This process will take {unbondingDays} days to complete.
        </Callout>
      )}
    </>
  );

  return (
    <BasicModal
      title={modalTitle || 'Delegate'}
      isOpen={isOpen}
      onClose={onModalClose}
    >
      <Box width={{ mobile: '100%', tablet: '$containerSm' }}>
        <StakingDelegate
          header={{
            title: selectedValidator.name,
            subtitle: formatValidatorMetaInfo(selectedValidator),
            avatarUrl: logoUrl,
          }}
          headerExtra={headerExtra}
          delegationItems={[
            {
              label: 'Your Delegation',
              tokenAmount: selectedValidator.delegation,
              tokenName: coin.symbol,
            },
            {
              label: 'Available to Delegate',
              tokenAmount: balance,
              tokenName: coin.symbol,
            },
          ]}
          inputProps={{
            inputToken: {
              tokenName: coin.symbol,
              tokenIconUrl: getAssetLogoUrl(coin),
            },
            notionalValue: amount
              ? calcDollarValue(coin.base, amount, prices)
              : undefined,
            minValue: 0,
            maxValue: maxAmountAndFee?.maxAmount ?? Number(balance),
            value: amount,
            onValueChange: (val) => {
              setAmount(val);
            },
            partials: [
              {
                label: '1/2',
                onClick: () => {
                  const newAmount = new BigNumber(balance)
                    .dividedBy(2)
                    .toNumber();
                  setAmount(newAmount);
                },
              },
              {
                label: '1/3',
                onClick: () => {
                  const newAmount = new BigNumber(balance)
                    .dividedBy(3)
                    .toNumber();

                  setAmount(newAmount);
                },
              },
              {
                label: 'Max',
                onClick: () => setAmount(Number(balance)),
              },
            ],
          }}
          footer={
            <Button
              intent="tertiary"
              onClick={onDelegateClick}
              disabled={
                !isGreaterThanZero(amount) || isDelegating || isSimulating
              }
              isLoading={isDelegating}
            >
              Delegate
            </Button>
          }
        />
      </Box>
    </BasicModal>
  );
};
