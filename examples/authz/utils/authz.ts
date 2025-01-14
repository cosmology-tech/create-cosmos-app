import dayjs from 'dayjs';
import { Coin } from '@cosmjs/amino';
import { GetServerSideProps } from 'next';

import {
  GenericAuthorization,
  GrantAuthorization,
} from 'interchain-react/cosmos/authz/v1beta1/authz';
import { SendAuthorization } from 'interchain-react/cosmos/bank/v1beta1/authz';
import {
  authorizationTypeToJSON,
  StakeAuthorization,
} from 'interchain-react/cosmos/staking/v1beta1/authz';

import { shiftDigits } from './calc';
import { ExtendedValidator } from './staking';
import { getExponentByDenom, getSymbolByDenom } from './chain';

const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

const getAuthzPrettyName = (authz: GrantAuthorization['authorization']) => {
  switch (true) {
    case SendAuthorization.is(authz):
      return 'Send';

    case StakeAuthorization.is(authz):
      const type = authorizationTypeToJSON(
        (authz as StakeAuthorization).authorizationType
      );
      return capitalize(type.split('_').pop()!);

    case GenericAuthorization.is(authz):
      const msg = (authz as GenericAuthorization).msg;
      return msg.split('.').pop()!.replace('Msg', '');

    default:
      return 'Unknown';
  }
};

export const prettyGrants = (
  grants: GrantAuthorization[],
  groupBy: 'granter' | 'grantee'
) => {
  return grants
    .reduce((acc, grant) => {
      const addr = grant[groupBy];
      const isNewAddr = acc.every((item) => !item[addr]);
      if (isNewAddr) {
        return [...acc, { [addr]: [grant] }];
      }
      return acc.map((item) => {
        if (item[addr]) {
          return { [addr]: [...item[addr], grant] };
        }
        return item;
      });
    }, [] as { [addr: string]: GrantAuthorization[] }[])
    .map((item) => {
      const address = Object.keys(item)[0];
      const grants = item[address];

      const permissions = grants.map((grant) => {
        return {
          ...grant,
          expiry: dayjs(grant.expiration).format('YYYY-MM-DD HH:mm:ss'),
          name: getAuthzPrettyName(grant.authorization),
        };
      });

      return {
        address,
        permissions,
      };
    });
};

export type PrettyGrant = ReturnType<typeof prettyGrants>[0];
export type PrettyPermission = PrettyGrant['permissions'][0];

const formatTokenAmount = (token: Coin) => {
  const symbol = getSymbolByDenom(token.denom);
  const exponent = getExponentByDenom(token.denom);
  const displayAmount = shiftDigits(token.amount, -exponent);
  return `${displayAmount} ${symbol}`;
};

const formatValidatorsList = (
  addresses: string[],
  validators: ExtendedValidator[]
) => {
  return addresses
    .map((address) => {
      const validator = validators.find((v) => v.address === address);
      return validator ? validator.name : address;
    })
    .join(', ');
};

export const getAttributePairs = (
  authz: GrantAuthorization['authorization'],
  validators: ExtendedValidator[]
) => {
  const pair: { label: string; value: string }[] = [];

  switch (true) {
    case SendAuthorization.is(authz):
      const sendAuthz = authz as SendAuthorization;
      if (sendAuthz.spendLimit) {
        pair.push({
          label: 'Spend Limit',
          value: formatTokenAmount(sendAuthz.spendLimit[0]),
        });
      }

    case StakeAuthorization.is(authz):
      const stakeAuthz = authz as StakeAuthorization;
      if (stakeAuthz.maxTokens) {
        pair.push({
          label: 'Max Tokens',
          value: formatTokenAmount(stakeAuthz.maxTokens),
        });
      }
      if (stakeAuthz.allowList) {
        pair.push({
          label: 'Allow List',
          value: formatValidatorsList(stakeAuthz.allowList.address, validators),
        });
      }
      if (stakeAuthz.denyList) {
        pair.push({
          label: 'Deny List',
          value: formatValidatorsList(stakeAuthz.denyList.address, validators),
        });
      }

    default:
      break;
  }

  return pair;
};

interface RedirectOptions {
  to: string;
}

export const withServerSideRedirect = (options: RedirectOptions) => {
  const getServerSideProps: GetServerSideProps = async (context) => {
    context.res.writeHead(301, { Location: options.to });
    context.res.end();

    return { props: {} };
  };

  return getServerSideProps;
};
