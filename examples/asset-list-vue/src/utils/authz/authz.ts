import { GenericAuthorization, GrantAuthorization } from "../../outputv4/cosmos/authz/v1beta1/authz";
import { SendAuthorization } from "../../outputv4/cosmos/bank/v1beta1/authz";
import { authorizationTypeToJSON, StakeAuthorization } from "../../outputv4/cosmos/staking/v1beta1/authz";
import dayjs from 'dayjs';

const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

const getAuthzPrettyName = (authz: any) => {
  console.log('authz>>', authz)

  switch (true) {
    case SendAuthorization.typeUrl === authz?.typeUrl:
      return 'Send';

    case StakeAuthorization.is(authz):
      const type = authorizationTypeToJSON(
        (authz as StakeAuthorization).authorizationType
      );
      return capitalize(type.split('_').pop()!);

    case GenericAuthorization.typeUrl === authz?.typeUrl:
      const { msg } = GenericAuthorization.decode(authz.value)
      return msg?.split('.').pop()!.replace('Msg', '');

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