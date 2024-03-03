import React from "react";

import styles from "./NameInput.module.css";

function NameInput({ sender, setSender, inputError, setInputError }) {
  const handleNameChange = (e) => {
    setSender(e.target.value);
    setInputError(e.target.value ? "" : "값을 입력해 주세요.");
  };

  return (
    <div className={styles.NameContainer}>
      <div className={styles.Title}>From.</div>
      <input
        className={styles.NameInput}
        placeholder="이름을 입력해 주세요."
        value={sender}
        onChange={handleNameChange}
      />
      {inputError && <div className={styles.InputError}>{inputError}</div>}
    </div>
  );
}

export default NameInput;
