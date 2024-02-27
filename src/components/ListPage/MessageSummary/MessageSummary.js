/* eslint-disable */

import data from "mock/mock.json";
import RecentCount from "components/ListPage/RecentCount/RecentCount";

import styles from "./MessageSummary.module.css";

const { messageCount, recentMessages } = data[0];

function MessageSummary() {
  return (
    <div className={styles.recentMessages}>
      <div className={styles["profile-image-wrapper"]}>
        {recentMessages[0] && (
          <img
            className={styles["profile-image"]}
            src={recentMessages[0]?.profileImageURL}
            alt="프로필 이미지"
          />
        )}
        {recentMessages[1] && (
          <img
            className={`${styles["profile-image"]} ${styles.second}`}
            src={recentMessages[1]?.profileImageURL}
            alt="프로필 이미지"
          />
        )}
        {recentMessages[2] && (
          <img
            className={`${styles["profile-image"]} ${styles.third}`}
            src={recentMessages[2]?.profileImageURL}
            alt="프로필 이미지"
          />
        )}
        {messageCount - 3 > 0 && (
          <div
            className={`${styles["profile-image"]} ${styles["profile-image-last"]}`}
          >{`+${messageCount}`}</div>
        )}
      </div>
      <RecentCount recentCount={messageCount} />
    </div>
  );
}

export default MessageSummary;
