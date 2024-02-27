import styles from "./RecentCount.module.css";

function RecentCount({ recentCount }) {
  return (
    <div className={styles.RecentCount}>
      <span className={styles.Number}>{recentCount}</span>
      <span className={styles.Text}>명이 작성했어요!</span>
    </div>
  );
}

export default RecentCount;
