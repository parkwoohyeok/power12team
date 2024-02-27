import { useState } from "react";

import styles from "./MessageToToggleButton.module.css";

const MessageToToggleButton = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className={styles.ToggleButton} onClick={handleToggle}>
        <button
          className={`${styles.ChooseButton} ${toggle ? styles.ToggleChecked : ""}`}
        >
          컬러
        </button>
        <button
          className={`${styles.ChooseButton} ${toggle ? "" : styles.ToggleChecked}`}
        >
          이미지
        </button>
      </div>
      <div className={styles.Colors}>
        <div className={styles.Color}></div>
        <div className={styles.Color}></div>
        <div className={styles.Color}></div>
        <div className={styles.Color}></div>
      </div>
    </>
  );
};

export default MessageToToggleButton;
