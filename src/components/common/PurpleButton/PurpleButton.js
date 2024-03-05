import styles from "./PurpleButton.module.css";

const PurpleButton = ({ children, addClass }) => {
  return (
    <button className={`${styles.PurpleButton} ${addClass}`}>{children}</button>
  );
};

export default PurpleButton;
