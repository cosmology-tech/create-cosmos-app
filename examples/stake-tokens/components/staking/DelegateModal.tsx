import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Stack,
  UseDisclosureReturn,
} from '@chakra-ui/react';
import {
  DelegateWarning,
  StatBox,
  ValidatorDesc,
  ValidatorInfo,
} from './ModalElements';
import { useState } from 'react';
import { isGreaterThanZero, shiftDigits } from '@/utils';
import { useChain } from '@cosmos-kit/react';
import { cosmos } from 'interchain-query';
import { getCoin, getExponent } from '@/config';
import { StdFee } from '@cosmjs/amino';
import { ChainName } from '@cosmos-kit/core';
import BigNumber from 'bignumber.js';
import { useInputBox, useTx } from '@/hooks';
import { type ExtendedValidator as Validator } from '@/utils';

const { delegate } = cosmos.staking.v1beta1.MessageComposer.fromPartial;

export type MaxAmountAndFee = {
  maxAmount: string;
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
  closeOuterModal?: () => void;
  modalTitle?: string;
  showDescription?: boolean;
}) => {
  const { isOpen, onClose } = modalControl;
  const { address, estimateFee } = useChain(chainName);

  const [isDelegating, setIsDelegating] = useState(false);
  const [isSimulating, setIsSimulating] = useState(false);
  const [maxAmountAndFee, setMaxAmountAndFee] = useState<MaxAmountAndFee>();

  const coin = getCoin(chainName);
  const exp = getExponent(chainName);
  const { tx } = useTx(chainName);

  const { renderInputBox, amount, setAmount } = useInputBox(balance);

  const onModalClose = () => {
    onClose();
    setAmount('');
    setIsDelegating(false);
    setIsSimulating(false);
  };

  const onDelegateClick = async () => {
    setIsDelegating(true);

    if (!address) return;

    const msg = delegate({
      delegatorAddress: address,
      validatorAddress: selectedValidator.address,
      amount: {
        amount: shiftDigits(amount, exp),
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
        .toString();
      setMaxAmountAndFee({ fee, maxAmount: balanceAfterFee });
      setAmount(balanceAfterFee);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSimulating(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onModalClose} size="2xl" isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{modalTitle || 'Delegate'}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <ValidatorInfo
            logoUrl={logoUrl}
            name={selectedValidator.name}
            commission={shiftDigits(selectedValidator.commission, 2)}
            apr={selectedValidator.apr}
          />
          {showDescription && (
            <ValidatorDesc description={selectedValidator.description} />
          )}
          <DelegateWarning unbondingDays={unbondingDays} />
          <Stack direction="row" spacing={4} my={4}>
            <StatBox
              label="Your Delegation"
              token={coin.symbol}
              amount={selectedValidator.delegation}
            />
            <StatBox
              label="Available to Delegate"
              amount={balance}
              token={coin.symbol}
            />
          </Stack>
          {renderInputBox(
            'Amount to Delegate',
            coin.symbol,
            handleMaxClick,
            isSimulating
          )}
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="primary"
            onClick={onDelegateClick}
            isDisabled={
              !isGreaterThanZero(amount) || isDelegating || isSimulating
            }
            isLoading={isDelegating}
          >
            Delegate
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
