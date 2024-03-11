import styles from "./MessageSummaryRecipientPage.module.css";

function MessageSummaryRecipientPage({ data }) {
  const { messageCount, recentMessages } = data || {};

  return (
    <div className={styles.RecentMessages}>
      <div className={styles.ProfileImageWrapper}>
        {recentMessages[2] !== null && (
          <img
            className={`${styles.ProfileImage} ${styles.First}`}
            src={recentMessages[2]?.profileImageURL}
            alt="프로필 이미지"
          />
        )}
        {recentMessages[1] !== null && (
          <img
            className={`${styles.ProfileImage} ${styles.Second}`}
            src={recentMessages[1]?.profileImageURL}
            alt="프로필 이미지"
          />
        )}
        {recentMessages[0] !== null && (
          <img
            className={`${styles.ProfileImage} ${styles.Third}`}
            src={recentMessages[0]?.profileImageURL}
            alt="프로필 이미지"
          />
        )}
        {messageCount - 3 > 0 && (
          <div
            className={`${styles.ProfileImage} ${styles.ProfileImageLast}`}
          >{`+${messageCount}`}</div>
        )}
      </div>
      <div className={styles.RecentCount}>
        <span className={styles.number}>{messageCount}</span>
        <span className={styles.text}>명이 작성했어요!</span>
      </div>
    </div>
  );
}

export default MessageSummaryRecipientPage;
