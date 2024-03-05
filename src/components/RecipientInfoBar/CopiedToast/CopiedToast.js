import closeIcon from "../../../assets/close.svg";
import checkIcon from "../../../assets/greenCheck.svg";

import styles from "./CopiedToast.module.css";

const CopiedToast = () => {
  return (
    <div className={styles.ToastBox}>
      <div className={styles.CheckTextWrapper}>
        <img src={checkIcon} alt="체크 이미지" className={styles.Check} />
        <span className={styles.ToastText}>URL이 복사되었습니다.</span>
      </div>
      <img src={closeIcon} alt="닫기 이미지" className={styles.Close} />
    </div>
  );
};

export default CopiedToast;
