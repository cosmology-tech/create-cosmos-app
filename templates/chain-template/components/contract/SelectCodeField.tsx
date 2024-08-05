import { useState } from 'react';
import { Box, Text, TextField } from '@interchain-ui/react';
import { AccessType } from 'interchain-query/cosmwasm/wasm/v1/types';

import { Button, Radio, RadioGroup } from '../common';
import { UploadIcon } from './FileUpload';
import { InputField } from './InputField';
import { PermissionTag } from './PermissionTag';
import { SelectCodeModal } from './SelectCodeModal';
import { useDisclosure } from '@/hooks';

type SelectMode = 'select-existing' | 'fill-manually';

type SelectCodeFieldProps = {
  codeId: string;
  setCodeId: (codeId: string) => void;
};

export const SelectCodeField = ({
  codeId,
  setCodeId,
}: SelectCodeFieldProps) => {
  const [isCodeSelected, setIsCodeSelected] = useState(false);
  const [selectMode, setSelectMode] = useState<SelectMode>('select-existing');

  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <RadioGroup
        name="select-code"
        direction="row"
        space="60px"
        value={selectMode}
        onChange={(val) => setSelectMode(val as SelectMode)}
      >
        <Radio value="select-existing">Select from your code</Radio>
        <Radio value="fill-manually">Fill Code ID manually</Radio>
      </RadioGroup>

      {selectMode === 'select-existing' && (
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p="10px"
          borderRadius="8px"
          bg="$blackAlpha50"
        >
          <Box display="flex" alignItems="center" gap="10px">
            <UploadIcon />
            {isCodeSelected ? (
              <Box>
                <Text
                  color="$blackAlpha600"
                  fontSize="16px"
                  fontWeight="500"
                  attributes={{ mb: '2px' }}
                >
                  Untitled Name
                </Text>
                <Box display="flex" gap="6px" alignItems="center">
                  <Text color="$blackAlpha500" fontSize="12px" fontWeight="500">
                    Code ID 9834
                  </Text>
                  <Dot />
                  <PermissionTag
                    permission={AccessType.ACCESS_TYPE_EVERYBODY}
                  />
                </Box>
              </Box>
            ) : (
              <Text color="$blackAlpha600" fontSize="16px" fontWeight="500">
                Please Select Code
              </Text>
            )}
          </Box>
          <Button onClick={onOpen} variant="text" px="10px">
            {isCodeSelected ? 'Change' : 'Select'} Code
          </Button>
        </Box>
      )}

      {selectMode === 'fill-manually' && (
        <InputField title="Code ID">
          <TextField
            id="code_id"
            type="number"
            value={codeId}
            onChange={(e) => setCodeId(e.target.value)}
          />
          <InputField.Description>
            Input existing Code ID manually
          </InputField.Description>
        </InputField>
      )}

      <SelectCodeModal
        isOpen={isOpen}
        onClose={onClose}
        onSelect={(codeId) => {
          console.log('Selected Code ID:', codeId);
          setIsCodeSelected(true);
        }}
      />
    </>
  );
};

const Dot = () => (
  <Box width="3px" height="3px" borderRadius="50%" bg="$blackAlpha500" />
);
