import { useState } from 'react';
import { Text } from '@interchain-ui/react';
import { ChainName } from 'cosmos-kit';

import MyValidatorsList from './MyValidatorsList';
import { ValidatorInfoModal } from './ValidatorInfoModal';
import { UndelegateModal } from './UndelegateModal';
import { SelectValidatorModal } from './SelectValidatorModal';
import { RedelegateModal } from './RedelegateModal';
import { type ExtendedValidator as Validator } from '@/utils';
import { DelegateModal } from './DelegateModal';
import { Prices, useDisclosure } from '@/hooks';

export const MyValidators = ({
  myValidators,
  allValidators,
  balance,
  updateData,
  unbondingDays,
  chainName,
  logos,
  prices,
}: {
  myValidators: Validator[];
  allValidators: Validator[];
  balance: string;
  updateData: () => void;
  unbondingDays: string;
  chainName: ChainName;
  prices: Prices;
  logos: {
    [key: string]: string;
  };
}) => {
  const [selectedValidator, setSelectedValidator] = useState<Validator>();
  const [validatorToRedelegate, setValidatorToRedelegate] =
    useState<Validator>();

  const validatorInfoModalControl = useDisclosure();
  const delegateModalControl = useDisclosure();
  const undelegateModalControl = useDisclosure();
  const selectValidatorModalControl = useDisclosure();
  const redelegateModalControl = useDisclosure();

  return (
    <>
      <Text
        color="$textSecondary"
        fontSize="$lg"
        fontWeight="$semibold"
        attributes={{ mt: '$14', mb: '$6' }}
      >
        My Validators
      </Text>

      <MyValidatorsList
        logos={logos}
        myValidators={myValidators}
        chainName={chainName}
        openModal={validatorInfoModalControl.onOpen}
        setSelectedValidator={setSelectedValidator}
      />

      {selectedValidator && validatorInfoModalControl.isOpen && (
        <ValidatorInfoModal
          chainName={chainName}
          logoUrl={logos[selectedValidator.address]}
          modalControl={validatorInfoModalControl}
          selectedValidator={selectedValidator}
          handleClick={{
            openDelegateModal: delegateModalControl.onOpen,
            openSelectValidatorModal: selectValidatorModalControl.onOpen,
            openUndelegateModal: undelegateModalControl.onOpen,
          }}
        />
      )}

      {selectedValidator && delegateModalControl.isOpen && (
        <DelegateModal
          balance={balance}
          chainName={chainName}
          closeOuterModal={validatorInfoModalControl.onClose}
          modalControl={delegateModalControl}
          selectedValidator={selectedValidator}
          logoUrl={logos[selectedValidator.address]}
          unbondingDays={unbondingDays}
          updateData={updateData}
          showDescription={false}
          prices={prices}
        />
      )}

      {selectedValidator && undelegateModalControl.isOpen && (
        <UndelegateModal
          chainName={chainName}
          closeOuterModal={validatorInfoModalControl.onClose}
          modalControl={undelegateModalControl}
          selectedValidator={selectedValidator}
          logoUrl={logos[selectedValidator.address]}
          unbondingDays={unbondingDays}
          updateData={updateData}
          prices={prices}
        />
      )}

      {selectValidatorModalControl.isOpen && (
        <SelectValidatorModal
          chainName={chainName}
          modalControl={selectValidatorModalControl}
          logos={logos}
          allValidators={allValidators}
          handleValidatorClick={(validator) => {
            redelegateModalControl.onOpen();
            selectValidatorModalControl.onClose();
            setValidatorToRedelegate(validator);
          }}
        />
      )}

      {selectedValidator &&
        validatorToRedelegate &&
        redelegateModalControl.isOpen && (
          <RedelegateModal
            chainName={chainName}
            modalControl={redelegateModalControl}
            selectedValidator={selectedValidator}
            validatorToRedelegate={validatorToRedelegate}
            updateData={updateData}
            prices={prices}
          />
        )}
    </>
  );
};
