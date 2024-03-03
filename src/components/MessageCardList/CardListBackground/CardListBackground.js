import styles from "./CardListBackground.module.css";

const CardListBackground = ({ children, backgroundType }) => {
  const IS_COLOR = ["beige", "purple", "blue", "green"].includes(
    backgroundType,
  );

  const APPLY_IMAGE = {
    backgroundImage: `url('${backgroundType}')`,
    backgroundSize: "cover",
  };

  return (
    <div
      className={`${styles.CardListBackground} ${IS_COLOR ? styles[backgroundType] : ""}`}
      style={IS_COLOR ? {} : APPLY_IMAGE}
    >
      {children}
    </div>
  );
};

export default CardListBackground;
