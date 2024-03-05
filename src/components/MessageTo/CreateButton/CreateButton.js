import React from "react";

import styles from "./CreateButton.module.css";

const CreateButton = ({ name, onClick }) => (
  <button
    className={styles.CreateButton}
    type="submit"
    disabled={!name}
    onClick={onClick}
  >
    생성하기
  </button>
);
export default CreateButton;
