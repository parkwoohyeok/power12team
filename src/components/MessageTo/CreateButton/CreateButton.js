import React from "react";

import styles from "./CreateButton.module.css";

const CreateButton = ({ name }) => (
  <button className={styles.CreateButton} disabled={!name}>
    생성하기
  </button>
);
export default CreateButton;
