// TODO fix type issues
// @ts-nocheck

import { useState } from 'react';
import { ChainName } from 'cosmos-kit';
import {
  BasicModal,
  Box,
  TextField,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  SelectButton,
  ListItem,
  Stack,
  FieldLabel,
} from '@interchain-ui/react';
import { coin } from '@cosmjs/amino';
import { useChain } from '@cosmos-kit/react';
import { IoMdCalendar } from 'react-icons/io';
import Calendar from 'react-calendar';
import dayjs from 'dayjs';

import {
  getExponent,
  PermissionId,
  PermissionItem,
  permissions,
} from '@/configs';
import { AuthorizationType } from 'interchain-react/cosmos/staking/v1beta1/authz';
import {
  GrantMsg,
  useAuthzTx,
  useGrants,
  useSigningClientAmino,
  useSigningClientDirect,
} from '@/hooks';
import { getTokenByChainName, shiftDigits } from '@/utils';
import { CustomizationField } from './CustomizationField';
import { AddressInput } from '@/components';

import styles from '@/styles/custom.module.css';
import { useGrant } from 'interchain-react/cosmos/authz/v1beta1/tx.rpc.func';
import { defaultContext } from '@tanstack/react-query';
import { SendAuthorization } from 'interchain-react/cosmos/bank/v1beta1/authz';

export type AccessList = {
  type: 'allowList' | 'denyList';
  addresses: string[];
};

type GrantModalProps = {
  isOpen: boolean;
  onClose: () => void;
  chainName: ChainName;
};

export const GrantModal = ({ isOpen, onClose, chainName }: GrantModalProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);

  const [granteeAddress, setGranteeAddress] = useState('');
  const [addressErrorMsg, setAddressErrorMsg] = useState('');
  const [expiryDate, setExpiryDate] = useState<Date | null>(null);
  const [selectedPermission, setSelectedPermission] =
    useState<PermissionItem | null>(null);

  const [sendLimit, setSendLimit] = useState<number | undefined>(undefined);
  const [delegateLimit, setDelegateLimit] = useState<number | undefined>(
    undefined
  );
  const [accessList, setAccessList] = useState<AccessList>({
    type: 'allowList',
    addresses: [],
  });

  const [isGranting, setIsGranting] = useState(false);

  const { refetch } = useGrants(chainName);
  const { address } = useChain(chainName);
  const { createGrantMsg } = useAuthzTx(chainName);
  const { data: client } = useSigningClientAmino(chainName);

  const { mutate: grant } = useGrant({
    clientResolver: client,
    options: {
      context: defaultContext,
    },
  });

  const token = getTokenByChainName(chainName);
  const exponent = getExponent(chainName);
  const denom = token.base;

  const onModalClose = () => {
    setGranteeAddress('');
    setExpiryDate(null);
    setSelectedPermission(null);
    setSendLimit(undefined);
    setDelegateLimit(undefined);
    setIsGranting(false);
    setAccessList({ type: 'allowList', addresses: [] });
    onClose();
  };

  const onGrantClick = () => {
    if (!address || !granteeAddress || !expiryDate || !selectedPermission)
      return;

    setIsGranting(true);

    const sendMsg: GrantMsg = {
      grantType: 'send',
      customize: sendLimit
        ? SendAuthorization.fromPartial({
            spendLimit: [coin(shiftDigits(sendLimit, exponent), denom)],
          })
        : undefined,
    };

    const delegateMsg: GrantMsg = {
      grantType: 'delegate',
      customize:
        delegateLimit || accessList.addresses.length > 0
          ? {
              authorizationType: AuthorizationType.AUTHORIZATION_TYPE_DELEGATE,
              maxTokens: coin(shiftDigits(delegateLimit, exponent), denom),
              [accessList.type]: { address: accessList.addresses },
            }
          : undefined,
    };

    const grantMsg: Record<PermissionId, GrantMsg> = {
      send: sendMsg,
      delegate: delegateMsg,
      vote: { grantType: 'vote' },
      'claim-rewards': { grantType: 'claim-rewards' },
    };

    const msg = createGrantMsg({
      grantee: granteeAddress,
      granter: address,
      expiration: expiryDate,
      ...grantMsg[selectedPermission.id],
    });

    const fee = {
      amount: [
        {
          denom: token.base,
          amount: '2500',
        },
      ],
      gas: '1000000',
    };

    grant(
      {
        signerAddress: address,
        message: msg,
        fee,
        memo: 'granting permission',
      },
      {
        onSuccess: () => {
          refetch();
          onModalClose();
        },
        onComplete: () => {
          setIsGranting(false);
        },
      }
    );
  };

  return (
    <BasicModal
      title="Create Grant"
      isOpen={isOpen}
      onClose={onModalClose}
      closeOnClickaway={false}
    >
      <Box
        width={{ mobile: '100%', tablet: '$containerSm' }}
        display="flex"
        flexDirection="column"
        gap="$9"
        pt="$4"
      >
        <AddressInput
          label="Grantee Address"
          placeholder="Enter grantee address"
          chainName={chainName}
          address={granteeAddress}
          onAddressChange={setGranteeAddress}
          onInvalidAddress={setAddressErrorMsg}
        />

        <Box>
          <FieldLabel htmlFor="" label="Permission" attributes={{ mb: '$4' }} />

          <Box display="flex" flexDirection="column" gap="$6">
            <Popover
              triggerType="click"
              isOpen={isDropdownOpen}
              setIsOpen={setIsDropdownOpen}
            >
              <PopoverTrigger>
                <SelectButton
                  className={styles.containerSm}
                  placeholder={selectedPermission?.name || 'Select permission'}
                  onClick={() => {}}
                />
              </PopoverTrigger>
              <PopoverContent showArrow={false}>
                <Stack direction="vertical">
                  {permissions.map((p) => (
                    <ListItem
                      key={p.id}
                      isActive={p.id === selectedPermission?.id}
                      className={styles.listItem}
                      attributes={{
                        onClick: () => {
                          setSelectedPermission(p);
                          setIsDropdownOpen(false);
                        },
                      }}
                    >
                      {p.name}
                    </ListItem>
                  ))}
                </Stack>
              </PopoverContent>
            </Popover>

            {selectedPermission?.id === 'send' && (
              <CustomizationField
                permissionType={selectedPermission.id}
                value={sendLimit}
                onChange={(val) => {
                  if (!val) {
                    setSendLimit(undefined);
                    return;
                  }
                  setSendLimit(Number(val));
                }}
              />
            )}

            {selectedPermission?.id === 'delegate' && (
              <CustomizationField
                permissionType={selectedPermission.id}
                chainName={chainName}
                accessList={accessList}
                setAccessList={setAccessList}
                value={delegateLimit}
                onChange={(val) => {
                  if (!val) {
                    setDelegateLimit(undefined);
                    return;
                  }
                  setDelegateLimit(Number(val));
                }}
              />
            )}
          </Box>
        </Box>

        <Box position="relative">
          <TextField
            id="expiry-date"
            value={expiryDate ? dayjs(expiryDate).format('MM/DD/YYYY') : ''}
            label="Expiry Date"
            placeholder="Select expiry date"
            autoComplete="off"
          />
          <Box position="absolute" bottom="7px" right="10px">
            <Popover
              triggerType="click"
              offset={{ mainAxis: 12 }}
              isOpen={isCalendarOpen}
              setIsOpen={setIsCalendarOpen}
            >
              <PopoverTrigger>
                <IoMdCalendar size="26px" cursor="pointer" />
              </PopoverTrigger>
              <PopoverContent>
                <Calendar
                  locale="en-US"
                  value={expiryDate}
                  minDate={dayjs().add(1, 'day').startOf('day').toDate()}
                  onChange={(val) => {
                    if (Array.isArray(val)) {
                      setExpiryDate(val[1]);
                      return;
                    }
                    setExpiryDate(val);
                  }}
                  onClickDay={() => {
                    setIsCalendarOpen(false);
                  }}
                />
              </PopoverContent>
            </Popover>
          </Box>
        </Box>

        <Box width="$full" mt="$9">
          <Button
            fluidWidth
            intent="tertiary"
            isLoading={isGranting}
            disabled={
              isGranting ||
              !!addressErrorMsg ||
              !granteeAddress ||
              !expiryDate ||
              !selectedPermission
            }
            onClick={onGrantClick}
          >
            Grant
          </Button>
        </Box>
      </Box>
    </BasicModal>
  );
};
