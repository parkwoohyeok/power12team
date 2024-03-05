import CreatedAt from "../MessageCardList/MessageCard/CreatedAt/CreatedAt";
import SenderInfo from "../MessageCardList/MessageCard/SenderInfo/SenderInfo";
import ModalBase from "../common/ModalBase/ModalBase";

import styles from "./MessageCardModal.module.css";

const MessageCardModal = ({ message, setMessageCardModalOpen }) => {
  const handleClick = (e) => {
    setMessageCardModalOpen(false);
    e.stopPropagation();
  };

  return (
    <ModalBase
      setMessageCardModalOpen={setMessageCardModalOpen}
      onClick={handleClick}
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
    </ModalBase>
  );
};

export default MessageCardModal;
