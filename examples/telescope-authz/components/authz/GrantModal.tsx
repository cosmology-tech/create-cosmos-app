import { ChainName } from 'cosmos-kit';
import {
  BasicModal,
  Box,
  TextField,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Text,
  Icon,
  SelectButton,
  ListItem,
  Stack,
  FieldLabel,
} from '@interchain-ui/react';
import { useState } from 'react';
import { IoMdCalendar } from 'react-icons/io';
import Calendar from 'react-calendar';
import dayjs from 'dayjs';

import {
  isPermissionCustomizable,
  PermissionItem,
  permissions,
} from '@/configs';
import { CustomizationField } from './CustomizationField';
import styles from '@/styles/custom.module.css';

type GrantModalProps = {
  isOpen: boolean;
  onClose: () => void;
  chainName: ChainName;
};

export const GrantModal = ({ isOpen, onClose }: GrantModalProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
    selectedPermission && isPermissionCustomizable(selectedPermission.id);

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

        <Box>
          <FieldLabel htmlFor="" label="Permission" attributes={{ mb: '$4' }} />
          <Popover
            triggerType="click"
            isOpen={isDropdownOpen}
            setIsOpen={setIsDropdownOpen}
          >
            <PopoverTrigger>
              <SelectButton
                className={styles.customSelect}
                placeholder={selectedPermission?.name || 'Select permission'}
              />
            </PopoverTrigger>
            <PopoverContent showArrow={false}>
              <Stack direction="vertical" className={styles.customSelect}>
                {permissions.map((p) => (
                  <ListItem
                    key={p.id}
                    isActive={p.id === selectedPermission?.id}
                    className={styles.customSelect}
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
        </Box>

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
          {selectedPermission?.id === 'send' && (
            <CustomizationField
              permissionType={selectedPermission.id}
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
          {selectedPermission?.id === 'delegate' && (
            <CustomizationField
              permissionType={selectedPermission.id}
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
