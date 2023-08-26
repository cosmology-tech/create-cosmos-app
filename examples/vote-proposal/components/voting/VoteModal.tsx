import { useState } from 'react';
import { cosmos } from 'interchain-query';
import { useChain } from '@cosmos-kit/react';
import { coins, StdFee } from '@cosmjs/stargate';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Stack,
  Radio,
  RadioGroup,
  UseDisclosureReturn,
} from '@chakra-ui/react';

import { useTx } from '@/hooks';
import { getCoin } from '@/utils';

const VoteType = cosmos.gov.v1beta1.VoteOption;
const { vote: composeVoteMessage } =
  cosmos.gov.v1beta1.MessageComposer.fromPartial;

interface VoteModalProps {
  modalControl: UseDisclosureReturn;
  chainName: string;
  updateVotes: () => void;
  vote: number | undefined;
  title: string;
  proposalId: bigint;
}

export const VoteModal: React.FC<VoteModalProps> = ({
  modalControl,
  chainName,
  updateVotes,
  title,
  vote,
  proposalId,
}) => {
  const [option, setOption] = useState<number>();
  const [isLoading, setIsLoading] = useState(false);

  const { tx } = useTx(chainName);
  const { address } = useChain(chainName);

  const coin = getCoin(chainName);
  const { isOpen, onClose } = modalControl;

  const checkIfDisable = (option: number) => option === vote;

  const closeModal = () => {
    onClose();
    setOption(undefined);
  };

  const handleConfirmClick = async () => {
    if (!address || !option) return;
    setIsLoading(true);

    const msg = composeVoteMessage({
      option,
      proposalId,
      voter: address,
    });

    const fee: StdFee = {
      amount: coins('1000', coin.base),
      gas: '100000',
    };

    await tx([msg], {
      fee,
      onSuccess: () => {
        updateVotes();
        closeModal();
      },
    });

    setIsLoading(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader mr={4}>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <RadioGroup onChange={(e) => setOption(Number(e))}>
            <Stack>
              <Radio
                colorScheme="blue"
                size="lg"
                value={VoteType.VOTE_OPTION_YES.toString()}
                isDisabled={checkIfDisable(VoteType.VOTE_OPTION_YES)}
              >
                Yes
              </Radio>
              <Radio
                colorScheme="red"
                size="lg"
                value={VoteType.VOTE_OPTION_NO.toString()}
                isDisabled={checkIfDisable(VoteType.VOTE_OPTION_NO)}
              >
                No
              </Radio>
              <Radio
                colorScheme="red"
                size="lg"
                value={VoteType.VOTE_OPTION_NO_WITH_VETO.toString()}
                isDisabled={checkIfDisable(VoteType.VOTE_OPTION_NO_WITH_VETO)}
              >
                No with Veto
              </Radio>
              <Radio
                colorScheme="gray"
                size="lg"
                value={VoteType.VOTE_OPTION_ABSTAIN.toString()}
                isDisabled={checkIfDisable(VoteType.VOTE_OPTION_ABSTAIN)}
              >
                Abstain
              </Radio>
            </Stack>
          </RadioGroup>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blue"
            onClick={handleConfirmClick}
            isDisabled={!option || isLoading}
            isLoading={isLoading}
          >
            Confirm
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
