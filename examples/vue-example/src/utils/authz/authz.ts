import { GenericAuthorization, GrantAuthorization } from "../../codegen/cosmos/authz/v1beta1/authz";
import { SendAuthorization } from "../../codegen/cosmos/bank/v1beta1/authz";
import { authorizationTypeToJSON, StakeAuthorization } from "../../codegen/cosmos/staking/v1beta1/authz";
import dayjs from 'dayjs';

const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export type PrettyPermission = PrettyGrant['permissions'][0];

const getAuthzPrettyName = (authz: any) => {
  switch (true) {
    case SendAuthorization.typeUrl === authz?.typeUrl:
      return 'Send';

    case StakeAuthorization.typeUrl === authz?.typeUrl:
      const value = StakeAuthorization.decode(authz.value)
      const type = authorizationTypeToJSON(
        (value as StakeAuthorization).authorizationType
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