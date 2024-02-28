import CreatedAt from "../MessageCard/CreatedAt/CreatedAt";
import SenderInfo from "../MessageCard/SenderInfo/SenderInfo";

import styles from "./MessageCardModal.module.css";

const MessageCardModal = ({ message }) => {
  return (
    <div className={styles.ModalBackground}>
      <div className={styles.MessageModalBox}>
        <div className={styles.MessageModalSender}>
          <SenderInfo message={message} />
          <CreatedAt createdAt={message.createdAt} />
        </div>
      </div>
    </div>
  );
};

export default MessageCardModal;
