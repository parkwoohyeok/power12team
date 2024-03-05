/* eslint-disable */
import styles from "./RecipientInfoBarSkeleton.module.css";
import divider from "assets/divider.svg";

function RecipientInfoBar() {
  return (
    <div className={styles.RecipientInfoBarWrapper}>
      <div className={styles.RecipientInfoBar}>
        <div className={styles.Name}></div>
        <div className={styles.InfoWrapper}>
          <div className={styles.MessageSummaryLoading}></div>
          <img
            src={divider}
            alt="divider"
            className={styles.MessageSummaryDivider}
          />
          <div className={styles.RestWrapper}>
            <div className={styles.ReactionContainer}>
              <div className={styles.ReactionLoading}></div>
              <div className={styles.ReactionLoading}></div>
              <div className={styles.ReactionLoading}></div>
            </div>
            <div className={styles.ButtonLoading}></div>
            <img src={divider} alt="divider" />
            <button className={styles.ButtonLoading}></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipientInfoBar;
