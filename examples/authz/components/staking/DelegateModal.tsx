// TODO fix type issues
// @ts-nocheck

import { useState } from 'react';
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
import { useAuthzContext } from '@/context';
import {
  Prices,
  useAuthzTx,
  UseDisclosureReturn,
  useSigningClientDirect,
  useToast,
} from '@/hooks';
import { MsgDelegate } from 'interchain-react/cosmos/staking/v1beta1/tx';
import { StakeAuthorization } from 'interchain-react/cosmos/staking/v1beta1/authz';
import { useExec } from 'interchain-react/cosmos/authz/v1beta1/tx.rpc.func';
import { defaultContext } from '@tanstack/react-query';

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

  const [amount, setAmount] = useState<number | undefined>(0);
  const [isDelegating, setIsDelegating] = useState(false);
  const [, forceUpdate] = useState(0);

  const coin = getCoin(chainName);
  const exponent = getExponent(chainName);

  const { createExecMsg } = useAuthzTx(chainName);

  const { data: client } = useSigningClientDirect(chainName);

  const { mutate: exec } = useExec({
    clientResolver: client,
    options: {
      context: defaultContext,
    },
  });

  const { permission } = useAuthzContext();
  const { toast } = useToast();

  const onModalClose = () => {
    onClose();
    setAmount(0);
    setIsDelegating(false);
  };

  const onDelegateClick = async () => {
    if (!amount || !permission) return;

    const { grantee, granter, authorization, expiration } = permission;

    const delegateAmount = shiftDigits(amount, exponent);

    if (StakeAuthorization.is(authorization)) {
      const maxAmount = authorization?.maxTokens?.amount;

      if (maxAmount && new BigNumber(delegateAmount).gt(maxAmount)) {
        toast({
          type: 'error',
          title: 'Amount exceeds max tokens',
        });
        return;
      }

      const allowList = authorization?.allowList?.address;
      const denyList = authorization?.denyList?.address;

      if (
        (allowList && !allowList.includes(selectedValidator.address)) ||
        (denyList && denyList.includes(selectedValidator.address))
      ) {
        toast({
          type: 'error',
          title: 'Unauthorized Delegation',
          description:
            'You are not allowed to delegate to this validator from this account.',
        });
        return;
      }
    }

    setIsDelegating(true);

    const msg = MsgDelegate.toProtoMsg({
      delegatorAddress: granter,
      validatorAddress: selectedValidator.address,
      amount: {
        amount: delegateAmount,
        denom: coin.base,
      },
    });

    exec(
      {
        granter,
        message: createExecMsg({ msgs: [msg], grantee }),
        fee: 'auto',
        memo: 'executing permission',
      },
      {
        onSuccess: () => {
          closeOuterModal && closeOuterModal();
          updateData();
          onModalClose();
        },
        onError: () => {
          setIsDelegating(false);
        },
      }
    );
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

              if (new BigNumber(val).gt(balance)) {
                setAmount(Number(balance));
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
                onClick: () => setAmount(Number(balance)),
              },
            ],
          }}
          footer={
            <Button
              intent="tertiary"
              onClick={onDelegateClick}
              disabled={!isGreaterThanZero(amount) || isDelegating}
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
