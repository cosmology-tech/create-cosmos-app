import { useState } from 'react';
import { cosmos } from 'interchain-query';
import { useChain } from '@cosmos-kit/react';
import { ChainName } from 'cosmos-kit';
import {
  BasicModal,
  Box,
  Button,
  StakingDelegateCard,
  StakingDelegateInput,
  Text,
} from '@interchain-ui/react';
import BigNumber from 'bignumber.js';

import {
  calcDollarValue,
  getAssetLogoUrl,
  isGreaterThanZero,
  shiftDigits,
  toBaseAmount,
  type ExtendedValidator as Validator,
} from '@/utils';
import { getCoin, getExponent } from '@/utils';
import { Prices, UseDisclosureReturn, useTx } from '@/hooks';

const { beginRedelegate } = cosmos.staking.v1beta1.MessageComposer.fromPartial;

export const RedelegateModal = ({
  updateData,
  chainName,
  modalControl,
  selectedValidator,
  validatorToRedelegate,
  prices,
}: {
  updateData: () => void;
  chainName: ChainName;
  selectedValidator: Validator;
  validatorToRedelegate: Validator;
  modalControl: UseDisclosureReturn;
  prices: Prices;
}) => {
  const { address } = useChain(chainName);

  const [amount, setAmount] = useState<number | undefined>(0);
  const [isRedelegating, setIsRedelegating] = useState(false);
  const [, forceUpdate] = useState(0);

  const coin = getCoin(chainName);
  const exp = getExponent(chainName);

  const { tx } = useTx(chainName);

  const closeRedelegateModal = () => {
    setAmount(0);
    setIsRedelegating(false);
    modalControl.onClose();
  };

  const onRedelegateClick = async () => {
    if (!address || !amount) return;

    setIsRedelegating(true);

    const msg = beginRedelegate({
      delegatorAddress: address,
      validatorSrcAddress: selectedValidator.address,
      validatorDstAddress: validatorToRedelegate.address,
      amount: {
        denom: coin.base,
        amount: toBaseAmount(amount, exp),
      },
    });

    await tx([msg], {
      onSuccess: () => {
        updateData();
        closeRedelegateModal();
      },
    });

    setIsRedelegating(false);
  };

  const maxAmount = selectedValidator.delegation;

  return (
    <BasicModal
      title="Redelegate"
      isOpen={modalControl.isOpen}
      onClose={closeRedelegateModal}
    >
      <Box width={{ mobile: '100%', tablet: '$containerSm' }} mt="$6">
        <RedelegateLabel
          type="from"
          validatorName={selectedValidator?.name}
          mb="20px"
        />

        <StakingDelegateCard
          label="Your Delegation"
          tokenAmount={selectedValidator?.delegation}
          tokenName={coin.symbol}
          attributes={{ mb: '$12' }}
        />

        <RedelegateLabel
          type="to"
          validatorName={validatorToRedelegate.name}
          mb="20px"
        />

        <StakingDelegateInput
          inputToken={{
            tokenName: coin.symbol,
            tokenIconUrl: getAssetLogoUrl(coin),
          }}
          minValue={0}
          maxValue={Number(maxAmount)}
          value={amount}
          notionalValue={
            amount ? calcDollarValue(coin.base, amount, prices) : undefined
          }
          onValueChange={(val) => {
            setAmount(val);
          }}
          // onValueInput={(val) => {
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
          // }}
          partials={[
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
          ]}
        />
      </Box>

      <Box mt="$12">
        <Button
          intent="tertiary"
          onClick={onRedelegateClick}
          isLoading={isRedelegating}
          disabled={!isGreaterThanZero(amount) || isRedelegating}
          fluidWidth
        >
          Redelegate
        </Button>
      </Box>
    </BasicModal>
  );
};

const RedelegateLabel = ({
  type,
  validatorName,
  mb,
}: {
  type: 'from' | 'to';
  validatorName: string;
  mb?: string;
}) => {
  return (
    <Text fontSize="$md" attributes={{ mb }}>
      {type === 'from' ? 'From' : 'To'}&nbsp;
      <Text as="span" fontSize="$md" fontWeight="$semibold">
        {validatorName}
      </Text>
    </Text>
  );
};
