import { useState } from 'react';
import {
  Box,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
  useColorModeValue,
  useTheme,
} from '@interchain-ui/react';

import { useDetectBreakpoints } from '@/hooks';

type Option = {
  label: string;
  value: string;
};

type PopoverSelectProps = {
  trigger: React.ReactNode;
  options: Option[];
  onOptionClick: (value: string) => void;
  popoverWidth?: string;
};

export const PopoverSelect = ({
  trigger,
  options,
  onOptionClick,
  popoverWidth = '100%',
}: PopoverSelectProps) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const { theme } = useTheme();
  const { isMobile } = useDetectBreakpoints();

  return (
    <Popover
      triggerType="click"
      placement={isMobile ? 'bottom-start' : 'bottom'}
      offset={{ mainAxis: 10 }}
      isOpen={isPopoverOpen}
      setIsOpen={setIsPopoverOpen}
    >
      <PopoverTrigger>{trigger}</PopoverTrigger>
      <PopoverContent showArrow={false}>
        <Box
          display="flex"
          flexDirection="column"
          width={popoverWidth}
          p="10px"
          bg="$background"
          borderRadius="4px"
          boxShadow={`0px 4px 20px 0px rgba(${
            theme === 'light' ? '0,0,0' : '128,128,128'
          }, 0.1)`}
          maxHeight="220px"
          overflowY="auto"
        >
          {options.map((p) => (
            <CustomOption
              key={p.value}
              onClick={() => {
                onOptionClick(p.value);
                setIsPopoverOpen(false);
              }}
            >
              {p.label}
            </CustomOption>
          ))}
        </Box>
      </PopoverContent>
    </Popover>
  );
};

const CustomOption = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <Box
      display="flex"
      gap="10px"
      alignItems="center"
      minHeight="40px"
      px="10px"
      cursor="pointer"
      borderRadius="4px"
      bg={{
        hover: useColorModeValue('$gray100', '$whiteAlpha100'),
        base: '$background',
      }}
      attributes={{ onClick }}
    >
      <Text
        fontSize="16px"
        fontWeight="500"
        attributes={{
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        }}
      >
        {children}
      </Text>
    </Box>
  );
};
