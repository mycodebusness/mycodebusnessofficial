"use client";
import React, { useState, useEffect } from "react";
import ResizableEditor from "./ResizableEditor";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

const CodePlayground: React.FC = () => {
  const [html, setHtml] = useState<string>("<div>Hello World</div>");
  const [css, setCss] = useState<string>("div { color: red; }");
  const [js, setJs] = useState<string>('console.log("Hello World");');
  const [srcDoc, setSrcDoc] = useState<string>("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <ResizablePanelGroup direction="horizontal" className="h-screen w-screen">
      <ResizablePanel
        defaultSize={30}
        minSize={10}
        maxSize={50}
        className="p-2 border-r h-full"
      >
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={33} minSize={10} maxSize={90}>
            <ResizableEditor language="html" value={html} onChange={setHtml} />
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={33} minSize={10} maxSize={90}>
            <ResizableEditor language="css" value={css} onChange={setCss} />
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={34} minSize={10} maxSize={90}>
            <ResizableEditor
              language="javascript"
              value={js}
              onChange={setJs}
            />
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel
        defaultSize={70}
        minSize={50}
        maxSize={90}
        className="p-2 h-full"
      >
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
          className="bg-white"
        />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default CodePlayground;
