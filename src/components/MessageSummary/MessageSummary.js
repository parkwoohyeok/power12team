/* eslint-disable */

import RecentCount from "components/RecentCount/RecentCount";

import styles from "./MessageSummary.module.css";

function MessageSummary({ data, isPostPage }) {
  const { messageCount, recentMessages } = data || {};
  const direction = isPostPage ? styles.PostPage : styles.ListPage;

  return (
    <div className={`${styles.RecentMessages} ${direction}`}>
      <div className={styles.ProfileImageWrapper}>
        {recentMessages?.[0] && (
          <img
            className={styles.ProfileImage}
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
      <RecentCount recentCount={messageCount} />
    </div>
  );
}

export default MessageSummary;
