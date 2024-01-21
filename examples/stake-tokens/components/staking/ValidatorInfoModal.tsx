import { getCoin } from '@/config';
import { ChainName } from 'cosmos-kit';
import {
  formatValidatorMetaInfo,
  type ExtendedValidator as Validator,
} from '@/utils';
import {
  BasicModal,
  Box,
  Button,
  StakingDelegate,
  Text,
} from '@interchain-ui/react';
import { UseDisclosureReturn } from '@/hooks';

export const ValidatorInfoModal = ({
  chainName,
  logoUrl,
  handleClick,
  modalControl,
  selectedValidator,
}: {
  chainName: ChainName;
  modalControl: UseDisclosureReturn;
  selectedValidator: Validator;
  handleClick: {
    openDelegateModal: () => void;
    openUndelegateModal: () => void;
    openSelectValidatorModal: () => void;
  };
  logoUrl: string;
}) => {
  const coin = getCoin(chainName);

  const { isOpen, onClose } = modalControl;
  const { openDelegateModal, openSelectValidatorModal, openUndelegateModal } =
    handleClick;

  return (
    <BasicModal title="Validator" isOpen={isOpen} onClose={onClose}>
      <Box width={{ mobile: '100%', tablet: '$containerSm' }}>
        <StakingDelegate
          header={{
            title: selectedValidator.name,
            subtitle: formatValidatorMetaInfo(selectedValidator),
            avatarUrl: logoUrl,
          }}
          headerExtra={
            selectedValidator.description && (
              <Text fontSize="$md">{selectedValidator.description}</Text>
            )
          }
          delegationItems={[
            {
              label: 'Your Delegation',
              tokenAmount: selectedValidator.delegation,
              tokenName: coin.symbol,
            },
          ]}
          footer={
            <Box display="flex" justifyContent="flex-end" gap="$8">
              <Button
                intent="secondary"
                onClick={() => {
                  onClose();
                  openUndelegateModal();
                }}
              >
                Undelegate
              </Button>
              <Button
                intent="secondary"
                onClick={() => {
                  onClose();
                  openSelectValidatorModal();
                }}
              >
                Redelegate
              </Button>
              <Button
                intent="tertiary"
                onClick={() => {
                  onClose();
                  openDelegateModal();
                }}
              >
                Delegate
              </Button>
            </Box>
          }
        />
      </Box>
    </BasicModal>
  );
};
