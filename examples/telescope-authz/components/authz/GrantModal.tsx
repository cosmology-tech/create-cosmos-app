import { ChainName } from 'cosmos-kit';
import {
  BasicModal,
  Box,
  Select,
  SelectOption,
  TextField,
  Item,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Text,
  Icon,
} from '@interchain-ui/react';
import { useState } from 'react';
import { IoMdCalendar } from 'react-icons/io';
import Calendar from 'react-calendar';
import dayjs from 'dayjs';

import { isPermissionCustomizable, PermissionId, permissions } from '@/configs';
import { CustomizationField } from './CustomizationField';

interface PermissionItem extends Item {
  key: PermissionId;
}

type GrantModalProps = {
  isOpen: boolean;
  onClose: () => void;
  chainName: ChainName;
};

export const GrantModal = ({ isOpen, onClose }: GrantModalProps) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [showCustomization, setShowCustomization] = useState(false);

  const [granteeAddress, setGranteeAddress] = useState('');
  const [expiryDate, setExpiryDate] = useState<Date | null>(null);
  const [selectedPermission, setSelectedPermission] =
    useState<PermissionItem | null>(null);

  const [sendLimit, setSendLimit] = useState<number | undefined>(undefined);
  const [delegateLimit, setDelegateLimit] = useState<number | undefined>(
    undefined
  );

  const onModalClose = () => {
    setShowCustomization(false);
    setGranteeAddress('');
    setExpiryDate(null);
    setSelectedPermission(null);
    setSendLimit(undefined);
    setDelegateLimit(undefined);
    onClose();
  };

  const isCustomizable =
    selectedPermission && isPermissionCustomizable(selectedPermission.key);

  return (
    <BasicModal title="Create Grant" isOpen={isOpen} onClose={onModalClose}>
      <Box
        width={{ mobile: '100%', tablet: '$containerSm' }}
        display="flex"
        flexDirection="column"
        gap="$8"
      >
        <TextField
          id="grantee-address"
          value={granteeAddress}
          onChange={(e) => setGranteeAddress(e.target.value)}
          label="Grantee address"
          placeholder="Enter grantee address"
        />

        <Select
          label="Permission"
          placeholder="Select permission"
          selectedIndex={selectedPermission?.index}
          onSelectItem={(item) => setSelectedPermission(item as PermissionItem)}
          defaultSelectedItem={{
            index: 1,
            key: permissions[1].id,
            label: permissions[1].name,
          }}
        >
          {permissions.map(({ id, name }) => (
            <SelectOption key={id} optionKey={id} label={name}>
              {name}
            </SelectOption>
          ))}
        </Select>

        <Box
          display={isCustomizable ? 'flex' : 'none'}
          gap="$4"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Text color="$textSecondary" fontWeight="$normal">
            Customize
          </Text>
          <Box
            width="$10"
            height="$10"
            backgroundColor={showCustomization ? '$text' : '$inputBg'}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="$base"
            cursor="pointer"
            attributes={{
              onClick: () => {
                setShowCustomization((prev) => !prev);
              },
            }}
          >
            <Icon
              name="arrowRightRounded"
              size="$xs"
              color={showCustomization ? '$white' : '$textSecondary'}
              attributes={{ transform: 'rotate(90deg)' }}
            />
          </Box>
        </Box>

        <Box display={isCustomizable && showCustomization ? 'block' : 'none'}>
          {selectedPermission?.key === 'send' && (
            <CustomizationField
              permissionType={selectedPermission.key}
              inputProps={{
                value: sendLimit,
                onChange: (val) => {
                  if (!val) {
                    setSendLimit(undefined);
                    return;
                  }
                  setSendLimit(Number(val));
                },
              }}
            />
          )}
          {selectedPermission?.key === 'delegate' && (
            <CustomizationField
              permissionType={selectedPermission.key}
              inputProps={{
                value: delegateLimit,
                onChange: (val) => {
                  if (!val) {
                    setDelegateLimit(undefined);
                    return;
                  }
                  setDelegateLimit(Number(val));
                },
              }}
            />
          )}
        </Box>

        <Box position="relative">
          <TextField
            id="expiry-date"
            value={expiryDate ? dayjs(expiryDate).format('MM/DD/YYYY') : ''}
            label="Expiry Date"
            placeholder="Select expiry date"
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
                  minDate={new Date()}
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

        <Box width="$full" mt="$12">
          <Button intent="tertiary" fluidWidth>
            Grant
          </Button>
        </Box>
      </Box>
    </BasicModal>
  );
};
