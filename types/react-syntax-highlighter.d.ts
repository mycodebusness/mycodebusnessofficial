declare module "react-syntax-highlighter" {
  import { Component } from "react";

  interface SyntaxHighlighterProps {
    language: string;
    style: object;
    showLineNumbers?: boolean;
    customStyle?: object;
    children: string;
  }

  export class Prism extends Component<SyntaxHighlighterProps> {}
}
