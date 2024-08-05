import { useEffect, useState } from 'react';
import { Box, Text, TextField } from '@interchain-ui/react';

import { Button, Radio, RadioGroup } from '../common';
import { UploadIcon } from './FileUpload';
import { InputField } from './InputField';
import { PermissionTag } from './PermissionTag';
import { SelectCodeModal } from './SelectCodeModal';
import { useDisclosure } from '@/hooks';
import { CodeIdInfo } from '@/contexts';

type SelectMode = 'select-existing' | 'fill-manually';

type SelectCodeFieldProps = {
  setCodeId: (codeId: string) => void;
  initCodeInfo?: CodeIdInfo;
};

export const SelectCodeField = ({
  setCodeId,
  initCodeInfo,
}: SelectCodeFieldProps) => {
  const [codeInfo, setCodeInfo] = useState<CodeIdInfo>();
  const [manualCodeId, setManualCodeId] = useState('');
  const [selectMode, setSelectMode] = useState<SelectMode>('select-existing');

  const { isOpen, onClose, onOpen } = useDisclosure();

  useEffect(() => {
    if (selectMode === 'select-existing') {
      setCodeId(codeInfo?.id.toString() ?? '');
    } else {
      setCodeId(manualCodeId);
    }
  }, [selectMode, codeInfo, manualCodeId]);

  useEffect(() => {
    setCodeInfo(initCodeInfo);
    setSelectMode('select-existing');
  }, [initCodeInfo]);

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
            {codeInfo ? (
              <Box>
                <Text
                  color="$blackAlpha600"
                  fontSize="16px"
                  fontWeight="500"
                  attributes={{ mb: '2px' }}
                >
                  {codeInfo?.name || 'Untitled Name'}
                </Text>
                <Box display="flex" gap="6px" alignItems="center">
                  <Text color="$blackAlpha500" fontSize="12px" fontWeight="500">
                    Code ID {codeInfo.id}
                  </Text>
                  <Dot />
                  <PermissionTag permission={codeInfo.permission} />
                </Box>
              </Box>
            ) : (
              <Text color="$blackAlpha600" fontSize="16px" fontWeight="500">
                Please Select Code
              </Text>
            )}
          </Box>
          <Button onClick={onOpen} variant="text" px="10px">
            {codeInfo ? 'Change' : 'Select'} Code
          </Button>
        </Box>
      )}

      {selectMode === 'fill-manually' && (
        <InputField title="Code ID">
          <TextField
            id="code_id"
            type="number"
            value={manualCodeId}
            onChange={(e) => setManualCodeId(e.target.value)}
          />
          <InputField.Description>
            Input existing Code ID manually
          </InputField.Description>
        </InputField>
      )}

      <SelectCodeModal
        isOpen={isOpen}
        onClose={onClose}
        onRowSelect={(codeInfo) => {
          setCodeInfo(codeInfo);
        }}
      />
    </>
  );
};

const Dot = () => (
  <Box width="3px" height="3px" borderRadius="50%" bg="$blackAlpha500" />
);
