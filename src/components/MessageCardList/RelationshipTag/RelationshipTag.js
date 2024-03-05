import styles from "./RelationshipTag.module.css";

const RelationshipTag = ({ relationship }) => {
  return (
    <>
      {relationship === "지인" && (
        <div className={styles.RelationshipAcquaintance}>지인</div>
      )}
      {relationship === "가족" && (
        <div className={styles.RelationshipFamily}>가족</div>
      )}
      {relationship === "친구" && (
        <div className={styles.RelationshipFriend}>친구</div>
      )}
      {relationship === "동료" && (
        <div className={styles.RelationshipColleague}>동료</div>
      )}
    </>
  );
};

export default RelationshipTag;
