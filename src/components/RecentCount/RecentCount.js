import styles from "./RecentCount.module.css";

function RecentCount({ recentCount, isPostPage }) {
  const fontSize = isPostPage ? styles.big : styles.small;
  return (
    <div className={styles.recentCount}>
      <span className={`${styles.number} ${fontSize}`}>{recentCount}</span>
      <span className={`${styles.text} ${fontSize}`}>명이 작성했어요!</span>
    </div>
  );
}

export default RecentCount;
