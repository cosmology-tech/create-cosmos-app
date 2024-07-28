import { useState } from 'react';
import { Box, Text } from '@interchain-ui/react';
import { HiOutlineTrash, HiOutlineUpload } from 'react-icons/hi';

import { Button } from '../common';

type FileUploadProps = {};

export const FileUpload = ({}: FileUploadProps) => {
  const [isUploaded, setIsUploaded] = useState(false);

  if (isUploaded) {
    return (
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
          <Box>
            <Text
              color="$blackAlpha600"
              fontSize="16px"
              fontWeight="500"
              attributes={{ mb: '2px' }}
            >
              cw20_base.wasm
            </Text>
            <Text color="$blackAlpha500" fontSize="12px" fontWeight="500">
              378KB
            </Text>
          </Box>
        </Box>
        <Button
          leftIcon={<HiOutlineTrash size="18px" />}
          onClick={() => setIsUploaded(false)}
          backgroundColor="transparent"
          borderWidth="0"
          color={{ base: '$blackAlpha500', hover: '$blackAlpha600' }}
          px="10px"
        >
          Delete
        </Button>
      </Box>
    );
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap="10px"
      py="30px"
      borderRadius="2px"
      borderWidth="1px"
      borderStyle="solid"
      borderColor="$blackAlpha100"
      bg="$blackAlpha50"
      cursor="pointer"
      attributes={{ onClick: () => setIsUploaded(true) }}
    >
      <UploadIcon />
      <Box>
        <Text
          color="$blackAlpha600"
          fontSize="16px"
          fontWeight="600"
          attributes={{ mb: '6px' }}
        >
          <Text
            as="span"
            color="$purple600"
            fontSize="16px"
            fontWeight="600"
            attributes={{
              cursor: 'pointer',
              textDecoration: 'underline',
            }}
          >
            Click to upload
          </Text>
          &nbsp;or drag Wasm file here
        </Text>
        <Text
          color="$blackAlpha500"
          fontSize="14px"
          fontWeight="500"
          textAlign="center"
        >
          .wasm (max. 800KB)
        </Text>
      </Box>
    </Box>
  );
};

const UploadIcon = () => (
  <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    width="40px"
    height="40px"
    borderRadius="$full"
    bg="$purple100"
    color="$purple600"
  >
    <HiOutlineUpload size="20px" />
  </Box>
);
