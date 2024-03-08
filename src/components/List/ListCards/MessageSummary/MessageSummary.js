/* eslint-disable */
import styles from "./MessageSummary.module.css";

function MessageSummary({ data }) {
  const { messageCount, recentMessages } = data || {};

  return (
    <div className={styles.RecentMessages}>
      <div className={messageCount === 0 ? styles.noCount : ""}>
        <div className={styles.ProfileImageWrapper}>
          {recentMessages?.[0] && (
            <img
              className={`${styles.ProfileImage} ${styles.First}`}
              src={recentMessages[0]?.profileImageURL}
              alt="프로필 이미지"
            />
          )}
          {recentMessages?.[1] && (
            <img
              className={`${styles.ProfileImage} ${styles.Second}`}
              src={recentMessages[1]?.profileImageURL}
              alt="프로필 이미지"
            />
          )}
          {recentMessages?.[2] && (
            <img
              className={`${styles.ProfileImage} ${styles.Third}`}
              src={recentMessages[2]?.profileImageURL}
              alt="프로필 이미지"
            />
          )}
          {messageCount - 3 > 0 && (
            <div
              className={`${styles.ProfileImage} ${styles.ProfileImageLast}`}
            >{`+${messageCount}`}</div>
          )}
        </div>
      </div>
      {/* <RecentCount recentCount={messageCount} isPostPage={isPostPage} /> */}
      <div className={styles.RecentCount}>
        <span className={styles.number}>{messageCount}</span>
        <span className={styles.text}>명이 작성했어요!</span>
      </div>
    </div>
  );
}

export default MessageSummary;
