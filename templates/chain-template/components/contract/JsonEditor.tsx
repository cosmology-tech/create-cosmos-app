import AceEditor from 'react-ace';
import { Box, BoxProps } from '@interchain-ui/react';

import { colors } from '@/config';
import { Button } from '@/components';

import 'ace-builds/src-noconflict/ace';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-textmate';

type JsonEditorProps = {
  value: string;
  setValue?: (value: string) => void;
  readOnly?: boolean;
} & Pick<BoxProps, 'width' | 'height' | 'mt' | 'mb'>;

export const JsonEditor = ({
  value,
  setValue,
  readOnly = false,
  ...rest
}: JsonEditorProps) => {
  return (
    <>
      <Box
        position="relative"
        borderWidth="1px"
        borderStyle="solid"
        borderColor={colors.black300}
        borderRadius="4px"
        p="10px"
        {...rest}
      >
        <AceEditor
          mode="json"
          theme="textmate"
          fontSize="14px"
          readOnly={readOnly}
          style={{
            width: '100%',
            height: '100%',
            background: 'transparent',
            offset: 0,
          }}
          setOptions={{
            useWorker: false,
            printMargin: false,
          }}
          tabSize={2}
          wrapEnabled={true}
          showGutter={false}
          value={value}
          onChange={setValue}
          editorProps={{ $blockScrolling: true }}
        />
        <Button
          px="6px"
          py="4px"
          color="$text"
          fontSize="12px"
          position="absolute"
          top="10px"
          right="10px"
          height="24px"
        >
          Format JSON
        </Button>
      </Box>
    </>
  );
};
