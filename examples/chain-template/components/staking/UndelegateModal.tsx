import { useState } from 'react';
import { cosmos } from 'interchain-query';
import { useChain } from '@cosmos-kit/react';
import { ChainName } from 'cosmos-kit';
import BigNumber from 'bignumber.js';
import {
  BasicModal,
  StakingDelegate,
  Callout,
  Box,
  Button,
} from '@interchain-ui/react';

import { getCoin, getExponent } from '@/utils';
import { Prices, UseDisclosureReturn, useTx } from '@/hooks';
import {
  calcDollarValue,
  formatValidatorMetaInfo,
  getAssetLogoUrl,
  isGreaterThanZero,
  shiftDigits,
  toBaseAmount,
  type ExtendedValidator as Validator,
} from '@/utils';

const { undelegate } = cosmos.staking.v1beta1.MessageComposer.fromPartial;

export const UndelegateModal = ({
  updateData,
  unbondingDays,
  chainName,
  logoUrl,
  selectedValidator,
  closeOuterModal,
  modalControl,
  prices,
}: {
  updateData: () => void;
  unbondingDays: string;
  chainName: ChainName;
  selectedValidator: Validator;
  closeOuterModal: () => void;
  modalControl: UseDisclosureReturn;
  logoUrl: string;
  prices: Prices;
}) => {
  const [amount, setAmount] = useState<number | undefined>(0);
  const [isUndelegating, setIsUndelegating] = useState(false);
  const [, forceUpdate] = useState(0);

  const { address } = useChain(chainName);
  const { tx } = useTx(chainName);

  const coin = getCoin(chainName);
  const exp = getExponent(chainName);

  const closeUndelegateModal = () => {
    setAmount(0);
    setIsUndelegating(false);
    modalControl.onClose();
  };

  const onUndelegateClick = async () => {
    if (!address || !amount) return;

    setIsUndelegating(true);

    const msg = undelegate({
      delegatorAddress: address,
      validatorAddress: selectedValidator.address,
      amount: {
        amount: toBaseAmount(amount, exp),
        denom: coin.base,
      },
    });

    await tx([msg], {
      onSuccess: () => {
        updateData();
        closeOuterModal();
        closeUndelegateModal();
      },
    });

    setIsUndelegating(false);
  };

  const maxAmount = selectedValidator.delegation;

  return (
    <BasicModal
      title="Undelegate"
      isOpen={modalControl.isOpen}
      onClose={closeUndelegateModal}
    >
      <Box width={{ mobile: '100%', tablet: '$containerSm' }}>
        <StakingDelegate
          header={{
            title: selectedValidator.name,
            subtitle: formatValidatorMetaInfo(selectedValidator),
            avatarUrl: logoUrl,
          }}
          headerExtra={
            unbondingDays && (
              <Callout
                title="Once the unbonding period begins you will:"
                intent="error"
                iconName="errorWarningLine"
              >
                <Box as="ul" ml="$9">
                  <Box as="li">not receive staking rewards</Box>
                  <Box as="li">not be able to cancel the unbonding</Box>
                  <Box as="li">
                    need to wait {unbondingDays} days for the amount to be
                    liquid
                  </Box>
                </Box>
              </Callout>
            )
          }
          delegationItems={[
            {
              label: 'Your Delegation',
              tokenAmount: selectedValidator.delegation,
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
            value: amount,
            minValue: 0,
            maxValue: Number(maxAmount),
            onValueChange: (val) => {
              setAmount(val);
            },
            // onValueInput: (val) => {
            //   if (!val) {
            //     setAmount(undefined);
            //     return;
            //   }

            //   if (new BigNumber(val).gt(maxAmount)) {
            //     setAmount(Number(maxAmount));
            //     forceUpdate((n) => n + 1);
            //     return;
            //   }

            //   setAmount(Number(val));
            // },
            partials: [
              {
                label: '1/2',
                onClick: () => {
                  setAmount(new BigNumber(maxAmount).dividedBy(2).toNumber());
                },
              },
              {
                label: '1/3',
                onClick: () => {
                  setAmount(new BigNumber(maxAmount).dividedBy(3).toNumber());
                },
              },
              {
                label: 'Max',
                onClick: () => setAmount(Number(maxAmount)),
              },
            ],
          }}
          footer={
            <Button
              intent="tertiary"
              onClick={onUndelegateClick}
              disabled={!isGreaterThanZero(amount) || isUndelegating}
              isLoading={isUndelegating}
            >
              Undelegate
            </Button>
          }
        />
      </Box>
    </BasicModal>
  );
};
