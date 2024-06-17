import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/ace';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-textmate';

type JsonEditorProps = {
  value: string;
  lines?: number;
  setValue?: (value: string) => void;
  readOnly?: boolean;
};

export const JsonEditor = ({
  value,
  setValue,
  lines = 12,
  readOnly = false,
}: JsonEditorProps) => {
  return (
    <AceEditor
      mode="json"
      theme="textmate"
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
      wrapEnabled={true}
      showGutter={false}
      minLines={lines}
      maxLines={lines}
      value={value}
      onChange={setValue}
      editorProps={{ $blockScrolling: true }}
    />
  );
};
