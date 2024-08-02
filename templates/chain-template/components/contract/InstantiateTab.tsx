import { Box, Divider, TextField, Text } from '@interchain-ui/react';

import { Button } from '@/components';
import { JsonInput } from './JsonInput';
import { InputField } from './InputField';
import { AttachFundsSelect } from './AttachFundsSelect';

type InstantiateTabProps = {
  show: boolean;
};

export const InstantiateTab = ({ show }: InstantiateTabProps) => {
  return (
    <Box
      display={show ? 'flex' : 'none'}
      mt="40px"
      maxWidth="560px"
      mx="auto"
      flexDirection="column"
      gap="20px"
    >
      <Text
        fontSize="24px"
        fontWeight="500"
        color="$blackAlpha600"
        textAlign="center"
      >
        Instantiate Contract
      </Text>

      <InputField title="Label (Required)">
        <TextField id="label" value="" />
        <InputField.Description>
          The contract's label help briefly describe the contract and what it
          does.
        </InputField.Description>
      </InputField>

      <InputField title="Admin Address (Optional)">
        <TextField id="admin_address" value="" />
        <InputField.Description>
          The contract's admin will be able to migrate and update future admins.
        </InputField.Description>
      </InputField>

      <InputField title="Instantiate  Message">
        <JsonInput value="" setValue={() => {}} height="342px" />
      </InputField>

      <InputField title="Attach Funds">
        <AttachFundsSelect
          setFunds={() => {}}
          setIsAssetListJsonValid={() => {}}
        />
      </InputField>

      <Divider opacity="0.4" />

      <Button
        variant="primary"
        // disabled={isButtonDisabled}
        // onClick={handleUpload}
        // isLoading={isLoading}
      >
        Instantiate
      </Button>
    </Box>
  );
};
