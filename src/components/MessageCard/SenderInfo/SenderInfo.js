import RelationshipTag from "../../RelationshipTag/RelationshipTag";
import DeleteIcon from "../DeleteIcon/DeleteIcon";

import styles from "./SenderInfo.module.css";

const SenderInfo = ({ message, isEditing }) => {
  return (
    <div className={styles.SenderInfo}>
      <img className={styles.SenderProfile} src={message.profileImageURL} />
      <div className={styles.SenderText}>
        <div className={styles.CardSender}>
          From. <span className={styles.CardSenderName}>{message.sender}</span>
        </div>
        <RelationshipTag relationship={message.relationship} />
      </div>
      {isEditing && <DeleteIcon />}
    </div>
  );
};

export default SenderInfo;
