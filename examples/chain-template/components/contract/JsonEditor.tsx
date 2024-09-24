import AceEditor from 'react-ace';
import { useTheme } from '@interchain-ui/react';

import 'ace-builds/src-noconflict/ace';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-textmate';
import 'ace-builds/src-noconflict/theme-cloud9_night';

type JsonEditorProps = {
  value: string;
  lines: number;
  setValue?: (value: string) => void;
  readOnly?: boolean;
  isValid?: boolean;
};

export const JsonEditor = ({
  value,
  setValue,
  lines,
  readOnly = false,
  isValid = true,
}: JsonEditorProps) => {
  const { theme } = useTheme();

  return (
    <AceEditor
      mode="json"
      theme={theme === 'light' ? 'textmate' : 'cloud9_night'}
      fontSize="14px"
      readOnly={readOnly}
      style={{
        width: '100%',
        background: 'transparent',
        offset: 0,
      }}
      setOptions={{
        useWorker: false,
        printMargin: false,
      }}
      tabSize={2}
      wrapEnabled={readOnly && !isValid}
      showGutter={false}
      minLines={lines}
      maxLines={lines}
      highlightActiveLine={!readOnly}
      value={value}
      onChange={setValue}
      editorProps={{ $blockScrolling: true }}
    />
  );
};
