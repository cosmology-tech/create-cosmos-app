import Image from 'next/image';
import { useCallback, useMemo } from 'react';
import { Box, Text } from '@interchain-ui/react';
import { HiOutlineTrash } from 'react-icons/hi';
import { useDropzone } from 'react-dropzone';

import { bytesToKb } from '@/utils';

const MAX_FILE_SIZE = 800_000;

const defaultFileInfo = {
  image: {
    src: '/images/upload.svg',
    alt: 'upload',
    width: 80,
    height: 48,
  },
  title: 'Upload or drag .wasm file here',
  description: `Max file size: ${bytesToKb(MAX_FILE_SIZE)}KB`,
};

type WasmFileUploaderProps = {
  file: File | null;
  setFile: (file: File | null) => void;
};

export const WasmFileUploader = ({ file, setFile }: WasmFileUploaderProps) => {
  const onDrop = useCallback(
    (files: File[]) => {
      setFile(files[0]);
    },
    [setFile],
  );

  const fileInfo = useMemo(() => {
    if (!file) return defaultFileInfo;

    return {
      image: {
        src: '/images/contract-file.svg',
        alt: 'contract-file',
        width: 40,
        height: 54,
      },
      title: file.name,
      description: `File size: ${bytesToKb(file.size)}KB`,
    };
  }, [file]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    accept: { 'application/octet-stream': ['.wasm'] },
    maxSize: MAX_FILE_SIZE,
  });

  return (
    <div {...(file ? {} : getRootProps())}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="8px"
        borderWidth="1px"
        borderStyle={file ? 'none' : 'dashed'}
        borderColor="$purple600"
        bg="$purple50"
        cursor={file ? 'auto' : 'pointer'}
        height="206px"
        position="relative"
      >
        {!file && <input {...getInputProps()} />}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap="12px"
        >
          <Image
            src={fileInfo.image.src}
            alt={fileInfo.image.alt}
            width={fileInfo.image.width}
            height={fileInfo.image.height}
          />
          <Box>
            <Text
              color="$blackAlpha600"
              fontSize="16px"
              fontWeight="600"
              textAlign="center"
              lineHeight="24px"
              attributes={{ mb: '6px' }}
            >
              {fileInfo.title}
            </Text>
            <Text
              color="$blackAlpha600"
              fontSize="12px"
              fontWeight="400"
              textAlign="center"
              lineHeight="16px"
            >
              {fileInfo.description}
            </Text>
          </Box>
        </Box>
        {file && (
          <Box
            position="absolute"
            right="12px"
            bottom="12px"
            display="flex"
            alignItems="center"
            gap="4px"
            color="$textSecondary"
            cursor="pointer"
            attributes={{ onClick: () => setFile(null) }}
          >
            <HiOutlineTrash size="16px" />
            <Text color="$textSecondary" fontSize="14px" fontWeight="500">
              Remove
            </Text>
          </Box>
        )}
      </Box>
    </div>
  );
};
