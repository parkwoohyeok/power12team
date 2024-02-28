import styles from "./CreatedAt.module.css";

const CreatedAt = ({ createdAt }) => {
  const CREATED_AT = new Date(createdAt);
  const CREATED_YEAR = CREATED_AT.getFullYear();
  const CREATED_MONTH = CREATED_AT.getMonth();
  const CREATED_DATE = CREATED_AT.getDate();

  return (
    <p
      className={styles.CreatedAt}
    >{`${CREATED_YEAR}.${CREATED_MONTH}.${CREATED_DATE}`}</p>
  );
};

export default CreatedAt;
