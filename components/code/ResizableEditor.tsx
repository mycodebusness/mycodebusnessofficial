"use client";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

interface ResizableEditorProps {
  language: string;
  value: string;
  onChange: (value: string) => void;
}

const ResizableEditor: React.FC<ResizableEditorProps> = ({
  language,
  value,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="relative h-full w-full">
      <SyntaxHighlighter
        language={language}
        style={dracula}
        showLineNumbers
        customStyle={{
          height: "100%",
          width: "100%",
          margin: 0,
          fontFamily: "monospace",
          fontSize: "1em",
          lineHeight: "1.5em",
          whiteSpace: "pre",
        }}
      >
        {value}
      </SyntaxHighlighter>
      <textarea
        value={value}
        onChange={handleChange}
        className="absolute top-0 left-0 w-full h-full bg-transparent border-none resize-none text-transparent caret-white"
        style={{
          whiteSpace: "pre",
          fontFamily: "monospace",
          fontSize: "1em",
          lineHeight: "1.5em",
          padding: "1em",
          color: "white", // Set this to white so the cursor matches the text
          caretColor: "white",
        }}
      />
    </div>
  );
};

export default ResizableEditor;
