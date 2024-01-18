import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Stack,
  Text,
  UseDisclosureReturn,
} from '@chakra-ui/react';
import { StatBox } from './ModalElements';
import {
  isGreaterThanZero,
  shiftDigits,
  type ExtendedValidator as Validator,
} from '@/utils';
import { useEffect, useState } from 'react';
import { cosmos } from 'interchain-query';
import { useChain } from '@cosmos-kit/react';
import { getCoin, getExponent } from '@/config';
import { ChainName } from '@cosmos-kit/core';
import { useInputBox, useTx } from '@/hooks';

const { beginRedelegate } = cosmos.staking.v1beta1.MessageComposer.fromPartial;

export const RedelegateModal = ({
  updateData,
  chainName,
  modalControl,
  selectedValidator,
  validatorToRedelegate,
}: {
  updateData: () => void;
  chainName: ChainName;
  selectedValidator: Validator;
  validatorToRedelegate: Validator;
  modalControl: UseDisclosureReturn;
}) => {
  const { address } = useChain(chainName);

  const [isRedelegating, setIsRedelegating] = useState(false);

  const coin = getCoin(chainName);
  const exp = getExponent(chainName);

  const { tx } = useTx(chainName);

  const {
    amount: redelegateAmount,
    setAmount: setRedelegateAmount,
    renderInputBox: renderRedelegateInputBox,
    setMax: setMaxRedelegateAmount,
  } = useInputBox(selectedValidator.delegation);

  useEffect(() => {
    setMaxRedelegateAmount(selectedValidator.delegation);
  }, [selectedValidator, setMaxRedelegateAmount]);

  const closeRedelegateModal = () => {
    setRedelegateAmount('');
    setIsRedelegating(false);
    modalControl.onClose();
  };

  const onRedelegateClick = async () => {
    setIsRedelegating(true);

    if (!address) return;

    const msg = beginRedelegate({
      delegatorAddress: address,
      validatorSrcAddress: selectedValidator.address,
      validatorDstAddress: validatorToRedelegate.address,
      amount: {
        denom: coin.base,
        amount: shiftDigits(redelegateAmount, exp),
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

  return (
    <Modal
      isOpen={modalControl.isOpen}
      onClose={closeRedelegateModal}
      size="2xl"
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />

        <ModalBody>
          <Stack direction="row" mt={8} mb={2}>
            <Text>From </Text>
            <Text size="lg" fontWeight="bold">
              {selectedValidator?.name}
            </Text>
          </Stack>
          <StatBox
            label="Your Delegation"
            amount={selectedValidator?.delegation}
            token={coin.symbol}
          />

          <Stack direction="row" mt={8} mb={2}>
            <Text>To</Text>
            <Text size="lg" fontWeight="bold">
              {validatorToRedelegate.name}
            </Text>
          </Stack>
          {renderRedelegateInputBox('Amount to Redelegate', coin.symbol)}
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="primary"
            onClick={onRedelegateClick}
            isLoading={isRedelegating}
            isDisabled={!isGreaterThanZero(redelegateAmount) || isRedelegating}
          >
            Redelegate
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
