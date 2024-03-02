import styles from "./RecentCount.module.css";

function RecentCount({ recentCount }) {
  return (
    <div className={styles.recentCount}>
      <span className={styles.number}>{recentCount}</span>
      <span className={styles.text}>명이 작성했어요!</span>
    </div>
  );
}

export default RecentCount;
