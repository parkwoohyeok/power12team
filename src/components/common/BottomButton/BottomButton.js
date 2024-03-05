import { Children } from "react";
import styles from "./BottomButton.module.css";

const BottomButton = ({ type, disabled, onClick, Children }) => {
  return (
    <button
      className={styles.BottomButton}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {Children}
    </button>
  );
};

export default BottomButton;
