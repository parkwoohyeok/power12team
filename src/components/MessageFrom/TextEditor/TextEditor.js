import React from "react";

import { Editor } from "primereact/editor";

import styles from "./TextEditor.module.css";

function TextEditor({ content, handleTextChange }) {
  return (
    <>
      <div className={styles.ContentContainer}>
        <div className={styles.Title}>내용을 입력해 주세요</div>
        <Editor
          value={content}
          onTextChange={handleTextChange}
          style={{ height: "320px", overflow: "auto" }}
        />
      </div>
    </>
  );
}

export default TextEditor;
