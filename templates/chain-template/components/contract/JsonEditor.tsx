import AceEditor from 'react-ace';
import { useTheme } from '@interchain-ui/react';
import 'ace-builds/src-noconflict/ace';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-textmate';
import 'ace-builds/src-noconflict/theme-cloud9_night';

import { darkColors } from '@/config';

type JsonEditorProps = {
  value: string;
  lines: number;
  setValue?: (value: string) => void;
  readOnly?: boolean;
  isValid?: boolean;
  enableFolding?: boolean;
};

export const JsonEditor = ({
  value,
  setValue,
  lines,
  readOnly = false,
  isValid = true,
  enableFolding = false,
}: JsonEditorProps) => {
  const { theme } = useTheme();

  const trackColor = darkColors!.blackAlpha50;
  const thumbColor = darkColors!.blackAlpha400;

  const editorStyle: React.CSSProperties = {
    width: '100%',
    background: 'transparent',
    offset: 0,
    ...(theme === 'dark' && {
      scrollbarColor: `${thumbColor} ${trackColor}`,
      '&::-webkit-scrollbar-track': {
        background: trackColor,
      },
      '&::-webkit-scrollbar-thumb': {
        background: thumbColor,
      },
    }),
  };

  return (
    <AceEditor
      mode="json"
      theme={theme === 'light' ? 'textmate' : 'cloud9_night'}
      fontSize="14px"
      readOnly={readOnly}
      style={editorStyle}
      setOptions={{
        useWorker: false,
        printMargin: false,
        showFoldWidgets: enableFolding,
        foldStyle: 'markbegin',
      }}
      tabSize={2}
      wrapEnabled={readOnly && !isValid}
      showGutter={enableFolding}
      minLines={lines}
      maxLines={lines}
      highlightActiveLine={!readOnly}
      value={value}
      onChange={setValue}
      editorProps={{ $blockScrolling: true }}
    />
  );
};
