import styles from "./MessageCard.module.css";

import { useEffect, useRef, useState } from "react";
import MessageCardModal from "../../MessageCardModal/MessageCardModal";
import MessageCardContainer from "../MessageCardContainer/MessageCardContainer";
import CreatedAt from "./CreatedAt/CreatedAt";
import SenderInfo from "./SenderInfo/SenderInfo";

const MessageCard = ({ message, isEditing, onDelete }) => {
  const CONTENT_ELEMENT = useRef();
  const FONT = message.font.replaceAll(" ", "");

  const [messageCardModalOpen, setMessageCardModalOpen] = useState(false);

  const handleClick = () => {
    if (!isEditing) {
      setMessageCardModalOpen(true);
    }
  };

  useEffect(() => {
    const CONTENT = message.content;
    CONTENT_ELEMENT.current.innerHTML = CONTENT;
  }, []);

  return (
    <MessageCardContainer onClick={handleClick}>
      <SenderInfo message={message} isEditing={isEditing} onDelete={onDelete} />
      <div className={styles.DividingLine}></div>
      <div
        ref={CONTENT_ELEMENT}
        className={`${styles.CardContent} ${styles[FONT]}`}
        // dangerouslySetInnerHTML={{ __html: message.content }}
      ></div>
      <CreatedAt createdAt={message.createdAt} />
      {messageCardModalOpen && (
        <MessageCardModal
          message={message}
          setMessageCardModalOpen={setMessageCardModalOpen}
        />
      )}
    </MessageCardContainer>
  );
};

export default MessageCard;
