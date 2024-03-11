import styles from "./Button.module.css";

const SIZE = {
  Small: styles.SmallButton,
  Medium: styles.MediumButton,
  Large: styles.LargeButton,
  Modal: styles.ModalButton,
  LargeReverse: styles.LargeReverseButton,
};

const Button = ({ size, type, disabled, onClick, children }) => {
  const selectedSize = SIZE[size];
  return (
    <button
      className={selectedSize}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
