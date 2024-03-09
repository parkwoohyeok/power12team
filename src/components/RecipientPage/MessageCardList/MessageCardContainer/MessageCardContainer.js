import styles from "./MessageCardContainer.module.css";

const MessageCardContainer = ({ children, onClick }) => {
  return (
    <div onClick={onClick} className={styles.CardContainer}>
      {children}
    </div>
  );
};

export default MessageCardContainer;
