import styles from "./MessageCardModal.module.css";

import BottomButton from "../../common/Button/Button";
import ModalBase from "../../common/ModalBase/ModalBase";
import CreatedAt from "../MessageCardList/MessageCard/CreatedAt/CreatedAt";
import SenderInfo from "../MessageCardList/MessageCard/SenderInfo/SenderInfo";
import MessageCardContent from "../MessageCardList/MessageCard/MessageCardContent/MessageCardContent";

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
        <CreatedAt createdAt={message?.createdAt} />
      </div>
      <div className={styles.DividingLine}></div>
      <MessageCardContent message={message} />
      <div className={styles.AlignButton}>
        <BottomButton size="Modal" onClick={handleClick}>
          확인
        </BottomButton>
      </div>
    </ModalBase>
  );
};

export default MessageCardModal;
