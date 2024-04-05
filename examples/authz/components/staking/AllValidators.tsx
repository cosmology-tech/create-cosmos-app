// TODO fix type issues
// @ts-nocheck

import { useState } from 'react';
import { Text } from '@interchain-ui/react';
import { ChainName } from 'cosmos-kit';

import { DelegateModal } from './DelegateModal';
import AllValidatorsList from './AllValidatorsList';
import { Prices, useDisclosure } from '@/hooks';
import { type ExtendedValidator as Validator } from '@/utils';

export const AllValidators = ({
  validators,
  balance,
  updateData,
  unbondingDays,
  chainName,
  logos,
  prices,
}: {
  validators: Validator[];
  balance: string;
  updateData: () => void;
  unbondingDays: string;
  chainName: ChainName;
  logos: {
    [key: string]: string;
  };
  prices: Prices;
}) => {
  const delegateModalControl = useDisclosure();
  const [selectedValidator, setSelectedValidator] = useState<Validator>();

  return (
    <>
      <Text
        color="$textSecondary"
        fontSize="$lg"
        fontWeight="$semibold"
        attributes={{ mt: '$14', mb: '$6' }}
      >
        All Validators
      </Text>

      <AllValidatorsList
        validators={validators}
        chainName={chainName}
        logos={logos}
        openModal={delegateModalControl.onOpen}
        setSelectedValidator={setSelectedValidator}
      />

      {selectedValidator && (
        <DelegateModal
          balance={balance}
          updateData={updateData}
          unbondingDays={unbondingDays}
          chainName={chainName}
          prices={prices}
          logoUrl={logos[selectedValidator.address]}
          modalControl={delegateModalControl}
          selectedValidator={selectedValidator}
          modalTitle="Validator"
        />
      )}
    </>
  );
};
