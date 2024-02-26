import mockData from "../assets/mock.json";

import styles from "./PostPageCard.module.css";

const PostPageCard = () => {
  const CREATED_AT = new Date(mockData.createdAt);
  const CREATED_YEAR = CREATED_AT.getFullYear();
  const CREATED_MONTH = CREATED_AT.getMonth();
  const CREATED_DATE = CREATED_AT.getDate();

  return (
    <div className={styles.CardContainer}>
      <div className={styles.SenderInfo}>
        <img className={styles.SenderProfile} src={mockData.profileImageURL} />
        <div className={styles.SenderText}>
          <div className={styles.CardSender}>
            From.{" "}
            <span className={styles.CardSenderName}>{mockData.sender}</span>
          </div>
          <div className={styles.RelationshipFamilly}>
            {mockData.relationship}
          </div>
        </div>
      </div>
      <div className={styles.DividingLine}></div>
      <div className={styles.CardContent}>{mockData.content}</div>
      <p
        className={styles.CreatedAt}
      >{`${CREATED_YEAR}.${CREATED_MONTH}.${CREATED_DATE}`}</p>
    </div>
  );
};

export default PostPageCard;
