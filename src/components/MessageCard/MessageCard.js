import { useState } from "react";

import mockData from "../../assets/mock.json";
import MessageCardContainer from "../MessageCardContainer/MessageCardContainer";
import MessageCardModal from "../MessageCardModal/MessageCardModal";
import RelationshipTag from "../RelationshipTag/RelationshipTag";

import styles from "./MessageCard.module.css";

const MessageCard = ({ message }) => {
  const [messageCardModalOpen, setMessageCardModalOpen] = useState(false);

  const CREATED_AT = new Date(mockData.createdAt);
  const CREATED_YEAR = CREATED_AT.getFullYear();
  const CREATED_MONTH = CREATED_AT.getMonth();
  const CREATED_DATE = CREATED_AT.getDate();

  const handleClick = () => {
    setMessageCardModalOpen(true);
  };

  return (
    <MessageCardContainer onClick={handleClick}>
      <div className={styles.SenderInfo}>
        <img className={styles.SenderProfile} src={message.profileImageURL} />
        <div className={styles.SenderText}>
          <div className={styles.CardSender}>
            From.{" "}
            <span className={styles.CardSenderName}>{message.sender}</span>
          </div>
          <RelationshipTag relationship={message.relationship} />
        </div>
      </div>
      <div className={styles.DividingLine}></div>
      <div className={styles.CardContent}>{message.content}</div>
      <p
        className={styles.CreatedAt}
      >{`${CREATED_YEAR}.${CREATED_MONTH}.${CREATED_DATE}`}</p>
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
