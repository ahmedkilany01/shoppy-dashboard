import React from "react";
import {
  HtmlEditor,
  Image,
  Inject,
  Link,
  QuickToolbar,
  RichTextEditorComponent,
  Toolbar,
} from "@syncfusion/ej2-react-richtexteditor";

import { Header } from "../components";
import { EditorData } from "../data/dummy";

const Editor = () => {
  return (
    <div className="m-2 p-2 md:m-10 md:p-10 rounded-3xl bg-white dark:bg-secondary-dark-bg">
      <Header category="App" title="Editor" />
      <RichTextEditorComponent>
        <EditorData />
        <Inject
          services={[HtmlEditor, Image, Link, Toolbar, QuickToolbar]}
        ></Inject>
      </RichTextEditorComponent>
    </div>
  );
};

export default Editor;
