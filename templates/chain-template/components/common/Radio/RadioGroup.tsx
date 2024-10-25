import { Box, BoxProps } from '@interchain-ui/react';
import React, { useState, ReactNode, useEffect } from 'react';

type RadioGroupProps = {
  name: string;
  children: ReactNode;
  value?: string;
  onChange?: (value: string) => void;
  direction?: 'row' | 'column';
  space?: BoxProps['gap'];
};

export const RadioGroup = ({
  name,
  children,
  value,
  onChange,
  direction = 'column',
  space = '10px',
}: RadioGroupProps) => {
  const [selectedValue, setSelectedValue] = useState<string>(value || '');

  useEffect(() => {
    setSelectedValue(value || '');
  }, [value]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const clonedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement, {
        name,
        checked: child.props.value === selectedValue,
        onChange: handleChange,
      });
    }
    return child;
  });

  return (
    <Box display="flex" flexDirection={direction} gap={space}>
      {clonedChildren}
    </Box>
  );
};
