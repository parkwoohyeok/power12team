import MessageCardContainer from "../MessageCardContainer/MessageCardContainer";

import styles from "./MessageCardSkeleton.module.css";

const MessageCardSkeleton = () => {
  return (
    <MessageCardContainer>
      <div className={styles.LoadingAnimation}>
        <div className={styles.SenderInfo}>
          <div className={styles.SenderProfile} />
          <div className={styles.SenderText}>
            <div className={styles.CardSender}></div>
            <div className={styles.CardSender}></div>
          </div>
        </div>
        <div className={styles.DividingLine}></div>
        <div className={styles.CardContent}></div>
        <div className={styles.CardContent}></div>
      </div>
    </MessageCardContainer>
  );
};

export default MessageCardSkeleton;
