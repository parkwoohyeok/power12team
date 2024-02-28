import CreatedAt from "../MessageCard/CreatedAt/CreatedAt";
import SenderInfo from "../MessageCard/SenderInfo/SenderInfo";

import styles from "./MessageCardModal.module.css";

const MessageCardModal = ({ message, setMessageCardModalOpen }) => {
  const handleClick = (e) => {
    setMessageCardModalOpen(false);
    e.stopPropagation();
  };

  return (
    <div className={styles.ModalBackground} onClick={handleClick}>
      <div
        className={styles.MessageModalBox}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.MessageModalSender}>
          <SenderInfo message={message} />
          <CreatedAt createdAt={message.createdAt} />
        </div>
        <div className={styles.DividingLine}></div>
        <div className={styles.CardContent}>{message.content}</div>
        <div className={styles.AlignButton}>
          <button className={styles.ModalCloseButton} onClick={handleClick}>
            확인
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageCardModal;
