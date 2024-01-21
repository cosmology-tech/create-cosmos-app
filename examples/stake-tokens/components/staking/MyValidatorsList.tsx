import React from 'react';
import { Dispatch, SetStateAction } from 'react';
import {
  Button,
  ValidatorList,
  ValidatorNameCell,
  ValidatorTokenAmountCell,
} from '@interchain-ui/react';
import { ChainName } from 'cosmos-kit';
import { getCoin } from '@/config';
import { type ExtendedValidator as Validator } from '@/utils';

const MyValidatorsList = ({
  myValidators,
  openModal,
  chainName,
  logos,
  setSelectedValidator,
}: {
  myValidators: Validator[];
  chainName: ChainName;
  openModal: () => void;
  setSelectedValidator: Dispatch<SetStateAction<Validator | undefined>>;
  logos: {
    [key: string]: string;
  };
}) => {
  const coin = getCoin(chainName);

  return (
    <ValidatorList
      columns={[
        {
          id: 'validator',
          label: 'Validator',
          width: '196px',
          align: 'left',
          render: (validator: Validator) => (
            <ValidatorNameCell
              validatorName={validator.name}
              validatorImg={logos[validator.address]}
            />
          ),
        },
        {
          id: 'amount-staked',
          label: 'Amount Staked',
          width: '196px',
          align: 'right',
          render: (validator: Validator) => (
            <ValidatorTokenAmountCell
              amount={validator.delegation}
              symbol={coin.symbol}
            />
          ),
        },
        {
          id: 'claimable-rewards',
          label: 'Claimable Rewards',
          width: '196px',
          align: 'right',
          render: (validator: Validator) => (
            <ValidatorTokenAmountCell
              amount={validator.reward}
              symbol={coin.symbol}
            />
          ),
        },
        {
          id: 'action',
          width: '196px',
          align: 'right',
          render: (validator) => (
            <Button
              variant="solid"
              intent="tertiary"
              size="sm"
              onClick={() => {
                openModal();
                setSelectedValidator(validator);
              }}
              attributes={{ ml: 'auto' }}
            >
              Manage
            </Button>
          ),
        },
      ]}
      data={myValidators}
      tableProps={{
        width: '$full',
      }}
    />
  );
};

export default React.memo(MyValidatorsList);
