import styles from "./CardListBackground.module.css";

const CardListBackground = ({ children, backgroundType }) => {
  return (
    <div className={`${styles.CardListBackground} ${styles[backgroundType]}`}>
      {children}
    </div>
  );
};

export default CardListBackground;
