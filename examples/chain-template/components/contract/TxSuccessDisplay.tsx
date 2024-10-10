import { Box, Divider, Icon, Text } from '@interchain-ui/react';
import { useCopyToClipboard, useDetectBreakpoints } from '@/hooks';
import { JsonEditor } from './JsonEditor';

type TxSuccessDisplayProps = {
  title?: string;
  infoItems?: TxInfoItem[];
  footer?: React.ReactNode;
  txResult?: object;
  showStatus?: boolean;
  showJson?: boolean;
  show?: boolean;
};

export const TxSuccessDisplay = ({
  title = 'Transaction Details',
  infoItems,
  txResult,
  footer,
  show = true,
  showJson = true,
  showStatus = true,
}: TxSuccessDisplayProps) => {
  const jsonTxResult = JSON.stringify(txResult, null, 2);
  const { isTablet } = useDetectBreakpoints();

  return (
    <Box
      display={show ? 'flex' : 'none'}
      flexDirection="column"
      gap="20px"
      mx="auto"
      width={isTablet ? '100%' : '60%'}
    >
      <Text color="$blackAlpha600" fontSize="24px" fontWeight="500">
        {title}
      </Text>

      <Divider opacity="0.4" />

      <Box width="$full">
        {showStatus && (
          <TxInfoItem
            label="Status"
            customValue={
              <Box display="flex" alignItems="center" gap="6px">
                <Text color="$green600" fontSize="16px" fontWeight="500">
                  Success
                </Text>
                <Icon size="$lg" name="checkboxCircle" color="$green600" />
              </Box>
            }
          />
        )}

        {infoItems &&
          infoItems.map((item) => <TxInfoItem key={item.label} {...item} />)}

        {showJson && (
          <TxInfoItem
            label="Raw JSON"
            direction="column"
            customValue={
              <Box
                width="$full"
                borderWidth="1px"
                borderStyle="solid"
                borderColor="$blackAlpha300"
                borderRadius="4px"
              >
                <JsonEditor
                  value={jsonTxResult}
                  lines={26}
                  readOnly
                  enableFolding
                />
              </Box>
            }
          />
        )}
      </Box>

      {footer}
    </Box>
  );
};

export type TxInfoItem = {
  label: string;
  value?: string;
  showCopy?: boolean;
  copyValue?: string;
  customValue?: React.ReactNode;
  direction?: 'row' | 'column';
};

const TxInfoItem = ({
  label,
  value,
  showCopy = false,
  copyValue,
  customValue,
  direction = 'row',
}: TxInfoItem) => {
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  return (
    <Box
      display="flex"
      alignItems={direction === 'row' ? 'center' : 'flex-start'}
      flexDirection={direction}
      gap="20px"
      py="10px"
    >
      <Box width={direction === 'row' ? '180px' : 'auto'}>
        <Text color="$blackAlpha500" fontSize="16px" fontWeight="500">
          {label}
        </Text>
      </Box>
      {customValue ? (
        customValue
      ) : (
        <Box display="flex" alignItems="center" gap="10px">
          <Text color="$blackAlpha600" fontSize="16px" fontWeight="500">
            {value}
          </Text>
          {showCopy && (
            <Box
              attributes={{
                onClick: () => copyToClipboard(copyValue ?? value ?? ''),
              }}
              cursor="pointer"
              display="flex"
              alignItems="center"
            >
              <Icon
                size="$lg"
                name={isCopied ? 'checkLine' : 'copy'}
                color={isCopied ? '$green600' : '$blackAlpha500'}
              />
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};
