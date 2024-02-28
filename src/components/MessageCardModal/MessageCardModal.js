import SenderInfo from "../MessageCard/SenderInfo/SenderInfo";

import styles from "./MessageCardModal.module.css";

const MessageCardModal = ({ message }) => {
  return (
    <div className={styles.ModalBackground}>
      <div className={styles.MessageModalBox}>
        <SenderInfo message={message} />
      </div>
    </div>
  );
};

export default MessageCardModal;
