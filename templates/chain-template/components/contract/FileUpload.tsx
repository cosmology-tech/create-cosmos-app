import { useCallback } from 'react';
import { Box, Text } from '@interchain-ui/react';
import { HiOutlineTrash, HiOutlineUpload } from 'react-icons/hi';
import { useDropzone } from 'react-dropzone';

import { Button } from '../common';
import { bytesToKb } from '@/utils';

const MAX_FILE_SIZE = 800_000;

type FileUploadProps = {
  file: File | null;
  setFile: (file: File | null) => void;
};

export const FileUpload = ({ file, setFile }: FileUploadProps) => {
  const onDrop = useCallback(
    (files: File[]) => {
      setFile(files[0]);
    },
    [setFile]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    accept: { 'application/octet-stream': ['.wasm'] },
    maxSize: MAX_FILE_SIZE,
  });

  if (file) {
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
              {file.name}
            </Text>
            <Text color="$blackAlpha500" fontSize="12px" fontWeight="500">
              {bytesToKb(file.size)} KB
            </Text>
          </Box>
        </Box>
        <Button
          leftIcon={<HiOutlineTrash size="18px" />}
          onClick={() => setFile(null)}
          variant="text"
          px="10px"
        >
          Delete
        </Button>
      </Box>
    );
  }

  return (
    <div {...getRootProps()}>
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
      >
        <input {...getInputProps()} />
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
            {`.wasm (max. ${bytesToKb(MAX_FILE_SIZE)}KB)`}
          </Text>
        </Box>
      </Box>
    </div>
  );
};

export const UploadIcon = () => (
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
