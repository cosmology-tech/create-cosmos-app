import { useState } from 'react';
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
  NumberField,
} from '@interchain-ui/react';

import {
  type ExtendedValidator as Validator,
  formatValidatorMetaInfo,
  getAssetLogoUrl,
  isGreaterThanZero,
  shiftDigits,
  calcDollarValue,
} from '@/utils';
import { getCoin, getExponent } from '@/configs';
import {
  Prices,
  useAuthzTx,
  UseDisclosureReturn,
  useToast,
  useTx,
} from '@/hooks';
import { cosmos } from '@/src/codegen';
import { useAuthzContext } from '@/context';
import { MsgDelegate } from '@/src/codegen/cosmos/staking/v1beta1/tx';
import { StakeAuthorization } from '@/src/codegen/cosmos/staking/v1beta1/authz';

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
  const [, forceUpdate] = useState(0);

  const coin = getCoin(chainName);
  const exp = getExponent(chainName);
  // const { tx } = useTx(chainName);
  const { authzTx, createExecMsg } = useAuthzTx(chainName);
  const { permission } = useAuthzContext();
  const { toast } = useToast();

  const onModalClose = () => {
    onClose();
    setAmount(0);
    setIsDelegating(false);
    setIsSimulating(false);
  };

  const onDelegateClick = async () => {
    if (!amount || !permission) return;

    const { grantee, granter, authorization } = permission;

    const stakeAuthz = authorization as StakeAuthorization;

    const allowList = stakeAuthz.allowList?.address || [];
    const denyList = stakeAuthz.denyList?.address || [];

    // TODO: check generic stake authz

    if (
      !allowList.includes(selectedValidator.address) ||
      denyList.includes(selectedValidator.address)
    ) {
      toast({
        title: 'Unauthorized Delegation',
        description:
          'You are not allowed to delegate to this validator from this account.',
        type: 'error',
      });
      return;
    }

    setIsDelegating(true);

    // const msg = delegate({
    //   delegatorAddress: granter,
    //   validatorAddress: selectedValidator.address,
    //   amount: {
    //     amount: shiftDigits(amount, exp),
    //     denom: coin.base,
    //   },
    // });

    const isMaxAmountAndFeeExists =
      maxAmountAndFee &&
      new BigNumber(amount).isEqualTo(maxAmountAndFee.maxAmount);

    const msg = MsgDelegate.toProtoMsg(
      MsgDelegate.fromPartial({
        delegatorAddress: granter,
        validatorAddress: selectedValidator.address,
        amount: {
          amount: shiftDigits(amount, exp),
          denom: coin.base,
        },
      })
    );

    const msgs = [createExecMsg({ msgs: [msg], grantee })];
    console.log('msgs', msgs);

    // return;
    authzTx({
      msgs,
      onSuccess: () => {
        setMaxAmountAndFee(undefined);
        closeOuterModal && closeOuterModal();
        updateData();
        onModalClose();
      },
      onComplete: () => {
        setIsDelegating(false);
      },
    });

    // await tx([msg], {
    //   fee: isMaxAmountAndFeeExists ? maxAmountAndFee.fee : null,
    //   onSuccess: () => {
    //     setMaxAmountAndFee(undefined);
    //     closeOuterModal && closeOuterModal();
    //     updateData();
    //     onModalClose();
    //   },
    // });

    // setIsDelegating(false);
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
      <Box
        width={{ mobile: '100%', tablet: '$containerSm' }}
        position="relative"
      >
        <Box
          position="absolute"
          bottom="150px"
          left="104px"
          zIndex="$10"
          width="360px"
        >
          <NumberField
            borderless
            formatOptions={{
              maximumFractionDigits: 6,
            }}
            value={amount}
            onInput={(e) => {
              // @ts-ignore
              const val = e.target.value;

              if (!val) {
                setAmount(undefined);
                return;
              }

              const max = maxAmountAndFee?.maxAmount || balance;

              if (new BigNumber(val).gt(max)) {
                setAmount(Number(max));
                forceUpdate((n) => n + 1);
                return;
              }

              setAmount(Number(val));
            }}
          />
        </Box>
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
            // value: amount,
            // onValueInput: (val) => {
            //   if (!val) {
            //     setAmount(undefined);
            //     return;
            //   }

            //   const max = maxAmountAndFee?.maxAmount || balance;

            //   if (new BigNumber(val).gt(max)) {
            //     setAmount(Number(max));
            //     forceUpdate((n) => n + 1);
            //     return;
            //   }

            //   setAmount(Number(val));
            // },
            partials: [
              {
                label: '1/2',
                onClick: () => {
                  setAmount(new BigNumber(balance).dividedBy(2).toNumber());
                },
              },
              {
                label: '1/3',
                onClick: () => {
                  setAmount(new BigNumber(balance).dividedBy(3).toNumber());
                },
              },
              {
                label: 'Max',
                onClick: handleMaxClick,
                isLoading: isSimulating,
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
