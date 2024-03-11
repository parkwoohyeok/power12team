import React from "react";

import { Editor } from "primereact/editor";

import styles from "./TextEditor.module.css";

function TextEditor({ content, handleTextChange }) {
  return (
    <>
      <div className={styles.ContentContainer}>
        <div className={styles.Title}>
          <span>내용을 입력해 주세요</span>
        </div>
        <Editor
          value={content}
          onTextChange={handleTextChange}
          style={{ height: "320px", overflow: "auto" }}
          className={styles.TextEditorContent}
        />
      </div>
    </>
  );
}

export default TextEditor;
