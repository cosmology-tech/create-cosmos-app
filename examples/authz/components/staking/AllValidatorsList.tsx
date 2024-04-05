// TODO fix type issues
// @ts-nocheck

import React, { Dispatch, SetStateAction, useMemo } from 'react';
import { ChainName } from 'cosmos-kit';

import { getCoin } from '@/configs';
import { shiftDigits, type ExtendedValidator as Validator } from '@/utils';
import {
  Text,
  Button,
  ValidatorList,
  ValidatorNameCell,
  ValidatorTokenAmountCell,
  GridColumn,
} from '@interchain-ui/react';

const AllValidatorsList = ({
  validators,
  openModal,
  chainName,
  logos,
  setSelectedValidator,
}: {
  validators: Validator[];
  chainName: ChainName;
  openModal: () => void;
  setSelectedValidator: Dispatch<SetStateAction<Validator | undefined>>;
  logos: {
    [key: string]: string;
  };
}) => {
  const coin = getCoin(chainName);

  const columns = useMemo(() => {
    const _columns: GridColumn[] = [
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
        id: 'voting-power',
        label: 'Voting Power',
        width: '196px',
        align: 'right',
        render: (validator: Validator) => (
          <ValidatorTokenAmountCell
            amount={validator.votingPower}
            symbol={coin.symbol}
          />
        ),
      },
      {
        id: 'commission',
        label: 'Commission',
        width: '196px',
        align: 'right',
        render: (validator: Validator) => (
          <Text fontWeight="$semibold">
            {shiftDigits(validator.commission, 2)}%
          </Text>
        ),
      },
      {
        id: 'action',
        width: '196px',
        align: 'right',
        render: (validator) => (
          <Button
            variant="solid"
            intent="secondary"
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
    ];

    const hasApr = !!validators[0]?.apr;

    if (hasApr) {
      _columns.splice(3, 0, {
        id: 'apr',
        label: 'APR',
        width: '196px',
        align: 'right',
        render: (validator: Validator) => (
          <Text fontWeight="$semibold">{validator.apr}%</Text>
        ),
      });
    }

    return _columns;
  }, [chainName]);

  return (
    <ValidatorList
      columns={columns}
      data={validators}
      tableProps={{
        width: '$full',
      }}
      variant="ghost"
    />
  );
};

export default React.memo(AllValidatorsList);
