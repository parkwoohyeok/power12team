import closeIcon from "../../../../assets/close.svg";
import checkIcon from "../../../../assets/greenCheck.svg";

import styles from "./Toast.module.css";

const Toast = ({ children }) => {
  return (
    <div className={styles.ToastBox}>
      <div className={styles.CheckTextWrapper}>
        <img src={checkIcon} alt="체크 이미지" className={styles.Check} />
        <span className={styles.ToastText}>{children}</span>
      </div>
      <img src={closeIcon} alt="닫기 이미지" className={styles.Close} />
    </div>
  );
};

export default Toast;