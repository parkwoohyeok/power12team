import styles from "./MessageCardContainer.module.css";

const MessageCardContainer = ({ children }) => {
  return <div className={styles.CardContainer}>{children}</div>;
};

export default MessageCardContainer;
