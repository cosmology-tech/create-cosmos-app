export const Permission = {
  Vote: 'vote',
  Send: 'send',
  Delegate: 'delegate',
  ClaimRewards: 'claim-rewards',
} as const;

export type PermissionId = typeof Permission[keyof typeof Permission];

export type PermissionItem = {
  id: PermissionId;
  name: string;
  isCustomizable: boolean;
};

export const permissions: PermissionItem[] = [
  {
    id: Permission.Vote,
    name: 'Vote',
    isCustomizable: false,
  },
  {
    id: Permission.Send,
    name: 'Send',
    isCustomizable: true,
  },
  {
    id: Permission.Delegate,
    name: 'Delegate',
    isCustomizable: true,
  },
  {
    id: Permission.ClaimRewards,
    name: 'Claim Rewards',
    isCustomizable: false,
  },
];

export const permissionNameToRouteMap: Record<string, string> = {
  Vote: '/vote',
  Send: '/send',
  Delegate: '/stake',
  WithdrawDelegatorReward: '/claim-rewards',
};
