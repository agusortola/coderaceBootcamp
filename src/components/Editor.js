import "codemirror/lib/codemirror.css";
import "codemirror/theme/the-matrix.css";
import "codemirror/mode/clike/clike";
import { Controlled as ControlledEditor } from "react-codemirror2";
import { useState } from "react";
import { Button } from "@chakra-ui/react";

const Editor = (props) => {
  const { language, value, onChange } = props;


  function handleChange(editor, data, value) {
    onChange(value);
  }
  return (
    <div className="editor-container">
        <ControlledEditor
          
          onBeforeChange={handleChange}
          value={value}
          className="code-mirror-wrapper"
          options={{
            lineWrapping: true,
            lint: true,
            mode: "text/x-csrc",
            lineNumbers: true,
               
          }}
        />
    </div>
  );
};

export default Editor;
